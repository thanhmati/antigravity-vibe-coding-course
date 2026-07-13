# 🎬 Bài 3.5: Demo — Viết Prompt cho AI Agent từ Zero → Pro

> **Section 3** · Prompt Engineering for AI Agents
> **Thời lượng:** ~30 phút | 🎬 Demo thực chiến
> **Yêu cầu:** Đã hoàn thành Bài 3.4 (Framework RGCO)

---

## 🎯 Mục tiêu bài học

Sau bài này, bạn sẽ:

- ✅ Thấy **quá trình tư duy** khi áp dụng RGCO vào prompt thực tế
- ✅ Hiểu cách **cải thiện dần dần** từ Level 1 → Level 3
- ✅ Nắm **3 use case thực tế** phổ biến nhất trong Vibe Coding
- ✅ Sẵn sàng tự thực hành với project của mình

---

## 🎬 Cách theo dõi Demo

1. Mở **Antigravity IDE**
2. Tạo project mẫu (hoặc dùng project đang có)
3. Làm theo từng bước, gõ prompt vào Antigravity để so sánh kết quả

---

## Use Case 1 — Generate UI Component

**Tình huống:** Bạn cần tạo một `ProductCard` component cho trang e-commerce.

---

### 🟢 Level 1 (Beginner)
```
"Tạo ProductCard component"
```
**Output Agent:** Một React component rất cơ bản với title và price, không có TypeScript, không có Tailwind. Có thể đúng framework, có thể không.

---

### 🟡 Level 2 (Intermediate)
```
"Tạo ProductCard component bằng React TypeScript và Tailwind CSS.
Component hiển thị ảnh sản phẩm, tên, giá, và nút Add to Cart."
```
**Output Agent:** Tốt hơn nhiều — đúng tech stack, đủ props cơ bản. Nhưng thiếu: vị trí file, props interface chi tiết, handler functions, loading state.

---

### 🔴 Level 3 — RGCO đầy đủ

**Bước 1:** Định nghĩa Role
```
Bạn là Senior Frontend Developer chuyên React + TypeScript + Tailwind.
```

**Bước 2:** Định nghĩa Goal  
```
Tạo component ProductCard để hiển thị thông tin sản phẩm trong trang listing.
```

**Bước 3:** Định nghĩa Constraints
```
- File location: src/components/products/ProductCard.tsx
- Props interface:
  product: { id: string, name: string, price: number,
             image: string, rating: number, inStock: boolean }
  onAddToCart: (productId: string) => void
- Dùng Tailwind CSS, không inline styles
- Nếu inStock = false, button disabled với text "Out of Stock"
- Có skeleton loading state khi image chưa load
- Không tạo file test, không tạo Storybook
```

**Bước 4:** Định nghĩa Output
```
Output: file tsx hoàn chỉnh. Export named và default.
```

**Prompt hoàn chỉnh:**

```
Bạn là Senior Frontend Developer chuyên React + TypeScript + Tailwind.

Goal: Tạo component ProductCard để hiển thị thông tin sản phẩm trong trang listing.

Constraints:
- File: src/components/products/ProductCard.tsx
- Props:
  product: { id: string, name: string, price: number,
             image: string, rating: number, inStock: boolean }
  onAddToCart: (productId: string) => void
- Tailwind CSS only, no inline styles
- inStock = false → button disabled, text "Out of Stock"
- Skeleton loading state cho image (dùng bg-gray-200 animate-pulse)
- Không tạo test file, không tạo Storybook

Output: File tsx hoàn chỉnh với named + default export.
```

**Kết quả:** Component production-ready, đúng vị trí, đúng props, đúng behavior. Sử dụng được ngay lần đầu.

---

## Use Case 2 — Code Review

**Tình huống:** Bạn vừa viết một API endpoint xử lý thanh toán. Cần review trước khi merge.

---

### 🟢 Level 1
```
"Review code API thanh toán của tôi"
```
**Vấn đề:** Agent không biết file nào, focus vào khía cạnh nào, output format như thế nào.

---

### 🔴 Level 3 — RGCO

```
Bạn là Senior Backend Engineer chuyên về payment systems và API security.

Goal: Review file src/api/payments/paymentController.ts trước khi merge vào main.

Focus vào:
1. Security: input validation, injection risks, sensitive data exposure
2. Error handling: unhandled exceptions, missing try/catch
3. Business logic: edge cases trong calculation

Không cần review:
- Code formatting hay naming convention
- Performance optimization (sẽ làm sau)
- TypeScript types (đã có linter check)

Output format:
## 🔴 Critical (phải fix trước merge)
- [line X]: [vấn đề] → [recommended fix]

## 🟡 Major (nên fix)
- [line X]: [vấn đề] → [recommended fix]

## 🟢 Minor (nice to have)
- [line X]: [vấn đề] → [recommended fix]
```

**Kết quả:** Review có cấu trúc, tập trung vào đúng khía cạnh quan trọng, actionable feedback cho từng issue.

---

## Use Case 3 — Debug Lỗi Phức Tạp

**Tình huống:** Một bug production — user báo cáo checkout form bị treo sau khi điền xong.

---

### 🟢 Level 1
```
"Checkout form bị treo, fix giúp tôi"
```
**Vấn đề:** Không đủ thông tin. Agent có thể đọc 20 file, tốn nhiều token, không tìm được root cause.

---

### 🔴 Level 3 — RGCO

```
Bạn là Senior React Developer chuyên debug frontend issues.

Goal: Tìm và fix bug khiến CheckoutForm bị treo (unresponsive) sau khi user fill đầy đủ form fields.

Context:
- File chính: src/features/checkout/CheckoutForm.tsx
- Bug reproduce: Fill name, email, card number, expiry → form trở nên unresponsive
- Console error: "Maximum update depth exceeded. This can happen when a
  component calls setState inside useEffect"
- Chỉ xảy ra khi user điền đủ tất cả fields

Hypothesis: Có infinite re-render loop trong useEffect.
Nghi ngờ file: src/hooks/useFormValidation.ts

Constraints:
- Chỉ xem 2 file: CheckoutForm.tsx và useFormValidation.ts
- Không refactor, chỉ fix bug cụ thể này
- Giải thích root cause trước khi đề xuất fix

Output:
1. Root cause analysis (2-3 câu)
2. Đoạn code cần thay đổi (diff format)
3. Giải thích tại sao fix này đúng
```

**Kết quả:** Agent tìm đúng file, đúng vấn đề (missing dependency array trong useEffect), fix chính xác, giải thích rõ ràng.

---

## 🔬 So Sánh Token Usage

Một trong những lợi ích ít được nhắc đến của prompt tốt: **tiết kiệm token đáng kể**.

| | Prompt Level 1 | Prompt Level 3 |
|--|---------------|----------------|
| **Input tokens** | ~20 tokens | ~150 tokens |
| **Agent phải đọc** | Cả codebase (~50K tokens) | 2-3 file cụ thể (~5K tokens) |
| **Output tokens** | Không rõ, có thể thừa | Đúng format, ngắn gọn |
| **Lần retry** | 2-3 lần | 0-1 lần |
| **Tổng token** | **~200K+ tokens** | **~10K tokens** |
| **Tiết kiệm** | — | **~95%** |

> 💡 Prompt tốt không chỉ cho kết quả đúng hơn — nó còn **giảm chi phí API đến 95%** trong nhiều trường hợp thực tế.

---

## 💡 Live Practice — Thực Hành Ngay

Hãy chọn một task bạn đang cần làm trong project và:

**Bước 1:** Viết prompt cấp Level 1 (tự nhiên, không cần suy nghĩ nhiều)  
**Bước 2:** Áp dụng RGCO — điền vào từng thành phần  
**Bước 3:** Gửi cả 2 prompt cho Antigravity (trong 2 conversation riêng)  
**Bước 4:** So sánh kết quả — chất lượng, số file, đúng vị trí không?

```markdown
Template thực hành:

R: Bạn là ________________________
G: Tạo/Fix/Review ________________
C: - Tech stack: ________________
   - File: _______________________
   - Không: ______________________
O: Output là ____________________
```

---

## 🔑 Tóm tắt bài học

```
Zero → Pro không phải một bước nhảy lớn.
Nó là quá trình điền dần vào 4 thành phần RGCO.

Mỗi thành phần bạn thêm vào = Agent cần đoán ít hơn 1 thứ.
Ít đoán hơn = Kết quả chính xác hơn.

Và quan trọng: prompt tốt tiết kiệm 90-95% token
so với prompt cấp Level 1 trong cùng một task.
```

---

## ⏭️ Bài tiếp theo

Bạn đã thành thạo viết prompt tốt. Bài 3.6 là **Workshop cuối section** — bạn sẽ tự xây dựng bộ Prompt Library cá nhân, ra khỏi section này với tài sản thực sự dùng được cho mọi project.

👉 **[Bài 3.6 → Workshop: Xây dựng Prompt Library cá nhân](lesson-06-workshop-prompt-library.md)**

---

*📚 Section 3 · Prompt Engineering for AI Agents · Google Antigravity: Xây dựng AI Agent, AI App & Vibe Coding*
