# Section 5: Multi-Agent Systems & Orchestration — Curriculum Chi Tiết

> **Chủ đề trọng tâm:** Thiết kế hệ thống nhiều AI Agent phối hợp giải quyết bài toán phức tạp, tận dụng sức mạnh Multi-Agent và triết lý Agent-first của Antigravity 2.0.

---

## 🧩 Vấn đề thực tế mà Section này giải quyết

Khi Vibe Coding một dự án thực tế, bạn sẽ gặp các vấn đề sau:

| Vấn đề | Biểu hiện | Hậu quả |
|--------|----------|---------|
| **Task quá phức tạp cho 1 Agent** | Context window đầy, Agent quên bước trước | Code thiếu nhất quán, phải redo |
| **Agent không có plan rõ ràng** | Code lung tung, không theo kiến trúc | Refactor liên tục, mất thời gian |
| **Chạy tuần tự từng task** | Chờ Agent xong task này mới làm task khác | Không tận dụng được thời gian |
| **Mất kiểm soát Agent** | Không biết Agent đang làm gì, kết quả ở đâu | Khó review, dễ merge bug |

**Section này dạy cách giải quyết triệt để các vấn đề trên bằng Multi-Agent và triết lý Agent-first trong Antigravity 2.0.**

---

## 📋 Tổng quan Section

| Thông tin | Chi tiết |
|-----------|----------|
| **Số bài học** | 6 bài (4 Theory + 2 Demo) |
| **Thời lượng ước tính** | 3 giờ |
| **Trọng tâm** | Agent-first mindset, Subagents, Orchestration Commands |
| **Kết quả cuối** | Thành thạo Multi-Agent workflow trong Antigravity 2.0 |
| **Yêu cầu trước** | Section 1-4 (Agent basics, Rules, Prompt & Context Engineering) |

---

## 🎯 Curriculum Chi Tiết

---

### Bài 1: Antigravity 2.0 — Triết lý Agent-First
**Thời lượng:** 15-20 phút  
**Loại:** 📖 Theory  

**Nội dung:**
- **Sự dịch chuyển từ Chat-first sang Agent-first:**
  - Định nghĩa Chat-first (Hỏi - đáp đồng bộ, thủ công áp dụng code) và hạn chế khi scale dự án lớn.
  - Định nghĩa Agent-first (Ủy quyền mục tiêu lớn, tự trị lập kế hoạch, cô lập môi trường và chạy ngầm).
- **3 Cột trụ của Triết lý Agent-First:**
  - Tự trị và Lập kế hoạch thông qua Artifacts (`implementation_plan.md`, `task.md`, `walkthrough.md`).
  - Cô lập hoàn toàn (Context Isolation & Git Worktree Mode).
  - Tương tác không đồng bộ (Asynchronous collaboration qua Inbox của `/agents` panel).
- **Mindset thay đổi:** Vai trò của Developer dịch chuyển từ "Coder trực tiếp chỉ đạo" sang "Supervisor/Project Manager".

**Kết quả bài học:**
- Hiểu rõ sự khác biệt giữa Chat-first và Agent-first.
- Chuẩn bị đúng tư duy giám sát dự án khi làm việc với Antigravity 2.0.

---

### Bài 2: Antigravity 2.0: Làm quen giao diện & các thành phần chính
**Thời lượng:** 20-25 phút  
**Loại:** 📖 Theory  

**Nội dung:**
- **Bố cục giao diện Antigravity 2.0:**
  - Khung Chat & Nhập Lệnh (hỗ trợ Slash Commands `/goal`, `/grill-me`, `/browser`).
  - Giao diện Live Logs & Control Center (giám sát lệnh thực thi real-time).
  - Bảng quản lý `/agents` panel (Dashboard quản lý subagents và Inbox nhận thông báo).
  - Interactive Artifacts Tab (Plan, Task, Walkthrough render trực quan).
- **Cấu hình ban đầu trước khi chạy Agent:**
  - Mode Selector: Phân biệt chi tiết Local Mode và New Worktree Mode.
  - Reasoning Model Configuration: Thiết lập model thông minh cho Parent Agent (Orchestrator) và model nhanh/rẻ cho Subagents (Workers).

**Kết quả bài học:**
- Thành thạo việc điều hướng giao diện Antigravity 2.0.
- Biết cách chọn chế độ chạy (Local vs Worktree) và cấu hình model phù hợp cho từng task.

---

### Bài 3: Multi-Agent System là gì? Từ Single Agent → Multi-Agent
**Thời lượng:** 25-30 phút  
**Loại:** 📖 Theory  

**Nội dung:**
- **Vấn đề thực tế:** 1 Agent cố gắng làm mọi thứ → context overload, quên bước, hallucinate.
- **Multi-Agent System là gì?** Nhiều Agent chuyên biệt phối hợp thay vì 1 Agent tổng quát.
- **Khi nào cần Multi-Agent?** Task phức tạp, cần chạy song song nhiều việc độc lập, context quá lớn.
- **Các Multi-Agent Patterns phổ biến:**
  - Orchestrator-Worker (1 Agent điều phối, nhiều Worker thực thi - Trọng tâm của Antigravity 2.0).
  - Pipeline (Dây chuyền sản xuất nối tiếp).
  - Peer-to-Peer (Hội đồng phản biện chéo).
  - Hierarchical (Phân cấp đa tầng, hỗ trợ nesting lên tới 10 cấp).

**Kết quả bài học:**
- Hiểu khi nào nên dùng Multi-Agent vs khi nào Single Agent đủ.
- Nắm 4 patterns phổ biến và cách chúng map vào Antigravity 2.0.

---

### Bài 4: Trái tim của hệ thống: Subagents Spawning
**Thời lượng:** 30-35 phút  
**Loại:** 📖 Theory  

**Nội dung:**
- **Subagents Spawning (`invoke_subagent`):** Cơ chế Parent Agent sinh ra các Child Agents và phân rã task đa cấp.
- **Context Isolation (Cô lập ngữ cảnh):** Tại sao không nên chuyển toàn bộ chat history cho Agent con? Tránh ô nhiễm ngữ cảnh (Context Pollution) và tiết kiệm 85% chi phí token.
- **Quy trình phối hợp isolated:** Mỗi subagent chạy độc lập trong không gian làm việc Git Worktree riêng, không gây xung đột code hiện tại của user.
- **Bàn điều khiển `/agents` panel:** Theo dõi, kiểm soát logs, phê duyệt input hoặc click **Kill** để hủy các agent đi sai hướng/lặp vô hạn.

**Kết quả bài học:**
- Nắm vững cơ chế spawning và hoạt động cô lập của subagents.
- Biết cách quản lý và giám sát subagents real-time.

---

### Bài 5: Demo: Subagents — Quy Trình Phối Hợp Của Một AI Software Team
**Thời lượng:** 35-40 phút  
**Loại:** 🎬 Demo  

**Kịch bản demo thực tế (Xây dựng Kanban Board):**
- **Khởi chạy:** Nhập prompt phức tạp yêu cầu build dự án full-stack Kanban Board monorepo, tự động chia việc cho 4 Subagents: UI/UX Designer, Backend, Frontend và Tester.
- **Planning Mode:** Quan sát Parent Agent phân tích và tạo `implementation_plan.md` chờ user phê duyệt.
- **Execution & Spawning:** User approve plan → Parent spawn 4 subagents chạy song song trên worktree độc lập.
- **Tracking:** Theo dõi trạng thái hoàn thành real-time trên file `task.md`.
- **Self-Healing (Tự sửa lỗi chéo):** Tester phát hiện lỗi API Backend → gửi lỗi chéo → Backend Agent tự động hotfix → test suite pass hoàn toàn.
- **Nghiệm thu:** Xem báo cáo nghiệm thu tích hợp cuối cùng trên `walkthrough.md`.

**Kết quả bài học:**
- Thấy rõ hiệu quả chạy song song của subagents.
- Hiểu quy trình tương tác thực tế giữa User và Multi-Agent thông qua bộ ba file Artifacts.

---

### Bài 6: Demo — Slash Commands: /goal, /grill-me, /browser
**Thời lượng:** 40-45 phút  
**Loại:** 🎬 Demo  

**Nội dung thực hành bộ ba lệnh Slash Command:**
- **Demo `/goal` (Autonomous Loop):**
  - Giao tác vụ dài hạn chạy ngầm hoàn toàn tự động (lập kế hoạch -> sửa code -> chạy test -> tự debug lỗi) đến khi đạt mục tiêu.
- **Demo `/grill-me` (Design Interview):**
  - Agent phỏng vấn ngược lại user để làm rõ specs và yêu cầu mơ hồ trước khi viết code, triệt tiêu hiểu nhầm đề bài.
- **Demo `/browser` (Visual QA):**
  - Agent tự động mở trình duyệt Chrome ngầm, click tương tác UI, chụp ảnh màn hình và dùng Vision AI để QA layout tự động.

**Kết quả bài học:**
- Làm chủ 3 slash commands mạnh mẽ nhất của Antigravity Pro.
- Biết cách tương tác và tối ưu hóa hiệu quả làm việc với Agent tự trị.

---

## 🛠 Tổng hợp Multi-Agent Concepts

| Concept | Vấn đề giải quyết | Antigravity 2.0 Feature | Bài học |
|---------|-------------------|------------------------|--------|
| **Subagents** | Task quá lớn cho 1 agent | Parent → Child agent spawning | Bài 4, 5 |
| **Artifacts** | Không track được progress | plan.md, task.md, walkthrough.md | Bài 5 |
| **`/goal`** | Task dài cần autonomous | Fire-and-forget long tasks | Bài 6 |
| **`/grill-me`** | Hỏi để align yêu cầu | Interactive design interview | Bài 6 |
| **`/browser`** | Kiểm thử giao diện trực quan | Chrome automation & Vision QA | Bài 6 |

---

## 🔗 Kết nối với các Section khác

```
Section 4: Context Engineering
    ↓ (Context docs giúp Multi-Agent hiểu dự án)
★ Section 5: Multi-Agent Systems & Orchestration
    ↓ (Multi-Agent dùng MCP tools)
Section 6: MCP — Kết nối External Systems
    ↓ (Kết hợp tất cả)
Section 7: Vibe Coding Dự Án Thực Tế
```

> 💡 **Context Engineering (S4) là nền tảng cho Multi-Agent (S5):** Context documents (AGENTS.md, ARCHITECTURE.md) giúp mỗi Subagent hiểu dự án ngay từ đầu mà không cần giải thích lại. Không có context tốt, Multi-Agent sẽ kém hiệu quả.
