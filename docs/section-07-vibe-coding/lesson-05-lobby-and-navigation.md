# 📘 Bài 5: Tạo UI Màn hình Sảnh chờ (Lobby UI) với Stitch

> **Section 7** · Vibe Coding Dự Án Thực Tế  
> **Thời lượng:** ~50 phút  
> **Yêu cầu:** Đã hoàn thành Bài 4

---

## 🎯 Mục tiêu bài học

Sau bài này, bạn sẽ:
- ✅ Thiết kế được cấu trúc layout và giao diện tĩnh cho màn hình Sảnh chờ (**Lobby Page**).
- ✅ Sử dụng Stitch MCP để phác thảo các khối thông tin (Welcome, Focus Count, Start CTA).
- ✅ Thiết lập cơ chế định tuyến (React Router hoặc cấu trúc routing đơn giản) để chuyển giữa các trang.

---

## 1. Bản vẽ thiết kế Màn hình Lobby

Trước khi sinh code, chúng ta cần tạo ra mockup thiết kế (wireframe) của trang Lobby. Đây là trang mở đầu giúp người dùng chuẩn bị tinh thần bước vào không gian tập trung.

### Cấu trúc màn hình Lobby:
- **Header**: Logo "VibeSpace" kèm hiệu ứng glow nhẹ.
- **Center Hero Area**: Lời chào thân thiện (ví dụ: *"Chào bạn, hôm nay bạn muốn tập trung vào công việc gì?"*).
- **Live Focus Counter**: Trình hiển thị số lượng người đang online giả lập tập trung (để tạo cảm giác có cộng đồng cùng làm việc).
- **CTA Button**: Nút "Bắt đầu thiền/Tập trung" dẫn trực tiếp đến màn hình `/space` với hiệu ứng hover mượt mà.

---

## 2. Tạo UI Mockup bằng Stitch MCP

Chúng ta sẽ điều khiển AI Agent tương tác với Stitch server thông qua công cụ `stitch` để dựng giao diện.

#### 💬 Prompt mẫu tạo màn hình Lobby:
> *"Hãy sử dụng công cụ Stitch để thiết kế màn hình Lobby (Lobby.md hoặc mockup tương ứng).
> Giao diện Lobby cần tuân thủ phong cách Cyber-Zen trong `.stitch/DESIGN.md`:
> 1. Sử dụng hình nền rừng thông mờ ảo ở lớp dưới.
> 2. Có một Glass card căn giữa màn hình (độ rộng tối đa 600px).
> 3. Bên trong Glass card chứa:
>    - Icon Headset phát sáng nhẹ màu Indigo.
>    - H1 tiêu đề: 'VibeSpace Studio'.
>    - P mô tả: 'Trạm tập trung tối giản và âm thanh chữa lành tâm hồn.'
>    - Một tag nhỏ màu xanh lá: '🟢 38 người đang tập trung cùng bạn'.
>    - Nút CTA lớn 'Bước vào không gian' với background gradient Indigo-Purple, bo tròn góc, có bóng mờ."*

---

## 3. Tạo cấu trúc điều hướng (Routing)

Trong các dự án React, chúng ta cần cài đặt React Router để điều hướng linh hoạt giữa Lobby (`/`) và Space Studio (`/space`).

#### 💬 Prompt cài đặt và cấu hình Routing:
> *"Hãy cài đặt thư viện `react-router-dom` vào dự án:
> `npm install react-router-dom`
> Sau đó cấu hình file `src/App.tsx` để hỗ trợ 2 routes:
> 1. Route `/` hiển thị component Lobby.
> 2. Route `/space` hiển thị component Space (Focus Studio).
> Hãy tạm thời tạo 2 file component rỗng trong `src/pages/Lobby.tsx` và `src/pages/Space.tsx` để kiểm tra routing hoạt động bình thường."*

---

## 🛠️ Thực hành bài học

1. Gọi prompt Stitch ở trên để Agent dựng mockup cho màn hình Lobby.
2. Kiểm tra trực quan xem file mockup đã có đủ thông tin và layout cân đối chưa.
3. Chạy prompt cài đặt `react-router-dom` và setup cấu trúc routing.
4. Mở trình duyệt ở địa chỉ `http://localhost:5173` và click nút CTA hoặc đổi URL thủ công sang `/space` để chắc chắn routing hoạt động ổn định.

---

## 🏁 Checkpoint hoàn thành

- [ ] Mockup thiết kế Lobby được lưu trữ trong thư mục Stitch.
- [ ] Router được cài đặt thành công, chuyển đổi qua lại giữa `/` và `/space` mà không bị load lại trang (SPA).
- [ ] Giao diện thô của Lobby hiển thị đúng thiết kế glassmorphic trên nền tối.

---

<div align="center">

[← Bài 4: Thiết kế Design System](lesson-04-design-system-with-stitch.md) · [Mục lục Section 7](README.md) · [Bài 6: Tạo UI Màn hình Space →](lesson-06-focus-studio-and-widgets.md)

</div>
