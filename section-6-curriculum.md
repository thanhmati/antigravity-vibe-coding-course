# Section 6: Vibe Coding Dự Án Thực Tế – Từ Ý Tưởng Đến Sản Phẩm

> **Mục tiêu:** Áp dụng toàn bộ kiến thức từ Section 1-5 để xây dựng một dự án web hoàn chỉnh bằng phương pháp Vibe Coding, sử dụng Google Stitch MCP (thiết kế UI) và GitHub MCP (quản lý source code).

---

## 📋 Tổng quan Section

| Thông tin | Chi tiết |
|-----------|----------|
| **Số bài học** | 10 bài |
| **Thời lượng ước tính** | 6-8 giờ |
| **Dự án thực tế** | English Practice Hub – Trang web luyện tập tiếng Anh |
| **Công nghệ sử dụng** | Antigravity, Stitch MCP, GitHub MCP, Stitch Skills, React/Next.js |
| **Yêu cầu trước** | Hoàn thành Section 1-5 |

---

## 🎯 Curriculum Chi Tiết

### Bài 1: Tổng quan Vibe Coding & Lập kế hoạch dự án
**Thời lượng:** 30-40 phút

**Nội dung:**
- Vibe Coding là gì? Triết lý "mô tả ý tưởng, AI xây dựng"
- So sánh Vibe Coding vs Traditional Coding
- Workflow tổng thể: Ý tưởng → Design → Code → Deploy
- Giới thiệu dự án "English Practice Hub"
- Phân tích yêu cầu và lên danh sách tính năng
- Tạo project plan bằng Antigravity

**Kết quả bài học:**
- Hiểu rõ mindset Vibe Coding
- Có project plan chi tiết cho dự án

---

### Bài 2: Cài đặt Stitch Skills & Chuẩn bị môi trường
**Thời lượng:** 20-30 phút

**Nội dung:**
- Tổng quan thư viện Stitch Skills (google-labs-code/stitch-skills)
- Cài đặt các skills cần thiết:
  - `stitch-design` – Thiết kế UI tổng thể
  - `stitch-loop` – Sinh multi-page website
  - `enhance-prompt` – Tối ưu prompt cho Stitch
  - `design-md` – Tạo design system document
  - `react-components` – Convert design → React components
- Verify cài đặt thành công
- Tạo GitHub repo mới cho dự án bằng GitHub MCP

**Kết quả bài học:**
- Môi trường dev đầy đủ với tất cả skills
- Repo GitHub đã sẵn sàng

---

### Bài 3: Thiết kế Design System với Stitch
**Thời lượng:** 40-50 phút

**Nội dung:**
- Design System là gì và tại sao cần cho Vibe Coding?
- Sử dụng Stitch MCP để tạo project mới
- Tạo Design System: Color palette, Typography, Shape, Appearance
- Sử dụng skill `design-md` để generate file DESIGN.md
- Review và tinh chỉnh design tokens
- Demo: Thay đổi design system và xem kết quả trực tiếp

**Kết quả bài học:**
- Stitch project với design system hoàn chỉnh
- File DESIGN.md mô tả design system bằng ngôn ngữ tự nhiên

---

### Bài 4: Tạo UI Screens với Stitch – Phần 1 (Trang chủ & Navigation)
**Thời lượng:** 45-60 phút

**Nội dung:**
- Sử dụng skill `enhance-prompt` để tối ưu prompt
- Tạo màn hình Landing Page / Trang chủ
- Tạo màn hình Navigation & Header
- Sử dụng `stitch-design` workflow cho thiết kế nhất quán
- Edit screens: Tinh chỉnh layout, màu sắc, typography
- Tạo variants để so sánh và chọn design tốt nhất

**Kết quả bài học:**
- 2-3 screens hoàn chỉnh cho trang chủ
- Hiểu cách dùng enhance-prompt để có kết quả tốt hơn

---

### Bài 5: Tạo UI Screens với Stitch – Phần 2 (Tính năng chính)
**Thời lượng:** 45-60 phút

**Nội dung:**
- Thiết kế trang Vocabulary Practice
- Thiết kế trang Grammar Quiz
- Thiết kế trang Flashcard Review
- Sử dụng `stitch-loop` để sinh nhiều trang cùng lúc
- Apply design system đồng bộ cho tất cả screens
- Review tổng thể UI và chỉnh sửa

**Kết quả bài học:**
- Bộ UI screens hoàn chỉnh cho toàn bộ ứng dụng
- Thiết kế nhất quán giữa các trang

---

### Bài 6: Convert Design → Code với React Components
**Thời lượng:** 50-60 phút

**Nội dung:**
- Sử dụng skill `react-components` để convert screens → React code
- Cấu trúc component tree
- Xử lý design tokens → CSS variables / Tailwind config
- Validation: Kiểm tra code output có đúng chuẩn
- Tạo project React/Next.js và tích hợp components
- Fix lỗi và tinh chỉnh code

**Kết quả bài học:**
- Bộ React components từ design Stitch
- Project Next.js chạy được với UI từ Stitch

---

### Bài 7: GitHub Workflow – Branch, Commit & Pull Request tự động
**Thời lượng:** 40-50 phút

**Nội dung:**
- Tạo branch mới cho mỗi tính năng bằng GitHub MCP
- Push code lên branch feature
- Tạo Pull Request tự động với mô tả chi tiết
- Review code trên Pull Request
- Merge và quản lý branches
- Demo workflow hoàn chỉnh: feature → branch → PR → merge

**Kết quả bài học:**
- Quy trình Git tự động hoá hoàn chỉnh
- Hiểu cách kết hợp GitHub MCP trong Vibe Coding

---

### Bài 8: Thêm tính năng & Fix bug bằng Vibe Coding
**Thời lượng:** 40-50 phút

**Nội dung:**
- Thêm tính năng mới: Dark mode toggle
- Thêm tính năng: Progress tracking
- Phát hiện và fix bug bằng Antigravity
- Mỗi tính năng/bug fix = 1 branch + 1 PR (GitHub MCP)
- Iterative design: Quay lại Stitch để cập nhật UI nếu cần
- Demo quy trình thực tế từ issue → design → code → PR

**Kết quả bài học:**
- Thành thạo workflow iterative trong Vibe Coding
- Dự án có thêm 2-3 tính năng mới

---

### Bài 9: Polish UI, Responsive Design & Animation
**Thời lượng:** 40-50 phút

**Nội dung:**
- Sử dụng Stitch để tạo variants responsive (mobile, tablet, desktop)
- Thêm micro-animations và transitions
- Tối ưu hiệu suất: lazy loading, image optimization
- Accessibility check
- Final UI review trên Stitch và code

**Kết quả bài học:**
- Website responsive hoàn chỉnh
- UI đẹp với animations chuyên nghiệp

---

### Bài 10: Review dự án, Best Practices & Tổng kết
**Thời lượng:** 30-40 phút

**Nội dung:**
- Review toàn bộ workflow Vibe Coding đã thực hiện
- Thống kê: thời gian tiết kiệm vs coding truyền thống
- Best practices khi Vibe Coding với AI Agent
- Những lỗi phổ biến và cách tránh
- Tips nâng cao: Custom skills, multi-agent orchestration
- Q&A và hướng dẫn áp dụng vào dự án thực tế

**Kết quả bài học:**
- Nắm vững toàn bộ quy trình Vibe Coding
- Có thể tự áp dụng cho bất kỳ dự án nào

---

## 🛠 Công cụ & Skills sử dụng trong Section

| Công cụ / Skill | Mục đích | Bài học |
|-----------------|---------|--------|
| **Antigravity IDE** | Coding agent chính | Tất cả |
| **Stitch MCP Server** | Thiết kế UI, tạo screens | 3, 4, 5, 9 |
| **GitHub MCP Server** | Quản lý repo, branches, PRs | 2, 7, 8 |
| `stitch-design` | Thiết kế tổng thể, prompt enhance, design system | 3, 4, 5 |
| `stitch-loop` | Sinh multi-page website | 5 |
| `enhance-prompt` | Tối ưu prompt cho Stitch | 4, 5 |
| `design-md` | Tạo DESIGN.md document | 3 |
| `react-components` | Convert design → React code | 6 |

---

## 📁 Cấu trúc dự án cuối cùng

```
english-practice-hub/
├── .stitch/
│   └── DESIGN.md              # Design system document
├── src/
│   ├── app/
│   │   ├── page.tsx            # Landing page
│   │   ├── layout.tsx          # Root layout
│   │   ├── vocabulary/
│   │   │   └── page.tsx        # Vocabulary practice
│   │   ├── grammar/
│   │   │   └── page.tsx        # Grammar quiz
│   │   └── flashcards/
│   │       └── page.tsx        # Flashcard review
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── QuizCard.tsx
│   │   ├── FlashCard.tsx
│   │   ├── ProgressBar.tsx
│   │   └── ThemeToggle.tsx
│   └── styles/
│       └── globals.css
├── public/
├── package.json
└── README.md
```
