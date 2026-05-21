# 📖 Hướng Dẫn Giảng Dạy – Section 7: Vibe Coding Dự Án Thực Tế

> Tài liệu dành cho giảng viên, hướng dẫn chi tiết cách dạy Section 7 với các lưu ý, tips, và kịch bản demo cho dự án **VibeSpace Studio**.

---

## 🎯 Mục tiêu tổng thể

Sau section này, học viên sẽ:
1. **Thành thạo workflow Vibe Coding** từ ý tưởng → thiết kế → code → deploy
2. **Sử dụng thành thạo Stitch Skills** để thiết kế giao diện Studio hợp nhất đa lớp (Glassmorphism)
3. **Tự động hoá quy trình Git** với GitHub MCP
4. **Hiểu cách tích hợp API thực tế** (iTunes, ZenQuotes) và Web Audio API đa kênh trong React

---

## 📝 Hướng dẫn chuẩn bị trước khi dạy

### Checklist môi trường
- [ ] Antigravity IDE đã cài đặt và hoạt động
- [ ] Stitch MCP Server đã kết nối
- [ ] GitHub MCP Server đã kết nối
- [ ] Tất cả Stitch Skills đã cài đặt (chạy trước để verify)
- [ ] Tài khoản GitHub đã đăng nhập
- [ ] Mạng internet ổn định (Stitch & iTunes API cần kết nối mạng)

### Chuẩn bị demo
- Tạo sẵn 1 Stitch project mẫu về VibeSpace để demo nhanh khi cần
- Chuẩn bị sẵn một thư mục trống cho repo GitHub
- Thử nghiệm trước các prompt trong guide ít nhất 1 lần

---

## 📚 Hướng Dẫn Từng Bài

---

### Bài 1: Tổng quan Vibe Coding & Lập kế hoạch dự án

**🕐 Thời lượng:** 30-40 phút

**Cách mở bài:**
> "Các bạn đã học cách điều khiển AI Agent, viết prompt, kết nối MCP. Giờ là lúc kết hợp tất cả để build 1 sản phẩm thực tế – chỉ bằng cách mô tả ý tưởng. Hãy quên các dòng code đi và 'vibe' cùng sản phẩm!"

**Nội dung giảng dạy:**
1. **Vibe Coding là gì?** (10 phút)
   - Định nghĩa: Mô tả ý tưởng bằng ngôn ngữ tự nhiên, AI Agent thực thi.
   - Trích dẫn mindset của Andrej Karpathy.
   - Developer đóng vai trò Product Manager định hướng sản phẩm.

2. **Giới thiệu dự án VibeSpace Studio** (10 phút)
   - Tên: **VibeSpace**
   - Ý nghĩa: Trạm tập trung và âm thanh chữa lành tích hợp đồng hồ Pomodoro, bộ trộn âm thanh thiên nhiên đa kênh, trình phát nhạc Lo-fi và phong cảnh động cá nhân hóa.
   - Show sự hấp dẫn: Gần gũi với lập trình viên, giao diện tối mờ kính mượt mà, thực sự phát được nhạc và tự thay đổi phong cảnh theo thời gian.

3. **Phân tích yêu cầu & MVP** (10 phút)
   - Thiết lập các tính năng MVP: Sảnh chờ (`/`), Focus Studio toàn màn hình (`/space`) chứa Mixer, Pomodoro, Checklist.
   - Lập kế hoạch phát triển (Project Plan) sử dụng Antigravity.

**💡 Tips giảng dạy:**
- Hỏi học viên: "Bình thường khi code bạn có nghe nhạc lo-fi hay tiếng mưa không?" để tạo sự kết nối tự nhiên.
- Nhấn mạnh: "Ứng dụng này có độ phức tạp cao về mặt UI và Audio, nếu tự code sẽ mất 2-3 tuần, nhưng với Vibe Coding, chúng ta sẽ hoàn thành chỉ trong vài giờ!"

---

### Bài 2: Cài đặt Stitch Skills & Chuẩn bị môi trường

**🕐 Thời lượng:** 20-30 phút

**Nội dung giảng dạy:**
1. **Giới thiệu Stitch Skills** (5 phút)
   - Repo: `google-labs-code/stitch-skills`
   - Giải thích vai trò của 5 skills chuyên biệt.

2. **Cài đặt từng skill** (10 phút)
   - Demo chạy các lệnh cài đặt trên terminal:
   ```bash
   npx skills add google-labs-code/stitch-skills --skill stitch-design --global
   npx skills add google-labs-code/stitch-skills --skill stitch-loop --global
   npx skills add google-labs-code/stitch-skills --skill enhance-prompt --global
   npx skills add google-labs-code/stitch-skills --skill design-md --global
   npx skills add google-labs-code/stitch-skills --skill react:components --global
   ```
   - Xác minh việc cài đặt thành công.

3. **Tạo GitHub repo** (5 phút)
   - Tạo repo `vibespace-dashboard` qua GitHub MCP.
   - Prompt mẫu:
   > "Tạo 1 GitHub repository mới tên 'vibespace-dashboard' với description 'A modern ambient focus station and lo-fi mixer built with Vibe Coding and Antigravity', public, có README"

---

### Bài 3: Thiết kế Design System với Stitch

**🕐 Thời lượng:** 40-50 phút

**Nội dung giảng dạy:**
1. **Thiết kế phong cách Cyber-Zen** (10 phút)
   - Giải thích lý do chọn theme tối màu (Dark Mode) cho trạm tập trung để chống mỏi mắt: Nền tối đậm (#0B0F19), kính mờ (glassmorphism), viền phát sáng nhẹ màu xanh mint (#10B981) và tím neon (#8B5CF6).

2. **Tạo Stitch Project** (5 phút)
   - Prompt mẫu:
   > "Tạo 1 Stitch project mới tên 'VibeSpace'"

3. **Tạo Design System** (15 phút)
   - Prompt mẫu:
   > "Tạo design system cho project VibeSpace với phong cách Cyber-Zen tối giản, cực kỳ thư giãn. Color palette: màu nền tối đậm (#0B0F19), màu kính mờ (#1E293B với độ trong suốt nhẹ), màu nhấn xanh mint (#10B981) và tím neon (#8B5CF6). Font: Outfit hoặc Inter. Corner radius: large (12px). Mode: dark."

4. **Tạo DESIGN.md** (10 phút)
   - Generate file thiết kế để AI ghi nhớ:
   > "Sử dụng skill design-md để phân tích project Stitch hiện tại và tạo file DESIGN.md lưu vào thư mục .stitch/"

---

### Bài 4: Tạo UI Screens – Phần 1 (Sảnh chờ Lobby)

**🕐 Thời lượng:** 45-60 phút

**Nội dung giảng dạy:**
1. **Tối ưu Prompt (Enhance Prompt)** (10 phút)
   - Giải thích vai trò của `enhance-prompt` để tạo UI tinh xảo hơn.
   - Prompt kích hoạt:
   > "Sử dụng skill enhance-prompt để tối ưu prompt sau: 'Tạo sảnh chờ Lobby chào đón người dùng vào VibeSpace. Có tiêu đề lớn, thống kê chuỗi ngày tập trung, và nút bắt đầu rực rỡ.'"

2. **Thiết kế sảnh chờ Lobby** (35 phút)
   - Prompt mẫu cho Stitch:
   > "Tạo screen mới trong project VibeSpace cho Lobby Entrance. Layout gồm: Header mờ kính (Logo 'VibeSpace', menu: Home, Studio, Journal, Settings), Hero section với câu chào 'Your Space. Your Focus. Master Your Craft.', một thẻ lớn hiển thị Productivity Streak ('🔥 5 Days Streak - Keep it up!'), một nút CTA 'Enter Focus Space' phát sáng tím neon rực rỡ, và ở góc dưới cùng có một thanh hiển thị câu nói châm ngôn sống mờ ảo."
   - Demo việc điều chỉnh vị trí, chỉnh font chữ trực quan.

---

### Bài 5: Tạo UI Screens – Phần 2 (Immersive Focus Studio)

**🕐 Thời lượng:** 45-60 phút

**Đây là bài dạy đỉnh cao nhất về thiết kế giao diện Studio hợp nhất!**

**Nội dung giảng dạy:**
1. **Thiết kế Immersive Studio (`/space`)** (30 phút)
   - Giải thích ý tưởng: Một hình nền phong cảnh thiên nhiên bao phủ toàn bộ màn hình, trên đó là các tiện ích kính mờ nổi (Floating Cards) lơ lửng.
   - Prompt mẫu:
   > "Tạo screen mới trong project VibeSpace cho Immersive Focus Studio. Hình nền là ảnh một căn phòng ấm cúng nhìn ra cửa sổ trời mưa. Trên nền đó, bố trí các floating glassmorphic cards mờ ảo: 1) Ở giữa: Đồng hồ Pomodoro Timer tròn tối giản; 2) Bên trái: Trình điều khiển Sound Mixer với 5 thanh trượt slider chỉnh âm lượng; 3) Bên phải: Bảng Todo Checklist ghi mục tiêu ngày; 4) Ở góc dưới: Trình phát nhạc Lo-fi nhỏ và nút Settings hình bánh răng."

2. **Thiết kế các trang phụ với `stitch-loop`** (15 phút)
   - Demo sinh các trang phụ đồng bộ:
   > "Sử dụng skill stitch-loop để tạo website hoàn chỉnh cho VibeSpace gồm: trang chủ Lobby, trang Studio chính (/space), trang nhật ký năng suất (/journal), và trang cài đặt (/settings) theo đúng tông thiết kế Cyber-Zen."

---

### Bài 6: Convert Design → Code

**🕐 Thời lượng:** 50-60 phút

**Nội dung giảng dạy:**
1. **Khởi tạo Next.js Project** (10 phút)
   - Tạo cấu trúc dự án Next.js 14 App Router:
   > "Tạo project Next.js mới tên 'vibespace-dashboard' với App Router, TypeScript, và Tailwind CSS."

2. **Convert UI với react-components skill** (25 phút)
   - Kích hoạt skill convert:
   > "Sử dụng skill react-components để convert tất cả Stitch screens trong VibeSpace thành các React components. Đảm bảo cấu trúc component tree gồm: PomodoroTimer.tsx, AmbientMixer.tsx, LofiPlayer.tsx, TodoChecklist.tsx, SceneSelector.tsx."
   - Giải thích cách AI chuyển design tokens mờ kính sang Tailwind classes (ví dụ: `bg-white/10 backdrop-blur-md border border-white/20`).

3. **Tích hợp & Chạy thử** (15 phút)
   - Đưa các component vào Next.js, cấu trúc routing: `/` (Lobby), `/space` (Studio), `/journal` (Journal), `/settings` (Settings).
   - Chạy lệnh `npm run dev` để verify giao diện hiển thị lộng lẫy đúng chuẩn.

---

### Bài 7: GitHub Workflow tự động

**🕐 Thời lượng:** 40-50 phút

**Nội dung giảng dạy:**
1. **Tạo branch tính năng** (10 phút)
   - Tạo branch `feature/immersive-studio` bằng GitHub MCP.

2. **Push code & Tạo PR** (20 phút)
   - Push code toàn bộ trang Studio lên branch mới và tạo Pull Request tự động với mô tả chi tiết:
   > "Sử dụng GitHub MCP để tạo PR từ branch feature/immersive-studio vào main với tiêu đề 'feat: Implement full-bleed immersive workspace studio with floating widgets' và mô tả chi tiết các components đã thêm."

3. **Review & Merge** (15 phút)
   - Đọc PR diff, review chất lượng code và tiến hành squash merge tự động.

---

### Bài 8: Thêm tính năng & Fix bug (Tích hợp Audio & APIs)

**Thời lượng:** 40-50 phút

**Nội dung giảng dạy:**
1. **Tích hợp nhạc Lo-fi động từ iTunes API** (15 phút)
   - Viết logic fetch nhạc không lời bằng API:
   > "Cập nhật LofiPlayer.tsx để gọi iTunes API: fetch nhạc với từ khóa 'lofi chill', lấy ra previewUrl MP3 nghe thử và ảnh bìa album để phát trên trang web khi người dùng bấm Play."

2. **Viết trình trộn âm thanh thiên nhiên đa kênh** (15 phút)
   - Cập nhật `AmbientMixer.tsx` để người dùng có thể phát đồng thời nhiều file tiếng mưa, lửa trại lặp đi lặp lại:
   > "Cài đặt trình phát âm thanh đa kênh lặp (loop) cho AmbientMixer.tsx. Khi trượt volume slider, thay đổi thuộc tính volume của từng đối tượng Audio tương ứng. Lưu tất cả cấu hình âm lượng vào localStorage."

3. **Fix bug và tối ưu** (10 phút)
   - Demo khắc phục các lỗi bất đồng bộ khi gọi API hoặc lỗi trình duyệt chặn autoplay.

---

### Bài 9: Polish UI, Responsive & Animation

**🕐 Thời lượng:** 40-50 phút

**Nội dung giảng dạy:**
1. **Thiết kế nhịp thở thiền định SVG** (15 phút)
   - Tạo widget `BreathingBubble.tsx` chuyển động SVG mượt mà theo nhịp thở 4-4-4:
   > "Tạo widget BreathingBubble.tsx hiển thị một hình tròn SVG mờ ảo phát sáng. Sử dụng CSS keyframes để animate hình tròn này: Phình to trong 4 giây (hít vào) -> Giữ nguyên trong 4 giây -> Co nhỏ trong 4 giây (thở ra)."

2. **Đổi hình nền động bằng URL/Unsplash** (15 phút)
   - Nâng cấp `SceneSelector.tsx` cho phép người dùng thay đổi background:
   > "Cập nhật SceneSelector.tsx để cho phép người dùng dán link ảnh URL bất kỳ làm hình nền toàn màn hình, hoặc nhập từ khóa tìm kiếm ảnh thiên nhiên Unsplash. Lưu hình nền đã chọn vào localStorage để không bị mất khi tải lại trang."

3. **Polish Responsive & Transitions** (10 phút)
   - Tối ưu hóa giao diện di động và hiệu ứng chuyển cảnh mượt mà.

---

### Bài 10: Review & Tổng kết

**🕐 Thời lượng:** 30-40 phút

**Nội dung giảng dạy:**
1. **Trải nghiệm sản phẩm hoàn chỉnh** (15 phút)
   - Bật toàn màn hình VibeSpace Studio, vừa mở một bài nhạc chill, vừa trộn tiếng mưa rơi nhè nhẹ, chạy Pomodoro và hoàn thành Todo.
   - Xem lại lịch sử Git vô cùng sạch sẽ và chuyên nghiệp.

2. **Đúc kết Best Practices & Chia sẻ** (15 phút)
   - Tinh thần "Design First, Code Later".
   - Cách duy trì Context Documents lâu dài để AI không bị "quên".
   - Hướng dẫn áp dụng Vibe Coding để tạo ra các ứng dụng SaaS kiếm tiền trong thế giới thực.

---

## 🎨 Phong cách giảng dạy khuyến nghị

- **Live Demo Trải Nghiệm**: Trực tiếp mở nhạc và âm thanh mưa rơi ngay trên lớp để tạo ra hiệu ứng âm thanh thư thái, thu hút sự chú ý tuyệt đối của học viên.
- **Biến Lỗi Thành Cơ Hội**: Khi AI code gặp lỗi về thẻ Audio hoặc local storage, hãy vui vẻ biến đó thành bài học hướng dẫn học viên cách viết prompt bổ sung để Agent sửa lỗi.
- **Tập Trung Vào Sản Phẩm**: Không dạy sâu về cú pháp code React mà tập trung vào tư duy sắp xếp layout, trải nghiệm người dùng và cách phối hợp với AI Agent.

---

## 📦 Tài liệu đi kèm

| File | Mô tả |
|------|-------|
| `curriculum.md` | Chương trình học chi tiết |
| `step-by-step-guide.md` | Tài liệu thực hành A-Z với prompt mẫu |
| `teaching-guide.md` | File này – Hướng dẫn cho giảng viên |
