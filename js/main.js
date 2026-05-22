/* ============================================
   SADU LANDING PAGE - MAIN APPLICATION
   ============================================ */

// CONFIGURATION
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby7n1vHD2AGcUPTY67hg5chHKTSkKcMPQD4abO0QdDHMQ3-svokYSQ9Hid7cDXqSw/exec';

const App = {
    
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

        const orderData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            province: provinceEl.value,
            district: districtEl.value,
            ward: wardEl.value,
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
    },

    setupEventListeners: () => {
        window.addEventListener('scroll', () => {
            const scrollTop = document.getElementById('scrollTop');
            if (scrollTop) {
                if (window.scrollY > 300) {
                    scrollTop.classList.add('show');
                } else {
                    scrollTop.classList.remove('show');
                }
            }
        });

        document.addEventListener('click', (e) => {
            const modal = document.getElementById('orderModal');
            if (modal && e.target === modal) {
                App.closeOrderModal();
            }
        });
    }
};

// Run application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    if (typeof loadLocations === 'function') {
        loadLocations().then(() => {
            if (typeof initSearchableSelects === 'function') {
                initSearchableSelects();
                console.log('✅ Location selectors initialized');
            }
        }).catch(err => {
            console.error('❌ Error loading locations:', err);
        });
    }
    
    App.init();
});
