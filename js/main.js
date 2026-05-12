/* ============================================
   SADU LANDING PAGE - MAIN SCRIPT
   ============================================ */

// CONFIGURATION
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby7n1vHD2AGcUPTY67hg5chHKTSkKcMPQD4abO0QdDHMQ3-svokYSQ9Hid7cDXqSw/exec';

document.addEventListener('DOMContentLoaded', () => {
  // Render all sections
  if (typeof components !== 'undefined') {
    components.renderHeader();
    components.renderHero();
    // components.renderStory();
    components.renderProcess();
    components.renderProducts();
    components.renderNutrition();
    components.renderBenefits();
    components.renderGallery();
    components.renderOrderForm();
    components.renderFAQ();
    components.renderFooter();
  }

  // Initialize interactive features
  initializeOrderForm();
  initializeFAQ();
  initializeNewsletter();
  initializeProductSelector();

  // Initialize Process Animation (NEW)
  initializeProcessAnimation();
});

/* ============================================
   PROCESS SECTION ANIMATION
   ============================================ */

function initializeProcessAnimation() {
  const processCards = document.querySelectorAll('.process-card');
  const progressLine = document.getElementById('processProgressLine');

  if (!processCards.length) return;

  // Cấu hình Observer: Kích hoạt khi 90% phần tử xuất hiện
  const observerOptions = {
    threshold: 0.9,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const index = parseInt(card.getAttribute('data-step-index'));

        // Thêm class active để kích hoạt CSS animation
        card.classList.add('active');

        // Cập nhật thanh tiến trình (Progress Line)
        if (progressLine) {
          // Tính toán % chiều rộng dựa trên số step (ví dụ 4 steps thì mỗi step 25%)
          // Hoặc đơn giản là tăng dần theo index
          const totalSteps = processCards.length;
          const widthPercent = ((index + 1) / totalSteps) * 100;

          // Giới hạn max 100% và trừ đi một chút để đẹp hơn (optional)
          const finalWidth = Math.min(widthPercent, 100);
          progressLine.style.width = `${finalWidth}%`;
        }

        // Ngừng quan sát sau khi đã kích hoạt (chỉ chạy 1 lần)
        observer.unobserve(card);
      }
    });
  }, observerOptions);

  processCards.forEach(card => {
    observer.observe(card);
  });
}

/* ============================================
   ORDER FORM HANDLER & GOOGLE SHEETS INTEGRATION
   ============================================ */

function initializeOrderForm() {
  const form = document.getElementById('orderForm');
  if (!form) return;

  const productSelect = document.getElementById('productSelect');
  const quantityInput = document.getElementById('quantityInput');
  const totalPriceEl = document.getElementById('orderTotalPrice');
  const submitBtn = form.querySelector('.form-submit');

  // Function to update total price
  const updateTotalPrice = () => {
    if (!productSelect || !quantityInput || !totalPriceEl) return;

    const selectedOption = productSelect.options[productSelect.selectedIndex];
    const price = parseInt(selectedOption.getAttribute('data-price')) || 0;
    const quantity = parseInt(quantityInput.value) || 1;
    const total = price * quantity;

    // nếu đơn hàng dưới 358.500đ thì +30.000đ phí vận chuyển\
    const finalTotal = total < 358500 ? total + 30000 : total;

    totalPriceEl.textContent = finalTotal.toLocaleString('vi-VN') + 'đ';
  };

  // Listen for changes
  if (productSelect) {
    productSelect.addEventListener('change', updateTotalPrice);
  }
  if (quantityInput) {
    quantityInput.addEventListener('input', updateTotalPrice);
  }

  // Initial calculation
  updateTotalPrice();

  // Handle Form Submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // 1. Validate Location
    const provinceNameEl = document.getElementById('provinceName');
    const districtNameEl = document.getElementById('districtName');
    const wardNameEl = document.getElementById('wardName');

    if (!provinceNameEl || !provinceNameEl.value ||
      !districtNameEl || !districtNameEl.value ||
      !wardNameEl || !wardNameEl.value) {
      alert('Vui lòng chọn đầy đủ Tỉnh/Thành phố, Quận/Huyện và Phường/Xã.');
      return;
    }

    // 2. Prepare Data Payload
    const formData = new FormData(form);

    const orderData = {
      name: formData.get('fullName'),
      phone: formData.get('phone'),
      province: provinceNameEl.value,
      district: districtNameEl.value,
      ward: wardNameEl.value,
      address: formData.get('streetAddress'),
      note: formData.get('notes') || '',
      product: productSelect.options[productSelect.selectedIndex].text,
      quantity: formData.get('quantity')
    };

    // 3. UI Loading State
    const originalBtnText = submitBtn.innerText;
    submitBtn.innerText = 'Đang gửi...';
    submitBtn.disabled = true;

    // 4. Send to Google Sheets
    fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: new URLSearchParams(orderData)
    })
      .then(response => {
        // Success Handling
        const successMessage = document.getElementById('successMessage');
        if (successMessage) {
          successMessage.classList.remove('hidden');
          successMessage.style.display = 'flex';
        }

        alert('Đặt hàng thành công! Chúng tôi sẽ liên hệ với bạn sớm.');

        // Reset Form
        form.reset();
        updateTotalPrice();

        // Reset Location Selectors visually
        resetLocationSelectors();

        // Hide success message after 5 seconds
        setTimeout(() => {
          if (successMessage) {
            successMessage.classList.add('hidden');
            successMessage.style.display = 'none';
          }
        }, 5000);
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Có lỗi xảy ra khi đặt hàng. Vui lòng thử lại hoặc gọi hotline.');
      })
      .finally(() => {
        // Restore Button
        submitBtn.innerText = originalBtnText;
        submitBtn.disabled = false;
      });
  });
}

// Helper function to reset location inputs
function resetLocationSelectors() {
  const pInput = document.getElementById('provinceInput');
  const dInput = document.getElementById('districtInput');
  const wInput = document.getElementById('wardInput');

  if (pInput) pInput.value = '';
  if (dInput) {
    dInput.value = '';
    dInput.disabled = true;
  }
  if (wInput) {
    wInput.value = '';
    wInput.disabled = true;
  }

  // Clear hidden values
  const pName = document.getElementById('provinceName');
  const dName = document.getElementById('districtName');
  const wName = document.getElementById('wardName');

  if (pName) pName.value = '';
  if (dName) dName.value = '';
  if (wName) wName.value = '';
}

/* ============================================
   PRODUCT SELECTOR & SCROLL LOGIC
   ============================================ */

function initializeProductSelector() {
  window.selectProductAndScroll = function (productIndex) {
    const orderSection = document.getElementById('order');
    const productSelect = document.getElementById('productSelect');

    if (!orderSection || !productSelect) return;

    // Lấy danh sách ID sản phẩm từ siteData để đảm bảo đồng nhất
    // Giả sử siteData đã được load global
    const productIds = siteData.products.map(p => p.id);

    // Nếu index hợp lệ thì lấy ID tương ứng, ngược lại lấy ID đầu tiên
    const selectedId = productIds[productIndex] || productIds[0];

    // Gán giá trị cho select theo ID
    productSelect.value = selectedId;

    // Trigger sự kiện change để cập nhật lại giá tiền
    const event = new Event('change');
    productSelect.dispatchEvent(event);

    // Cuộn mượt đến phần đặt hàng
    orderSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
}

/* ============================================
   FAQ ACCORDION
   ============================================ */

function initializeFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      faqItems.forEach(i => i.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// Hàm xử lý Carousel Chứng Nhận
function initCertificateCarousel() {
  const track = document.getElementById('certificateTrack');
  const slides = document.querySelectorAll('.certificate-slide');
  const prevBtn = document.getElementById('certPrevBtn');
  const nextBtn = document.getElementById('certNextBtn');
  const dots = document.querySelectorAll('.dot');

  if (!track || slides.length === 0) return;

  let currentIndex = 0;
  const totalSlides = slides.length;

  function updateCarousel() {
    // Di chuyển track
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Cập nhật active class cho slides (để hiệu ứng nếu cần)
    slides.forEach((slide, index) => {
      if (index === currentIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    // Cập nhật dots
    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }

  // Event Listeners
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);

  // Click vào dots
  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      currentIndex = parseInt(e.target.getAttribute('data-index'));
      updateCarousel();
    });
  });

  // Auto play (tùy chọn, mỗi 5 giây chuyển slide)
  let autoPlay = setInterval(nextSlide, 5000);

  // Dừng auto play khi hover vào carousel
  const wrapper = document.querySelector('.certificate-carousel-wrapper');
  if (wrapper) {
    wrapper.addEventListener('mouseenter', () => clearInterval(autoPlay));
    wrapper.addEventListener('mouseleave', () => {
      autoPlay = setInterval(nextSlide, 5000);
    });
  }
}

/* ============================================
   NEWSLETTER (Placeholder)
   ============================================ */

function initializeNewsletter() {
  const newsletterForm = document.querySelector('.footer-newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Cảm ơn bạn đã đăng ký nhận tin!');
      newsletterForm.reset();
    });
  }
}