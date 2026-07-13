# 📘 Bài 3.2: Các Lỗi Phổ Biến Khi Viết Prompt

> **Section 3** · Prompt Engineering for AI Agents
> **Thời lượng:** ~20 phút | 📖 Theory
> **Yêu cầu:** Đã hoàn thành Bài 3.1

---

## 🎯 Mục tiêu bài học

Sau bài này, bạn sẽ:

- ✅ Nhận biết được **5 lỗi phổ biến** nhất khi viết prompt cho AI Agent
- ✅ Hiểu **tại sao** từng lỗi gây ra vấn đề
- ✅ Biết cách **nhận diện nhanh** khi mình đang mắc lỗi nào
- ✅ Có "bộ checklist" để tự kiểm tra prompt trước khi gửi cho Agent

---

## Lỗi #1 — Prompt Mơ Hồ (Vague Prompt)

### Nhận diện
Prompt không đủ thông tin để Agent ra quyết định. Agent phải **tự điền vào chỗ trống** bằng cách tự giả định.

### Ví dụ thực tế

```
❌ "Tạo trang dashboard"
❌ "Fix bug trong app của tôi"
❌ "Làm đẹp hơn"
❌ "Thêm tính năng auth"
```

### Tại sao nguy hiểm?

Agent nhận prompt mơ hồ → **không dừng lại hỏi bạn** (vì bạn không config nó làm vậy) → **tự đưa ra tất cả quyết định** → bắt đầu viết code theo cách nó hiểu.

Kết quả: Bạn quay lại thấy Agent đã tạo ra 15 file, cài thêm 3 package, và cấu trúc hoàn toàn khác với những gì bạn hình dung.

### Fix như thế nào?

```
✅ "Tạo trang dashboard với 3 widgets: UserStats, RevenueChart, RecentOrders.
   Tech: React 18 + TypeScript + Recharts. Layout: CSS Grid 2 columns.
   File: src/pages/Dashboard.tsx"

✅ "Fix bug trong file src/components/Cart.tsx dòng 45-67:
   total price không update khi thay đổi quantity.
   Không sửa gì ngoài phạm vi đó."

✅ "Cải thiện UX của LoginForm.tsx: thêm loading state khi submit,
   focus vào input đầu tiên khi mount, hiện password strength indicator.
   Không thay đổi business logic."
```

---

## Lỗi #2 — Xung Đột Instruction (Conflicting Instructions)

### Nhận diện
Prompt chứa các yêu cầu **mâu thuẫn nhau**. Agent không biết phải ưu tiên cái nào.

### Ví dụ thực tế

```
❌ "Viết code ngắn gọn, nhưng phải có comment đầy đủ cho mọi dòng"
❌ "Dùng Tailwind CSS nhưng không được có class quá dài trong JSX"
❌ "Tạo responsive design nhưng chỉ tập trung vào desktop"
❌ "Xử lý nhanh nhưng phải validate đầy đủ tất cả edge cases"
```

### Tại sao nguy hiểm?

Agent gặp instruction xung đột → **chọn một trong hai** (thường là cái xuất hiện sau trong prompt) → bỏ qua cái kia → output không thỏa mãn bất kỳ yêu cầu nào đủ tốt.

### Fix như thế nào?

**Ưu tiên hóa rõ ràng:**
```
✅ "Viết code dễ đọc. Ưu tiên: readability > brevity.
   Chỉ comment ở những đoạn logic phức tạp, không comment những gì self-explanatory."

✅ "Dùng Tailwind CSS. Nếu class string > 5 classes, extract ra component
   hoặc dùng @apply trong CSS file riêng."

✅ "Thiết kế cho desktop (min-width: 1024px) là primary.
   Mobile là nice-to-have, không bắt buộc trong task này."
```

---

## Lỗi #3 — Thiếu Context Quan Trọng (Missing Context)

### Nhận diện
Prompt đủ rõ ràng về **task** nhưng thiếu **context về môi trường** — tech stack, codebase conventions, business rules.

### Ví dụ thực tế

```
❌ "Thêm authentication vào app"
   → Agent không biết: bạn dùng library nào? JWT hay session?
     Backend Node.js hay Firebase? Form UI đã có chưa?

❌ "Tối ưu performance của trang"
   → Agent không biết: đang có vấn đề gì? LCP cao? Bundle quá lớn?
     Đã đo bằng tool nào? Target là bao nhiêu?

❌ "Thêm unit test"
   → Agent không biết: dùng Jest hay Vitest? Testing Library?
     Coverage target? Test file đặt cạnh source hay trong folder __tests__?
```

### Tại sao nguy hiểm?

Thiếu context → Agent **tự chọn tech/approach** → có thể không tương thích với codebase hiện có → code chạy được nhưng không integrate được → phải làm lại.

### Fix như thế nào?

**Cung cấp context system (khuyên dùng AGENTS.md — học ở Section 4):**

```
✅ "Thêm authentication vào app.
   Context:
   - Backend: Node.js + Express + PostgreSQL
   - Auth method: JWT stored in httpOnly cookie
   - Frontend: React 18 + TypeScript
   - Form component đã có tại: src/components/auth/AuthForm.tsx
   - API endpoints: POST /api/auth/login, POST /api/auth/logout
   Yêu cầu: implement JWT middleware ở backend,
   update AuthForm để call API, handle token refresh."
```

---

## Lỗi #4 — Over-Prompting (Quá Nhiều Thông Tin Không Liên Quan)

### Nhận diện
Prompt dài, nhưng phần lớn là **thông tin thừa** không giúp Agent làm task cụ thể. Paradox: nhiều thông tin hơn nhưng kết quả tệ hơn.

### Ví dụ thực tế

```
❌ "Chào bạn, tôi đang làm một project rất thú vị là ứng dụng quản lý task.
   Project này tôi bắt đầu từ tháng 3, dùng React. Ban đầu tôi muốn dùng
   Vue nhưng sau đó chuyển sang React vì team quen hơn. Hiện tại app có
   khoảng 15 screens. Chúng tôi dùng TypeScript, Tailwind, và Redux Toolkit
   cho state management. Database là PostgreSQL deploy trên AWS RDS.
   À, hôm qua tôi cũng meeting với khách hàng và họ muốn thêm tính năng
   export PDF. Nhưng trước mắt tôi cần bạn fix cái bug là khi user click
   nút Delete trong TaskList component thì app bị crash."
```

### Tại sao nguy hiểm?

Context window của Agent có giới hạn. Thông tin thừa **"loãng" attention** của Agent → Agent có thể bỏ sót chi tiết quan trọng hoặc hiểu nhầm task chính.

### Fix như thế nào?

**Minimal Viable Context — chỉ đưa những gì Agent cần biết cho task này:**

```
✅ "Fix bug crash trong src/components/TaskList.tsx:
   Khi user click button Delete, app crash với error:
   'Cannot read property id of undefined' (line 67).
   Root cause: tasks array có thể có null items khi filter.
   Fix: add null check trước khi access task.id."
```

> 💡 **Rule of thumb:** Mỗi câu trong prompt phải trả lời câu hỏi "Câu này giúp Agent làm task tốt hơn không?" Nếu không → xóa đi.

---

## Lỗi #5 — Prompt Một Chiều (No Guardrails)

### Nhận diện
Prompt chỉ nói **phải làm gì** mà không nói **không được làm gì**. Agent có toàn quyền quyết định scope.

### Ví dụ thực tế

```
❌ "Tối ưu hóa file UserProfile.tsx"

→ Agent hiểu "tối ưu" theo cách riêng:
   - Refactor toàn bộ structure
   - Thay useState bằng useReducer
   - Tách thành 5 sub-components
   - Thêm memo() và useMemo() khắp nơi
   - Đổi cả naming convention
→ Bạn nhận lại file khác hoàn toàn so với kỳ vọng
```

### Tại sao nguy hiểm?

Không có guardrails → Agent tự mở rộng scope → thay đổi nhiều hơn bạn muốn → code review khó hơn, risk cao hơn, có thể introduce bugs mới.

### Fix như thế nào?

```
✅ "Tối ưu hóa file src/components/UserProfile.tsx.
   CHỈ làm những việc sau:
   1. Thêm React.memo() cho component nếu chưa có
   2. Move constants ra ngoài component body
   3. Tách fetchUserData thành custom hook useUserProfile

   KHÔNG được:
   - Thay đổi props interface
   - Thay đổi business logic
   - Tạo file mới ngoài hook file
   - Thay đổi naming"
```

---

## 📋 Bộ Checklist Tự Kiểm Tra Prompt

Trước khi nhấn Enter, hãy tự hỏi:

```
☑ CLARITY — Task có rõ ràng không? Mô tả được kết quả mong muốn?
☑ CONTEXT — Đã cung cấp đủ tech stack, file path, môi trường?
☑ CONFLICT — Có instruction nào mâu thuẫn nhau không?
☑ CONCISE — Có câu nào thừa, không liên quan đến task không?
☑ CONSTRAINTS — Đã nói rõ Agent KHÔNG được làm gì không?
```

**5C Checklist** — nếu pass cả 5, prompt của bạn đủ tốt để gửi.

---

## 🔑 Tóm tắt bài học

| Lỗi | Dấu hiệu nhận biết | Hậu quả |
|-----|--------------------|---------|
| **Mơ hồ** | Dùng từ chung chung: "đẹp hơn", "tốt hơn" | Agent tự đoán, làm sai ý |
| **Xung đột** | Yêu cầu A mâu thuẫn yêu cầu B | Agent bỏ qua một trong hai |
| **Thiếu context** | Không nêu tech stack, file path | Không tương thích codebase |
| **Over-prompting** | Prompt > 200 chữ mà task đơn giản | Agent mất focus vào task chính |
| **Không guardrails** | Chỉ nói làm gì, không nói đừng làm gì | Scope creep, thay đổi ngoài ý muốn |

---

## ⏭️ Bài tiếp theo

Bạn đã biết lý thuyết về các lỗi. Bài 3.3 sẽ là **Demo thực tế** — cùng nhau xem AI Agent phản ứng như thế nào khi gặp prompt tệ vs prompt tốt trên Antigravity.

👉 **[Bài 3.3 → Demo: Prompt tệ vs Prompt tốt](lesson-03-demo-bad-vs-good-prompt.md)**

---

*📚 Section 3 · Prompt Engineering for AI Agents · Google Antigravity: Xây dựng AI Agent, AI App & Vibe Coding*
