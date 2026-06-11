# 📘 Bài 9: Tích hợp Logic & Kết nối APIs

> **Section 7** · Vibe Coding Dự Án Thực Tế  
> **Thời lượng:** ~45 phút  
> **Yêu cầu:** Đã hoàn thành Bài 8

---

## 🎯 Mục tiêu bài học

Sau bài này, bạn sẽ:
- ✅ Tích hợp thành công logic quản lý trạng thái (**State management**) vào các component React.
- ✅ Cài đặt vòng lặp đếm ngược Pomodoro đồng bộ cùng hoạt ảnh SVG.
- ✅ Xây dựng bộ trộn âm thanh thiên nhiên đa kênh và kết nối YouTube Player IFrame API.
- ✅ Quản lý dữ liệu Todo và cấu hình ảnh nền bền vững với `localStorage`.

---

## 1. Bản đồ Logic Nghiệp vụ (Business Logic)

Chúng ta cần chuyển dịch toàn bộ logic từ ứng dụng Vanilla cũ (`vibespace/app.js`) sang kiến trúc hướng component của React:

```
                  ┌─────────────────────────────┐
                  │      React App State        │
                  └──────┬───────────────┬──────┘
                         │               │
        ┌────────────────▼─────┐   ┌─────▼────────────────┐
        │   Interactive UI     │   │   Audio & Media API  │
        │ - Todo Checklist     │   │ - HTML5 Audio Mixer  │
        │ - Background Scenes  │   │ - YouTube Player API │
        │ - Pomodoro Timer     │   │ - LocalStorage Save  │
        └──────────────────────┘   └──────────────────────┘
```

---

## 2. Hướng dẫn chi tiết từng Widget

### A. Đồng hồ Pomodoro Timer (`src/components/PomodoroTimer.tsx`)
Cần tính toán tọa độ SVG `strokeDashoffset` dựa trên tỷ lệ phần trăm thời gian còn lại:
```typescript
const circ = 2 * Math.PI * 125; // r = 125
const strokeDashoffset = circ - (timeLeft / totalDuration) * circ;
```

### B. Bộ trộn âm thanh Ambient Mixer (`src/components/AmbientMixer.tsx`)
Sử dụng đối tượng `Audio` của HTML5. Lưu ý cơ chế Lazy-load (chỉ khởi tạo khi người dùng kéo volume > 0) để tuân thủ chính sách Autoplay của trình duyệt.
```typescript
const audioRef = useRef<Record<string, HTMLAudioElement | null>>({});
// Khởi tạo audio khi cần thiết
if (!audioRef.current[soundKey]) {
  audioRef.current[soundKey] = new Audio(soundUrl);
  audioRef.current[soundKey].loop = true;
}
```

### C. Trình phát nhạc YouTube (`src/components/LofiPlayer.tsx`)
Nhúng script `https://www.youtube.com/iframe_api` và liên kết với đối tượng `window.YT.Player` để điều khiển phát, dừng, chỉnh volume.

### D. Todo List & Scene Switcher
Quản lý mảng `todos` bằng React `useState`, tự động đồng bộ hóa sang `localStorage` qua `useEffect`.

---

## 3. Thực hiện Tích hợp bằng AI Agent

Gửi các prompt mẫu dưới đây cho AI Agent của bạn để thực hiện ghép nối logic cho từng file component.

#### 💬 Prompt mẫu tích hợp Pomodoro & Todo:
> *"Hãy hoàn thiện logic nghiệp vụ cho 2 components:
> 1. `src/components/PomodoroTimer.tsx`:
>    - Thiết lập đếm ngược thời gian giảm dần mỗi giây (dùng setInterval).
>    - Hỗ trợ 3 chế độ: Tập trung (25 phút), Nghỉ ngắn (5 phút), Nghỉ dài (15 phút).
>    - Tính toán SVG ring progress chính xác.
>    - Cập nhật Document Title trình duyệt theo dạng '[25:00] VibeSpace'.
>    - Phát âm thanh chuông báo khi hết giờ.
> 2. `src/components/TodoChecklist.tsx`:
>    - Hỗ trợ CRUD todo (thêm, sửa, xóa, đánh dấu hoàn thành).
>    - Lưu và đọc dữ liệu từ LocalStorage.
>    - Có progress bar hiển thị phần trăm hoàn thành nhiệm vụ."*

#### 💬 Prompt mẫu tích hợp Ambient Mixer & YouTube Player:
> *"Hãy hoàn thiện logic nghiệp vụ cho 2 components âm thanh:
> 1. `src/components/AmbientMixer.tsx`:
>    - Quản lý 4 kênh âm thanh: Rain, Campfire, Wind, Forest.
>    - Dùng HTML5 Audio. Chỉ play và tải âm thanh khi âm lượng > 0 (Lazy-load).
>    - Lưu trạng thái âm lượng của từng slider vào LocalStorage để ghi nhớ cho lần sau.
> 2. `src/components/LofiPlayer.tsx`:
>    - Nhúng YouTube IFrame Player API.
>    - Có ô input để dán URL YouTube, tự động trích xuất Video ID bằng RegExp (hỗ trợ url dạng watch, share, short).
>    - Đồng bộ hóa thanh trượt Volume Slider trong React với API volume của YouTube player."*

---

## 🛠️ Thực hành bài học

1. Chạy prompt tích hợp Pomodoro và Todo, kiểm tra các file sau khi Agent chỉnh sửa.
2. Chạy prompt tích hợp Ambient Mixer và YouTube Player.
3. Test thử các tính năng trên trình duyệt:
   - Kéo thử thanh trượt Ambient sound xem tiếng mưa/ tiếng lửa trại có phát ra không (nhớ click chuột lên trang web một lần trước để bypass autoplay policy).
   - Dán một link YouTube bất kỳ để kiểm tra nhạc có phát và điều chỉnh được âm lượng không.
   - Thử đánh dấu hoàn thành một Todo xem progress bar có chạy lên không.

---

## 🏁 Checkpoint hoàn thành

- [ ] Pomodoro Timer đếm ngược chính xác, phát chuông báo khi về 0.
- [ ] Ambient Mixer phát nhạc và lưu volume vào localStorage.
- [ ] YouTube Player phát nhạc thông qua URL truyền vào.
- [ ] Todo checklist cập nhật thanh tiến trình % tự động.

---

<div align="center">

[← Bài 8: GitHub Workflow](lesson-08-github-workflow.md) · [Mục lục Section 7](README.md) · [Bài 10: Tối ưu UI & Animations →](lesson-10-polish-ui-and-animations.md)

</div>
