Responsive Test Plan — SADU Landing Page

Mục tiêu:
- Kiểm tra và đảm bảo giao diện mobile hiển thị đúng trên các kích thước màn hình phổ biến.
- Ghi lại các bước thử, kết quả mong đợi và cách tái tạo lỗi để dễ sửa.

Hướng dẫn chung để chạy test:
- Mở `index.html` bằng Chrome (hoặc chạy server tĩnh: `npx http-server` trong thư mục dự án).
- Mở DevTools (F12) → bật Device Toolbar (Ctrl+Shift+M).
- Chọn kích thước / thiết bị theo từng test case bên dưới.
- Với mỗi case: tải lại trang (Ctrl+R), cuộn từ đầu trang xuống và lên, mở menu mobile (nếu có), mở order form (nhấn nút "Đặt hàng") và kiểm tra các mục xác định.

Format mỗi test case:
- id: Mã test
- device / width x height
- steps: các thao tác cần làm
- expected: hành vi mong đợi
- notes: trường để ghi lỗi nếu có

Test Cases (Mobile)

1) id: TC-M-320
- device: iPhone SE / 320x568
- steps:
  1. Mở trang, quan sát header và hero.
  2. Cuộn từ đầu xuống đoạn `herbal-story` rồi xuống `order-section`, quan sát việc căn chỉnh và overflow.
  3. Nhấn nút menu (☰) để mở/đóng menu.
  4. Mở form đặt hàng (nhấn CTA) và kiểm tra input không bị che khuất.
- expected:
  - Không có thanh ngang (no horizontal scroll).
  - Ảnh `herb-card` hiển thị vuông ~60px, không chiếm quá nhiều chiều ngang.
  - Header không nhảy/che nội dung khi cuộn lên/xuống.
  - Buttons full-width và dễ nhấn.
- notes: 

2) id: TC-M-360
- device: Galaxy S8 / 360x740 (small Android)
- steps: giống TC-M-320
- expected: như TC-M-320

3) id: TC-M-375
- device: iPhone X / 375x812
- steps: giống trên, thêm test landscape (xoay ngang)
- expected:
  - Khi xoay ngang, layout vẫn không break; hero image co vừa; menu vẫn truy cập được.

4) id: TC-M-393
- device: iPhone 14 Pro / 393x852
- steps: giống trên
- expected: herb images vuông, header alignment OK, no overflow

5) id: TC-M-412
- device: Pixel 2 XL / 412x915
- steps: giống trên
- expected: giống trên

6) id: TC-M-428
- device: iPhone 12 Pro Max narrow width (428x926)
- steps: giống trên
- expected: giống trên

7) id: TC-M-480
- device: small tablets / 480x800
- steps: giống trên
- expected: Ảnh hero và các thẻ product co hợp lý; herb-card không chiếm quá nhiều diện tích

8) id: TC-Order-Accessibility
- device: any mobile
- steps:
  1. Mở order form bằng CTA.
  2. Form scrollIntoView và `name` input nhận focus (nhưng không bị che bởi header).
- expected: form được cuộn vào đúng vị trí, input có thể nhập ngay.

9) id: TC-Header-Menu
- device: small mobile
- steps:
  1. Mở menu mobile ☰, quan sát header height và body padding.
  2. Cuộn khi menu mở/đóng
- expected: body padding sync với header height (không nhảy layout), menu không che mất nội dung quan trọng.

Bug Reporting Template (nếu phát hiện lỗi):
- test id:
- device / UA:
- steps:
- actual:
- expected:
- screenshot: (path)
- severity: minor/major/blocker

Automation ideas (nếu muốn mở rộng):
- Tạo script Puppeteer / Playwright để chụp screenshot tại các viewport ở trên và diff ảnh.
- Thực hiện Lighthouse audits cho mobile performance / accessibility.

---
Kết luận: chạy các test trên, thu lại bug reports vào file `responsive-bugs.md` hoặc issue tracker. Nếu bạn đồng ý, tôi có thể tạo ngay file `responsive-bugs.md` và thêm một script thử (Playwright) để chụp ảnh các breakpoint cơ bản.