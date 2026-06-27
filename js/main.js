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
        document.getElementById('productName').textContent = customer.product;

        alertEl.classList.remove('hide');
        setTimeout(() => alertEl.classList.add('show'), 10);

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
        }
    },

    closeOrderModal: () => {
        const modal = document.getElementById('orderModal');
        if (modal) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    },

    // ============================================
    // TOTAL PRICE
    // ============================================
    updateTotalPrice: () => {
        const selectedProductRadio = document.querySelector('input[name="productOption"]:checked');
        const productPrice = parseInt(selectedProductRadio?.dataset.price) || 0;
        const quantity = parseInt(document.getElementById('quantity').value) || 1;
        const totalPrice = productPrice * quantity;
        const totalPriceEl = document.getElementById('totalPrice');

        if (totalPriceEl) {
            totalPriceEl.textContent = totalPrice.toLocaleString('vi-VN') + 'đ';
        }
    },

    // ============================================
    // SUBMIT ORDER
    // ============================================
    submitOrder: (event) => {
        event.preventDefault();

        // 1. Validate Location
        const provinceEl = document.getElementById('province');
        const districtEl = document.getElementById('district');
        const wardEl = document.getElementById('ward');

        if (!provinceEl || !provinceEl.value ||
            !districtEl || !districtEl.value ||
            !wardEl || !wardEl.value) {
            alert('Vui lòng chọn đầy đủ Tỉnh/Thành phố, Quận/Huyện và Phường/Xã.');
            return;
        }

        // 2. Prepare Data Payload (matching template fields)
        const selectedProductRadio = document.querySelector('input[name="productOption"]:checked');
        const productName = selectedProductRadio?.dataset.product || '';
        const quantity = document.getElementById('quantity').value || '1';

        // Get display text instead of ID values
        const provinceText = provinceEl.options[provinceEl.selectedIndex]?.text || '';
        const districtText = districtEl.options[districtEl.selectedIndex]?.text || '';
        const wardText = wardEl.options[wardEl.selectedIndex]?.text || '';

        const orderData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            province: provinceText,
            district: districtText,
            ward: wardText,
            address: document.getElementById('address').value,
            note: document.getElementById('note').value || '',
            product: productName,
            quantity: quantity,
            totalPrice: document.getElementById('totalPrice')?.textContent || ''
        };

        // 3. UI Loading State
        const submitBtn = event.target.querySelector('.submit-btn');
        const originalBtnText = submitBtn?.textContent || 'HOÀN TẤT ĐẶT HÀNG';
        
        if (submitBtn) {
            submitBtn.textContent = 'Đang gửi...';
            submitBtn.disabled = true;
        }

        // 4. Send to Google Sheets using URLSearchParams (matching template)
        fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            body: new URLSearchParams(orderData)
        })
        .then(response => {
            console.log('✅ Order sent to Google Sheets:', orderData);
            
            alert('🎉 Đặt hàng thành công!\n\nCảm ơn bạn đã tin tưởng sản phẩm SADU.\nChúng tôi sẽ liên hệ xác nhận đơn hàng trong 24 giờ.');
            
            event.target.reset();
            App.updateTotalPrice();
            App.resetLocationSelectors();
            
            if (typeof fbq !== 'undefined') {
                const phone = orderData.phone.replace(/\D/g, '');
                fbq('init', '1668129411185900', { ph: phone });
                fbq('track', 'Lead', {
                    content_name: orderData.product,
                    value: orderData.totalPrice,
                    currency: 'VND'
                });
            }
            
            App.closeOrderModal();
        })
        .catch(error => {
            console.error('❌ Error sending order:', error);
            alert('⚠️ Có lỗi xảy ra khi đặt hàng.\nVui lòng thử lại hoặc gọi hotline: 1900 8952');
        })
        .finally(() => {
            if (submitBtn) {
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            }
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
    initCarousel: (mainImageId, thumbsSelector) => {
        const mainImage = document.getElementById(mainImageId);
        const carousel = mainImage?.closest('.comparison-carousel');
        if (!carousel) return;

        const thumbs = Array.from(carousel.querySelectorAll(`${thumbsSelector} .thumb`));
        const prevBtn = carousel.querySelector('.carousel-prev');
        const nextBtn = carousel.querySelector('.carousel-next');

        if (!mainImage || !thumbs.length) return;

        let currentIndex = thumbs.findIndex(thumb => thumb.classList.contains('active'));
        if (currentIndex === -1) currentIndex = 0;
        let autoPlayTimer;

        const startAutoPlay = () => {
            clearInterval(autoPlayTimer);
            autoPlayTimer = setInterval(() => {
                const nextIndex = (currentIndex + 1) % thumbs.length;
                updateCarousel(nextIndex);
            }, 5000);
        };

        const updateCarousel = (index) => {
            const thumb = thumbs[index];
            const newSrc = thumb.getAttribute('data-src');
            const newAlt = thumb.querySelector('img')?.getAttribute('alt') || 'Hình ảnh';
            
            if (newSrc) {
                mainImage.classList.add('fade-out');
                setTimeout(() => {
                    mainImage.src = newSrc;
                    mainImage.alt = newAlt;
                    mainImage.classList.remove('fade-out');
                }, 250);
            }
            
            thumbs.forEach(item => item.classList.remove('active'));
            thumb.classList.add('active');
            currentIndex = index;
            startAutoPlay();
        };

        thumbs.forEach((thumb, index) => {
            thumb.addEventListener('click', () => updateCarousel(index));
        });

        prevBtn?.addEventListener('click', () => {
            const nextIndex = (currentIndex - 1 + thumbs.length) % thumbs.length;
            updateCarousel(nextIndex);
        });

        nextBtn?.addEventListener('click', () => {
            const nextIndex = (currentIndex + 1) % thumbs.length;
            updateCarousel(nextIndex);
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
    // EVENT LISTENERS SETUP
    // ============================================
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
            setTimeout(App.showCustomerAlert, 2000);
            console.log('🎉 SADU Landing Page ready!');
        }
    }
});
