// js/data.js
/* ============================================
   SADU LANDING PAGE - DATA
   ============================================ */

const siteData = {

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
        { label: 'Đánh Giá', href: '#testimonials' },
        { label: 'Hỏi Đáp', href: '#faq' },
        { label: 'Liên Hệ', href: '#footer' }
    ],

    // Hero Section
    hero: {
        discountBadge: 'GIẢM 20%',
        discountText: 'MUA 3 TẶNG 1',
        title: 'TRỨNG GÀ THẢO DƯỢC SADU',
        description: 'Dinh dưỡng vàng cho mẹ bầu, mẹ bỉm sữa và gia đình. Nuôi bằng thảo dược tự nhiên, không kháng sinh, cholesterol thấp chỉ 1/2 so với trứng thường.',
        ctaText: 'ĐẶT MUA NGAY',
        image: 'source/banner-2.jpg'
    },

    // Benefits Section
    benefits: [
        {
            icon: '✓',
            title: 'Bảo Hành Chính Hãng',
            description: 'Cam Kết 3 KHÔNG : Không Kháng Sinh - Không Chất Kích Thích - Không Cám Công Nghiệp'
        },
        {
            icon: '🚚',
            title: 'Giao Hàng Toàn Quốc',
            description: 'Giao hàng toàn quốc, đóng gói cẩn thận'
        },
        {
            icon: '🔄',
            title: '1 ĐỔI 1',
            description: 'Bảo hành 1 đổi 1 hoặc hoàn tiền, nếu bị vỡ trong quá trình vận chuyển'
        },
        {
            icon: '💬',
            title: 'Hỗ Trợ 24/7',
            description: 'Tư vấn miễn phí, hỗ trợ khách hàng liên tục'
        }
    ],

    // Why Section
    why: {
        title: 'Tại sao bạn nên lựa chọn Trứng Gà Thảo Dược SADU ?',
        farmStory: {
            title: 'Cam kết 3 KHÔNG từ SADU',
            image: 'source/yolk.jpg',
            uspList: [
                'KHÔNG kháng sinh',
                'KHÔNG hormone tăng trưởng',
                'KHÔNG cám công nghiệp'
            ],
            description: 'Đàn gà được ăn thức ăn 100% từ thực vật (ngô sơn la, cám gạo tươi, khô đậu tương, khoáng, premix,...), thức ăn được phối trộn thêm 13 loại thảo dược tự nhiên (cà gai leo, xạ đen, đinh lăng, khôi đốm,...), uống nước sạch và được chăm sóc bài bản để cho ra những quả trứng an toàn nhất.'
        },
        comparison: {
            image: 'source/comparison.jpg',
            title: 'Sự khác biệt được nhìn thấy bằng mắt thường',
            description: 'Lòng đỏ trứng SADU luôn sánh màu, tươi ngon và đậm đà hơn so với trứng thường. Đây là kết quả của chế độ dinh dưỡng tự nhiên và chăm sóc đặc biệt từ trang trại.'
        },
        safety: {
            image: 'source/me-bau-3.jpg',
            title: 'An Toàn Cho Mẹ Bầu & Mẹ Bỉm Sữa',
            description: 'Chất lượng và độ an toàn của thực phẩm cho gia đình là ưu tiên hàng đầu. Trứng thường chứa tồn dư kháng sinh từ thức ăn công nghiệp, gây lo lắng cho sức khỏe gia đình, đặc biệt là bé nhỏ.'
        }
    },

    // Statistics Section
    statistics: {
        title: 'Những Con Số Ấn Tượng',
        stats: [
            {
                icon: '👨‍👩‍👧‍👦',
                number: '30,000+',
                label: 'Gia Đình Tin Dùng',
                description: 'Hàng nghìn gia đình đã tin tưởng lựa chọn'
            },
            {
                icon: '🥚',
                number: '1,500,000+',
                label: 'Quả Trứng Bán Ra',
                description: 'Số lượng trứng đã được phân phối'
            },
            {
                icon: '⭐',
                number: '40,200+',
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

    // Gift Carousel Section
    giftCarousel: {
        title: 'Quà Tặng Ý Nghĩa',
        images: [
            { src: 'source/qua-5.png', alt: 'Chứng nhận' },
            { src: 'source/qua-1.png', alt: 'Khay trứng' },
            { src: 'source/qua-2.png', alt: 'Mẹ bầu' },
            { src: 'source/qua-7.png', alt: 'Mẹ và bé' },
            { src: 'source/qua-3.png', alt: 'Lòng đỏ trứng' }
        ]
    },

    // Comparison Table
    comparison: [
        { criteria: 'Đội Ngũ Chuyên Gia', sadu: true, regular: false },
        { criteria: 'Thức Ăn 100% Từ Thực Vật', sadu: true, regular: false },
        { criteria: 'Không Kháng Sinh', sadu: true, regular: false },
        { criteria: 'Cholesterol Thấp', sadu: '✓ (125mg)', regular: '✗ (380mg)' },
        { criteria: 'Omega-3 Cao', sadu: true, regular: false },
        { criteria: 'Chế độ chăm sóc đặc biệt', sadu: true, regular: false },
        { criteria: 'An Toàn Cho Mẹ Bầu', sadu: true, regular: false }
    ],

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

    // Egg Comparison Section
    eggComparison: {
        title: 'Trứng Gà Thảo Dược SADU Có Gì Khác Biệt?',
        subtitle: 'So sánh chi tiết giữa trứng SADU và trứng công nghiệp thông thường',
        comparisons: [
            {
                icon: '🌿',
                title: 'Nguồn Thức Ăn',
                sadu: '100% thảo dược tự nhiên: ngô Sơn La, cám gạo tươi, khô đậu tương, 13 loại thảo dược (cà gai leo, xạ đen, đinh lăng, khôi đốm...)',
                regular: 'Cám công nghiệp phối trộn sẵn, có thể chứa chất kích thích tăng trưởng và kháng sinh'
            },
            {
                icon: '💊',
                title: 'Cholesterol',
                sadu: 'Thấp hơn 1/2 so với trứng thường (125mg/quả) - An toàn cho tim mạch',
                regular: 'Cao (380mg/quả) - Không tốt cho người có vấn đề về tim mạch'
            },
            {
                icon: '🥚',
                title: 'Chất Lượng Trứng',
                sadu: 'Lòng đỏ sánh đặc, màu cam đậm, tươi lâu, không tanh khi ăn sống',
                regular: 'Lòng đỏ nhạt, dễ vỡ, có mùi tanh, thời gian bảo quản ngắn'
            },
            {
                icon: '🔬',
                title: 'An Toàn Thực Phẩm',
                sadu: 'Không tồn dư kháng sinh, không hormone, không chất bảo quản - Đạt chứng nhận an toàn thực phẩm',
                regular: 'Có thể tồn dư kháng sinh và hormone từ thức ăn công nghiệp'
            },
            {
                icon: '👶',
                title: 'Đối Tượng Sử Dụng',
                sadu: 'An toàn cho mọi đối tượng: mẹ bầu, mẹ bỉm, trẻ em, người già, người ăn chay',
                regular: 'Hạn chế cho mẹ bầu, trẻ nhỏ và người có bệnh lý đặc biệt'
            },
            {
                icon: '⏱️',
                title: 'Thời Gian Bảo Quản',
                sadu: 'Nhiệt độ thường: 15-20 ngày | Ngăn mát tủ lạnh: đến 45 ngày',
                regular: 'Nhiệt độ thường: 7-10 ngày | Ngăn mát tủ lạnh: 20-30 ngày'
            }
        ]
    },

    // Products
    products: [
        {
            id: "1-hop",
            name: "1 HỘP TRỨNG GÀ THẢO DƯỢC SADU",
            originalPrice: 0,
            priceValue: 149500,
            priceDisplay: "149.500đ (đã bao gồm 30.000đ tiền ship)",
            specs: [
                "✓ 1 hộp 12 quả",
                "✓ Phụ thu 30.000đ tiền ship",
                "✓ Bảo hành 1 đổi 1 (lỗi do vận chuyển)"
            ],
            highlightSpec: true,
            image: "source/qua-1.png",
            featured: false // ⭐ Set true để làm sản phẩm nổi bật
        },
        {
            id: "3-hop",
            name: "COMBO 3 HỘP TẶNG 1 HỘP",
            originalPrice: 478000,
            priceValue: 358500,
            priceDisplay: "358.500đ",
            specs: [
                "✓ 4 hộp x 12 quả",
                "✓ Miễn phí ship toàn quốc",
                "✓ Bảo hành 1 đổi 1 (lỗi do vận chuyển)"
            ],
            highlightSpec: true,
            image: "source/qua-1.png",
            featured: true
        },
        {
            id: "trung-so",
            name: "COMBO 5 HỘP TẶNG 2 (TRỨNG SO)",
            originalPrice: 836500,
            priceValue: 597500,
            priceDisplay: "597.500đ",
            specs: [
                "✓ 7 hộp x 12 quả",
                "✓ Miễn phí ship toàn quốc",
                "✓ Bảo hành 1 đổi 1 (lỗi do vận chuyển)",
                "Chỉ áp dụng cho sản phẩm trứng so (trứng nhỏ)"
            ],
            highlightSpec: true,
            image: "source/qua-1.png",
            featured: false
        },

    ],

    // Testimonials
    testimonials: [
        {
            name: 'Chị Hương',
            role: 'Mẹ bầu - Tháng 7',
            avatar: 'source/avatar-1.jpg',
            content: 'Mình rất lo lắng về chất lượng trứng cho thai kỳ. Sau khi dùng Sadu, mình cảm thấy yên tâm vì sản phẩm hoàn toàn tự nhiên và không có kháng sinh. Lòng đỏ sánh màu, ngon lắm!'
        },
        {
            name: 'Chị Linh',
            role: 'Mẹ bỉm sữa - Con 3 tháng',
            avatar: 'source/avatar-2.jpg',
            content: 'Sau khi sinh, mình cần ăn nhiều trứng để tăng sữa. Trứng Sadu rất tốt, cholesterol thấp, lại không có kháng sinh. Con mình khỏe mạnh và sữa cũng nhiều hơn.'
        },
        {
            name: 'Anh Long',
            role: 'Khách hàng mới',
            avatar: 'source/avatar-4.jpg',
            content: '10 điểm khâu vận chuyển, sản phẩm mà đúng như chất lượng quảng cáo thì cũng cho 10 điểm. Anh mua hàng ăn uống rất kĩ tính, thường thì anh trả rảnh mà feedback, nhưng sản phẩm tốt cho sức khỏe thì cần phải cảm ơn người sản xuất.'
        },
        {
            name: 'Chị Bích',
            role: 'Ăn chay',
            avatar: 'source/avatar-5.jpg',
            content: 'Gia đình mình ăn chay tháng 10 ngày, có trứng sạch thuần chay là gia đình mình an tâm rồi. Cảm ơn shop.'
        },
        {
            name: 'Chị Minh',
            role: 'Mẹ trẻ - Con 2 tuổi',
            avatar: 'source/avatar-3.jpg',
            content: 'Mình mua Sadu cho cả gia đình. Trứng tươi, ngon, an toàn cho con. Mình đã mua tại sadu 2 năm nay rồi.'
        }
    ],

    // Customer Feedback Images (Masonry Gallery)
    feedbackImages: [
        { src: 'source/fb1.jpg', alt: 'Khách hàng hài lòng 1' },
        { src: 'source/fb2.jpg', alt: 'Khách hàng hài lòng 2' },
        { src: 'source/fb3.jpg', alt: 'Khách hàng hài lòng 3' },
        { src: 'source/fb4.jpg', alt: 'Khách hàng hài lòng 4' },
        { src: 'source/fb5.jpg', alt: 'Khách hàng hài lòng 4' },
        { src: 'source/fb6.jpg', alt: 'Khách hàng hài lòng 4' },
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
            answer: 'Có, chúng tôi có đội hỗ trợ khách hàng 24/7. Bạn có thể liên hệ qua Hotline: 1900 8952, Email: nongnghiepcncthanglong@gmail.com hoặc nhắn tin qua fanpage Trứng Gà Thảo Dươc SADU & SADU FARM.'
        }
    ],

    // Contact Info
    contact: {
        phone: '1900 8952',
        email: 'nongnghiepcncthanglong@gmail.com',
        address: 'HTX NÔNG NGHIỆP CÔNG NGHỆ CAO KIÊN CÀ - Thôn Ứng Hòa - Xã Quảng Bị - TP.Hà Nội.',
        facebook: 'https://www.facebook.com/trunggasach.sadu/',
        socialLinks: [
            { name: 'Facebook', url: 'https://www.facebook.com/trunggasach.sadu/', icon: 'f' },
            { name: 'Instagram', url: '#', icon: '📷' },
            { name: 'Zalo', url: '#', icon: 'Z' }
        ]
    },

    // Customers for Alert Notification
    customers: [
        { name: 'Nguyễn Thị Hương', product: 'Trứng Gà Thảo Dược - 1 Hộp Trứng' },
        { name: 'Trần Văn Đức', product: 'Trứng Gà Thảo Dược - 3 Hộp Tặng 1' },
        { name: 'Phạm Thị Linh', product: 'Trứng Gà Thảo Dược - 3 Hộp Tặng 1' },
        { name: 'Hoàng Minh Tuấn', product: 'Trứng Gà Thảo Dược - 3 Hộp Tặng 1' },
        { name: 'Lê Thị Hoa', product: 'Trứng Gà Thảo Dược - 3 Hộp Tặng 1' },
        { name: 'Đỗ Văn Hùng', product: 'Trứng Gà Thảo Dược - 3 Hộp Tặng 1' },
        { name: 'Vũ Thị Xuân', product: 'Trứng Gà Thảo Dược - 1 Hộp Trứng' },
        { name: 'Bùi Văn Long', product: 'Trứng Gà Thảo Dược - 3 Hộp Tặng 1' },
        { name: 'Trần Ngọc Bảo', product: 'Trứng Gà Thảo Dược - 5 Hộp Tặng 2' },
        { name: 'Trương Thị Mai', product: 'Trứng Gà Thảo Dược - 3 Hộp Tặng 1' },
        { name: 'Nguyễn Quỳnh Nga', product: 'Trứng Gà Thảo Dược - 5 Hộp Tặng 2' },
        { name: 'Ngô Như', product: 'Trứng Gà Thảo Dược - 5 Hộp Tặng 2' }
    ]
};
