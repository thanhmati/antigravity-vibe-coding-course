# 📘 Bài 3.4: Framework RGCO — Công Thức Viết Prompt Hiệu Quả

> **Section 3** · Prompt Engineering for AI Agents
> **Thời lượng:** ~25 phút | 📖 Theory
> **Yêu cầu:** Đã hoàn thành Bài 3.1–3.3

---

## 🎯 Mục tiêu bài học

Sau bài này, bạn sẽ:

- ✅ Nắm vững **Framework RGCO**: Role, Goal, Constraints, Output
- ✅ Hiểu **vai trò của từng thành phần** và khi nào cần dùng
- ✅ Có **template sẵn** cho 4 use case phổ biến nhất
- ✅ Biết cách **điều chỉnh framework** cho từng tình huống

---

## 1. Framework RGCO là gì?

Framework RGCO là công thức 4 thành phần giúp bạn thiết kế prompt có cấu trúc, rõ ràng và nhất quán:

```
R — Role       : Bạn muốn Agent đóng vai gì?
G — Goal       : Mục tiêu cụ thể của task là gì?
C — Constraints: Giới hạn, ràng buộc, điều không được làm?
O — Output     : Kết quả trông như thế nào?
```

> 💡 **Tại sao cần framework?** Vì không phải lúc nào bạn cũng có thời gian suy nghĩ xem "prompt này thiếu gì". RGCO là mental checklist giúp bạn không bỏ sót thành phần quan trọng.

---

## 2. Chi tiết từng thành phần

### R — Role (Vai trò)

Định nghĩa **"tư cách" và "chuyên môn"** Agent cần có để thực thi task.

**Tại sao quan trọng?** LLM là generalist — nó biết nhiều thứ. Định nghĩa Role giúp Agent "switch mode" sang chuyên môn phù hợp, tương tự việc bạn nói với AI "hãy hành xử như một Senior Security Engineer" thay vì chỉ nói "giúp tôi review code".

```
✅ Role tốt:
"Bạn là Senior React Developer với kinh nghiệm 5 năm về performance optimization."
"Bạn là Technical Writer chuyên viết tài liệu API cho developer audience."
"Bạn là Security Engineer chuyên về web application security (OWASP)."
"Bạn là Code Reviewer tập trung vào maintainability và clean code."
```

```
❌ Role không hiệu quả:
"Bạn là AI hữu ích" (quá chung chung)
"Bạn là chuyên gia" (chuyên gia về cái gì?)
```

---

### G — Goal (Mục tiêu)

Mô tả **task cụ thể** bạn muốn Agent thực hiện — bao gồm ngữ cảnh và lý do nếu cần.

**Cấu trúc gợi ý:**
```
"[Hành động] + [đối tượng] + [ngữ cảnh] + [lý do nếu cần]"
```

```
✅ Goal tốt:
"Tạo custom hook useDebounce cho React app để optimize search input."
"Refactor hàm calculateDiscount trong pricing.ts để dễ test hơn."
"Viết migration script chuyển data từ schema cũ sang schema mới."
```

```
❌ Goal không rõ:
"Làm cái gì đó với search" (không rõ làm gì)
"Fix code" (code nào? fix lỗi nào?)
```

---

### C — Constraints (Ràng buộc)

Định nghĩa **giới hạn và ràng buộc** — cả những gì Agent nên làm lẫn những gì không được làm.

**Các loại Constraints phổ biến:**

| Loại | Ví dụ |
|------|-------|
| **Tech stack** | "Chỉ dùng React hooks, không dùng class components" |
| **Phạm vi file** | "Chỉ sửa file auth.ts, không tạo file mới" |
| **Phong cách code** | "Dùng functional programming, tránh mutation" |
| **Performance** | "Không thêm dependencies mới" |
| **Business logic** | "Không thay đổi logic pricing, chỉ refactor structure" |
| **Thời gian** | "Task này phải hoàn thành trong 1 file, không phức tạp hóa" |

---

### O — Output (Đầu ra)

Mô tả **kết quả mong muốn trông như thế nào** — format, nơi đặt file, những gì cần và không cần bao gồm.

```
✅ Output rõ ràng:
"Output: File tsx tại src/components/ui/Input.tsx.
Không cần test file. Không cần Storybook story."

"Output: Pull request description bằng tiếng Anh,
format: [Title] [Summary] [Changes] [Testing]."

"Output: Chỉ đoạn code cần thay đổi (diff format), không paste cả file."
```

---

## 3. Template RGCO cho 4 Use Case Phổ Biến

### 🖥️ Template 1: Code Generation

```markdown
**[R]** Bạn là Senior [Tech Stack] Developer.

**[G]** Tạo [component/function/module] với chức năng [mô tả cụ thể].

**[C]**
- Tech stack: [React/Vue/Node...] + [TypeScript/JavaScript] + [styling]
- File location: [đường dẫn cụ thể]
- Naming convention: [PascalCase/camelCase...]
- Không: [những gì không được làm]

**[O]** File [tên file] hoàn chỉnh với TypeScript types.
[Có/Không] cần test file. [Có/Không] cần comment.
```

**Ví dụ thực tế:**

```
Bạn là Senior React Developer.

Tạo component SearchBar với debounce search functionality.

Constraints:
- React 18 + TypeScript + Tailwind CSS
- File: src/components/ui/SearchBar.tsx
- Dùng custom hook useDebounce (đã có tại src/hooks/useDebounce.ts)
- Props: onSearch: (query: string) => void, placeholder?: string, debounceMs?: number
- Không tạo file hook mới

Output: File tsx với TypeScript types đầy đủ. Không cần test.
```

---

### 🔍 Template 2: Code Review

```markdown
**[R]** Bạn là Senior Engineer chuyên về [focus area: performance/security/clean code].

**[G]** Review file [đường dẫn] và chỉ ra các vấn đề.

**[C]**
- Tập trung vào: [danh sách cụ thể: security holes, perf bottlenecks...]
- Không đánh giá: [những gì bỏ qua: code style, naming...]
- Tech stack context: [để hiểu conventions]

**[O]** Danh sách issues format:
- 🔴 Critical: [issues ảnh hưởng đến security/correctness]
- 🟡 Major: [issues ảnh hưởng đến performance/maintainability]
- 🟢 Minor: [nice-to-have improvements]
Với mỗi issue: [line number] + [vấn đề] + [đề xuất fix]
```

**Ví dụ thực tế:**

```
Bạn là Senior Security Engineer chuyên về web application security.

Review file src/api/userController.ts để tìm security vulnerabilities.

Tập trung vào:
- SQL injection risks
- Authentication/authorization issues
- Data validation gaps
- Sensitive data exposure

Không đánh giá code style hay naming convention.

Output:
🔴 Critical: issues phải fix ngay
🟡 Major: issues nên fix trước release
🟢 Minor: nice-to-have

Mỗi issue: line number + mô tả + recommended fix.
```

---

### 🎨 Template 3: UI Generation

```markdown
**[R]** Bạn là Senior Frontend Developer + UI Engineer.

**[G]** Tạo [tên screen/component] với layout [mô tả].

**[C]**
- Design system: [Tailwind / Material / custom]
- Responsive: [mobile-first / desktop-only / breakpoints cụ thể]
- Theme: [light/dark/both]
- Accessibility: [cần/không cần aria labels...]
- Animation: [có/không / loại cụ thể]
- File structure: [...]

**[O]** [Số lượng] file: [liệt kê]. Không cần [những gì bỏ qua].
```

---

### 🐛 Template 4: Bug Fixing

```markdown
**[R]** Bạn là Senior [Tech] Developer.

**[G]** Fix bug trong [file path].

Bug description:
- Error message: [paste error]
- Expected: [hành vi đúng]
- Actual: [hành vi sai]
- Reproduce: [bước tái hiện nếu cần]

**[C]**
- Chỉ sửa trong [phạm vi cụ thể: function/lines/file]
- Không thay đổi: [những gì giữ nguyên]
- Root cause đã xác định: [nếu biết]

**[O]** Chỉ đoạn code cần thay đổi.
Giải thích ngắn gọn tại sao đây là root cause.
```

---

## 4. Khi nào bỏ qua một thành phần?

RGCO là **framework linh hoạt**, không phải rigid checklist. Một số thành phần có thể bỏ khi không cần thiết:

| Thành phần | Có thể bỏ khi |
|-----------|--------------|
| **Role** | Task đơn giản, không cần chuyên môn đặc thù |
| **Goal** | Task rất rõ ràng từ context (rare) |
| **Constraints** | Agent đã có đầy đủ context từ AGENTS.md (Section 4) |
| **Output** | Format output quá rõ ràng từ task |

> 💡 **Rule of thumb:** Bỏ một thành phần chỉ khi bạn **chắc chắn** Agent đã biết thông tin đó. Khi nghi ngờ, hãy thêm vào.

---

## 5. RGCO trong 30 giây — Quick Prompt Builder

Khi cần viết prompt nhanh, dùng câu hỏi này:

```
1. [Role]  → "Agent cần chuyên môn gì cho task này?"
2. [Goal]  → "Cụ thể Agent phải làm gì?"
3. [Constraints] → "Giới hạn nào? Không được làm gì?"
4. [Output] → "Kết quả trông như thế nào? File ở đâu?"
```

Trả lời 4 câu đó → bạn đã có prompt tốt.

---

## 🔑 Tóm tắt bài học

```
RGCO = Role + Goal + Constraints + Output

R: Định nghĩa chuyên môn Agent cần có
G: Mô tả task cụ thể, rõ ràng, có context
C: Giới hạn scope, tech stack, điều không được làm
O: Format kết quả, file path, những gì cần/không cần
```

| Framework | Không có RGCO | Có RGCO |
|-----------|--------------|---------|
| **Độ chính xác** | ~30% | ~90% |
| **Lần redo** | 2-3 lần | 0-1 lần |
| **Token tiêu tốn** | Nhiều | Ít |
| **Thời gian** | Dài | Ngắn |

---

## ⏭️ Bài tiếp theo

Bạn đã có framework trong tay. Bài 3.5 là **Demo thực chiến** — chúng ta sẽ cùng nhau áp dụng RGCO vào 3 task thực tế trên Antigravity, từ prompt thô → cải thiện từng bước → output production-ready.

👉 **[Bài 3.5 → Demo: Viết Prompt từ Zero → Pro](lesson-05-demo-zero-to-pro.md)**

---

*📚 Section 3 · Prompt Engineering for AI Agents · Google Antigravity: Xây dựng AI Agent, AI App & Vibe Coding*
