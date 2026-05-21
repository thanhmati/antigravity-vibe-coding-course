# 🚀 Hướng Dẫn Step-by-Step: Từ Ý Tưởng → Trạm Tập Trung VibeSpace Studio Hoàn Chỉnh

> **Dự án:** VibeSpace Studio – Trạm tập trung và âm thanh chữa lành tích hợp đồng hồ Pomodoro, bộ trộn âm thanh thiên nhiên đa kênh, trình phát nhạc Lo-fi (iTunes API) và phong cảnh động cá nhân hóa.
> **Công cụ:** Antigravity + Stitch MCP + GitHub MCP + Stitch Skills + Next.js 14 App Router
> **Thời gian ước tính:** 4-5 giờ

---

## 📋 Mục lục

1. [Step 1: Lên ý tưởng & Lập kế hoạch](#step-1)
2. [Step 2: Tạo GitHub Repository](#step-2)
3. [Step 3: Cài đặt Stitch Skills](#step-3)
4. [Step 4: Tạo Stitch Project & Design System (Màu sắc Cyber-Zen)](#step-4)
5. [Step 5: Enhance Prompt & Thiết kế Sảnh chờ (Lobby Entrance Page)](#step-5)
6. [Step 6: Thiết kế các trang chính (Immersive Studio, Stats Journal, Settings)](#step-6)
7. [Step 7: Tạo DESIGN.md Document](#step-7)
8. [Step 8: Convert Design → React Code sử dụng react-components skill](#step-8)
9. [Step 9: Khởi tạo Project Next.js & Tích hợp cấu trúc định tuyến (App Router)](#step-9)
10. [Step 10: GitHub Workflow – Branch & Pull Request tự động bằng GitHub MCP](#step-10)
11. [Step 11: Tích hợp âm thanh đa kênh & APIs (iTunes Lo-fi, Ambient Mixer, ZenQuotes)](#step-11)
12. [Step 12: Polish UI, Responsive & Animations (Breathing Bubble, Scene Selector, deploy)](#step-12)

---

<a id="step-1"></a>
## Step 1: Lên ý tưởng & Lập kế hoạch

### 🎯 Mục tiêu
Xác định rõ ý tưởng cốt lõi của **VibeSpace Studio**, phác thảo các tính năng MVP (Minimum Viable Product), xác định luồng dữ liệu, APIs sẽ sử dụng và lập lịch phát triển chi tiết bằng Agent.

### 📝 Prompt mẫu

Mở Antigravity và nhập prompt sau để Agent hỗ trợ lập kế hoạch chi tiết:

```text
Tôi muốn xây dựng 1 ứng dụng web giúp lập trình viên và người làm việc sáng tạo có thể tập trung tối đa, tên là "VibeSpace Studio" với các yêu cầu sau:

1. Landing/Lobby Page (/): Sảnh chờ huyền ảo với hiệu ứng glassmorphism, nút "Enter Studio" cùng widget xem nhanh báo cáo năng suất tối nay.
2. Immersive Focus Studio (/space): Trang làm việc trung tâm toàn màn hình (full-bleed landscape/animated gradient). Có các widget nổi (glassmorphic cards):
   - Pomodoro Timer: Có nút Start/Pause/Reset, cho phép cấu hình thời gian làm việc/nghỉ ngơi.
   - Ambient Mixer: Bộ trộn âm thanh thiên nhiên đa kênh (tiếng mưa rơi, tiếng sóng biển, tiếng lửa trại bập bùng, tiếng quán cafe xôn xao) chạy song song với thanh trượt âm lượng cho từng kênh.
   - Lofi Player: Kết nối với iTunes Search API để tìm kiếm và phát các bản nhạc Lo-fi chất lượng cao (sử dụng 30-sec preview MP3).
   - Daily Focus Goals: Danh sách TODO nhỏ cho ngày hôm đó.
   - Breathing Bubble: Vòng tròn SVG chuyển động nhịp thở "Hít vào - Giữ - Thở ra" để người dùng giải tỏa căng thẳng.
3. Journal & Stats Page (/journal): Trang hiển thị biểu đồ nhiệt năng suất (Contribution Grid kiểu GitHub), các mốc thời gian hoàn thành (Timeline) và tổng số phút tập trung.
4. Settings Page (/settings): Tuỳ chỉnh sâu về thời gian Pomodoro, lựa chọn nhạc mặc định và cài đặt liên kết hình nền/từ khóa Unsplash.

Hãy tạo cho tôi 1 project plan chi tiết bao gồm:
- Danh sách tính năng MVP & Nice-to-have.
- Tech Stack đề xuất (Next.js 14 App Router, Tailwind CSS, TypeScript, Web Audio API).
- Cấu trúc thư mục mã nguồn chuẩn hóa.
- Lịch trình phát triển chi tiết cho từng buổi học.
```

### ✅ Kết quả mong đợi
- Bản kế hoạch dự án (Project Plan) rõ ràng và cấu trúc thư mục logic.
- Hiểu được cách phân tách các component để thiết kế trên Stitch trước khi đưa vào code.

---

<a id="step-2"></a>
## Step 2: Tạo GitHub Repository

### 🎯 Mục tiêu
Tạo kho lưu trữ trên GitHub để quản lý phiên bản source code chuyên nghiệp bằng cách sử dụng GitHub MCP Server.

### 📝 Prompt mẫu

```text
Hãy sử dụng GitHub MCP Server để tạo 1 repository mới với thông tin:
- Tên repo: vibespace-studio
- Mô tả: "🧘‍♂️ A premium dark-cyberpunk Focus Station with dynamic audio mixing, iTunes Lo-fi integration, and glassmorphic aesthetics. Built using Antigravity, Stitch, and Next.js."
- Trạng thái: Public
- Khởi tạo với README.md
```

### ✅ Kết quả mong đợi
- Repo `vibespace-studio` được tạo thành công trên tài khoản GitHub của bạn.
- Bạn nhận được đường dẫn liên kết đến repo mới.

---

<a id="step-3"></a>
## Step 3: Cài đặt Stitch Skills

### 🎯 Mục tiêu
Cài đặt các Agent Skills quan trọng từ Google Labs để Antigravity có đầy đủ công cụ thiết kế và sinh mã nguồn nhanh chóng.

### 📝 Prompt mẫu

Nhập lệnh sau hoặc yêu cầu Antigravity tự động cài đặt trong terminal:

```bash
# Cài đặt bộ công cụ thiết kế Stitch Design
npx skills add google-labs-code/stitch-skills --skill stitch-design --global

# Cài đặt bộ công cụ thiết kế lặp sinh trang (Multi-page)
npx skills add google-labs-code/stitch-skills --skill stitch-loop --global

# Cài đặt công cụ nâng cấp prompt
npx skills add google-labs-code/stitch-skills --skill enhance-prompt --global

# Cài đặt công cụ phân tích và viết DESIGN.md
npx skills add google-labs-code/stitch-skills --skill design-md --global

# Cài đặt công cụ convert layout thiết kế sang React component
npx skills add google-labs-code/stitch-skills --skill react:components --global
```

### ✅ Kết quả mong đợi
- Các công cụ được đăng ký thành công trên máy cục bộ của bạn.
- Khi gọi các skill như `react-components` hay `design-md`, Antigravity sẽ hiểu và thực thi lập tức.

---

<a id="step-4"></a>
## Step 4: Tạo Stitch Project & Design System (Màu sắc Cyber-Zen)

### 🎯 Mục tiêu
Tạo project trên ứng dụng thiết kế Stitch và thiết lập Design System mang phong cách **Cyber-Zen** (tối giản, huyền bí, sử dụng kính mờ glassmorphism và đèn neon dịu mắt để chống mỏi mắt cho lập trình viên).

### 📝 Prompt mẫu – Tạo Project

```text
Hãy tạo một Stitch project mới với tên "VibeSpace Studio".
```

### 📝 Prompt mẫu – Thiết lập Design System

```text
Hãy tạo Design System cho dự án VibeSpace Studio mang phong cách Cyber-Zen với các định nghĩa:

- Color Palette:
  - Primary (Neon Indigo): #6366F1
  - Secondary (Cyber Emerald): #10B981
  - Accent (Hot Pink): #EC4899
  - Dark Slate (Background): #0B0F19
  - Card Glass (Glassmorphism): #151D30 (opacity 70%) với border mờ (#FFFFFF1A)
  - Text: #F8FAFC (White/Silver), sub-text: #94A3B8 (Slate-400)
- Typography: Font family "Outfit" hoặc "Inter" hiện đại, clean.
- Shape: Góc bo cực mềm (Corner roundness: 16px - `rounded-2xl`).
- Appearance: Dark Mode duy nhất, sử dụng hiệu ứng bóng đổ mịn (soft neon glow).

Sau khi tạo xong, hãy áp dụng thiết kế này cho toàn dự án.
```

### ✅ Kết quả mong đợi
- Stitch Project được thiết lập với đầy đủ các mã màu token và font chữ sẵn sàng cho các trang màn hình tiếp theo.

---

<a id="step-5"></a>
## Step 5: Enhance Prompt & Thiết kế Sảnh chờ (Lobby Entrance Page)

### 🎯 Mục tiêu
Sử dụng công cụ `enhance-prompt` để tối ưu hóa và sinh ra màn hình trang chủ Sảnh chờ (Lobby) tuyệt đẹp có nút chuyển hướng sang Trạm làm việc và xem nhanh trạng thái ngày hôm nay.

### 📝 Prompt mẫu – Tối ưu hóa với Enhance Prompt

```text
Hãy sử dụng skill enhance-prompt để nâng cấp yêu cầu thiết kế trang Lobby của ứng dụng VibeSpace:
"Tạo giao diện sảnh chờ Lobby của VibeSpace Studio. Background tối huyền ảo với các hạt bụi sao bay. Ở giữa có tiêu đề 'VibeSpace' phát sáng neon nhạt, giới thiệu ngắn về trạm sạc năng lượng tập trung. Có nút bấm nổi bật 'Enter Immersive Space' có hiệu ứng hover đổi màu. Góc dưới có widget nhỏ hiển thị thành tích tập trung ngày hôm nay: 120 phút, streak 5 ngày."
```

### 📝 Prompt mẫu – Thiết kế màn hình Lobby trên Stitch

Sử dụng prompt đã được tối ưu hoặc prompt trực quan sau để tạo screen:

```text
Tạo một screen mới trong Stitch project VibeSpace Studio cho trang Lobby Entrance với giao diện sau:

- Background: Gradient chéo huyền ảo từ Deep Blue (#0B0F19) sang Dark Purple (#1E152A).
- Center Hero Block (Glassmorphic Card):
  - Badge nhỏ phía trên: "🎧 VIBESPACE v1.0" (chữ tím neon, viền sáng)
  - Tiêu đề: "Your Sanctuary for Deep Work" (Font Outfit, kích thước lớn)
  - Subtitle: "Layer natural ambient sounds, search custom Lo-fi beats, and visualize breathing cycles in a highly personalizable focus station."
  - CTA Button: "Enter Immersive Space" (Gradient từ #6366F1 sang #EC4899, chữ trắng, bo tròn 16px, hiệu ứng đổ bóng phát sáng tím).
- Quick Stats Panel (Card Glass mỏng bên dưới):
  - Hiển thị 3 số liệu nhanh:
    + "Today: 120 mins"
    + "Current Streak: 5 Days"
    + "Rank: Zen Master 🧘‍♂️"
- Bottom Bar:
  - Hiển thị một câu danh ngôn ngẫu nhiên từ ZenQuotes (Mockup: "Act as if what you do makes a difference. It does. — William James")
  - Các liên kết phụ: [Journal], [Settings], [About]

Thiết bị: Desktop (1920x1080)
Phong cách: Cyber-Zen, glassmorphism cao cấp, typography cuốn hút.
```

### ✅ Kết quả mong đợi
- Màn hình Lobby lộng lẫy được vẽ thành công trên Stitch, các card có viền mờ 1px phản quang đặc trưng.

---

<a id="step-6"></a>
## Step 6: Thiết kế các trang chính (Immersive Studio, Stats Journal, Settings)

### 🎯 Mục tiêu
Thiết kế tiếp 3 màn hình cốt lõi trên Stitch bằng cách sử dụng `stitch-loop` skill để tạo giao diện nhất quán.

### 📝 Prompt mẫu – Thiết kế trang Immersive Focus Studio `/space`

```text
Tạo screen tiếp theo cho trang chính: Immersive Focus Studio (/space). Trang này sẽ là một Dashboard tràn viền (full-bleed) với hình nền phong cảnh động (ví dụ: khu rừng mưa sương mù lấp lánh). Trên đó có 4 Float Widget mờ (glassmorphic cards):

1. WIDGET 1: Pomodoro Timer (Phía trên bên trái)
   - Vòng tròn đếm ngược lớn hiển thị "25:00".
   - 3 Nút tròn nhỏ: Play/Pause/Reset.
   - Thẻ hiển thị trạng thái hiện tại: "Focus Time".

2. WIDGET 2: Ambient Mixer (Phía dưới bên trái)
   - Tiêu đề: "Soundscapes"
   - 4 Thanh âm lượng ngang dạng trượt (Volume Slider) tương ứng với:
     + 🌧️ Raindrop (Mưa rơi)
     + 🔥 Crackling Fire (Lửa trại)
     + 🌊 Ocean Waves (Sóng biển)
     + ☕ Cozy Cafe (Quán cafe)
   - Mỗi kênh có nút Mute/Unmute nhanh.

3. WIDGET 3: Lofi Player & Search (Phía trên bên phải)
   - Một ô Input tìm kiếm: "Search lo-fi playlists (e.g. synthwave, jazz, chill)..."
   - Ảnh bìa đĩa CD đang quay mượt mà (Mockup đĩa nhạc Lo-fi)
   - Tên bài hát: "Late Night Coding" - Artist: "Chillhop Beats"
   - Thanh tiến trình phát nhạc & các nút Media Control (Prev, Play, Next).

4. WIDGET 4: Todo Checklist (Phía dưới bên phải)
   - Tiêu đề: "Deep Focus Goals"
   - Danh sách 3 công việc nhỏ có checkbox:
     + [x] Refactor core state
     + [ ] Review Stitch documentation
     + [ ] Drink 500ml water
   - Nút "Add Task" nhanh ở dưới.

5. CENTER FOOTER: Breathing Bubble
   - Vòng tròn đồng tâm có hoạt ảnh to nhỏ đều đặn để thở thiền.
   - Nhãn chữ động: "Breathe In (4s)" / "Hold (4s)" / "Breathe Out (4s)".

Thiết bị: Desktop (1920x1080), tối ưu tối đa không gian hiển thị phong cảnh nền.
```

### 📝 Prompt mẫu – Thiết kế các trang /journal và /settings

```text
Hãy thiết kế tiếp 2 screen cho VibeSpace Studio trong cùng một project Stitch:

1. Trang Productivity Journal (/journal):
   - Header có nút "Back to Space".
   - Grid bản đồ nhiệt (Contribution Grid) gồm 52 tuần x 7 ngày, đổi màu sắc từ tím nhạt đến tím đậm neon dựa trên thời gian tập trung mỗi ngày.
   - Bảng Timeline chi tiết bên cạnh: "21:00 - Hoàn thành 1 phiên Pomodoro (25m)", "19:30 - Thêm 3 task mới".
   - Biểu đồ tròn hiển thị tỉ lệ phân bổ âm thanh (ví dụ: Rain 60%, Lofi 40%).

2. Trang Quick Settings (/settings):
   - Menu cấu hình trực quan:
     + Pomodoro Settings: Thay đổi thời lượng Focus (15/25/45m), Short Break (5/10m), Long Break (15/30m).
     + Theme Customizer: Lựa chọn phong cảnh nền mặc định (Rừng mưa xanh, Cyberpunk City ban đêm, Ga tàu hoàng hôn).
     + Custom Scene URL: Ô nhập link ảnh/video động bất kỳ từ Unsplash hoặc Youtube.
     + Local Cache: Nút "Reset All Data" để xóa cấu hình lưu trữ.

Thiết kế đồng bộ phong cách Cyber-Zen với sảnh chờ Lobby và Focus Studio.
```

### ✅ Kết quả mong đợi
- Stitch đã lưu trữ đầy đủ 4 màn hình của dự án VibeSpace.
- Các layer được đặt tên rõ ràng, sẵn sàng để convert.

---

<a id="step-7"></a>
## Step 7: Tạo DESIGN.md Document

### 🎯 Mục tiêu
Chụp ảnh cấu trúc Design System từ Stitch sang tài liệu đặc tả `DESIGN.md` để hướng dẫn AI Agent thế hệ tiếp theo hoặc bản thân bạn duy trì giao diện nhất quán khi bổ sung code.

### 📝 Prompt mẫu

```text
Hãy sử dụng skill design-md để phân tích dự án Stitch "VibeSpace Studio" và tạo file DESIGN.md lưu tại thư mục `.stitch/` của dự án. 

Tài liệu này cần làm rõ:
1. Các thông số CSS Variables cho Dark Cyber-Zen Theme.
2. Cách xây dựng lớp nền Glassmorphism (backdrop-filter blur, border mỏng phản quang, background mờ).
3. Thiết lập hoạt ảnh chuyển động (đĩa CD xoay, bubble thở co giãn, nhấp nháy đèn neon).
4. Các quy tắc khoảng cách (padding, margin) và hệ thống layout Grid/Absolute phục vụ cho việc xếp đè các floating widget trên nền hình nền.
```

### ✅ Kết quả mong đợi
- File `.stitch/DESIGN.md` được tạo với thông tin cấu trúc hệ thống rõ ràng và đầy đủ.

---

<a id="step-8"></a>
## Step 8: Convert Design → React Code

### 🎯 Mục tiêu
Chuyển hóa toàn bộ giao diện tĩnh từ các screen trên Stitch thành code cấu trúc React Component có sử dụng TypeScript và Tailwind CSS.

### 📝 Prompt mẫu

```text
Hãy chạy skill react-components để chuyển đổi toàn bộ 4 screens của dự án "VibeSpace Studio" trên Stitch thành mã nguồn React/Next.js:

Yêu cầu chi tiết:
- Sử dụng TypeScript hoàn toàn.
- Phân chia thành các component tái sử dụng độc lập tại thư mục `src/components/`:
  + `PomodoroTimer.tsx` (Logic đếm ngược, chuyển đổi giữa focus/break)
  + `AmbientMixer.tsx` (Giao diện volume sliders cho âm thanh thiên nhiên)
  + `LofiPlayer.tsx` (Trình phát nhạc tích hợp khung tìm kiếm)
  + `TodoChecklist.tsx` (Danh sách nhiệm vụ có tương tác check)
  + `BreathingBubble.tsx` (Hoạt ảnh bong bóng thở bằng SVG)
  + `SceneSelector.tsx` (Bộ chuyển đổi hình nền nhanh hoặc qua URL)
  + `ThemeToggle.tsx` (Tuỳ chỉnh giao diện)
- Sử dụng Tailwind CSS để dựng cấu trúc mờ mượt mà: `bg-slate-900/60 backdrop-blur-md border border-white/10 shadow-2xl shadow-indigo-500/10`.
```

### ✅ Kết quả mong đợi
- Toàn bộ các files component được tạo ra tại thư mục tương ứng trong workspace, code rõ ràng và sạch sẽ.

---

<a id="step-9"></a>
## Step 9: Khởi tạo Project Next.js & Tích hợp cấu trúc định tuyến

### 🎯 Mục tiêu
Khởi tạo dự án Next.js 14 bằng `npx -y create-next-app` và cấu hình các route `/`, `/space`, `/journal`, `/settings` để liên kết các components lại với nhau.

### 📝 Prompt mẫu – Khởi tạo dự án Next.js 14

```text
Hãy chạy lệnh không tương tác để khởi tạo một ứng dụng Next.js mới có tên `vibespace-dashboard` trong thư mục hiện tại của workspace:
- Sử dụng TypeScript: Yes
- Sử dụng ESLint: Yes
- Sử dụng Tailwind CSS: Yes
- Thư mục src/: Yes
- App Router: Yes
- Customize default import alias: @/* (Yes)

Sau khi tạo xong, hãy xóa hết code mặc định của trang `src/app/page.tsx` và `src/app/globals.css` để chuẩn bị tích hợp VibeSpace.
```

### 📝 Prompt mẫu – Tích hợp Route và Styles

```text
Hãy viết cấu trúc định tuyến cho Next.js 14 App Router tương ứng với VibeSpace:
1. Tạo trang chính Sảnh chờ tại `src/app/page.tsx`.
2. Tạo trang tập trung chính tại `src/app/space/page.tsx`.
3. Tạo trang nhật ký tại `src/app/journal/page.tsx`.
4. Tạo trang cấu hình cài đặt tại `src/app/settings/page.tsx`.
5. Tạo thanh điều hướng Header chung tại `src/components/Header.tsx` hiển thị ở mọi trang (trừ trang `/space` cần ẩn đi để người dùng tập trung hoàn toàn - có thể dùng hook `usePathname` để ẩn Header).

Cập nhật `src/app/globals.css` để thêm các utility phục vụ cho Cyber-Zen Theme, glassmorphism và các animations:
```css
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}
.glass-panel {
  background: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
```
```

### ✅ Kết quả mong đợi
- Ứng dụng Next.js có cấu trúc phân trang hoàn thiện.
- Chạy thử local `npm run dev` không phát sinh lỗi biên dịch và các trang hiển thị đúng giao diện khung.

---

<a id="step-10"></a>
## Step 10: GitHub Workflow – Branch & Pull Request

### 🎯 Mục tiêu
Sử dụng GitHub MCP để tạo nhánh làm việc mới, commit code ban đầu và gửi Pull Request lên GitHub, giả lập quy trình làm việc thực tế tại các công ty công nghệ lớn.

### 📝 Prompt mẫu

```text
Hãy thực hiện quy trình Git chuẩn hóa bằng GitHub MCP Server:
1. Tạo một branch mới tên là `feature/vibespace-core` tách từ branch `main`.
2. Commit toàn bộ cấu trúc file, component tĩnh và cấu hình routing của dự án VibeSpace Studio vừa tạo lên branch này.
3. Tạo một Pull Request trên GitHub từ `feature/vibespace-core` vào `main`:
   - Title: "feat: Initialize VibeSpace Studio core dashboard and routes"
   - Description: Mô tả chi tiết việc xây dựng 4 trang chính theo phong cách Cyber-Zen, sử dụng Glassmorphism và cấu hình Next.js 14 App Router.
```

### ✅ Kết quả mong đợi
- Branch mới được đẩy lên GitHub.
- Nhận được link Pull Request để kiểm duyệt code.

---

<a id="step-11"></a>
## Step 11: Tích hợp âm thanh đa kênh & APIs (iTunes Lo-fi, Ambient Mixer, ZenQuotes)

### 🎯 Mục tiêu
Biến ứng dụng tĩnh thành một ứng dụng sống động bằng việc tích hợp các API mở và Web Audio API / HTML5 Audio:
1. Gọi **iTunes API** để tìm kiếm và phát nhạc Lo-fi động.
2. Sử dụng các file audio tự do để phối trộn âm lượng đa kênh.
3. Fetch danh ngôn từ **ZenQuotes API** ở footer trang chủ.
4. Đảm bảo trạng thái âm lượng, playlist và cấu hình timer được lưu giữ trong `localStorage`.

### 📝 Prompt mẫu – Tích hợp LofiPlayer & iTunes API

```text
Hãy lập trình logic gọi iTunes Search API cho component `src/components/LofiPlayer.tsx`:
- URL endpoint: `https://itunes.apple.com/search?term=lofi+chill&media=music&limit=25` (Cho phép thay đổi từ khóa tìm kiếm).
- Trích xuất: Lấy tên bài hát (`trackName`), nghệ sĩ (`artistName`), ảnh bìa album lớn (`artworkUrl100` nâng lên ảnh kích thước lớn hơn bằng cách thay thế `100x100bb` thành `400x400bb`), và file nghe thử MP3 (`previewUrl`).
- Viết các hàm điều khiển phát nhạc: Play, Pause, Next, Prev, thay đổi âm lượng nhạc Lo-fi.
- Thêm hiệu ứng quay đĩa CD: Khi nhạc phát (`isPlaying`), ảnh album sẽ xoay liên tục (`animate-spin-slow`), khi pause thì dừng xoay.
```

### 📝 Prompt mẫu – Lập trình AmbientMixer (Tiếng ồn trắng)

```text
Cập nhật component `src/components/AmbientMixer.tsx` sử dụng HTML5 Audio để tải và phát song song 4 luồng âm thanh thiên nhiên lặp đi lặp lại (loop). 

Các luồng âm thanh thiên nhiên sử dụng các URL CDN tự do:
- Rain (Mưa rơi): `https://assets.mixkit.co/active_storage/sfx/2433/2433-500.wav` hoặc các link tương đương.
- Fire (Lửa trại): `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3` (Thay thế bằng nguồn âm thanh sfx campfire lặp vòng).
- Waves (Sóng biển): `https://assets.mixkit.co/active_storage/sfx/2501/2501-500.wav`
- Cafe (Quán cafe): `https://assets.mixkit.co/active_storage/sfx/1074/1074-500.wav`

Viết logic cho thanh trượt âm lượng:
- Người dùng có thể kéo volume từ 0% đến 100% độc lập cho từng kênh.
- Khi người dùng điều chỉnh âm lượng, hãy cập nhật đối tượng Audio tương ứng và lưu giá trị âm lượng này vào `localStorage` dưới dạng một Object để khi tải lại trang, cấu hình âm thanh tự động phục hồi.
```

### 📝 Prompt mẫu – Lập trình PomodoroTimer & LocalStorage

```text
Cập nhật component `src/components/PomodoroTimer.tsx` với logic đếm ngược chuẩn:
- Quản lý 3 trạng thái: 'focus' (25 phút), 'short_break' (5 phút), 'long_break' (15 phút).
- Khi thời gian chạy hết 0:00, tự động phát tiếng chuông sfx báo hiệu nhẹ nhàng, cộng 1 điểm phiên làm việc thành công vào `localStorage` (để hiển thị lên biểu đồ Contribution Grid tại `/journal`), và chuyển trạng thái tiếp theo.
- Lắng nghe cấu hình thời gian từ trang `/settings` qua Context hoặc lưu trữ đồng bộ từ `localStorage`.
```

### 💡 Tham khảo Code mẫu (Tích hợp API và Âm thanh)

Dưới đây là gợi ý viết code cho `LofiPlayer.tsx` tích hợp iTunes API:

```tsx
"use client";

import React, { useState, useEffect, useRef } from "react";

interface Track {
  trackId: number;
  trackName: string;
  artistName: string;
  artworkUrl100: string;
  previewUrl: string;
}

export default function LofiPlayer() {
  const [query, setQuery] = useState("lofi chill");
  const [tracks, setTracks] = useState<Track[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    fetchTracks();
  }, []);

  const fetchTracks = async (searchWord = "lofi chill") => {
    try {
      const res = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(searchWord)}&media=music&limit=15`);
      const data = await res.json();
      const formattedTracks = data.results.map((item: any) => ({
        trackId: item.trackId,
        trackName: item.trackName,
        artistName: item.artistName,
        artworkUrl100: item.artworkUrl100 ? item.artworkUrl100.replace("100x100bb", "400x400bb") : "",
        previewUrl: item.previewUrl,
      }));
      setTracks(formattedTracks);
      setCurrentIndex(0);
      setIsPlaying(false);
    } catch (err) {
      console.error("Lỗi fetch iTunes:", err);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    if (tracks.length > 0 && tracks[currentIndex]?.previewUrl) {
      audioRef.current = new Audio(tracks[currentIndex].previewUrl);
      audioRef.current.volume = volume;
      audioRef.current.loop = true;
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log("User interaction required", e));
      }
    }
    return () => {
      if (audioRef.current) audioRef.current.pause();
    };
  }, [currentIndex, tracks]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log(e));
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % tracks.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  return (
    <div className="glass-panel p-6 rounded-2xl flex flex-col items-center w-full max-w-sm">
      <div className="flex gap-2 mb-4 w-full">
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search lo-fi genre..."
          className="bg-slate-800/80 border border-white/10 rounded-xl px-3 py-1.5 text-sm flex-1 focus:outline-none focus:border-indigo-500 text-white"
        />
        <button onClick={() => fetchTracks(query)} className="bg-indigo-600 hover:bg-indigo-500 rounded-xl px-3 py-1.5 text-sm text-white font-medium">Search</button>
      </div>

      {tracks.length > 0 && (
        <div className="flex flex-col items-center text-center">
          <div className="relative w-40 h-40 mb-4 rounded-full overflow-hidden border-4 border-slate-800/80 shadow-2xl flex items-center justify-center">
            {/* Đĩa CD Xoay */}
            <img 
              src={tracks[currentIndex].artworkUrl100 || "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400"} 
              alt="Artwork" 
              className={`w-full h-full object-cover transition-transform duration-1000 ${isPlaying ? "animate-spin-slow" : ""}`}
            />
            <div className="absolute w-8 h-8 bg-slate-900 rounded-full border-2 border-white/20"></div>
          </div>
          <h4 className="font-bold text-white text-lg truncate w-60">{tracks[currentIndex].trackName}</h4>
          <p className="text-slate-400 text-sm mb-4 truncate w-60">{tracks[currentIndex].artistName}</p>

          <div className="flex items-center gap-4">
            <button onClick={handlePrev} className="text-slate-400 hover:text-white text-xl">⏮</button>
            <button onClick={togglePlay} className="bg-indigo-500 hover:bg-indigo-400 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg shadow-indigo-500/20">{isPlaying ? "⏸" : "▶"}</button>
            <button onClick={handleNext} className="text-slate-400 hover:text-white text-xl">⏭</button>
          </div>
        </div>
      )}
    </div>
  );
}
```

---

<a id="step-12"></a>
## Step 12: Polish UI, Responsive & Animations

### 🎯 Mục tiêu
Làm đẹp tối đa dự án ("wow factor") bằng các hiệu ứng chuyển động thở của thiền định, cơ chế đổi hình nền phong cảnh, thiết kế tương thích trên thiết bị di động và triển khai (Deploy) sản phẩm.

### 📝 Prompt mẫu – Lập trình BreathingBubble (SVG Breath)

```text
Cập nhật component `src/components/BreathingBubble.tsx` để hiển thị một quả bóng nước SVG phát sáng tuyệt đẹp:
- Quả bóng nước có màu tím mờ mịn và bóng đổ phát sáng neon.
- Sử dụng CSS Keyframe Animations để tự động co giãn kích thước vòng tròn theo chu kỳ:
  + 4 giây phóng to dần (Hít vào - Scale 1.25)
  + 4 giây giữ nguyên kích thước (Giữ hơi thở)
  + 4 giây thu nhỏ dần (Thở ra - Scale 0.85)
- Thêm một nhãn văn bản ở trung tâm hiển thị trạng thái hơi thở hiện tại chạy đồng hồ đếm lặp 12 giây.
```

### 📝 Prompt mẫu – Lập trình Bộ chọn phong cảnh nền (SceneSelector)

```text
Cập nhật component `src/components/SceneSelector.tsx` và cấu trúc trang `/space`:
- Trang `/space` sẽ bọc trong một container có hình nền động toàn màn hình.
- `SceneSelector` cho phép lựa chọn giữa các hình nền:
  + Forest: `https://images.unsplash.com/photo-1511497584788-876760111969?w=1920&q=80` (Rừng thông sương mù)
  + Rain City: `https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?w=1920&q=80` (Thành phố mưa rơi yên ả)
  + Retro Sunset: `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=80` (Mặt trời lặn hoàng hôn 3D)
- Thêm ô Input cho phép dán bất kỳ URL hình ảnh/GIF nào bên ngoài làm hình nền làm việc.
- Lưu cấu hình hình nền hoạt động vào `localStorage` để tự động tải lại trong lần đăng nhập tiếp theo.
```

### 📝 Prompt mẫu – Tương thích Mobile & Hiệu ứng chuyển động trang

```text
Hãy tối ưu hóa giao diện VibeSpace để chạy mượt mà trên Mobile và Tablet:
- Trên Mobile (màn hình dọc < 768px): Thay vì xếp đè các floating widget lên nhau gây rối mắt, hãy ẩn bớt và chỉ hiển thị 1 thanh điều khiển chuyển đổi giữa các tab: [Timer ⏱️] - [Mixer 🎵] - [Player 🎧] - [Goals 📋]. 
- Quả bóng thở Breathing Bubble được thu nhỏ đặt tại góc màn hình hoặc ẩn đi.
- Sử dụng thư viện `framer-motion` (hoặc viết CSS transition) để tạo hiệu ứng mượt mà khi người dùng nhấn chuyển trang từ Lobby sang Focus Space (hiệu ứng trượt lướt mờ nhạt dần - Fade & Zoom Out).
```

### 🚀 Polish & Đẩy Code Lên GitHub để Merge hoàn thiện

```text
Tạo branch `feature/polish-animations-v1` bằng GitHub MCP.
Commit toàn bộ code hoàn chỉnh có tích hợp API nhạc, mixer âm lượng, SVG thở thiền, responsive và background switcher.
Tạo Pull Request và thực hiện Squash Merge vào branch `main`.
Gắn thẻ phiên bản dự án là `v1.0.0` để kỷ niệm sản phẩm Vibe Coding tuyệt hảo đầu tiên của bạn!
```

---

## 🎉 Tổng kết Dự Án VibeSpace Studio

### Các cột mốc đạt được:

| Step | Công cụ chính | Giá trị đạt được |
|------|---------------|------------------|
| 1 | Antigravity | Project Plan chi tiết cho Focus Station |
| 2 | GitHub MCP | Tạo Repository `vibespace-studio` |
| 4 | Stitch MCP | Thiết lập Design System Cyber-Zen mờ ảo |
| 5-6 | Stitch + enhance-prompt | Vẽ 4 trang giao diện Dashboard lộng lẫy |
| 7 | `design-md` skill | Viết file `DESIGN.md` chuẩn thiết kế |
| 8 | `react-components` | Convert layout Stitch sang React component TSX |
| 9 | Terminal / Next.js | Tạo repo code Next.js 14 App Router, set Route |
| 11 | Web Audio API / iTunes API | Lập trình tính năng mixer đa kênh, nhạc Lo-fi động |
| 12 | CSS Keyframes / local | Hoạt ảnh SVG chu kỳ thở, đổi hình nền Unsplash |

### 🔑 Chìa khóa thành công khi Vibe Coding:
1. **Lắng nghe AI**: Vibe Coding không phải là lập trình thụ động, hãy để AI Agent tư vấn các API và cách giải quyết logic bất đồng bộ tối ưu nhất.
2. **Khởi đầu từ Design System**: Một ứng dụng "wow" bắt đầu từ những mã màu chuẩn xác, hệ thống đổ bóng kính mờ (glassmorphic shadow) và font chữ cao cấp.
3. **Quản lý State thông minh**: Việc kết hợp âm thanh đa luồng đòi hỏi quản lý ref/state tốt để tránh bị rò rỉ âm thanh hoặc chạy trùng lặp khi người dùng chuyển trang.
4. **Deploy và tự hào**: Hãy chụp hình giao diện và quay video ngắn để chia sẻ thành tích của bạn với cộng đồng! 🚀
