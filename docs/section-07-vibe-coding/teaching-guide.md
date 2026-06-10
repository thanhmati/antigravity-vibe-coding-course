# 📖 Hướng Dẫn Giảng Dạy – Section 7: Vibe Coding Dự Án Thực Tế

> Tài liệu dành cho giảng viên, hướng dẫn chi tiết cách dạy Section 7 với các lưu ý, tips, và kịch bản demo cho dự án **VibeSpace Studio**.

---

## 🎯 Mục tiêu tổng thể

Sau section này, học viên sẽ:
1. **Thành thạo workflow Vibe Coding** từ ý tưởng → thiết kế → code → deploy
2. **Sử dụng thành thạo Stitch Skills** để thiết kế giao diện Studio hợp nhất đa lớp (Glassmorphism)
3. **Tự động hoá quy trình Git** với GitHub MCP
4. **Hiểu cách tích hợp API thực tế** (iTunes, ZenQuotes) và Web Audio API đa kênh trong React
5. **Thành thạo tích hợp cơ sở dữ liệu Supabase** để đồng bộ cấu hình, todos, và focus history theo thời gian thực

---

## 📝 Hướng dẫn chuẩn bị trước khi dạy

### Checklist môi trường
- [ ] Antigravity IDE đã cài đặt và hoạt động
- [ ] Stitch MCP Server đã kết nối
- [ ] GitHub MCP Server đã kết nối
- [ ] Tất cả Stitch Skills đã cài đặt (chạy trước để verify)
- [ ] Tài khoản GitHub đã đăng nhập
- [ ] Mạng internet ổn định (Stitch, Supabase & iTunes API cần kết nối mạng)

---

### Bài 1: Tổng quan Vibe Coding & Giới thiệu VibeSpace Studio

**🕐 Thời lượng:** 25-30 phút

**Cách mở bài:**
> "Chào mừng các bạn đến với phần thực hành dự án thực tế. Hôm nay, chúng ta không chỉ học code, chúng ta học cách xây dựng một ứng dụng hoàn chỉnh bằng phương pháp Vibe Coding. Chúng ta sẽ làm quen với VibeSpace Studio – một trạm tập trung chữa lành tuyệt đẹp cho các nhà phát triển. Bài học hôm nay sẽ giúp các bạn chuyển đổi mindset từ lập trình truyền thống sang tư duy Vibe Coding: biến bạn thành một Product Manager thực thụ điều hành AI Agent."

**Nội dung giảng dạy:**
1. **Triết lý Vibe Coding & Mindset mới** (10 phút)
   - Vibe Coding & Triết lý "Mô tả ý tưởng, AI xây dựng".
   - So sánh chi tiết Vibe Coding vs Traditional Coding để thấy rõ sự khác biệt trong vai trò của lập trình viên (Developer trở thành Product Manager & Solutions Architect).
2. **Giới thiệu siêu dự án VibeSpace Studio** (15 phút)
   - Trình bày ý tưởng: Một Focus Station kết hợp âm thanh ambient đa kênh, Pomodoro, danh sách Todo và phong cảnh thiên nhiên động.
   - Sơ đồ các cấu phần chính và giá trị thực tế của sản phẩm đối với người dùng (persona).
   - Thiết lập các nguyên tắc vàng khi Vibe Coding để tránh bẫy token.

**💡 Tips giảng dạy:**
- Sử dụng hình ảnh demo giao diện (nếu có) hoặc mô tả cực kỳ sinh động về âm thanh và visual mờ kính của VibeSpace để kích thích trí tò mò của học viên ngay từ phút đầu tiên.

---

### Bài 2: Specs-Driven Vibe Coding – Viết PRD & Lập kế hoạch dự án

**🕐 Thời lượng:** 30-40 phút

**Cách mở bài:**
> "Các bạn đã biết cách ra lệnh cho AI Agent viết những hàm nhỏ. Nhưng để xây dựng một ứng dụng SaaS phức tạp như VibeSpace Studio, chúng ta không thể ném những prompt mơ hồ cho AI được. Chúng ta phải thực hiện quy trình Specs-Driven Development: viết PRD (Product Requirement Document) và Tech Specs (Đặc tả kỹ thuật) siêu chi tiết trước khi code. Đây chính là 'bản thiết kế' giúp AI sinh code chuẩn 100% không lệch schema."

**Nội dung giảng dạy:**
1. **Sức mạnh của Specs-Driven Development** (10 phút)
   - Lý giải tại sao AI Agent cần đặc tả rõ ràng để chống hiện tượng ảo giác (hallucination) và tránh lãng phí hàng nghìn tokens vô ích.
2. **Thực hành viết PRD chuyên nghiệp** (10 phút)
   - Hướng dẫn học viên cấu trúc một tài liệu PRD: Mục tiêu, Target Persona, Phân rã MVP (P0) vs Nice-to-have (P1, P2), sơ đồ luồng đi của người dùng (User Flow) bằng Mermaid.
3. **Thực hành viết Tech Specs chi tiết** (10 phút)
   - Định nghĩa cấu trúc định tuyến với React Router trong ReactJS (Vite).
   - Thiết lập State Schema TypeScript hoàn chỉnh để đồng bộ Supabase Database mà không bị lỗi kiểu dữ liệu.
   - Đặc tả Audio Engine: Cơ chế Singleton / React Ref để tránh hiện tượng re-render làm tràn tiếng, lặp âm thanh.
4. **Prompt Engineering và Lập kế hoạch PLAN.md** (10 phút)
   - Demo mẫu Prompt Engineering thần thánh giúp sinh Specs tự động từ ý tưởng thô.
   - Hướng dẫn phân rã MVP thành các Milestone nhỏ trong file `PLAN.md` ở root dự án để kiểm soát tiến độ làm việc của AI.

**💡 Tips giảng dạy:**
- Nhấn mạnh: "Dành 15 phút viết tài liệu đặc tả chặt chẽ sẽ giúp bạn tiết kiệm 5 tiếng đồng hồ debug và hàng triệu token lãng phí về sau!"

---

### Bài 3: Setup Môi trường & Thiết lập Context Engineering cho VibeSpace

**🕐 Thời lượng:** 25-35 phút

**Cách mở bài:**
> "Hôm nay chúng ta sẽ chuẩn bị 'bộ nhớ dài hạn' cho AI Agent. Bằng cách thiết lập bộ ba Context Documents (AGENTS.md, ARCHITECTURE.md, PLAN.md) ngay trong thư mục code, AI Agent sẽ hiểu toàn bộ dự án chỉ trong 1 giây mà không mất hàng chục ngàn tokens để quét dự án lặp đi lặp lại."

**Nội dung giảng dạy:**
1. **Cài đặt Stitch Skills & Tạo Repository** (10 phút)
   - Hướng dẫn học viên cài đặt 5 skills toàn cục của Stitch qua CLI:
     ```bash
     npx skills add google-labs-code/stitch-skills --skill stitch-design --global
     npx skills add google-labs-code/stitch-skills --skill stitch-loop --global
     npx skills add google-labs-code/stitch-skills --skill enhance-prompt --global
     npx skills add google-labs-code/stitch-skills --skill design-md --global
     npx skills add google-labs-code/stitch-skills --skill react:components --global
     ```
   - Sử dụng GitHub MCP Server để khởi tạo kho lưu trữ `vibespace-dashboard` trực tiếp từ giao diện chat Antigravity.

2. **Thiết lập Context Documents (Context Engineering)** (15 phút)
   - Giảng viên demo tạo và giải thích vai trò của 3 file ở thư mục root:
     - `AGENTS.md`: Định nghĩa Tech stack chi tiết (ReactJS Vite, TypeScript, Supabase, Tailwind CSS), quy chuẩn đặt tên file, quy tắc quản lý singleton Audio qua React Refs, và cấm sử dụng kiểu `any`.
     - `ARCHITECTURE.md`: Sơ đồ component dạng cây (Tree) và luồng đồng bộ Supabase giúp Agent hiểu bản đồ dự án mà không cần scan code.
     - `PLAN.md`: Liệt kê các đầu mục Todo MVP để theo dõi tiến độ phát triển.

**💡 Tips giảng dạy:**
- Hãy trực tiếp mở file `AGENTS.md` và `PLAN.md` lên màn hình máy giảng viên để học viên thấy rõ cách Agent đọc và phản hồi thông minh khi có context documents.

---

### Bài 4: Thiết kế Design System với Stitch

**🕐 Thời lượng:** 40-50 phút

**Nội dung giảng dạy:**
1. **Thiết kế phong cách Cyber-Zen** (10 phút)
   - Giải thích lý do chọn theme tối màu (Dark Mode) cho trạm tập trung để chống mỏi mắt: Nền tối đậm (#0B0F19), kính mờ (glassmorphism), viền phát sáng nhẹ màu xanh mint (#10B981) và tím neon (#8B5CF6).
2. **Tạo Stitch Project** (5 phút)
   - Prompt mẫu: "Tạo 1 Stitch project mới tên 'VibeSpace'"
3. **Tạo Design System** (15 phút)
   - Prompt mẫu:
     > "Tạo design system cho project VibeSpace với phong cách Cyber-Zen tối giản, cực kỳ thư giãn. Color palette: màu nền tối đậm (#0B0F19), màu kính mờ (#1E293B với độ trong suốt nhẹ), màu nhấn xanh mint (#10B981) và tím neon (#8B5CF6). Font: Outfit hoặc Inter. Corner radius: large (12px). Mode: dark."
4. **Tạo DESIGN.md** (10 phút)
   - Generate file thiết kế để AI ghi nhớ bằng skill `design-md`.

---

### Bài 5: Tạo UI Screens – Phần 1 (Sảnh chờ Lobby)

**🕐 Thời lượng:** 45-60 phút

**Nội dung giảng dạy:**
1. **Tối ưu Prompt (Enhance Prompt)** (10 phút)
   - Giải thích vai trò của `enhance-prompt` để tạo UI tinh xảo hơn.
2. **Thiết kế sảnh chờ Lobby** (35 phút)
   - Prompt mẫu cho Stitch:
     > "Tạo screen mới trong project VibeSpace cho Lobby Entrance. Layout gồm: Header mờ kính (Logo 'VibeSpace', menu: Home, Studio, Journal, Settings), Hero section với câu chào 'Your Space. Your Focus. Master Your Craft.', một thẻ lớn hiển thị Productivity Streak ('🔥 5 Days Streak - Keep it up!'), một nút CTA 'Enter Focus Space' phát sáng tím neon rực rỡ, và ở góc dưới cùng có một thanh hiển thị câu nói châm ngôn sống mờ ảo."

---

### Bài 6: Tạo UI Screens – Phần 2 (Immersive Focus Studio)

**🕐 Thời lượng:** 45-60 phút

**Nội dung giảng dạy:**
1. **Thiết kế Immersive Studio (`/space`)** (30 phút)
   - Giải thích ý tưởng: Một hình nền phong cảnh thiên nhiên bao phủ toàn bộ màn hình, trên đó là các tiện ích kính mờ nổi (Floating Cards) lơ lửng.
   - Prompt mẫu:
     > "Tạo screen mới trong project VibeSpace cho Immersive Focus Studio. Bố trí các floating glassmorphic cards mờ ảo: 1) Ở giữa: Đồng hồ Pomodoro Timer tròn tối giản; 2) Bên trái: Trình điều khiển Sound Mixer với 4 thanh trượt slider chỉnh âm lượng; 3) Bên phải: Bảng Todo Checklist ghi mục tiêu ngày; 4) Ở góc dưới: Trình phát nhạc Lo-fi nhỏ và nút Settings hình bánh răng."
2. **Thiết kế các trang phụ với `stitch-loop`** (15 phút)
   - Demo sinh các trang phụ đồng bộ: trang chủ Lobby, trang Studio chính (`/space`), trang nhật ký năng suất (`/journal`), và trang cài đặt (`/settings`).

---

### Bài 7: Convert Design → Code

**🕐 Thời lượng:** 50-60 phút

**Nội dung giảng dạy:**
1. **Khởi tạo ReactJS (Vite) Project** (10 phút)
   - Tạo cấu trúc dự án ReactJS + Vite + TypeScript:
     ```bash
     npx -y create-vite@latest ./ --template react-ts
     npm install react-router-dom
     ```
2. **Convert UI với react-components skill** (25 phút)
   - Kích hoạt skill convert screens sang React components: `PomodoroTimer.tsx`, `AmbientMixer.tsx`, `LofiPlayer.tsx`, `TodoChecklist.tsx`, `SceneSelector.tsx`.
3. **Tích hợp & Chạy thử** (15 phút)
   - Thiết lập hệ thống định tuyến (Routing) bằng React Router.
   - Ẩn hoàn toàn Header tại trang focus `/space` để loại bỏ xao nhãng.

---

### Bài 8: GitHub Workflow tự động

**🕐 Thời lượng:** 40-50 phút

**Nội dung giảng dạy:**
1. **Tạo branch tính năng** (10 phút)
   - Tạo branch `feature/vibespace-core` bằng GitHub MCP.
2. **Push code & Tạo PR** (20 phút)
   - Push code toàn bộ trang và components lên branch mới và tạo Pull Request tự động:
     > "Sử dụng GitHub MCP để tạo PR từ branch feature/vibespace-core vào main với tiêu đề 'feat: Initialize VibeSpace Studio core dashboard, routing, and glassmorphic UI layout'..."
3. **Review & Merge** (15 phút)
   - Đọc PR diff, review chất lượng code và tiến hành squash merge tự động.

---

### Bài 9: Thêm tính năng & Fix bug (Tích hợp Audio & APIs)

**🕐 Thời lượng:** 40-50 phút

**Nội dung giảng dạy:**
1. **Tích hợp nhạc Lo-fi động từ iTunes API** (15 phút)
   - Viết logic fetch nhạc không lời bằng API và quản lý luồng âm thanh thông qua `useRef` dạng singleton.
2. **Viết trình trộn âm thanh thiên nhiên đa kênh & đồng bộ Supabase** (15 phút)
   - Cập nhật `AmbientMixer.tsx` để phát song song nhiều file tiếng mưa, tiếng lửa trại.
   - Đồng bộ các giá trị âm lượng (rain_volume, campfire_volume, waves_volume, wind_volume) lên bảng `user_preferences` của Supabase.
   - Đọc dữ liệu từ Supabase khi khởi chạy ứng dụng để phục hồi tỷ lệ hòa âm yêu thích của người dùng.
3. **Fix bug và tối ưu** (10 phút)
   - Khắc phục lỗi bất đồng bộ và lỗi trình duyệt chặn autoplay.

---

### Bài 10: Polish UI, Responsive & Animation

**🕐 Thời lượng:** 40-50 phút

**Nội dung giảng dạy:**
1. **Thiết kế nhịp thở thiền định SVG** (15 phút)
   - Tạo widget `BreathingBubble.tsx` hiển thị bong bóng thiền thở SVG co giãn theo nhịp thở 4-4-4.
2. **Đổi hình nền động bằng URL/Unsplash & đồng bộ Supabase** (15 phút)
   - Nâng cấp `SceneSelector.tsx` cho phép người dùng thay đổi background bằng ảnh URL hoặc từ khóa Unsplash.
   - Đồng bộ background đã chọn lên cột `current_scene` trong bảng `user_preferences` của Supabase.
3. **Polish Responsive & Transitions** (10 phút)
   - Tối ưu hóa layout di động (sử dụng thanh tab điều hướng di động thay cho 4 widget nổi).
   - Thiết lập SEO cơ bản trong file `index.html`.

---

### Bài 11: Review & Tổng kết

**🕐 Thời lượng:** 30-40 phút

**Nội dung giảng dạy:**
1. **Trải nghiệm sản phẩm hoàn chỉnh** (15 phút)
   - Bật toàn màn hình VibeSpace Studio, phát nhạc lo-fi và âm thanh ambient, chạy đếm ngược Pomodoro (ghi nhận kết quả vào bảng `focus_sessions` trên Supabase) và thực thi Todo.
2. **Đúc kết Best Practices & Chia sẻ** (15 phút)
   - Tinh thần "Design First, Code Later".
   - Cách duy trì Context Documents lâu dài để AI không bị "quên".
   - Hướng dẫn áp dụng Vibe Coding để tạo ra các ứng dụng SaaS kiếm tiền trong thế giới thực.

---

## 🎨 Phong cách giảng dạy khuyến nghị

- **Live Demo Trải Nghiệm**: Trực tiếp mở nhạc và âm thanh mưa rơi ngay trên lớp để tạo ra hiệu ứng âm thanh thư thái, thu hút sự chú ý tuyệt đối của học viên.
- **Biến Lỗi Thành Cơ Hội**: Khi AI code gặp lỗi về thẻ Audio hoặc đồng bộ Supabase, hãy vui vẻ biến đó thành bài học hướng dẫn học viên cách viết prompt bổ sung để Agent sửa lỗi.
- **Tập Trung Vào Sản Phẩm**: Không dạy sâu về cú pháp code React mà tập trung vào tư duy sắp xếp layout, trải nghiệm người dùng và cách phối hợp với AI Agent.

---

## 📦 Tài liệu đi kèm

| File | Mô tả |
|------|-------|
| `curriculum.md` | Chương trình học chi tiết |
| `step-by-step-guide.md` | Tài liệu thực hành A-Z với prompt mẫu |
| `teaching-guide.md` | File này – Hướng dẫn cho giảng viên |
