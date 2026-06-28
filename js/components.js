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
                    <div class="logo-icon">🥚</div>
                    <div>
                        <div>SADU</div>
                        <div style="font-size: 12px;">Trứng Gà Thảo Dược</div>
                    </div>
                </div>
                <nav class="nav-menu">
                    ${navigation.map(item => `<a href="${item.href}">${item.label}</a>`).join('')}
                </nav>
                <button class="header-btn" onclick="App.openOrderModal()">ĐẶT HÀNG NGAY</button>
                <button class="mobile-menu-btn" onclick="App.toggleMenu()">☰</button>
            </div>
        `;
    },

    // Render Hero Section
    renderHero: () => {
        const hero = document.getElementById('hero');
        const { label, title, description, ctaText, ctaNote, offerBadge, image } = siteData.hero;

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
                    <img src="${image}" alt="Trứng Gà Thảo Dược SADU">
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
    renderHerbalStory: () => {
        const section = document.getElementById('herbal-story');
        if (!section) return;
        const { label, title, description, herbs, result, gridBackground } = siteData.herbalStory;

        section.className = 'herbal-story-section';
        section.innerHTML = `
            <div class="herbal-story-container">
                <div class="herbal-story-header">
                    <span class="herbal-story-label">${label}</span>
                    <h2>${title}</h2>
                    <p>${description}</p>
                </div>
                <div class="herbal-story-body">
                    <div class="herbs-grid" ${gridBackground ? `style="background-image: url('${gridBackground}')"` : ''}>
                        ${herbs.map(h => `
                            <div class="herb-card">
                                <div class="herb-icon">🌿</div>
                                <div class="herb-info">
                                    <strong>${h.name}</strong>
                                    <span>${h.benefit}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="herbal-result-card">
                        <div class="herbal-result-icon">${result.icon}</div>
                        <h3>${result.title}</h3>
                        <ul class="herbal-result-list">
                            ${result.points.map(p => `<li>${p}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;
    },

    // Render Why Section
    renderWhy: () => {
        const why = document.getElementById('why');
        const { title, farmStory, comparison, safety } = siteData.why;

        why.className = 'why-section';
        why.innerHTML = `
            <div class="why-container">
                <div class="why-header">
                    <span class="why-label">Lý Do Chọn SADU</span>
                    <h2>${title}</h2>
                </div>

                <!-- Block 1: 3 KHÔNG -->
                <div class="why-feature-block">
                    <div class="why-feature-image">
                        <img src="${farmStory.image}" alt="Lòng đỏ trứng SADU">
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

                <!-- Block 2: Comparison + Safety cards -->
                <div class="why-cards-grid">
                    <div class="why-card">
                        <div class="why-card-image">
                            <img src="${comparison.image}" alt="${comparison.title}">
                        </div>
                        <div class="why-card-body">
                            <h3>${comparison.title}</h3>
                            <p>${comparison.description}</p>
                        </div>
                    </div>
                    <div class="why-card">
                        <div class="why-card-image">
                            <img src="${safety.image}" alt="${safety.title}">
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

    // Render Statistics Section
    renderStatistics: () => {
        const section = document.getElementById('statistics');
        const { title, stats } = siteData.statistics;

        section.className = 'statistics-section';
        section.innerHTML = `
            <div class="statistics-container">
                <div class="statistics-header">
                    <h2>${title}</h2>
                </div>
                
                <div class="statistics-grid">
                    ${stats.map((stat, index) => `
                        <div class="statistic-card" style="animation-delay: ${index * 0.1}s">
                            <div class="statistic-icon">${stat.icon}</div>
                            <div class="statistic-number" data-target="${stat.number}">${stat.number}</div>
                            <div class="statistic-label">${stat.label}</div>
                            <div class="statistic-description">${stat.description}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        // Initialize counter animation
        setTimeout(() => App.animateCounters(), 300);
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
                                <img id="carouselGiftMain" src="${images[0].src}" alt="${images[0].alt}" />
                                <button type="button" class="carousel-nav carousel-next" aria-label="Ảnh tiếp">›</button>
                            </div>
                            <div class="comparison-carousel-thumbs gift-thumbs">
                                ${images.map((img, i) => `
                                    <button type="button" class="thumb ${i === 0 ? 'active' : ''}" data-src="${img.src}" aria-label="${img.alt}">
                                        <img src="${img.src}" alt="${img.alt}" />
                                    </button>
                                `).join('')}
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

        setTimeout(() => App.initCarousel('carouselGiftMain', '.gift-thumbs'), 0);
    },

    // Render Value Justification Section
    renderValueJustification: () => {
        const section = document.getElementById('value-justification');
        if (!section) return;
        const { label, title, subtitle, comparisons, anchors, ctaText } = siteData.valueJustification;

        section.className = 'value-justification-section';
        section.innerHTML = `
            <div class="value-justification-container">
                <div class="value-header">
                    <span class="value-label">${label}</span>
                    <h2>${title}</h2>
                    <p>${subtitle}</p>
                </div>

                <div class="value-price-compare">
                    ${comparisons.map(c => `
                        <div class="value-price-card ${c.highlight ? 'value-price-card--highlight' : ''}">
                            ${c.highlight ? '<div class="value-price-best">Lựa chọn của bạn</div>' : ''}
                            <div class="value-price-label">${c.label}</div>
                            <div class="value-price-amount">${c.price}</div>
                            <div class="value-price-note">${c.note}</div>
                        </div>
                    `).join('')}
                </div>

                <div class="value-anchors">
                    ${anchors.map(a => `
                        <div class="value-anchor-card">
                            <div class="value-anchor-icon">${a.icon}</div>
                            <div class="value-anchor-body">
                                <strong>${a.comparison}</strong>
                                <p>${a.value}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <div class="value-cta">
                    <button class="cta-btn" onclick="App.openOrderModal()">${ctaText}</button>
                </div>
            </div>
        `;
    },

    // Render Comparison Table
    renderComparison: () => {
        const section = document.getElementById('comparison');
        const { comparison: comparisonData } = siteData;

        section.className = 'comparison';
        section.innerHTML = `
            <div id="comparison-table-container">
                <h2>So Sánh Trứng SADU Và Trứng Thường</h2>
                <table class="comparison-table">
                    <thead>
                        <tr>
                            <th>Tiêu Chí</th>
                            <th>Trứng SADU</th>
                            <th>Trứng Thường</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${comparisonData.map(item => `
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
        `;
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
                    <img id="carouselMainImage" src="${images[0].src}" alt="${images[0].alt}" />
                    <button type="button" class="carousel-nav carousel-next" aria-label="Ảnh tiếp theo">›</button>
                </div>
                <div class="comparison-carousel-thumbs">
                    ${images.map((img, index) => `
                        <button type="button" class="thumb ${index === 0 ? 'active' : ''}" data-src="${img.src}" aria-label="${img.alt}">
                            <img src="${img.src}" alt="${img.alt}" />
                        </button>
                    `).join('')}
                </div>
            </div>
        `;

        // Initialize carousel functionality
        setTimeout(() => App.initCarousel('carouselMainImage', '.comparison-carousel-thumbs'), 0);
    },

    // Render Packaging & Shipping Section
    renderPackaging: () => {
        const section = document.getElementById('packaging');
        if (!section) return;
        const { label, title, subtitle, methods, guarantee } = siteData.packaging;

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
                                <img src="${m.image}" alt="${m.imageAlt}">
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
            </div>
        `;
    },

    // Render Farm Story Section
    renderFarmStory: () => {
        const section = document.getElementById('farm-story');
        if (!section) return;
        const { label, title, stats, process, image, imageAlt } = siteData.farmStory;

        section.className = 'farm-story-section';
        section.innerHTML = `
            <div class="farm-story-container">
                <div class="farm-story-header">
                    <span class="farm-story-label">${label}</span>
                    <h2>${title}</h2>
                </div>

                <div class="farm-story-body">
                    <div class="farm-story-left">
                        <div class="farm-story-image-wrap">
                            <img src="${image}" alt="${imageAlt}" class="farm-story-img">
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
                        <h3 class="farm-process-title">${process.title}</h3>
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
            </div>
        `;
    },

    // Render Egg Comparison Section
    renderEggComparison: () => {
        const section = document.getElementById('egg-comparison');
        const { title, subtitle, comparisons } = siteData.eggComparison;

        section.className = 'egg-comparison';
        section.innerHTML = `
            <div class="egg-comparison-container">
                <div class="egg-comparison-header">
                    <h2>${title}</h2>
                    <p class="egg-comparison-subtitle">${subtitle}</p>
                </div>
                
                <div class="egg-comparison-grid">
                    ${comparisons.map((item, index) => `
                        <div class="egg-comparison-card" style="animation-delay: ${index * 0.1}s">
                            <div class="egg-comparison-icon">${item.icon}</div>
                            <h3 class="egg-comparison-card-title">${item.title}</h3>
                            
                            <div class="egg-comparison-content">
                                <div class="egg-comparison-item egg-sadu">
                                    <div class="egg-comparison-badge">✓ SADU</div>
                                    <p>${item.sadu}</p>
                                </div>
                                <div class="egg-comparison-item egg-regular">
                                    <div class="egg-comparison-badge badge-regular">✗ Trứng Thường</div>
                                    <p>${item.regular}</p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
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
                                <img src="${featuredProduct.image}" alt="${featuredProduct.name}">
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
                                        <img src="${product.image}" alt="${product.name}">
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
                                    <img src="${product.image}" alt="${product.name}">
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

        section.className = 'customer-feedback-gallery';
        section.innerHTML = `
            <div class="feedback-gallery-container">
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
                                <img src="${item.avatar}" alt="${item.name}" class="author-avatar">
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
                        <img src="${specialProgram.image}" alt="${specialProgram.imageAlt}">
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
        Components.renderFarmStory();
        Components.renderEggComparison();
        Components.renderValueJustification();
        Components.renderComparison();
        Components.renderStatistics();
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