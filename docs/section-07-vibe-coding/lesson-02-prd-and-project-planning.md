# 📘 Bài 2: Specs-Driven Vibe Coding – Viết PRD & Lập kế hoạch

> **Section 7** · Vibe Coding Dự Án Thực Tế  
> **Thời lượng:** ~35 phút  
> **Yêu cầu:** Đã hoàn thành Bài 1

---

## 🎯 Mục tiêu bài học

Sau bài này, bạn sẽ:
- ✅ Hiểu tầm quan trọng của **Specs-Driven Development** khi làm việc với AI Agent.
- ✅ Biết cách ra lệnh cho AI viết tài liệu yêu cầu sản phẩm **PRD (Product Requirements Document)** hoàn chỉnh.
- ✅ Tạo được bảng kế hoạch công việc **`PLAN.md`** để AI theo dõi và thực thi từng bước một cách có cấu trúc.

---

## 1. Tại sao cần Specs trước khi Code?

Khi lập trình truyền thống, nhiều người có thói quen "nghĩ đến đâu code đến đó". Nhưng trong **Vibe Coding**, nếu bạn không đưa ra các yêu cầu kỹ thuật rõ ràng ngay từ đầu, AI Agent sẽ dễ dàng:
1. **Sinh code sai lệch**: Đi lệch hướng cấu trúc folder hoặc sử dụng các thư viện không đồng bộ.
2. **"Ảo tưởng" (Hallucination)**: Tự biên soạn ra các chức năng không thực sự cần thiết, làm loãng codebase.
3. **Phá vỡ tính năng cũ**: Khi sửa một bug ở màn hình này, AI có thể vô tình làm hỏng logic của màn hình khác vì không có tài liệu ràng buộc cấu trúc.

> 💡 **Quy tắc vàng**: Hãy dành ra 10% thời gian ban đầu để xây dựng **Specs** (Tài liệu đặc tả). Điều này giúp bạn tiết kiệm 90% thời gian debug và định hướng AI sau này!

---

## 2. Viết PRD (Product Requirements Document) cho VibeSpace

Tài liệu PRD là nơi định nghĩa: **Ứng dụng này là gì? Gồm các tính năng nào? Trải nghiệm người dùng ra sao?**

### Cách thực hiện với AI Agent
Bạn không cần tự viết PRD từ đầu. Hãy cung cấp ý tưởng thô và nhờ Antigravity soạn thảo bản PRD chi tiết.

#### 💬 Prompt mẫu tạo PRD:
> *"Tôi muốn xây dựng ứng dụng VibeSpace Studio bằng React + Vite + CSS. Đây là một dashboard tăng năng suất kết hợp âm thanh chữa lành và thư giãn. Hãy viết một file tài liệu đặc tả sản phẩm PRD.md chi tiết chứa:
> 1. Tổng quan dự án và mục tiêu.
> 2. Danh sách tính năng cốt lõi (Pomodoro Timer dùng SVG ring, Ambient sound mixer với các slide volume, YouTube music player widget hỗ trợ dán link phát nhạc, Daily todo checklist lưu vào localStorage, Scene switcher đổi ảnh nền).
> 3. Cấu trúc trang (Lobby entrance page `/` và Immersive focus studio dashboard `/space`).
> 4. Ràng buộc về mặt thiết kế (Glassmorphism, Dark mode, hiện đại, font Outfit)."*

---

## 3. Tạo kế hoạch phát triển (`PLAN.md`)

Sau khi có PRD, bước tiếp theo là tạo file `PLAN.md` ở thư mục gốc của project để theo dõi tiến độ. Đây là "checklist" để bạn và AI Agent phối hợp ăn ý.

### Cấu trúc đề xuất cho `PLAN.md`

```markdown
# 📋 VibeSpace Development Plan

## Phase 1: Setup & Design System
- [ ] Initialize React + Vite project <!-- id: 1 -->
- [ ] Install Stitch CLI & setup Context Engineering <!-- id: 2 -->
- [ ] Create `.stitch/DESIGN.md` for Cyber-Zen Design System <!-- id: 3 -->

## Phase 2: UI Wireframing with Stitch
- [ ] Build Lobby UI screen mockup <!-- id: 4 -->
- [ ] Build Focus Studio UI & Widget mockup <!-- id: 5 -->

## Phase 3: Code Generation & Setup
- [ ] Convert Stitch UI designs to React Components using `react-components` skill <!-- id: 6 -->
- [ ] Setup routing (Lobby `/` & Space `/space`) <!-- id: 7 -->

## Phase 4: Business Logic Integration
- [ ] Implement Pomodoro Timer state & SVG progress <!-- id: 8 -->
- [ ] Implement Ambient Audio Mixer engine <!-- id: 9 -->
- [ ] Integrate YouTube Player API with volume control <!-- id: 10 -->
- [ ] Connect Daily Todo List with localStorage <!-- id: 11 -->

## Phase 5: Polish & Deployment
- [ ] Add View Transitions & Breathing Bubble animation <!-- id: 12 -->
- [ ] Deploy project to Vercel/GitHub Pages <!-- id: 13 -->
```

---

## 🛠️ Thực hành bài học

1. Mở Antigravity IDE và chọn workspace dự án của bạn.
2. Gửi prompt mẫu ở trên cho Antigravity để tạo ra file `PRD.md` trong dự án.
3. Tiếp tục yêu cầu Antigravity: *"Dựa trên PRD.md vừa tạo, hãy viết file PLAN.md ở root folder theo format checklist Markdown để chúng ta tiện quản lý công việc nhé."*
4. Kiểm tra các file được tạo ra trong cấu trúc thư mục của bạn.

---

## 🏁 Checkpoint hoàn thành

- [ ] Dự án có file `PRD.md` mô tả rõ ràng 5 tính năng chính của VibeSpace.
- [ ] Có file `PLAN.md` phân chia lộ trình thực hiện rõ ràng theo 5 Phase.

---

<div align="center">

[← Bài 1: Tổng quan Vibe Coding](lesson-01-vibe-coding-overview.md) · [Mục lục Section 7](README.md) · [Bài 3: Setup Môi trường →](lesson-03-setup-context-engineering.md)

</div>
