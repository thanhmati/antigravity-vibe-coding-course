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
| **Số bài học** | 5 bài (2 Theory + 2 Demo + 1 Workshop) |
| **Thời lượng ước tính** | 3-4 giờ |
| **Trọng tâm** | Subagents, Orchestration Commands |
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

### Bài 4: Demo — Slash Commands: /goal, /grill-me, /browser & /schedule
**Thời lượng:** 40-45 phút  
**Loại:** 🎬 Demo

**Nội dung:**

- **Demo A — `/goal` command (10 phút):**
  - *Mục đích:* Chạy tác vụ dài hạn, Agent tự trị hoàn toàn (autonomous loop): lập kế hoạch ──▶ thực thi ──▶ test ──▶ tự debug.
  - *Kịch bản:* `/goal Refactor API layer, thêm validation và tests.`
  - *Kết quả:* Agent tự chạy ngầm và tạo PR hoàn chỉnh.

- **Demo B — `/grill-me` command (10 phút):**
  - *Mục đích:* Phỏng vấn thiết kế, làm rõ yêu cầu mơ hồ trước khi viết code.
  - *Kịch bản:* `/grill-me Thêm tính năng Reset Password.`
  - *Kết quả:* Agent hỏi ngược lại user để align yêu cầu và tạo implementation plan chính xác.

- **Demo C — `/browser` command (10 phút):**
  - *Mục đích:* Tự động hóa kiểm thử giao diện trực quan (Visual QA) bằng Chrome.
  - *Kịch bản:* Agent tự mở Chrome ngầm, tương tác login và chụp ảnh màn hình để QA layout.
  - *Kết quả:* Agent phát hiện lỗi vỡ layout trên mobile và tự sửa CSS.

- **Demo D — `/schedule` command (10 phút):**
  - *Mục đích:* Hẹn giờ chạy 1 lần (one-shot timer) hoặc lên lịch lặp lại định kỳ (cron job).
  - *Kịch bản 1:* `/schedule DurationSeconds=300, Prompt="Check deployment status"`
  - *Kịch bản 2:* `/schedule CronExpression="*/15 * * * *", Prompt="Chạy unit tests và linter"`
  - *Kết quả:* Tác vụ chạy ngầm tự động nhắc nhở hoặc kiểm tra codebase định kỳ.

**Kết quả bài học:**
- Làm chủ 4 slash commands cốt lõi của Antigravity Pro.
- Biết cách tự động hóa kiểm thử (giao diện, logic) và đặt lịch tác vụ ngầm.
- Hiểu cách tối ưu hóa sự tương tác giữa User và Agent.

---



### Bài 5: Workshop — Build feature phức tạp với Multi-Agent
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

**Phần 3: Thực hành /schedule** (10 phút)

1. Thiết lập timer một lần (one-shot timer):
   - Ví dụ: `/schedule DurationSeconds=60, Prompt="Nhắc nhở check status của task UI"`
2. Thiết lập lịch chạy kiểm thử lặp lại (cron):
   - Ví dụ: `/schedule CronExpression="*/10 * * * *", Prompt="Chạy streak.test.ts"`
3. Theo dõi và quản lý lịch trình đã đặt trong IDE.

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
- Khi nào nên sử dụng `/schedule` để hẹn giờ và đặt lịch tác vụ?

**Kết quả bài học:**
- Thành thạo Multi-Agent workflow end-to-end
- Biết chọn đúng tool cho đúng tình huống
- Có kinh nghiệm thực tế với Subagents, `/goal`, `/browser` và `/schedule`

---

## 🛠 Tổng hợp Multi-Agent Concepts

| Concept | Vấn đề giải quyết | Antigravity 2.0 Feature | Bài học |
|---------|-------------------|------------------------|--------|
| **Subagents** | Task quá lớn cho 1 agent | Parent → Child agent spawning | Bài 2, 3 |
| **Artifacts** | Không track được progress | plan.md, task.md, walkthrough.md | Bài 3 |
| **`/goal`** | Task dài cần autonomous | Fire-and-forget long tasks | Bài 4 |
| **`/grill-me`** | Hỏi để align yêu cầu | Interactive design interview | Bài 4 |
| **`/browser`** | Kiểm thử giao diện trực quan | Chrome automation & Vision QA | Bài 4 |
| **`/schedule`** | Task recurring, monitoring | Cron jobs, one-shot timers | Bài 4 |

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
