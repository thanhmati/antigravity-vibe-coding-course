/* ==========================================================================
   VIBESPACE LOGIC ENGINE (app.js) – v2.0
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. STATE
    // ==========================================
    const STATE = {
        timer: {
            mode: 'work',
            timeLeft: 1500,
            totalDuration: 1500,
            isRunning: false,
            intervalId: null
        },
        audio: {
            mixer: {
                rain:     { url: 'https://raw.githubusercontent.com/karthiknvd/noctune/master/sounds/rain.mp3',     instance: null, volume: 0 },
                campfire: { url: 'https://raw.githubusercontent.com/karthiknvd/noctune/master/sounds/campfire.mp3', instance: null, volume: 0 },
                wind:     { url: 'https://raw.githubusercontent.com/karthiknvd/noctune/master/sounds/wind.mp3',     instance: null, volume: 0 },
                forest:   { url: 'https://raw.githubusercontent.com/karthiknvd/noctune/master/sounds/forest.mp3',   instance: null, volume: 0 }
            }
        },
        scenes: {
            forest: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1920&q=80',
            beach:  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80',
            cafe:   'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1920&q=80',
            cosmic: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=1920&q=80'
        },
        todos: [] // { id, text, completed }
    };

    // Default YouTube lofi video ID
    const DEFAULT_YT_VIDEO_ID = 'lTRiuFIWV54'; // Lofi Chill Mix

    // ==========================================
    // 2. DOM SELECTORS
    // ==========================================
    const timerDigital   = document.getElementById('timer-digital');
    const timerProgress  = document.getElementById('timer-progress');
    const btnPlayPause   = document.getElementById('btn-play-pause');
    const playIcon       = document.getElementById('play-icon');
    const btnReset       = document.getElementById('btn-reset');
    const inputTask      = document.getElementById('input-task');
    const timerAlarm     = document.getElementById('timer-alarm');
    const focusingCount  = document.getElementById('focusing-count');

    const modeButtons = {
        work:  document.getElementById('btn-work'),
        short: document.getElementById('btn-short'),
        long:  document.getElementById('btn-long')
    };

    const bgContainer   = document.getElementById('bg-container');
    const themeButtons  = document.querySelectorAll('.theme-btn');

    // YouTube elements
    const ytUrlInput    = document.getElementById('yt-url-input');
    const btnYtLoad     = document.getElementById('btn-yt-load');
    const ytVolumeSlider = document.getElementById('yt-volume');
    const ytVolNum      = document.getElementById('yt-vol-num');
    const ytVolIcon     = document.getElementById('yt-vol-icon');
    const ytTrackLabel  = document.getElementById('yt-track-label');

    // Ambient sliders
    const sliders = {
        rain:     { input: document.getElementById('vol-rain'),     label: document.getElementById('vol-num-rain') },
        campfire: { input: document.getElementById('vol-campfire'), label: document.getElementById('vol-num-campfire') },
        wind:     { input: document.getElementById('vol-wind'),     label: document.getElementById('vol-num-wind') },
        forest:   { input: document.getElementById('vol-forest'),   label: document.getElementById('vol-num-forest') }
    };

    // Todo elements
    const todoList         = document.getElementById('todo-list');
    const todoEmpty        = document.getElementById('todo-empty');
    const todoNewInput     = document.getElementById('todo-new-input');
    const btnTodoAdd       = document.getElementById('btn-todo-add');
    const btnTodoClearDone = document.getElementById('btn-todo-clear-done');
    const todoDoneCount    = document.getElementById('todo-done-count');
    const todoTotalCount   = document.getElementById('todo-total-count');
    const todoProgressFill = document.getElementById('todo-progress-fill');

    // ==========================================
    // 3. MOCK ONLINE USER COUNT
    // ==========================================
    function updateMockUsersCount() {
        const base = 28;
        const rand = Math.floor(Math.random() * 18);
        if (focusingCount) focusingCount.textContent = `${base + rand} đang tập trung`;
    }
    setInterval(updateMockUsersCount, 15000);

    // ==========================================
    // 4. POMODORO TIMER
    // ==========================================
    const TIMER_DURATIONS = { work: 1500, short: 300, long: 900 };

    function updateTimerDisplay() {
        const minutes = Math.floor(STATE.timer.timeLeft / 60);
        const seconds = STATE.timer.timeLeft % 60;
        const display = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (timerDigital) timerDigital.textContent = display;

        // Update document title while running
        const taskText = inputTask ? inputTask.value.trim() : '';
        const prefix = STATE.timer.isRunning ? `[${display}] ` : '';
        document.title = `${prefix}VibeSpace${taskText ? ' · ' + taskText : ''}`;

        // SVG ring progress
        if (timerProgress) {
            const r = timerProgress.r.baseVal.value;
            const circ = 2 * Math.PI * r;
            timerProgress.style.strokeDasharray = `${circ}`;
            const progress = STATE.timer.timeLeft / STATE.timer.totalDuration;
            timerProgress.style.strokeDashoffset = circ - (progress * circ);
        }
    }

    function startTimer() {
        if (STATE.timer.isRunning) return;
        STATE.timer.isRunning = true;
        if (playIcon) playIcon.className = 'fa-solid fa-pause';

        STATE.timer.intervalId = setInterval(() => {
            if (STATE.timer.timeLeft > 0) {
                STATE.timer.timeLeft--;
                updateTimerDisplay();
            } else {
                handleTimerEnd();
            }
        }, 1000);
    }

    function pauseTimer() {
        if (!STATE.timer.isRunning) return;
        STATE.timer.isRunning = false;
        if (playIcon) playIcon.className = 'fa-solid fa-play';
        clearInterval(STATE.timer.intervalId);
        STATE.timer.intervalId = null;
        updateTimerDisplay();
    }

    function resetTimer() {
        pauseTimer();
        STATE.timer.timeLeft = STATE.timer.totalDuration;
        updateTimerDisplay();
    }

    function handleTimerEnd() {
        pauseTimer();
        if (timerAlarm) {
            timerAlarm.currentTime = 0;
            timerAlarm.play().catch(() => {});
        }
        setTimeout(() => {
            alert(STATE.timer.mode === 'work'
                ? '⏰ Phiên tập trung kết thúc! Nghỉ ngơi một chút nhé.'
                : '✨ Hết giờ nghỉ! Bắt đầu tập trung lại nào.');
            resetTimer();
        }, 200);
    }

    function setTimerMode(mode) {
        STATE.timer.mode = mode;
        STATE.timer.totalDuration = TIMER_DURATIONS[mode];
        STATE.timer.timeLeft = STATE.timer.totalDuration;

        Object.keys(modeButtons).forEach(key => {
            modeButtons[key].classList.toggle('active', key === mode);
        });

        const colors = { work: '#6366f1', short: '#10b981', long: '#8b5cf6' };
        if (timerProgress) timerProgress.style.stroke = colors[mode];

        resetTimer();
    }

    if (btnPlayPause) btnPlayPause.addEventListener('click', () => {
        STATE.timer.isRunning ? pauseTimer() : startTimer();
    });

    if (btnReset) btnReset.addEventListener('click', resetTimer);

    Object.keys(modeButtons).forEach(mode => {
        modeButtons[mode]?.addEventListener('click', () => setTimerMode(mode));
    });

    if (inputTask) inputTask.addEventListener('input', updateTimerDisplay);

    // ==========================================
    // 5. THEME / SCENE SWITCHER
    // ==========================================
    function applyScene(sceneName) {
        if (!STATE.scenes[sceneName]) return;
        bgContainer.style.backgroundImage = `url('${STATE.scenes[sceneName]}')`;
        themeButtons.forEach(btn =>
            btn.classList.toggle('active', btn.getAttribute('data-scene') === sceneName)
        );
        localStorage.setItem('vibespace_scene', sceneName);
    }

    themeButtons.forEach(btn => {
        btn.addEventListener('click', () => applyScene(btn.getAttribute('data-scene')));
    });

    const savedScene = localStorage.getItem('vibespace_scene') || 'forest';
    applyScene(savedScene);

    // ==========================================
    // 6. YOUTUBE MUSIC PLAYER (IFrame Player API)
    // ==========================================

    // ytPlayer is shared between the API callback and the main app
    let ytPlayer = null;
    let ytCurrentVolume = parseInt(localStorage.getItem('vibespace_yt_vol') ?? '80', 10);
    const savedYtId = localStorage.getItem('vibespace_yt_id') || DEFAULT_YT_VIDEO_ID;

    /**
     * YouTube IFrame Player API ready callback.
     * This MUST be a global function (window.onYouTubeIframeAPIReady),
     * which is why we assign it here and expose it globally.
     */
    function initYouTubePlayer(videoId) {
        ytPlayer = new YT.Player('yt-player', {
            height: '100%',
            width: '100%',
            videoId: videoId,
            playerVars: {
                controls: 1,       // Show native seek bar + controls
                loop: 1,
                playlist: videoId, // Required for loop to work on single video
                rel: 0,            // No related videos
                modestbranding: 1,
                autoplay: 0
            },
            events: {
                onReady: (event) => {
                    event.target.setVolume(ytCurrentVolume);
                    updateYtVolumeUI(ytCurrentVolume);
                }
            }
        });
    }

    // Expose as global so YT API can call it after script loads
    window.onYouTubeIframeAPIReady = function () {
        initYouTubePlayer(savedYtId);
    };

    // If YT API already loaded (e.g., hot reload), init immediately
    if (typeof YT !== 'undefined' && YT.Player) {
        initYouTubePlayer(savedYtId);
    }

    /**
     * Update volume icon + label UI
     */
    function updateYtVolumeUI(vol) {
        if (ytVolNum)  ytVolNum.textContent = `${vol}%`;
        if (ytVolumeSlider) ytVolumeSlider.value = vol;
        if (ytVolIcon) {
            ytVolIcon.className = 'fa-solid yt-vol-icon ' +
                (vol === 0 ? 'fa-volume-xmark' :
                 vol < 50  ? 'fa-volume-low'
                           : 'fa-volume-high');
        }
    }

    // Volume slider interaction
    if (ytVolumeSlider) {
        ytVolumeSlider.value = ytCurrentVolume;
        ytVolumeSlider.addEventListener('input', (e) => {
            const vol = parseInt(e.target.value, 10);
            ytCurrentVolume = vol;
            updateYtVolumeUI(vol);
            if (ytPlayer && typeof ytPlayer.setVolume === 'function') {
                ytPlayer.setVolume(vol);
            }
            localStorage.setItem('vibespace_yt_vol', vol);
        });
    }

    // Click icon to mute/unmute
    if (ytVolIcon) {
        ytVolIcon.addEventListener('click', () => {
            const newVol = ytCurrentVolume > 0 ? 0 : 80;
            ytCurrentVolume = newVol;
            updateYtVolumeUI(newVol);
            if (ytPlayer && typeof ytPlayer.setVolume === 'function') {
                ytPlayer.setVolume(newVol);
            }
            localStorage.setItem('vibespace_yt_vol', newVol);
        });
    }

    /**
     * Extracts YouTube video ID from various URL formats.
     */
    function extractYouTubeId(input) {
        if (!input || !input.trim()) return null;
        const text = input.trim();

        if (/^[a-zA-Z0-9_-]{11}$/.test(text)) return text;

        const patterns = [
            /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
            /youtube\.com\/.*[?&]v=([a-zA-Z0-9_-]{11})/,
            /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/
        ];

        for (const pattern of patterns) {
            const match = text.match(pattern);
            if (match) return match[1];
        }
        return null;
    }

    function loadYouTubeVideo(videoId) {
        if (!videoId) return;
        localStorage.setItem('vibespace_yt_id', videoId);

        // Update label
        if (ytTrackLabel) {
            ytTrackLabel.textContent = videoId === DEFAULT_YT_VIDEO_ID
                ? 'Lofi Chill Mix – mặc định'
                : `YouTube ID: ${videoId}`;
        }

        if (ytPlayer && typeof ytPlayer.loadVideoById === 'function') {
            // Use API to load new video (keeps volume & doesn't reload page)
            ytPlayer.loadVideoById({ videoId, loop: 1 });
            ytPlayer.setVolume(ytCurrentVolume);
        } else {
            // Fallback: rebuild player with new videoId
            initYouTubePlayer(videoId);
        }
    }

    function handleYtLoad() {
        const input = ytUrlInput ? ytUrlInput.value : '';
        const videoId = extractYouTubeId(input);
        if (videoId) {
            loadYouTubeVideo(videoId);
            if (ytUrlInput) ytUrlInput.value = '';
        } else if (ytUrlInput) {
            ytUrlInput.style.borderColor = '#ff4444';
            ytUrlInput.placeholder = 'Link không hợp lệ, thử lại!';
            setTimeout(() => {
                ytUrlInput.style.borderColor = '';
                ytUrlInput.placeholder = 'Dán link YouTube vào đây...';
            }, 2500);
        }
    }

    if (btnYtLoad) btnYtLoad.addEventListener('click', handleYtLoad);
    if (ytUrlInput) ytUrlInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleYtLoad();
    });

    // Init volume UI from saved value
    updateYtVolumeUI(ytCurrentVolume);

    // ==========================================
    // 7. AMBIENT SOUND MIXER (Singleton Engine)
    // ==========================================
    function playAmbientSound(key, volume) {
        const sound = STATE.audio.mixer[key];
        if (!sound) return;

        if (!sound.instance) {
            sound.instance = new Audio(sound.url);
            sound.instance.loop = true;
        }

        sound.instance.volume = volume;
        sound.volume = volume;

        if (volume > 0) {
            if (sound.instance.paused) {
                sound.instance.play().catch(e => console.log(`Audio blocked: ${key}`, e));
            }
        } else {
            if (!sound.instance.paused) sound.instance.pause();
        }
    }

    Object.keys(sliders).forEach(key => {
        const { input, label } = sliders[key];
        input.addEventListener('input', (e) => {
            const vol = parseFloat(e.target.value);
            label.textContent = `${Math.round(vol * 100)}%`;
            playAmbientSound(key, vol);
            localStorage.setItem(`vibespace_vol_${key}`, vol);
        });

        const savedVol = localStorage.getItem(`vibespace_vol_${key}`);
        if (savedVol !== null) {
            const vol = parseFloat(savedVol);
            input.value = vol;
            label.textContent = `${Math.round(vol * 100)}%`;
            STATE.audio.mixer[key].volume = vol;
        }
    });

    // Enable audio after first user interaction (browser autoplay policy)
    const enableAudio = () => {
        Object.keys(STATE.audio.mixer).forEach(key => {
            const sound = STATE.audio.mixer[key];
            if (sound.volume > 0) playAmbientSound(key, sound.volume);
        });
        document.removeEventListener('click', enableAudio);
        document.removeEventListener('keydown', enableAudio);
    };
    document.addEventListener('click', enableAudio);
    document.addEventListener('keydown', enableAudio);

    // ==========================================
    // 8. DAILY TODO LIST
    // ==========================================

    function generateId() {
        return `todo_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
    }

    function saveTodos() {
        localStorage.setItem('vibespace_todos', JSON.stringify(STATE.todos));
    }

    function loadTodos() {
        const saved = localStorage.getItem('vibespace_todos');
        if (saved) {
            try { STATE.todos = JSON.parse(saved); }
            catch { STATE.todos = []; }
        }
        renderTodos();
    }

    function renderTodos() {
        todoList.innerHTML = '';

        const total = STATE.todos.length;
        const done  = STATE.todos.filter(t => t.completed).length;

        // Update counters
        if (todoDoneCount)   todoDoneCount.textContent  = done;
        if (todoTotalCount)  todoTotalCount.textContent = total;

        // Progress bar
        if (todoProgressFill) {
            todoProgressFill.style.width = total > 0 ? `${Math.round((done / total) * 100)}%` : '0%';
        }

        // Show/hide empty state
        if (todoEmpty) todoEmpty.classList.toggle('hidden', total > 0);

        // Render items
        STATE.todos.forEach(todo => {
            const li = document.createElement('li');
            li.className = `todo-item${todo.completed ? ' completed' : ''}`;
            li.setAttribute('data-id', todo.id);

            li.innerHTML = `
                <div class="todo-checkbox" role="checkbox" aria-checked="${todo.completed}" tabindex="0" title="Đánh dấu hoàn thành"></div>
                <span class="todo-text" title="${escapeHtml(todo.text)}">${escapeHtml(todo.text)}</span>
                <button class="todo-delete-btn" title="Xóa công việc này" aria-label="Xóa">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            `;

            // Toggle complete on checkbox or text click
            const checkbox = li.querySelector('.todo-checkbox');
            const textEl   = li.querySelector('.todo-text');

            const toggleFn = () => toggleTodo(todo.id);
            checkbox.addEventListener('click', toggleFn);
            textEl.addEventListener('click', toggleFn);

            // Keyboard accessibility on checkbox
            checkbox.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFn();
                }
            });

            // Delete button
            li.querySelector('.todo-delete-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                deleteTodo(todo.id);
            });

            todoList.appendChild(li);
        });
    }

    function escapeHtml(str) {
        const div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    }

    function addTodo(text) {
        const trimmed = text.trim();
        if (!trimmed) return;
        STATE.todos.push({ id: generateId(), text: trimmed, completed: false });
        saveTodos();
        renderTodos();
    }

    function toggleTodo(id) {
        const todo = STATE.todos.find(t => t.id === id);
        if (!todo) return;
        todo.completed = !todo.completed;
        saveTodos();
        renderTodos();
    }

    function deleteTodo(id) {
        STATE.todos = STATE.todos.filter(t => t.id !== id);
        saveTodos();
        renderTodos();
    }

    function clearDoneTodos() {
        const doneCount = STATE.todos.filter(t => t.completed).length;
        if (doneCount === 0) return;
        STATE.todos = STATE.todos.filter(t => !t.completed);
        saveTodos();
        renderTodos();
    }

    // Event listeners for todo
    if (btnTodoAdd) btnTodoAdd.addEventListener('click', () => {
        addTodo(todoNewInput.value);
        todoNewInput.value = '';
        todoNewInput.focus();
    });

    if (todoNewInput) todoNewInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addTodo(todoNewInput.value);
            todoNewInput.value = '';
        }
    });

    if (btnTodoClearDone) btnTodoClearDone.addEventListener('click', clearDoneTodos);

    // Load initial todos
    loadTodos();

    // ==========================================
    // 9. INIT
    // ==========================================
    STATE.timer.totalDuration = TIMER_DURATIONS.work;
    STATE.timer.timeLeft      = STATE.timer.totalDuration;
    updateTimerDisplay();
});
