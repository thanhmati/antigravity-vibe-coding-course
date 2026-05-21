# Section 7: Vibe Coding Dự Án Thực Tế – Từ Ý Tưởng Đến Sản Phẩm

> **Mục tiêu:** Áp dụng toàn bộ kiến thức từ Section 1-6 để xây dựng một dự án web hoàn chỉnh bằng phương pháp Vibe Coding, sử dụng Google Stitch MCP (thiết kế UI) và GitHub MCP (quản lý source code).

---

## 📋 Tổng quan Section

| Thông tin | Chi tiết |
|-----------|----------|
| **Số bài học** | 11 bài |
| **Thời lượng ước tính** | 6-8 giờ |
| **Dự án thực tế** | **VibeSpace** – Studio tập trung & âm thanh chữa lành tích hợp |
| **Công nghệ sử dụng** | Antigravity, Stitch MCP, GitHub MCP, Stitch Skills, React/Next.js |
| **Yêu cầu trước** | Hoàn thành Section 1-6 |

---

## 🎯 Curriculum Chi Tiết

### Bài 1: Tổng quan Vibe Coding & Giới thiệu VibeSpace Studio
**Thời lượng:** 25-30 phút

**Nội dung:**
- Vibe Coding là gì? Triết lý "mô tả ý tưởng, AI xây dựng".
- So sánh sự khác biệt lớn giữa Vibe Coding vs Traditional Coding.
- Giới thiệu dự án VibeSpace Studio – Trạm tập trung và chữa lành cho lập trình viên.
- Phân tích sơ đồ các cấu phần lõi và tính năng của VibeSpace.
- Thiết lập mindset đúng đắn khi lập trình cùng AI Agent.

**Kết quả bài học:**
- Thấu hiểu mindset Vibe Coding cốt lõi.
- Có cái nhìn tổng quan về kiến trúc và giao diện dự án thực tế VibeSpace Studio.

---

### Bài 2: Specs-Driven Vibe Coding – Viết PRD & Lập kế hoạch dự án
**Thời lượng:** 30-40 phút

**Nội dung:**
- Triết lý **Specs-Driven Development** (Phát triển hướng Đặc tả) và lý do nó là cứu tinh của Vibe Coding.
- Soạn thảo và phân tích tài liệu **PRD (Product Requirement Document)** hoàn chỉnh của VibeSpace Studio (User Stories, Flow, MVP vs Nice-to-have).
- Xây dựng tài liệu **Tech Specs (Đặc tả kỹ thuật)**: Routing Next.js 14, LocalStorage State Schema, Audio Engine (Singleton/Ref Pattern).
- Kỹ thuật Prompt Engineering để tự động tạo PRD & Tech Specs cho các ý tưởng dự án cá nhân.
- Lên kế hoạch phát triển MVP và phân rã các Task nhỏ thông qua file `PLAN.md`.

**Kết quả bài học:**
- Có bộ tài liệu PRD và Tech Specs hoàn chỉnh để làm kim chỉ nam phát triển VibeSpace.
- Biết cách dùng AI tạo tài liệu đặc tả chuẩn hóa cho bất kỳ sản phẩm nào.
- Sở hữu file kế hoạch phát triển `PLAN.md` chuyên nghiệp.

---

### Bài 3: Cài đặt & Setup Context Engineering cho VibeSpace
**Thời lượng:** 25-35 phút

**Nội dung:**
- Tổng quan thư viện Stitch Skills (google-labs-code/stitch-skills) và vai trò của các skills.
- Cài đặt các Stitch skills cần thiết bằng terminal.
- Tạo GitHub repo mới `vibespace-dashboard` bằng GitHub MCP.
- **Tầm quan trọng của Context Engineering** trong Vibe Coding.
- Thiết lập bộ 3 file context documents tại root của dự án VibeSpace:
  - `AGENTS.md` (Tech stack, coding conventions, rules cho Audio & LocalStorage)
  - `ARCHITECTURE.md` (Phân mảnh component, State flow, định tuyến)
  - `PLAN.md` (Task list ban đầu của MVP)

**Kết quả bài học:**
- Môi trường dev sẵn sàng cùng Git Repo.
- **Bộ nhớ ngoài (Context Documents)** được cài đặt giúp AI Agent hiểu chính xác dự án ngay từ đầu, giảm 80%+ tokens lãng phí.

---

### Bài 4: Thiết kế Design System với Stitch
**Thời lượng:** 40-50 phút

**Nội dung:**
- Design System là gì và tại sao cần cho Vibe Coding?
- Sử dụng Stitch MCP để tạo project mới
- Tạo Design System: Color palette (Cyber-Zen dark mode, neon accents), Typography, Shape, Appearance
- Sử dụng skill `design-md` để generate file DESIGN.md
- Review và tinh chỉnh design tokens phù hợp với không gian tập trung

**Kết quả bài học:**
- Stitch project với design system hoàn chỉnh
- File DESIGN.md mô tả design system bằng ngôn ngữ tự nhiên

---

### Bài 5: Tạo UI Screens với Stitch – Phần 1 (Sảnh chờ Lobby & Navigation)
**Thời lượng:** 45-60 phút

**Nội dung:**
- Sử dụng skill `enhance-prompt` để tối ưu prompt thiết kế
- Tạo màn hình Lobby Entrance (Sảnh chờ) của VibeSpace
- Thiết kế bố cục chính, navigation, khu vực thống kê chuỗi tập trung
- Sử dụng `stitch-design` workflow cho thiết kế nhất quán
- Tạo variants để so sánh và chọn thiết kế tốt nhất

**Kết quả bài học:**
- Giao diện Sảnh chờ (Lobby) hoàn chỉnh trên Stitch
- Nắm vững cách thiết kế sảnh chờ thu hút người dùng

---

### Bài 6: Tạo UI Screens với Stitch – Phần 2 (Immersive Focus Studio)
**Thời lượng:** 45-60 phút

**Nội dung:**
- Thiết kế giao diện lõi Immersive Studio (`/space`) toàn màn hình
- Cách bố trí các Widget nổi dạng kính mờ (Floating Glassmorphic Cards):
  - Pomodoro Timer, Audio Mixer, Daily Focus Goals, Breathing Circle
  - Settings Panel (đổi nhạc, đổi cảnh nền)
- Sử dụng `stitch-loop` để sinh nhiều trang đồng bộ (Space, Journal, Settings)
- Apply design system đồng bộ cho tất cả các Widget

**Kết quả bài học:**
- Bộ UI screens hoàn chỉnh cho trang làm việc toàn diện
- Thiết kế nhất quán, lộng lẫy và giảm mỏi mắt

---

### Bài 7: Convert Design → Code với React Components
**Thời lượng:** 50-60 phút

**Nội dung:**
- Sử dụng skill `react-components` để convert screens → React code
- Cấu trúc component tree (các widget tách biệt: Pomodoro, Mixer, Todo)
- Xử lý design tokens → CSS variables / Tailwind config với hiệu ứng mờ kính
- Khởi tạo project Next.js và tích hợp components
- Giải quyết lỗi import và import paths trong App Router

**Kết quả bài học:**
- Bộ React components từ design Stitch
- Project Next.js chạy được với cấu trúc UI mờ kính từ Stitch

---

### Bài 8: GitHub Workflow – Branch, Commit & Pull Request tự động
**Thời lượng:** 40-50 phút

**Nội dung:**
- Tạo branch mới cho tính năng giao diện bằng GitHub MCP
- Push code lên branch feature
- Tạo Pull Request tự động với mô tả chi tiết kiến trúc dashboard
- Review code trên Pull Request và tự động squash merge

**Kết quả bài học:**
- Quy trình Git tự động hoá hoàn chỉnh
- Hiểu cách kết hợp GitHub MCP để đẩy nhanh tiến độ làm việc

---

### Bài 9: Thêm tính năng & Fix bug bằng Vibe Coding (Nhạc & Âm thanh Mixer)
**Thời lượng:** 40-50 phút

**Nội dung:**
- Thêm tính năng: Gọi iTunes Search API để người dùng thay đổi thể loại nhạc lo-fi theo keyword
- Thêm tính năng: Thiết lập trình trộn âm thanh thiên nhiên đa kênh (Rain, Campfire, Waves) hoạt động song song
- Thêm tính năng: Lưu trữ cấu hình nhạc và checklist Todo vào `localStorage`
- Phát hiện và fix bug bất đồng bộ khi gọi API bằng Antigravity
- Tạo branch, PR cho các tính năng audio bằng GitHub MCP

**Kết quả bài học:**
- Ứng dụng thực sự phát được nhạc và trộn âm thanh đa kênh
- Trạng thái người dùng được ghi nhớ hoàn hảo khi tải lại trang

---

### Bài 10: Polish UI, Responsive Design & Animation
**Thời lượng:** 40-50 phút

**Nội dung:**
- Thiết kế responsive hoàn hảo cho thiết bị di động (các widget xếp chồng mượt mà)
- Thêm các micro-animations ấn tượng:
  - Vòng tròn thiền định nhịp thở SVG co dãn mượt mà (4s-4s-4s)
  - Hiệu ứng chuyển động mờ ảo khi kéo thả hoặc bật/tắt các widget
  - Transition đổi ảnh phong cảnh nền mượt
- Accessibility check (độ tương phản màu tối, phím tắt nhanh Pomodoro)

**Kết quả bài học:**
- Studio tập trung hoạt động responsive hoàn hảo
- Hiệu ứng chuyển động và nhịp thở thiền định cực kỳ thư giãn

---

### Bài 11: Review dự án, Best Practices & Tổng kết
**Thời lượng:** 30-40 phút

**Nội dung:**
- Review toàn bộ workflow Vibe Coding đã thực hiện cho VibeSpace
- Thống kê: thời gian tiết kiệm vs coding truyền thống
- Best practices khi Vibe Coding với AI Agent
- Những lỗi phổ biến (quên local storage, xử lý audio lặp) và cách tránh
- Q&A và hướng dẫn áp dụng Vibe Coding vào bất kỳ dự án SaaS nào khác

**Kết quả bài học:**
- Nắm vững toàn bộ quy trình Vibe Coding từ đầu đến cuối
- Sở hữu 1 dự án cực "wow" trong portfolio cá nhân

---

## 🛠 Công cụ & Skills sử dụng trong Section

| Công cụ / Skill | Mục đích | Bài học |
|-----------------|---------|--------|
| **Antigravity IDE** | Coding agent chính | Tất cả |
| **Stitch MCP Server** | Thiết kế UI, tạo screens | 4, 5, 6, 10 |
| **GitHub MCP Server** | Quản lý repo, branches, PRs | 3, 8, 9 |
| `stitch-design` | Thiết kế tổng thể, prompt enhance, design system | 4, 5, 6 |
| `stitch-loop` | Sinh multi-page website | 6 |
| `enhance-prompt` | Tối ưu prompt cho Stitch | 5, 6 |
| `design-md` | Tạo DESIGN.md document | 4 |
| `react-components` | Convert design → React code | 7 |

---

## 📁 Cấu trúc dự án cuối cùng

```
vibespace-dashboard/
├── .stitch/
│   └── DESIGN.md              # Design system document
├── src/
│   ├── app/
│   │   ├── page.tsx            # Lobby Entrance Page (Sảnh chờ)
│   │   ├── layout.tsx          # Root layout
│   │   ├── space/
│   │   │   └── page.tsx        # Immersive Focus Studio (Bảng điều khiển lõi)
│   │   ├── journal/
│   │   │   └── page.tsx        # Productivity Stats Journal
│   │   └── settings/
│   │       └── page.tsx        # Customize Timer & sound presets
│   ├── components/
│   │   ├── PomodoroTimer.tsx   # Đồng hồ đếm ngược Pomodoro
│   │   ├── AmbientMixer.tsx    # Bộ trộn âm thanh thiên nhiên đa kênh
│   │   ├── LofiPlayer.tsx      # Trình phát nhạc Lo-fi (iTunes API)
│   │   ├── TodoChecklist.tsx   # Danh sách mục tiêu trong ngày
│   │   ├── BreathingBubble.tsx # Vòng tròn bong bóng tập thở SVG
│   │   ├── SceneSelector.tsx   # Bộ chuyển đổi và tuỳ chỉnh ảnh nền
│   │   └── ThemeToggle.tsx     # Customizer chuyển đổi theme màu
│   └── styles/
│       └── globals.css
├── public/
├── package.json
└── README.md
```
