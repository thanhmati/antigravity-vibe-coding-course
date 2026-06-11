# 🎨 Section 7 · Vibe Coding Dự Án Thực Tế — Từ Ý Tưởng Đến Sản Phẩm

<p align="center">
  <img src="https://img.shields.io/badge/Section-7_of_7-06b6d4?style=for-the-badge" alt="Section 7" />
  <img src="https://img.shields.io/badge/Lectures-11-blue?style=for-the-badge" alt="11 Lectures" />
  <img src="https://img.shields.io/badge/Duration-~6--8_hours-green?style=for-the-badge" alt="~6-8 hours" />
  <img src="https://img.shields.io/badge/Level-Advanced-red?style=for-the-badge" alt="Advanced" />
  <img src="https://img.shields.io/badge/Hands--on-Project-ff6b6b?style=for-the-badge" alt="Hands-on" />
</p>

> **Áp dụng toàn bộ kiến thức từ Section 1-6 để xây dựng một dự án web hoàn chỉnh bằng Vibe Coding**

---

## 🎯 Mục tiêu Section

Sau section này, bạn sẽ:

- ✅ Thành thạo **workflow Vibe Coding** từ ý tưởng → thiết kế → code → deploy
- ✅ Sử dụng thành thạo **Stitch Skills** để thiết kế UI chuyên nghiệp và cá nhân hóa sâu sắc
- ✅ Tự động hoá quy trình **Git** với GitHub MCP
- ✅ Có **1 dự án dashboard cực kỳ lộng lẫy và thực tế** trong portfolio

---

## 🏗️ Dự án: VibeSpace Studio

> 🧘‍♂️ Trạm tập trung và âm thanh chữa lành tích hợp đồng hồ Pomodoro, bộ trộn âm thanh thiên nhiên đa kênh, trình phát nhạc Lo-fi và phong cảnh động cá nhân hóa.

```mermaid
graph TD
    LE["🏠 Sảnh chờ Lobby"] --> VS["🧘‍♂️ Immersive Studio /space"]
    LE --> PJ["📊 Nhật ký Journal /journal"]
    LE --> CS["⚙️ Tùy chỉnh Settings /settings"]
    
    VS --> AM["🎵 Ambient Mixer"]
    VS --> PT["⏱️ Pomodoro Timer"]
    VS --> DG["📋 Daily Goals"]
    VS --> SS["🌅 Scene Switcher"]
    
    style LE fill:#3b82f6,stroke:#2563eb,color:#fff
    style VS fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style PJ fill:#ec4899,stroke:#db2777,color:#fff
    style CS fill:#f59e0b,stroke:#d97706,color:#fff
    style AM fill:#10b981,stroke:#059669,color:#fff
    style PT fill:#10b981,stroke:#059669,color:#fff
    style DG fill:#10b981,stroke:#059669,color:#fff
    style SS fill:#10b981,stroke:#059669,color:#fff
```

---

## 📚 Lectures

| # | Lecture | Mô tả | Thời lượng |
|---|---------|--------|------------|
| 7.1 | [**Tổng quan Vibe Coding & Giới thiệu VibeSpace**](lesson-01-vibe-coding-overview.md) | Triết lý Vibe Coding, giới thiệu dự án thực tế VibeSpace Studio | ~30 phút |
| 7.2 | [**Specs-Driven Vibe Coding – Viết PRD & Lập kế hoạch**](lesson-02-prd-and-project-planning.md) | Prompt tạo tài liệu yêu cầu sản phẩm PRD và kế hoạch PLAN.md | ~35 phút |
| 7.3 | [**Setup Môi trường & Khởi tạo Context Engineering**](lesson-03-setup-context-engineering.md) | Khởi tạo React Vite, cài đặt Stitch CLI và thiết lập file context cho AI | ~30 phút |
| 7.4 | [**Thiết kế Design System với Stitch**](lesson-04-design-system-with-stitch.md) | Tạo DESIGN.md định nghĩa phong cách Cyber-Zen và đồng bộ CSS Variables | ~45 phút |
| 7.5 | [**Tạo UI Màn hình Sảnh chờ (Lobby UI) với Stitch**](lesson-05-lobby-and-navigation.md) | Dựng mockup thô màn hình Lobby và cấu trúc định tuyến (React Router) | ~50 phút |
| 7.6 | [**Tạo UI Màn hình Focus Studio & các Widget**](lesson-06-focus-studio-and-widgets.md) | Thiết kế Dashboard 3 cột và các widget: Pomodoro, Mixer, YouTube, Todo | ~50 phút |
| 7.7 | [**Convert Design sang React Components**](lesson-07-convert-design-to-react.md) | Sử dụng react-components skill quét thiết kế để tự động tạo code React tĩnh | ~55 phút |
| 7.8 | [**GitHub Workflow Tự động với GitHub MCP**](lesson-08-github-workflow.md) | Quản lý repo, tạo branch, commit, tạo PR và merge tự động qua AI Agent | ~45 phút |
| 7.9 | [**Tích hợp Logic & Kết nối APIs**](lesson-09-integrate-logic-and-apis.md) | Ghép logic State, Web Audio Mixer, YouTube IFrame API và LocalStorage | ~45 phút |
| 7.10 | [**Polish UI, Responsive & Animations**](lesson-10-polish-ui-and-animations.md) | Thêm hoạt ảnh Breathing Bubble SVG, transition chuyển cảnh và responsive | ~45 phút |
| 7.11 | [**Review & Tổng kết**](lesson-11-review-and-summary.md) | Hướng dẫn deploy ứng dụng lên Vercel/GitHub Pages và đúc kết kinh nghiệm | ~35 phút |

---

## 📖 Tài liệu bổ sung

| File | Mô tả | Đối tượng |
|------|--------|-----------|
| [curriculum.md](curriculum.md) | Curriculum chi tiết 11 bài học | Giảng viên & Học viên |
| [teaching-guide.md](teaching-guide.md) | Hướng dẫn giảng dạy chi tiết với prompt mẫu | Giảng viên |
| [step-by-step-guide.md](step-by-step-guide.md) | Hướng dẫn từng bước với prompt và tích hợp API | Học viên |

---

## 🛠 Công cụ sử dụng

| Công cụ | Vai trò | Bài học |
|---------|---------|---------|
| **Antigravity IDE** | AI Coding Agent chính | Tất cả |
| **Stitch MCP Server** | Thiết kế UI, tạo screens | 4, 5, 6, 10 |
| **GitHub MCP Server** | Quản lý repo, branches, PRs | 3, 8, 9 |
| **Supabase Client** | SDK kết nối trực tiếp database trên đám mây | 2, 3, 9 |
| `stitch-design` | Thiết kế tổng thể | 4, 5, 6 |
| `stitch-loop` | Sinh multi-page website | 6 |
| `enhance-prompt` | Tối ưu prompt cho Stitch | 5, 6 |
| `design-md` | Tạo DESIGN.md | 4 |
| `react-components` | Convert design → React | 7 |

---

## 📁 Cấu trúc dự án cuối cùng

```
vibespace-dashboard/
├── .stitch/
│   └── DESIGN.md              # Design system document
├── src/
│   ├── components/
│   │   ├── PomodoroTimer.tsx   # Đồng hồ đếm ngược Pomodoro
│   │   ├── AmbientMixer.tsx    # Bộ trộn âm thanh thiên nhiên đa kênh
│   │   ├── LofiPlayer.tsx      # Trình phát nhạc Lo-fi (iTunes API)
│   │   ├── TodoChecklist.tsx   # Danh sách mục tiêu trong ngày
│   │   ├── BreathingBubble.tsx # Vòng tròn bong bóng tập thở SVG
│   │   ├── SceneSelector.tsx   # Bộ chuyển đổi và tuỳ chỉnh ảnh nền
│   │   └── ThemeToggle.tsx     # Customizer chuyển đổi theme màu
│   ├── pages/
│   │   ├── Lobby.tsx           # Lobby Entrance Page (Sảnh chờ)
│   │   ├── Space.tsx           # Immersive Focus Studio (Bảng điều khiển lõi)
│   │   ├── Journal.tsx         # Productivity Stats Journal
│   │   └── Settings.tsx        # Customize Timer & sound presets
│   ├── App.tsx                 # Cấu hình Routing chính cho ứng dụng
│   ├── main.tsx                # Khởi tạo React & Mount DOM
│   └── index.css               # CSS & Glassmorphism styles
├── public/
├── .env                       # Cấu hình API keys của Supabase (URL, Anon Key)
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

---

## 📋 Prerequisites

- ✅ Hoàn thành **Section 1-6**

---

<div align="center">

[← Section 6](../section-06-mcp/README.md) · [🏠 Home](../../README.md) · [📑 Mục lục](../SUMMARY.md)

</div>
