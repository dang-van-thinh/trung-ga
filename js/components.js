// js/components.js
/* ============================================
   SADU LANDING PAGE - COMPONENTS
   ============================================ */

const Components = {

    // Render Event Popup
    renderEventPopup: () => {
        const { eventPopup } = siteData;

        // Check if popup is enabled
        if (!eventPopup || !eventPopup.enabled) {
            return;
        }

        // Create popup element
        const popupContainer = document.createElement('div');
        popupContainer.id = 'eventPopup';
        popupContainer.className = 'event-popup';
        popupContainer.innerHTML = `
            <div class="event-popup-overlay"></div>
            <div class="event-popup-content">
                <button class="event-popup-close" onclick="App.closeEventPopup()">×</button>
                <div class="event-popup-body">
                    <h3>${eventPopup.title}</h3>
                    <div class="event-popup-message">${eventPopup.message}</div>
                    <button class="event-popup-btn" onclick="App.closeEventPopup()">${eventPopup.closeText}</button>
                </div>
            </div>
        `;

        document.body.appendChild(popupContainer);

        // Show popup after a short delay
        setTimeout(() => {
            popupContainer.classList.add('show');
            document.body.style.overflow = 'hidden';
        }, 500);
    },

    // Render Header
    renderHeader: () => {
        const header = document.getElementById('header');
        const { navigation, contact } = siteData;

        header.innerHTML = `
            <div class="header-container">
                <div class="logo" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
                    <div class="logo-icon"><img src="source/logo-sadu.png" alt="SADU logo"></div>
                    <div>
                        <div>SADU</div>
                        <div style="font-size: 12px;">Trứng Gà Thảo Dược</div>
                    </div>
                </div>
                <nav class="nav-menu">
                    ${navigation.map(item => `<a href="${item.href}">${item.label}</a>`).join('')}
                </nav>
                <button class="mobile-menu-btn" onclick="App.toggleMenu()">☰</button>
            </div>
        `;
    },

    // Render Hero Section
    renderHero: () => {
        const hero = document.getElementById('hero');
        const { label, title, description, ctaText, ctaNote, offerBadge, image, signatureImage, signatureCaption } = siteData.hero;

        hero.className = 'hero';
        hero.innerHTML = `
            <div class="hero-content">
                <div class="hero-text">
                    <div class="hero-label">${label}</div>
                    <h1>${title}</h1>
                    <p>${description}</p>
                    <div class="hero-cta-group">
                        <button class="cta-btn" onclick="App.openOrderModal()">${ctaText}</button>
                        <span class="hero-cta-note">${ctaNote}</span>
                    </div>
                    <div class="hero-offer-badge">${offerBadge}</div>
                </div>
                <div class="hero-image">
                    <img src="${image}" alt="Trứng Gà Thảo Dược SADU" fetchpriority="high">
                    ${signatureImage ? `
                        <div class="hero-signature-badge">
                            <img src="${signatureImage}" alt="Lòng đỏ trứng SADU cam sậm tự nhiên">
                            <span class="hero-signature-caption">${signatureCaption || ''}</span>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    },

    // Render Benefits Section
    renderBenefits: () => {
        const benefits = document.getElementById('benefits');
        const { benefits: benefitsList } = siteData;

        benefits.className = 'benefits';
        benefits.innerHTML = `
            <div class="benefits-container">
                ${benefitsList.map(benefit => `
                    <div class="benefit-item">
                        <div class="benefit-icon">${benefit.icon}</div>
                        <h3>${benefit.title}</h3>
                        <p>${benefit.description}</p>
                    </div>
                `).join('')}
            </div>
        `;
    },

    // Render Herbal Story Section
    // Chapter 1 (thảo dược) + Chapter 2 (trang trại) gộp thành 1 mạch chuyện liền mạch,
    // thay vì 2 section riêng lặp lại cùng luận điểm "SADU sạch & tự nhiên".
    renderHerbalStory: () => {
        const section = document.getElementById('herbal-story');
        if (!section) return;
        const { label, title, description, herbs, gridBackground } = siteData.herbalStory;
        const { title: farmTitle, stats, process, image: farmImage, imageAlt: farmImageAlt, ctaText } = siteData.farmStory;

        section.className = 'herbal-story-section';
        section.innerHTML = `
            <div class="herbal-story-container">
                <div class="herbal-story-header">
                    <span class="herbal-story-label">${label}</span>
                    <h2>${title}</h2>
                    <p>${description}</p>
                </div>
                <div class="herbal-story-body">
                    <div class="herbs-swipe-hint"><span>👈</span> Vuốt xem 13 thảo dược tự nhiên <span>👉</span></div>
                    <div class="herbs-grid-wrapper">
                        <div class="herbs-grid" ${gridBackground ? `style="background-image: url('${gridBackground}')"` : ''}>
                            ${herbs.map(h => `
                                <div class="herb-card">
                                    <div class="herb-image-wrap">
                                        <img class="herb-image" src="${h.image || ''}" alt="${h.imageAlt || h.name}" loading="lazy">
                                    </div>
                                    <div class="herb-info">
                                        <strong>${h.name}</strong>
                                        <span>${h.benefit}</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <div class="herbal-farm-divider">
                    <span class="herbal-farm-divider-line"></span>
                    <h3 class="herbal-farm-transition-title">${farmTitle}</h3>
                </div>

                <div class="farm-story-body">
                    <div class="farm-story-left">
                        <div class="farm-story-image-wrap">
                            <img src="${farmImage}" alt="${farmImageAlt}" class="farm-story-img" loading="lazy">
                            <div class="farm-story-stats">
                                ${stats.map(s => `
                                    <div class="farm-stat-card">
                                        <div class="farm-stat-icon">${s.icon}</div>
                                        <div class="farm-stat-number">${s.number}</div>
                                        <div class="farm-stat-unit">${s.unit}</div>
                                        <div class="farm-stat-label">${s.label}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>

                    <div class="farm-story-right">
                        <h4 class="farm-process-title">${process.title}</h4>
                        <div class="farm-process-steps">
                            ${process.steps.map((step, i) => `
                                <div class="farm-step">
                                    <div class="farm-step-left">
                                        <div class="farm-step-icon">${step.icon}</div>
                                        <div class="farm-step-line"></div>
                                    </div>
                                    <div class="farm-step-content">
                                        <h4>${step.title}</h4>
                                        <p>${step.description}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <div class="farm-story-video">
                    <div class="farm-story-video-wrap">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/4S-lCNEwv68?si=H_wm_B7n1JykS0sw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>

                <div class="value-cta" style="margin-top: 20px; text-align: center;">
                        <button class="cta-btn" onclick="App.openOrderModal()">${ctaText}</button>
                    </div>
            </div>
        `;
    },

    // Render Why Section
    renderWhy: () => {
        const why = document.getElementById('why');
        const { title, subtitle, farmStory, table, comparison, safety } = siteData.why;

        why.className = 'why-section';
        why.innerHTML = `
            <div class="why-container">
                <div class="why-header">
                    <span class="why-label">Lý Do Chọn SADU</span>
                    <h2>${title}</h2>
                    <p class="egg-comparison-subtitle">${subtitle}</p>
                </div>

                <!-- Block 1: 3 KHÔNG -->
                <div class="why-feature-block">
                    <div class="why-feature-image">
                        <img src="${farmStory.image}" alt="Lòng đỏ trứng SADU" loading="lazy">
                    </div>
                    <div class="why-feature-content">
                        <h3>${farmStory.title}</h3>
                        <div class="why-usp-pills">
                            ${farmStory.uspList.map(item => `
                                <div class="why-usp-pill">
                                    <span class="why-usp-check">✓</span>
                                    <span>${item}</span>
                                </div>
                            `).join('')}
                        </div>
                        <p>${farmStory.description}</p>
                    </div>
                </div>

                <!-- Block 2: Bảng so sánh chi tiết SADU vs trứng thường -->
                <div class="comparison-swipe-hint"><span>👈</span> Vuốt sang để xem bảng so sánh chi tiết <span>👉</span></div>
                <div class="comparison-table-wrapper">
                    <table class="comparison-table">
                        <thead>
                            <tr>
                                <th>Tiêu Chí</th>
                                <th>Trứng SADU</th>
                                <th>Trứng Thường</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${table.map(item => `
                                <tr>
                                    <td>${item.criteria}</td>
                                    <td>
                                        ${typeof item.sadu === 'boolean'
                ? (item.sadu ? '<span class="check-mark">✓</span>' : '<span class="cross-mark">✗</span>')
                : item.sadu}
                                    </td>
                                    <td>
                                        ${typeof item.regular === 'boolean'
                ? (item.regular ? '<span class="check-mark">✓</span>' : '<span class="cross-mark">✗</span>')
                : item.regular}
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>

                <!-- Block 3: Comparison + Safety cards -->
                <div class="why-cards-grid">
                    <div class="why-card">
                        <div class="why-card-image">
                            <img src="${comparison.image}" alt="${comparison.title}" loading="lazy">
                        </div>
                        <div class="why-card-body">
                            <h3>${comparison.title}</h3>
                            <p>${comparison.description}</p>
                        </div>
                    </div>
                    <div class="why-card">
                        <div class="why-card-image">
                            <img src="${safety.image}" alt="${safety.title}" loading="lazy">
                        </div>
                        <div class="why-card-body">
                            <h3>${safety.title}</h3>
                            <p>${safety.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    // Render Gift Carousel Section
    renderGiftCarousel: () => {
        const section = document.getElementById('gift-carousel');
        if (!section) return;
        const { label, title, subtitle, occasions, packaging, images, ctaText } = siteData.giftSection;

        section.className = 'gift-section';
        section.innerHTML = `
            <div class="gift-container">
                <div class="gift-header">
                    <div class="gift-header-icon">🎁</div>
                    <span class="gift-label">${label}</span>
                    <h2>${title}</h2>
                    <p>${subtitle}</p>
                </div>

                <div class="gift-body">
                    <div class="gift-occasions">
                        ${occasions.map(o => `
                            <div class="gift-occasion-card">
                                <div class="gift-occasion-icon">${o.icon}</div>
                                <div class="gift-occasion-info">
                                    <strong>${o.title}</strong>
                                    <p>${o.desc}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <div class="gift-visual">
                        <div class="gift-carousel-wrap comparison-carousel">
                            <div class="comparison-carousel-main">
                                <button type="button" class="carousel-nav carousel-prev" aria-label="Ảnh trước">‹</button>
                                <img id="carouselGiftMain" src="${images[0].src}" alt="${images[0].alt}" loading="lazy" />
                                <button type="button" class="carousel-nav carousel-next" aria-label="Ảnh tiếp">›</button>
                            </div>
                        </div>

                        <div class="gift-packaging-card">
                            <h4>${packaging.title}</h4>
                            <ul>
                                ${packaging.points.map(p => `<li>${p}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="gift-cta">
                    <button class="cta-btn" onclick="App.openOrderModal()">${ctaText}</button>
                </div>
            </div>
        `;

        setTimeout(() => App.initCarousel('carouselGiftMain', siteData.giftSection.images), 0);
    },

    // Render Certificates Carousel
    renderCertificates: () => {
        const section = document.getElementById('certificates');
        const { title, images } = siteData.certificates;

        section.className = 'comparison-image';
        section.innerHTML = `
            <h2>${title}</h2>
            <div class="comparison-carousel">
                <div class="comparison-carousel-main">
                    <button type="button" class="carousel-nav carousel-prev" aria-label="Ảnh trước">‹</button>
                    <img id="carouselMainImage" src="${images[0].src}" alt="${images[0].alt}" loading="lazy" />
                    <button type="button" class="carousel-nav carousel-next" aria-label="Ảnh tiếp theo">›</button>
                </div>
            </div>
        `;

        // Initialize carousel functionality
        setTimeout(() => App.initCarousel('carouselMainImage', siteData.certificates.images), 0);
    },

    // Render Packaging & Shipping Section
    renderPackaging: () => {
        const section = document.getElementById('packaging');
        if (!section) return;
        const { label, title, subtitle, methods, guarantee, ctaText } = siteData.packaging;

        section.className = 'packaging-section';
        section.innerHTML = `
            <div class="packaging-container">
                <div class="packaging-header">
                    <span class="packaging-label">${label}</span>
                    <h2>${title}</h2>
                    <p>${subtitle}</p>
                </div>

                <div class="packaging-methods">
                    ${methods.map(m => `
                        <div class="packaging-card">
                            <div class="packaging-card-tag">${m.tag}</div>
                            <div class="packaging-card-image">
                                <img src="${m.image}" alt="${m.imageAlt}" loading="lazy">
                                <div class="packaging-card-icon">${m.icon}</div>
                            </div>
                            <div class="packaging-card-body">
                                <h3>${m.title}</h3>
                                <p>${m.description}</p>
                                <ul class="packaging-points">
                                    ${m.points.map(p => `<li><span class="pkg-check">✓</span>${p}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <div class="packaging-guarantee">
                    <div class="pkg-guarantee-icon">${guarantee.icon}</div>
                    <div class="pkg-guarantee-body">
                        <strong>${guarantee.title}</strong>
                        <p>${guarantee.description}</p>
                        <span class="pkg-guarantee-note">${guarantee.note}</span>
                    </div>
                </div>
                 <div class="value-cta" style="margin-top: 20px; text-align: center;">
                    <button class="cta-btn" onclick="App.openOrderModal()">${ctaText}</button>
                </div>
            </div>
        `;
    },

    // Render Products Section
    renderProducts: () => {
        const products = document.getElementById('products');
        const { products: productList } = siteData;

        // Check if any product has featured: true
        const hasFeaturedProduct = productList.some(p => p.featured === true);

        products.className = 'products';

        if (hasFeaturedProduct) {
            // Separate featured product from others
            const featuredProduct = productList.find(p => p.featured === true);
            const regularProducts = productList.filter(p => p.featured !== true);

            products.innerHTML = `
                <div id="products-section-container">
                    <h2>ĐẶT HÀNG NHANH TAY - ƯU ĐÃI CÓ HẠN</h2>

                    <!-- Product Section Countdown -->
                    <div class="countdown-wrapper product-section-countdown">
                        <p class="countdown-heading">⏰ Ưu đãi kết thúc sau:</p>
                        <div class="countdown-boxes">
                            <div class="countdown-box">
                                <div class="countdown-number" id="product-countdown-hours">00</div>
                                <div class="countdown-text">Giờ</div>
                            </div>
                            <div class="countdown-box">
                                <div class="countdown-number" id="product-countdown-minutes">00</div>
                                <div class="countdown-text">Phút</div>
                            </div>
                            <div class="countdown-box">
                                <div class="countdown-number" id="product-countdown-seconds">00</div>
                                <div class="countdown-text">Giây</div>
                            </div>
                        </div>
                    </div>

                    <!-- Featured Product (Subtle & Elegant) -->
                    <div class="featured-product-section">
                        <div class="featured-badge">SẢN PHẨM BÁN CHẠY</div>
                        <div class="featured-product-card">
                            <div class="featured-product-image">
                                <img src="${featuredProduct.image}" alt="${featuredProduct.name}" loading="lazy">
                                ${featuredProduct.originalPrice > featuredProduct.priceValue
                    ? `<div class="featured-discount-label">-${Math.round((1 - featuredProduct.priceValue / featuredProduct.originalPrice) * 100)}%</div>`
                    : ''}
                            </div>
                            <div class="featured-product-info">
                                <h3 class="featured-product-name">${featuredProduct.name}</h3>
                                <div class="featured-product-specs">
                                    ${featuredProduct.specs.map((spec, i) => `
                                        <span>${spec}</span>${i < featuredProduct.specs.length - 1 ? '<br>' : ''}
                                    `).join('')}
                                </div>
                                <div class="featured-product-price">
                                    ${featuredProduct.originalPrice > featuredProduct.priceValue
                    ? `<span class="price-old">${featuredProduct.originalPrice.toLocaleString('vi-VN')}đ</span>`
                    : ''}
                                    <span class="price-new">${featuredProduct.priceDisplay}</span>
                                    ${featuredProduct.originalPrice > featuredProduct.priceValue
                    ? `<span class="price-save">Tiết kiệm ${(featuredProduct.originalPrice - featuredProduct.priceValue).toLocaleString('vi-VN')}đ</span>`
                    : ''}
                                </div>
                                <button class="featured-product-btn" onclick="App.openOrderModal(${productList.indexOf(featuredProduct)})">
                                    ĐẶT HÀNG NGAY
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Regular Products Grid -->
                    <div class="products-grid">
                        ${regularProducts.map((product, index) => {
                        const realIndex = productList.indexOf(product);
                        return `
                                <div class="product-card">
                                    <div class="product-image">
                                        <img src="${product.image}" alt="${product.name}" loading="lazy">
                                        ${product.originalPrice > product.priceValue
                                ? `<div class="discount-label">-${Math.round((1 - product.priceValue / product.originalPrice) * 100)}%</div>`
                                : ''}
                                    </div>
                                    <div class="product-info">
                                        <h3 class="product-name">${product.name}</h3>
                                        <div class="product-specs">
                                            ${product.specs.map((spec, i) => `
                                                <span>${spec}</span>${i < product.specs.length - 1 ? '<br>' : ''}
                                            `).join('')}
                                        </div>
                                        <div class="product-price">
                                            ${product.originalPrice > product.priceValue
                                ? `<span class="price-old">${product.originalPrice.toLocaleString('vi-VN')}đ</span>`
                                : ''}
                                            <span class="price-new">${product.priceDisplay}</span>
                                        </div>
                                        <button class="product-btn" onclick="App.openOrderModal(${realIndex})">
                                            ĐẶT HÀNG NGAY
                                        </button>
                                    </div>
                                </div>
                            `;
                    }).join('')}
                    </div>
                </div>
            `;
        } else {
            // No featured product - display all products equally in grid
            products.innerHTML = `
                <div id="products-section-container">
                    <h2>ĐẶT HÀNG NHANH TAY - ƯU ĐÃI CÓ HẠN</h2>

                    <!-- Product Section Countdown -->
                    <div class="countdown-wrapper product-section-countdown">
                        <p class="countdown-heading">⏰ Ưu đãi kết thúc sau:</p>
                        <div class="countdown-boxes">
                            <div class="countdown-box">
                                <div class="countdown-number" id="product-countdown-hours">00</div>
                                <div class="countdown-text">Giờ</div>
                            </div>
                            <div class="countdown-box">
                                <div class="countdown-number" id="product-countdown-minutes">00</div>
                                <div class="countdown-text">Phút</div>
                            </div>
                            <div class="countdown-box">
                                <div class="countdown-number" id="product-countdown-seconds">00</div>
                                <div class="countdown-text">Giây</div>
                            </div>
                        </div>
                    </div>

                    <!-- All Products Grid -->
                    <div class="products-grid">
                        ${productList.map((product, index) => `
                            <div class="product-card">
                                <div class="product-image">
                                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                                    ${product.originalPrice > product.priceValue
                    ? `<div class="discount-label">-${Math.round((1 - product.priceValue / product.originalPrice) * 100)}%</div>`
                    : ''}
                                </div>
                                <div class="product-info">
                                    <h3 class="product-name">${product.name}</h3>
                                    <div class="product-specs">
                                        ${product.specs.map((spec, i) => `
                                            <span>${spec}</span>${i < product.specs.length - 1 ? '<br>' : ''}
                                        `).join('')}
                                    </div>
                                    <div class="product-price">
                                        ${product.originalPrice > product.priceValue
                    ? `<span class="price-old">${product.originalPrice.toLocaleString('vi-VN')}đ</span>`
                    : ''}
                                        <span class="price-new">${product.priceDisplay}</span>
                                    </div>
                                    <button class="product-btn" onclick="App.openOrderModal(${index})">
                                        ĐẶT HÀNG NGAY
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
    },

    // Render Customer Feedback Gallery (Masonry)
    renderCustomerFeedbackGallery: () => {
        const section = document.getElementById('customer-feedback-gallery');
        const { feedbackImages } = siteData;

        // Skip if no images
        if (!feedbackImages || feedbackImages.length === 0) {
            section.style.display = 'none';
            return;
        }

        // Ảnh nhiều hơn ~2 hàng (3 cột) thì thu gọn lại, mờ dần + nút "Xem Thêm"
        const FEEDBACK_COLLAPSE_THRESHOLD = 6;
        const shouldCollapse = feedbackImages.length > FEEDBACK_COLLAPSE_THRESHOLD;

        section.className = 'customer-feedback-gallery';
        section.innerHTML = `
            <div class="feedback-gallery-container">
                <div class="section-header">
                    <h2>Những Câu Chuyện Thực Từ Gia Đình Việt</h2>
                    <p>Hình ảnh thực tế từ khách hàng đã tin dùng sản phẩm Sadu</p>
                </div>

                <div id="feedbackMasonryWrap" class="feedback-masonry-wrap ${shouldCollapse ? 'is-collapsed' : ''}">
                    <div class="feedback-masonry-grid">
                        ${feedbackImages.map(img => `
                            <div class="feedback-item">
                                <img src="${img.src}" alt="${img.alt}" loading="lazy">
                            </div>
                        `).join('')}
                    </div>
                    ${shouldCollapse ? '<div class="feedback-fade-overlay"></div>' : ''}
                </div>

                ${shouldCollapse ? `
                    <div id="feedbackLoadMoreWrap" class="feedback-load-more-wrap">
                        <button type="button" class="feedback-load-more-btn" onclick="App.expandFeedbackGallery()">Xem Thêm</button>
                    </div>
                ` : ''}
            </div>
        `;
    },

    // Render Testimonials Section
    renderTestimonials: () => {
        const testimonials = document.getElementById('testimonials');
        const { testimonials: testimonialList } = siteData;

        testimonials.className = 'testimonials';
        testimonials.innerHTML = `
            <div id="testimonials-section-container">
                <h2>ĐÁNH GIÁ TỪ KHÁCH HÀNG</h2>
                <div class="testimonials-container">
                    ${testimonialList.map(item => `
                        <div class="testimonial-card">
                            <div class="stars">★★★★★</div>
                            <p class="testimonial-text">"${item.content}"</p>
                            <div class="testimonial-author">
                                <img src="${item.avatar}" alt="${item.name}" class="author-avatar" loading="lazy">
                                <div class="author-info">
                                    <h4>${item.name}</h4>
                                    <p>${item.role}</p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },

    // Render FAQ Section
    renderFAQ: () => {
        const faq = document.getElementById('faq');
        const { faqs: faqList, contact } = siteData;

        faq.className = 'faq';
        faq.innerHTML = `
            <div id="faq-section-container">
                <h2>CÂU HỎI THƯỜNG GẶP</h2>
                <div class="faq-container">
                    ${faqList.map((item, index) => `
                        <div class="faq-item" data-index="${index}">
                            <div class="faq-question" onclick="App.toggleFaq(this)">
                                <span>${item.question}</span>
                                <span class="faq-icon">▼</span>
                            </div>
                            <div class="faq-answer">
                                <p>${item.answer}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <div class="faq-messenger-cta">
                    <div class="faq-messenger-text">
                        <span class="faq-messenger-icon">💬</span>
                        <div>
                            <strong>Còn câu hỏi khác?</strong>
                            <p>Nhắn tin trực tiếp cho đội ngũ CSKH của SADU — phản hồi trong vòng vài phút.</p>
                        </div>
                    </div>
                    <a href="${contact.messenger}" target="_blank" rel="noopener noreferrer" class="faq-messenger-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.914 1.385 5.52 3.565 7.244V22l3.254-1.786A11.1 11.1 0 0 0 12 20.487c5.523 0 10-4.145 10-9.244S17.523 2 12 2zm1.008 12.44-2.545-2.713-4.968 2.713 5.469-5.804 2.609 2.713 4.904-2.713-5.469 5.804z"/>
                        </svg>
                        Nhắn Tin Qua Messenger
                    </a>
                </div>
            </div>
        `;
    },

    // Render Footer
    renderFooter: () => {
        const footer = document.getElementById('footer');
        const { contact } = siteData;

        footer.innerHTML = `
            <div class="footer-container">
                <div class="footer-section">
                    <h4>Về SADU</h4>
                    <p>Trứng gà thảo dược tự nhiên, an toàn cho mẹ bầu, mẹ bỉm sữa và gia đình.</p>
                    <p>Chúng tôi cam kết cung cấp sản phẩm chất lượng cao nhất với giá cả hợp lý.</p>
                </div>
                <div class="footer-section">
                    <h4>Chính Sách</h4>
                    <ul>
                        <li><a href="#">Chính sách bảo mật</a></li>
                        <li><a href="#">Điều khoản sử dụng</a></li>
                        <li><a href="#">Chính sách đổi trả</a></li>
                        <li><a href="#">Chính sách giao hàng</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Liên Hệ</h4>
                    <p>📞 Hotline: ${contact.phone}</p>
                    <p>📧 Email: ${contact.email}</p>
                    <p>📍 ${contact.address}</p>
                    <div class="social-links">
                        ${contact.socialLinks.map(link => `
                            <a href="${link.url}" title="${link.name}">${link.icon}</a>
                        `).join('')}
                    </div>
                </div>
                <div class="footer-section">
                    <h4>Hỗ Trợ</h4>
                    <ul>
                        <li><a href="#faq">Câu hỏi thường gặp</a></li>
                        <li><a href="#footer">Liên hệ chúng tôi</a></li>
                        <li><a href="#">Hướng dẫn sử dụng</a></li>
                    </ul>
                </div>
            </div>
            ${contact.mapEmbedUrl ? `
            <div class="footer-map">
                <h4>Tìm Chúng Tôi Trên Bản Đồ</h4>
                <div class="footer-map-frame">
                    <iframe
                        src="${contact.mapEmbedUrl}"
                        width="100%"
                        height="300"
                        style="border:0;"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        title="Bản đồ SADU Farm">
                    </iframe>
                </div>
            </div>
            ` : ''}
            <div class="footer-bottom">
                <p>&copy; 2026 SADU - Trứng Gà Thảo Dược.</p>
            </div>
        `;
    },

    // Render Product Options in Order Modal
    renderProductOptions: () => {
        const container = document.getElementById('productRadioGrid');
        const { products } = siteData;

        container.innerHTML = `
            ${products.map((product, index) => `
                <label class="product-radio-card">
                    <input type="radio" name="productOption" 
                           data-product="${product.name}" 
                           data-price="${product.priceValue}" 
                           data-index="${index}"
                           value="${product.id}|${product.priceValue}"
                           ${index === 0 ? 'checked' : ''}>
                    <div>
                        <strong>${product.name}</strong>
                        <p>${product.priceDisplay}</p>
                        <small>${product.specs[0]}</small> <br>
                        <small>${product.specs[1]}</small> <br>
                        ${product.id == "special-offer" ? `<small>${product.specs[2]}</small>` : ''}
                        
                    </div>
                </label>
            `).join('')}
        `;

        // Add event listeners to update total price
        setTimeout(() => {
            document.querySelectorAll('input[name="productOption"]').forEach(radio => {
                radio.addEventListener('change', App.updateTotalPrice);
            });
            App.updateTotalPrice();
        }, 0);
    },

    // Render Special Program Section
    renderSpecialProgram: () => {
        const section = document.getElementById('special-program');
        const { specialProgram } = siteData;

        // Ẩn section nếu không có chương trình hoặc disabled
        if (!specialProgram || !specialProgram.enabled) {
            section.style.display = 'none';
            return;
        }

        section.className = 'special-program-section';
        section.innerHTML = `
            <div class="special-program-wrapper">
                <div class="special-program-badge">${specialProgram.tag}</div>

                <div class="special-program-content">
                    <div class="special-program-image-wrapper">
                        <img src="${specialProgram.image}" alt="${specialProgram.imageAlt}" loading="lazy">
                        ${specialProgram.highlightText ? `<div class="urgency-tag">${specialProgram.highlightText}</div>` : ''}
                    </div>

                    <div class="special-program-info-wrapper">
                        <h2 class="special-program-heading">${specialProgram.title}</h2>
                        <h3 class="special-program-subheading">${specialProgram.subtitle}</h3>
                        <p class="special-program-text">${specialProgram.description}</p>

                        <ul class="special-program-benefits">
                            ${specialProgram.features.map(f => `
                                <li class="benefit-item-special">
                                    <span class="benefit-icon-special">${f.icon}</span>
                                    <div class="benefit-text">
                                        <span class="benefit-title">${f.title}</span>
                                        <span class="benefit-desc">${f.description}</span>
                                    </div>
                                </li>
                            `).join('')}
                        </ul>

                        ${specialProgram.countdown.enabled ? `
                        <div class="countdown-wrapper">
                            <p class="countdown-heading">${specialProgram.countdown.title}</p>
                            <div class="countdown-boxes" id="specialCountdown">
                                <div class="countdown-box"><span class="countdown-number" id="days">00</span><span class="countdown-text">Ngày</span></div>
                                <div class="countdown-box"><span class="countdown-number" id="hours">00</span><span class="countdown-text">Giờ</span></div>
                                <div class="countdown-box"><span class="countdown-number" id="minutes">00</span><span class="countdown-text">Phút</span></div>
                                <div class="countdown-box"><span class="countdown-number" id="seconds">00</span><span class="countdown-text">Giây</span></div>
                            </div>
                        </div>` : ''}

                        <button class="special-cta-button" onclick="App.openOrderModal()">
                            ${specialProgram.ctaText}
                        </button>
                    </div>
                </div>
            </div>
        `;

        if (specialProgram.countdown.enabled) {
            setTimeout(() => App.initSpecialCountdown(), 100);
        }
    },

    // Render Final CTA Section
    renderFinalCTA: () => {
        const section = document.getElementById('final-cta');
        if (!section) return;
        const { title, subtitle, highlights, ctaText, ctaSubtext } = siteData.finalCta;

        section.className = 'final-cta-section';
        section.innerHTML = `
            <div class="final-cta-container">
                <h2 class="final-cta-title">${title}</h2>
                <p class="final-cta-subtitle">${subtitle}</p>
                <ul class="final-cta-highlights">
                    ${highlights.map(h => `
                        <li class="final-cta-highlight-item">
                            <span class="final-cta-icon">${h.icon}</span>
                            <span>${h.text}</span>
                        </li>
                    `).join('')}
                </ul>
                <button class="final-cta-btn" onclick="App.openOrderModal()">${ctaText}</button>
                <p class="final-cta-subtext">${ctaSubtext}</p>
            </div>
        `;
    },

    // Initialize all components
    init: () => {
        Components.renderEventPopup();
        Components.renderHeader();
        Components.renderHero();
        Components.renderBenefits();
        Components.renderHerbalStory();
        Components.renderWhy();
        Components.renderPackaging();
        Components.renderCertificates();
        Components.renderSpecialProgram();
        Components.renderProducts();
        Components.renderGiftCarousel();
        Components.renderCustomerFeedbackGallery();
        Components.renderFAQ();
        Components.renderFinalCTA();
        Components.renderFooter();
        Components.renderProductOptions();
    }
};