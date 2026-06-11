# 📘 Bài 11: Review & Tổng kết

> **Section 7** · Vibe Coding Dự Án Thực Tế  
> **Thời lượng:** ~35 phút  
> **Yêu cầu:** Đã hoàn thành Bài 10

---

## 🎯 Mục tiêu bài học

Sau bài này, bạn sẽ:
- ✅ Biết cách deploy dự án React lên các nền tảng host miễn phí như **Vercel** hoặc **GitHub Pages**.
- ✅ Đúc kết được các **kinh nghiệm xương máu** khi phối hợp phát triển cùng AI Agent.
- ✅ Hoàn thành xuất sắc khóa học và sẵn sàng tự tạo các dự án của riêng mình với tư duy Vibe Coder.

---

## 1. Deploy dự án lên Internet

Để chia sẻ VibeSpace Studio với bạn bè và đưa vào portfolio của bạn, hãy xuất bản dự án lên Internet. Cách nhanh nhất đối với dự án React+Vite là sử dụng **Vercel CLI** hoặc **GitHub Pages**.

### Cách 1: Deploy lên Vercel (Khuyên dùng)
1. Cài đặt Vercel CLI (nếu chưa cài):
   ```bash
   npm install -g vercel
   ```
2. Chạy lệnh deploy ở thư mục gốc:
   ```bash
   vercel
   ```
3. Làm theo các chỉ dẫn trên Terminal để liên kết tài khoản Vercel và hoàn tất deploy.

---

## 2. Review Workflow Vibe Coding & Đúc kết kinh nghiệm

Xuyên suốt Section 7, chúng ta đã cùng AI đi qua toàn bộ quy trình:

```
Ý tưởng ──> PRD & PLAN ──> Stitch Design Mockup ──> React Convert ──> Git Commit/PR ──> Logic Integration ──> Polish & Deploy
```

### 🧠 Những bài học lớn cần ghi nhớ:

#### 1. Đặt tài liệu Specs lên hàng đầu
Mỗi khi bắt đầu một tính năng lớn hoặc debug một lỗi nghiêm trọng, hãy chỉ cho Agent đọc các file tài liệu đặc tả như `PRD.md`, `.stitch/DESIGN.md`, `.agentcontext`. Điều này giúp Agent có điểm tựa vững chắc để sinh mã, tránh tự ý thay đổi bừa bãi.

#### 2. Chia nhỏ vấn đề (Modularization)
Đừng yêu cầu AI Agent *"Hãy viết cả ứng dụng này cho tôi"*. Hãy chia nhỏ thành từng bước như đã làm trong kế hoạch `PLAN.md`: Viết layout tĩnh -> Thêm đếm ngược -> Thêm nhạc -> Kết nối localStorage. AI xử lý các tác vụ nhỏ và cụ thể tốt hơn 10 lần so với các yêu cầu tổng thể mơ hồ.

#### 3. Sử dụng Git như một lưới an toàn (Safety Net)
Luôn commit code mỗi khi hoàn thành xong một widget hoặc một tính năng nhỏ. Nhờ đó, nếu Agent tiếp theo vô tình làm hỏng ứng dụng hoặc sinh ra đống code rác, bạn có thể nhanh chóng rollback về trạng thái an toàn gần nhất bằng một câu lệnh:
```bash
git checkout .
```

---

## 🎉 Lời kết khóa học

Chúc mừng bạn đã hoàn thành trọn vẹn **Section 7** và toàn bộ khóa học **Google Antigravity: Xây dựng AI Agent, AI App & Vibe Coding**!

Bạn không còn chỉ là một lập trình viên thông thường phải tự viết từng dấu chấm phẩy, bạn hiện đã nâng cấp thành một **Product Director / Vibe Coder** – người điều hướng và ra quyết định tối cao, giải phóng sức sáng tạo bằng cách bắt tay với AI Agent để biến mọi ý tưởng thành sản phẩm chỉ trong vài giờ.

*Chúc bạn sẽ xây dựng được thật nhiều ứng dụng tuyệt đẹp và hữu ích tiếp theo!* 🚀

---

<div align="center">

[← Bài 10: Tối ưu UI & Animations](lesson-10-polish-ui-and-animations.md) · [Mục lục Section 7](README.md) · [🏠 Về Trang Chủ Khóa Học](../../README.md)

</div>
