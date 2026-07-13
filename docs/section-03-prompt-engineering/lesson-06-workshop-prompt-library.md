# 🛠️ Bài 3.6: Workshop — Xây Dựng Prompt Library Cá Nhân

> **Section 3** · Prompt Engineering for AI Agents
> **Thời lượng:** ~30 phút | 🛠️ Hands-on Workshop
> **Yêu cầu:** Đã hoàn thành Bài 3.1–3.5

---

## 🎯 Mục tiêu bài học

Sau bài này, bạn sẽ:

- ✅ Hiểu **giá trị của Prompt Library** trong workflow hàng ngày
- ✅ Có **bộ template đầy đủ** cho 8 tình huống phổ biến nhất
- ✅ Biết cách **tổ chức và mở rộng** Library theo thời gian
- ✅ **Ra khỏi bài học với một file** `.prompt-library.md` sẵn sàng dùng

---

## 1. Tại sao cần Prompt Library?

Hãy hình dung bạn là một Senior Developer. Bạn không viết boilerplate từ đầu mỗi lần — bạn có snippets, templates, scripts tái sử dụng.

**Prompt Library là snippets cho AI Agents.**

> 💡 **Không có Library:** Mỗi lần cần prompt → suy nghĩ lại từ đầu → mất 5-10 phút → prompt không nhất quán.
>
> **Có Library:** Copy template → điền 3-4 chỗ → gửi ngay → nhất quán 100%.

**Lợi ích thực tế:**

| Không có Library | Có Library |
|-----------------|-----------|
| Viết prompt từ đầu mỗi lần | Copy-paste và customize trong 30 giây |
| Không nhất quán giữa các lần | Nhất quán, predictable output |
| Dễ quên Constraints quan trọng | Không bao giờ bỏ sót |
| Khó chia sẻ với team | Share file là xong |

---

## 2. Cấu trúc một Prompt Template tốt

Mỗi entry trong Library có cấu trúc:

```markdown
## [Tên Template] — [Use Case ngắn gọn]

**Khi dùng:** [Tình huống nào dùng template này]

**Template:**
```
[Role]

[Goal]

[Constraints]

[Output]
```

**Customizable parts:** [các phần cần thay thế khi dùng]

**Ví dụ thực tế:** [1 ví dụ cụ thể đã điền vào]
```

---

## 3. Bộ Prompt Library Cơ Bản — 8 Templates

Đây là bộ template starter bạn sẽ copy vào file của mình và tùy chỉnh theo project.

---

### Template 1: New React Component

```
Bạn là Senior React Developer.

Goal: Tạo component [TÊN COMPONENT] với chức năng [MÔ TẢ].

Constraints:
- File: src/components/[THỬ MỤC]/[TÊN].tsx
- Tech: React 18 + TypeScript + [STYLING: Tailwind/CSS Modules]
- Props: [DANH SÁCH PROPS VỚI TYPES]
- [CÁC CONSTRAINT KHÁC]
- Không tạo test file, không tạo Storybook

Output: File tsx hoàn chỉnh với named + default export.
```

**Dùng khi:** Cần tạo UI component mới từ đầu.

---

### Template 2: Custom React Hook

```
Bạn là Senior React Developer chuyên về hooks và state management.

Goal: Tạo custom hook [useHookName] để [MỤC ĐÍCH CỤ THỂ].

Constraints:
- File: src/hooks/[useHookName].ts
- Input parameters: [PARAMS VÀ TYPES]
- Return values: [NHỮNG GÌ HOOK TRẢ VỀ]
- Dùng: [useEffect/useState/useCallback cụ thể nếu cần]
- Cleanup: [có cần cleanup không]
- Không dùng external library

Output: File ts thuần (không phải tsx). Có JSDoc comment cho return type.
```

**Dùng khi:** Cần tách logic phức tạp ra khỏi component.

---

### Template 3: API Endpoint (Node.js/Express)

```
Bạn là Senior Backend Developer chuyên Node.js + Express + TypeScript.

Goal: Tạo endpoint [METHOD] [PATH] để [CHỨC NĂNG].

Constraints:
- File: src/api/[domain]/[name].controller.ts
- Middleware hiện có: [auth middleware, validate middleware...]
- Database: [Prisma/TypeORM] với model [TÊN MODEL]
- Error handling: dùng custom AppError class tại src/utils/AppError.ts
- Response format: { success: boolean, data?: T, error?: string }
- Không thay đổi database schema

Output: Controller function + route registration. Không cần test.
```

**Dùng khi:** Cần thêm API endpoint mới.

---

### Template 4: Security Code Review

```
Bạn là Senior Security Engineer chuyên web application security (OWASP Top 10).

Goal: Review file [ĐƯỜNG DẪN] về security vulnerabilities.

Tập trung vào:
- SQL/NoSQL injection
- Authentication & authorization flaws
- Sensitive data exposure
- Input validation gaps
- CORS & header configuration

Không đánh giá: code style, naming, performance.

Output:
🔴 Critical: [phải fix trước deploy]
🟡 Major: [nên fix trong sprint này]
🟢 Minor: [backlog]

Format mỗi issue: Line [X] | [Vấn đề] | [Recommended fix]
```

**Dùng khi:** Review code liên quan đến auth, payment, user data.

---

### Template 5: Performance Review

```
Bạn là Senior Frontend Engineer chuyên Core Web Vitals và React performance.

Goal: Phân tích performance bottlenecks trong [FILE/COMPONENT].

Tập trung vào:
- Unnecessary re-renders
- Missing useMemo/useCallback
- Large bundle imports
- Blocking operations trong render
- Memory leaks

Không đánh giá: logic correctness, styling.

Output format:
- [Component/Line]: [Vấn đề] → [Fix] → [Impact dự kiến]
Kèm theo: danh sách ưu tiên theo mức độ impact.
```

**Dùng khi:** Trang chậm, user complain lag.

---

### Template 6: Bug Fix

```
Bạn là Senior [React/Node/...] Developer.

Bug: [MÔ TẢ NGẮN]
File: [ĐƯỜNG DẪN]
Error: [PASTE ERROR MESSAGE]
Expected: [HÀNH VI MONG MUỐN]
Actual: [HÀNH VI THỰC TẾ]
Reproduce: [BƯỚC TÁI HIỆN]

Constraints:
- Chỉ sửa trong [PHẠM VI: function X / lines Y-Z]
- Không thay đổi [GÌ ĐÓ PHẢI GIỮ NGUYÊN]
- Root cause suspected: [NẾU ĐÃ BIẾT]

Output:
1. Root cause (2-3 câu)
2. Code diff cần thay đổi
3. Giải thích tại sao fix này đúng
```

**Dùng khi:** Có bug cụ thể cần fix nhanh.

---

### Template 7: Refactor Code

```
Bạn là Senior [Tech] Developer chuyên clean code và maintainability.

Goal: Refactor [FILE/FUNCTION] để [MỤC TIÊU: dễ test hơn / tách responsibility / giảm complexity].

Constraints:
- Không thay đổi public API / function signature
- Không thay đổi business logic
- Chỉ cấu trúc lại code, không thêm feature
- Giữ nguyên tất cả edge case handling hiện có
- [THÊM CONSTRAINT CỤ THỂ]

Output:
- File(s) sau khi refactor
- Ngắn gọn giải thích các thay đổi chính
```

**Dùng khi:** Code đang hoạt động nhưng khó đọc/test.

---

### Template 8: Write Tests

```
Bạn là Senior [Tech] Developer chuyên TDD và testing.

Goal: Viết [unit/integration] tests cho [FILE/FUNCTION].

Context:
- Testing framework: [Jest/Vitest + Testing Library]
- Test file location: [src/...__tests__/name.test.ts]
- Coverage target: [happy path + 3 edge cases tối thiểu]

Tập trung vào:
- [Functionality 1]
- [Functionality 2]
- [Edge cases cụ thể nếu biết]

Không: E2E tests, performance tests, test infrastructure.

Output: Test file với describe/it blocks rõ ràng. Mỗi test có tên mô tả hành vi cụ thể.
```

**Dùng khi:** Cần coverage cho code hiện có.

---

## 4. Workshop — Tự Tạo Library của Bạn

### Bước 1: Tạo file

Tạo file `.prompt-library.md` tại root của project (hoặc tại `docs/prompts/`):

```bash
touch .prompt-library.md
```

### Bước 2: Thêm header

```markdown
# 🗂️ Prompt Library — [Tên Project của bạn]

> Bộ template prompt cá nhân cho AI Agent (Google Antigravity)
> Cập nhật lần cuối: [Date]

---
```

### Bước 3: Copy 8 templates ở trên vào file

Điều chỉnh các phần sau cho phù hợp với project của bạn:
- Tech stack cụ thể (React/Vue, Tailwind/Material...)
- Naming conventions của team
- File structure conventions
- Error handling patterns đang dùng

### Bước 4: Thêm 2 template riêng của bạn

Nghĩ về 2 task bạn hay làm thủ công trong project:
- Template 9: [Task bạn hay làm 1]
- Template 10: [Task bạn hay làm 2]

Viết template RGCO cho chúng.

---

## 5. Cách Phát Triển Library theo Thời Gian

```
Mỗi khi bạn viết một prompt mới tốt:
1. Lưu lại vào Library (generalize nó thành template)
2. Đặt tên mô tả use case
3. Ghi chú "Khi dùng"

Mỗi khi Agent cho kết quả không như ý:
1. Phân tích: thiếu thành phần nào của RGCO?
2. Cập nhật template tương ứng
3. Thử lại → Library tốt dần theo thời gian
```

> 💡 **Best practice:** Treat Prompt Library như code — version control nó trong Git, chia sẻ với team, review và cải thiện định kỳ.

---

## ✅ Checklist Hoàn Thành Workshop

```
☑ Tạo file .prompt-library.md
☑ Copy 8 templates cơ bản
☑ Customize tech stack và conventions cho project của bạn
☑ Thêm ít nhất 2 template riêng (use case cụ thể của bạn)
☑ Test ít nhất 3 templates bằng cách gửi vào Antigravity
☑ Commit file vào Git repository
```

---

## 🏆 Bài Tập Bonus

Thử áp dụng Library vào một mini-project:

1. Pick một feature nhỏ trong project của bạn (ví dụ: thêm search bar)
2. Dùng Template 1 để tạo SearchBar component
3. Dùng Template 2 để tạo useSearch hook
4. Dùng Template 8 để viết tests cho hook
5. Dùng Template 4 để review code vừa tạo

Toàn bộ workflow trên mà không cần suy nghĩ về prompt — chỉ cần copy template và điền vào.

---

## 🔑 Tóm tắt Section 3

Chúc mừng! Bạn đã hoàn thành Section 3 — Prompt Engineering for AI Agents.

```
Bạn đã học được:

3.1 — PE cho AI Agent là kỹ năng giao tiếp có cấu trúc, không phải magic words
3.2 — 5 lỗi phổ biến: Mơ hồ, Xung đột, Thiếu context, Over-prompting, Không guardrails
3.3 — [Demo] Thấy tận mắt tác hại của prompt tệ và hiệu quả của prompt tốt
3.4 — Framework RGCO: Role + Goal + Constraints + Output
3.5 — [Demo] Áp dụng RGCO vào 3 use case thực tế, tiết kiệm đến 95% token
3.6 — [Workshop] Xây dựng Prompt Library cá nhân — tài sản dùng ngay
```

---

## ⏭️ Section tiếp theo

Bạn đã master Prompt Engineering. Section 4 sẽ nâng bạn lên tầm cao hơn: **Context Engineering** — kỹ thuật quản lý memory và context cho AI Agent trong những dự án dài hơi, giúp Agent không bao giờ "quên" dự án của bạn.

👉 **[Section 4 → Context Engineering for AI Agents](../section-04-context-engineering/README.md)**

---

*📚 Section 3 · Prompt Engineering for AI Agents · Google Antigravity: Xây dựng AI Agent, AI App & Vibe Coding*
