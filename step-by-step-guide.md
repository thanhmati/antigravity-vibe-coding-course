# 🚀 Hướng Dẫn Step-by-Step: Từ Ý Tưởng → Trang Web Hoàn Chỉnh

> **Dự án:** English Practice Hub – Trang web luyện tập tiếng Anh
> **Công cụ:** Antigravity + Stitch MCP + GitHub MCP + Stitch Skills
> **Thời gian ước tính:** 3-4 giờ

---

## 📋 Mục lục

1. [Step 1: Lên ý tưởng & Lập kế hoạch](#step-1)
2. [Step 2: Tạo GitHub Repository](#step-2)
3. [Step 3: Cài đặt Stitch Skills](#step-3)
4. [Step 4: Tạo Stitch Project & Design System](#step-4)
5. [Step 5: Enhance Prompt & Tạo UI Screens](#step-5)
6. [Step 6: Tạo thêm screens cho các tính năng](#step-6)
7. [Step 7: Tạo DESIGN.md document](#step-7)
8. [Step 8: Convert Design → React Code](#step-8)
9. [Step 9: Khởi tạo project Next.js & Tích hợp code](#step-9)
10. [Step 10: GitHub Workflow – Branch & Pull Request](#step-10)
11. [Step 11: Thêm tính năng Dark Mode](#step-11)
12. [Step 12: Polish & Deploy](#step-12)

---

<a id="step-1"></a>
## Step 1: Lên ý tưởng & Lập kế hoạch

### 🎯 Mục tiêu
Xác định rõ dự án cần build: tính năng, đối tượng người dùng, tech stack.

### 📝 Prompt mẫu

Mở Antigravity và nhập prompt sau:

```
Tôi muốn xây dựng 1 trang web luyện tập tiếng Anh tên "English Practice Hub" với các tính năng:

1. Landing Page: Hero section giới thiệu app, feature highlights, CTA
2. Vocabulary Practice: Hiển thị từ vựng, phiên âm, nghĩa, ví dụ. User đánh dấu "Đã biết" / "Chưa biết"
3. Grammar Quiz: Câu hỏi trắc nghiệm ngữ pháp, 4 đáp án, timer, score
4. Flashcard Review: Card flip giữa tiếng Anh và tiếng Việt
5. Progress Tracking: Theo dõi tiến trình học

Hãy tạo cho tôi 1 project plan chi tiết bao gồm:
- Danh sách tính năng MVP
- Tech stack đề xuất
- Cấu trúc thư mục dự án
- Thứ tự phát triển các tính năng
```

### ✅ Kết quả mong đợi
- Nhận được project plan chi tiết
- Có danh sách tính năng rõ ràng
- Hiểu cấu trúc dự án

---

<a id="step-2"></a>
## Step 2: Tạo GitHub Repository

### 🎯 Mục tiêu
Tạo repo để quản lý source code bằng GitHub MCP.

### 📝 Prompt mẫu

```
Sử dụng GitHub MCP Server để tạo 1 repository mới với thông tin:
- Tên repo: english-practice-hub
- Mô tả: "🎓 A modern English practice web application built with Vibe Coding, Stitch MCP & Antigravity"
- Public repository
- Initialize với README.md
```

### ✅ Kết quả mong đợi
- Repo `english-practice-hub` được tạo trên GitHub
- Có file README.md mặc định

### 🔍 Verify
Truy cập `https://github.com/<your-username>/english-practice-hub` để xác nhận.

---

<a id="step-3"></a>
## Step 3: Cài đặt Stitch Skills

### 🎯 Mục tiêu
Cài đặt các Agent Skills cần thiết để tận dụng sức mạnh Stitch.

### 📝 Prompt mẫu

Chạy lần lượt các lệnh sau trong terminal:

```bash
# Skill chính – thiết kế tổng thể
npx skills add google-labs-code/stitch-skills --skill stitch-design --global

# Sinh multi-page website
npx skills add google-labs-code/stitch-skills --skill stitch-loop --global

# Tối ưu prompt
npx skills add google-labs-code/stitch-skills --skill enhance-prompt --global

# Tạo design system document
npx skills add google-labs-code/stitch-skills --skill design-md --global

# Convert design → React components
npx skills add google-labs-code/stitch-skills --skill react:components --global
```

### ✅ Kết quả mong đợi
- 5 skills được cài đặt thành công
- Antigravity có thể nhận diện và sử dụng các skills

---

<a id="step-4"></a>
## Step 4: Tạo Stitch Project & Design System

### 🎯 Mục tiêu
Tạo project trên Stitch và thiết lập design system (màu sắc, font, style).

### 📝 Prompt mẫu – Tạo Project

```
Tạo 1 Stitch project mới với tiêu đề "English Practice Hub"
```

### 📝 Prompt mẫu – Tạo Design System

```
Tạo design system cho project English Practice Hub trên Stitch với các thông số:

- Color Palette: Custom primary color xanh dương (#2563EB), saturation medium
- Typography: Font family "Inter" 
- Shape: Corner roundness medium (8px)
- Appearance: Light mode, background trắng (#FFFFFF)
- Phong cách: Modern, clean, educational, thân thiện

Sau khi tạo xong, hãy apply design system này cho project.
```

### ✅ Kết quả mong đợi
- Stitch project "English Practice Hub" đã được tạo
- Design system với color palette, font, shape đã được thiết lập
- Có thể xem preview design system trên Stitch

---

<a id="step-5"></a>
## Step 5: Enhance Prompt & Tạo UI Screen đầu tiên

### 🎯 Mục tiêu
Sử dụng enhance-prompt để tối ưu, sau đó tạo Landing Page trên Stitch.

### 📝 Prompt mẫu – Enhance Prompt

```
Sử dụng skill enhance-prompt để nâng cấp prompt sau thành prompt tối ưu cho Stitch:

"Tạo landing page cho ứng dụng luyện tập tiếng Anh English Practice Hub. Có hero section, feature cards, và nút bắt đầu học."
```

### 📝 Prompt mẫu – Tạo Landing Page

Sau khi nhận được enhanced prompt, sử dụng nó để tạo screen. Hoặc dùng prompt sau:

```
Tạo 1 screen mới trong project English Practice Hub trên Stitch cho Landing Page với layout sau:

HERO SECTION:
- Tiêu đề lớn: "Master English, Your Way"
- Subtitle: "Learn vocabulary, practice grammar, and review with flashcards — all in one place."
- Primary CTA button: "Start Learning Now" (màu primary, bo góc, shadow nhẹ)
- Secondary CTA: "Explore Features"
- Background gradient nhẹ từ primary-50 đến white

FEATURE SECTION:
- Tiêu đề: "Why English Practice Hub?"
- 3 feature cards ngang hàng:
  Card 1: Icon 📚 "Vocabulary Builder" - "Learn 5000+ essential words with examples"
  Card 2: Icon 🧠 "Grammar Quiz" - "Test your knowledge with interactive quizzes"  
  Card 3: Icon 🗂️ "Flashcard Review" - "Review and memorize with spaced repetition"
- Mỗi card có hover effect, shadow, bo góc

STATS SECTION:
- 3 số liệu: "5000+ Words", "200+ Quizzes", "10K+ Learners"

FOOTER:
- Links: About, Contact, Privacy
- Copyright text

Device type: Desktop
Phong cách: Modern, clean, gradient accents, professional educational platform
```

### ✅ Kết quả mong đợi
- Landing Page screen được tạo trên Stitch
- Design đẹp, nhất quán với design system
- Enhanced prompt cho kết quả tốt hơn prompt gốc

---

<a id="step-6"></a>
## Step 6: Tạo thêm Screens cho các tính năng

### 🎯 Mục tiêu
Tạo các screens còn lại: Vocabulary, Grammar Quiz, Flashcard.

### 📝 Prompt mẫu – Vocabulary Practice Page

```
Tạo screen mới trong project English Practice Hub cho trang Vocabulary Practice:

HEADER:
- Navigation bar: Logo "EPH", menu: Home, Vocabulary (active), Grammar, Flashcards
- User avatar nhỏ góc phải

MAIN CONTENT:
- Progress bar ở trên cùng: "15/100 words learned today"
- Category filter tabs: "All", "Common", "Academic", "Business"

VOCABULARY CARD (trung tâm, chiếm phần lớn):
- Từ vựng lớn: "Accomplish" 
- Phiên âm: /əˈkɑːm.plɪʃ/
- Loại từ: "verb"
- Nghĩa tiếng Việt: "Hoàn thành, đạt được"
- Câu ví dụ: "She accomplished her goal of running a marathon."
- Audio icon (để phát âm)

ACTION BUTTONS:
- "❌ Don't Know" (màu đỏ nhạt)
- "✅ Got It" (màu xanh lá nhạt)
- "➡️ Next" (màu primary)

SIDEBAR nhỏ:
- Today's stats: Words learned, Accuracy, Streak

Device type: Desktop
```

### 📝 Prompt mẫu – Grammar Quiz Page

```
Tạo screen mới trong project English Practice Hub cho trang Grammar Quiz:

HEADER: Giống vocabulary page (navigation bar)

QUIZ HEADER:
- Category badge: "Tenses"
- Timer đếm ngược: "02:30" (hiển thị dạng vòng tròn)
- Score: "Score: 80" 
- Question counter: "Question 5 of 20"

QUESTION AREA:
- Câu hỏi: "Choose the correct form of the verb:"
- Câu cần điền: "She ___ to the store yesterday."
- 4 đáp án dạng card:
  A) "goes"
  B) "went" ← (correct, highlighted khi chọn)
  C) "going"
  D) "gone"
- Mỗi đáp án là card có thể click, hover effect

PROGRESS:
- Progress bar ngang: 5/20 questions completed

BOTTOM:
- "Previous" button (disabled nếu là câu 1)
- "Submit Answer" button (primary)
- "Skip" text link

Device type: Desktop
Phong cách: Gamified, engaging, màu sắc sinh động nhưng vẫn professional
```

### 📝 Prompt mẫu – Flashcard Page

```
Tạo screen mới trong project English Practice Hub cho trang Flashcard Review:

HEADER: Navigation bar nhất quán

FLASHCARD AREA:
- Card lớn ở giữa (có thể flip):
  - Mặt trước: Từ tiếng Anh "Accomplish" (font lớn, center)
  - Hint text nhỏ: "Tap to flip"
  - Mặt sau: Nghĩa "Hoàn thành, đạt được" + ví dụ

CONTROLS:
- Nút flip (🔄) ở dưới card
- Navigation: ← Previous | Card 3 of 20 | Next →
- Rate buttons: "Again" (đỏ), "Hard" (cam), "Good" (xanh lá), "Easy" (xanh dương)

DECK INFO:
- Deck name: "Common Vocabulary"
- Cards remaining: 17
- Cards mastered: 45

SIDEBAR:
- Deck list: Common Vocab, Academic, Business, Idioms
- Each deck shows progress bar

Device type: Desktop
Phong cách: Clean, focus vào card, minimal distractions
```

### 📝 Prompt mẫu – Tạo tất cả cùng lúc (stitch-loop)

```
Sử dụng skill stitch-loop để tạo website hoàn chỉnh cho English Practice Hub trong Stitch project hiện tại gồm các trang:

1. Landing Page - Hero section, feature highlights, stats, CTA
2. Vocabulary Practice - Word display, pronunciation, meaning, action buttons  
3. Grammar Quiz - Multiple choice questions, timer, score tracking
4. Flashcard Review - Flippable cards, deck navigation, spaced repetition controls

Phong cách tổng thể: Modern educational platform, clean, professional, engaging.
Color scheme theo design system đã tạo.
```

### ✅ Kết quả mong đợi
- 3-4 screens bổ sung được tạo
- Tất cả screens nhất quán với design system
- UI chuyên nghiệp, ready cho conversion

---

<a id="step-7"></a>
## Step 7: Tạo DESIGN.md Document

### 🎯 Mục tiêu
Document hoá design system để AI Agent hiểu và maintain consistency.

### 📝 Prompt mẫu

```
Sử dụng skill design-md để phân tích project Stitch "English Practice Hub" và tạo file DESIGN.md.

File này cần mô tả:
- Color palette chi tiết (primary, secondary, accent, neutral, semantic colors)
- Typography scale (headings, body, captions)
- Spacing system
- Component patterns (cards, buttons, inputs, navigation)
- Layout conventions
- Animation guidelines

Lưu file DESIGN.md vào thư mục .stitch/ của project.
```

### ✅ Kết quả mong đợi
- File `.stitch/DESIGN.md` được tạo
- Mô tả chi tiết design system bằng ngôn ngữ tự nhiên
- Sẽ được sử dụng bởi react-components skill sau này

---

<a id="step-8"></a>
## Step 8: Convert Design → React Code

### 🎯 Mục tiêu
Biến tất cả Stitch screens thành React components sẵn sàng sử dụng.

### 📝 Prompt mẫu

```
Sử dụng skill react-components để convert tất cả screens trong Stitch project "English Practice Hub" thành React components.

Yêu cầu:
- Sử dụng TypeScript
- Components phải reusable và composable
- Extract design tokens thành CSS variables hoặc Tailwind config
- Tạo component tree phù hợp với Next.js App Router structure:
  - src/components/Header.tsx
  - src/components/Footer.tsx  
  - src/components/HeroSection.tsx
  - src/components/FeatureCard.tsx
  - src/components/VocabularyCard.tsx
  - src/components/QuizCard.tsx
  - src/components/FlashCard.tsx
  - src/components/ProgressBar.tsx
  - src/components/StatsCounter.tsx

Validate rằng code output đúng chuẩn React/TypeScript.
```

### ✅ Kết quả mong đợi
- Bộ React components hoàn chỉnh
- Code TypeScript đúng chuẩn
- Design tokens được extract

---

<a id="step-9"></a>
## Step 9: Khởi tạo Project Next.js & Tích hợp

### 🎯 Mục tiêu
Tạo project Next.js và đưa components vào chạy.

### 📝 Prompt mẫu – Khởi tạo project

```
Tạo project Next.js mới cho English Practice Hub với các thông số:
- App Router
- TypeScript
- Tailwind CSS
- ESLint
- Cấu trúc src/ directory

Sau đó tích hợp tất cả React components đã convert từ Stitch vào project.
Cấu trúc routing:
- / → Landing Page
- /vocabulary → Vocabulary Practice
- /grammar → Grammar Quiz  
- /flashcards → Flashcard Review

Thêm navigation giữa các trang.
Đảm bảo project chạy được bằng npm run dev.
```

### 📝 Prompt mẫu – Thêm mock data

```
Tạo mock data cho English Practice Hub:

1. File src/data/vocabulary.ts:
   - 20 từ vựng phổ biến, mỗi từ có: word, phonetic, partOfSpeech, meaningVi, example
   
2. File src/data/grammar-questions.ts:
   - 10 câu hỏi grammar, mỗi câu có: question, options (4), correctAnswer, explanation

3. File src/data/flashcards.ts:
   - 15 flashcards, mỗi card có: front (English), back (Vietnamese + example), deck, mastered

Dữ liệu phải realistic và hữu ích cho người học tiếng Anh.
```

### ✅ Kết quả mong đợi
- Project Next.js chạy được trên localhost
- Tất cả pages hiển thị đúng UI từ Stitch
- Navigation hoạt động
- Mock data hiển thị đúng

---

<a id="step-10"></a>
## Step 10: GitHub Workflow – Branch & Pull Request

### 🎯 Mục tiêu
Đưa code lên GitHub theo quy trình chuyên nghiệp.

### 📝 Prompt mẫu – Tạo branch & Push code

```
Thực hiện workflow GitHub cho dự án English Practice Hub:

1. Tạo branch mới tên "feature/initial-setup" từ branch "main" trong repo english-practice-hub bằng GitHub MCP

2. Push toàn bộ code của project (bao gồm tất cả components, pages, data, styles) lên branch "feature/initial-setup"

3. Tạo Pull Request:
   - Title: "feat: Initial project setup with all pages and components"
   - Body mô tả chi tiết:
     - Các trang đã tạo (Landing, Vocabulary, Grammar, Flashcard)
     - Components được sử dụng
     - Design system từ Stitch
     - Mock data structure
   - Base: main
   - Head: feature/initial-setup
```

### 📝 Prompt mẫu – Review PR

```
Sử dụng GitHub MCP để:
1. Đọc diff của Pull Request vừa tạo trong repo english-practice-hub
2. Kiểm tra danh sách files đã thay đổi
3. Cho nhận xét về code quality
```

### 📝 Prompt mẫu – Merge PR

```
Merge Pull Request trong repo english-practice-hub bằng squash merge.
Commit title: "feat: Initial project setup with Stitch-designed UI"
```

### ✅ Kết quả mong đợi
- Branch `feature/initial-setup` được tạo
- Code được push lên GitHub
- PR được tạo, review, và merge
- Branch `main` có toàn bộ code

---

<a id="step-11"></a>
## Step 11: Thêm tính năng Dark Mode

### 🎯 Mục tiêu
Demo quy trình thêm tính năng mới: Design (Stitch) → Code → Git workflow.

### 📝 Prompt mẫu – Cập nhật design trên Stitch

```
Cập nhật design system trên Stitch cho project English Practice Hub:
- Thêm dark mode appearance
- Background tối: #0F172A
- Card background: #1E293B
- Text color: #F8FAFC
- Giữ nguyên primary color

Sau đó tạo dark mode variants cho tất cả screens hiện có.
```

### 📝 Prompt mẫu – Implement code

```
Thêm tính năng Dark Mode cho English Practice Hub:

1. Tạo ThemeContext để quản lý theme state (light/dark)
2. Tạo component ThemeToggle (nút switch với icon sun/moon)
3. Sử dụng CSS variables cho theme colors:
   - Light: backgrounds trắng, text đen
   - Dark: backgrounds tối (#0F172A), text trắng (#F8FAFC)
4. Lưu preference vào localStorage
5. Thêm ThemeToggle vào Header
6. Apply theme cho tất cả components

Đảm bảo transition mượt khi chuyển theme.
```

### 📝 Prompt mẫu – Git workflow

```
Thực hiện Git workflow cho feature Dark Mode:

1. Tạo branch "feature/dark-mode" từ "main" bằng GitHub MCP
2. Push code dark mode lên branch
3. Tạo Pull Request:
   - Title: "feat: Add dark mode support with theme toggle"
   - Mô tả: Thêm dark mode với ThemeContext, ThemeToggle component, CSS variables cho 2 themes
4. Merge PR bằng squash merge
```

### ✅ Kết quả mong đợi
- Dark mode hoạt động với toggle
- Transition mượt mà
- PR đã merge vào main
- Git history rõ ràng, clean

---

<a id="step-12"></a>
## Step 12: Polish & Hoàn thiện

### 🎯 Mục tiêu
Hoàn thiện sản phẩm: responsive, animations, SEO.

### 📝 Prompt mẫu – Responsive Design

```
Cập nhật English Practice Hub để responsive hoàn hảo:

1. Mobile (< 768px):
   - Header: hamburger menu
   - Feature cards: stack dọc
   - Quiz cards: full width
   - Flashcard: full width với swipe gesture

2. Tablet (768px - 1024px):
   - Feature cards: 2 columns
   - Sidebar thu nhỏ hoặc ẩn

3. Desktop (> 1024px):
   - Layout như design gốc
   - Sidebar hiển thị đầy đủ

Sử dụng Tailwind responsive classes.
```

### 📝 Prompt mẫu – Animations

```
Thêm micro-animations cho English Practice Hub:

1. Page transitions: Fade-in khi chuyển trang (200ms ease-out)
2. Cards: Scale nhẹ khi hover (1.02), shadow tăng
3. Flashcard flip: 3D flip animation khi click (600ms)
4. Progress bar: Animate width khi update (300ms ease)
5. Buttons: Subtle bounce effect khi click
6. Stats counter: Count-up animation khi load (1.5s)
7. Stagger animation: Feature cards xuất hiện lần lượt (delay 100ms mỗi card)

Sử dụng CSS animations và Tailwind animation utilities.
```

### 📝 Prompt mẫu – Final Git push

```
Thực hiện Git workflow cuối cùng:

1. Tạo branch "feature/polish-responsive-animations"
2. Push toàn bộ changes
3. Tạo PR: "feat: Add responsive design, animations, and final polish"
4. Merge PR

Sau đó, tạo tag v1.0.0 cho release đầu tiên.
```

### ✅ Kết quả mong đợi
- Website responsive trên mọi thiết bị
- Animations mượt mà, chuyên nghiệp
- Code trên GitHub sạch sẽ, có history rõ ràng
- Tag v1.0.0 đánh dấu bản release

---

## 🎉 Tổng kết

### Những gì đã hoàn thành:

| Step | Công cụ sử dụng | Kết quả |
|------|-----------------|---------|
| 1 | Antigravity | Project plan |
| 2 | GitHub MCP | Repository |
| 3 | Terminal | Stitch Skills installed |
| 4 | Stitch MCP | Project + Design System |
| 5-6 | Stitch MCP + enhance-prompt | 4+ UI Screens |
| 7 | design-md skill | DESIGN.md document |
| 8 | react-components skill | React components |
| 9 | Antigravity | Next.js project running |
| 10-11 | GitHub MCP | Branches, PRs, Merges |
| 12 | Antigravity + GitHub MCP | Polish + Release |

### Workflow tổng thể đã thực hành:

```
Ý tưởng
  ↓
Lập kế hoạch (Antigravity)
  ↓
Tạo Design System (Stitch MCP + design-md)
  ↓
Thiết kế UI Screens (Stitch MCP + enhance-prompt + stitch-loop)
  ↓
Convert → Code (react-components skill)
  ↓
Build & Integrate (Antigravity)
  ↓
Git Workflow (GitHub MCP: branch → PR → review → merge)
  ↓
Iterate (Thêm tính năng, fix bugs)
  ↓
Polish & Deploy
```

### 🔑 Key Takeaways:
1. **Design First**: Luôn bắt đầu từ design system trên Stitch trước khi code
2. **Enhance Prompts**: Dùng enhance-prompt skill để có kết quả Stitch tốt hơn
3. **Automate Git**: Dùng GitHub MCP cho mọi Git operations
4. **Iterate**: Vibe Coding là quy trình lặp, không cần hoàn hảo từ đầu
5. **Review Code**: Luôn review code AI generate, đừng blind trust
