/* ============================================
   SADU LANDING PAGE - COMPONENTS
   ============================================ */

const components = {
  // Render Header
  renderHeader: () => {
    const header = document.getElementById('header');
    const { navigation } = siteData;

    header.innerHTML = `
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <span style="color:green">SADU</span>
          </div>
          <nav>
            <ul>
              ${navigation.map(item => `<li><a href="${item.href}">${item.label}</a></li>`).join('')}
            </ul>
          </nav>
          <button class="btn btn-pulse" style="background: var(--gradient-primary); color: white; box-shadow: var(--shadow-primary);" onclick="selectProductAndScroll(0)">Đặt Mua Ngay</button>
        </div>
      </div>
    `;
  },

  // Render Hero Section
  renderHero: () => {
    const hero = document.getElementById('hero');
    const { title, subtitle, description, stats, buttons } = siteData.hero;

    hero.className = 'hero';
    hero.innerHTML = `
      <div class="container">
        <div class="hero-content">
          <h1>${title}</h1>
          <p class="subtitle">${subtitle}</p>
          <p class="description">${description}</p>
          
          <div class="hero-stats">
            ${stats.map(stat => `
              <div class="hero-stat">
                <div class="hero-stat-value">${stat.value}</div>
                <div class="hero-stat-label">${stat.label}</div>
              </div>
            `).join('')}
          </div>
          
          <div class="hero-buttons">
            ${buttons.map(btn => `
              <a href="${btn.href}" class="btn btn-pulse ${btn.class} btn-lg">${btn.text}</a>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  },


  // Render Process Section (Farm to Table)
  renderProcess: () => {
    const processSection = document.createElement('section');
    processSection.id = 'process';
    processSection.className = 'process-section';

    const { title, subtitle, steps } = siteData.process;

    processSection.innerHTML = `
      <div class="container">
        <div class="section-header">
          <h2>${title}</h2>
          <p>${subtitle}</p>
        </div>
        
        <div class="process-grid">
          <!-- Progress Line Element -->
          <div class="process-progress-line" id="processProgressLine"></div>
          
          ${steps.map((step, index) => `
            <div class="process-card fade-in-scroll" data-step-index="${index}">
              <div class="process-number">${index + 1}</div>
              <div class="process-icon">${step.icon}</div>
              <h3>${step.title}</h3>
              <p>${step.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Chèn section này vào sau section #story
    const storySection = document.getElementById('story');
    if (storySection) {
      storySection.parentNode.insertBefore(processSection, storySection.nextSibling);
    }
  },

  // Render Story Section
  renderStory: () => {
    const story = document.getElementById('story');
    const { title, subtitle, image, content, highlights } = siteData.story;

    story.className = 'story';
    story.innerHTML = `
      <div class="container">
        <div class="section-header">
          <h2>${title}</h2>
          <p>${subtitle}</p>
        </div>
        
        <div class="story-content">
          <div class="story-image">
            <img src="${image}" alt="${title}">
          </div>
          
          <div class="story-text">
            <h3>Tinh Túy Từ Thiên Nhiên</h3>
            <p>${content}</p>
            
            <div class="story-highlights">
              ${highlights.map(h => `
                <div class="highlight">
                  <div class="highlight-icon">${h.icon}</div>
                  <span>${h.text}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // Render Products Section
  renderProducts: () => {
    const products = document.getElementById('products');
    const { products: productList, combo } = siteData;

    products.innerHTML = `
      <div class="container">
        <div class="section-header">
          <h2>Lựa Chọn Phù Hợp Cho Mỗi Gia Đình</h2>
          <p>Chọn gói sản phẩm phù hợp với nhu cầu của gia đình bạn</p>
        </div>
        
        <div class="products-grid">
          ${productList.map((product, index) => `
            <div class="product-card ${product.featured ? 'featured' : ''}">
              ${product.featured ? '<div class="product-badge">Bán Chạy</div>' : ''}
              <img src="${product.image}" alt="${product.fullName}" class="product-image">
              <div class="product-info">
                <h3 class="product-name">${product.fullName}</h3>
                <div class="product-quantity">${product.quantity}</div>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${product.priceDisplay}</div>
                
                <div class="product-features">
                  ${product.features.map(f => `
                    <div class="product-feature">
                      <span class="product-feature-icon">✓</span>
                      <span>${f}</span>
                    </div>
                  `).join('')}
                </div>
                
                <!-- Nút Đặt Hàng vẫn truyền index để giữ logic cũ -->
                <button class="btn btn-primary btn-pulse" style="width: 100%;" onclick="selectProductAndScroll(${index})">Đặt Hàng Ngay</button>
              </div>
            </div>
          `).join('')}
        </div>
        
        <!-- Combo Offer giữ nguyên hoặc cập nhật tương tự nếu cần -->
        <div class="combo-offer">
          <h3>${combo.title}</h3>
          <p style="color: white">${combo.description}</p>
          <div class="combo-price">${combo.price}</div>
          <button class="btn btn-secondary btn-pulse" style="background-color: white; color: var(--primary); border: 2px solid white;" onclick="selectProductAndScroll(1)">Mua Combo Ngay</button>
        </div>
      </div>
    `;
  },


  // Render Nutrition Section
  renderNutrition: () => {
    const nutrition = document.getElementById('nutrition');
    const { nutrition: nutritionData } = siteData;

    nutrition.innerHTML = `
      <div class="container">
        <div class="section-header">
          <h2>So Sánh Dinh Dưỡng</h2>
          <p>Xem sự khác biệt rõ ràng giữa trứng Sadu và trứng thường</p>
        </div>
        
        <table class="nutrition-table">
          <thead>
            <tr>
              <th>Thành Phần</th>
              <th>Trứng Sadu</th>
              <th>Trứng Thường</th>
            </tr>
          </thead>
          <tbody>
            ${nutritionData.map(item => `
              <tr>
                <td><strong>${item.nutrient}</strong></td>
                <td>
                  ${item.saduGood ? '<span class="check-icon">✓</span>' : '<span class="x-icon">-</span>'}
                  ${item.sadu}
                </td>
                <td>
                  ${!item.saduGood ? '<span class="check-icon">✓</span>' : '<span class="x-icon">-</span>'}
                  ${item.regular}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        
        <div class="combo-offer">
          <h3>Sẵn Sàng Nâng Cấp Chế Độ Ăn Của Gia Đình?</h3>
          <p style="color: white;">Hãy thử trứng Sadu ngay hôm nay và cảm nhận sự khác biệt.</p>
          <!-- Thêm onclick cho nút này -->
          <button class="btn btn-pulse btn-secondary" style="background-color: white; color: var(--primary);" onclick="selectProductAndScroll(0)">Đặt Mua Ngay</button>
        </div>
      </div>
    `;
  },


  // Render Benefits Section
  renderBenefits: () => {
    const benefits = document.getElementById('benefits');
    const { benefits: benefitsList, feedbackImages } = siteData;



    benefits.className = 'benefits';
    benefits.style.backgroundColor = 'var(--off-white)'; // Đổi màu nền nhẹ cho nổi bật

    benefits.innerHTML = `
      <div class="container">
        <div class="section-header">
          <h2>Dinh Dưỡng Vàng </h2>
          <p>Mỗi quả trứng Sadu chứa đầy đủ dinh dưỡng cần thiết cho sức khỏe gia đình bạn</p>
        </div>
        
        <div class="benefits-grid">
          ${benefitsList.map(benefit => `
            <div class="benefit-card">
              <div class="benefit-icon">${benefit.icon}</div>
              <h3>${benefit.title}</h3>
              <p>${benefit.description}</p>
            </div>
          `).join('')}
        </div>
        
        <!-- Phần Feedback Ảnh Mới -->
        <div style="margin-top: var(--spacing-2xl);">
          <div class="section-header">
            <h2>Những Câu Chuyện Thực Từ Gia Đình Việt</h2>
            <p>Hình ảnh thực tế từ khách hàng đã tin dùng sản phẩm Sadu</p>
          </div>
          
          <div class="feedback-masonry-grid">
            ${feedbackImages.map(img => `
              <div class="feedback-item">
                <img src="${img.src}" alt="${img.alt}" loading="lazy">
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  },

  // Render Gallery Section
  renderGallery: () => {
    const gallery = document.getElementById('gallery');
    const { gallery: galleryItems } = siteData;

    gallery.innerHTML = `
      <div class="container">
        <div class="section-header">
          <h2>Khám Phá Trang Trại Sadu</h2>
          <p>Hãy cùng chúng tôi khám phá không gian sống tự do của những con gà Sadu</p>
        </div>
        
        <div class="gallery-grid">
          ${galleryItems.map(item => `
            <div class="gallery-item">
              <img src="${item.image}" alt="${item.title}">
              <div class="gallery-overlay">
                <h3 class="gallery-title">${item.title}</h3>
                <p class="gallery-description">${item.description}</p>
              </div>
            </div>
          `).join('')}
        </div>
        
        <div style="text-align: center; margin-top: var(--spacing-2xl);">
          <p style="margin-bottom: var(--spacing-md);">Muốn tìm hiểu thêm về quy trình chăn nuôi của chúng tôi?</p>
          <button class="btn btn-primary btn-lg">Xem Quy Trình Chi Tiết</button>
        </div>
      </div>
    `;
  },

  // Render Order Form Section
  renderOrderForm: () => {
    const order = document.getElementById('order');
    const { products } = siteData; // Lấy danh sách sản phẩm từ data

    order.className = 'order-section';
    order.innerHTML = `
      <div class="container">
        <div class="section-header">
          <h2>Đặt Hàng Ngay</h2>
          <p>Điền thông tin dưới đây để đặt hàng. Chúng tôi sẽ liên hệ xác nhận trong 24 giờ.</p>
        </div>
        
        <div class="order-container">
          <!-- Form -->
          <div>
            <form id="orderForm" class="order-form">
              <div class="form-group">
                <label>Họ và Tên *</label>
                <input type="text" name="fullName" placeholder="Nguyễn Văn A" required>
              </div>
              
              <div class="form-group">
                <label>Số Điện Thoại *</label>
                <input type="tel" name="phone" placeholder="0912345678" required>
              </div>
              
             <!-- Location Selectors (Giữ nguyên) -->
             <!-- ... Code location giữ nguyên ... -->
             <div class="form-group">
                <label>Tỉnh / Thành Phố *</label>
                <div class="custom-select-wrapper">
                  <input type="text" class="custom-select-input" id="provinceInput" placeholder="Chọn Tỉnh/Thành..." autocomplete="off">
                  <ul class="custom-select-options" id="provinceList"></ul>
                  <input type="hidden" name="provinceId" id="provinceId">
                  <input type="hidden" name="provinceName" id="provinceName">
                </div>
              </div>
              <!-- ... Các input địa chỉ khác giữ nguyên ... -->
               <div class="form-group">
                <label>Quận / Huyện *</label>
                <div class="custom-select-wrapper">
                  <input type="text" class="custom-select-input" id="districtInput" placeholder="Chọn Quận/Huyện..." autocomplete="off" disabled>
                  <ul class="custom-select-options" id="districtList"></ul>
                  <input type="hidden" name="districtId" id="districtId">
                  <input type="hidden" name="districtName" id="districtName">
                </div>
              </div>
              <div class="form-group">
                <label>Phường / Xã *</label>
                <div class="custom-select-wrapper">
                  <input type="text" class="custom-select-input" id="wardInput" placeholder="Chọn Phường/Xã..." autocomplete="off" disabled>
                  <ul class="custom-select-options" id="wardList"></ul>
                  <input type="hidden" name="wardId" id="wardId">
                  <input type="hidden" name="wardName" id="wardName">
                </div>
              </div>
              <div class="form-group">
                <label>Địa Chỉ Cụ Thể (Số nhà, đường...) *</label>
                <input type="text" name="streetAddress" placeholder="Số 123, Đường ABC..." required>
              </div>
  
              <!-- Product Select ĐỘNG từ data.js -->
              <div class="form-group">
                <label>Chọn Sản Phẩm *</label>
                <select name="product" id="productSelect" required>
                  ${products.map((prod, index) => `
                    <option value="${prod.id}" 
                            data-price="${prod.priceValue}" 
                            ${index === 1 ? 'selected' : ''}>
                      ${prod.name} - ${prod.priceDisplay}
                    </option>
                  `).join('')}
                </select>
              </div>

              <!-- Quantity -->
              <div class="form-group">
                <label>Số Lượng *</label>
                <input type="number" name="quantity" id="quantityInput" value="1" min="1" max="10" required>
              </div>

              <!-- Total Price Display -->
              <div class="summary-total" style="margin-bottom: var(--spacing-lg); font-size: 1.2rem; font-weight: bold; color: var(--primary);">
                <span>Tổng Cộng:</span>
                <span id="orderTotalPrice">...</span>
              </div>
            

              <button type="submit" class="btn btn-primary btn-lg form-submit btn-pulse">Xác Nhận Đặt Hàng</button>
              
              <div id="successMessage" class="success-message hidden" style="margin-top: var(--spacing-md); display: none;">
                <span>✓</span>
                <span>Cảm ơn! Chúng tôi sẽ liên hệ bạn sớm.</span>
              </div>
            </form>
          </div>
          
          <!-- Summary Sidebar -->
          <div>
             <div class="order-summary">
              <h3 style="color: var(--foreground); margin-bottom: var(--spacing-lg);">Thông Tin Đơn Hàng</h3>
              <div class="summary-benefits">
                <p>✓ Miễn phí giao hàng cho đơn từ 300.000đ</p>
                <p>✓ 1 đổi 1 hoặc hoàn tiền nếu xảy ra vỡ hỏng trong quá trình vận chuyển</p>
                <p>✓ Giao hàng toàn quốc</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Initialize location selectors after rendering HTML
    setTimeout(() => {
      if (typeof initLocationSelectors === 'function') {
        initLocationSelectors();
      }
      // Trigger update price immediately after form render
      const productSelect = document.getElementById('productSelect');
      if (productSelect) {
        const event = new Event('change');
        productSelect.dispatchEvent(event);
      }
    }, 0);
  },

  // Render FAQ Section
  renderFAQ: () => {
    const faq = document.getElementById('faq');
    const { faqs, contact } = siteData;

    faq.innerHTML = `
      <div class="container">
        <div class="section-header">
          <h2>Câu Hỏi Thường Gặp</h2>
          <p>Tìm hiểu thêm về sản phẩm và dịch vụ của Sadu</p>
        </div>
        
        <div class="faq-list">
          ${faqs.map((item, index) => `
            <div class="faq-item" data-index="${index}">
              <button class="faq-question">
                <span>${item.question}</span>
                <span class="faq-icon">▼</span>
              </button>
              <div class="faq-answer">
                <div class="faq-answer-content">${item.answer}</div>
              </div>
            </div>
          `).join('')}
        </div>
        
        <div class="combo-offer" style="margin-top: var(--spacing-2xl);">
          <h3>Còn Câu Hỏi Khác?</h3>
          <p style="color:white;">Liên hệ với chúng tôi qua hotline hoặc Fanpage để được hỗ trợ nhanh chóng</p>
          <div style="display: flex; gap: var(--spacing-md); justify-content: center; flex-wrap: wrap; margin-top: var(--spacing-lg);">
            <a href="tel:${contact.phone}" class="btn btn-secondary" style="background-color: white; color: var(--primary);">📞 Gọi Hotline</a>
            <a href="${contact.page}" class="btn btn-secondary" style="background-color: white; color: var(--primary);">✉️ Nhắn tin Fanpage</a>
          </div>
        </div>
      </div>
    `;
  },

  // Render Footer
  renderFooter: () => {
    const footer = document.getElementById('footer');
    const { contact } = siteData;

    footer.innerHTML = `
      <div class="container">
        
        
        <div class="footer-content">
          <div class="footer-section">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: var(--spacing-md);">
              <div class="logo-icon">S</div>
              <span style="font-size: 1.25rem; font-weight: 700;">SADU</span>
            </div>
            <p>Trứng gà thảo dược Sadu – Lựa chọn tinh túy cho sức khỏe gia đình bạn.</p>
          </div>
          
          // <div class="footer-section">
          //   <h4>Sản Phẩm</h4>
          //   <ul>
          //     <li><a href="#products">Hộp Nhỏ (6 quả)</a></li>
          //     <li><a href="#products">Hộp Vừa (10 quả)</a></li>
          //     <li><a href="#products">Hộp Lớn (12 quả)</a></li>
          //     <li><a href="#products">Combo Tiết Kiệm</a></li>
          //   </ul>
          // </div>
          
          <div class="footer-section">
            <h4>Công Ty</h4>
            <ul>
              <li><a href="#story">Về Chúng Tôi</a></li>
              <li><a href="#gallery">Trang Trại</a></li>
              <li><a href="#benefits">Blog</a></li>
              <li><a href="#faq">Chính Sách</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Liên Hệ</h4>
            <div class="footer-contact">
              <span>📞</span>
              <span>${contact.phone}</span>
            </div>
            <div class="footer-contact">
              <span>✉️</span>
              <span>${contact.email}</span>
            </div>
            <div class="footer-contact">
              <span>📍</span>
              <span>${contact.address}</span>
            </div>
            
            <div class="footer-social">
              <a href="#" class="social-icon">f</a>
              <a href="#" class="social-icon">📷</a>
              <a href="#" class="social-icon">▶️</a>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2026 Sadu - Trứng Gà Thảo Dược. Bảo lưu mọi quyền. | <a href="#" style="color: rgba(255, 255, 255, 0.7);">Chính Sách Bảo Mật</a> | <a href="#" style="color: rgba(255, 255, 255, 0.7);">Điều Khoản Sử Dụng</a></p>
        </div>
      </div>
    `;
  },


  // Render Certificates Section (Previously Gallery)
  renderGallery: () => {
    const gallery = document.getElementById('gallery');
    const { certificates } = siteData; // Lấy dữ liệu từ certificates

    // Nếu không có dữ liệu, ẩn section này đi
    if (!certificates || certificates.length === 0) {
      gallery.style.display = 'none';
      return;
    }

    gallery.innerHTML = `
      <div class="container">
        <div class="section-header">
          <h2>Sự An Toàn Được Chứng Nhận</h2>
          <p>Minh bạch chất lượng với các giấy tờ kiểm định từ cơ quan chức năng</p>
        </div>
        
        <div class="certificate-carousel-wrapper">
          <!-- Nút Previous -->
          <button class="carousel-btn prev-btn" id="certPrevBtn" aria-label="Previous Slide">
            &#10094;
          </button>

          <!-- Track chứa các slide -->
          <div class="certificate-track" id="certificateTrack">
            ${certificates.map((cert, index) => `
              <div class="certificate-slide ${index === 0 ? 'active' : ''}" data-index="${index}">
                <div class="certificate-card">
                  <div class="certificate-image-box">
                    <img src="${cert.image}" alt="${cert.title}" loading="lazy">
                    <div class="zoom-icon">🔍</div>
                  </div>
                  <div class="certificate-info">
                    <h3 class="certificate-title">${cert.title}</h3>
                    <p class="certificate-desc">${cert.description}</p>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Nút Next -->
          <button class="carousel-btn next-btn" id="certNextBtn" aria-label="Next Slide">
            &#10095;
          </button>
        </div>

        <!-- Dots Indicator -->
        <div class="carousel-dots" id="carouselDots">
          ${certificates.map((_, index) => `
            <span class="dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>
          `).join('')}
        </div>
      </div>
    `;

    // Khởi tạo logic Carousel sau khi HTML đã render
    setTimeout(() => initCertificateCarousel(), 0);
  },
};
