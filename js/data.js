/* ============================================
   SADU LANDING PAGE - DATA
   ============================================ */

const siteData = {


  // Navigation
  navigation: [
    { label: 'Sản Phẩm', href: '#products' },
    { label: 'Câu Chuyện', href: '#story' },
    { label: 'Lợi Ích', href: '#benefits' },
    { label: 'Liên Hệ', href: '#footer' }
  ],

  // Hero Section
  hero: {
    title: 'Trứng Gà Thảo Dược SADU',
    subtitle: 'Thơm Ngon, Không Tanh, Cholesterol Cực Thấp',
    description: 'Lựa chọn tính túy cho sức khỏe gia đình bạn. 100% thảo dược tự nhiên, 0% kháng sinh tồn dư.',
    stats: [
      { value: '100%', label: 'Thức Ăn Từ Thực Vật' },
      { value: '0%', label: 'Kháng Sinh Tồn Dư' },
      { value: '1/2', label: 'Cholesterol Thấp Hơn Trứng Thường' },
    ],
    buttons: [
      { text: 'Khám Phá Ngay', class: 'btn-primary', href: '#products' },
      // { text: 'Tìm Cửa Hàng', class: 'btn-secondary', href: '#footer' }
    ]
  },

  // Story Section
  story: {
    title: 'Từ Tình Yêu Tới Chất Lượng',
    subtitle: 'Sứ mệnh của chúng tôi là mang đến những quả trứng gà thảo dược tốt nhất, an toàn nhất cho sức khỏe gia đình bạn.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663344183182/nd8DyymyeUHes9kHCxyub5/sadu_farm_scene-kqQox7F9MpxD9QMm2HvYSD.webp',
    content: 'Tại Sadu, chúng tôi tin rằng một quả trứng tốt bắt đầu từ một cô gà hạnh phúc và khỏe mạnh. Mỗi quả trứng SADU là kết quả của sự tận tâm, chế độ ăn đặc biệt từ thảo dược tự nhiên, và yêu thương vô điều kiện dành cho từng con gà.',
    highlights: [
      { icon: '🌿', text: '100% Thảo Dược Tự Nhiên' },
      { icon: '✓', text: '0% Kháng Sinh Tồn Dư' },
      { icon: '❤️', text: 'Chăm Sóc Tình Yêu' }
    ]
  },

  // Process Section (Farm to Table)
  process: {
    title: "Quy Trình Từ Trang Trại Đến Bàn Ăn",
    subtitle: "Minh bạch từng khâu sản xuất vì sức khỏe gia đình bạn",
    steps: [
      {
        icon: "🌿",
        title: "1. Thức Ăn Thảo Dược Tự Nhiên",
        desc: "Gà được chăm sóc theo cách đặc biệt, ăn ngô, cám gạo, khô đậu tương,... và thảo dược tự nhiên."
      },
      {
        icon: "🥚",
        title: "2. Thu Hoạch & Chọn Lọc",
        desc: "Trứng được thu hoạch mỗi ngày, kiểm tra chất lượng nghiêm ngặt trước khi tới tay người tiêu dùng."
      },
      {
        icon: "🚚 ",
        title: "3. Giao hàng toàn quốc",
        desc: "Giao hàng toàn quốc. Đóng gói trong hộp giấy lịch sự, hoặc để trong thùng trấu có vách ngăn để vận chuyển xa."
      },
      {
        icon: "🔄",
        title: "4. Bảo hành 1 đổi 1",
        desc: "Bảo hành 1 đổi 1 hoặc hoàn tiền, nếu bị vỡ trong quá trình vận chuyển"
      }
    ]
  },

  // Products
  products: [
    {
      id: 'trung-thuong', // Thêm ID hoặc value riêng biệt
      name: '1 Hộp Trứng Thảo Dược', // Tên hiển thị ngắn gọn cho form
      fullName: '1 Hộp Trứng Thảo Dược (12 quả)', // Tên đầy đủ cho thẻ sản phẩm nếu cần
      quantity: '12 quả',
      priceDisplay: '119.500đ', // Giá hiển thị
      priceValue: 119500, // Giá trị số để tính toán
      description: 'Trải nghiệm ngắn',
      image: '/assets/images/image-product.png',
      featured: false,
      features: [
        '100% Thảo dược tự nhiên',
        '0% Kháng sinh tồn dư',
        'Phí ship 30.000đ'
      ]
    },
    {
      id: 'com-bo-3-hop',
      name: 'Gói Trải Nghiệm',
      fullName: 'Gói Trải Nghiệm: Mua 3 Hộp Tặng 1 Hộp',
      quantity: '48 quả',
      priceDisplay: '358.500đ',
      priceValue: 358500,
      description: 'Mua 3 Hộp Tặng 1 Hộp - Tối ưu chi phí cho bạn',
      image: '/assets/images/image-product.png',
      featured: true,
      features: [
        '100% Thảo dược tự nhiên',
        '0% Kháng sinh tồn dư',
        'Miễn phí vận chuyển toàn quốc'
      ]
    },
    // {
    //   id: 'trung-so',
    //   name: 'Mua 5 Tặng 2 (Trứng Gà So)',
    //   fullName: 'Mua 5 Tặng 2 (Trứng Gà So)',
    //   quantity: '84 quả',
    //   priceDisplay: '597.500đ',
    //   priceValue: 597500,
    //   description: 'Trứng tuy nhỏ nhưng chất lượng không hề nhỏ',
    //   image: '/assets/images/image-product.png',
    //   featured: false,
    //   features: [
    //     '100% Thảo dược tự nhiên',
    //     '0% Kháng sinh tồn dư',
    //     'Miễn phí vận chuyển toàn quốc',
    //     'Chỉ áp dụng cho trứng gà so (quả nhỏ)'
    //   ]
    // }
  ],

  // Combo Offer
  combo: {
    title: 'Gói Trải Nghiệm',
    description: 'Mua Combo 3 Hộp – Tiết Kiệm 20% + Tặng 1 hộp cùng loại',
    price: '358.500đ'
  },

  // Nutrition Comparison
  nutrition: [
    { nutrient: 'Cholesterol', sadu: 'Thấp (1/2 so với trứng thường)', regular: 'Cao', saduGood: true },
    { nutrient: 'Omega-3', sadu: 'Cao (từ thảo dược)', regular: 'Thấp', saduGood: true },
    { nutrient: 'Kháng Sinh Tồn Dư', sadu: '0%', regular: 'Có thể có', saduGood: true },
    // { nutrient: 'Protein', sadu: '6g/quả', regular: '6g/quả', saduGood: false },
    { nutrient: 'Choline', sadu: 'Cao (hỗ trợ não)', regular: 'Bình thường', saduGood: true },
    { nutrient: 'Lutein & Zeaxanthin', sadu: 'Cao (bảo vệ mắt)', regular: 'Bình thường', saduGood: true }
  ],

  // Benefits
  benefits: [
    {
      icon: '❤️',
      title: 'Tốt Cho Tim Mạch',
      description: 'Cholesterol thấp, giàu Omega-3 tự nhiên giúp bảo vệ hệ tim mạch'
    },
    {
      icon: '🧠',
      title: 'Hỗ Trợ Phát Triển Não',
      description: 'Choline và các vi chất từ thảo dược hỗ trợ phát triển não bộ trẻ em'
    },
    {
      icon: '👁️',
      title: 'Bảo Vệ Mắt',
      description: 'Lutein & Zeaxanthin tự nhiên giúp bảo vệ sức khỏe mắt'
    },
    {
      icon: '🛡️',
      title: 'Tăng Cường Miễn Dịch',
      description: 'Vitamin D, E, B12 và thảo dược tăng cường hệ miễn dịch tự nhiên'
    }
  ],


  // Giả lập danh sách ảnh feedback (Bạn hãy thay đổi src thành đường dẫn ảnh thật của bạn)
  feedbackImages: [
    { src: '/assets/images/fb1.jpg', alt: 'Khách hàng hài lòng 3' },
    { src: '/assets/images/fb2.jpg', alt: 'Khách hàng hài lòng 4' },
    // { src: '/assets/images/fb3.jpg', alt: 'Khách hàng hài lòng 3' },
    // { src: '/assets/images/fb4.jpg', alt: 'Khách hàng hài lòng 4' },
    { src: '/assets/images/fb10.jpg', alt: 'Khách hàng hài lòng 10' },
    { src: '/assets/images/fb11.jpg', alt: 'Khách hàng hài lòng 11' },
    { src: '/assets/images/fb12.jpg', alt: 'Khách hàng hài lòng 12' },
    { src: '/assets/images/fb13.jpg', alt: 'Khách hàng hài lòng 13' },
    { src: '/assets/images/fb14.jpg', alt: 'Khách hàng hài lòng 14' },
    { src: '/assets/images/fb15.jpg', alt: 'Khách hàng hài lòng 15' },
    { src: '/assets/images/fb16.jpg', alt: 'Khách hàng hài lòng 16' },

  ],

  // Testimonials
  testimonials: [
    {
      name: 'Chị Lan',
      location: 'Hà Nội',
      avatar: '👩',
      text: 'Từ ngày ăn trứng Sadu, con nhà mình không còn sợ mùi tanh của trứng nữa. Bé ăn ngon lành, mẹ yên tâm.'
    },
    {
      name: 'Anh Tuấn',
      location: 'Đầu Bếp Chuyên Nghiệp',
      avatar: '👨‍🍳',
      text: 'Màu lòng đỏ cam đậm tự nhiên nhìn là biết trứng chất lượng rồi. Tôi dùng cho các món ăn đặc biệt.'
    },
    {
      name: 'Chị Hương',
      location: 'TP.HCM',
      avatar: '👩‍⚕️',
      text: 'Bố tôi bị cao huyết áp, bác sĩ khuyên ăn trứng Sadu. Sau 3 tháng, chỉ số cholesterol giảm đáng kể.'
    }
  ],

  // Gallery
  gallery: [
    {
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663344183182/nd8DyymyeUHes9kHCxyub5/sadu_farm_scene-kqQox7F9MpxD9QMm2HvYSD.webp',
      title: 'Trang Trại Xanh Mướt',
      description: 'Gà chạy bộ tự do trong vườn thảo dược'
    },
    {
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663344183182/nd8DyymyeUHes9kHCxyub5/sadu_herbs_blend-2MuBeFH7eiyp5Srr4ZnCBH.webp',
      title: 'Thảo Dược Tự Nhiên',
      description: 'Các loại thảo dược chất lượng cao'
    },
    {
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663344183182/nd8DyymyeUHes9kHCxyub5/sadu_family_meal-PNq74LDuvBQLYpw2yrV8Ut.webp',
      title: 'Gia Đình Hạnh Phúc',
      description: 'Chia sẻ bữa ăn ngon cùng gia đình'
    }
  ],

  // FAQ
  faqs: [
    {
      question: 'Trứng Sadu khác gì so với trứng thường?',
      answer: 'Trứng Sadu được nuôi từ gà ăn 100% thảo dược tự nhiên (Cà gai leo, mật nhân, v.v.), không sử dụng kháng sinh, và có hàm lượng cholesterol chỉ bằng 1/2 so với trứng thường. Lòng đỏ có màu cam đậm tự nhiên, vị béo ngậy, không tanh.'
    },
    {
      question: 'Giao hàng mất bao lâu?',
      answer: '- Đối với các đơn trong nội thành TP Hà Nội: thời gian giao hàng dao động từ 2-3 ngày (Kể từ khi lên đơn thành công). <br>- Đối với các tỉnh thành khác: Tùy thuộc vào vị trí của bạn mà thời gian giao hàng dao động từ 4-7 ngày (Kể từ khi lên đơn thành công).'
    },
    {
      question: 'Trứng để được bao nhiêu ngày và bảo quản như thế nào?',
      answer: 'Bạn có thể bảo quản trứng theo hai cách sau: <br>- Ở nhiệt độ thường: trứng để được từ 15 - 20 ngày. <br> - Trong ngăn mát tủ lạnh: trứng để được tới 45 ngày ạ. Lưu ý: Nên bảo quản trong ngăn mát tủ lạnh.'
    },
    {
      question: 'Có chính sách đổi trả không?',
      answer: 'Có, SADU có chính sách 1 đổi 1 hoặc hoàn tiền cho các trường hợp trứng bị vỡ trong quá trình vận chuyển. Nếu trứng không tươi hoặc bị vỡ, vui lòng liên hệ với chúng tôi qua hotline hoặc fanpage để được hỗ trợ. <br>(Lưu ý: Cần quay hoặc chụp lại hình ảnh khi mở hộp)'
    },
    {
      question: 'Trứng Sadu có phù hợp cho trẻ em không?',
      answer: 'Có, trứng Sadu rất phù hợp cho trẻ em. Nó giàu protein, choline (hỗ trợ phát triển não), và các vi chất từ thảo dược. Hàm lượng cholesterol thấp cũng an toàn cho trẻ. Tuy nhiên, nên tham khảo ý kiến bác sĩ trước nếu trẻ có dị ứng.'
    },
    {
      question: 'Làm thế nào để biết đây là hàng chính hãng của SADU?',
      answer: 'Để nhận biết sản phẩm chính hãng của SADU, bạn có thể dựa vào các đặc điểm sau:<br> - Trên mỗi quả trứng đều có tem SADU.<br>- Vỏ thùng có in đầy đủ thông tin địa chỉ trang trại, mã vạch để truy xuất nguồn gốc.<br>- Đặc biệt, số hotline chính thức 19008952 của công ty sẽ được in trên bao bì sản phẩm.'
    },
    {
      question: 'Sadu có chứng chỉ chất lượng không?',
      answer: 'Có, tất cả sản phẩm Sadu đều được kiểm định chất lượng và không chứa kháng sinh tồn dư. Chúng tôi tuân thủ các tiêu chuẩn vệ sinh an toàn thực phẩm. Bạn có thể yêu cầu chứng chỉ khi đặt hàng.'
    },
    {
      question: 'Có hỗ trợ khách hàng 24/7 không?',
      answer: 'Có, chúng tôi có đội hỗ trợ khách hàng 24/7. Bạn có thể liên hệ qua Hotline: 1900 8952, Email: nongnghiepcncthanglong@gmail.com hoặc nhắn tin qua fanpage Trứng Gà Thảo Dươc SADU & SADU FARM.'
    }
  ],

  // Contact Info
  contact: {
    phone: '1900 8952',
    page: 'https://www.facebook.com/trunggasach.sadu/',
    email: "nongnghiepcncthanglong@gmail.com",
    address: 'Thôn Ứng Hòa - Xã Quảng Bị - Huyện Chương Mỹ - Hà Nội',
  },

  // Certificates Section (Thay thế cho Gallery cũ)
  certificates: [
    {
      image: '/assets/images/chung-nhan1.jpg', // Thay bằng ảnh thật
      title: 'Chứng Nhận Phù Hợp Tiêu Chuẩn',
      description: 'Được cấp bởi Sở Nông Nghiệp và Môi Trường Hà Nội'
    },
    {
      image: '/assets/images/chung-nhan2.jpg', // Thay bằng ảnh thật
      title: 'Đủ Điều Kiện An Toàn Thực Phẩm',
      description: 'Được cấp bởi Phòng Kinh Tế Huyện Chương Mỹ'
    },
    {
      image: '/assets/images/chung-nhan4.jpg', // Thay bằng ảnh thật
      title: 'Kết quả kiểm nghiệm an toàn',
      description: 'Được cấp bởi Trung Tâm Kiểm Nghiệm NATEK'
    },
    {
      image: '/assets/images/chung-nhan3.2.jpg', // Thay bằng ảnh thật
      title: 'Kết quả kiểm nghiệm an toàn',
      description: 'Được cấp bởi Trung Tâm Kiểm Nghiệm NATEK'
    },
    {
      image: '/assets/images/chung-nhan3.1.jpg', // Thay bằng ảnh thật
      title: 'Kết quả kiểm nghiệm an toàn',
      description: 'Được cấp bởi Trung Tâm Kiểm Nghiệm NATEK'
    }
  ],


};
