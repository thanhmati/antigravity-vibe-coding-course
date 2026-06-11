# 📘 Bài 10: Polish UI, Responsive & Animations

> **Section 7** · Vibe Coding Dự Án Thực Tế  
> **Thời lượng:** ~45 phút  
> **Yêu cầu:** Đã hoàn thành Bài 9

---

## 🎯 Mục tiêu bài học

Sau bài này, bạn sẽ:
- ✅ Thêm các hiệu ứng hoạt ảnh (**Micro-animations**) giúp giao diện sống động và có hồn hơn.
- ✅ Thiết kế vòng bong bóng thiền thở SVG (**Breathing Bubble**) phồng lên xẹp xuống đồng bộ theo nhịp thở.
- ✅ Tối ưu hóa độ tương thích hiển thị di động (**Responsive UI**).

---

## 1. Trải nghiệm cảm xúc (Immersive Experience)

Một ứng dụng Zen thực thụ không thể chỉ có các Glass card thô cứng. Chúng ta cần những hiệu ứng nhẹ nhàng để tạo sự kết nối với tâm trí người dùng:
- **Nhịp thở bong bóng (Breathing Guide)**: Một vòng tròn đồng tâm co dãn nhịp nhàng (hít vào 4 giây, giữ 4 giây, thở ra 4 giây) giúp người dùng điều hòa nhịp tim.
- **Hiệu ứng hover phát sáng (Glow hover)**: Khi di chuột qua các nút bấm, viền và bóng đổ sẽ tỏa sáng nhẹ theo tông màu chủ đạo của chế độ Pomodoro hiện tại.
- **Transition chuyển cảnh (View Transitions)**: Khi người dùng đổi theme hình nền, ảnh nền sẽ chuyển tiếp mịn màng (fade-in/fade-out) thay vì giật đột ngột.

---

## 2. Tạo Bong Bóng Hít Thở SVG (Breathing Bubble)

Chúng ta sẽ tạo một widget phụ đặt dưới Pomodoro timer giúp người dùng điều hòa nhịp thở trong lúc nghỉ ngơi.

#### 💬 Prompt mẫu tạo Breathing Bubble & Animations:
> *"Hãy bổ sung một component mới `src/components/BreathingBubble.tsx` và tích hợp nó vào dưới đồng hồ Pomodoro ở trang Space:
> 1. Thiết kế component chứa một hình tròn SVG với các vòng border tỏa sáng màu xanh ngọc (Cyan/Emerald).
> 2. Sử dụng CSS Keyframes animation để tạo hiệu ứng co dãn (scale từ 0.8 lên 1.2 và ngược lại) lặp lại liên tục.
> 3. Hiển thị text trạng thái ở tâm vòng tròn đổi theo chu kỳ: 'Hít vào' -> 'Giữ lại' -> 'Thở ra'.
> 4. Thêm hiệu ứng fade-in mượt mà cho ảnh nền của ứng dụng khi người dùng chọn đổi cảnh nền ở SceneSelector."*

---

## 3. Tối ưu hiển thị Responsive cho Di động

Trên màn hình điện thoại nhỏ, bố cục 3 cột Dashboard sẽ rất chật chội. Chúng ta cần cấu hình lại CSS để hiển thị dạng cuộn một cột dọc, hoặc xếp chồng (stack) thông minh.

#### 💬 Prompt mẫu tối ưu Responsive CSS:
> *"Hãy kiểm tra toàn bộ file `src/index.css` và cấu hình CSS Media Queries cho các thiết bị di động (max-width: 768px):
> 1. Chuyển đổi grid 3 cột trên desktop thành flex-direction column trên mobile.
> 2. Pomodoro timer được đẩy lên đầu trang, tiếp theo là Todo checklist, Ambient mixer, và YouTube player.
> 3. Điều chỉnh font size của đồng hồ điện tử và h1 Lobby nhỏ lại để không bị tràn viền (overflow).
> 4. Đảm bảo toàn bộ các glass card có khoảng cách lề (padding/margin) hợp lý trên màn hình cảm ứng."*

---

## 🛠️ Thực hành bài học

1. Gửi prompt tạo Breathing Bubble cho Agent.
2. Gửi prompt tối ưu responsive CSS.
3. Mở Developer Tools trên Chrome/Edge (nhấn F12), chuyển sang chế độ thiết bị di động (Mobile view - iPhone/Pixel) để kiểm tra giao diện co giãn.
4. Kiểm tra xem hoạt ảnh vòng tròn thiền thở SVG chạy mượt mà ở tần số 60 FPS không, chữ hiển thị rõ nét không.

---

## 🏁 Checkpoint hoàn thành

- [ ] Component `BreathingBubble.tsx` hoạt động đúng nhịp giãn nở, hỗ trợ người dùng tập thở.
- [ ] Ảnh nền đổi mượt mà với hiệu ứng transition.
- [ ] Giao diện dashboard hiển thị cân đối trên màn hình mobile (không bị scroll ngang, chữ không bị vỡ).

---

<div align="center">

[← Bài 9: Tích hợp Logic & APIs](lesson-09-integrate-logic-and-apis.md) · [Mục lục Section 7](README.md) · [Bài 11: Review & Tổng kết →](lesson-11-review-and-summary.md)

</div>
