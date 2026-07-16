// js/data.js
/* ============================================
   SADU LANDING PAGE - DATA
   ============================================ */

const siteData = {

    // Shipping Config — chỉnh tại đây để thay đổi phí ship & ngưỡng miễn ship
    shipping: {
        freeShipThreshold: 358000, // Đơn từ mức này trở lên: miễn phí ship
        shippingFee: 30000          // Phí ship cho đơn dưới ngưỡng
    },

    // Event Popup Configuration
    eventPopup: {
        enabled: false, // Đổi thành false để tắt popup
        title: '🏖️ THÔNG BÁO',
        message: 'Kính chào Quý Khách hàng,<br><br>SADU sẽ có chuyến du lịch nghỉ mát từ <strong>ngày 24/05 đến 26/05/2026</strong>.<br><br>Trong thời gian này,các đơn hàng chưa được xử lý sẽ được bảo lưu và sẽ được ưu tiên xử lý ngay lập tức khi công ty làm việc trở lại vào ngày 27/05.<br><br>Chúng tôi xin lỗi vì sự bất tiện này và cảm ơn Quý khách đã thông cảm!<br><br><strong style="color: var(--primary);">Trân trọng,<br>Trứng Gà Thảo Dược SADU</strong>',
        closeText: 'Đã hiểu',
        image: '' // Có thể để trống nếu không dùng ảnh
    },

    // Navigation
    navigation: [
        { label: 'Sản Phẩm', href: '#products' },
        { label: 'Đánh Giá', href: '#customer-feedback-gallery' },
        { label: 'Hỏi Đáp', href: '#faq' },
        { label: 'Liên Hệ', href: '#footer' }
    ],

    // Hero Section
    hero: {
        label: 'Trứng Gà Thảo Dược Cao Cấp',
        title: 'Khi Mỗi Bữa Ăn Là Một Lựa Chọn Cho Sức Khỏe',
        description: 'SADU nuôi gà bằng 13 loại thảo dược tự nhiên — không kháng sinh, không chất kích thích, cholesterol thấp hơn 1/2 trứng thường. Từng quả trứng là cam kết bảo vệ sức khỏe gia đình bạn.',
        ctaText: '🛒 Đặt Mua Ngay',
        ctaNote: 'Combo từ 3 hộp — Miễn phí giao hàng toàn quốc',
        offerBadge: 'Ưu đãi: Mua 3 Tặng 1',
        image: 'source/san-pham.png',
        signatureImage: 'source/long-do.png',
        signatureCaption: 'Lòng đỏ cam sậm<br>tự nhiên, không phẩm màu'
    },

    // Benefits Section
    benefits: [
        {
            icon: '🌿',
            title: 'Tiêu Chí 3 "KHÔNG"',
            description: '3 KHÔNG: Không kháng sinh · Không chất kích thích · Không cám công nghiệp — kiểm định độc lập'
        },
        {
            icon: '💛',
            title: 'Khác Biệt Nhìn Thấy Ngay',
            description: 'Lòng đỏ cam sậm, sánh đặc — màu tự nhiên từ 13 loại thảo dược, không phẩm màu'
        },
        {
            icon: '🛡️',
            title: 'Mua Không Lo Rủi Ro',
            description: 'Đổi mới hoặc hoàn tiền 100% nếu hàng vỡ trong vận chuyển — chụp ảnh, báo ngay'
        },
        {
            icon: '🚚',
            title: 'Đến Tận Cửa, Đúng Hẹn',
            description: 'Giao toàn quốc · Đóng gói chống sốc · Freeship combo từ 3 hộp'
        }
    ],

    // Herbal Story Section
    herbalStory: {
        label: 'Bí Quyết Tạo Nên Sự Khác Biệt',
        title: '13 Loại Thảo Dược — Dưỡng Từ Bên Trong',
        description: 'Không có con đường tắt nào để tạo ra trứng thực sự sạch. SADU phối trộn 13 loại thảo dược quý vào khẩu phần ăn hàng ngày của đàn gà — kết quả hiện ra ngay trên từng quả trứng bạn cầm trên tay.',
        herbs: [
            { name: 'Cà Gai Leo', benefit: 'Hỗ trợ gan, giải độc tự nhiên' },
            { name: 'Xạ Đen', benefit: 'Tăng đề kháng, chống oxy hóa' },
            { name: 'Đinh Lăng', benefit: 'Bổ khí huyết, tăng sức sống' },
            { name: 'Khôi Đốm', benefit: 'Kháng viêm, bảo vệ đường tiêu hóa' },
            { name: 'Ngô Sơn La', benefit: 'Nguồn tinh bột sạch từ vùng cao' },
            { name: 'Cám Gạo Tươi', benefit: 'Vitamin E tự nhiên, dưỡng lòng đỏ' },
            { name: 'Khô Đậu Tương', benefit: 'Protein thực vật, không cholesterol xấu' },
            { name: '+ 6 Thảo Dược Khác', benefit: 'Bổ sung khoáng chất & premix tự nhiên' }
        ],
        result: {
            icon: '🥚',
            title: 'Kết Quả Nhìn Thấy Bằng Mắt',
            points: [
                'Lòng đỏ cam sậm, sánh đặc — không phẩm màu',
                'Không mùi tanh kể cả khi ăn món trứng trần, trứng luộc hay đặc biệt là trứng Osen',
                'Cholesterol thấp hơn 1/2 trứng gà thường'
            ]
        },
        gridBackground: 'source/thuc-an.jpg'  // [THAY] ảnh làm background cho herb grid
    },

    // Why Section
    why: {
        title: 'Tại sao bạn nên lựa chọn <span style="color: var(--primary)"> TRỨNG GÀ THẢO DƯỢC SADU ?</span>',
        subtitle: 'So sánh chi tiết giữa trứng SADU và trứng công nghiệp thông thường',
        farmStory: {
            title: 'Cam kết "3 KHÔNG" từ SADU',
            image: 'source/yolk.jpg',
            uspList: [
                'KHÔNG KHÁNG SINH',
                'KHÔNG HORMONE TĂNG TRƯỞNG',
                'KHÔNG CÁM CÔNG NGHIỆP'
            ],
            description: 'Đàn gà được ăn thức ăn 100% từ thực vật (ngô sơn la, cám gạo tươi, khô đậu tương, khoáng, premix,...), thức ăn được phối trộn thêm 13 loại thảo dược tự nhiên (cà gai leo, xạ đen, đinh lăng, khôi đốm,...), uống nước sạch lọc qua hệ thống RO + khử khuẩn qua tia UV và được chăm sóc theo quy trình để cho ra những quả trứng an toàn nhất.'
        },
        // Bảng so sánh gộp (trước đây tách thành 2 section riêng: "comparison" + "egg-comparison")
        table: [
            { criteria: 'Đội Ngũ Chuyên Gia', sadu: true, regular: false },
            { criteria: 'Cám Công Nghiệp', sadu: false, regular: true },
            { criteria: 'Thức Ăn 100% Từ Thực Vật', sadu: true, regular: false },
            { criteria: 'Phối Trộn Thảo Dược', sadu: true, regular: false },
            { criteria: 'Không Kháng Sinh', sadu: true, regular: false },
            { criteria: 'Cholesterol xấu', sadu: 'Thấp', regular: 'Cao' },
            { criteria: 'Chế Độ Chăm Sóc Đặc Biệt', sadu: true, regular: false },
            { criteria: 'Chất Lượng Trứng', sadu: 'Sánh đặc, không tanh', regular: 'Nhạt màu, dễ vỡ, có mùi tanh' },
            { criteria: 'Thời Gian Bảo Quản', sadu: '15–20 ngày thường / 45 ngày trong tủ lạnh', regular: '7–10 ngày thường / 20–30 ngày trong tủ lạnh' }
        ],
        comparison: {
            image: 'source/long-do.png',
            title: 'Sự khác biệt được nhìn thấy bằng mắt thường',
            description: 'Lòng đỏ trứng SADU luôn sánh màu, tươi ngon và đậm đà hơn so với trứng thường. Đây là kết quả của chế độ dinh dưỡng tự nhiên và chăm sóc đặc biệt từ trang trại.'
        },
        safety: {
            image: 'source/me-bau-3.jpg',
            title: 'An Toàn Cho Cả Gia Đình',
            description: 'Chất lượng và độ an toàn của thực phẩm cho gia đình là ưu tiên hàng đầu. Trứng thường chứa tồn dư kháng sinh từ thức ăn công nghiệp, gây lo lắng cho sức khỏe gia đình, đặc biệt là bé nhỏ và người lớn tuổi.'
        }
    },

    // Value Justification Section
    valueJustification: {
        label: 'Tại Sao Xứng Đáng?',
        title: 'Hơn 10.000đ Một Quả — Bạn Đang Mua Gì?',
        subtitle: 'So sánh thật, không che giấu. Một quả trứng SADU có giá khoảng 10.000đ — cao hơn trứng thường. Đây là lý do tại sao con số đó xứng đáng.',
        anchors: [
            {
                icon: '☕',
                comparison: 'Bằng 1 ly cà phê',
                value: 'Một quả trứng SADU có giá tương đương 1 ly cà phê sáng — nhưng nuôi dưỡng cả gia đình bạn'
            },
            {
                icon: '🏥',
                comparison: 'Rẻ hơn 1 lần khám bệnh',
                value: 'Chi phí điều trị kháng sinh đề kháng tốn gấp hàng trăm lần — ăn sạch từ đầu mới là tiết kiệm thực sự'
            },
            {
                icon: '👶',
                comparison: 'Đầu tư cho con',
                value: 'Với trẻ nhỏ và mẹ bầu, chất lượng thực phẩm ảnh hưởng trực tiếp đến sự phát triển — không thể thỏa hiệp'
            }
        ],
        ctaText: '🛒 ĐẶT HÀNG NGAY'
    },

    // Statistics Section
    statistics: {
        title: 'Những Con Số Ấn Tượng',
        stats: [
            {
                icon: '👨‍👩‍👧‍👦',
                number: '42,300+',
                label: 'Gia Đình Tin Dùng',
                description: 'Hàng nghìn gia đình đã tin tưởng lựa chọn'
            },
            {
                icon: '🥚',
                number: '1,000,000+',
                label: 'Quả Trứng Bán Ra',
                description: 'Số lượng trứng đã được phân phối'
            },
            {
                icon: '⭐',
                number: '39,700+',
                label: 'Phản Hồi & Đánh Giá',
                description: 'Đánh giá tích cực từ khách hàng'
            },
            {
                icon: '🏆',
                number: '98%',
                label: 'Khách Hài Lòng',
                description: 'Tỷ lệ khách hàng hài lòng về sản phẩm'
            }
        ]
    },

    // Gift Section
    giftSection: {
        label: 'Quà Tặng Sức Khỏe',
        title: 'Trứng SADU — Món Quà Ý Nghĩa',
        subtitle: 'Không cần đắt tiền để thể hiện sự quan tâm. Một hộp trứng thảo dược chất lượng cao là món quà thiết thực, tốt cho sức khỏe — được lòng người nhận hơn bất kỳ lời chúc nào.',
        occasions: [
            {
                icon: '🤰',
                title: 'Tặng Mẹ Bầu',
                desc: 'Bổ sung dinh dưỡng an toàn, không kháng sinh — món quà thiết thực nhất cho thai kỳ khỏe mạnh'
            },
            {
                icon: '👴',
                title: 'Biếu Ông Bà Cha Mẹ',
                desc: 'Cholesterol thấp, thảo dược tự nhiên — phù hợp người lớn tuổi cần kiểm soát tim mạch'
            },
            {
                icon: '🏠',
                title: 'Tặng Gia Đình, Bạn Bè',
                desc: 'Thực phẩm sạch là quà tặng mà ai cũng cần — ý nghĩa hơn hoa quả, thiết thực hơn bánh kẹo'
            },
            {
                icon: '🎂',
                title: 'Dịp Lễ, Tết, Sinh Nhật',
                desc: 'Combo 3–6 hộp đóng gói đẹp, giao tận nơi — phù hợp làm quà biếu mọi dịp trong năm'
            }
        ],
        packaging: {
            title: 'Đóng Gói Cẩn Thận, Trao Tay Trọn Vẹn',
            points: [
                'Hộp carton chắc chắn, chống va đập khi vận chuyển',
                'Tem SADU dán trên từng quả — nhận diện hàng chính hãng',
                'Giao tận địa chỉ người nhận theo yêu cầu',
                'Túi giấy lịch sự, sang trọng — phù hợp làm quà biếu',
                "LƯU Ý: Quý khách vui lòng ghi chú cho đơn hàng nếu muốn đặt trứng làm quà tặng, giá hỗ trợ túi quà là 12.000đ/túi"
            ]
        },
        images: [
            { src: 'source/qua-5.png', alt: 'Quà tặng SADU' },
            { src: 'source/qua-1.png', alt: 'Hộp trứng SADU' },
            { src: 'source/qua-2.png', alt: 'Quà cho mẹ bầu' },
            { src: 'source/qua-7.png', alt: 'Quà gia đình' },
            { src: 'source/qua-3.png', alt: 'Lòng đỏ trứng SADU' }
        ],
        ctaText: '🎁 ĐẶT LÀM QUÀ NGAY'
    },

    // Certificates Carousel
    certificates: {
        title: 'Sự An Toàn Được Chứng Nhận',
        images: [
            { src: 'source/t1.jpg', alt: 'Chứng nhận' },
            { src: 'source/t2.jpg', alt: 'Khay trứng' },
            { src: 'source/t3.jpg', alt: 'Mẹ bầu' },
            { src: 'source/t4.jpg', alt: 'Mẹ và bé' },
            { src: 'source/t5.jpg', alt: 'Lòng đỏ trứng' }
        ]
    },

    // Products
    products: [
        // {
        //     id: "special-offer",
        //     name: "Combo Kỷ Niệm 10 Năm SADU",
        //     originalPrice: 478000,
        //     priceValue: 358500,
        //     priceDisplay: "358.500đ",
        //     specs: [
        //         "✓ 4 hộp x 12 quả",
        //         "✓ Miễn phí ship toàn quốc",
        //         "✓ Tặng 1 túi đậu xanh (150g)",
        //         "✓ Bảo hành 1 đổi 1 (lỗi do vận chuyển)"
        //     ],
        //     highlightSpec: true,
        //     image: "source/banner-special.jpg",
        //     featured: true // ⭐ Set true để làm sản phẩm nổi bật
        // },
        {
            id: "6-hop",
            name: "COMBO 6 HỘP TẶNG 2 HỘP - TẶNG 1 HỘP TRÀ (100G)",
            originalPrice: 956000,
            priceValue: 717000,
            priceDisplay: "717.000đ",
            specs: [
                "✓ 8 hộp x 12 quả (~ 7.500đ/quả)",
                "✓ Tặng 1 hộp trà (100g)",
                "✓ Miễn phí ship toàn quốc",
                "✓ Bảo hành 1 đổi 1 (lỗi do vận chuyển)"
            ],
            highlightSpec: true,
            image: "source/combo-6hop.png",
            featured: false
        },
        {
            id: "3-hop",
            name: "COMBO 3 HỘP TẶNG 1 HỘP",
            originalPrice: 478000,
            priceValue: 358500,
            priceDisplay: "358.500đ",
            specs: [
                "✓ 4 hộp x 12 quả (~ 7.500đ/quả)",
                "✓ Miễn phí ship toàn quốc",
                "✓ Bảo hành 1 đổi 1 (lỗi do vận chuyển)"
            ],
            highlightSpec: true,
            image: "source/combo-3hop.png",
            featured: true // ⭐ Set true để làm sản phẩm nổi bật
        },
        {
            id: "1-hop",
            name: "1 HỘP TRỨNG GÀ THẢO DƯỢC SADU",
            originalPrice: 0,
            priceValue: 119500,
            priceDisplay: "119.500đ",
            specs: [
                "✓ 1 hộp 12 quả",
                "✓ Phụ thu 30.000đ tiền ship",
                "✓ Bảo hành 1 đổi 1 (lỗi do vận chuyển)"
            ],
            highlightSpec: true,
            image: "source/1-hop.png",
            featured: false // ⭐ Set true để làm sản phẩm nổi bật
        },


        // {
        //     id: "trung-so",
        //     name: "COMBO 5 HỘP TẶNG 2 (TRỨNG SO)",
        //     originalPrice: 836500,
        //     priceValue: 597500,
        //     priceDisplay: "597.500đ",
        //     specs: [
        //         "✓ 7 hộp x 12 quả",
        //         "✓ Miễn phí ship toàn quốc",
        //         "✓ Bảo hành 1 đổi 1 (lỗi do vận chuyển)",
        //         "Chỉ áp dụng cho sản phẩm trứng so (trứng nhỏ)"
        //     ],
        //     highlightSpec: true,
        //     image: "source/qua-1.png",
        //     featured: false
        // },

    ],

    // Testimonials
    testimonials: [
        {
            name: 'Chị Hương',
            role: 'Mẹ bầu tháng 7 — Hà Nội',
            avatar: 'source/avatar-1.jpg',
            content: 'Ban đầu mình cũng phân vân vì giá cao hơn trứng thường. Nhưng nhìn lòng đỏ cam sậm, sánh đặc thế này là biết ngay khác biệt rồi. Bác sĩ cũng nói cholesterol trong máu mình ổn định dù ăn trứng mỗi ngày. Xứng đáng từng đồng!'
        },
        {
            name: 'Chị Linh',
            role: 'Mẹ bỉm sữa — Con 3 tháng',
            avatar: 'source/avatar-2.jpg',
            content: 'Sau sinh mình ăn rất nhiều trứng để có sữa. Chọn SADU vì không dám đánh cược sức khỏe của con bằng trứng không rõ nguồn gốc. Sữa nhiều hơn hẳn, con tăng cân đều. Đắt hơn một chút nhưng ngủ ngon hơn nhiều!'
        },
        {
            name: 'Anh Long',
            role: 'Kỹ sư — Khách hàng 8 tháng',
            avatar: 'source/avatar-4.jpg',
            content: 'Mình là người kỹ tính về thực phẩm, đọc kỹ thành phần trước khi mua. SADU là lần đầu tiên mình thấy một thương hiệu trứng dám liệt kê đầy đủ 13 loại thảo dược và con số cholesterol cụ thể. Không cần quảng cáo nhiều — sự minh bạch đó đã đủ thuyết phục tôi rồi.'
        },
        {
            name: 'Chị Bích',
            role: 'Ăn chay — TP. HCM',
            avatar: 'source/avatar-5.jpg',
            content: 'Gia đình mình ăn chay 10 ngày mỗi tháng. Tìm mãi mới thấy trứng nuôi hoàn toàn bằng thực vật và thảo dược như SADU. Cả nhà an tâm, không lo tồn dư thuốc. Đây là loại trứng duy nhất mình tin dùng.'
        },
        {
            name: 'Chị Minh',
            role: 'Mẹ trẻ — Con 2 tuổi',
            avatar: 'source/avatar-3.jpg',
            content: 'Hai năm dùng SADU, chưa một lần phải lo về chất lượng. Con mình ăn trứng mỗi ngày, khỏe mạnh và phát triển tốt. Với mình, trả thêm vài nghìn mỗi quả để không phải lo — đó là khoản đầu tư xứng đáng nhất cho con.'
        }
    ],

    // Customer Feedback Images (Masonry Gallery)
    feedbackImages: [
        { src: 'source/fb1.jpg', alt: 'Khách hàng hài lòng 1' },
        { src: 'source/fb2.jpg', alt: 'Khách hàng hài lòng 2' },
        { src: 'source/fb3.jpg', alt: 'Khách hàng hài lòng 3' },
        { src: 'source/fb4.jpg', alt: 'Khách hàng hài lòng 4' },
        { src: 'source/fb5.jpg', alt: 'Khách hàng hài lòng 4' },
        { src: 'source/fb7.jpg', alt: 'Khách hàng hài lòng 4' },
        { src: 'source/fb9.jpg', alt: 'Khách hàng hài lòng 4' },
        { src: 'source/fb10.jpg', alt: 'Khách hàng hài lòng 4' },
        { src: 'source/fb11.jpg', alt: 'Khách hàng hài lòng 4' },
        { src: 'source/fb13.jpg', alt: 'Khách hàng hài lòng 4' },
        { src: 'source/fb14.jpg', alt: 'Khách hàng hài lòng 4' },
        { src: 'source/fb15.jpg', alt: 'Khách hàng hài lòng 4' },
        { src: 'source/fb16.jpg', alt: 'Khách hàng hài lòng 4' },
    ],

    // FAQ
    faqs: [
        {
            question: 'Trứng Sadu có an toàn cho mẹ bầu không?',
            answer: 'Có, trứng SADU 100% an toàn cho mẹ bầu. Sản phẩm được nuôi bằng thảo dược tự nhiên, không tồn dư kháng sinh, và có cholesterol thấp.'
        },
        {
            question: 'Giao hàng mất bao lâu?',
            answer: '- Đối với các đơn trong nội thành TP Hà Nội: thời gian giao hàng dao động từ 2-3 ngày (Kể từ khi lên đơn thành công). <br>- Đối với các tỉnh thành khác: Tùy thuộc vào vị trí của bạn mà thời gian giao hàng dao động từ 4-7 ngày (Kể từ khi lên đơn thành công).'
        },
        {
            question: 'Trứng để được bao nhiêu ngày và bảo quản như thế nào?',
            answer: 'Bạn có thể bảo quản trứng theo hai cách sau: <br>- Ở nhiệt độ thường: trứng để được từ 15 - 20 ngày. <br> - Trong ngăn mát tủ lạnh: trứng để được tới 45 ngày ạ. <br>Lưu ý: Nên bảo quản trong ngăn mát tủ lạnh.'
        },
        {
            question: 'Có chính sách đổi trả không?',
            answer: 'Có, SADU có chính sách 1 đổi 1 hoặc hoàn tiền cho các trường hợp trứng bị vỡ trong quá trình vận chuyển. Nếu trứng không tươi hoặc bị vỡ, vui lòng liên hệ với chúng tôi qua hotline hoặc fanpage để được hỗ trợ.<br><span style="color: red;">(Lưu ý: Cần quay hoặc chụp lại hình ảnh khi mở hộp)</span>'
        },
        {
            question: 'Cholesterol trong trứng SADU thấp bao nhiêu?',
            answer: 'Trứng Sadu có cholesterol thấp hơn 1/2 so với trứng thường. Điều này rất phù hợp cho mẹ bầu, mẹ bỉm sữa và những người cần kiểm soát cholesterol.'
        },
        {
            question: 'Làm thế nào để biết đây là hàng chính hãng của SADU?',
            answer: 'Để nhận biết sản phẩm chính hãng của SADU, bạn có thể dựa vào các đặc điểm sau: <br>- Trên mỗi quả trứng đều có tem SADU. <br>- Vỏ thùng có in đầy đủ thông tin địa chỉ trang trại, mã vạch để truy xuất nguồn gốc. <br>- Đặc biệt, số hotline chính thức 19008952 của công ty sẽ được in trên bao bì sản phẩm.'
        },
        {
            question: 'Có hỗ trợ khách hàng 24/7 không?',
            answer: 'Có, chúng tôi có đội hỗ trợ khách hàng 24/7. Bạn có thể liên hệ qua Hotline: 1900 8952, Email: nongnghiepcncthanglong@gmail.com hoặc nhắn tin qua fanpage Trứng Gà Thảo Dươc SADU.'
        }
    ],

    // Contact Info
    contact: {
        phone: '1900 8952',
        email: 'nongnghiepcncthanglong@gmail.com',
        address: 'HTX NÔNG NGHIỆP CÔNG NGHỆ CAO KIÊN CÀ - Thôn Ứng Hòa - Xã Quảng Bị - TP.Hà Nội.',
        facebook: 'https://www.facebook.com/trunggasach.sadu/',
        messenger: 'https://m.me/346886209053680',  // [THAY] nếu link Messenger khác
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d578.1946638146984!2d105.7084532920405!3d20.887101247562136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDUzJzEzLjkiTiAxMDXCsDQyJzI5LjkiRQ!5e1!3m2!1svi!2s!4v1781854042056!5m2!1svi!2s', // [THAY] Dán src từ Google Maps > Chia sẻ > Nhúng bản đồ vào đây
        socialLinks: [
            { name: 'Facebook', url: 'https://www.facebook.com/trunggasach.sadu/', icon: 'f' },
            // { name: 'Instagram', url: '#', icon: '📷' },
            // { name: 'Zalo', url: '#', icon: 'Z' }
        ]
    },

    // Customers for Alert Notification
    customers: [
        { name: 'Nguyễn Thị Hương', location: 'Hà Nội', product: 'Trứng Gà Thảo Dược - 6 Hộp Tặng 2' },
        { name: 'Trần Văn Đức', location: 'TP. Hồ Chí Minh', product: 'Trứng Gà Thảo Dược - 3 Hộp Tặng 1' },
        { name: 'Phạm Thị Linh', location: 'Đà Nẵng', product: 'Trứng Gà Thảo Dược - 6 Hộp Tặng 2' },
        { name: 'Hoàng Minh Tuấn', location: 'Hải Phòng', product: 'Trứng Gà Thảo Dược - 3 Hộp Tặng 1' },
        { name: 'Lê Thị Hoa', location: 'Cần Thơ', product: 'Trứng Gà Thảo Dược - 3 Hộp Tặng 1' },
        { name: 'Đỗ Văn Hùng', location: 'Bắc Ninh', product: 'Trứng Gà Thảo Dược - 3 Hộp Tặng 1' },
        { name: 'Vũ Thị Xuân', location: 'Hà Nội', product: 'Trứng Gà Thảo Dược - 6 Hộp Tặng 2' },
        { name: 'Bùi Văn Long', location: 'Nghệ An', product: 'Trứng Gà Thảo Dược - 3 Hộp Tặng 1' },
        { name: 'Trần Ngọc Bảo', location: 'TP. Hồ Chí Minh', product: 'Trứng Gà Thảo Dược - 6 Hộp Tặng 2' },
        { name: 'Trương Thị Mai', location: 'Thanh Hóa', product: 'Trứng Gà Thảo Dược - 3 Hộp Tặng 1' },
        { name: 'Nguyễn Quỳnh Nga', location: 'Hà Nội', product: 'Trứng Gà Thảo Dược - 6 Hộp Tặng 2' },
        { name: 'Ngô Như', location: 'Đà Nẵng', product: 'Trứng Gà Thảo Dược - 6 Hộp Tặng 2' },
        { name: 'Lê Thị Tiếm', location: 'Phú Thọ', product: 'Trứng Gà Thảo Dược - 6 Hộp Tặng 2' },
        { name: 'Lâm Sung', location: 'Đà Nẵng', product: 'Trứng Gà Thảo Dược - 3 Hộp Tặng 1' },
        { name: 'Phan Hai Uyen', location: 'Hà Nội', product: 'Trứng Gà Thảo Dược - 6 Hộp Tặng 2' },
        { name: 'Minh Chau', location: 'Hải Phòng', product: 'Trứng Gà Thảo Dược - 3 Hộp Tặng 1' },
        { name: 'Lien Nguyen', location: 'Hưng Yên', product: 'Trứng Gà Thảo Dược - 3 Hộp Tặng 1' },
        { name: 'Phạm Thanh Dung', location: 'Thanh Hóa', product: 'Trứng Gà Thảo Dược - 3 Hộp Tặng 1' },
        { name: 'Lê Thu Hoài', location: 'Hà Nội', product: 'Trứng Gà Thảo Dược - 6 Hộp Tặng 2' },
        { name: 'Trương Tú Uyên', location: 'TP. Hồ Chí Minh', product: 'Trứng Gà Thảo Dược - 6 Hộp Tặng 2' },
        { name: 'Gia Quyên', location: 'TP. Hồ Chí Minh', product: 'Trứng Gà Thảo Dược - 6 Hộp Tặng 2' },
        { name: 'Tống Công Dũng', location: 'TP. Hồ Chí Minh', product: 'Trứng Gà Thảo Dược - 6 Hộp Tặng 2' },
    ],

    // ============================================================
    // CHƯƠNG TRÌNH KHUYẾN MÃI HÀNG THÁNG
    // Mỗi tháng chỉ cần thay các trường được đánh dấu [THAY]
    // Đặt enabled: false để ẩn section này đi
    // ============================================================
    specialProgram: {
        enabled: false,                          // [THAY] true = hiện, false = ẩn section

        // --- Nhận diện chương trình ---
        tag: 'Khuyến Mãi Tháng 6/2026',        // [THAY] nhãn nhỏ phía trên
        title: 'Kỷ Niệm 10 Năm SADU',          // [THAY] tiêu đề chính
        subtitle: 'Ưu Đãi Chưa Từng Có',       // [THAY] tiêu đề phụ
        description: 'Nhân dịp kỷ niệm 10 năm thành lập, SADU dành tặng chương trình ưu đãi đặc biệt chưa từng có! Chỉ áp dụng đến <strong>hết ngày 07/06/2026</strong>.', // [THAY]

        // --- Hình ảnh ---
        image: 'source/banner-special.jpg',     // [THAY] ảnh minh họa chương trình
        imageAlt: 'Chương trình đặc biệt SADU', // [THAY]
        highlightText: 'CHỈ 100 SUẤT ĐẦU TIÊN',// [THAY] text nổi bật trên ảnh (bỏ trống nếu không cần)

        // --- Quyền lợi (tối đa 4 mục) ---
        features: [
            {
                icon: '🎁',
                title: 'Quà Tặng Đặc Biệt',
                description: 'Tặng 1 túi đậu xanh (150g)'         // [THAY]
            },
            {
                icon: '🚚',
                title: 'Miễn Phí Vận Chuyển',
                description: 'Freeship toàn quốc'
            },
            {
                icon: '🛡️',
                title: 'Bảo Hành Đặc Biệt',
                description: '1 đổi 1 hoặc hoàn tiền nếu có lỗi do vận chuyển'
            },
            {
                icon: '⭐',
                title: 'Giá Ưu Đãi',
                description: 'Giảm đến 25% so với giá thông thường' // [THAY]
            }
        ],

        ctaText: '🛒 ĐẶT HÀNG NGAY',           // [THAY] nếu muốn

        // --- Đếm ngược ---
        countdown: {
            title: '⏰ Kết thúc sau:',
            enabled: true,                      // [THAY] true = hiện đếm ngược
            endDate: '2026-06-07T23:59:59'      // [THAY] ngày kết thúc chương trình
        }
    },

    // Packaging & Shipping Section
    packaging: {
        label: 'Đóng Gói & Vận Chuyển',
        title: 'Trứng Đến Tay Bạn — Nguyên Vẹn Từng Quả',
        subtitle: 'Dù bạn ở Hà Nội hay bất kỳ tỉnh thành nào, SADU đều có quy trình đóng gói riêng để đảm bảo từng quả trứng đến tay bạn hoàn toàn nguyên vẹn.',
        methods: [
            {
                tag: 'Nội Thành Hà Nội',
                icon: '🛵',
                title: 'Shipper SADU Giao Trực Tiếp',
                description: 'Đơn hàng trong nội thành Hà Nội được chính shipper của SADU đảm nhận — không qua trung gian, không lo va đập ngoài tầm kiểm soát.',
                points: [
                    'Shipper nội bộ SADU, được đào tạo xử lý hàng dễ vỡ',
                    'Giao trong 1–2 ngày kể từ khi xác nhận đơn',
                    'Liên hệ trực tiếp ngay khi có vấn đề phát sinh'
                ],
                image: 'source/qua-1.png',
                imageAlt: 'Giao hàng nội thành — shipper SADU'
            },
            {
                tag: 'Ngoại Thành & Các Tỉnh',
                icon: '📦',
                title: 'Thùng Trấu Chống Sốc Có Vách Ngăn',
                description: 'Đơn đi tỉnh được đóng trong thùng trấu chuyên dụng có vách ngăn từng quả — trấu hút ẩm tự nhiên, vách ngăn chống va chạm suốt hành trình dài.',
                points: [
                    'Thùng trấu tự nhiên — hút ẩm, giữ nhiệt ổn định',
                    'Vách ngăn riêng từng quả, không va chạm nhau',
                    'Kiểm tra kỹ lưỡng trước khi bàn giao đơn vị vận chuyển'
                ],
                image: 'source/ship1.jpg',
                imageAlt: 'Đóng gói thùng trấu chống sốc — đơn tỉnh SADU'
            }
        ],
        guarantee: {
            icon: '🛡️',
            title: 'Cam Kết Bảo Hành Vận Chuyển',
            description: 'Nếu trứng bị vỡ trong quá trình vận chuyển — SADU đổi mới hoặc hoàn tiền 100%, không hỏi thêm.',
            note: 'Chỉ cần quay hoặc chụp lại video/ảnh khi mở hộp là đủ điều kiện.'
        },
        ctaText: '🛒 ĐẶT HÀNG NGAY'
    },

    // Farm Story (merged into Herbal Story section as its second chapter)
    farmStory: {
        title: 'Nơi Mỗi Quả Trứng Được Tạo Ra Với Tất Cả Sự Tận Tâm',
        stats: [
            {
                icon: '🐓',
                number: '20.000',
                unit: 'con gà',
                label: 'Đàn Gà Hiện Tại'
            },
            {
                icon: '🥚',
                number: '~ 17.000',
                unit: 'quả/ngày',
                label: 'Trứng Xuất Mỗi Ngày'
            }
        ],
        process: {
            title: 'Quy Trình Nuôi Dưỡng Chuẩn',
            steps: [
                {
                    icon: '🏠',
                    title: 'Chuồng Trại Kiểm Soát',
                    description: 'Gà được nuôi nhốt chuồng trong môi trường kiểm soát chặt chẽ — đảm bảo vệ sinh và loại trừ các yếu tố dịch bệnh từ bên ngoài.'
                },
                {
                    icon: '💧',
                    title: 'Nước Lọc RO + Khử Khuẩn UV',
                    description: 'Nguồn nước uống được xử lý qua hệ thống lọc RO tiêu chuẩn và khử khuẩn bằng tia UV.'
                },
                {
                    icon: '🌿',
                    title: 'Thảo Dược Tự Phối Trộn',
                    description: 'Toàn bộ nguyên liệu 13 loại thảo dược được lấy từ chính vùng trồng đạt chuẩn VietGAP của SADU — kiểm soát chất lượng từ gốc đến bàn ăn.'
                },
                {
                    icon: '✅',
                    title: 'Kiểm Tra Mỗi Ngày',
                    description: 'Mỗi lô trứng đều được kiểm tra chất lượng trực tiếp trước khi đóng gói và đảm bảo trứng được xuất đi đều là trứng mới trong ngày.'
                }
            ]
        },
        image: 'source/chuong-trai.jpg',
        imageAlt: 'Trang trại SADU — ảnh thực tế',
        ctaText: '🛒 ĐẶT HÀNG NGAY'
    },

    // Final CTA Section
    finalCta: {
        title: 'Bắt Đầu Hành Trình Ăn Sạch Hôm Nay',
        subtitle: 'Hàng nghìn gia đình đã tin dùng — Đến lượt bạn trải nghiệm sự khác biệt',
        highlights: [
            { icon: '🌿', text: '100% thảo dược tự nhiên, 0% kháng sinh' },
            { icon: '🥚', text: 'Cholesterol thấp hơn 1/2 so với trứng thường' },
            { icon: '🚚', text: 'Freeship toàn quốc cho combo từ 3 hộp' },
            { icon: '🛡️', text: 'Bảo hành 1 đổi 1 nếu lỗi vận chuyển' }
        ],
        ctaText: '🛒 ĐẶT HÀNG NGAY',
        ctaSubtext: 'Giao hàng toàn quốc • Thanh toán khi nhận hàng'
    }
};
