# 📘 Bài 4: Thiết kế Design System với Stitch

> **Section 7** · Vibe Coding Dự Án Thực Tế  
> **Thời lượng:** ~45 phút  
> **Yêu cầu:** Đã hoàn thành Bài 3

---

## 🎯 Mục tiêu bài học

Sau bài này, bạn sẽ:
- ✅ Thiết lập được **Design System** đồng bộ cho VibeSpace bằng công cụ Stitch.
- ✅ Định nghĩa bảng màu **Cyber-Zen** và các thông số Glassmorphism trong `.stitch/DESIGN.md`.
- ✅ Giúp AI Agent hiểu sâu sắc ngôn ngữ thiết kế để sinh CSS thống nhất, không bị lỗi lệch màu hoặc font chữ.

---

## 1. Ngôn ngữ thiết kế: Cyber-Zen là gì?

Để tạo nên một ứng dụng thư giãn, giải tỏa áp lực nhưng vẫn mang hơi thở công nghệ hiện đại, chúng ta sẽ áp dụng phong cách **Cyber-Zen**:
- **Zen (Thiền định)**: Sử dụng các gam màu dịu mát, mềm mại phỏng theo thiên nhiên (xanh lá của rừng, xanh dương của đại dương, vàng hoàng hôn ấm áp).
- **Cyber (Công nghệ)**: Sử dụng các đường viền phát sáng nhẹ (glow borders), phông nền tối kết hợp bộ lọc làm mờ kính cường lực (**Glassmorphism**).

---

## 2. Tạo tài liệu `DESIGN.md` bằng Stitch

Tài liệu `DESIGN.md` nằm trong thư mục `.stitch/` đóng vai trò là "hiến pháp thiết kế" của dự án. AI Agent sẽ luôn đọc file này trước khi tạo UI screens hoặc viết CSS.

### Cách thực hiện với skill `design-md`
Chúng ta sẽ kích hoạt skill `design-md` của Stitch để sinh file thiết kế tự động.

#### 💬 Prompt mẫu tạo Design System:
> *"Hãy sử dụng công cụ Stitch (hoặc skill design-md) để tạo file `.stitch/DESIGN.md` định nghĩa Design System cho dự án VibeSpace. Yêu cầu chi tiết:
> 1. Palette màu (Cyber-Zen Theme):
>    - Primary (Work mode): Indigo (`#6366f1` / HSL 239, 84%, 67%)
>    - Secondary (Short break): Emerald (`#10b981` / HSL 160, 84%, 39%)
>    - Accent (Long break): Violet (`#8b5cf6` / HSL 262, 89%, 66%)
>    - Background: Phông tối bán trong suốt đè lên ảnh Unsplash.
> 2. Typography: font chính là 'Outfit' (sans-serif), hỗ trợ scale từ text nhỏ đến h1 siêu lớn cho đồng hồ đếm ngược.
> 3. Phong cách Glassmorphism:
>    - Background card: `rgba(255, 255, 255, 0.08)`
>    - Backdrop-filter: `blur(16px)`
>    - Border: `1px solid rgba(255, 255, 255, 0.1)`
>    - Box-shadow: Sleek shadow chống lóa mắt.
> 4. Hiệu ứng Hover & Active: smooth transitions 0.3s."*

---

## 3. Chuyển đổi DESIGN.md thành CSS Variables

Sau khi Agent tạo xong file `.stitch/DESIGN.md`, chúng ta cần hướng dẫn Agent khai báo các design tokens này vào file `src/index.css` dưới dạng CSS Variables. Điều này giúp code React dễ dàng gọi trực tiếp.

#### 💬 Prompt mẫu chuyển đổi Design tokens:
> *"Hãy đọc file `.stitch/DESIGN.md` và viết các CSS Variables vào file `src/index.css` để định hình Design Tokens (màu sắc, font, hiệu ứng glassmorphism). Đồng thời import font Outfit từ Google Fonts ở dòng đầu tiên của file CSS."*

---

## 🛠️ Thực hành bài học

1. Mở Antigravity IDE.
2. Chạy prompt mẫu để tạo `.stitch/DESIGN.md`.
3. Kiểm tra file thiết kế vừa được tạo ra bằng mắt để chắc chắn các chỉ số màu và glassmorphism được khai báo chính xác.
4. Chạy prompt tiếp theo để Agent tự động cập nhật CSS variables vào `src/index.css`.
5. Kiểm tra file `src/index.css`. Code CSS variables nên trông tương tự như thế này ở phần `:root`:

```css
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');

:root {
  --font-primary: 'Outfit', sans-serif;
  
  /* Cyber-Zen Colors */
  --color-work: #6366f1;
  --color-short: #10b981;
  --color-long: #8b5cf6;
  
  /* Glassmorphism Specs */
  --glass-bg: rgba(255, 255, 255, 0.08);
  --glass-border: rgba(255, 255, 255, 0.1);
  --glass-blur: blur(16px);
  
  --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## 🏁 Checkpoint hoàn thành

- [ ] File `.stitch/DESIGN.md` được tạo và mô tả đầy đủ các token thiết kế Cyber-Zen.
- [ ] File `src/index.css` đã import font Outfit và chứa danh sách CSS variables tương ứng.

---

<div align="center">

[← Bài 3: Setup Môi trường](lesson-03-setup-context-engineering.md) · [Mục lục Section 7](README.md) · [Bài 5: Tạo UI Màn hình Sảnh chờ →](lesson-05-lobby-and-navigation.md)

</div>
