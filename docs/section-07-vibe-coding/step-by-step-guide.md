# 🚀 Hướng Dẫn Step-by-Step: Từ Ý Tưởng → Trạm Tập Trung VibeSpace Studio Hoàn Chỉnh

> **Dự án:** VibeSpace Studio – Trạm tập trung và âm thanh chữa lành tích hợp đồng hồ Pomodoro, bộ trộn âm thanh thiên nhiên đa kênh, trình phát nhạc Lo-fi (iTunes API) và phong cảnh động cá nhân hóa.
> **Công cụ:** Antigravity + Stitch MCP + GitHub MCP + Stitch Skills + ReactJS (Vite + React Router)
> **Thời gian ước tính:** 4-5 giờ

---

## 📋 Mục lục

1. [Step 1: Specs-Driven Vibe Coding – Viết PRD & Tech Specs](#step-1)
2. [Step 2: Cài đặt Môi trường & Tạo GitHub Repo](#step-2)
3. [Step 3: Setup Context Engineering cho VibeSpace](#step-3)
4. [Step 4: Tạo Stitch Project & Design System (Màu sắc Cyber-Zen)](#step-4)
5. [Step 5: Enhance Prompt & Thiết kế Sảnh chờ (Lobby Entrance Page)](#step-5)
6. [Step 6: Thiết kế các trang chính (Immersive Studio, Stats Journal, Settings)](#step-6)
7. [Step 7: Tạo DESIGN.md Document (Design Specs)](#step-7)
8. [Step 8: Convert Design → React Code sử dụng react-components skill](#step-8)
9. [Step 9: Khởi tạo Project ReactJS (Vite) & Tích hợp cấu trúc định tuyến (React Router)](#step-9)
10. [Step 10: GitHub Workflow – Branch & Pull Request tự động](#step-10)
11. [Step 11: Tích hợp âm thanh đa kênh & APIs (iTunes Lo-fi, Ambient Mixer, ZenQuotes)](#step-11)
12. [Step 12: Polish UI, Responsive & Animations (Breathing Bubble, Scene Selector, deploy)](#step-12)

---

<a id="step-1"></a>
## Step 1: Specs-Driven Vibe Coding – Viết PRD & Tech Specs

### 🎯 Mục tiêu
Thực hành quy trình **Specs-Driven Development** chuẩn hóa chuyên nghiệp. Trước khi bắt đầu viết bất cứ dòng code nào hay thậm chí là tạo project trên Stitch, chúng ta phải viết **PRD (Product Requirement Document)** và **Tech Specs (Đặc tả kỹ thuật)** chi tiết. Việc này giúp AI Agent hiểu thấu suốt mọi ngóc ngách của sản phẩm, chống hiện tượng ảo giác (hallucination), tiết kiệm hơn 80% token và giảm 90% thời gian debug về sau!

### 📝 Hướng dẫn thực hiện

Mở **Antigravity** và nhập prompt có cấu trúc sau để Agent cùng bạn brainstorming và soạn thảo tài liệu:

```text
[BỐI CẢNH / CONTEXT]
Tôi chuẩn bị phát triển một dự án Focus Station (Trạm tập trung làm việc & âm thanh thiền định) có tên là "VibeSpace Studio" bằng phương pháp Vibe Coding (sử dụng ReactJS (Vite), Tailwind CSS, TypeScript).

[VAI TRÒ / ROLE]
Bạn là một Giám đốc Sản phẩm (Product Manager) kiêm Kiến trúc sư Phần mềm (Software Architect) cấp cao.

[NHIỆM VỤ / INSTRUCTIONS]
Hãy cùng tôi soạn thảo 2 tài liệu đặc tả chuẩn hóa thế việc thực bao gồm:
1. PRD (Product Requirement Document) chi tiết: Định nghĩa rõ mục tiêu sản phẩm, đối tượng người dùng, sơ đồ tính năng MVP (Lobby, Focus Space với 4 Widgets: Pomodoro, Sound Mixer, Lofi Player từ iTunes API, Todo Checklist), Breathing thiền thở, và trang Productivity Journal (GitHub Grid).
2. Tech Specs (Technical Specifications): Định nghĩa chi tiết routing bằng React Router, cấu trúc cơ sở dữ liệu lưu trực tiếp trong Supabase (định nghĩa bảng PostgreSQL cho preferences, todos, focus_sessions), và đặc tả Audio Engine (sử dụng singleton useRef để chống tràn âm thanh khi re-render).

[RÀNG BUỘC KỸ THUẬT / CONSTRAINTS]
Tài liệu cần cực kỳ chuyên nghiệp, trình bày rõ ràng bằng Markdown, có sơ đồ Mermaid trực quan để bất kỳ AI Agent nào đọc vào cũng có thể thực thi chính xác.
```

### ✅ Kết quả mong đợi

Agent sẽ sinh ra bộ tài liệu PRD & Tech Specs vô cùng chặt chẽ. Bạn sẽ lưu hai tài liệu này vào phần mô tả chung của dự án để làm kim chỉ nam. Dưới đây là nội dung chuẩn hóa để bạn tham khảo và bắt đầu:

> 💡 *Chi tiết tài liệu PRD & Tech Specs đã được tích hợp đầy đủ tại [lesson-02-prd-and-project-planning.md](file:///Users/thanhdo/Documents/Project/antigravity-vibe-coding-course/docs/section-07-vibe-coding/lesson-02-prd-and-project-planning.md). Hãy đọc kỹ trước khi bước sang Step 2!*

---

<a id="step-2"></a>
## Step 2: Cài đặt Môi trường & Tạo GitHub Repo

### 🎯 Mục tiêu
Cài đặt các Agent Skills quan trọng từ Google Labs để Antigravity có đầy đủ công cụ thiết kế, sinh mã nguồn nhanh chóng, đồng thời sử dụng GitHub MCP Server để khởi tạo repository quản lý source code chuyên nghiệp.

### 📝 Prompt mẫu – Cài đặt CLI Stitch Skills

Mở Terminal của bạn hoặc yêu cầu Antigravity thực thi câu lệnh sau để cài đặt các công cụ cần thiết trên hệ thống:

```bash
# Cài đặt bộ công cụ thiết kế Stitch Design
npx skills add google-labs-code/stitch-skills --skill stitch-design --global

# Cài đặt bộ công cụ thiết kế lặp sinh trang (Multi-page)
npx skills add google-labs-code/stitch-skills --skill stitch-loop --global

# Cài đặt công cụ nâng cấp prompt
npx skills add google-labs-code/stitch-skills --skill enhance-prompt --global

# Cài đặt công cụ phân tích và viết DESIGN.md
npx skills add google-labs-code/stitch-skills --skill design-md --global

# Cài đặt công cụ convert layout thiết kế sang React component
npx skills add google-labs-code/stitch-skills --skill react:components --global

# Cài đặt client SDK Supabase trong dự án của bạn
npm install @supabase/supabase-js
```

### 📝 Prompt mẫu – Tạo GitHub Repository bằng GitHub MCP

Sau khi môi trường đã sẵn sàng, hãy gửi prompt có cấu trúc sau tới Antigravity:

```text
[BỐI CẢNH / CONTEXT]
Tôi đang chuẩn bị code dự án VibeSpace Studio theo PRD và Tech Specs đã thống nhất.

[VAI TRÒ / ROLE]
Bạn là một DevOps Engineer và Git Administrator.

[NHIỆM VỤ / INSTRUCTIONS]
Hãy sử dụng công cụ GitHub MCP Server để tạo một repository mới trên GitHub cá nhân của tôi với các thông số sau:
- Tên repo: vibespace-studio
- Mô tả: "🧘‍♂️ A premium dark-cyberpunk Focus Station with dynamic audio mixing, iTunes Lo-fi integration, and glassmorphic aesthetics. Built using Antigravity, Stitch, and ReactJS (Vite) with Supabase Database."
- Trạng thái: Public
- Khởi tạo cùng file README.md mặc định.

[ĐẦU RA MONG ĐỢI / EXPECTED OUTPUT]
Đường dẫn liên kết trực tiếp tới Repository vừa tạo trên GitHub kèm thông báo trạng thái thành công.
```

---

<a id="step-3"></a>
## Step 3: Setup Context Engineering cho VibeSpace

### 🎯 Mục tiêu
Áp dụng nghệ thuật **Context Engineering** bằng cách thiết lập "Bộ nhớ ngoài" (Context Documents) ngay tại thư mục gốc của dự án vừa khởi tạo. Bộ ba file `AGENTS.md`, `ARCHITECTURE.md`, và `PLAN.md` sẽ giúp AI Agent hiểu sâu sắc toàn bộ cấu trúc dự án, các quy chuẩn code, các giải pháp kỹ thuật khó (như singleton Audio) trong nháy mắt mà không lãng phí token scan code.

### 📝 Hướng dẫn thực hiện

Tạo ra 3 file markdown tại thư mục gốc (`/`) của project vừa khởi tạo và sao chép chính xác nội dung bên dưới:

#### 1️⃣ File `AGENTS.md` (Định vị luật chơi cho AI)
Tạo file [AGENTS.md](file:///Users/thanhdo/Documents/Project/antigravity-vibe-coding-course/AGENTS.md) với nội dung:

```markdown
# AGENTS.md

## 🧘‍♂️ Overview
- **Project Name:** VibeSpace Studio
- **Description:** A premium, dark-cyberpunk, glassmorphic Focus Station designed to help developers and creatives focus. Features a Pomodoro timer, multi-channel ambient sound mixer, iTunes Lo-fi player, and personalized background scene manager.
- **Status:** Development (Vibe Coding Workshop)

## 🛠️ Tech Stack
- **Framework:** ReactJS (Vite)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS (Cyber-Zen Dark Mode & Neon accents) + Glassmorphism
- **Audio Engine:** Web Audio API & HTML5 Audio
- **State Management:** React Context + React Hooks (`useState`, `useReducer`, `useRef`)
- **Database:** Supabase BaaS (PostgreSQL) - Accessed directly via `@supabase/supabase-js`
- **Routing:** React Router (`react-router-dom`)

## 📂 Project Structure
src/
├── components/        # Isolated & Reusable Components
│   ├── PomodoroTimer.tsx   # Pomodoro widget
│   ├── AmbientMixer.tsx    # White noise audio mixer
│   ├── LofiPlayer.tsx      # iTunes search & player
│   ├── TodoChecklist.tsx   # Today's goal items
│   ├── BreathingBubble.tsx # Breathing visualizer (SVG)
│   ├── SceneSelector.tsx   # Background switcher
│   └── Header.tsx          # Navigation (hidden on /space)
├── pages/             # Page Components (Views)
│   ├── Lobby.tsx           # Lobby Entrance Page (Sảnh chờ)
│   ├── Space.tsx           # Immersive Focus Studio (Bảng điều khiển)
│   ├── Journal.tsx         # Productivity Journal (Contribution Grid)
│   └── Settings.tsx        # Settings page
├── App.tsx            # Main application layout & Routing config
├── main.tsx           # React entry point
└── index.css          # Custom Glassmorphism & Tailwind styles

## 📜 Coding Conventions & Rules
- **TypeScript:** Strict Mode. **NO `any` type.** Every function parameter and return type must be explicitly typed.
- **Components:** Functional components only. Use PascalCase. Prefer modular composition.
- **Files:** Component files must be PascalCase.tsx, hooks and utility files must be camelCase.ts.
- **Path Aliases:** Always use absolute path alias `@/*` for imports (e.g., `@/components/PomodoroTimer` instead of `../../components/PomodoroTimer`).
- **Styling:** Utilize standard Tailwind utility classes. Avoid inline styles.
- **Audio Management (CRITICAL):**
  - All Audio instances must be managed using React `useRef` as a singleton (e.g., `const audioRef = useRef<HTMLAudioElement | null>(null)`).
  - You must never instantiate new Audio objects during React render cycles as this triggers massive memory leaks and overlapping sound streams.
  - Implement a clean-up function inside `useEffect` return block to pause and destroy audio streams on component unmount.
- **State Persistence (Supabase Sync):**
  - Sync all user preferences (theme, current scene, timers, volumes) to table `user_preferences`.
  - Sync tasks to table `todos` (insert, update, delete).
  - Record completed focus sessions into table `focus_sessions` immediately on timer complete.
```

#### 2️⃣ File `ARCHITECTURE.md` (Bản đồ kiến trúc dự án)
Tạo file [ARCHITECTURE.md](file:///Users/thanhdo/Documents/Project/antigravity-vibe-coding-course/ARCHITECTURE.md) với nội dung:

```markdown
# ARCHITECTURE.md

## 🏗️ Routing & Page Architecture
VibeSpace is constructed as a React Single Page Application (SPA) using React Router with 4 views:

```mermaid
graph TD
    A[Lobby /] -->|Enter Studio| B[/space - Focus Studio]
    A -->|View Stats| C[/journal - Productivity Stats]
    A -->|Configure| D[/settings - Configurations]
    
    subgraph Space View [/space]
        B --> W1[PomodoroTimer]
        B --> W2[AmbientMixer]
        B --> W3[LofiPlayer]
        B --> W4[TodoChecklist]
        B --> W5[BreathingBubble]
    end
```

- **Navigation Visibility:**
  - Trang `/space` (Immersive Studio) là môi trường tập trung tuyệt đối. **Ẩn hoàn toàn Header/Footer** bằng cách kiểm tra hook `useLocation()` từ `react-router-dom`.
  - Các trang `/`, `/journal`, `/settings` hiển thị `Header` chung để điều hướng linh hoạt.

## 🔄 State Synchronization Flow (Supabase BaaS)
1. **Supabase Client:** Initialized once in `src/supabaseClient.ts`.
2. **Audio State & Preferences:** Local changes to volumes or active scene are immediately pushed to `user_preferences` table in Supabase via an upsert query.
3. **Productivity History Grid:** Triggered on Pomodoro Timer complete. A new session row is inserted into `focus_sessions` table in Supabase. The `/journal` page fetches this table to draw the GitHub-style contribution grid.
4. **Daily Goals:** Fetched from `todos` table in Supabase on app load, synced instantly on create/check/delete.
```

#### 3️⃣ File `PLAN.md` (Theo dõi tiến độ phát triển)
Tạo file [PLAN.md](file:///Users/thanhdo/Documents/Project/antigravity-vibe-coding-course/PLAN.md) với nội dung:

```markdown
# PLAN.md - VibeSpace Development Checklist

## 🎯 Phase 1: Preparation & Environment [Completed]
- [x] Write PRD & Tech Specs
- [x] Configure Stitch Skills globally
- [x] Initialize Git Repository `vibespace-studio`

## 🎨 Phase 2: Design System & Screens [In Progress]
- [/] Design VibeSpace Color Tokens & Glassmorphic styles in Stitch
- [ ] Write DESIGN.md
- [ ] Create UI screen for Lobby Entrance (Sảnh chờ)
- [ ] Create UI screen for Focus Studio (/space) with 4 floating cards
- [ ] Create UI screen for Journal & Settings page

## ⚛️ Phase 3: Code Conversion & App Scaffold [Planned]
- [ ] Run `react-components` skill to generate TSX
- [ ] Initialize ReactJS project using Vite and React Router
- [ ] Map routing `/`, `/space`, `/journal`, `/settings` in App.tsx
- [ ] Add Custom Glassmorphic classes to `index.css`

## 🎵 Phase 4: Core Engine & Supabase Integration [Planned]
- [ ] Setup Supabase Client and create DB tables (`user_preferences`, `todos`, `focus_sessions`)
- [ ] Implement multi-channel sound mixing inside `AmbientMixer` (Rain, Waves, Fire, Cafe)
- [ ] Program `LofiPlayer` with iTunes Search API integration (dynamic search, CD spin)
- [ ] Program `PomodoroTimer` and insert focus sessions to Supabase on complete
- [ ] Sync Todos and Preferences dynamically with Supabase tables
- [ ] Build GitHub-style Contribution Grid visualizer on `/journal` from Supabase data

## ✨ Phase 5: Polish & Animations [Planned]
- [ ] Code Breathing Bubble (SVG stretching animation)
- [ ] Add Background Scene Selector (image/video URL customizer)
- [ ] Optimize layouts for Mobile & responsive screens
- [ ] Deploy to Vercel/Netlify
```

---

<a id="step-4"></a>
## Step 4: Tạo Stitch Project & Design System (Màu sắc Cyber-Zen)

### 🎯 Mục tiêu
Tạo project trên ứng dụng thiết kế Stitch và thiết lập Design System mang phong cách **Cyber-Zen** (tối giản, huyền bí, sử dụng kính mờ glassmorphism và đèn neon dịu mắt để chống mỏi mắt cho lập trình viên).

### 📝 Prompt mẫu – Tạo Project & Design System

Gửi prompt có cấu trúc sau tới Antigravity:

```text
[BỐI CẢNH / CONTEXT]
Tôi đang ở giai đoạn đầu thiết kế giao diện cho VibeSpace Studio trên Stitch. Theo như ARCHITECTURE.md, chúng tôi cần một hệ thống UI nhất quán với phong cách Cyber-Zen.

[VAI TRÒ / ROLE]
Bạn là một Senior UI/UX Designer chuyên nghiệp.

[NHIỆM VỤ / INSTRUCTIONS]
1. Hãy tạo một Stitch project mới có tên "VibeSpace Studio".
2. Thiết lập một Design System Cyber-Zen cao cấp cho project này với các mã màu và thông số sau:
   - Primary Color (Neon Indigo): #6366F1
   - Secondary Color (Cyber Emerald): #10B981
   - Accent Color (Hot Pink): #EC4899
   - Background Color (Dark Slate): #0B0F19 (tạo cảm giác không gian vũ trụ sâu thẳm)
   - Card Glass (Kính mờ): #151D30 với opacity 70%, viền trong suốt nhẹ (#FFFFFF1A) và hiệu ứng blur 16px.
   - Text Color: #F8FAFC (White/Silver), Sub-text: #94A3B8 (Slate-400).
   - Typography: Sử dụng font chữ "Outfit" hoặc "Inter" hiện đại, thanh lịch.
   - Corners: Bo góc mềm mại với bán kính 16px (tương đương rounded-2xl).
   - Theme Mode: Dark Mode duy nhất.

[ĐẦU RA MONG ĐỢI / EXPECTED OUTPUT]
Xác nhận đã khởi tạo Stitch Project và áp dụng thành công hệ màu thiết kế Cyber-Zen lên dự án.
```

---

<a id="step-5"></a>
## Step 5: Enhance Prompt & Thiết kế Sảnh chờ (Lobby Entrance Page)

### 🎯 Mục tiêu
Sử dụng công cụ `enhance-prompt` để tối ưu hóa và thiết kế sảnh chờ Lobby huyền ảo trên Stitch.

### 📝 Prompt mẫu – Tối ưu hóa prompt với Enhance Prompt skill

```text
[BỐI CẢNH / CONTEXT]
Tôi cần thiết kế trang Lobby sảnh chờ cho VibeSpace Studio nhưng muốn prompt thật tinh xảo để Stitch vẽ ra giao diện đẹp nhất.

[VAI TRÒ / ROLE]
Bạn là một AI Prompt Engineer chuyên biệt về thiết kế UI.

[NHIỆM VỤ / INSTRUCTIONS]
Hãy sử dụng công cụ `enhance-prompt` để nâng cấp yêu cầu thiết kế thô sau đây thành một cấu trúc prompt thiết kế chuyên nghiệp:
"Tạo sảnh chờ Lobby của VibeSpace Studio. Nền tối có hạt bụi sao bay. Ở giữa có một card kính lớn hiển thị tiêu đề phát sáng, lời giới thiệu và nút bấm rực rỡ bắt đầu tập trung. Ở dưới có thêm các con số thống kê streak của người dùng."
```

### 📝 Prompt mẫu – Thiết kế sảnh chờ Lobby trên Stitch

Sử dụng kết quả prompt đã tối ưu hoặc prompt cấu trúc sau để vẽ screen:

```text
[BỐI CẢNH / CONTEXT]
Tôi đang trong project Stitch "VibeSpace Studio" và muốn vẽ giao diện trang đầu tiên: Sảnh chờ Lobby Entrance.

[VAI TRÒ / ROLE]
Bạn là một Senior UI Designer chuyên thiết kế Dashboard mờ kính cao cấp.

[NHIỆM VỤ / INSTRUCTIONS]
Hãy tạo một Screen mới cho trang Lobby Entrance với các thành phần thiết kế chi tiết:
1. Background: Gradient chéo mượt mà từ Deep Slate (#0B0F19) sang Dark Purple (#1E152A).
2. Center Hero Card (Floating Glassmorphic Card):
   - Bo góc 24px, viền sáng mỏng 1px (#FFFFFF1A), hiệu ứng đổ bóng tím nhẹ phát sáng.
   - Phía trên cùng: Một tag nhỏ "🎧 VIBESPACE v1.0" chữ tím neon phát sáng.
   - Tiêu đề chính: "Your Sanctuary for Deep Work" (Font Outfit, size lớn, chữ trắng).
   - Nội dung mô tả: "Layer natural ambient sounds, fetch customizable Lo-fi playlists, and synchronize your Pomodoro workflow in a dark, distraction-free environment."
   - Nút CTA chính: "Enter Immersive Space" (Nút bo tròn 16px, phủ gradient chéo từ Neon Indigo #6366F1 sang Hot Pink #EC4899, chữ trắng đậm, đổ bóng phát sáng neon rực rỡ).
3. Quick Stats Bar (Đặt nằm lơ lửng ngay dưới Hero Card):
   - Một hàng ngang gồm 3 thẻ kính mỏng hiển thị:
     + "Today Focus: 120 mins"
     + "Current Streak: 5 Days 🔥"
     + "Rank: Zen Master 🧘‍♂️"
4. Bottom Bar:
   - Một ô nhỏ hiển thị trích dẫn tĩnh: "Act as if what you do makes a difference. It does. — William James" (chữ mờ Slate-400).
   - Các liên kết điều hướng mờ: [Productivity Journal] | [Timer Settings] | [Quick Guide].

[RÀNG BUỘC / CONSTRAINTS]
Thiết kế cho độ phân giải Desktop (1920x1080). Đảm bảo tuân thủ chặt chẽ bảng màu Cyber-Zen đã thiết lập ở Step 4.
```

---

<a id="step-6"></a>
## Step 6: Thiết kế các trang chính (Immersive Studio, Stats Journal, Settings)

### 🎯 Mục tiêu
Sử dụng công cụ sinh mã hàng loạt trang `stitch-loop` để tạo giao diện lõi Focus Space tràn viền tích hợp các Floating Card và hai trang phụ `/journal`, `/settings`.

### 📝 Prompt mẫu – Thiết kế Focus Studio `/space`

```text
[BỐI CẢNH / CONTEXT]
Tôi cần tạo trang lõi Immersive Focus Studio (/space) nơi người dùng trực tiếp làm việc trong project Stitch "VibeSpace Studio".

[VAI TRÒ / ROLE]
Bạn là một UI/UX Designer chuyên thiết kế các sản phẩm SaaS tối giản, tập trung.

[NHIỆM VỤ / INSTRUCTIONS]
Hãy tạo một screen mới cho trang `/space` có cấu trúc layout như sau:
- Background: Một hình ảnh phong cảnh rừng thông phủ đầy sương mù yên bình làm nền toàn màn hình (full-bleed landscape).
- Layout: Gồm 4 thẻ kính mờ nổi (Floating Glassmorphic Cards) được định vị khéo léo ở các góc màn hình để không che đi trung tâm phong cảnh:
  1. WIDGET 1 (Top-Left): Pomodoro Timer
     - Một đồng hồ số lớn hiển thị "25:00" phát sáng xanh mint nhẹ.
     - 3 nút điều khiển tròn tối giản: Play, Pause, Reset.
     - Nhãn hiển thị trạng thái: "Focus Session".
  2. WIDGET 2 (Bottom-Left): Ambient Sound Mixer
     - Tiêu đề: "Soundscapes".
     - 4 thanh kéo volume ngang mỏng tương ứng: 🌧️ Rain, 🔥 Fire, 🌊 Ocean, ☕ Cafe.
     - Mỗi thanh trượt có một nút mute/unmute nhanh hình chiếc loa nhỏ.
  3. WIDGET 3 (Top-Right): Lofi Player (iTunes API)
     - Khung tìm kiếm nhỏ phía trên: "Search lo-fi beats (e.g., jazz, synthwave)..."
     - Một đĩa CD album nhạc tròn mô phỏng đang quay mượt.
     - Text hiển thị: "Late Night Code" - Artist: "Chillhop Beats".
     - Thanh thời gian tiến trình và các nút Next/Prev/Pause.
  4. WIDGET 4 (Bottom-Right): Today Goals Checklist
     - Tiêu đề: "Deep Focus Goals".
     - Checklist 3 đầu việc nhỏ có ô tick:
       + [x] Refactor core state using Refs
       + [ ] Setup AGENTS.md for AI Agent
       + [ ] Drink 500ml water
     - Một nút bấm nhanh ở dưới: "+ Add Focus Goal".
- CENTER BOTTOM: Breathing Bubble
  - Một vòng tròn SVG đồng tâm phát sáng màu tím, có hoạt ảnh co giãn nhịp nhàng để hướng dẫn hít thở.
  - Text chính giữa vòng tròn: "Breathe In (4s)" hoặc "Hold (4s)" hoặc "Breathe Out (4s)".

[ĐẦU RA MONG ĐỢI / EXPECTED OUTPUT]
Thiết kế trang `/space` hoàn chỉnh trên Stitch với các layout float cards mờ kính sang trọng.
```

### 📝 Prompt mẫu – Thiết kế các trang phụ `/journal` & `/settings` bằng `stitch-loop`

```text
[BỐI CẢNH / CONTEXT]
Tôi muốn hoàn thiện toàn bộ các trang giao diện cho VibeSpace Studio trên Stitch.

[VAI TRÒ / ROLE]
Bạn là một Front-End Architect.

[NHIỆM VỤ / INSTRUCTIONS]
Hãy sử dụng công cụ `stitch-loop` để tạo thêm 2 trang phụ đồng bộ phong cách Cyber-Zen mờ kính trong project:
1. Trang Productivity Journal (/journal):
   - Có nút quay lại "<- Back to Focus Space" mờ ở góc trái.
   - Khu vực trung tâm: Một grid biểu đồ đóng góp (Contribution Grid) gồm 52 tuần x 7 ngày, đổi màu sắc từ tím nhạt sang tím neon đậm đại diện cho số phút tập trung tích lũy mỗi ngày của người dùng.
   - Cột bên phải: Timeline lịch sử các phiên hoàn thành (ví dụ: "10:30 PM - Hoàn thành phiên Pomodoro 25p", "08:15 PM - Hoàn thành mục tiêu: Write PRD").
2. Trang Quick Settings (/settings):
   - Khu vực tuỳ chỉnh thời gian đếm ngược Pomodoro (Focus Time: 15/25/45m, Break Time: 5/10m).
   - Bộ chọn hình nền nhanh (Scene Selection) hoặc ô Input dán đường dẫn URL phong cảnh tùy chọn từ internet.
   - Nút khẩn cấp: "Reset All Database Data" màu đỏ mờ để xoá sạch các bản ghi cấu hình tùy chọn trong Supabase database.
```

---

<a id="step-7"></a>
## Step 7: Tạo DESIGN.md Document (Design Specs)

### 🎯 Mục tiêu
Sử dụng công cụ `design-md` của Stitch để chiết xuất toàn bộ thông số tokens, CSS variables, luật glassmorphism và animations sang file `.stitch/DESIGN.md` phục vụ việc viết CSS/Tailwind đồng bộ.

### 📝 Prompt mẫu

Gửi prompt sau tới Antigravity:

```text
[BỐI CẢNH / CONTEXT]
Tôi đã hoàn tất việc thiết kế toàn bộ 4 trang giao diện tuyệt đẹp cho VibeSpace Studio trên Stitch.

[VAI TRÒ / ROLE]
Bạn là một Design System Engineer.

[NHIỆM VỤ / INSTRUCTIONS]
Hãy chạy công cụ `design-md` để phân tích project thiết kế "VibeSpace Studio" và tự động sinh ra tài liệu đặc tả `DESIGN.md` tại thư mục `.stitch/` của workspace.
Đặc tả này cần làm nổi bật các điểm kỹ thuật sau để chuẩn bị code:
1. Định nghĩa các CSS variables hệ màu tối Cyber-Zen.
2. Các class Tailwind chi tiết để dựng lớp kính mờ Glassmorphism (độ trong suốt, độ mờ backdrop filter, màu border phát sáng).
3. Hoạt ảnh CSS keyframes cho đĩa nhạc CD quay chậm và bong bóng thiền thở co giãn nhịp nhịp 4s-4s-4s.
```

---

<a id="step-8"></a>
## Step 8: Convert Design → React Code sử dụng react-components skill

### 🎯 Mục tiêu
Sử dụng công cụ `react-components` để chuyển đổi toàn bộ 4 screens tĩnh từ Stitch thành mã nguồn cấu trúc React Components TypeScript và Tailwind CSS hoàn chỉnh.

### 📝 Prompt mẫu

Gửi prompt cấu trúc cao sau tới Antigravity:

```text
[BỐI CẢNH / CONTEXT]
Tôi đã có tài liệu đặc tả thiết kế `.stitch/DESIGN.md` và các trang màn hình vẽ trên Stitch. Tôi cần đưa giao diện này vào dự án code ReactJS (Vite).

[VAI TRÒ / ROLE]
Bạn là một Senior Frontend Engineer chuyên sâu về React, Tailwind CSS và TypeScript.

[NHIỆM VỤ / INSTRUCTIONS]
Hãy chạy công cụ `react-components` skill để phân tích 4 screens trên Stitch của "VibeSpace Studio" và tạo ra các React Components tương ứng đặt trong thư mục `src/components/` của workspace:
- `PomodoroTimer.tsx` (Widget đếm ngược focus/break)
- `AmbientMixer.tsx` (Widget trượt chỉnh âm thanh mưa, sóng, lửa, cafe)
- `LofiPlayer.tsx` (Trình phát nhạc kèm input tìm kiếm)
- `TodoChecklist.tsx` (Widget checklist mục tiêu ngày)
- `BreathingBubble.tsx` (Hoạt ảnh co giãn thiền thở SVG)
- `SceneSelector.tsx` (Bộ chọn đổi hình nền động phong cảnh)

[RÀNG BUỘC KỸ THUẬT / CONSTRAINTS]
- Bắt buộc sử dụng TypeScript (khai báo tường minh kiểu dữ liệu, KHÔNG được dùng `any`).
- Dựng lớp nền kính mờ bằng các class Tailwind chuẩn xác: `bg-slate-900/60 backdrop-blur-md border border-white/10 shadow-2xl shadow-indigo-500/10`.
- Chừa sẵn các event handlers và prop types để chuẩn bị lập trình logic ở các bước sau.
```

---

<a id="step-9"></a>
## Step 9: Khởi tạo Project ReactJS (Vite) & Tích hợp cấu trúc định tuyến

### 🎯 Mục tiêu
Khởi tạo cấu trúc dự án React + Vite + TypeScript chuẩn hóa và dựng bản đồ định tuyến `/`, `/space`, `/journal`, `/settings` sử dụng React Router (`react-router-dom`) lồng ghép các component đã convert.

### 📝 Prompt mẫu – Khởi tạo dự án Vite React bằng Terminal CLI

Gõ các câu lệnh sau trong Terminal để khởi tạo project và cài đặt router:

```bash
# Khởi tạo React + Vite + TypeScript trong thư mục hiện tại
npx -y create-vite@latest ./ --template react-ts

# Cài đặt thư viện định tuyến react-router-dom
npm install react-router-dom
```

### 📝 Prompt mẫu – Tích hợp Route và Global Style

Sau khi khởi tạo xong Vite React, hãy gửi prompt có cấu trúc sau tới Antigravity để Agent tự động dọn dẹp và cấu hình định tuyến:

```text
[BỐI CẢNH / CONTEXT]
Tôi vừa khởi tạo thành công project React + Vite + TypeScript trắng trong workspace và cài đặt react-router-dom. Tôi muốn thiết lập hệ thống trang theo đúng ARCHITECTURE.md.

[VAI TRÒ / ROLE]
Bạn là một React Router Architect.

[NHIỆM VỤ / INSTRUCTIONS]
Hãy thực hiện dọn dẹp và cấu hình định tuyến cho dự án VibeSpace Studio:
1. Tạo các trang trong thư mục `src/pages/`:
   - `Lobby.tsx` (Trang sảnh chờ: hiển thị card kính mờ giới thiệu và nút CTA chuyển sang trang `/space`).
   - `Space.tsx` (Trang Immersive Focus Studio chính: bọc toàn trang trong hình nền phong cảnh động, chứa 4 widget nổi và Breathing Bubble).
   - `Journal.tsx` (Trang Nhật ký năng suất chứa Contribution Grid).
   - `Settings.tsx` (Trang cài đặt Timer và custom URL background).
2. Tạo thanh điều hướng Header chung tại `src/components/Header.tsx` (Hiển thị link Lobby, Journal, Settings). 
   - LƯU Ý QUAN TRỌNG: Sử dụng hook `useLocation` từ `react-router-dom` để ẩn hoàn toàn Header này khi người dùng truy cập vào trang `/space` nhằm mang lại trải nghiệm làm việc tập trung không xao nhãng.
3. Định nghĩa định tuyến ở `src/App.tsx` sử dụng BrowserRouter, Routes, và Route để ánh xạ các page trên tới các path tương ứng `/`, `/space`, `/journal`, `/settings`.
4. Cập nhật file `src/index.css` để định nghĩa các hiệu ứng kính mờ và hoạt ảnh spin chậm phục vụ đĩa CD:
   ```css
   @keyframes spin-slow {
     from { transform: rotate(0deg); }
     to { transform: rotate(360deg); }
   }
   .animate-spin-slow {
     animation: spin-slow 20s linear infinite;
   }
   .glass-panel {
     background: rgba(11, 15, 25, 0.65);
     backdrop-filter: blur(12px);
     -webkit-backdrop-filter: blur(12px);
     border: 1px solid rgba(255, 255, 255, 0.08);
   }
   ```

[ĐẦU RA MONG ĐỢI / EXPECTED OUTPUT]
Xác nhận cấu trúc routing React Router đã chạy thử thành công với lệnh `npm run dev` không phát sinh lỗi.
```

---

<a id="step-10"></a>
## Step 10: GitHub Workflow – Branch & Pull Request tự động

### 🎯 Mục tiêu
Thực hành kỹ thuật Git chuyên nghiệp thế giới thực. Sử dụng GitHub MCP Server để tạo branch làm việc mới, commit toàn bộ cấu trúc file và gửi Pull Request tự động lên GitHub.

### 📝 Prompt mẫu

Gửi prompt sau tới Antigravity:

```text
[BỐI CẢNH / CONTEXT]
Tôi đã xây dựng xong cấu trúc định tuyến React Router và giao diện thô mờ kính cho VibeSpace Studio. Tôi cần đẩy phần code nền tảng này lên GitHub.

[VAI TRÒ / ROLE]
Bạn là một DevOps Engineer và Git Administrator.

[NHIỆM VỤ / INSTRUCTIONS]
Hãy sử dụng công cụ GitHub MCP Server để thực hiện quy trình Git tự động hóa sau:
1. Tạo một nhánh (branch) mới có tên là `feature/vibespace-core` tách từ branch `main`.
2. Commit toàn bộ cấu trúc file ReactJS (Vite), components, và file index.css vừa được tạo lên branch này.
3. Tạo một Pull Request (PR) từ nhánh `feature/vibespace-core` vào nhánh chính `main` trên repository GitHub:
   - Tiêu đề PR: "feat: Initialize VibeSpace Studio core dashboard, routing, and glassmorphic UI layout"
   - Mô tả PR: Mô tả chi tiết việc xây dựng cấu trúc định tuyến 4 trang chính bằng React Router, lồng ghép các widgets tĩnh kính mờ phong cách Cyber-Zen, và cấu hình ẩn Header tại trang focus `/space` để loại bỏ xao nhãng.

[ĐẦU RA MONG ĐỢI / EXPECTED OUTPUT]
Đường dẫn liên kết trực tiếp tới Pull Request vừa được tạo trên GitHub của bạn.
```

---

<a id="step-11"></a>
## Step 11: Tích hợp âm thanh đa kênh & APIs (iTunes Lo-fi, Ambient Mixer, ZenQuotes)

### 🎯 Mục tiêu
Biến ứng dụng tĩnh thành một ứng dụng sống động bằng việc tích hợp các API thực tế, lập trình audio đa kênh hoạt động song song mượt mà, và đồng bộ cơ sở dữ liệu thời gian thực với Supabase.

### 📝 Prompt mẫu – Tích hợp LofiPlayer & iTunes API

Gửi prompt cấu trúc cao sau để lập trình component `LofiPlayer.tsx`:

```text
[BỐI CẢNH / CONTEXT]
Tôi cần lập trình logic phát nhạc cho component `src/components/LofiPlayer.tsx` trong VibeSpace Studio.

[VAI TRÒ / ROLE]
Bạn là một Senior React Developer chuyên sâu về Web Audio API.

[NHIỆM VỤ / INSTRUCTIONS]
Hãy viết logic chi tiết cho component `LofiPlayer.tsx` đáp ứng các yêu cầu kỹ thuật sau:
1. iTunes Search API integration: 
   - Viết hàm fetch danh sách bài hát không lời từ iTunes API: `https://itunes.apple.com/search?term={keyword}&media=music&entity=musicTrack&limit=15`.
   - Mặc định tìm kiếm từ khóa "lofi chill". Cho phép người dùng nhập từ khóa tìm kiếm thể loại khác (ví dụ: jazz, synthwave, ambient) qua một ô input và bấm Search để cập nhật playlist mới.
   - Lọc dữ liệu lấy ra: `trackId`, `trackName` (tên bài), `artistName` (nghệ sĩ), `previewUrl` (file MP3 nghe thử 30 giây chất lượng cao), và `artworkUrl100` (hãy tự động nâng chất lượng ảnh bìa lên kích thước lớn bằng cách thay thế chuỗi "100x100bb" thành "400x400bb").
2. Quản lý Audio Engine Singleton (QUAN TRỌNG):
   - Để chống hiện tượng trùng lặp luồng âm thanh hoặc rò rỉ bộ nhớ khi component re-render, bạn bắt buộc phải quản lý đối tượng `new Audio` bên trong một React `useRef` dạng singleton: `const audioRef = useRef<HTMLAudioElement | null>(null);`.
   - Viết các hàm điều khiển phát nhạc: Play, Pause, Next, Prev, thay đổi âm lượng của luồng nhạc Lo-fi.
   - Lắng nghe sự thay đổi của bài hát hoặc trạng thái Play/Pause để tương tác chính xác với `audioRef.current`.
   - Đảm bảo có hàm dọn dẹp (clean-up) dừng audio trong return block của `useEffect` khi unmount.
3. Đồng bộ giao diện:
   - Khi bài hát đang phát (`isPlaying`), ảnh bìa album sẽ xoay tròn chậm rãi bằng class `animate-spin-slow`, khi pause thì dừng xoay.

[RÀNG BUỘC / CONSTRAINTS]
Sử dụng TypeScript strict mode. Không sử dụng kiểu dữ liệu `any`. Thay đổi âm lượng của luồng nhạc Lo-fi bằng cách cập nhật trường `lofi_volume` trong bảng `user_preferences` của Supabase thông qua một query update/upsert.
```

> 💡 **Mã nguồn tham khảo chuẩn cho LofiPlayer.tsx:**
> Học viên có thể tham khảo trực tiếp cấu trúc code mẫu sử dụng React useRef và Audio API an toàn đã được cung cấp chi tiết ở phần cẩm nang [LofiPlayer.tsx](file:///Users/thanhdo/Documents/Project/antigravity-vibe-coding-course/docs/section-07-vibe-coding/step-by-step-guide.md#445-tham-khao-code-mau-tich-hop-api-va-am-thanh) để đảm bảo không bị dính lỗi re-render lặp âm thanh!

### 📝 Prompt mẫu – Lập trình AmbientMixer (Tiếng ồn trắng đa luồng)

Gửi prompt sau để lập trình component `AmbientMixer.tsx` phát song song nhiều âm thanh nền:

```text
[BỐI CẢNH / CONTEXT]
Tôi muốn lập trình component `src/components/AmbientMixer.tsx` trong VibeSpace Studio giúp người dùng có thể kéo thả trộn các âm thanh thiên nhiên thư giãn chạy song song với nhạc Lo-fi.

[VAI TRÒ / ROLE]
Bạn là một Audio Engineer và React Developer.

[NHIỆM VỤ / INSTRUCTIONS]
Hãy lập trình logic điều phối âm thanh đa kênh lặp vòng cho `AmbientMixer.tsx`:
1. Quản lý 4 luồng âm thanh thiên nhiên song song bằng cách lưu 4 đối tượng `HTMLAudioElement` vào một React `useRef` dạng Object/Dictionary để tránh re-render sinh luồng mới:
   - 🌧️ Rain (Tiếng mưa rơi): `https://assets.mixkit.co/active_storage/sfx/2433/2433-500.wav`
   - 🔥 Fire (Lửa trại bập bùng): `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3` (SFX Campfire)
   - 🌊 Ocean (Tiếng sóng biển): `https://assets.mixkit.co/active_storage/sfx/2501/2501-500.wav`
   - ☕ Cafe (Quán cafe xôn xao): `https://assets.mixkit.co/active_storage/sfx/1074/1074-500.wav`
2. Thiết lập thuộc tính `loop = true` cho tất cả các đối tượng Audio này để âm thanh lặp lại vô tận mượt mà.
3. Thiết kế 4 thanh trượt slider tương ứng với mỗi kênh âm thanh, cho phép kéo chỉnh volume độc lập từ 0% đến 100% (tương đương 0.0 đến 1.0 của đối tượng Audio). Có nút Mute/Unmute nhanh cho từng kênh.
4. Đồng bộ hóa cấu hình âm lượng: Mỗi khi người dùng thay đổi âm lượng của một kênh bất kỳ, hãy cập nhật âm lượng đối tượng Audio thực tế và tự động đồng bộ các giá trị âm lượng (rain_volume, campfire_volume, waves_volume, wind_volume) lên bảng `user_preferences` của Supabase. Khi người dùng tải lại trang, hãy truy vấn từ Supabase để phục hồi đúng tỷ lệ hòa âm yêu thích của họ!

[RÀNG BUỘC / CONSTRAINTS]
TypeScript strict mode. Xử lý triệt để việc huỷ phát âm thanh trong hook useEffect return để tránh rò rỉ âm thanh khi chuyển trang.
```

### 📝 Prompt mẫu – Lập trình PomodoroTimer & Persistence

```text
[BỐI CẢNH / CONTEXT]
Tôi cần lập trình logic đếm ngược cho component `src/components/PomodoroTimer.tsx` trong VibeSpace Studio.

[VAI TRÒ / ROLE]
Bạn là một React Logic Developer.

[NHIỆM VỤ / INSTRUCTIONS]
Hãy viết logic cho đồng hồ đếm ngược Pomodoro:
1. Đồng hồ đếm ngược hoạt động với 3 chế độ luân phiên: 'focus' (Mặc định 25 phút), 'short_break' (5 phút), và 'long_break' (15 phút).
2. Khi đồng hồ đếm ngược chạy về 0:00:
   - Tự động phát một tiếng chuông báo sfx nhẹ nhàng (ví dụ: `https://assets.mixkit.co/active_storage/sfx/911/911-500.wav`).
   - Tự động ghi nhận 1 phiên làm việc thành công bằng cách chèn một bản ghi mới (insert row) vào bảng `focus_sessions` trên Supabase gồm `user_id` và `minutes_focused` (Dữ liệu này sẽ được trang `/journal` truy vấn để vẽ Contribution Grid).
   - Tự động chuyển đổi sang phiên tiếp theo (ví dụ từ focus sang short_break).
3. Lắng nghe và đồng bộ cấu hình thời gian Pomodoro tuỳ chỉnh (work_time, short_break, long_break) từ bảng `user_preferences` trên Supabase.
```

---

<a id="step-12"></a>
## Step 12: Polish UI, Responsive & Animations

### 🎯 Mục tiêu
Đạt tới mức độ hoàn thiện tối đa ("wow factor") cho VibeSpace Studio bằng cách lập trình hoạt ảnh co giãn thiền thở mượt mà, bộ chọn đổi hình nền động linh hoạt, tối ưu responsive trên thiết bị di động và deploy ứng dụng lên internet.

### 📝 Prompt mẫu – Lập trình BreathingBubble (SVG thiền thở)

```text
[BỐI CẢNH / CONTEXT]
Tôi muốn hoàn thiện vòng tròn thiền thở `BreathingBubble.tsx` nằm ở vị trí trung tâm đáy trang `/space` của VibeSpace Studio.

[VAI TRÒ / ROLE]
Bạn là một UI Motion Designer và SVG Specialist.

[NHIỆM VỤ / INSTRUCTIONS]
Hãy cập nhật component `src/components/BreathingBubble.tsx`:
1. Vẽ một bong bóng nước hình tròn SVG tuyệt đẹp có màu gradient tím mờ, viền phát sáng nhẹ neon và bóng đổ lấp lánh (box-shadow/drop-shadow).
2. Viết hoạt ảnh CSS Keyframes tự động co giãn kích thước vòng tròn theo chu kỳ thiền thở 12 giây:
   - 4 giây đầu tiên: Vòng tròn từ từ phình to lên (Scale 1.25) - Nhãn chữ trung tâm hiển thị: "Hít vào... 🧘‍♂️" (Breathe In).
   - 4 giây tiếp theo: Vòng tròn giữ nguyên kích thước lớn phát sáng rực rỡ - Nhãn chữ trung tâm hiển thị: "Giữ hơi thở... ⚓" (Hold).
   - 4 giây cuối cùng: Vòng tròn từ từ co nhỏ lại về kích thước ban đầu (Scale 0.85) - Nhãn chữ trung tâm hiển thị: "Thở ra chậm rãi... 🍃" (Breathe Out).
3. Hoạt ảnh cần chuyển động cực kỳ mềm mại, mượt mà (sử dụng cubic-bezier transition).

[ĐẦU RA MONG ĐỢI / EXPECTED OUTPUT]
Một component thiền thở SVG hoạt động tuần hoàn mượt mà không bị giật lag, giúp lập trình viên thư giãn đầu óc.
```

### 📝 Prompt mẫu – Lập trình đổi cảnh phong cảnh nền (SceneSelector)

```text
[BỐI CẢNH / CONTEXT]
Tôi muốn lập trình component `src/components/SceneSelector.tsx` giúp người dùng thay đổi hình nền toàn màn hình của trang `/space`.

[VAI TRÒ / ROLE]
Bạn là một Frontend Engineer.

[NHIỆM VỤ / INSTRUCTIONS]
Hãy cập nhật component `SceneSelector.tsx` và tích hợp với trang `/space` để mang lại khả năng cá nhân hoá hình nền động cực sâu:
1. Cung cấp một danh sách các cảnh đẹp chất lượng cao được tuyển chọn sẵn:
   - Forest Rain (Rừng thông sương mù): `https://images.unsplash.com/photo-1511497584788-876760111969?w=1920&q=80`
   - Cozy Cafe (Quán cafe lo-fi đêm): `https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&q=80`
   - Retro Horizon (Hoàng hôn neon 3D): `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=80`
2. Thiết kế một ô Input thông minh cho phép người dùng:
   - Dán một đường dẫn URL hình ảnh tĩnh hoặc ảnh động GIF bất kỳ từ internet làm hình nền cá nhân.
   - Hoặc nhập một từ khóa tìm ảnh nhanh (ví dụ: "cyberpunk", "autumn", "zen") và bấm Go để hệ thống tự động tìm và tải ảnh nền tuyệt đẹp từ Unsplash về.
3. Lưu hình nền đang hoạt động của người dùng vào trường `current_scene` trong bảng `user_preferences` của Supabase để khi họ truy cập lại vào Focus Space lần sau, không gian cá nhân của họ lập tức hiển thị mà không cần cài đặt lại!
```

### 📝 Prompt mẫu – Tối ưu hóa Responsive Mobile & Deploy dự án

```text
[BỐI CẢNH / CONTEXT]
Dự án VibeSpace Studio đã chạy rất tốt trên màn hình máy tính lớn. Tôi muốn tối ưu hóa để ứng dụng hiển thị tuyệt vời trên di động và chuẩn bị deploy.

[VAI TRÒ / ROLE]
Bạn là một Senior Frontend Developer kiêm DevOps Engineer.

[NHIỆM VỤ / INSTRUCTIONS]
1. Hãy tối ưu CSS Responsive cho trang Immersive Studio `/space` trên thiết bị di động (màn hình < 768px):
   - Thay vì xếp đè các floating card gây chật chội, hãy ẩn 4 widget lớn và thay thế bằng một thanh điều hướng tab nhỏ gọn ở đáy màn hình di động: [⏱️ Pomodoro] - [🎵 Mixer] - [🎧 Lofi] - [📋 Goals]. Người dùng nhấn vào tab nào thì chỉ hiển thị nổi duy nhất Widget đó lên màn hình trên nền phong cảnh.
   - Vòng tròn thiền thở được thu nhỏ tối đa đặt tại một góc hoặc ẩn đi để tiết kiệm không gian.
2. Thiết lập SEO cơ bản cho dự án ReactJS (Vite): Cấu hình thẻ title tag "VibeSpace Studio - Ultimate Deep Work & Cyber-Zen Focus Station" và meta description trong file `index.html`.
3. Hướng dẫn tôi các bước kiểm thử build cuối cùng (`npm run build`) để kiểm tra toàn bộ lỗi biên dịch TypeScript, và hướng dẫn đẩy code lên GitHub tự động merge PR để deploy trực tiếp lên Vercel chỉ trong 1 click.
```

---

## 🎉 Tổng kết Dự Án VibeSpace Studio

Xin chúc mừng! Bằng việc hoàn thành cẩm nang step-by-step này, bạn đã tự tay xây dựng một **Trạm tập trung Cyber-Zen VibeSpace Studio** đỉnh cao công nghệ và thẩm mỹ, áp dụng hoàn hảo:
1. **Specs-Driven Vibe Coding:** Viết PRD & Tech Specs chuyên nghiệp để định hướng Agent.
2. **Context Engineering:** Xây dựng "Bộ nhớ ngoài" (`AGENTS.md`, `ARCHITECTURE.md`, `PLAN.md`) giúp tiết kiệm hơn 80% token và điều phối Agent cực kỳ chính xác.
3. **Advanced Prompt Engineering:** Sử dụng các prompt có cấu trúc chặt chẽ (Role, Context, Instructions, Constraints) để ra lệnh cho AI Agent tạo ra các tính năng audio đa kênh singleton phức tạp mà không mắc lỗi.

Hãy tự hào triển khai sản phẩm lên internet, chia sẻ trạm sạc năng lượng tập trung của riêng bạn tới cộng đồng lập trình viên và tận hưởng những giờ phút làm việc thăng hoa nhất! 🧘‍♂️⚡🚀
