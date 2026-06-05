# Section X: Context Engineering – Giúp AI Agent "Nhớ" và Tối Ưu Token

> **Chủ đề trọng tâm:** Quản lý context & memory cho AI Agent khi Vibe Coding, tránh Agent "quên" dự án, giảm token usage, tăng tốc development.

---

## 🧩 Vấn đề thực tế mà Section này giải quyết

Khi Vibe Coding một dự án thực tế, bạn sẽ gặp các vấn đề sau:

| Vấn đề                          | Biểu hiện                                            | Hậu quả                           |
| ------------------------------- | ---------------------------------------------------- | --------------------------------- |
| **Agent quên context**          | Code xung đột, tạo file trùng, không theo convention | Phải giải thích lại từ đầu        |
| **Token bùng nổ**               | Agent analyze cả source code mỗi lần hỏi             | Tốn tiền, chậm, hay bị giới hạn   |
| **Mất liên tục giữa các phiên** | Mở conversation mới → Agent không biết gì về dự án   | Phải paste lại toàn bộ context    |
| **Context rot**                 | Thông tin cũ, lỗi thời trong conversation dài        | Agent sinh code dựa trên data sai |

**Section này dạy cách giải quyết triệt để các vấn đề trên.**

---

## 📋 Tổng quan Section

| Thông tin               | Chi tiết                                                |
| ----------------------- | ------------------------------------------------------- |
| **Số bài học**          | 7 bài                                                   |
| **Thời lượng ước tính** | 4-5 giờ                                                 |
| **Trọng tâm**           | Context management, Memory, Token optimization          |
| **Kết quả cuối**        | Bộ context documents hoàn chỉnh + workflow tối ưu token |
| **Yêu cầu trước**       | Section 1-3 (Agent basics, Rules, Prompt Engineering)   |

---

## 🎯 Curriculum Chi Tiết

---

### Bài 1: Context Engineering là gì? Tại sao Agent hay "quên"?

**Thời lượng:** 30-40 phút

**Nội dung:**

- **Vấn đề thực tế:** Demo Agent "quên" context giữa các phiên làm việc
- **Context Engineering là gì?** — Sự tiến hoá từ Prompt Engineering
  - Prompt Engineering = "Viết brief hay"
  - Context Engineering = "Đóng gói ba lô" cho Agent (tools, docs, memory)
  - Trích dẫn Andrej Karpathy: LLM = CPU, Context Window = RAM
- **5 trụ cột của Context Engineering:**
  - Instructions (Hướng dẫn) — Rules, AGENTS.md
  - Tools (Công cụ) — Skills, MCP
  - Memory (Bộ nhớ) — Knowledge Items, handoff files
  - Retrieval (Truy xuất) — Just-in-time loading
  - State (Trạng thái) — Artifacts, task tracking
- **Mapping với Antigravity:** Mỗi trụ cột tương ứng tính năng gì trong Antigravity
- **Token là gì? Tại sao quan trọng?** — Giải thích chi phí token, context window limit

**Kết quả bài học:**

- Hiểu tại sao Agent quên và cách phòng tránh
- Nắm 5 trụ cột Context Engineering

---

### Bài 2: Project Context Documents – "Bộ nhớ ngoài" cho Agent

**Thời lượng:** 40-50 phút

**Nội dung:**

- **Vấn đề:** Agent không biết gì về dự án → phải analyze cả source → tốn token
- **Giải pháp: Tạo "bộ nhớ ngoài" bằng các file context documents**
- **Hệ thống file context:**
  - `AGENTS.md` — Luật chơi cho Agent (convention, tech stack, cấu trúc)
  - `ARCHITECTURE.md` — Kiến trúc hệ thống (Agent đọc thay vì scan toàn bộ code)
  - `DESIGN.md` — Design system (từ Stitch) giúp Agent hiểu UI
  - `TODO.md` / `PLAN.md` — Trạng thái hiện tại: đã làm gì, đang làm gì, sắp làm gì
- **Demo thực tế:**
  - Trước: Agent không có context docs → phải hỏi liên tục, tốn tokens
  - Sau: Agent đọc AGENTS.md → hiểu ngay dự án, code đúng convention
- **Template AGENTS.md mẫu** cho dự án web
- **Nguyên tắc:** Ngắn gọn, chỉ thị rõ ràng, cập nhật thường xuyên

**Kết quả bài học:**

- Tạo được bộ context documents hoàn chỉnh cho dự án
- Agent hiểu dự án ngay từ đầu mà không cần scan toàn bộ code

---

### Bài 3: Kỹ thuật Summarize Context – Giữ Agent "tỉnh táo" trong phiên dài

**Thời lượng:** 40-50 phút

**Nội dung:**

- **Vấn đề:** Conversation dài → context window đầy → Agent bắt đầu quên hoặc hallucinate
- **Kỹ thuật 1: Context Compaction**
  - Yêu cầu Agent tóm tắt lại toàn bộ conversation hiện tại
  - Prompt mẫu: "Summarize toàn bộ những gì đã làm, decisions đã đưa ra, trạng thái hiện tại"
  - Dùng summary này làm input cho phiên mới
- **Kỹ thuật 2: Handoff Document**
  - Trước khi kết thúc phiên: Yêu cầu Agent viết `handoff.md`
  - Nội dung: Đã làm gì, đang dở gì, blockers, next steps
  - Phiên sau: "Đọc file handoff.md và tiếp tục từ nơi dừng lại"
- **Kỹ thuật 3: Sliding Window**
  - Giữ N messages gần nhất + summary của messages cũ
  - Tránh "history creep" — lịch sử quá dài làm loãng focus
- **Kỹ thuật 4: Context Quarantine**
  - Khi Agent bắt đầu sinh code sai, hallucinate
  - Dấu hiệu nhận biết "context poisoning"
  - Giải pháp: Mở conversation mới + inject clean context
- **Demo: So sánh token usage trước và sau khi áp dụng các kỹ thuật**

**Kết quả bài học:**

- Biết cách giữ Agent hiệu quả trong phiên làm việc dài
- Biết khi nào cần compact, khi nào cần mở phiên mới

---

### Bài 4: Just-in-Time Context – Chỉ cho Agent biết điều cần biết

**Thời lượng:** 35-45 phút

**Nội dung:**

- **Vấn đề:** Dump toàn bộ source code vào context → tốn token, Agent bị nhiễu
- **Nguyên tắc vàng: "Minimal Viable Context"** — Ít nhưng đúng
- **Kỹ thuật 1: Targeted File References**
  - Thay vì "Fix bug trong dự án" → "Fix bug trong file src/components/QuizCard.tsx dòng 45-60"
  - Agent chỉ cần đọc 1 file thay vì scan cả project
- **Kỹ thuật 2: Layered Context**
  - Layer 1 (luôn có): AGENTS.md + ARCHITECTURE.md (nhẹ, ~500 tokens)
  - Layer 2 (khi cần): File cụ thể đang làm việc
  - Layer 3 (hiếm khi): Full directory scan
- **Kỹ thuật 3: Smart Prompting để tiết kiệm token**
  - Prompt chi tiết nhưng ngắn gọn
  - Chỉ rõ input/output mong đợi
  - Sử dụng references thay vì paste code
- **Kỹ thuật 4: Tận dụng Rules thay vì nhắc lại**
  - Convention viết 1 lần trong Rules → Agent tự tuân theo
  - Không cần nhắc "dùng TypeScript, dùng Tailwind" mỗi lần
- **Demo: So sánh token cost**
  - Prompt A: "Thêm dark mode cho app" (Agent scan toàn bộ) → ~50K tokens
  - Prompt B: "Thêm dark mode. Đọc AGENTS.md trước. Sửa file globals.css và ThemeToggle.tsx" → ~8K tokens
  - Tiết kiệm **~80% tokens** chỉ bằng cách cung cấp context đúng

**Kết quả bài học:**

- Biết cách prompt để Agent chỉ đọc file cần thiết
- Giảm 50-80% token usage so với cách thông thường

---

### Bài 5: Knowledge Items & Memory – Bộ nhớ dài hạn trong Antigravity

**Thời lượng:** 35-45 phút

**Nội dung:**

- **Knowledge Items (KI) là gì?**
  - Bộ nhớ dài hạn của Antigravity, tồn tại xuyên conversations
  - Chứa kiến thức đã được distill từ các phiên trước
  - Agent tự động kiểm tra KI trước khi bắt đầu task mới
- **Khi nào Knowledge Items phát huy sức mạnh?**
  - Dự án dài hạn, nhiều phiên làm việc
  - Patterns lặp lại (deployment flow, coding convention)
  - Architectural decisions cần nhớ lâu dài
- **Conversation Logs**
  - Lịch sử conversation được lưu trữ
  - Có thể truy xuất từ conversation trước
  - File `overview.txt` trong mỗi conversation
- **Demo: Workflow với Memory**
  - Phiên 1: Build feature, Agent tạo Knowledge Item về architecture
  - Phiên 2: Mở conversation mới, Agent đọc KI → hiểu ngay context
  - Không cần giải thích lại dự án
- **Khi nào nên tạo KI vs khi nào dùng handoff.md?**
  - KI: Kiến thức ổn định, ít thay đổi (architecture, deployment flow)
  - Handoff: Trạng thái tạm thời, task đang dở (current progress, blockers)
- **Anti-patterns:**
  - KI quá dài → Agent tốn token đọc
  - KI outdated → Agent dùng thông tin cũ
  - Quá nhiều KI → Agent bị confused

**Kết quả bài học:**

- Biết cách tận dụng Knowledge Items cho dự án dài hạn
- Phân biệt khi nào dùng KI, khi nào dùng handoff

---

### Bài 6: Token Budget – Đo lường, Giám sát & Tối ưu chi phí

**Thời lượng:** 30-40 phút

**Nội dung:**

- **Hiểu chi phí token thực tế**
  - Input tokens vs Output tokens — cái nào tốn hơn?
  - Pricing các model: Gemini, Claude, GPT
  - Ước tính chi phí cho 1 ngày Vibe Coding
- **Công thức tính token nhanh:**
  - ~1 token ≈ 4 ký tự tiếng Anh
  - ~1 token ≈ 1-2 ký tự tiếng Việt (Unicode tốn hơn)
  - File 100 dòng code ≈ 500-800 tokens
- **Chiến lược chọn Model theo task:**

  | Task                   | Model phù hợp                        | Lý do                    |
  | ---------------------- | ------------------------------------ | ------------------------ |
  | Generate code phức tạp | Large (Claude Opus, Gemini Pro)      | Cần reasoning mạnh       |
  | Fix bug đơn giản       | Medium (Claude Sonnet, Gemini Flash) | Đủ khả năng, rẻ hơn      |
  | Format code, rename    | Small (Flash)                        | Task đơn giản, tiết kiệm |

- **Checklist tối ưu token cho mỗi prompt:**
  - [ ] Đã chỉ rõ file cần sửa? (tránh full scan)
  - [ ] Có AGENTS.md? (tránh Agent hỏi lại convention)
  - [ ] Prompt có ngắn gọn, rõ ràng? (tránh verbose)
  - [ ] Đã dùng Rules cho convention? (tránh nhắc lại)
  - [ ] Output format có chỉ rõ? (tránh Agent sinh thừa)
- **Demo: Tracking token usage trong 1 phiên Vibe Coding**
  - Đo trước khi optimize vs sau khi optimize
  - Mục tiêu: Giảm 50%+ token usage

**Kết quả bài học:**

- Biết ước tính chi phí token
- Có checklist tối ưu token cho mỗi prompt

---

### Bài 7: Workshop – Xây dựng Context Architecture cho dự án thực tế

**Thời lượng:** 45-60 phút

**Nội dung:**

- **Bài tập thực hành end-to-end:**
  - Lấy dự án English Practice Hub (Section 6) hoặc dự án tự chọn
  - Tạo bộ context documents hoàn chỉnh:
    1. Viết `AGENTS.md` — Convention, tech stack, do's & don'ts
    2. Viết `ARCHITECTURE.md` — Sơ đồ kiến trúc, file structure, data flow
    3. Viết `PLAN.md` — Task list, trạng thái, priorities
    4. Template `handoff.md` — Format bàn giao giữa các phiên
  - Áp dụng vào Vibe Coding:
    - Build 1 feature mới bằng cách chỉ inject context documents
    - So sánh token usage vs không dùng context docs
- **Context Architecture Diagram:**
  - Vẽ sơ đồ luồng context cho dự án
  - Xác định: Thông tin nào luôn cần? Thông tin nào tải khi cần? Thông tin nào bỏ qua?
- **Review & Feedback:**
  - Đánh giá chất lượng context documents
  - Checklist quality: Ngắn gọn? Cập nhật? Đủ thông tin? Không mâu thuẫn?
- **Kết quả mong đợi:**
  - Agent hiểu dự án ngay khi bắt đầu phiên mới
  - Token usage giảm 50%+ so với không có context docs
  - Workflow handoff mượt mà giữa các phiên

**Kết quả bài học:**

- Có bộ context documents hoàn chỉnh cho dự án thực tế
- Thành thạo workflow Context Engineering trong Vibe Coding

---

## 🛠 Tổng hợp kỹ thuật Context Engineering

| Kỹ thuật                  | Vấn đề giải quyết                | Token tiết kiệm | Bài học |
| ------------------------- | -------------------------------- | --------------- | ------- |
| **AGENTS.md**             | Agent không biết convention      | ~30%            | Bài 2   |
| **ARCHITECTURE.md**       | Agent scan toàn bộ source        | ~40%            | Bài 2   |
| **Handoff Document**      | Mất context giữa các phiên       | ~60%            | Bài 3   |
| **Context Compaction**    | Conversation dài bị quên         | ~50%            | Bài 3   |
| **Targeted References**   | Agent đọc file không liên quan   | ~70%            | Bài 4   |
| **Layered Context**       | Dump toàn bộ info vào prompt     | ~80%            | Bài 4   |
| **Knowledge Items**       | Phải giải thích lại dự án        | ~90%            | Bài 5   |
| **Smart Model Selection** | Dùng model đắt cho task đơn giản | ~50% cost       | Bài 6   |

---

## 📁 Template Files được tạo trong Section

```
project/
├── AGENTS.md             ← Luật chơi cho Agent
├── ARCHITECTURE.md       ← Kiến trúc hệ thống (tóm tắt)
├── PLAN.md               ← Task list & trạng thái
├── .handoff/
│   ├── template.md       ← Template bàn giao
│   └── 2026-04-27.md     ← Handoff cụ thể theo ngày
└── .stitch/
    └── DESIGN.md         ← Design system (từ Stitch)
```

---

## 🔗 Vị trí đề xuất trong khoá học

```
Section 1: Foundation (AI Agent & Antigravity Basics)
Section 2: Core Concepts (Model, Rules, Workflows & Skills)
Section 3: Prompt Engineering for AI Agents
    ↓
★ Section 4: Context Engineering – Giúp Agent "Nhớ" & Tối Ưu Token  ← MỚI
    ↓
Section 5: Multi-Agent Systems & Orchestration  (cũ: Section 4)
Section 6: MCP – Kết nối External Systems       (cũ: Section 5)
Section 7: Vibe Coding Dự Án Thực Tế            (cũ: Section 6)
```

> 💡 **Lý do đặt sau Prompt Engineering:** Context Engineering là bước tiến hoá tự nhiên từ Prompt Engineering. Học viên đã biết viết prompt tốt → giờ học cách thiết kế toàn bộ hệ thống context xung quanh prompt đó.
