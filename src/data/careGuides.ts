
export interface CareGuide {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  image_url: string;
  slug: string;
  featured: boolean;
  created_at: string;
}

export const careGuidesData: CareGuide[] = [
  {
    id: 1,
    title: "Cách chọn cây phù hợp với không gian sống",
    category: "basics",
    excerpt: "Hướng dẫn chi tiết cách lựa chọn cây cảnh phù hợp với từng không gian trong nhà để tạo nên môi trường sống xanh và tươi mát.",
    content: `
      <h2>Hiểu về không gian của bạn</h2>
      <p>Trước khi chọn cây, bạn cần đánh giá kỹ không gian sống của mình. Mỗi loại cây có những yêu cầu khác nhau về ánh sáng, độ ẩm và không gian phát triển.</p>
      
      <h3>1. Đo lường ánh sáng tự nhiên</h3>
      <p>Quan sát ánh sáng tự nhiên trong nhà qua các thời điểm khác nhau trong ngày. Một số cây cần ánh sáng trực tiếp, trong khi những cây khác có thể phát triển tốt trong ánh sáng gián tiếp.</p>
      
      <h3>2. Xem xét kích thước không gian</h3>
      <p>Cây lớn phù hợp với phòng khách rộng rãi, trong khi cây nhỏ hoặc cây treo phù hợp với không gian nhỏ hẹp như phòng ngủ hoặc văn phòng.</p>
      
      <h3>3. Đánh giá mức độ chăm sóc</h3>
      <p>Nếu bạn là người mới bắt đầu, hãy chọn những loại cây dễ chăm sóc như cây lưỡi hổ, cây kim tiền, hoặc cây đuôi công.</p>
      
      <h2>Gợi ý cây cho từng không gian</h2>
      <ul>
        <li><strong>Phòng khách:</strong> Cây thiên điểu, cây đàn hương, cây bàng Singapore</li>
        <li><strong>Phòng ngủ:</strong> Cây lô hội, cây lưỡi hổ, cây lavender</li>
        <li><strong>Phòng tắm:</strong> Cây dương xỉ, cây trầu bà, cây cọ cảnh</li>
        <li><strong>Bếp:</strong> Cây húng quế, cây bạc hà, cây rau thơm</li>
      </ul>
      
      <h2>Lưu ý quan trọng</h2>
      <p>Luôn nghiên cứu kỹ về từng loại cây trước khi mua. Một số cây có thể độc hại với trẻ em và thú cưng, vì vậy cần cân nhắc kỹ trước khi đưa vào nhà.</p>
    `,
    image_url: "https://images.unsplash.com/photo-1463320726281-696a485928c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    slug: "cach-chon-cay-phu-hop-voi-khong-gian-song",
    featured: true,
    created_at: "2024-01-15T10:00:00Z"
  },
  {
    id: 2,
    title: "Chăm sóc cây trong nhà mùa đông",
    category: "basics",
    excerpt: "Mùa đông đặt ra nhiều thử thách cho việc chăm sóc cây trong nhà. Tìm hiểu cách điều chỉnh chế độ chăm sóc phù hợp.",
    content: `
      <h2>Thử thách của mùa đông</h2>
      <p>Mùa đông là thời kỳ khó khăn nhất cho cây trong nhà do ánh sáng yếu, không khí khô và nhiệt độ thấp. Việc điều chỉnh chế độ chăm sóc là vô cùng quan trọng.</p>
      
      <h3>1. Giảm tần suất tưới nước</h3>
      <p>Trong mùa đông, cây phát triển chậm hơn và cần ít nước hơn. Hãy kiểm tra độ ẩm đất trước khi tưới và chỉ tưới khi đất khô.</p>
      
      <h3>2. Tăng cường ánh sáng</h3>
      <p>Sử dụng đèn LED phát triển cây để bù đắp thiếu hụt ánh sáng tự nhiên. Đặt cây gần cửa sổ hướng nam để tận dụng tối đa ánh sáng.</p>
      
      <h3>3. Duy trì độ ẩm</h3>
      <p>Không khí khô trong nhà có thể làm hại cây. Sử dụng máy tạo ẩm hoặc đặt khay nước gần cây để tăng độ ẩm không khí.</p>
      
      <h2>Các loại cây chịu được mùa đông</h2>
      <ul>
        <li>Cây lưỡi hổ - rất bền và chịu được điều kiện khắc nghiệt</li>
        <li>Cây kim tiền - phát triển tốt trong ánh sáng yếu</li>
        <li>Cây đuôi công - dễ chăm sóc và ít cần nước</li>
      </ul>
    `,
    image_url: "https://images.unsplash.com/photo-1586973000348-fb72bd665fb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    slug: "cham-soc-cay-trong-nha-mua-dong",
    featured: true,
    created_at: "2024-01-20T14:30:00Z"
  },
  {
    id: 3,
    title: "Kỹ thuật tưới nước đúng cách",
    category: "watering",
    excerpt: "Tưới nước là yếu tố quan trọng nhất quyết định sự sống còn của cây. Học cách tưới nước đúng kỹ thuật để cây phát triển khỏe mạnh.",
    content: `
      <h2>Nguyên tắc cơ bản về tưới nước</h2>
      <p>Tưới nước không chỉ đơn giản là đổ nước vào chậu. Cần hiểu về nhu cầu nước của từng loại cây và các yếu tố ảnh hưởng đến việc hấp thụ nước.</p>
      
      <h3>1. Kiểm tra độ ẩm đất</h3>
      <p>Sử dụng ngón tay hoặc que đo độ ẩm để kiểm tra độ ẩm ở độ sâu 2-3cm. Chỉ tưới khi đất bắt đầu khô.</p>
      
      <h3>2. Thời điểm tưới nước</h3>
      <p>Tưới nước vào buổi sáng sớm là tốt nhất, giúp cây hấp thụ nước hiệu quả và tránh bốc hơi quá nhanh.</p>
      
      <h3>3. Lượng nước phù hợp</h3>
      <p>Tưới đều và chậm rãi cho đến khi nước chảy ra lỗ thoát nước. Điều này đảm bảo toàn bộ rễ được cung cấp nước.</p>
      
      <h2>Các sai lầm thường gặp</h2>
      <ul>
        <li><strong>Tưới quá nhiều:</strong> Gây thối rễ và cây chết</li>
        <li><strong>Tưới quá ít:</strong> Cây héo và phát triển kém</li>
        <li><strong>Tưới không đều:</strong> Một số rễ không được cung cấp nước</li>
      </ul>
      
      <h2>Chọn nước phù hợp</h2>
      <p>Nước mưa là tốt nhất cho cây. Nếu dùng nước máy, hãy để nước thoáng qua đêm để clo bay hơi.</p>
    `,
    image_url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    slug: "ky-thuat-tuoi-nuoc-dung-cach",
    featured: false,
    created_at: "2024-01-25T09:15:00Z"
  },
  {
    id: 4,
    title: "Cây cần bao nhiêu ánh sáng?",
    category: "light",
    excerpt: "Ánh sáng là nguồn năng lượng cho cây quang hợp. Hiểu rõ nhu cầu ánh sáng của cây để bố trí vị trí phù hợp trong nhà.",
    content: `
      <h2>Tầm quan trọng của ánh sáng</h2>
      <p>Ánh sáng là yếu tố thiết yếu cho quá trình quang hợp, giúp cây sản xuất thức ăn và phát triển. Thiếu ánh sáng, cây sẽ yếu đi và có thể chết.</p>
      
      <h3>1. Các mức độ ánh sáng</h3>
      <ul>
        <li><strong>Ánh sáng trực tiếp:</strong> Ánh sáng mặt trời chiếu thẳng vào cây</li>
        <li><strong>Ánh sáng gián tiếp:</strong> Ánh sáng phản xạ hoặc lọc qua rèm cửa</li>
        <li><strong>Ánh sáng yếu:</strong> Vùng xa cửa sổ hoặc trong góc tối</li>
      </ul>
      
      <h3>2. Dấu hiệu thiếu ánh sáng</h3>
      <p>Cây thiếu ánh sáng thường có các dấu hiệu: lá vàng úa, cây mọc cao bất thường, lá nhỏ và thưa thớt.</p>
      
      <h3>3. Cây phù hợp với từng mức ánh sáng</h3>
      <ul>
        <li><strong>Ánh sáng cao:</strong> Cây xương rồng, cây sen đá, cây hoa hồng</li>
        <li><strong>Ánh sáng trung bình:</strong> Cây đuôi công, cây dạ yến thảo</li>
        <li><strong>Ánh sáng thấp:</strong> Cây lưỡi hổ, cây trầu bà, cây kim tiền</li>
      </ul>
      
      <h2>Sử dụng đèn LED hỗ trợ</h2>
      <p>Trong trường hợp thiếu ánh sáng tự nhiên, có thể sử dụng đèn LED phát triển cây. Đặt đèn cách cây 30-60cm và chiếu 12-16 giờ mỗi ngày.</p>
    `,
    image_url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    slug: "cay-can-bao-nhieu-anh-sang",
    featured: false,
    created_at: "2024-02-01T11:45:00Z"
  },
  {
    id: 5,
    title: "Chọn đất trồng phù hợp",
    category: "soil",
    excerpt: "Đất là nền tảng cho sự phát triển của cây. Tìm hiểu cách chọn và pha trộn đất để tạo môi trường tốt nhất cho rễ cây.",
    content: `
      <h2>Vai trò của đất trong chăm sóc cây</h2>
      <p>Đất không chỉ giữ cây đứng mà còn cung cấp dưỡng chất, nước và oxy cho rễ. Loại đất phù hợp sẽ quyết định sự thành công trong việc trồng cây.</p>
      
      <h3>1. Đặc tính của đất tốt</h3>
      <ul>
        <li><strong>Thoát nước tốt:</strong> Không bị úng nước, tránh thối rễ</li>
        <li><strong>Giữ ẩm vừa phải:</strong> Duy trì độ ẩm cần thiết cho cây</li>
        <li><strong>Thoáng khí:</strong> Cho phép rễ hô hấp</li>
        <li><strong>Giàu dinh dưỡng:</strong> Cung cấp các chất cần thiết cho cây</li>
      </ul>
      
      <h3>2. Các loại đất phổ biến</h3>
      <ul>
        <li><strong>Đất sân vườn:</strong> Phù hợp với hầu hết các loại cây</li>
        <li><strong>Đất xơ dừa:</strong> Thoát nước tốt, phù hợp với cây sen đá</li>
        <li><strong>Đất than bùn:</strong> Giữ ẩm tốt, giàu dinh dưỡng</li>
      </ul>
      
      <h3>3. Pha trộn đất tại nhà</h3>
      <p>Công thức cơ bản: 40% đất sân vườn + 30% xơ dừa + 20% phân hữu cơ + 10% perlite hoặc cát sạch.</p>
      
      <h2>Cách kiểm tra chất lượng đất</h2>
      <p>Đất tốt khi nắm chặt sẽ vón cục nhẹ và dễ tán ra khi chạm. Không quá ướt đọng nước, không quá khô cứng như đá.</p>
      
      <h2>Thay đất định kỳ</h2>
      <p>Thay đất 1-2 năm một lần hoặc khi thấy cây phát triển chậm, đất cứng lại hoặc có mùi hôi.</p>
    `,
    image_url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    slug: "chon-dat-trong-phu-hop",
    featured: false,
    created_at: "2024-02-05T16:20:00Z"
  },
  {
    id: 6,
    title: "Phân bón hữu cơ cho cây cảnh",
    category: "fertilizer",
    excerpt: "Phân bón cung cấp dưỡng chất thiết yếu giúp cây phát triển khỏe mạnh. Tìm hiểu cách sử dụng phân bón hữu cơ an toàn và hiệu quả.",
    content: `
      <h2>Tại sao cây cần phân bón?</h2>
      <p>Cây trong chậu có không gian rễ hạn chế, không thể tự tìm dinh dưỡng như cây tự nhiên. Phân bón giúp bổ sung các chất cần thiết cho sự phát triển.</p>
      
      <h3>1. Các chất dinh dưỡng cơ bản</h3>
      <ul>
        <li><strong>Nitơ (N):</strong> Giúp lá xanh tốt, thúc đẩy tăng trưởng</li>
        <li><strong>Phốt pho (P):</strong> Phát triển rễ và hoa</li>
        <li><strong>Kali (K):</strong> Tăng sức đề kháng, chống bệnh</li>
      </ul>
      
      <h3>2. Phân bón hữu cơ tự nhiên</h3>
      <ul>
        <li><strong>Phân trùn quế:</strong> Giàu dinh dưỡng, cải thiện đất</li>
        <li><strong>Vỏ trứng:</strong> Cung cấp canxi, chống thối cuống</li>
        <li><strong>Cà phê bã:</strong> Cung cấp nitơ, cải thiện cấu trúc đất</li>
        <li><strong>Vỏ chuối:</strong> Giàu kali, giúp cây ra hoa</li>
      </ul>
      
      <h3>3. Cách bón phân đúng cách</h3>
      <p>Bón phân vào buổi sáng sớm hoặc chiều mát. Pha loãng phân theo hướng dẫn và tưới đều khắp gốc cây.</p>
      
      <h2>Lịch bón phân</h2>
      <ul>
        <li><strong>Mùa xuân-hè:</strong> 2-4 tuần/lần (cây phát triển mạnh)</li>
        <li><strong>Mùa thu-đông:</strong> 6-8 tuần/lần (cây nghỉ ngơi)</li>
      </ul>
      
      <h2>Dấu hiệu thiếu và thừa phân</h2>
      <p><strong>Thiếu phân:</strong> Lá vàng, cây phát triển chậm, ít hoa. <strong>Thừa phân:</strong> Lá cháy nâu, rễ thối, cây héo.</p>
    `,
    image_url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    slug: "phan-bon-huu-co-cho-cay-canh",
    featured: false,
    created_at: "2024-02-10T13:10:00Z"
  },
  {
    id: 7,
    title: "Phòng trừ sâu bệnh tự nhiên",
    category: "pests",
    excerpt: "Sâu bệnh có thể làm hại nghiêm trọng đến cây cảnh. Học cách phòng ngừa và xử lý bằng các phương pháp tự nhiên an toàn.",
    content: `
      <h2>Các loại sâu bệnh thường gặp</h2>
      <p>Sâu bệnh là mối đe dọa lớn đối với cây trong nhà. Việc phát hiện sớm và xử lý kịp thời sẽ cứu được cây khỏi tổn hại nghiêm trọng.</p>
      
      <h3>1. Sâu chích hút</h3>
      <ul>
        <li><strong>Rệp:</strong> Côn trùng nhỏ màu xanh hoặc đen, tấn công lá non</li>
        <li><strong>Nhện đỏ:</strong> Để lại vết chấm nhỏ trên lá, tạo tơ nhện</li>
        <li><strong>Rầy:</strong> Côn trùng nhỏ màu trắng bay quanh cây</li>
      </ul>
      
      <h3>2. Bệnh nấm</h3>
      <ul>
        <li><strong>Nấm đốm lá:</strong> Vết đốm nâu đen trên lá</li>
        <li><strong>Nấm phấn trắng:</strong> Lớp bột trắng trên bề mặt lá</li>
        <li><strong>Thối rễ:</strong> Rễ chuyển màu đen, mềm và hôi</li>
      </ul>
      
      <h3>3. Phương pháp phòng ngừa</h3>
      <ul>
        <li>Đảm bảo thông gió tốt xung quanh cây</li>
        <li>Tránh tưới nước lên lá, chỉ tưới vào gốc</li>
        <li>Kiểm tra cây thường xuyên để phát hiện sớm</li>
        <li>Cách ly cây mới mua trước khi đặt chung</li>
      </ul>
      
      <h2>Thuốc trừ sâu tự nhiên</h2>
      <ul>
        <li><strong>Nước xà phòng:</strong> 1 thìa xà phòng + 1 lít nước, xịt lá</li>
        <li><strong>Dầu neem:</strong> Thuốc trừ sâu sinh học an toàn</li>
        <li><strong>Tỏi ngâm rượu:</strong> Đánh bay côn trùng hiệu quả</li>
      </ul>
      
      <h2>Cách xử lý khi cây bị bệnh</h2>
      <p>Cắt bỏ phần bị bệnh, cách ly cây khỏi cây khác, và xử lý bằng thuốc tự nhiên. Nếu nghiêm trọng, có thể cần dùng thuốc hóa học chuyên dụng.</p>
    `,
    image_url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    slug: "phong-tru-sau-benh-tu-nhien",
    featured: false,
    created_at: "2024-02-15T08:30:00Z"
  }
];

// Helper function to get care guide by slug
export const getCareGuideBySlug = (slug: string): CareGuide | undefined => {
  return careGuidesData.find(guide => guide.slug === slug);
};

// Helper function to get care guides by category
export const getCareGuidesByCategory = (category: string): CareGuide[] => {
  if (category === 'all') return careGuidesData;
  return careGuidesData.filter(guide => guide.category === category);
};

// Helper function to get featured articles
export const getFeaturedCareGuides = (): CareGuide[] => {
  return careGuidesData.filter(guide => guide.featured);
};

// Helper function to get related articles (same category, excluding current)
export const getRelatedCareGuides = (currentId: number, category: string, limit: number = 3): CareGuide[] => {
  return careGuidesData
    .filter(guide => guide.category === category && guide.id !== currentId)
    .slice(0, limit);
};
