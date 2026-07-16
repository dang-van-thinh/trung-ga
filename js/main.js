/* ============================================
   SADU LANDING PAGE - MAIN APPLICATION
   ============================================ */

// CONFIGURATION
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby7n1vHD2AGcUPTY67hg5chHKTSkKcMPQD4abO0QdDHMQ3-svokYSQ9Hid7cDXqSw/exec';

const App = {

    // ============================================
    // COUNTER ANIMATION
    // ============================================
    animateCounters: () => {
        const counters = document.querySelectorAll('.statistic-number');

        counters.forEach(counter => {
            const targetText = counter.getAttribute('data-target');
            // Extract number from target (e.g., "5,000+" -> 5000)
            const targetNumber = parseInt(targetText.replace(/[^0-9]/g, ''));
            const suffix = targetText.replace(/[0-9,]/g, '');
            const duration = 2000; // 2 seconds
            const step = targetNumber / (duration / 16); // 60fps
            let current = 0;

            const updateCounter = () => {
                current += step;
                if (current < targetNumber) {
                    // Format with commas
                    const formatted = Math.floor(current).toLocaleString('vi-VN');
                    counter.textContent = formatted + suffix;
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = targetText;
                }
            };

            updateCounter();
        });
    },

    // ============================================
    // CUSTOMER ALERT NOTIFICATION
    // ============================================
    alertIndex: 0,
    alertTimeout: null,

    showCustomerAlert: () => {
        const customer = siteData.customers[App.alertIndex];
        const alertEl = document.getElementById('customAlert');
        if (!alertEl) return;

        document.getElementById('customerName').textContent = customer.name;
        document.getElementById('alertMeta').textContent = `từ ${customer.location} • vừa đặt mua`;
        document.getElementById('productName').textContent = customer.product;

        const minutes = Math.floor(Math.random() * 5) + 1;
        document.getElementById('alertTime').textContent =
            minutes <= 1 ? '🕐 vài giây trước' : `🕐 ${minutes} phút trước`;

        const bar = document.getElementById('alertProgressBar');
        if (bar) {
            bar.classList.remove('running');
            void bar.offsetWidth;
        }

        alertEl.classList.remove('hide');
        setTimeout(() => {
            alertEl.classList.add('show');
            if (bar) bar.classList.add('running');
        }, 10);

        clearTimeout(App.alertTimeout);
        App.alertTimeout = setTimeout(() => {
            App.hideCustomerAlert();
            App.alertIndex = (App.alertIndex + 1) % siteData.customers.length;
            setTimeout(App.showCustomerAlert, 7000);
        }, 5000);
    },

    hideCustomerAlert: () => {
        const alertEl = document.getElementById('customAlert');
        if (!alertEl) return;
        alertEl.classList.remove('show');
        alertEl.classList.add('hide');
    },

    closeCustomerAlert: () => {
        App.hideCustomerAlert();
        clearTimeout(App.alertTimeout);
        App.alertIndex = (App.alertIndex + 1) % siteData.customers.length;
        setTimeout(App.showCustomerAlert, 5000);
    },

    // ============================================
    // EVENT POPUP
    // ============================================
    closeEventPopup: () => {
        const popup = document.getElementById('eventPopup');
        if (popup) {
            popup.classList.remove('show');
            document.body.style.overflow = 'auto';

            // Remove from DOM after animation
            setTimeout(() => {
                if (popup && popup.parentNode) {
                    popup.parentNode.removeChild(popup);
                }
            }, 300);
        }
    },

    // ============================================
    // ORDER MODAL
    // ============================================
    openOrderModal: (productIndex = 0) => {
        const modal = document.getElementById('orderModal');
        const radios = document.querySelectorAll('input[name="productOption"]');

        if (radios[productIndex]) {
            radios[productIndex].checked = true;
        } else if (radios.length > 0) {
            radios[0].checked = true;
        }

        const checkedRadio = document.querySelector('input[name="productOption"]:checked');
        if (checkedRadio) {
            checkedRadio.dispatchEvent(new Event('change', { bubbles: true }));
        }

        if (modal) {
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
            const alertEl = document.getElementById('customAlert');
            if (alertEl) alertEl.style.zIndex = '0';
        }
    },

    closeOrderModal: () => {
        const modal = document.getElementById('orderModal');
        if (modal) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
            const alertEl = document.getElementById('customAlert');
            if (alertEl) alertEl.style.zIndex = '';
        }
    },

    // ============================================
    // TOTAL PRICE
    // ============================================
    updateTotalPrice: () => {
        const selectedProductRadio = document.querySelector('input[name="productOption"]:checked');
        const productPrice = parseInt(selectedProductRadio?.dataset.price) || 0;
        const quantity = parseInt(document.getElementById('quantity').value) || 1;
        const subtotal = productPrice * quantity;

        const { freeShipThreshold = 358000, shippingFee = 30000 } = siteData.shipping || {};
        const hasShipFee = subtotal > 0 && subtotal < freeShipThreshold;
        const totalPrice = hasShipFee ? subtotal + shippingFee : subtotal;

        const totalPriceEl = document.getElementById('totalPrice');
        const shippingNotice = document.getElementById('shippingNotice');
        const shippingNoticeText = document.getElementById('shippingNoticeText');
        const summaryProductEl = document.getElementById('summaryProduct');
        const summaryQuantityEl = document.getElementById('summaryQuantity');

        if (totalPriceEl) {
            totalPriceEl.textContent = totalPrice.toLocaleString('vi-VN') + 'đ';
        }

        if (summaryProductEl) {
            summaryProductEl.textContent = selectedProductRadio?.dataset.product || '—';
        }

        if (summaryQuantityEl) {
            summaryQuantityEl.textContent = quantity;
        }

        if (shippingNotice) {
            shippingNotice.style.display = hasShipFee ? 'block' : 'none';
        }

        if (shippingNoticeText && hasShipFee) {
            shippingNoticeText.innerHTML = `<strong>Đã bao gồm phí vận chuyển:</strong> Giá sản phẩm ${subtotal.toLocaleString('vi-VN')}đ + phí ship <strong style="color: #c62828;">${shippingFee.toLocaleString('vi-VN')}đ</strong> = tổng <strong>${totalPrice.toLocaleString('vi-VN')}đ</strong>. Mua combo từ ${freeShipThreshold.toLocaleString('vi-VN')}đ để được <strong>miễn phí ship toàn quốc</strong>.`;
        }
    },

    // ============================================
    // QUANTITY STEPPER
    // ============================================
    changeQuantity: (delta) => {
        const quantityInput = document.getElementById('quantity');
        if (!quantityInput) return;
        const min = parseInt(quantityInput.min) || 1;
        const current = parseInt(quantityInput.value) || min;
        quantityInput.value = Math.max(min, current + delta);
        App.updateTotalPrice();
    },

    // ============================================
    // RESULT MODAL (thay cho alert())
    // ============================================
    showResultModal: (type, title, message) => {
        const modal = document.getElementById('resultModal');
        const icon = document.getElementById('resultModalIcon');
        const titleEl = document.getElementById('resultModalTitle');
        const messageEl = document.getElementById('resultModalMessage');
        if (!modal) return;

        if (icon) icon.textContent = type === 'success' ? '🎉' : '⚠️';
        if (titleEl) titleEl.textContent = title;
        if (messageEl) messageEl.textContent = message;

        modal.classList.add('show');
    },

    closeResultModal: () => {
        const modal = document.getElementById('resultModal');
        if (modal) modal.classList.remove('show');
    },

    // ============================================
    // FULL-SCREEN LOADING OVERLAY
    // ============================================
    showLoadingOverlay: () => {
        const overlay = document.getElementById('loadingOverlay');
        if (overlay) overlay.classList.add('show');
    },

    hideLoadingOverlay: () => {
        const overlay = document.getElementById('loadingOverlay');
        if (overlay) overlay.classList.remove('show');
    },

    // ============================================
    // SUBMIT ORDER
    // ============================================
    submitOrder: (event) => {
        event.preventDefault();

        // Form dùng novalidate: toàn bộ validate do JS đảm nhiệm để luôn hiện được
        // thông báo lỗi qua modal, tránh trường hợp trình duyệt tự chặn gửi form ở tầng
        // HTML5 một cách âm thầm (từng xảy ra với 3 select Tỉnh/Huyện/Xã bị ẩn bằng CSS).

        // 0. Validate Họ Tên
        const nameEl = document.getElementById('name');
        if (!nameEl || !nameEl.value.trim()) {
            App.showResultModal('error', 'Thiếu thông tin', 'Vui lòng nhập Họ Tên.');
            nameEl?.focus();
            return;
        }

        // 1. Validate & chuẩn hoá Số Điện Thoại (kiểm tra trước vì nằm phía trên form)
        // Chấp nhận cả dạng nội địa (0xxxxxxxxx) lẫn quốc tế (84xxxxxxxxx / +84xxxxxxxxx)
        // rồi quy về dạng 0xxxxxxxxx để lưu Google Sheet luôn thống nhất, dễ gọi điện xác nhận đơn.
        const phoneEl = document.getElementById('phone');
        let normalizedPhone = (phoneEl?.value || '').replace(/[\s.\-()]/g, '').trim();
        if (normalizedPhone.startsWith('+84')) {
            normalizedPhone = normalizedPhone.slice(3);
        } else if (normalizedPhone.startsWith('84')) {
            normalizedPhone = normalizedPhone.slice(2);
        }
        if (!normalizedPhone.startsWith('0')) {
            normalizedPhone = '0' + normalizedPhone;
        }

        // Đầu số di động VN hiện hành: 03/05/07/08/09 + đủ 10 số
        // (chặt hơn "0 + 9-10 số bất kỳ" trước đây - kiểu đó lọt cả số vô lý như 0123456789)
        if (!/^0(3|5|7|8|9)\d{8}$/.test(normalizedPhone)) {
            App.showResultModal('error', 'Số điện thoại không hợp lệ', 'Vui lòng nhập đúng số điện thoại Việt Nam. Ví dụ: 0912345678 hoặc +84912345678');
            phoneEl?.focus();
            return;
        }
        if (phoneEl) phoneEl.value = normalizedPhone;

        // 2. Validate Location
        const provinceEl = document.getElementById('province');
        const districtEl = document.getElementById('district');
        const wardEl = document.getElementById('ward');

        if (!provinceEl || !provinceEl.value ||
            !districtEl || !districtEl.value ||
            !wardEl || !wardEl.value) {
            App.showResultModal('error', 'Thiếu thông tin', 'Vui lòng chọn đầy đủ Tỉnh/Thành phố, Quận/Huyện và Phường/Xã.');
            return;
        }

        // 2b. Validate Địa Chỉ Chi Tiết
        const addressEl = document.getElementById('address');
        if (!addressEl || !addressEl.value.trim()) {
            App.showResultModal('error', 'Thiếu thông tin', 'Vui lòng nhập Địa Chỉ Chi Tiết.');
            addressEl?.focus();
            return;
        }

        // 2c. Validate Số Lượng
        const quantityEl = document.getElementById('quantity');
        const quantityNumber = parseInt(quantityEl?.value);
        if (!quantityNumber || quantityNumber < 1) {
            App.showResultModal('error', 'Số lượng không hợp lệ', 'Vui lòng nhập số lượng từ 1 trở lên.');
            quantityEl?.focus();
            return;
        }

        // 3. Prepare Data Payload (matching template fields)
        const selectedProductRadio = document.querySelector('input[name="productOption"]:checked');
        const productName = selectedProductRadio?.dataset.product || '';
        const quantity = quantityNumber;

        // Get display text instead of ID values
        const provinceText = provinceEl.options[provinceEl.selectedIndex]?.text || '';
        const districtText = districtEl.options[districtEl.selectedIndex]?.text || '';
        const wardText = wardEl.options[wardEl.selectedIndex]?.text || '';

        const orderData = {
            name: document.getElementById('name').value,
            phone: normalizedPhone,
            province: provinceText,
            district: districtText,
            ward: wardText,
            address: document.getElementById('address').value,
            note: document.getElementById('note').value || '',
            product: productName,
            quantity: quantity,
            totalPrice: document.getElementById('totalPrice')?.textContent || '',
            eventId: 'order_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7)
        };

        // 4. UI Loading State
        const submitBtn = event.target.querySelector('.submit-btn');
        const originalBtnText = submitBtn?.textContent || 'HOÀN TẤT ĐẶT HÀNG';

        if (submitBtn) {
            submitBtn.textContent = 'Đang gửi...';
            submitBtn.disabled = true;
        }
        App.showLoadingOverlay();

        // 5. Send to Google Sheets using URLSearchParams (matching template)
        fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            body: new URLSearchParams(orderData)
        })
            .then(response => {
                // response.type === 'opaque' xảy ra khi trình duyệt không đọc được response
                // (CORS bị chặn phía Google Apps Script) — trường hợp này không thể kiểm tra
                // status nên vẫn coi là gửi thành công như trước. Khi đọc được response bình
                // thường thì phải kiểm tra response.ok để không báo "thành công" giả khi
                // Apps Script trả lỗi (hết quota, script lỗi, sheet đầy...).
                if (response.type !== 'opaque' && !response.ok) {
                    throw new Error(`Google Script trả về lỗi HTTP ${response.status}`);
                }

                console.log('✅ Order sent to Google Sheets:', orderData);

                App.showResultModal(
                    'success',
                    'Đặt hàng thành công!',
                    'Cảm ơn bạn đã tin tưởng sản phẩm SADU. Mọi thắc mắc xin vui lòng liên hệ fanpage Trứng Gà Thảo Dược SADU để được giải đáp!'
                );

                event.target.reset();
                App.updateTotalPrice();
                App.resetLocationSelectors();

                if (typeof fbq !== 'undefined') {
                    const rawPrice = (orderData.totalPrice || '').replace(/[^\d]/g, '');
                    fbq('track', 'Purchase', {
                        content_name: orderData.product,
                        value: parseFloat(rawPrice) || 0,
                        currency: 'VND'
                    }, { eventID: orderData.eventId });
                }

                App.closeOrderModal();
            })
            .catch(error => {
                console.error('❌ Error sending order:', error);
                App.showResultModal(
                    'error',
                    'Đặt hàng không thành công',
                    'Có lỗi xảy ra khi gửi đơn hàng. Vui lòng thử lại hoặc gọi hotline: 1900 8952. Thông tin bạn vừa nhập vẫn được giữ nguyên trong form.'
                );
            })
            .finally(() => {
                if (submitBtn) {
                    submitBtn.textContent = originalBtnText;
                    submitBtn.disabled = false;
                }
                App.hideLoadingOverlay();
            });
    },

    // ============================================
    // UI INTERACTIONS
    // ============================================
    toggleFaq: (element) => {
        const clickedItem = element.parentElement;
        const isActive = clickedItem.classList.contains('active');

        const allFaqItems = document.querySelectorAll('.faq-item');
        allFaqItems.forEach(item => {
            item.classList.remove('active');
        });

        if (!isActive) {
            clickedItem.classList.add('active');
        }
    },

    toggleMenu: () => {
        const nav = document.querySelector('.nav-menu');
        if (nav) nav.classList.toggle('mobile-active');
    },

    scrollToTop: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    expandFeedbackGallery: () => {
        const wrap = document.getElementById('feedbackMasonryWrap');
        if (wrap) wrap.classList.remove('is-collapsed');

        const loadMoreWrap = document.getElementById('feedbackLoadMoreWrap');
        if (loadMoreWrap) loadMoreWrap.remove();
    },

    // ============================================
    // LOCATION SELECTORS
    // ============================================
    updateDistricts: () => {
        if (typeof updateDistricts === 'function') {
            updateDistricts();
        }
    },

    updateWards: () => {
        if (typeof updateWards === 'function') {
            updateWards();
        }
    },

    resetLocationSelectors: () => {
        const provinceEl = document.getElementById('province');
        const districtEl = document.getElementById('district');
        const wardEl = document.getElementById('ward');

        if (provinceEl) provinceEl.value = '';
        if (districtEl) {
            districtEl.value = '';
            districtEl.disabled = true;
        }
        if (wardEl) {
            wardEl.value = '';
            wardEl.disabled = true;
        }

        const searchableSelects = document.querySelectorAll('.searchable-select');
        searchableSelects.forEach(select => {
            const label = select.querySelector('.searchable-select-label');
            if (label) {
                const target = select.dataset.target;
                if (target === 'province') {
                    label.textContent = '-- Chọn Tỉnh/Thành Phố --';
                } else if (target === 'district') {
                    label.textContent = '-- Chọn Quận/Huyện --';
                    select.classList.add('is-disabled');
                } else if (target === 'ward') {
                    label.textContent = '-- Chọn Phường/Xã --';
                    select.classList.add('is-disabled');
                }
            }
        });
    },

    // ============================================
    // CAROUSEL FUNCTIONALITY
    // ============================================
    initCarousel: (mainImageId, images) => {
        const mainImage = document.getElementById(mainImageId);
        const carousel = mainImage?.closest('.comparison-carousel, .gift-carousel-wrap');
        if (!mainImage || !images?.length) return;

        const prevBtn = carousel?.querySelector('.carousel-prev');
        const nextBtn = carousel?.querySelector('.carousel-next');

        let currentIndex = 0;
        let autoPlayTimer;

        const startAutoPlay = () => {
            clearInterval(autoPlayTimer);
            autoPlayTimer = setInterval(() => {
                updateCarousel((currentIndex + 1) % images.length);
            }, 5000);
        };

        const updateCarousel = (index) => {
            const img = images[index];
            if (img?.src) {
                mainImage.classList.add('fade-out');
                setTimeout(() => {
                    mainImage.src = img.src;
                    mainImage.alt = img.alt || '';
                    mainImage.classList.remove('fade-out');
                }, 250);
            }
            currentIndex = index;
            startAutoPlay();
        };

        prevBtn?.addEventListener('click', () => {
            updateCarousel((currentIndex - 1 + images.length) % images.length);
        });

        nextBtn?.addEventListener('click', () => {
            updateCarousel((currentIndex + 1) % images.length);
        });

        startAutoPlay();
    },

    // ============================================
    // SPECIAL PROGRAM COUNTDOWN TIMER
    // ============================================
    initSpecialCountdown: () => {
        // Get countdown end date from siteData
        const { specialProgram } = siteData;
        if (!specialProgram || !specialProgram.countdown || !specialProgram.countdown.endDate) {
            console.warn('⚠️ Special program countdown end date not configured');
            return;
        }

        // Set countdown target from data.js
        const countdownDate = new Date(specialProgram.countdown.endDate).getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            if (distance < 0) {
                const countdownEl = document.getElementById('specialCountdown');
                if (countdownEl) {
                    countdownEl.innerHTML = '<p class="countdown-expired">Chương trình đã kết thúc!</p>';
                }
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            const daysEl = document.getElementById('days');
            const hoursEl = document.getElementById('hours');
            const minutesEl = document.getElementById('minutes');
            const secondsEl = document.getElementById('seconds');

            if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
            if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
            if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
            if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
        };

        updateCountdown();
        setInterval(updateCountdown, 1000);
    },

    // ============================================
    // PRODUCT SECTION COUNTDOWN (resets daily at midnight)
    // ============================================
    startProductCountdown: () => {
        const update = () => {
            const now = new Date();
            const midnight = new Date(now);
            midnight.setHours(23, 59, 59, 999);
            const distance = midnight - now;

            const hours = Math.floor(distance / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            const hoursEl = document.getElementById('product-countdown-hours');
            const minutesEl = document.getElementById('product-countdown-minutes');
            const secondsEl = document.getElementById('product-countdown-seconds');

            if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
            if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
            if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
        };

        update();
        setInterval(update, 1000);
    },

    // ============================================
    // EVENT LISTENERS SETUP
    // ============================================
    // ============================================
    // SCROLL REVEAL (hiệu ứng hiện dần khi cuộn tới từng section)
    // ============================================
    initScrollReveal: () => {
        // Hero luôn hiện ngay (đã có animation riêng), chỉ áp dụng reveal
        // cho các section bên dưới để tránh tải/animate toàn bộ trang cùng lúc lúc load.
        const sectionIds = [
            'benefits', 'herbal-story', 'statistics', 'why', 'packaging',
            'value-justification', 'certificates', 'special-program',
            'products', 'gift-carousel', 'customer-feedback-gallery',
            'faq', 'final-cta'
        ];
        const sections = sectionIds
            .map(id => document.getElementById(id))
            .filter(Boolean);

        if (!sections.length) return;

        if (!('IntersectionObserver' in window)) {
            sections.forEach(el => el.classList.add('reveal-section', 'is-visible'));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -10% 0px' });

        sections.forEach(el => {
            el.classList.add('reveal-section');
            observer.observe(el);
        });
    },

    setupEventListeners: () => {
        // Close modal when clicking outside
        const orderModal = document.getElementById('orderModal');
        if (orderModal) {
            orderModal.addEventListener('click', (e) => {
                if (e.target === orderModal) {
                    App.closeOrderModal();
                }
            });
        }

        // Close searchable selects when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.searchable-select')) {
                closeAllSearchableSelects();
            }
        });

        // Update total price when quantity changes
        const quantityInput = document.getElementById('quantity');
        if (quantityInput) {
            quantityInput.addEventListener('input', App.updateTotalPrice);
            quantityInput.addEventListener('change', App.updateTotalPrice);
        }

        // Mobile menu close on link click
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                const nav = document.querySelector('.nav-menu');
                if (nav) nav.classList.remove('mobile-active');
            });
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                App.closeOrderModal();
            }
        });

        // Transparent header on scroll
        const siteHeader = document.querySelector('header');
        if (siteHeader) {
            const updateHeaderBg = () => {
                siteHeader.classList.toggle('scrolled', window.scrollY > 50);
            };
            window.addEventListener('scroll', updateHeaderBg);
            updateHeaderBg();
        }

        // Scroll to top button visibility
        const scrollTopBtn = document.getElementById('scrollTop');
        if (scrollTopBtn) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    scrollTopBtn.classList.add('show');
                } else {
                    scrollTopBtn.classList.remove('show');
                }
            });
        }

        // Scroll progress bar
        const scrollProgressBar = document.getElementById('scrollProgress');
        if (scrollProgressBar) {
            let ticking = false;
            const updateScrollProgress = () => {
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
                scrollProgressBar.style.width = `${progress}%`;
                ticking = false;
            };
            window.addEventListener('scroll', () => {
                if (!ticking) {
                    requestAnimationFrame(updateScrollProgress);
                    ticking = true;
                }
            });
            updateScrollProgress();
        }
    },

    // ============================================
    // MAIN INITIALIZATION
    // ============================================
    init: () => {
        console.log('🚀 SADU Landing Page Initializing...');

        if (typeof Components !== 'undefined') {
            Components.init();
            console.log('✅ Components rendered');
        }

        App.setupEventListeners();

        setTimeout(App.showCustomerAlert, 2000);

        console.log('🎉 SADU Landing Page ready!');
    }
};

// Run application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 SADU Landing Page Initializing...');

    // Initialize location selectors first (must complete before other components)
    if (typeof loadLocations === 'function') {
        loadLocations().then(() => {
            if (typeof initSearchableSelects === 'function') {
                initSearchableSelects();
                console.log('✅ Location selectors initialized');
            }

            // Initialize other components AFTER locations are ready
            if (typeof Components !== 'undefined') {
                Components.init();
                console.log('✅ Components rendered');
            }

            if (typeof App !== 'undefined') {
                App.setupEventListeners();
                App.initScrollReveal();
                App.startProductCountdown();
                setTimeout(App.showCustomerAlert, 2000);
                console.log('🎉 SADU Landing Page ready!');
            }
        }).catch(err => {
            console.error('❌ Error loading locations:', err);
            // Still initialize app even if locations fail (will use fallback data)
            if (typeof initSearchableSelects === 'function') {
                initSearchableSelects();
                console.log('⚠️ Location selectors initialized with fallback data');
            }

            if (typeof Components !== 'undefined') {
                Components.init();
                console.log('✅ Components rendered');
            }

            if (typeof App !== 'undefined') {
                App.setupEventListeners();
                App.initScrollReveal();
                App.startProductCountdown();
                setTimeout(App.showCustomerAlert, 2000);
                console.log('🎉 SADU Landing Page ready (with fallback)!');
            }
        });
    } else {
        // Fallback if loadLocations is not available
        console.warn('⚠️ loadLocations not found, initializing without location data');
        if (typeof Components !== 'undefined') {
            Components.init();
            console.log('✅ Components rendered');
        }

        if (typeof App !== 'undefined') {
            App.setupEventListeners();
            App.initScrollReveal();
            App.startProductCountdown();
            setTimeout(App.showCustomerAlert, 2000);
            console.log('🎉 SADU Landing Page ready!');
        }
    }
});
