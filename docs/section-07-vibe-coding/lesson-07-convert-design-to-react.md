# 📘 Bài 7: Convert Design sang React Components

> **Section 7** · Vibe Coding Dự Án Thực Tế  
> **Thời lượng:** ~55 phút  
> **Yêu cầu:** Đã hoàn thành Bài 6

---

## 🎯 Mục tiêu bài học

Sau bài này, bạn sẽ:
- ✅ Biết cách gọi skill `react-components` để quét mockup Stitch và sinh code React sạch.
- ✅ Tạo ra các file Component tĩnh chuẩn React (JSX/TSX) kế thừa CSS variables từ Bài 4.
- ✅ Thiết lập cấu trúc phân rã component logic rõ ràng và dễ bảo trì.

---

## 1. Cơ chế hoạt động của skill `react-components`

Thay vì bạn phải tự gõ thủ công từng thẻ `<div>`, viết từng class CSS, skill `react-components` của Agent sẽ làm việc này thay bạn. Nó sẽ:
1. **Phân tích cấu trúc thiết kế**: Đọc file mockup của Stitch (Lobby và Space).
2. **Phân rã thành phần**: Nhận diện các widget độc lập để tạo thành các file React component riêng biệt.
3. **Sinh code sạch**: Áp dụng các class CSS tương thích với CSS design tokens bạn đã khai báo trong `src/index.css`.

---

## 2. Thực hiện Convert bằng AI Agent

Chúng ta sẽ điều khiển Antigravity IDE quét thiết kế thô và tạo ra code React tĩnh (chưa ghép nối logic nghiệp vụ, mới chỉ có layout và style).

#### 💬 Prompt mẫu sinh code React Components:
> *"Hãy sử dụng skill react-components (hoặc tự động hóa code generation của bạn) đọc mockup Lobby và Space trong .stitch/ để viết các file React component tĩnh.
> Hãy chia cấu trúc thư mục như sau:
> 1. `src/pages/Lobby.tsx` chứa màn hình Lobby hoàn chỉnh.
> 2. `src/pages/Space.tsx` chứa màn hình Space Dashboard với bố cục 3 cột.
> 3. Tách các widget thành các component riêng biệt trong `src/components/`:
>    - `PomodoroTimer.tsx` (Đồng hồ đếm ngược có progress ring SVG)
>    - `AmbientMixer.tsx` (Bộ trộn volume âm thanh)
>    - `LofiPlayer.tsx` (Trình phát nhạc YouTube UI)
>    - `TodoChecklist.tsx` (Danh sách todo)
>    - `SceneSelector.tsx` (Lưới nút chuyển đổi theme cảnh nền)
> 4. Toàn bộ css bổ trợ hãy viết vào `src/index.css` sử dụng các CSS variables đã khai báo ở Bài 4. Hãy đảm bảo giao diện Responsive và có hiệu ứng Glassmorphism hoàn chỉnh."*

---

## 3. Cấu trúc Component được sinh ra

Sau khi Agent thực thi, cấu trúc thư mục dự án của bạn sẽ được lấp đầy:

```
vibespace-app/
├── src/
│   ├── components/
│   │   ├── PomodoroTimer.tsx
│   │   ├── AmbientMixer.tsx
│   │   ├── LofiPlayer.tsx
│   │   ├── TodoChecklist.tsx
│   │   └── SceneSelector.tsx
│   ├── pages/
│   │   ├── Lobby.tsx
│   │   └── Space.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
```

---

## 🛠️ Thực hành bài học

1. Mở Antigravity chat, gửi prompt mẫu ở trên.
2. Đợi Agent quét mockup và tạo ra các file component tương ứng trong folder `src/`.
3. Kiểm tra mã nguồn được tạo ra. Code React cần sạch đẹp, sử dụng TypeScript đúng kiểu dữ liệu, các thẻ HTML có tính semantic cao.
4. Chạy lại dự án:
   ```bash
   npm run dev
   ```
5. Mở trình duyệt để kiểm tra xem giao diện tĩnh của các Widget đã hiển thị đầy đủ và có hiệu ứng kính mờ (Glassmorphic) lung linh như thiết kế chưa.

---

## 🏁 Checkpoint hoàn thành

- [ ] Các component tĩnh `PomodoroTimer.tsx`, `AmbientMixer.tsx`, `LofiPlayer.tsx`, `TodoChecklist.tsx`, `SceneSelector.tsx` được tạo đúng vị trí.
- [ ] Giao diện của Lobby và Space Dashboard hiển thị chính xác, Responsive mượt mà trên trình duyệt (máy tính & tablet).
- [ ] Không có lỗi biên dịch TypeScript hay React build.

---

<div align="center">

[← Bài 6: Tạo UI Màn hình Space](lesson-06-focus-studio-and-widgets.md) · [Mục lục Section 7](README.md) · [Bài 8: GitHub Workflow tự động →](lesson-08-github-workflow.md)

</div>
