
// Countdown Timer
function updateCountdown() {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 3);

    function tick() {
        const now = new Date();
        const diff = endDate - now;

        if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            document.getElementById('days').textContent = String(days).padStart(2, '0');
            document.getElementById('hours').textContent = String(hours).padStart(2, '0');
            document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
            document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        }
    }

    tick();
    setInterval(tick, 1000);
}

// Modal Functions
function openOrderModal() {
    document.getElementById('orderModal').classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeOrderModal() {
    document.getElementById('orderModal').classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Add to Cart
function addToCart(product, price) {
    document.getElementById('productSelect').value = product + '|' + price;
    updateTotalPrice();
    openOrderModal();
}

// Update Total Price
document.getElementById('productSelect').addEventListener('change', updateTotalPrice);
document.getElementById('quantity').addEventListener('change', updateTotalPrice);

function updateTotalPrice() {
    const select = document.getElementById('productSelect');
    const quantity = parseInt(document.getElementById('quantity').value) || 1;

    if (select.value) {
        const [product, price] = select.value.split('|');
        const total = parseInt(price) * quantity;
        document.getElementById('totalPrice').textContent = total.toLocaleString('vi-VN') + 'đ';
    }
}

// Load Locations Data
let locationsData = {};

async function loadLocations() {
    try {
        const response = await fetch('vietnam-locations.json');
        locationsData = await response.json();
        populateProvinces();
    } catch (error) {
        console.error('Error loading locations:', error);
        // Fallback: Use inline data if file not found
        loadInlineLocations();
    }
}

function loadInlineLocations() {
    // Fallback data if JSON file not accessible
    locationsData = {
        "provinces": [
            {
                "id": "01",
                "name": "Hà Nội",
                "districts": [
                    {
                        "id": "00004",
                        "name": "Ba Đình",
                        "wards": [
                            {
                                "id": "00004",
                                "name": "Phường Ba Đình"
                            }
                        ]
                    },
                    {
                        "id": "00008",
                        "name": "Ngọc Hà",
                        "wards": [
                            {
                                "id": "00008",
                                "name": "Phường Ngọc Hà"
                            }
                        ]
                    },
                    {
                        "id": "00025",
                        "name": "Giảng Võ",
                        "wards": [
                            {
                                "id": "00025",
                                "name": "Phường Giảng Võ"
                            }
                        ]
                    },
                    {
                        "id": "00070",
                        "name": "Hoàn Kiếm",
                        "wards": [
                            {
                                "id": "00070",
                                "name": "Phường Hoàn Kiếm"
                            }
                        ]
                    },
                    {
                        "id": "00082",
                        "name": "Cửa Nam",
                        "wards": [
                            {
                                "id": "00082",
                                "name": "Phường Cửa Nam"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "04",
                "name": "Cao Bằng",
                "districts": [
                    {
                        "id": "01273",
                        "name": "Thục Phán",
                        "wards": [
                            {
                                "id": "01273",
                                "name": "Phường Thục Phán"
                            }
                        ]
                    },
                    {
                        "id": "01279",
                        "name": "Nùng Trí Cao",
                        "wards": [
                            {
                                "id": "01279",
                                "name": "Phường Nùng Trí Cao"
                            }
                        ]
                    },
                    {
                        "id": "01288",
                        "name": "Tân Giang",
                        "wards": [
                            {
                                "id": "01288",
                                "name": "Phường Tân Giang"
                            }
                        ]
                    },
                    {
                        "id": "01290",
                        "name": "Bảo Lâm",
                        "wards": [
                            {
                                "id": "01290",
                                "name": "Xã Bảo Lâm"
                            }
                        ]
                    },
                    {
                        "id": "01294",
                        "name": "Lý Bôn",
                        "wards": [
                            {
                                "id": "01294",
                                "name": "Xã Lý Bôn"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "08",
                "name": "Tuyên Quang",
                "districts": [
                    {
                        "id": "00691",
                        "name": "Hà Giang 2",
                        "wards": [
                            {
                                "id": "00691",
                                "name": "Phường Hà Giang 2"
                            }
                        ]
                    },
                    {
                        "id": "00694",
                        "name": "Hà Giang 1",
                        "wards": [
                            {
                                "id": "00694",
                                "name": "Phường Hà Giang 1"
                            }
                        ]
                    },
                    {
                        "id": "02212",
                        "name": "Nông Tiến",
                        "wards": [
                            {
                                "id": "02212",
                                "name": "Phường Nông Tiến"
                            }
                        ]
                    },
                    {
                        "id": "02215",
                        "name": "Minh Xuân",
                        "wards": [
                            {
                                "id": "02215",
                                "name": "Phường Minh Xuân"
                            }
                        ]
                    },
                    {
                        "id": "02509",
                        "name": "Mỹ Lâm",
                        "wards": [
                            {
                                "id": "02509",
                                "name": "Phường Mỹ Lâm"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "11",
                "name": "Điện Biên",
                "districts": [
                    {
                        "id": "03127",
                        "name": "Điện Biên Phủ",
                        "wards": [
                            {
                                "id": "03127",
                                "name": "Phường Điện Biên Phủ"
                            }
                        ]
                    },
                    {
                        "id": "03151",
                        "name": "Mường Lay",
                        "wards": [
                            {
                                "id": "03151",
                                "name": "Phường Mường Lay"
                            }
                        ]
                    },
                    {
                        "id": "03334",
                        "name": "Mường Thanh",
                        "wards": [
                            {
                                "id": "03334",
                                "name": "Phường Mường Thanh"
                            }
                        ]
                    },
                    {
                        "id": "03158",
                        "name": "Sín Thầu",
                        "wards": [
                            {
                                "id": "03158",
                                "name": "Xã Sín Thầu"
                            }
                        ]
                    },
                    {
                        "id": "03160",
                        "name": "Mường Nhé",
                        "wards": [
                            {
                                "id": "03160",
                                "name": "Xã Mường Nhé"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "12",
                "name": "Lai Châu",
                "districts": [
                    {
                        "id": "03388",
                        "name": "Đoàn Kết",
                        "wards": [
                            {
                                "id": "03388",
                                "name": "Phường Đoàn Kết"
                            }
                        ]
                    },
                    {
                        "id": "03408",
                        "name": "Tân Phong",
                        "wards": [
                            {
                                "id": "03408",
                                "name": "Phường Tân Phong"
                            }
                        ]
                    },
                    {
                        "id": "03390",
                        "name": "Bình Lư",
                        "wards": [
                            {
                                "id": "03390",
                                "name": "Xã Bình Lư"
                            }
                        ]
                    },
                    {
                        "id": "03394",
                        "name": "Sin Suối Hồ",
                        "wards": [
                            {
                                "id": "03394",
                                "name": "Xã Sin Suối Hồ"
                            }
                        ]
                    },
                    {
                        "id": "03405",
                        "name": "Tả Lèng",
                        "wards": [
                            {
                                "id": "03405",
                                "name": "Xã Tả Lèng"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "14",
                "name": "Sơn La",
                "districts": [
                    {
                        "id": "03646",
                        "name": "Tô Hiệu",
                        "wards": [
                            {
                                "id": "03646",
                                "name": "Phường Tô Hiệu"
                            }
                        ]
                    },
                    {
                        "id": "03664",
                        "name": "Chiềng An",
                        "wards": [
                            {
                                "id": "03664",
                                "name": "Phường Chiềng An"
                            }
                        ]
                    },
                    {
                        "id": "03670",
                        "name": "Chiềng Cơi",
                        "wards": [
                            {
                                "id": "03670",
                                "name": "Phường Chiềng Cơi"
                            }
                        ]
                    },
                    {
                        "id": "03679",
                        "name": "Chiềng Sinh",
                        "wards": [
                            {
                                "id": "03679",
                                "name": "Phường Chiềng Sinh"
                            }
                        ]
                    },
                    {
                        "id": "03979",
                        "name": "Mộc Sơn",
                        "wards": [
                            {
                                "id": "03979",
                                "name": "Phường Mộc Sơn"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "15",
                "name": "Lào Cai",
                "districts": [
                    {
                        "id": "02647",
                        "name": "Lào Cai",
                        "wards": [
                            {
                                "id": "02647",
                                "name": "Phường Lào Cai"
                            }
                        ]
                    },
                    {
                        "id": "02671",
                        "name": "Cam Đường",
                        "wards": [
                            {
                                "id": "02671",
                                "name": "Phường Cam Đường"
                            }
                        ]
                    },
                    {
                        "id": "03006",
                        "name": "Sa Pa",
                        "wards": [
                            {
                                "id": "03006",
                                "name": "Phường Sa Pa"
                            }
                        ]
                    },
                    {
                        "id": "04252",
                        "name": "Yên Bái",
                        "wards": [
                            {
                                "id": "04252",
                                "name": "Phường Yên Bái"
                            }
                        ]
                    },
                    {
                        "id": "04273",
                        "name": "Nam Cường",
                        "wards": [
                            {
                                "id": "04273",
                                "name": "Phường Nam Cường"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "19",
                "name": "Thái Nguyên",
                "districts": [
                    {
                        "id": "01840",
                        "name": "Đức Xuân",
                        "wards": [
                            {
                                "id": "01840",
                                "name": "Phường Đức Xuân"
                            }
                        ]
                    },
                    {
                        "id": "01843",
                        "name": "Bắc Kạn",
                        "wards": [
                            {
                                "id": "01843",
                                "name": "Phường Bắc Kạn"
                            }
                        ]
                    },
                    {
                        "id": "05443",
                        "name": "Phan Đình Phùng",
                        "wards": [
                            {
                                "id": "05443",
                                "name": "Phường Phan Đình Phùng"
                            }
                        ]
                    },
                    {
                        "id": "05455",
                        "name": "Quyết Thắng",
                        "wards": [
                            {
                                "id": "05455",
                                "name": "Phường Quyết Thắng"
                            }
                        ]
                    },
                    {
                        "id": "05467",
                        "name": "Gia Sàng",
                        "wards": [
                            {
                                "id": "05467",
                                "name": "Phường Gia Sàng"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "20",
                "name": "Lạng Sơn",
                "districts": [
                    {
                        "id": "05977",
                        "name": "Đông Kinh",
                        "wards": [
                            {
                                "id": "05977",
                                "name": "Phường Đông Kinh"
                            }
                        ]
                    },
                    {
                        "id": "05983",
                        "name": "Lương Văn Tri",
                        "wards": [
                            {
                                "id": "05983",
                                "name": "Phường Lương Văn Tri"
                            }
                        ]
                    },
                    {
                        "id": "05986",
                        "name": "Tam Thanh",
                        "wards": [
                            {
                                "id": "05986",
                                "name": "Phường Tam Thanh"
                            }
                        ]
                    },
                    {
                        "id": "06187",
                        "name": "Kỳ Lừa",
                        "wards": [
                            {
                                "id": "06187",
                                "name": "Phường Kỳ Lừa"
                            }
                        ]
                    },
                    {
                        "id": "06001",
                        "name": "Đoàn Kết",
                        "wards": [
                            {
                                "id": "06001",
                                "name": "Xã Đoàn Kết"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "22",
                "name": "Quảng Ninh",
                "districts": [
                    {
                        "id": "06652",
                        "name": "Hà Tu",
                        "wards": [
                            {
                                "id": "06652",
                                "name": "Phường Hà Tu"
                            }
                        ]
                    },
                    {
                        "id": "06658",
                        "name": "Cao Xanh",
                        "wards": [
                            {
                                "id": "06658",
                                "name": "Phường Cao Xanh"
                            }
                        ]
                    },
                    {
                        "id": "06661",
                        "name": "Việt Hưng",
                        "wards": [
                            {
                                "id": "06661",
                                "name": "Phường Việt Hưng"
                            }
                        ]
                    },
                    {
                        "id": "06673",
                        "name": "Bãi Cháy",
                        "wards": [
                            {
                                "id": "06673",
                                "name": "Phường Bãi Cháy"
                            }
                        ]
                    },
                    {
                        "id": "06676",
                        "name": "Hà Lầm",
                        "wards": [
                            {
                                "id": "06676",
                                "name": "Phường Hà Lầm"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "24",
                "name": "Bắc Ninh",
                "districts": [
                    {
                        "id": "07420",
                        "name": "Mỹ Thái",
                        "wards": [
                            {
                                "id": "07420",
                                "name": "Xã Mỹ Thái"
                            }
                        ]
                    },
                    {
                        "id": "07210",
                        "name": "Bắc Giang",
                        "wards": [
                            {
                                "id": "07210",
                                "name": "Phường Bắc Giang"
                            }
                        ]
                    },
                    {
                        "id": "07228",
                        "name": "Đa Mai",
                        "wards": [
                            {
                                "id": "07228",
                                "name": "Phường Đa Mai"
                            }
                        ]
                    },
                    {
                        "id": "07525",
                        "name": "Chũ",
                        "wards": [
                            {
                                "id": "07525",
                                "name": "Phường Chũ"
                            }
                        ]
                    },
                    {
                        "id": "07612",
                        "name": "Phượng Sơn",
                        "wards": [
                            {
                                "id": "07612",
                                "name": "Phường Phượng Sơn"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "25",
                "name": "Phú Thọ",
                "districts": [
                    {
                        "id": "04978",
                        "name": "Kim Bôi",
                        "wards": [
                            {
                                "id": "04978",
                                "name": "Xã Kim Bôi"
                            }
                        ]
                    },
                    {
                        "id": "04792",
                        "name": "Tân Hòa",
                        "wards": [
                            {
                                "id": "04792",
                                "name": "Phường Tân Hòa"
                            }
                        ]
                    },
                    {
                        "id": "04795",
                        "name": "Hòa Bình",
                        "wards": [
                            {
                                "id": "04795",
                                "name": "Phường Hòa Bình"
                            }
                        ]
                    },
                    {
                        "id": "04828",
                        "name": "Thống Nhất",
                        "wards": [
                            {
                                "id": "04828",
                                "name": "Phường Thống Nhất"
                            }
                        ]
                    },
                    {
                        "id": "04894",
                        "name": "Kỳ Sơn",
                        "wards": [
                            {
                                "id": "04894",
                                "name": "Phường Kỳ Sơn"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "31",
                "name": "Hải Phòng",
                "districts": [
                    {
                        "id": "10507",
                        "name": "Thành Đông",
                        "wards": [
                            {
                                "id": "10507",
                                "name": "Phường Thành Đông"
                            }
                        ]
                    },
                    {
                        "id": "10525",
                        "name": "Hải Dương",
                        "wards": [
                            {
                                "id": "10525",
                                "name": "Phường Hải Dương"
                            }
                        ]
                    },
                    {
                        "id": "10532",
                        "name": "Lê Thanh Nghị",
                        "wards": [
                            {
                                "id": "10532",
                                "name": "Phường Lê Thanh Nghị"
                            }
                        ]
                    },
                    {
                        "id": "10537",
                        "name": "Tân Hưng",
                        "wards": [
                            {
                                "id": "10537",
                                "name": "Phường Tân Hưng"
                            }
                        ]
                    },
                    {
                        "id": "10543",
                        "name": "Việt Hòa",
                        "wards": [
                            {
                                "id": "10543",
                                "name": "Phường Việt Hòa"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "33",
                "name": "Hưng Yên",
                "districts": [
                    {
                        "id": "11953",
                        "name": "Phố Hiến",
                        "wards": [
                            {
                                "id": "11953",
                                "name": "Phường Phố Hiến"
                            }
                        ]
                    },
                    {
                        "id": "11980",
                        "name": "Hồng Châu",
                        "wards": [
                            {
                                "id": "11980",
                                "name": "Phường Hồng Châu"
                            }
                        ]
                    },
                    {
                        "id": "11983",
                        "name": "Sơn Nam",
                        "wards": [
                            {
                                "id": "11983",
                                "name": "Phường Sơn Nam"
                            }
                        ]
                    },
                    {
                        "id": "12103",
                        "name": "Mỹ Hào",
                        "wards": [
                            {
                                "id": "12103",
                                "name": "Phường Mỹ Hào"
                            }
                        ]
                    },
                    {
                        "id": "12127",
                        "name": "Thượng Hồng",
                        "wards": [
                            {
                                "id": "12127",
                                "name": "Phường Thượng Hồng"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "37",
                "name": "Ninh Bình",
                "districts": [
                    {
                        "id": "13285",
                        "name": "Phủ Lý",
                        "wards": [
                            {
                                "id": "13285",
                                "name": "Phường Phủ Lý"
                            }
                        ]
                    },
                    {
                        "id": "13291",
                        "name": "Phù Vân",
                        "wards": [
                            {
                                "id": "13291",
                                "name": "Phường Phù Vân"
                            }
                        ]
                    },
                    {
                        "id": "13318",
                        "name": "Châu Sơn",
                        "wards": [
                            {
                                "id": "13318",
                                "name": "Phường Châu Sơn"
                            }
                        ]
                    },
                    {
                        "id": "13324",
                        "name": "Duy Tiên",
                        "wards": [
                            {
                                "id": "13324",
                                "name": "Phường Duy Tiên"
                            }
                        ]
                    },
                    {
                        "id": "13330",
                        "name": "Duy Tân",
                        "wards": [
                            {
                                "id": "13330",
                                "name": "Phường Duy Tân"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "38",
                "name": "Thanh Hóa",
                "districts": [
                    {
                        "id": "14758",
                        "name": "Hàm Rồng",
                        "wards": [
                            {
                                "id": "14758",
                                "name": "Phường Hàm Rồng"
                            }
                        ]
                    },
                    {
                        "id": "14797",
                        "name": "Hạc Thành",
                        "wards": [
                            {
                                "id": "14797",
                                "name": "Phường Hạc Thành"
                            }
                        ]
                    },
                    {
                        "id": "14812",
                        "name": "Bỉm Sơn",
                        "wards": [
                            {
                                "id": "14812",
                                "name": "Phường Bỉm Sơn"
                            }
                        ]
                    },
                    {
                        "id": "14818",
                        "name": "Quang Trung",
                        "wards": [
                            {
                                "id": "14818",
                                "name": "Phường Quang Trung"
                            }
                        ]
                    },
                    {
                        "id": "15853",
                        "name": "Đông Tiến",
                        "wards": [
                            {
                                "id": "15853",
                                "name": "Phường Đông Tiến"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "40",
                "name": "Nghệ An",
                "districts": [
                    {
                        "id": "16681",
                        "name": "Thành Vinh",
                        "wards": [
                            {
                                "id": "16681",
                                "name": "Phường Thành Vinh"
                            }
                        ]
                    },
                    {
                        "id": "16690",
                        "name": "Trường Vinh",
                        "wards": [
                            {
                                "id": "16690",
                                "name": "Phường Trường Vinh"
                            }
                        ]
                    },
                    {
                        "id": "16702",
                        "name": "Vinh Phú",
                        "wards": [
                            {
                                "id": "16702",
                                "name": "Phường Vinh Phú"
                            }
                        ]
                    },
                    {
                        "id": "16708",
                        "name": "Vinh Lộc",
                        "wards": [
                            {
                                "id": "16708",
                                "name": "Phường Vinh Lộc"
                            }
                        ]
                    },
                    {
                        "id": "16732",
                        "name": "Cửa Lò",
                        "wards": [
                            {
                                "id": "16732",
                                "name": "Phường Cửa Lò"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "42",
                "name": "Hà Tĩnh",
                "districts": [
                    {
                        "id": "18073",
                        "name": "Thành Sen",
                        "wards": [
                            {
                                "id": "18073",
                                "name": "Phường Thành Sen"
                            }
                        ]
                    },
                    {
                        "id": "18100",
                        "name": "Trần Phú",
                        "wards": [
                            {
                                "id": "18100",
                                "name": "Phường Trần Phú"
                            }
                        ]
                    },
                    {
                        "id": "18115",
                        "name": "Bắc Hồng Lĩnh",
                        "wards": [
                            {
                                "id": "18115",
                                "name": "Phường Bắc Hồng Lĩnh"
                            }
                        ]
                    },
                    {
                        "id": "18118",
                        "name": "Nam Hồng Lĩnh",
                        "wards": [
                            {
                                "id": "18118",
                                "name": "Phường Nam Hồng Lĩnh"
                            }
                        ]
                    },
                    {
                        "id": "18652",
                        "name": "Hà Huy Tập",
                        "wards": [
                            {
                                "id": "18652",
                                "name": "Phường Hà Huy Tập"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "44",
                "name": "Quảng Trị",
                "districts": [
                    {
                        "id": "18859",
                        "name": "Đồng Thuận",
                        "wards": [
                            {
                                "id": "18859",
                                "name": "Phường Đồng Thuận"
                            }
                        ]
                    },
                    {
                        "id": "18871",
                        "name": "Đồng Sơn",
                        "wards": [
                            {
                                "id": "18871",
                                "name": "Phường Đồng Sơn"
                            }
                        ]
                    },
                    {
                        "id": "18880",
                        "name": "Đồng Hới",
                        "wards": [
                            {
                                "id": "18880",
                                "name": "Phường Đồng Hới"
                            }
                        ]
                    },
                    {
                        "id": "19009",
                        "name": "Ba Đồn",
                        "wards": [
                            {
                                "id": "19009",
                                "name": "Phường Ba Đồn"
                            }
                        ]
                    },
                    {
                        "id": "19066",
                        "name": "Bắc Gianh",
                        "wards": [
                            {
                                "id": "19066",
                                "name": "Phường Bắc Gianh"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "46",
                "name": "Huế",
                "districts": [
                    {
                        "id": "19753",
                        "name": "Phú Xuân",
                        "wards": [
                            {
                                "id": "19753",
                                "name": "Phường Phú Xuân"
                            }
                        ]
                    },
                    {
                        "id": "19774",
                        "name": "Kim Long",
                        "wards": [
                            {
                                "id": "19774",
                                "name": "Phường Kim Long"
                            }
                        ]
                    },
                    {
                        "id": "19777",
                        "name": "Vỹ Dạ",
                        "wards": [
                            {
                                "id": "19777",
                                "name": "Phường Vỹ Dạ"
                            }
                        ]
                    },
                    {
                        "id": "19789",
                        "name": "Thuận Hóa",
                        "wards": [
                            {
                                "id": "19789",
                                "name": "Phường Thuận Hóa"
                            }
                        ]
                    },
                    {
                        "id": "19804",
                        "name": "Hương An",
                        "wards": [
                            {
                                "id": "19804",
                                "name": "Phường Hương An"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "48",
                "name": "Đà Nẵng",
                "districts": [
                    {
                        "id": "20194",
                        "name": "Hải Vân",
                        "wards": [
                            {
                                "id": "20194",
                                "name": "Phường Hải Vân"
                            }
                        ]
                    },
                    {
                        "id": "20197",
                        "name": "Liên Chiểu",
                        "wards": [
                            {
                                "id": "20197",
                                "name": "Phường Liên Chiểu"
                            }
                        ]
                    },
                    {
                        "id": "20200",
                        "name": "Hòa Khánh",
                        "wards": [
                            {
                                "id": "20200",
                                "name": "Phường Hòa Khánh"
                            }
                        ]
                    },
                    {
                        "id": "20209",
                        "name": "Thanh Khê",
                        "wards": [
                            {
                                "id": "20209",
                                "name": "Phường Thanh Khê"
                            }
                        ]
                    },
                    {
                        "id": "20242",
                        "name": "Hải Châu",
                        "wards": [
                            {
                                "id": "20242",
                                "name": "Phường Hải Châu"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "51",
                "name": "Quảng Ngãi",
                "districts": [
                    {
                        "id": "21025",
                        "name": "Cẩm Thành",
                        "wards": [
                            {
                                "id": "21025",
                                "name": "Phường Cẩm Thành"
                            }
                        ]
                    },
                    {
                        "id": "21028",
                        "name": "Nghĩa Lộ",
                        "wards": [
                            {
                                "id": "21028",
                                "name": "Phường Nghĩa Lộ"
                            }
                        ]
                    },
                    {
                        "id": "21172",
                        "name": "Trương Quang Trọng",
                        "wards": [
                            {
                                "id": "21172",
                                "name": "Phường Trương Quang Trọng"
                            }
                        ]
                    },
                    {
                        "id": "21439",
                        "name": "Đức Phổ",
                        "wards": [
                            {
                                "id": "21439",
                                "name": "Phường Đức Phổ"
                            }
                        ]
                    },
                    {
                        "id": "21451",
                        "name": "Trà Câu",
                        "wards": [
                            {
                                "id": "21451",
                                "name": "Phường Trà Câu"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "52",
                "name": "Gia Lai",
                "districts": [
                    {
                        "id": "21553",
                        "name": "Quy Nhơn Bắc",
                        "wards": [
                            {
                                "id": "21553",
                                "name": "Phường Quy Nhơn Bắc"
                            }
                        ]
                    },
                    {
                        "id": "21583",
                        "name": "Quy Nhơn",
                        "wards": [
                            {
                                "id": "21583",
                                "name": "Phường Quy Nhơn"
                            }
                        ]
                    },
                    {
                        "id": "21589",
                        "name": "Quy Nhơn Tây",
                        "wards": [
                            {
                                "id": "21589",
                                "name": "Phường Quy Nhơn Tây"
                            }
                        ]
                    },
                    {
                        "id": "21592",
                        "name": "Quy Nhơn Nam",
                        "wards": [
                            {
                                "id": "21592",
                                "name": "Phường Quy Nhơn Nam"
                            }
                        ]
                    },
                    {
                        "id": "21601",
                        "name": "Quy Nhơn Đông",
                        "wards": [
                            {
                                "id": "21601",
                                "name": "Phường Quy Nhơn Đông"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "56",
                "name": "Khánh Hòa",
                "districts": [
                    {
                        "id": "22333",
                        "name": "Bắc Nha Trang",
                        "wards": [
                            {
                                "id": "22333",
                                "name": "Phường Bắc Nha Trang"
                            }
                        ]
                    },
                    {
                        "id": "22366",
                        "name": "Nha Trang",
                        "wards": [
                            {
                                "id": "22366",
                                "name": "Phường Nha Trang"
                            }
                        ]
                    },
                    {
                        "id": "22390",
                        "name": "Tây Nha Trang",
                        "wards": [
                            {
                                "id": "22390",
                                "name": "Phường Tây Nha Trang"
                            }
                        ]
                    },
                    {
                        "id": "22402",
                        "name": "Nam Nha Trang",
                        "wards": [
                            {
                                "id": "22402",
                                "name": "Phường Nam Nha Trang"
                            }
                        ]
                    },
                    {
                        "id": "22411",
                        "name": "Bắc Cam Ranh",
                        "wards": [
                            {
                                "id": "22411",
                                "name": "Phường Bắc Cam Ranh"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "66",
                "name": "Đắk Lắk",
                "districts": [
                    {
                        "id": "22015",
                        "name": "Tuy Hòa",
                        "wards": [
                            {
                                "id": "22015",
                                "name": "Phường Tuy Hòa"
                            }
                        ]
                    },
                    {
                        "id": "22045",
                        "name": "Bình Kiến",
                        "wards": [
                            {
                                "id": "22045",
                                "name": "Phường Bình Kiến"
                            }
                        ]
                    },
                    {
                        "id": "22051",
                        "name": "Sông Cầu",
                        "wards": [
                            {
                                "id": "22051",
                                "name": "Phường Sông Cầu"
                            }
                        ]
                    },
                    {
                        "id": "22076",
                        "name": "Xuân Đài",
                        "wards": [
                            {
                                "id": "22076",
                                "name": "Phường Xuân Đài"
                            }
                        ]
                    },
                    {
                        "id": "22240",
                        "name": "Phú Yên",
                        "wards": [
                            {
                                "id": "22240",
                                "name": "Phường Phú Yên"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "68",
                "name": "Lâm Đồng",
                "districts": [
                    {
                        "id": "22918",
                        "name": "Mũi Né",
                        "wards": [
                            {
                                "id": "22918",
                                "name": "Phường Mũi Né"
                            }
                        ]
                    },
                    {
                        "id": "22924",
                        "name": "Phú Thủy",
                        "wards": [
                            {
                                "id": "22924",
                                "name": "Phường Phú Thủy"
                            }
                        ]
                    },
                    {
                        "id": "22933",
                        "name": "Hàm Thắng",
                        "wards": [
                            {
                                "id": "22933",
                                "name": "Phường Hàm Thắng"
                            }
                        ]
                    },
                    {
                        "id": "22945",
                        "name": "Phan Thiết",
                        "wards": [
                            {
                                "id": "22945",
                                "name": "Phường Phan Thiết"
                            }
                        ]
                    },
                    {
                        "id": "22954",
                        "name": "Tiến Thành",
                        "wards": [
                            {
                                "id": "22954",
                                "name": "Phường Tiến Thành"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "75",
                "name": "Đồng Nai",
                "districts": [
                    {
                        "id": "25195",
                        "name": "Bình Phước",
                        "wards": [
                            {
                                "id": "25195",
                                "name": "Phường Bình Phước"
                            }
                        ]
                    },
                    {
                        "id": "25210",
                        "name": "Đồng Xoài",
                        "wards": [
                            {
                                "id": "25210",
                                "name": "Phường Đồng Xoài"
                            }
                        ]
                    },
                    {
                        "id": "25217",
                        "name": "Phước Long",
                        "wards": [
                            {
                                "id": "25217",
                                "name": "Phường Phước Long"
                            }
                        ]
                    },
                    {
                        "id": "25220",
                        "name": "Phước Bình",
                        "wards": [
                            {
                                "id": "25220",
                                "name": "Phường Phước Bình"
                            }
                        ]
                    },
                    {
                        "id": "25326",
                        "name": "Bình Long",
                        "wards": [
                            {
                                "id": "25326",
                                "name": "Phường Bình Long"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "79",
                "name": "Hồ Chí Minh",
                "districts": [
                    {
                        "id": "25747",
                        "name": "Thủ Dầu Một",
                        "wards": [
                            {
                                "id": "25747",
                                "name": "Phường Thủ Dầu Một"
                            }
                        ]
                    },
                    {
                        "id": "25750",
                        "name": "Phú Lợi",
                        "wards": [
                            {
                                "id": "25750",
                                "name": "Phường Phú Lợi"
                            }
                        ]
                    },
                    {
                        "id": "25760",
                        "name": "Bình Dương",
                        "wards": [
                            {
                                "id": "25760",
                                "name": "Phường Bình Dương"
                            }
                        ]
                    },
                    {
                        "id": "25768",
                        "name": "Phú An",
                        "wards": [
                            {
                                "id": "25768",
                                "name": "Phường Phú An"
                            }
                        ]
                    },
                    {
                        "id": "25771",
                        "name": "Chánh Hiệp",
                        "wards": [
                            {
                                "id": "25771",
                                "name": "Phường Chánh Hiệp"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "80",
                "name": "Tây Ninh",
                "districts": [
                    {
                        "id": "25459",
                        "name": "Tân Ninh",
                        "wards": [
                            {
                                "id": "25459",
                                "name": "Phường Tân Ninh"
                            }
                        ]
                    },
                    {
                        "id": "25480",
                        "name": "Bình Minh",
                        "wards": [
                            {
                                "id": "25480",
                                "name": "Phường Bình Minh"
                            }
                        ]
                    },
                    {
                        "id": "25567",
                        "name": "Ninh Thạnh",
                        "wards": [
                            {
                                "id": "25567",
                                "name": "Phường Ninh Thạnh"
                            }
                        ]
                    },
                    {
                        "id": "25630",
                        "name": "Long Hoa",
                        "wards": [
                            {
                                "id": "25630",
                                "name": "Phường Long Hoa"
                            }
                        ]
                    },
                    {
                        "id": "25633",
                        "name": "Thanh Điền",
                        "wards": [
                            {
                                "id": "25633",
                                "name": "Phường Thanh Điền"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "82",
                "name": "Đồng Tháp",
                "districts": [
                    {
                        "id": "29944",
                        "name": "An Phước",
                        "wards": [
                            {
                                "id": "29944",
                                "name": "Xã An Phước"
                            }
                        ]
                    },
                    {
                        "id": "28249",
                        "name": "Đạo Thạnh",
                        "wards": [
                            {
                                "id": "28249",
                                "name": "Phường Đạo Thạnh"
                            }
                        ]
                    },
                    {
                        "id": "28261",
                        "name": "Mỹ Tho",
                        "wards": [
                            {
                                "id": "28261",
                                "name": "Phường Mỹ Tho"
                            }
                        ]
                    },
                    {
                        "id": "28270",
                        "name": "Thới Sơn",
                        "wards": [
                            {
                                "id": "28270",
                                "name": "Phường Thới Sơn"
                            }
                        ]
                    },
                    {
                        "id": "28273",
                        "name": "Mỹ Phong",
                        "wards": [
                            {
                                "id": "28273",
                                "name": "Phường Mỹ Phong"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "86",
                "name": "Vĩnh Long",
                "districts": [
                    {
                        "id": "28756",
                        "name": "Phú Khương",
                        "wards": [
                            {
                                "id": "28756",
                                "name": "Phường Phú Khương"
                            }
                        ]
                    },
                    {
                        "id": "28777",
                        "name": "An Hội",
                        "wards": [
                            {
                                "id": "28777",
                                "name": "Phường An Hội"
                            }
                        ]
                    },
                    {
                        "id": "28783",
                        "name": "Sơn Đông",
                        "wards": [
                            {
                                "id": "28783",
                                "name": "Phường Sơn Đông"
                            }
                        ]
                    },
                    {
                        "id": "28789",
                        "name": "Bến Tre",
                        "wards": [
                            {
                                "id": "28789",
                                "name": "Phường Bến Tre"
                            }
                        ]
                    },
                    {
                        "id": "28858",
                        "name": "Phú Tân",
                        "wards": [
                            {
                                "id": "28858",
                                "name": "Phường Phú Tân"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "91",
                "name": "An Giang",
                "districts": [
                    {
                        "id": "30292",
                        "name": "Bình Đức",
                        "wards": [
                            {
                                "id": "30292",
                                "name": "Phường Bình Đức"
                            }
                        ]
                    },
                    {
                        "id": "30301",
                        "name": "Mỹ Thới",
                        "wards": [
                            {
                                "id": "30301",
                                "name": "Phường Mỹ Thới"
                            }
                        ]
                    },
                    {
                        "id": "30307",
                        "name": "Long Xuyên",
                        "wards": [
                            {
                                "id": "30307",
                                "name": "Phường Long Xuyên"
                            }
                        ]
                    },
                    {
                        "id": "30316",
                        "name": "Châu Đốc",
                        "wards": [
                            {
                                "id": "30316",
                                "name": "Phường Châu Đốc"
                            }
                        ]
                    },
                    {
                        "id": "30325",
                        "name": "Vĩnh Tế",
                        "wards": [
                            {
                                "id": "30325",
                                "name": "Phường Vĩnh Tế"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "92",
                "name": "Cần Thơ",
                "districts": [
                    {
                        "id": "31120",
                        "name": "Cái Khế",
                        "wards": [
                            {
                                "id": "31120",
                                "name": "Phường Cái Khế"
                            }
                        ]
                    },
                    {
                        "id": "31135",
                        "name": "Ninh Kiều",
                        "wards": [
                            {
                                "id": "31135",
                                "name": "Phường Ninh Kiều"
                            }
                        ]
                    },
                    {
                        "id": "31147",
                        "name": "Tân An",
                        "wards": [
                            {
                                "id": "31147",
                                "name": "Phường Tân An"
                            }
                        ]
                    },
                    {
                        "id": "31150",
                        "name": "An Bình",
                        "wards": [
                            {
                                "id": "31150",
                                "name": "Phường An Bình"
                            }
                        ]
                    },
                    {
                        "id": "31153",
                        "name": "Ô Môn",
                        "wards": [
                            {
                                "id": "31153",
                                "name": "Phường Ô Môn"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "96",
                "name": "Cà Mau",
                "districts": [
                    {
                        "id": "31825",
                        "name": "Bạc Liêu",
                        "wards": [
                            {
                                "id": "31825",
                                "name": "Phường Bạc Liêu"
                            }
                        ]
                    },
                    {
                        "id": "31834",
                        "name": "Vĩnh Trạch",
                        "wards": [
                            {
                                "id": "31834",
                                "name": "Phường Vĩnh Trạch"
                            }
                        ]
                    },
                    {
                        "id": "31840",
                        "name": "Hiệp Thành",
                        "wards": [
                            {
                                "id": "31840",
                                "name": "Phường Hiệp Thành"
                            }
                        ]
                    },
                    {
                        "id": "31942",
                        "name": "Giá Rai",
                        "wards": [
                            {
                                "id": "31942",
                                "name": "Phường Giá Rai"
                            }
                        ]
                    },
                    {
                        "id": "31951",
                        "name": "Láng Tròn",
                        "wards": [
                            {
                                "id": "31951",
                                "name": "Phường Láng Tròn"
                            }
                        ]
                    }
                ]
            }
        ]
    };
    populateProvinces();
}

function populateProvinces() {
    const provinceSelect = document.getElementById('province');
    locationsData.provinces.forEach(province => {
        const option = document.createElement('option');
        option.value = province.id;
        option.textContent = province.name;
        provinceSelect.appendChild(option);
    });
}

function updateDistricts() {
    const provinceId = document.getElementById('province').value;
    const districtSelect = document.getElementById('district');
    const wardSelect = document.getElementById('ward');

    districtSelect.innerHTML = '<option value="">-- Chọn Quận/Huyện --</option>';
    wardSelect.innerHTML = '<option value="">-- Chọn Phường/Xã --</option>';
    wardSelect.disabled = true;

    if (!provinceId) {
        districtSelect.disabled = true;
        return;
    }

    const province = locationsData.provinces.find(p => p.id == provinceId);
    if (province) {
        province.districts.forEach(district => {
            const option = document.createElement('option');
            option.value = district.id;
            option.textContent = district.name;
            districtSelect.appendChild(option);
        });
        districtSelect.disabled = false;
    }
}

function updateWards() {
    const provinceId = document.getElementById('province').value;
    const districtId = document.getElementById('district').value;
    const wardSelect = document.getElementById('ward');

    wardSelect.innerHTML = '<option value="">-- Chọn Phường/Xã --</option>';

    if (!districtId) {
        wardSelect.disabled = true;
        return;
    }

    const province = locationsData.provinces.find(p => p.id == provinceId);
    if (province) {
        const district = province.districts.find(d => d.id == districtId);
        if (district) {
            district.wards.forEach(ward => {
                const option = document.createElement('option');
                option.value = ward.id;
                option.textContent = ward.name;
                wardSelect.appendChild(option);
            });
            wardSelect.disabled = false;
        }
    }
}

// Submit Order
function submitOrder(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const province = document.getElementById('province').options[document.getElementById('province').selectedIndex].text;
    const district = document.getElementById('district').options[document.getElementById('district').selectedIndex].text;
    const ward = document.getElementById('ward').options[document.getElementById('ward').selectedIndex].text;
    const product = document.getElementById('productSelect').value;
    const quantity = document.getElementById('quantity').value;

    const address = `${ward}, ${district}, ${province}`;
    const message = `Đơn hàng mới:\n- Khách: ${name}\n- SĐT: ${phone}\n- Email: ${email}\n- Địa chỉ: ${address}\n- Sản phẩm: ${product}\n- Số lượng: ${quantity}`;

    alert('Cảm ơn bạn! Đơn hàng của bạn đã được ghi nhận.\n\n' + message + '\n\nChúng tôi sẽ liên hệ với bạn sớm nhất.');
    closeOrderModal();
    document.querySelector('form').reset();
}

// FAQ Toggle
function toggleFaq(element) {
    const faqItem = element.parentElement;
    faqItem.classList.toggle('active');
}

// Scroll to Top
window.addEventListener('scroll', function () {
    const scrollTop = document.getElementById('scrollTop');
    if (window.pageYOffset > 300) {
        scrollTop.classList.add('show');
    } else {
        scrollTop.classList.remove('show');
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Close modal when clicking outside
window.addEventListener('click', function (event) {
    const modal = document.getElementById('orderModal');
    if (event.target === modal) {
        closeOrderModal();
    }
});

// Initialize
updateCountdown();
updateTotalPrice();
loadLocations();
