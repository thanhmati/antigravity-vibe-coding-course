# Section 5: Multi-Agent Systems & Orchestration — Curriculum Chi Tiết

> **Chủ đề trọng tâm:** Thiết kế hệ thống nhiều AI Agent phối hợp giải quyết bài toán phức tạp, tận dụng sức mạnh Multi-Agent của Antigravity 2.0.

---

## 🧩 Vấn đề thực tế mà Section này giải quyết

Khi Vibe Coding một dự án thực tế, bạn sẽ gặp các vấn đề sau:

| Vấn đề | Biểu hiện | Hậu quả |
|--------|----------|---------|
| **Task quá phức tạp cho 1 Agent** | Context window đầy, Agent quên bước trước | Code thiếu nhất quán, phải redo |
| **Agent không có plan rõ ràng** | Code lung tung, không theo kiến trúc | Refactor liên tục, mất thời gian |
| **Chạy tuần tự từng task** | Chờ Agent xong task này mới làm task khác | Không tận dụng được thời gian |
| **Mất kiểm soát Agent** | Không biết Agent đang làm gì, kết quả ở đâu | Khó review, dễ merge bug |

**Section này dạy cách giải quyết triệt để các vấn đề trên bằng Multi-Agent trong Antigravity 2.0.**

---

## 📋 Tổng quan Section

| Thông tin | Chi tiết |
|-----------|----------|
| **Số bài học** | 6 bài (3 Theory + 2 Demo + 1 Workshop) |
| **Thời lượng ước tính** | 3-4 giờ |
| **Trọng tâm** | Subagents, Parallel Execution, Orchestration Commands |
| **Kết quả cuối** | Thành thạo Multi-Agent workflow trong Antigravity 2.0 |
| **Yêu cầu trước** | Section 1-4 (Agent basics, Rules, Prompt & Context Engineering) |

---

## 🎯 Curriculum Chi Tiết

---

### Bài 1: Multi-Agent System là gì? Từ Single Agent → Multi-Agent
**Thời lượng:** 25-30 phút  
**Loại:** 📖 Theory

**Nội dung:**
- **Vấn đề thực tế:** 1 Agent cố gắng làm mọi thứ → context overload, quên bước, hallucinate
- **Multi-Agent System là gì?**
  - Nhiều Agent chuyên biệt phối hợp thay vì 1 Agent tổng quát
  - Ví dụ thực tế: Đội dev (Frontend Dev, Backend Dev, QA) vs 1 Full-stack Developer làm mọi thứ
- **Khi nào cần Multi-Agent?**
  - Task phức tạp, nhiều bước không liên quan nhau
  - Cần parallelism — chạy đồng thời nhiều việc
  - Context quá lớn cho 1 Agent window
  - Cần chuyên môn hóa (code vs test vs docs)
- **Các Multi-Agent Patterns phổ biến:**

  | Pattern | Mô tả | Use case |
  |---------|--------|----------|
  | **Orchestrator-Worker** | 1 Agent điều phối, nhiều Worker thực thi | Build feature phức tạp |
  | **Pipeline** | Output Agent A → Input Agent B → Input Agent C | Data processing, CI/CD |
  | **Peer-to-Peer** | Agents ngang hàng, trao đổi qua shared state | Code review, brainstorming |
  | **Hierarchical** | Parent → Child → Grandchild delegation | Phân rã task đa tầng |

- **Mapping vào Antigravity 2.0:**
  - Antigravity 2.0 sử dụng chủ yếu pattern **Orchestrator-Worker** (Parent Agent → Subagents)
  - Giới thiệu tổng quan các tính năng: Subagents, `/goal`, `/grill-me`, `/browser`, `/agents` panel

**Kết quả bài học:**
- Hiểu khi nào cần Multi-Agent vs khi nào Single Agent đủ
- Nắm 4 patterns phổ biến và biết Antigravity 2.0 dùng pattern nào

---

### Bài 2: Kiến trúc Multi-Agent trong Antigravity 2.0
**Thời lượng:** 30-35 phút  
**Loại:** 📖 Theory

**Nội dung:**
- **Subagents — Trái tim của Multi-Agent trong Antigravity:**
  - Parent Agent (main agent) spawn Child Agents (subagents) cho từng subtask
  - Mỗi Subagent có context riêng — không chia sẻ conversation với parent
  - Parent agent không bị overload vì details nằm ở subagents
  - Subagent hoàn thành → trả kết quả về Parent

- **Context Isolation — Tại sao quan trọng?**
  - Mỗi agent chỉ biết scope của mình
  - Tránh "context pollution" — thông tin không liên quan làm nhiễu
  - Giảm token usage tổng thể
  - Ví dụ: Agent viết code không cần biết chi tiết test plan

- **`/agents` panel — Dashboard quản lý:**
  - Giao diện theo dõi tất cả agents đang chạy
  - Xem progress, logs, artifacts của từng agent
  - Spawn, monitor, kill agents từ 1 nơi bằng giao diện trực quan

- **Workspace Isolation:**
  - Mỗi agent được scope vào workspace cụ thể
  - Agents khác nhau có thể làm việc trên components khác nhau
  - Tránh xung đột khi nhiều agents sửa cùng file

- **Kiến trúc tổng thể:**
  ```
  User (Goal Definition)
       ↓
  Parent Agent (Orchestrator)
       ├── Subagent A (scope: frontend)
       ├── Subagent B (scope: backend)
       └── Subagent C (scope: testing)
            ↓
  Artifacts (plan.md, task.md, walkthrough.md)
            ↓
  /agents Panel (Review & Monitor)
            ↓
  User (Approve & Merge)
  ```

**Kết quả bài học:**
- Hiểu cách Subagents hoạt động trong Antigravity 2.0
- Nắm khái niệm Context Isolation và Workspace Isolation
- Biết cách sử dụng `/agents` panel để giám sát

---

### Bài 3: Demo — Subagents: Ủy quyền task cho Agent con
**Thời lượng:** 35-40 phút  
**Loại:** 🎬 Demo

**Kịch bản demo thực tế:**

**Setup:**
- Mở Antigravity 2.0
- Dự án mẫu: Web app đã có sẵn (từ Section 7 hoặc dự án demo)

**Demo Step-by-Step:**

1. **Tạo task phức tạp** (5 phút)
   - Prompt: "Thêm authentication module với login, register, forgot password. Bao gồm UI components, API integration, và unit tests."
   - Quan sát: Agent nhận task phức tạp → tự nhận biết cần chia nhỏ

2. **Quan sát Subagent spawning** (10 phút)
   - Parent Agent phân tích task → quyết định spawn subagents
   - Subagent 1: Tạo implementation plan
   - Subagent 2: Build UI components
   - Subagent 3: Viết tests
   - Highlight: Context isolation — mỗi subagent chỉ thấy phần của mình

3. **Review Artifacts** (10 phút)
   - Mở `implementation_plan.md` — Agent đã tạo plan chi tiết
   - Xem `task.md` — Checklist tracking progress
   - Giải thích: Artifacts = cách agents giao tiếp kết quả

4. **Approve và quan sát execution** (10 phút)
   - User approve implementation plan
   - Agent bắt đầu execute
   - Quan sát: Task.md được update real-time ([ ] → [/] → [x])
   - Kết thúc: `walkthrough.md` tổng hợp mọi thứ đã làm

**Highlight cho học viên:**
- So sánh: Cùng task này, 1 Agent đơn sẽ mất bao lâu và tốn bao nhiêu context?
- Subagents giúp giữ context window sạch cho parent agent
- Artifacts tạo trust — user luôn biết Agent đang làm gì

**Kết quả bài học:**
- Biết cách trigger subagent spawning trong thực tế
- Hiểu flow: Task → Subagents → Artifacts → Review → Approve

---

### Bài 4: Demo — /goal và /grill-me: Orchestration thực chiến
**Thời lượng:** 40-45 phút  
**Loại:** 🎬 Demo

**Demo A — `/goal` command (20 phút):**

*Mục đích: Chạy task dài, Agent tự plan → execute → verify liên tục*

1. **Setup** (3 phút)
   - Giải thích: `/goal` = "fire and forget" — đặt mục tiêu, Agent tự chạy đến khi xong
   - Khác với chat thường: Agent không dừng hỏi, tự quyết định next steps

2. **Chạy /goal** (7 phút)
   - Command: `/goal Refactor toàn bộ API layer — thêm error handling, input validation, và API documentation cho mọi endpoints`
   - Quan sát: Agent tự tạo plan → execute từng step → verify → tiếp tục

3. **Quan sát autonomous loop** (5 phút)
   - Agent tự quyết: Endpoint nào trước? Cần sửa gì?
   - Auto-verify: Chạy tests sau mỗi thay đổi
   - Nếu test fail → Agent tự debug và retry

4. **Review kết quả** (5 phút)
   - Xem `walkthrough.md` — tổng kết mọi thay đổi
   - So sánh: Manual chat-by-chat vs `/goal` autonomous

**Demo B — `/grill-me` command (15 phút):**

*Mục đích: Align yêu cầu và làm rõ thiết kế trước khi thực thi*

1. **Setup** (3 phút)
   - Giải thích: `/grill-me` = "interview mode" — Agent sẽ chủ động phỏng vấn ngược lại user để làm rõ những điểm mơ hồ hoặc thiếu sót trong đề bài.
   - Khác với chat thông thường: Agent đặt câu hỏi thông minh, chuyên sâu để hạn chế tối đa việc hiểu sai yêu cầu.

2. **Chạy /grill-me** (5 phút)
   - Task: "Thêm tính năng reset password cho người dùng."
   - Quan sát: Agent không code ngay mà đưa ra danh sách câu hỏi: "Có gửi mã OTP qua email hay SMS? Mã expire sau bao lâu? Cần giao diện đổi mật khẩu riêng hay dùng modal?"

3. **Trả lời và align** (5 phút)
   - Học viên trả lời các câu hỏi hoặc cung cấp thêm context.
   - Agent tổng hợp câu trả lời, cập nhật Implementation Plan chuẩn xác nhất.

4. **Đánh giá** (2 phút)
   - Nhấn mạnh: Giúp giảm thiểu lỗi và tiết kiệm thời gian chỉnh sửa code về sau.

**Demo C — `/schedule` command (10 phút):**

1. **Schedule recurring task** (5 phút)
   - Command: `/schedule` — đặt chạy test suite mỗi 30 phút
   - Quan sát: Agent tự chạy background

2. **One-shot timer** (5 phút)
   - Đặt reminder: "Check deployment status sau 5 phút"
   - Quan sát notification khi timer fire

**Kết quả bài học:**
- Biết khi nào dùng `/goal` vs `/grill-me` vs chat thường
- Thấy trực quan sức mạnh orchestration của Antigravity 2.0
- Hiểu async/background execution

---

### Bài 5: Parallel Execution & Background Tasks
**Thời lượng:** 20-25 phút  
**Loại:** 📖 Theory

**Nội dung:**

- **Async Execution — Fire-and-Forget patterns:**
  - User không cần chờ Agent hoàn thành
  - Agent chạy background, thông báo khi xong
  - Ví dụ: Chạy test suite, generate docs, lint codebase

- **Background Task Management:**
  - `manage_task` — list, status, kill, send_input
  - Xem task đang chạy, cancel task nếu cần
  - Send input cho task đang chờ

- **`/schedule` command chi tiết:**
  - One-shot timer: Reminder sau N giây
  - Recurring cron: Chạy lặp lại theo schedule
  - Use cases: Auto-test, health check, deployment monitoring

- **Parallel Agent Coordination — Tránh xung đột:**

  | Vấn đề | Giải pháp |
  |--------|-----------|
  | 2 agents sửa cùng file | Workspace isolation, scope rõ ràng |
  | Agent B cần output Agent A | Dependency management, artifacts |
  | 1 agent fail giữa chừng | Auto-retry, error recovery |
  | Race condition | Orchestrator quản lý thứ tự |

- **Trade-offs: Speed vs Safety:**
  - Parallel = nhanh hơn nhưng khó kiểm soát hơn
  - Sequential = chậm hơn nhưng dễ review từng step
  - Recommended: Parallel cho independent tasks, Sequential cho dependent tasks

- **Error Handling Patterns:**
  - Retry with backoff
  - Graceful degradation — skip non-critical tasks
  - Rollback — revert nếu critical task fail
  - Human escalation — hỏi user khi không tự giải quyết được

**Kết quả bài học:**
- Biết cách quản lý background tasks
- Hiểu trade-offs khi chạy parallel vs sequential
- Nắm error handling patterns

---

### Bài 6: Workshop — Build feature phức tạp với Multi-Agent
**Thời lượng:** 45-50 phút  
**Loại:** 🛠 Workshop

**Bài tập thực hành end-to-end:**

**Chuẩn bị** (5 phút):
- Dùng dự án từ Section 7 (English Practice Hub) hoặc dự án riêng
- Đảm bảo đã có context documents (AGENTS.md, ARCHITECTURE.md) từ Section 4

---

**Phần 1: Thực hành Subagents** (15 phút)

1. Tạo task phức tạp cho dự án:
   - Ví dụ: "Thêm feature Progress Tracking — hiển thị streak, completion rate, và weekly chart"
2. Quan sát parent agent spawn subagents
3. Review `implementation_plan.md`:
   - Plan có hợp lý không?
   - Có thiếu edge case nào không?
   - Sửa plan nếu cần, rồi approve
4. Theo dõi `task.md` — items chuyển từ `[ ]` → `[/]` → `[x]`

---

**Phần 2: Thực hành /goal** (15 phút)

1. Chọn 1 task dài hạn:
   - Ví dụ: `/goal Add comprehensive error handling and input validation across all API endpoints`
2. Để Agent tự chạy autonomous
3. Quan sát: Agent tự plan → execute → test → continue
4. Review `walkthrough.md` khi hoàn thành

---

**Phần 3: Thực hành Background Tasks** (10 phút)

1. Schedule task recurring:
   - Ví dụ: `/schedule` chạy linter mỗi 10 phút
2. Chạy 1 task foreground + 1 task background đồng thời
3. Dùng `manage_task` để monitor

---

**Phần 4: Review & Reflection** (5 phút)

**So sánh kết quả:**

| Metric | Single Agent | Multi-Agent |
|--------|-------------|-------------|
| Thời gian hoàn thành | ? | ? |
| Chất lượng code | ? | ? |
| Token usage | ? | ? |
| Mức kiểm soát | ? | ? |

**Câu hỏi reflection:**
- Khi nào nên dùng Multi-Agent vs Single Agent?
- Task nào phù hợp `/goal`? Task nào nên manual chat?
- Artifacts giúp gì trong workflow của bạn?
- Parallel execution có rủi ro gì cần lưu ý?

**Kết quả bài học:**
- Thành thạo Multi-Agent workflow end-to-end
- Biết chọn đúng tool cho đúng tình huống
- Có kinh nghiệm thực tế với Subagents, /goal, Background Tasks

---

## 🛠 Tổng hợp Multi-Agent Concepts

| Concept | Vấn đề giải quyết | Antigravity 2.0 Feature | Bài học |
|---------|-------------------|------------------------|--------|
| **Subagents** | Task quá lớn cho 1 agent | Parent → Child agent spawning | Bài 2, 3 |
| **Artifacts** | Không track được progress | plan.md, task.md, walkthrough.md | Bài 3 |
| **`/goal`** | Task dài cần autonomous | Fire-and-forget long tasks | Bài 4 |
| **`/grill-me`** | Hỏi để align yêu cầu | Interactive design interview | Bài 4 |
| **`/schedule`** | Task recurring, monitoring | Cron jobs, one-shot timers | Bài 4, 5 |
| **Background Tasks** | Chờ agent blocking | Async execution, task management | Bài 5 |
| **Parallel Execution** | Chạy tuần tự chậm | Multiple agents simultaneously | Bài 5 |

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
