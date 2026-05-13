# 📖 Hướng Dẫn Giảng Dạy – Section 6: Vibe Coding Dự Án Thực Tế

> Tài liệu dành cho giảng viên, hướng dẫn chi tiết cách dạy Section 6 với các lưu ý, tips, và kịch bản demo.

---

## 🎯 Mục tiêu tổng thể

Sau section này, học viên sẽ:
1. **Thành thạo workflow Vibe Coding** từ ý tưởng → thiết kế → code → deploy
2. **Sử dụng thành thạo Stitch Skills** để thiết kế UI chuyên nghiệp
3. **Tự động hoá quy trình Git** với GitHub MCP
4. **Có 1 dự án hoàn chỉnh** trong portfolio

---

## 📝 Hướng dẫn chuẩn bị trước khi dạy

### Checklist môi trường
- [ ] Antigravity IDE đã cài đặt và hoạt động
- [ ] Stitch MCP Server đã kết nối
- [ ] GitHub MCP Server đã kết nối
- [ ] Tất cả Stitch Skills đã cài đặt (chạy trước để verify)
- [ ] Tài khoản GitHub đã login
- [ ] Mạng internet ổn định (Stitch cần kết nối API)

### Chuẩn bị demo
- Tạo sẵn 1 Stitch project mẫu với vài screens để demo nhanh
- Chuẩn bị sẵn repo GitHub trống cho demo
- Test thử toàn bộ prompts trong guide ít nhất 1 lần trước khi dạy

---

## 📚 Hướng Dẫn Từng Bài

---

### Bài 1: Tổng quan Vibe Coding & Lập kế hoạch dự án

**🕐 Thời lượng:** 30-40 phút

**Cách mở bài:**
> "Các bạn đã học cách điều khiển AI Agent, viết prompt, kết nối MCP. Giờ là lúc kết hợp tất cả để build 1 sản phẩm thực tế – chỉ bằng cách mô tả ý tưởng."

**Nội dung giảng dạy:**

1. **Vibe Coding là gì?** (10 phút)
   - Định nghĩa: Lập trình bằng cách mô tả ý tưởng bằng ngôn ngữ tự nhiên
   - AI Agent đóng vai "developer thực thi"
   - Developer đóng vai "product manager + architect"
   - Minh hoạ bằng diagram workflow

2. **Giới thiệu dự án** (10 phút)
   - Tên: **English Practice Hub**
   - Mô tả: Trang web giúp người dùng luyện tập tiếng Anh qua vocabulary, grammar quiz, flashcards
   - Tại sao chọn dự án này: UI phong phú, nhiều tính năng, thực tế
   - Show mockup/wireframe đơn giản (có thể vẽ tay)

3. **Phân tích yêu cầu** (10 phút)
   - Liệt kê tính năng với học viên
   - Phân loại: MVP vs Nice-to-have
   - Tạo task list trong Antigravity

**💡 Tips giảng dạy:**
- Hỏi học viên: "Nếu bạn muốn build app gì?" để tạo engagement
- Cho học viên thấy sự khác biệt: "Dự án này nếu code truyền thống mất 2-3 tuần, Vibe Coding chỉ cần vài giờ"

---

### Bài 2: Cài đặt Stitch Skills & Chuẩn bị môi trường

**🕐 Thời lượng:** 20-30 phút

**Nội dung giảng dạy:**

1. **Giới thiệu Stitch Skills** (5 phút)
   - Repo: `google-labs-code/stitch-skills`
   - Mỗi skill là 1 "siêu năng lực" cho AI Agent
   - Tuân theo chuẩn Agent Skills open standard

2. **Cài đặt từng skill** (10 phút)
   - Demo chạy từng lệnh cài đặt:
   ```bash
   npx skills add google-labs-code/stitch-skills --skill stitch-design --global
   npx skills add google-labs-code/stitch-skills --skill stitch-loop --global
   npx skills add google-labs-code/stitch-skills --skill enhance-prompt --global
   npx skills add google-labs-code/stitch-skills --skill design-md --global
   npx skills add google-labs-code/stitch-skills --skill react:components --global
   ```
   - Giải thích `--global` vs project-level
   - Verify bằng cách list skills đã cài

3. **Tạo GitHub repo** (5 phút)
   - Demo tạo repo bằng GitHub MCP ngay trong Antigravity
   - Prompt mẫu:
   > "Tạo 1 GitHub repository mới tên 'english-practice-hub' với description 'A modern English practice web application', public, có README"

**⚠️ Lưu ý:**
- Một số học viên có thể gặp lỗi khi cài skills → chuẩn bị troubleshooting guide
- Verify Stitch MCP connection trước khi đi tiếp

---

### Bài 3: Thiết kế Design System với Stitch

**🕐 Thời lượng:** 40-50 phút

**Đây là bài quan trọng nhất về design!**

**Nội dung giảng dạy:**

1. **Design System là gì?** (10 phút)
   - Tập hợp các quy tắc thiết kế: màu sắc, font, bo góc, spacing
   - Tại sao cần: đảm bảo UI nhất quán, tiết kiệm thời gian
   - Ví dụ: Material Design, Apple HIG

2. **Tạo Stitch Project** (5 phút)
   - Prompt mẫu sử dụng trong Antigravity:
   > "Tạo 1 Stitch project mới tên 'English Practice Hub'"
   - Cho học viên thấy project được tạo thành công

3. **Tạo Design System** (15 phút)
   - Prompt mẫu:
   > "Tạo design system cho project English Practice Hub với phong cách hiện đại, trẻ trung. Color palette: tông xanh dương (primary), trắng (background), xám nhạt (secondary). Font: Inter. Corner radius: medium. Mode: light."
   - Demo thay đổi từng thuộc tính và xem kết quả
   - Show sự khác biệt giữa các preset màu

4. **Tạo DESIGN.md** (10 phút)
   - Kích hoạt skill `design-md`:
   > "Sử dụng skill design-md để phân tích project Stitch hiện tại và tạo file DESIGN.md"
   - Review file DESIGN.md được tạo ra
   - Giải thích tại sao file này quan trọng cho Stitch generation

**💡 Tips:**
- Cho học viên tự chọn color palette khác nhau → mỗi người có design khác nhau
- Demo live thay đổi design system → xem screens thay đổi theo

---

### Bài 4: Tạo UI Screens – Phần 1 (Trang chủ & Navigation)

**🕐 Thời lượng:** 45-60 phút

**Nội dung giảng dạy:**

1. **Enhance Prompt trước khi design** (10 phút)
   - Demo sự khác biệt giữa prompt thô vs enhanced:
     - **Thô:** "Tạo trang chủ cho app học tiếng Anh"
     - **Enhanced:** Sử dụng skill `enhance-prompt`
   - Prompt kích hoạt:
   > "Sử dụng skill enhance-prompt để tối ưu prompt sau: 'Tạo landing page cho ứng dụng luyện tập tiếng Anh với hero section, feature highlights, và call-to-action'"
   - So sánh kết quả trước/sau enhance

2. **Tạo Landing Page** (20 phút)
   - Prompt mẫu cho Stitch:
   > "Tạo screen cho landing page: Hero section với tiêu đề 'Master English, Your Way' và subtitle mô tả app. 3 feature cards: Vocabulary Builder, Grammar Quiz, Flashcard Review. CTA button 'Start Learning'. Modern, clean, engaging design."
   - Demo edit screen: thay đổi text, vị trí, màu sắc
   - Tạo 2-3 variants để so sánh

3. **Tạo Header/Navigation** (15 phút)
   - Prompt mẫu:
   > "Tạo screen cho navigation header: Logo 'EPH' bên trái, menu items: Home, Vocabulary, Grammar, Flashcards, bên phải có nút Dark Mode toggle và user avatar."

**💡 Tips:**
- Pause sau mỗi screen generation để phân tích kết quả
- Hỏi học viên: "Bạn thấy cần sửa gì?" → demo edit

---

### Bài 5: Tạo UI Screens – Phần 2 (Tính năng chính)

**🕐 Thời lượng:** 45-60 phút

**Nội dung giảng dạy:**

1. **Trang Vocabulary Practice** (15 phút)
   - Prompt mẫu:
   > "Tạo screen cho trang Vocabulary Practice: Hiển thị 1 từ vựng lớn ở giữa, phiên âm IPA, nghĩa tiếng Việt, câu ví dụ. Có nút 'Đã biết', 'Chưa biết', 'Tiếp theo'. Progress bar ở trên. Card style với shadow nhẹ."

2. **Trang Grammar Quiz** (15 phút)
   - Prompt mẫu:
   > "Tạo screen cho trang Grammar Quiz: Hiển thị câu hỏi trắc nghiệm, 4 đáp án dạng card có thể click, timer đếm ngược, score counter, progress indicator. Style gamified với màu sắc sinh động."

3. **Trang Flashcard Review** (10 phút)
   - Prompt mẫu:
   > "Tạo screen cho Flashcard Review: Card có thể flip giữa mặt trước (từ tiếng Anh) và mặt sau (nghĩa + ví dụ). Navigation arrows trái/phải. Counter '3/20'. Category tabs ở trên."

4. **Sử dụng stitch-loop** (5 phút)
   - Demo cách sinh nhiều trang đồng thời:
   > "Sử dụng skill stitch-loop để tạo website hoàn chỉnh cho English Practice Hub gồm: landing page, vocabulary page, grammar quiz page, flashcard page"

**⚠️ Lưu ý:**
- Stitch generation có thể mất 1-2 phút → chuẩn bị nội dung nói trong lúc chờ
- Nếu kết quả không như ý → demo cách edit để improve

---

### Bài 6: Convert Design → Code

**🕐 Thời lượng:** 50-60 phút

**Đây là bài "magic moment" – biến design thành code!**

**Nội dung giảng dạy:**

1. **Khởi tạo project React/Next.js** (10 phút)
   - Prompt trong Antigravity:
   > "Tạo project Next.js mới cho English Practice Hub. Sử dụng App Router, TypeScript, và Tailwind CSS."

2. **Convert với react-components skill** (25 phút)
   - Prompt kích hoạt:
   > "Sử dụng skill react-components để convert tất cả Stitch screens trong project thành React components. Tạo component tree phù hợp với cấu trúc Next.js App Router."
   - Walk through code được generate
   - Giải thích cấu trúc components
   - Show design tokens → CSS variables mapping

3. **Tích hợp và chạy thử** (15 phút)
   - Copy components vào project Next.js
   - Fix import paths, dependencies
   - `npm run dev` và xem kết quả
   - So sánh code output vs Stitch design

**💡 Tips:**
- Code generated có thể cần sửa nhỏ → đây là cơ hội dạy về limitations
- Nhấn mạnh: "AI generate 80%, bạn polish 20%"

---

### Bài 7: GitHub Workflow tự động

**🕐 Thời lượng:** 40-50 phút

**Nội dung giảng dạy:**

1. **Tạo branch cho feature** (10 phút)
   - Prompt mẫu:
   > "Sử dụng GitHub MCP để tạo branch mới tên 'feature/landing-page' từ branch 'main' trong repo 'english-practice-hub'"

2. **Push code & Tạo PR** (15 phút)
   - Prompt mẫu:
   > "Push tất cả files của landing page lên branch 'feature/landing-page'. Sau đó tạo Pull Request với title 'feat: Add landing page with hero section and feature cards', mô tả chi tiết những gì đã thêm."

3. **Review PR** (10 phút)
   - Demo đọc PR diff bằng GitHub MCP
   - Prompt:
   > "Review Pull Request #1 trong repo english-practice-hub. Kiểm tra code quality và cho nhận xét."

4. **Merge & Cleanup** (5 phút)
   - Demo merge PR bằng GitHub MCP
   - Prompt:
   > "Merge Pull Request #1 bằng squash merge."

**💡 Tips:**
- Nhấn mạnh đây là professional workflow, giống như làm ở công ty tech
- Cho thấy history rõ ràng trên GitHub

---

### Bài 8: Thêm tính năng & Fix bug

**🕐 Thời lượng:** 40-50 phút

**Nội dung giảng dạy:**

1. **Thêm Dark Mode** (15 phút)
   - Workflow hoàn chỉnh: Stitch (update design) → Code → Branch → PR
   - Prompt:
   > "Thêm tính năng Dark Mode cho English Practice Hub. Cập nhật design system trên Stitch sang dark appearance. Sau đó implement toggle trong code. Tạo branch 'feature/dark-mode' và PR."

2. **Thêm Progress Tracking** (15 phút)
   - Prompt:
   > "Thêm tính năng progress tracking: Lưu tiến trình học của user vào localStorage. Hiển thị statistics trên trang chủ: số từ đã học, quiz đã làm, streak days."

3. **Fix Bug Demo** (10 phút)
   - Cố tình tạo 1 bug hoặc dùng bug thực tế
   - Demo workflow: Phát hiện → Branch 'fix/...' → Fix → PR → Merge

**⚠️ Lưu ý:**
- Mỗi feature/bugfix = 1 branch riêng biệt
- Nhấn mạnh naming convention: `feature/xxx`, `fix/xxx`

---

### Bài 9: Polish UI, Responsive & Animation

**🕐 Thời lượng:** 40-50 phút

**Nội dung giảng dạy:**

1. **Responsive Design** (15 phút)
   - Tạo variants cho mobile, tablet trên Stitch
   - Implement responsive CSS/Tailwind

2. **Micro-animations** (15 phút)
   - Thêm hover effects, page transitions, card flip animation
   - Prompt mẫu:
   > "Thêm animations cho English Practice Hub: Fade-in khi load page, hover scale trên cards, flip animation cho flashcards, smooth transition giữa các trang."

3. **Final Polish** (10 phút)
   - SEO meta tags
   - Loading states
   - Error handling cơ bản

---

### Bài 10: Review & Tổng kết

**🕐 Thời lượng:** 30-40 phút

**Nội dung giảng dạy:**

1. **Review dự án** (10 phút)
   - Chạy demo sản phẩm hoàn chỉnh
   - Xem lại Git history: bao nhiêu PRs, commits
   - So sánh thời gian vs traditional coding

2. **Best Practices** (10 phút)
   - Luôn bắt đầu từ design system
   - Prompt càng chi tiết → kết quả càng tốt
   - Review code AI generate, đừng blind trust
   - Git workflow chuyên nghiệp cho mọi thay đổi

3. **Những lỗi thường gặp** (5 phút)
   - Prompt quá mơ hồ
   - Không review code output
   - Skip design system → UI không nhất quán
   - Không dùng branches → messy history

4. **Next Steps** (5 phút)
   - Áp dụng cho dự án cá nhân
   - Explore thêm skills: `shadcn-ui`, `remotion`
   - Tham gia community

---

## 🎨 Phong cách giảng dạy khuyến nghị

| Aspect | Gợi ý |
|--------|-------|
| **Pace** | Vừa demo vừa giải thích, pause để học viên theo kịp |
| **Interaction** | Hỏi học viên chọn design preferences, vote variant |
| **Error Handling** | Khi AI cho kết quả sai → biến thành teaching moment |
| **Live Coding** | 70% demo live, 30% slides/giải thích |
| **Breakpoints** | Cho 5 phút break sau mỗi 2 bài |

---

## 📦 Tài liệu đi kèm

| File | Mô tả |
|------|-------|
| `section-6-curriculum.md` | Curriculum chi tiết |
| `step-by-step-guide.md` | Hướng dẫn step-by-step với prompt mẫu |
| `teaching-guide.md` | File này – hướng dẫn giảng dạy |
