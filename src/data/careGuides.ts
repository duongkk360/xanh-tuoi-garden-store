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
  },
  {
    id: 8,
    title: "Nghệ thuật tạo dáng và cắt tỉa cây cảnh",
    category: "basics",
    excerpt: "Tạo dáng và cắt tỉa không chỉ giúp cây đẹp mắt mà còn kích thích phát triển khỏe mạnh. Khám phá các kỹ thuật chuyên nghiệp từ cơ bản đến nâng cao.",
    content: `
      <h2>Tầm quan trọng của việc cắt tỉa cây cảnh</h2>
      <p>Cắt tỉa cây cảnh không chỉ là việc làm cho cây trở nên đẹp mắt mà còn có ý nghĩa sâu sắc hơn trong việc duy trì sức khỏe và sự phát triển bền vững của cây. Việc cắt tỉa đúng cách giúp cây phân bổ năng lượng hiệu quả, loại bỏ những bộ phận không cần thiết và kích thích sự phát triển của những nhánh mới khỏe mạnh.</p>
      
      <h3>1. Lợi ích của việc cắt tỉa</h3>
      <p>Cắt tỉa mang lại nhiều lợi ích to lớn cho cây cảnh. Đầu tiên, việc loại bỏ những lá già, héo úa và bị bệnh giúp cây tập trung năng lượng vào việc phát triển những bộ phận khỏe mạnh. Thứ hai, cắt tỉa giúp cải thiện độ thông thoáng, cho phép ánh sáng và không khí lưu thông tốt hơn đến mọi phần của cây. Thứ ba, việc này còn giúp ngăn ngừa sâu bệnh ẩn náp và phát triển trong những khu vực tối tăm, ẩm ướt.</p>
      
      <h3>2. Thời điểm cắt tỉa phù hợp</h3>
      <p>Thời điểm cắt tỉa đóng vai trò quyết định đến hiệu quả của việc chăm sóc cây. Đối với hầu hết các loại cây trong nhà, mùa xuân và đầu mùa hè là thời điểm lý tưởng nhất. Đây là lúc cây đang trong giai đoạn phát triển mạnh mẽ, có khả năng phục hồi nhanh chóng sau khi bị cắt tỉa. Tránh cắt tỉa vào mùa đông khi cây đang trong trạng thái nghỉ ngơi, vì điều này có thể gây stress và làm chậm quá trình phục hồi.</p>
      
      <h3>3. Dụng cụ cắt tỉa chuyên nghiệp</h3>
      <ul>
        <li><strong>Kéo cắt tỉa nhỏ:</strong> Dành cho cắt lá và cành nhỏ, lưỡi sắc bén và dễ điều khiển</li>
        <li><strong>Kéo cắt cành:</strong> Cho những cành to hơn, có khả năng cắt sạch mà không làm tổn thương cây</li>
        <li><strong>Dao cắt đa năng:</strong> Tiện lợi cho việc tỉa nhỏ và tạo hình chi tiết</li>
        <li><strong>Cồn y tế:</strong> Khử trùng dụng cụ trước và sau khi sử dụng để tránh lây lan bệnh</li>
      </ul>
      
      <h2>Kỹ thuật cắt tỉa cơ bản</h2>
      
      <h3>1. Cắt tỉa duy trì (Maintenance Pruning)</h3>
      <p>Đây là hình thức cắt tỉa thường xuyên nhất, nhằm duy trì hình dáng và sức khỏe của cây. Bao gồm việc loại bỏ lá vàng, héo úa, cành chết và những bộ phận bị sâu bệnh. Thực hiện việc này thường xuyên, khoảng 2-3 tuần một lần, giúp cây luôn trong trạng thái tốt nhất.</p>
      
      <h3>2. Cắt tỉa tạo hình (Formative Pruning)</h3>
      <p>Mục đích của loại cắt tỉa này là tạo ra hình dáng mong muốn cho cây. Cần thực hiện từ từ, theo từng giai đoạn để cây có thời gian thích nghi. Luôn cắt ở góc 45 độ, cách nút lá khoảng 0.5cm để kích thích nảy mầm mới.</p>
      
      <h3>3. Cắt tỉa phục hồi (Rejuvenation Pruning)</h3>
      <p>Áp dụng cho những cây đã lâu không được chăm sóc hoặc cây bị yếu đi. Cắt bỏ tối đa 1/3 tổng khối lượng cây mỗi lần, cho phép cây phục hồi dần dần mà không bị shock.</p>
      
      <h2>Nghệ thuật tạo dáng nâng cao</h2>
      
      <h3>1. Kỹ thuật Pinching (Bứt ngọn)</h3>
      <p>Đây là kỹ thuật tinh tế nhất trong việc tạo dáng cây. Bằng cách bứt nhẹ những chồi non ở đầu cành, bạn có thể kiểm soát hướng phát triển và khuyến khích cây phân nhánh nhiều hơn. Kỹ thuật này đặc biệt hiệu quả với cây húng quế, bạc hà và các loại cây thảo dược.</p>
      
      <h3>2. Kỹ thuật Training (Dẫn hướng)</h3>
      <p>Sử dụng dây buộc mềm hoặc que tre nhỏ để dẫn hướng cành cây phát triển theo ý muốn. Phương pháp này đòi hỏi sự kiên nhẫn vì cần thời gian để cây thích nghi với hình dáng mới. Kiểm tra và điều chỉnh dây buộc thường xuyên để tránh cắt vào vỏ cây.</p>
      
      <h3>3. Kỹ thuật Topiary</h3>
      <p>Đây là nghệ thuật tạo hình cây thành những hình dạng hình học hoặc tượng hình. Mặc dù phức tạp, nhưng với sự kiên nhẫn và kỹ thuật đúng, bạn có thể tạo ra những tác phẩm nghệ thuật sống tuyệt đẹp từ các loại cây như tùng la hán, ngọc bích hoặc hồng anh.</p>
      
      <h2>Chăm sóc sau cắt tỉa</h2>
      <p>Sau khi cắt tỉa, cây cần được chăm sóc đặc biệt để phục hồi nhanh chóng. Giảm lượng nước tưới trong vài ngày đầu vì cây có ít lá hơn để bốc hơi nước. Đặt cây ở nơi có ánh sáng gián tiếp, tránh ánh sáng trực tiếp mạnh có thể gây stress. Không bón phân trong 2-3 tuần đầu để tránh kích thích quá mức khi cây đang yếu.</p>
      
      <h2>Lưu ý đặc biệt cho từng loại cây</h2>
      <ul>
        <li><strong>Cây có nhựa (như cây sung):</strong> Đeo găng tay khi cắt tỉa, nhựa có thể gây kích ứng da</li>
        <li><strong>Cây ra hoa:</strong> Cắt tỉa ngay sau khi hết hoa để chuẩn bị cho đợt ra hoa tiếp theo</li>
        <li><strong>Cây lá kim:</strong> Cắt tỉa ít và nhẹ nhàng, tránh cắt vào thân gỗ cũ</li>
        <li><strong>Cây mọng nước:</strong> Để vết cắt khô ráo trước khi tưới nước để tránh thối</li>
      </ul>
      
      <h2>Sai lầm thường gặp và cách tránh</h2>
      <p>Nhiều người mắc lỗi cắt tỉa quá nhiều một lúc, làm cây bị shock và có thể chết. Hãy nhớ nguyên tắc "ít hơn là nhiều hơn". Một sai lầm khác là cắt tỉa khi dụng cụ chưa được khử trùng, dẫn đến lây lan bệnh giữa các cây. Cuối cùng, cắt tỉa vào thời điểm không phù hợp, đặc biệt là khi cây đang stress vì thiếu nước, thiếu ánh sáng hoặc vừa được thay chậu.</p>
    `,
    image_url: "https://images.unsplash.com/photo-1565011523534-747a8601c6d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    slug: "nghe-thuat-tao-dang-va-cat-tia-cay-canh",
    featured: false,
    created_at: "2024-02-20T10:00:00Z"
  },
  {
    id: 9,
    title: "Hệ thống tưới nước tự động cho cây trong nhà",
    category: "watering",
    excerpt: "Xây dựng hệ thống tưới nước tự động thông minh giúp cây luôn được cung cấp nước đầy đủ ngay cả khi bạn vắng nhà dài ngày. Hướng dẫn từ đơn giản đến phức tạp.",
    content: `
      <h2>Tại sao cần hệ thống tưới nước tự động?</h2>
      <p>Trong cuộc sống hiện đại, việc duy trì một khu vườn trong nhà đôi khi trở nên khó khăn do lịch trình bận rộn hoặc những chuyến đi dài ngày. Hệ thống tưới nước tự động không chỉ giải quyết vấn đề này mà còn mang lại nhiều lợi ích vượt trội so với việc tưới nước thủ công. Nó đảm bảo cây được cung cấp nước đều đặn, đúng lượng và đúng thời điểm, giúp cây phát triển tối ưu.</p>
      
      <h3>1. Lợi ích của hệ thống tự động</h3>
      <p>Hệ thống tưới nước tự động mang lại tính nhất quán mà con người khó có thể duy trì. Cây được tưới nước đều đặn theo lịch trình cố định, giúp chúng phát triển ổn định mà không bị shock do thay đổi chế độ tưới. Hơn nữa, hệ thống này giúp tiết kiệm nước đáng kể vì chỉ cung cấp đúng lượng nước cần thiết, tránh lãng phí do tưới quá nhiều.</p>
      
      <h3>2. Tiết kiệm thời gian và công sức</h3>
      <p>Với hệ thống tự động, bạn không cần phải nhớ lịch tưới nước cho từng loại cây khác nhau. Điều này đặc biệt hữu ích khi bạn có nhiều cây với nhu cầu nước khác nhau. Thời gian được tiết kiệm có thể dành cho những hoạt động chăm sóc cây khác quan trọng hơn như cắt tỉa, bón phân hay quan sát sức khỏe cây.</p>
      
      <h2>Các loại hệ thống tưới nước tự động</h2>
      
      <h3>1. Hệ thống giọt (Drip System) - Cơ bản</h3>
      <p>Đây là hệ thống đơn giản nhất và phù hợp nhất cho người mới bắt đầu. Hệ thống hoạt động dựa trên nguyên lý trọng lực, nước từ bình chứa sẽ nhỏ giọt từ từ vào đất thông qua các ống nhỏ hoặc dây dẫn nước. Ưu điểm của hệ thống này là chi phí thấp, dễ lắp đặt và không cần điện. Tuy nhiên, tốc độ tưới chậm và phụ thuộc vào độ cao của bình chứa.</p>
      
      <h4>Cách lắp đặt hệ thống giọt đơn giản:</h4>
      <ul>
        <li><strong>Bước 1:</strong> Chuẩn bị bình chứa nước 5-10 lít, đặt cao hơn chậu cây khoảng 1-2 mét</li>
        <li><strong>Bước 2:</strong> Khoan lỗ nhỏ ở đáy bình, lắp vòi điều chỉnh tốc độ nhỏ giọt</li>
        <li><strong>Bước 3:</strong> Nối ống nhỏ đường kính 4-6mm từ vòi đến gốc cây</li>
        <li><strong>Bước 4:</strong> Điều chỉnh tốc độ nhỏ giọt từ 1-3 giọt/phút tùy loại cây</li>
      </ul>
      
      <h3>2. Hệ thống phun sương (Misting System)</h3>
      <p>Hệ thống này đặc biệt phù hợp với những loại cây cần độ ẩm cao như dương xỉ, lan rừng, hay các loại cây nhiệt đới. Nước được phun ra dưới dạng sương mịn, tạo ra độ ẩm xung quanh cây mà không làm úng đất. Hệ thống này yêu cầu máy bơm áp lực cao và hệ thống lọc nước tốt để tránh tắc vòi phun.</p>
      
      <h4>Lợi ích của hệ thống phun sương:</h4>
      <ul>
        <li>Tăng độ ẩm không khí xung quanh cây</li>
        <li>Làm mát không khí vào mùa hè</li>
        <li>Giúp làm sạch bụi bẩn trên lá cây</li>
        <li>Tạo môi trường lý tưởng cho cây nhiệt đới</li>
      </ul>
      
      <h3>3. Hệ thống thông minh (Smart Irrigation)</h3>
      <p>Đây là hệ thống tiên tiến nhất, sử dụng cảm biến độ ẩm đất và điều khiển qua smartphone. Hệ thống có thể tự động điều chỉnh lượng nước tưới dựa trên dữ liệu thời tiết, độ ẩm đất thực tế và nhu cầu cụ thể của từng loại cây. Mặc dù chi phí ban đầu cao hơn, nhưng hiệu quả và tiện lợi mà nó mang lại là rất đáng giá.</p>
      
      <h2>Xây dựng hệ thống DIY chi tiết</h2>
      
      <h3>1. Hệ thống tưới giọt với timer</h3>
      <p>Đây là sự kết hợp hoàn hảo giữa đơn giản và hiệu quả. Hệ thống sử dụng timer điện tử để điều khiển bơm nước, tưới theo lịch trình đã lập sẵn.</p>
      
      <h4>Danh sách vật liệu cần thiết:</h4>
      <ul>
        <li>Bình chứa nước 20-50 lít (tùy số lượng cây)</li>
        <li>Bơm nước mini 12V (công suất 3-5W)</li>
        <li>Timer điện tử có thể lập trình theo giờ/ngày</li>
        <li>Ống nhựa mềm đường kính 6mm</li>
        <li>Đầu nhỏ giọt điều chỉnh được (1 cái cho mỗi cây)</li>
        <li>Connector chia nhánh (T-connector)</li>
        <li>Adapter 12V cho bơm nước</li>
      </ul>
      
      <h4>Hướng dẫn lắp đặt từng bước:</h4>
      <p><strong>Bước 1 - Chuẩn bị bình chứa:</strong> Chọn bình nhựa có nắp đậy kín, khoan lỗ ở đáy để lắp ống hút của máy bơm. Đảm bảo lỗ vừa khít với ống để tránh rò rỉ. Lắp thêm van xả khí ở nắp để tránh áp suất âm.</p>
      
      <p><strong>Bước 2 - Lắp đặt máy bơm:</strong> Máy bơm nên được đặt bên ngoài bình nước để dễ bảo trì. Nối ống hút vào đầu vào của máy bơm, đầu kia thả xuống đáy bình. Lắp lưới lọc ở đầu ống hút để tránh tạp chất.</p>
      
      <p><strong>Bước 3 - Thiết kế hệ thống phân phối:</strong> Từ đầu ra của máy bơm, nối ống chính đi dọc theo khu vực trồng cây. Tại vị trí mỗi cây, lắp T-connector để chia nhánh. Mỗi nhánh dẫn đến một đầu nhỏ giọt riêng biệt.</p>
      
      <p><strong>Bước 4 - Lắp đặt timer:</strong> Kết nối timer giữa nguồn điện và adapter của máy bơm. Lập trình timer tưới 2-3 lần mỗi ngày, mỗi lần 5-15 phút tùy theo loại cây và mùa.</p>
      
      <h3>2. Hệ thống cảm biến độ ẩm tự động</h3>
      <p>Hệ thống này sử dụng cảm biến để đo độ ẩm đất thực tế, chỉ tưới khi cần thiết. Điều này giúp tránh tưới thừa hoặc thiếu, đặc biệt hữu ích cho những loại cây có nhu cầu nước đặc biệt.</p>
      
      <h4>Vật liệu cần thiết:</h4>
      <ul>
        <li>Vi điều khiển Arduino Uno hoặc Raspberry Pi</li>
        <li>Cảm biến độ ẩm đất (soil moisture sensor)</li>
        <li>Relay module để điều khiển máy bơm</li>
        <li>Màn hình LCD để hiển thị thông số</li>
        <li>Breadboard và dây nối</li>
      </ul>
      
      <h2>Bảo trì và vận hành hệ thống</h2>
      
      <h3>1. Bảo trì định kỳ</h3>
      <p>Hệ thống tưới nước tự động cần được bảo trì định kỳ để hoạt động hiệu quả. Hàng tuần, kiểm tra mức nước trong bình chứa và chất lượng nước. Làm sạch các đầu nhỏ giọt bằng kim nhỏ để loại bỏ cặn bẩn. Hàng tháng, vệ sinh toàn bộ hệ thống ống dẫn bằng cách cho chạy nước sạch qua hệ thống.</p>
      
      <h3>2. Xử lý sự cố thường gặp</h3>
      <ul>
        <li><strong>Tắc vòi nhỏ giọt:</strong> Ngâm trong giấm trắng pha loãng 30 phút, sau đó rửa sạch</li>
        <li><strong>Máy bơm không hoạt động:</strong> Kiểm tra nguồn điện, timer và kết nối dây</li>
        <li><strong>Nước tưới không đều:</strong> Điều chỉnh độ cao các đầu nhỏ giọt cho cùng mức</li>
        <li><strong>Rò rỉ nước:</strong> Kiểm tra và thay thế các connector bị lỏng</li>
      </ul>
      
      <h3>3. Điều chỉnh theo mùa</h3>
      <p>Hệ thống cần được điều chỉnh theo từng mùa trong năm. Mùa hè tăng tần suất và lượng nước tưới do cây cần nhiều nước hơn. Mùa đông giảm tần suất tưới vì cây phát triển chậm và cần ít nước. Mùa mưa có thể tạm ngừng hệ thống hoặc giảm xuống mức tối thiểu.</p>
      
      <h2>Tính toán chi phí và hiệu quả</h2>
      <p>Chi phí ban đầu cho hệ thống đơn giản khoảng 500,000 - 1,000,000 VNĐ cho 10-15 cây. Chi phí vận hành hàng tháng chỉ khoảng 20,000 - 50,000 VNĐ tiền điện và nước. So với việc thuê người chăm sóc hoặc chi phí thay thế cây chết do thiếu nước, đây là khoản đầu tư rất hiệu quả.</p>
      
      <h2>Mở rộng hệ thống trong tương lai</h2>
      <p>Khi đã quen với hệ thống cơ bản, bạn có thể mở rộng thêm các tính năng như: cảm biến nhiệt độ, độ ẩm không khí, điều khiển từ xa qua WiFi, tích hợp với hệ thống nhà thông minh, hoặc thậm chí là hệ thống camera để theo dõi cây từ xa. Những nâng cấp này sẽ biến khu vườn trong nhà của bạn thành một hệ sinh thái thông minh hoàn chỉnh.</p>
    `,
    image_url: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    slug: "he-thong-tuoi-nuoc-tu-dong-cho-cay-trong-nha",
    featured: true,
    created_at: "2024-02-25T14:20:00Z"
  },
  {
    id: 10,
    title: "Thiết kế vườn mini trong nhà theo phong cách hiện đại",
    category: "basics",
    excerpt: "Tạo ra một không gian xanh hiện đại và tinh tế trong nhà với những ý tưởng thiết kế độc đáo, kết hợp harmoniously giữa cây cảnh và nội thất đương đại.",
    content: `
      <h2>Triết lý thiết kế vườn mini hiện đại</h2>
      <p>Vườn mini hiện đại không chỉ đơn thuần là việc đặt cây trong nhà, mà là nghệ thuật tích hợp các yếu tố tự nhiên vào không gian sống đương đại. Triết lý này dựa trên nguyên tắc "less is more" - ít nhưng tinh, tập trung vào chất lượng hơn là số lượng. Mỗi yếu tố trong thiết kế đều có mục đích rõ ràng và đóng góp vào tổng thể harmonious của không gian.</p>
      
      <h3>1. Nguyên tắc thiết kế cốt lõi</h3>
      <p>Thiết kế vườn mini hiện đại tuân theo ba nguyên tắc chính: đơn giản (simplicity), chức năng (functionality), và cân bằng (balance). Đơn giản thể hiện qua việc sử dụng ít loại cây nhưng chọn lọc kỹ lưỡng, tránh sự rối mắt. Chức năng đảm bảo mỗi cây không chỉ đẹp mà còn phù hợp với điều kiện ánh sáng và không gian cụ thể. Cân bằng tạo ra sự hài hòa giữa màu sắc, kích thước và hình dáng của các yếu tố.</p>
      
      <h3>2. Sự kết hợp giữa tự nhiên và công nghệ</h3>
      <p>Vườn mini hiện đại thường tích hợp các yếu tố công nghệ một cách tinh tế. Đèn LED phát triển cây không chỉ hỗ trợ cây phát triển mà còn tạo ra những hiệu ứng ánh sáng đẹp mắt vào ban đêm. Hệ thống tưới nước tự động được ẩn giấu khéo léo, duy trì vẻ đẹp tự nhiên while ensuring optimal care. Cảm biến thông minh có thể được tích hợp để theo dõi sức khỏe cây mà không làm ảnh hưởng đến thẩm mỹ.</p>
      
      <h2>Lựa chọn cây phù hợp với phong cách hiện đại</h2>
      
      <h3>1. Cây có hình dáng kiến trúc (Architectural Plants)</h3>
      <p>Những loại cây có hình dáng rõ ràng, đường nét sạch sẽ và cấu trúc đẹp mắt là lựa chọn hoàn hảo cho thiết kế hiện đại. Cây lưỡi hổ (Sansevieria) với những lá thẳng đứng như những thanh kiếm, cây kim tiền (Zamioculcas zamiifolia) với tán lá bóng mượt và đối xứng, hay cây đuôi công (Dracaena) với thân thẳng và tán lá tập trung ở đỉnh đều mang lại vẻ đẹp kiến trúc độc đáo.</p>
      
      <h4>Đặc điểm của cây kiến trúc hiện đại:</h4>
      <ul>
        <li><strong>Hình dáng hình học:</strong> Có cấu trúc rõ ràng, đường nét sắc sảo</li>
        <li><strong>Màu sắc đơn giản:</strong> Chủ yếu là các tông xanh lá, tránh những màu sắc rực rỡ</li>
        <li><strong>Kích thước phù hợp:</strong> Không quá nhỏ để tạo được focal point, không quá lớn để lấn át không gian</li>
        <li><strong>Dễ chăm sóc:</strong> Phù hợp với lối sống bận rộn hiện đại</li>
      </ul>
      
      <h3>2. Cây mọng nước minimalist</h3>
      <p>Cây mọng nước (succulents) là biểu tượng của phong cách minimalist trong thiết kế vườn hiện đại. Chúng có hình dáng độc đáo, màu sắc tinh tế và yêu cầu chăm sóc tối thiểu. Cây sen đá Echeveria với hình hoa hồng hoàn hảo, cây Haworthia với các vân nổi tinh xảo, hay cây Lithops (living stones) với vẻ ngoài như những viên đá tự nhiên đều mang lại sự thú vị mà không làm rối mắt.</p>
      
      <h3>3. Cây treo hiện đại</h3>
      <p>Cây treo tạo ra chiều sâu và động lực cho không gian, đặc biệt quan trọng trong thiết kế hiện đại. Cây tô lô (Pothos) với lá hình tim óng ả, cây dây nhện (Spider plant) với những lá hẹp dài mượt mà, hay cây trầu bà leo (Philodendron) với lá to bản đều có thể được treo ở những vị trí chiến lược để tạo ra những đường line mềm mại, cân bằng với các đường nét cứng cáp của nội thất hiện đại.</p>
      
      <h2>Thiết kế layout và bố trí không gian</h2>
      
      <h3>1. Nguyên tắc tam giác (Triangle Principle)</h3>
      <p>Trong thiết kế vườn mini hiện đại, nguyên tắc tam giác được áp dụng để tạo ra sự cân bằng thị giác. Điều này có nghĩa là trong mỗi góc nhìn, nên có ba điểm nhấn cao thấp khác nhau tạo thành một tam giác ảo. Ví dụ: một cây cao (như cây thiên điểu), một cây vừa (như cây đuôi công), và một cây thấp hoặc cây treo (như cây sen đá). Nguyên tắc này tạo ra cảm giác động lực và thú vị mà không làm mất đi sự hài hòa.</p>
      
      <h3>2. Sử dụng không gian âm (Negative Space)</h3>
      <p>Không gian âm - những khu vực trống không có cây - là yếu tố quan trọng không kém trong thiết kế hiện đại. Nó cho phép mắt được nghỉ ngơi và làm nổi bật vẻ đẹp của những cây được chọn lọc. Tỷ lệ lý tưởng là 60% cây cối và 40% không gian trống. Điều này có nghĩa là không nên lấp đầy mọi góc nhà bằng cây mà hãy để lại những khoảng trống cần thiết.</p>
      
      <h3>3. Tạo điểm nhấn (Focal Points)</h3>
      <p>Mỗi khu vực trong vườn mini nên có một điểm nhấn chính - một cây hoặc một nhóm cây đặc biệt thu hút sự chú ý. Điểm nhấn này thường là cây có kích thước lớn nhất, hình dáng độc đáo nhất, hoặc màu sắc nổi bật nhất. Những cây khác trong khu vực sẽ đóng vai trò hỗ trợ, làm nền để làm nổi bật điểm nhấn chính.</p>
      
      <h2>Chọn lựa chậu và container phù hợp</h2>
      
      <h3>1. Chậu hình học đơn giản</h3>
      <p>Chậu cây cho thiết kế hiện đại nên có hình dáng hình học đơn giản: hình tròn, vuông, hoặc hình trụ. Tránh những chậu có trang trí rườm rà hoặc hoa văn phức tạp. Chậu ceramic trắng, ghi, hoặc đen mattem là những lựa chọn classic. Chậu bê tông (concrete planters) ngày càng được ưa chuộng vì vẻ ngoài industrial chic và độ bền cao.</p>
      
      <h3>2. Chậu treo minimalist</h3>
      <p>Đối với cây treo, lựa chọn những chậu treo bằng chất liệu tự nhiên như macrame cotton trắng hoặc kem, hoặc những giá treo kim loại đơn giản. Tránh những màu sắc rực rỡ hoặc pattern phức tạp có thể làm distract từ vẻ đẹp của cây.</p>
      
      <h3>3. Hệ thống modular</h3>
      <p>Cân nhắc sử dụng hệ thống chậu modular - những chậu có thể kết hợp và sắp xếp lại theo nhiều cách khác nhau. Điều này cho phép flexibility trong thiết kế và dễ dàng thay đổi layout khi cần thiết. Các brand như IKEA, Muji đều có những hệ thống modular đẹp và giá cả hợp lý.</p>
      
      <h2>Tích hợp công nghệ thông minh</h2>
      
      <h3>1. Hệ thống đèn LED thông minh</h3>
      <p>Đèn LED phát triển cây hiện đại không chỉ functional mà còn có thể trở thành yếu tố decorative. Những dải đèn LED có thể điều chỉnh màu sắc và cường độ, tạo ra những hiệu ứng ánh sáng khác nhau vào các thời điểm khác nhau trong ngày. Vào ban ngày, chúng phát ra ánh sáng trắng giúp cây quang hợp. Vào buổi tối, có thể chuyển sang ánh sáng ấm để tạo không khí cozy.</p>
      
      <h3>2. Cảm biến thông minh ẩn giấu</h3>
      <p>Cảm biến độ ẩm đất, nhiệt độ, và ánh sáng có thể được ẩn giấu khéo léo trong đất hoặc dưới lá cây. Dữ liệu từ các cảm biến này được gửi về smartphone, cho phép bạn theo dõi sức khỏe cây từ xa mà không làm ảnh hưởng đến thẩm mỹ của thiết kế.</p>
      
      <h3>3. Hệ thống tưới nước ẩn</h3>
      <p>Các ống dẫn nước có thể được ẩn dưới đất hoặc chạy dọc theo chân tường với màu sắc tương tự như tường. Bình chứa nước có thể được giấu trong tủ hoặc sau một bức tường ngăn. Toàn bộ hệ thống hoạt động âm thầm mà không ai nhận ra.</p>
      
      <h2>Các zone chức năng trong vườn mini</h2>
      
      <h3>1. Zone thư giãn (Relaxation Zone)</h3>
      <p>Đây là khu vực chính trong vườn mini, thường được đặt ở góc phòng khách hoặc gần cửa sổ lớn. Zone này tập trung vào những cây có khả năng thanh lọc không khí mạnh mẽ và tạo cảm giác thư giãn. Cây trầu bà, cây lưỡi hổ, và cây kim tiền là những lựa chọn ideal. Kết hợp với ghế đọc sách hoặc meditation cushion để tạo ra một góc retreat hoàn hảo.</p>
      
      <h3>2. Zone làm việc (Work Zone)</h3>
      <p>Nếu bạn work from home, việc có một số cây nhỏ trên bàn làm việc có thể tăng productivity và giảm stress. Chọn những cây kích thước nhỏ, ít cần ánh sáng như cây sen đá mini, cây thiết mộc lan, hoặc cây cỏ ngọt. Chúng không chiếm nhiều không gian mà vẫn mang lại benefits của cây xanh.</p>
      
      <h3>3. Zone transition</h3>
      <p>Đây là những khu vực chuyển tiếp như hành lang, cầu thang, hoặc lối vào. Sử dụng những cây cao, có hình dáng architectural để tạo ra những focal point tự nhiên. Cây thiên điểu, cây cọ kentia, hoặc cây đàn hương (fiddle leaf fig) đều là những lựa chọn tuyệt vời cho zone này.</p>
      
      <h2>Màu sắc và texture trong thiết kế</h2>
      
      <h3>1. Palette màu hiện đại</h3>
      <p>Thiết kế vườn mini hiện đại thường sử dụng palette màu neutral với các tông xanh lá tự nhiên làm điểm nhấn. Base colors bao gồm trắng, ghi, và đen, trong khi accent colors có thể là các tông xanh lá khác nhau. Tránh những màu sắc neon hoặc quá rực rỡ có thể clash với aesthetic tối giản.</p>
      
      <h3>2. Kết hợp texture</h3>
      <p>Sự đa dạng về texture tạo ra visual interest mà không cần đến màu sắc phức tạp. Kết hợp texture mềm mại của lá cây với texture cứng của chậu ceramic, hay texture thô ráp của chậu bê tông với texture mịn màng của lá cây mọng nước. Điều này tạo ra depth và character cho thiết kế.</p>
      
      <h2>Bảo trì và evolution của thiết kế</h2>
      
      <h3>1. Kế hoạch bảo trì simplicity</h3>
      <p>Thiết kế hiện đại đòi hỏi maintenance routine đơn giản và effective. Tạo ra một schedule weekly gồm: kiểm tra nước, remove dead leaves, dust cleaning, và rotation của cây để đảm bảo growth đồng đều. Monthly tasks bao gồm fertilizing và pruning nhẹ để maintain shape.</p>
      
      <h3>2. Seasonal adaptation</h3>
      <p>Vườn mini hiện đại cần có khả năng adapt với các mùa khác nhau. Mùa đông có thể thêm đèn grow light để compensate cho việc thiếu ánh sáng tự nhiên. Mùa hè có thể di chuyển một số cây ra xa cửa sổ để tránh direct sunlight quá mạnh. Flexibility trong arrangement là key của thiết kế successful.</p>
      
      <h3>3. Growth và expansion</h3>
      <p>Plan cho sự phát triển của cây và khả năng mở rộng collection trong tương lai. Chọn những vị trí có thể accommodate cho việc cây lớn lên, và design layout sao cho có thể dễ dàng thêm cây mới mà không phá vỡ harmony hiện tại. Đây là approach sustainable cho long-term enjoyment.</p>
    `,
    image_url: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    slug: "thiet-ke-vuon-mini-trong-nha-theo-phong-cach-hien-dai",
    featured: false,
    created_at: "2024-03-01T09:30:00Z"
  },
  {
    id: 11,
    title: "Cây thanh lọc không khí tốt nhất cho ngôi nhà của bạn",
    category: "basics",
    excerpt: "Khám phá những loại cây có khả năng thanh lọc không khí mạnh mẽ nhất, giúp cải thiện chất lượng không khí trong nhà và mang lại lợi ích sức khỏe tuyệt vời.",
    content: `
      <h2>Tầm quan trọng của chất lượng không khí trong nhà</h2>
      <p>Chất lượng không khí trong nhà thường kém hơn nhiều so với không khí ngoài trời, do sự tích tụ của các chất độc hại từ nội thất, sản phẩm vệ sinh, sơn tường và nhiều nguồn khác. Theo nghiên cứu của NASA, chúng ta dành trung bình 90% thời gian ở trong nhà, vì vậy việc cải thiện chất lượng không khí trong không gian sống là vô cùng quan trọng cho sức khỏe long-term. Cây xanh không chỉ là yếu tố decorative mà còn là những "máy lọc không khí" tự nhiên hiệu quả.</p>
      
      <h3>1. Các chất độc hại phổ biến trong nhà</h3>
      <p>Formaldehyde là một trong những chất độc hại phổ biến nhất, được tìm thấy trong đồ nội thất gỗ ép, thảm, và các sản phẩm dệt may. Benzene xuất hiện từ sơn, chất tẩy rửa, và plastic. Trichloroethylene có trong chất tẩy khô và dung môi kim loại. Xylene và Toluene phát ra từ máy in, chất keo dán, và nail polish. Ammonia có trong chất tẩy rửa và các sản phẩm vệ sinh gia đình. Tất cả những chất này có thể gây ra các vấn đề sức khỏe từ nhẹ đến nghiêm trọng nếu tiếp xúc lâu dài.</p>
      
      <h3>2. Cơ chế thanh lọc không khí của cây xanh</h3>
      <p>Cây xanh thanh lọc không khí thông qua nhiều cơ chế khác nhau. Quá trình quang hợp giúp hấp thụ CO2 và sinh ra O2, cải thiện cân bằng oxy trong không khí. Các lỗ chân lông trên lá (stomata) có khả năng hấp thụ các chất độc hại và phân hủy chúng thành các hợp chất vô hại. Root system và soil bacteria cũng đóng vai trò quan trọng trong việc filter các pollutants. Một số cây còn có khả năng regulate độ ẩm, tạo ra môi trường sống comfortable và healthy hơn.</p>
      
      <h2>Top 15 cây thanh lọc không khí mạnh mẽ nhất</h2>
      
      <h3>1. Cây Trầu Bà (Peace Lily - Spathiphyllum)</h3>
      <p>Cây trầu bà được NASA xếp hạng là một trong những cây thanh lọc không khí hiệu quả nhất. Nó có khả năng loại bỏ formaldehyde, benzene, trichloroethylene, xylene, toluene, và ammonia - hầu hết các chất độc hại phổ biến trong nhà. Đặc biệt, cây này còn có thể increase độ ẩm không khí lên đến 5%, rất beneficial cho people với respiratory problems.</p>
      
      <h4>Đặc điểm chăm sóc cây trầu bà:</h4>
      <ul>
        <li><strong>Ánh sáng:</strong> Ưa bóng râm và ánh sáng gián tiếp, tránh ánh sáng trực tiếp</li>
        <li><strong>Tưới nước:</strong> Giữ đất ẩm nhưng không úng nước, tưới 1-2 lần/tuần</li>
        <li><strong>Độ ẩm:</strong> Thích độ ẩm cao 40-60%, có thể mist nhẹ lên lá</li>
        <li><strong>Nhiệt độ:</strong> Phát triển tốt ở 18-27°C</li>
        <li><strong>Lưu ý:</strong> Độc với trẻ em và thú cưng nếu ăn phải</li>
      </ul>
      
      <h3>2. Cây Lưỡi Hổ (Snake Plant - Sansevieria trifasciata)</h3>
      <p>Cây lưỡi hổ là champion trong việc convert CO2 thành O2 vào ban đêm, making it perfect cho phòng ngủ. Nó có khả năng filter formaldehyde, xylene, benzene, toluene, và trichloroethylene. Đây là một trong những cây ít maintenance nhất, perfect cho beginners hoặc people với busy lifestyle.</p>
      
      <h4>Why cây lưỡi hổ special:</h4>
      <ul>
        <li><strong>Night oxygen production:</strong> Unlike most plants, nó produce oxygen vào ban đêm</li>
        <li><strong>Low maintenance:</strong> Có thể survive trong conditions harsh nhất</li>
        <li><strong>Drought tolerance:</strong> Cần ít nước, perfect cho người hay quên tưới</li>
        <li><strong>Low light tolerance:</strong> Phát triển tốt ngay cả trong ánh sáng yếu</li>
      </ul>
      
      <h3>3. Cây Cọ Cảnh (Areca Palm - Dypsis lutescens)</h3>
      <p>Cây cọ cảnh là một trong những natural air humidifier tốt nhất, có thể release tới 1 lít water vapor mỗi ngày. Nó hiệu quả trong việc remove formaldehyde, xylene, và toluene. Với large surface area của leaves, nó có capacity filter lớn và tạo ra tropical atmosphere trong nhà.</p>
      
      <h3>4. Cây Kim Tiền (ZZ Plant - Zamioculcas zamiifolia)</h3>
      <p>Cây kim tiền extremely efficient trong việc remove xylene, toluene, và benzene. Nó có unique ability để survive in low-light conditions và với minimal water, making it ideal cho apartments hoặc offices với limited natural light. Waxy leaves của nó effective trong việc trap dust particles.</p>
      
      <h3>5. Cây Thiên Điểu (Bird of Paradise - Strelitzia reginae)</h3>
      <p>Với large, broad leaves, cây thiên điểu có exceptional capacity để absorb formaldehyde và benzene. Nó cũng add dramatic visual impact và tropical feel cho không gian sống. Large surface area của leaves có nghĩa là higher rate of air purification per plant.</p>
      
      <h2>Cây thanh lọc không khí cho từng không gian cụ thể</h2>
      
      <h3>1. Phòng ngủ - Night Air Purifiers</h3>
      <p>Phòng ngủ cần những cây có khả năng produce oxygen vào ban đêm và không emit CO2. Cây lưỡi hổ, cây lô hội (Aloe Vera), và cây cọ cảnh mini là những lựa chọn ideal. Chúng improve air quality while you sleep và có thể contribute đến better sleep quality.</p>
      
      <h4>Bố trí cây trong phòng ngủ:</h4>
      <ul>
        <li>1-2 cây lưỡi hổ ở hai bên đầu giường</li>
        <li>1 cây cọ cảnh mini ở góc phòng</li>
        <li>1 cây lô hội trên bàn trang điểm hoặc kệ sách</li>
      </ul>
      
      <h3>2. Phòng khách - Statement Air Purifiers</h3>
      <p>Phòng khách là nơi gia đình gathering và entertaining guests, vì vậy cần những cây vừa beautiful vừa highly effective. Cây thiên điểu, cây đàn hương (Fiddle Leaf Fig), và cây cọ kentia là những options tuyệt vời. Chúng create dramatic focal points while providing substantial air purification.</p>
      
      <h3>3. Phòng tắm - Humidity-loving Purifiers</h3>
      <p>Phòng tắm có high humidity và often limited natural light, vì vậy cần những cây thrive trong conditions này. Cây dương xỉ Boston, cây trầu bà, và cây cọ cảnh nhỏ đều excellent choices. Chúng help regulate humidity levels và remove chemicals từ personal care products.</p>
      
      <h3>4. Home office - Productivity-boosting Purifiers</h3>
      <p>Studies show rằng cây xanh trong workspace có thể increase productivity lên đến 15% và reduce stress levels. Cây kim tiền, cây thiết mộc lan, và small varieties của cây trầu bà perfect cho desk space. Chúng filter pollutants từ electronics và office supplies while providing mental health benefits.</p>
      
      <h2>Tối ưu hóa hiệu quả thanh lọc không khí</h2>
      
      <h3>1. Tính toán số lượng cây cần thiết</h3>
      <p>Theo recommendation của NASA, cần approximately 1 mature plant cho mỗi 100 square feet của living space để achieve significant air purification. Tuy nhiên, điều này depend on plant size, room ventilation, và level of pollutants. Larger plants với more foliage area sẽ provide better purification per plant.</p>
      
      <h3>2. Placement strategy tối ưu</h3>
      <p>Strategic placement của cây có thể dramatically increase efficiency. Đặt cây near pollution sources như printers, furniture mới, hoặc cleaning supply storage. Corner placement often ideal vì allows air circulation around entire plant. Avoid placing tất cả cây ở cùng một khu vực - distribute throughout space để ensure comprehensive coverage.</p>
      
      <h3>3. Kết hợp với ventilation system</h3>
      <p>Cây xanh work best khi combined với good ventilation. Fans có thể help circulate air qua leaves, increasing exposure time và purification rate. Mở windows regularly khi weather permits để exchange indoor air với fresh outdoor air. This combination approach provides optimal air quality improvement.</p>
      
      <h2>Chăm sóc để tối đa hóa air purification capacity</h2>
      
      <h3>1. Leaf cleaning routine</h3>
      <p>Dirty leaves không thể perform photosynthesis efficiently và reduce air purification capacity. Weekly gentle cleaning với damp cloth remove dust và allow maximum light absorption. Larger plants benefit from occasional shower để wash off accumulated particles. Clean leaves also look more attractive và contribute đến overall plant health.</p>
      
      <h3>2. Proper fertilization cho air purification</h3>
      <p>Well-nourished plants produce more foliage và có higher metabolic rates, resulting in better air purification. Use balanced liquid fertilizer monthly during growing season (spring/summer). Avoid over-fertilization which có thể lead đến excessive leaf growth without corresponding root development.</p>
      
      <h3>3. Pruning để maintain efficiency</h3>
      <p>Regular pruning remove dead hoặc dying foliage mà không contribute đến air purification. Nó cũng encourage new growth với higher purification capacity. Focus on removing yellowing leaves, dead branches, và any diseased parts immediately để maintain plant health và appearance.</p>
      
      <h2>Monitoring air quality improvement</h2>
      
      <h3>1. Using air quality monitors</h3>
      <p>Digital air quality monitors có thể track improvements trong levels of common pollutants như VOCs (Volatile Organic Compounds), particulate matter, và humidity levels. Monitor readings before và after adding plants để quantify impact. Many modern monitors connect đến smartphones để easy tracking over time.</p>
      
      <h3>2. Observing health improvements</h3>
      <p>Pay attention đến subjective improvements như reduced allergies, better sleep quality, fewer headaches, và improved breathing. These anecdotal improvements often precede measurable changes trong air quality readings. Keep a simple journal tracking symptoms để identify correlations với plant additions.</p>
      
      <h3>3. Seasonal adjustments</h3>
      <p>Air purification needs change với seasons. Winter months với closed windows và heating systems require more intensive purification. Summer cooling systems có thể circulate pollutants more effectively, requiring different plant arrangements. Adjust plant care routines và placement based on seasonal air quality challenges.</p>
      
      <h2>Budget-friendly approach to air purification</h2>
      
      <h3>1. Propagation để expand collection</h3>
      <p>Many air-purifying plants easy để propagate, allowing you để multiply your collection without additional cost. Cây trầu bà, cây tô lô (Pothos), và cây dây nhện readily produce offshoots hoặc can be propagated từ cuttings. This approach builds comprehensive air purification system over time.</p>
      
      <h3>2. Focus on high-impact species</h3>
      <p>Instead of buying many small plants, invest in fewer larger specimens của most effective species. One large cây trầu bà hoặc cây thiên điểu provides more purification than several small plants và often costs less per unit of purification capacity.</p>
      
      <h3>3. DIY air circulation enhancement</h3>
      <p>Simple fans hoặc air circulation improvements có thể multiply effectiveness của existing plants without additional plant purchases. Strategic fan placement move air through plant foliage more effectively, increasing contact time với pollutants và improving overall purification rates.</p>
    `,
    image_url: "https://images.unsplash.com/photo-1545241047-6083a3684587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    slug: "cay-thanh-loc-khong-khi-tot-nhat-cho-ngoi-nha-cua-ban",
    featured: true,
    created_at: "2024-03-05T16:45:00Z"
  },
  {
    id: 12,
    title: "Tự chế phân bón hữu cơ từ phế liệu nhà bếp",
    category: "fertilizer",
    excerpt: "Biến phế liệu từ nhà bếp thành nguồn phân bón hữu cơ giàu dinh dưỡng. Học cách tự làm compost, phân lỏng và các loại phân bón tự nhiên hiệu quả cho cây cảnh.",
    content: `
      <h2>Triết lý Zero Waste trong chăm sóc cây</h2>
      <p>Trong thời đại mà environmental consciousness ngày càng quan trọng, việc tự chế phân bón từ kitchen waste không chỉ beneficial cho cây mà còn đóng góp vào sustainable lifestyle. Thay vì vứt bỏ organic waste và mua commercial fertilizers, chúng ta có thể create closed-loop system mà waste từ kitchen becomes nutrition cho cây, và cây provide fresh air và beauty cho home. Approach này không chỉ save money mà còn reduce environmental footprint significantly.</p>
      
      <h3>1. Benefits của homemade organic fertilizer</h3>
      <p>Phân bón tự chế từ kitchen waste có nhiều advantages over commercial alternatives. Đầu tiên, nó completely free from synthetic chemicals và pesticides, making it safe cho both plants và environment. Thứ hai, cost-effectiveness là huge - instead of spending money on fertilizers, bạn đang utilizing waste mà otherwise would go to landfills. Thứ ba, homemade fertilizers provide slow-release nutrition, feeding plants gradually over time rather than giving rapid bursts mà có thể cause burning.</p>
      
      <h3>2. Understanding plant nutrition basics</h3>
      <p>Để create effective homemade fertilizers, cần hiểu basic plant nutrition. Plants primarily cần three macronutrients: Nitrogen (N) cho leaf growth và chlorophyll production, Phosphorus (P) cho root development và flowering, và Potassium (K) cho overall plant health và disease resistance. Micronutrients như calcium, magnesium, iron cũng essential trong smaller quantities. Kitchen waste có thể provide tất cả these nutrients khi properly processed.</p>
      
      <h2>Composting cơ bản trong apartment</h2>
      
      <h3>1. Indoor composting system setup</h3>
      <p>Traditional outdoor composting có thể challenging trong urban environments, but indoor composting perfectly feasible với proper setup. Bạn cần một container với lid (plastic storage bin works perfectly), drilling holes cho aeration, và creating layers system. Bottom layer should be coarse materials như shredded newspaper hoặc cardboard để improve drainage. Middle layers alternate between "brown" materials (carbon-rich) và "green" materials (nitrogen-rich).</p>
      
      <h4>Essential materials cho indoor compost:</h4>
      <ul>
        <li><strong>Brown materials (Carbon):</strong> Shredded newspaper, cardboard, dry leaves, paper towels</li>
        <li><strong>Green materials (Nitrogen):</strong> Vegetable scraps, fruit peels, coffee grounds, tea bags</li>
        <li><strong>Avoid:</strong> Meat, dairy, oily foods, pet waste - these attract pests và create odors</li>
        <li><strong>Tools:</strong> Small shovel hoặc spoon để mix, spray bottle để maintain moisture</li>
      </ul>
      
      <h3>2. Maintaining optimal compost conditions</h3>
      <p>Successful composting requires balance của four key factors: carbon/nitrogen ratio (approximately 30:1), moisture content (should feel like wrung-out sponge), aeration (turn weekly), và temperature (slightly warm indicates active decomposition). Proper balance prevents odors và accelerates decomposition process. If compost becomes too wet, add more brown materials. If too dry, add green materials hoặc lightly mist với water.</p>
      
      <h3>3. Troubleshooting common composting issues</h3>
      <ul>
        <li><strong>Odor problems:</strong> Usually indicate too much moisture hoặc lack of aeration - add browns và turn more frequently</li>
        <li><strong>Slow decomposition:</strong> May need more greens, smaller pieces, hoặc better moisture balance</li>
        <li><strong>Pest attraction:</strong> Ensure no meat/dairy included và bury food scraps under browns</li>
        <li><strong>Mold growth:</strong> Some white mold normal, but excessive mold indicates too much moisture</li>
      </ul>
      
      <h2>Liquid fertilizers từ kitchen waste</h2>
      
      <h3>1. Banana peel fertilizer - Potassium powerhouse</h3>
      <p>Banana peels extremely rich in potassium, essential cho flowering plants và fruit development. Để create banana peel fertilizer, chop 2-3 banana peels và soak in 1 liter của water trong 3-5 days. Strain liquid và use weekly as diluted fertilizer (1:5 ratio với water). This fertilizer particularly beneficial cho flowering plants như roses, potted citrus, và vegetables.</p>
      
      <h4>Advanced banana peel techniques:</h4>
      <ul>
        <li><strong>Dried powder:</strong> Dehydrate peels và grind into powder cho slow-release fertilizer</li>
        <li><strong>Fermented version:</strong> Add small amount của sugar để accelerate fermentation, creating more concentrated fertilizer</li>
        <li><strong>Combined approach:</strong> Mix với coffee grounds để balance potassium với nitrogen</li>
      </ul>
      
      <h3>2. Coffee ground fertilizer - Nitrogen boost</h3>
      <p>Used coffee grounds excellent source của nitrogen và slightly acidic, making them perfect cho acid-loving plants như azaleas, blueberries, và ferns. Fresh grounds quá acidic và can burn plants, so always use spent grounds. Mix 1 part coffee grounds với 3 parts water, let steep 24 hours, then strain. Dilute 1:1 với water before applying.</p>
      
      <h3>3. Eggshell calcium supplement</h3>
      <p>Eggshells provide slow-release calcium, preventing blossom end rot trong tomatoes và strengthening cell walls in all plants. Wash shells thoroughly, dry completely, then crush into small pieces. Sprinkle around plants hoặc mix into potting soil. Để create liquid version, soak crushed shells in vinegar với water trong several days - acidity helps dissolve calcium into usable form.</p>
      
      <h3>4. Vegetable cooking water - Mineral extract</h3>
      <p>Water used để cook vegetables contains dissolved vitamins và minerals leached from vegetables. Instead of pouring down drain, cool completely và use as fertilizer. This works particularly well với potato cooking water (high in potassium) và rice cooking water (contains starches beneficial cho soil microorganisms). Always ensure water is unsalted before use.</p>
      
      <h2>Fermented plant extracts (FPEs)</h2>
      
      <h3>1. Kitchen scrap fermentation process</h3>
      <p>Fermented Plant Extracts represent advanced form của liquid fertilizer mà concentrates nutrients through controlled fermentation. Process involves chopping kitchen scraps finely, mixing với equal weight của brown sugar hoặc molasses, packing into airtight container, và allowing fermentation cho 3-4 weeks. Gas buildup requires periodic release để prevent container explosion.</p>
      
      <h4>Step-by-step FPE creation:</h4>
      <ul>
        <li><strong>Week 1:</strong> Daily stirring và gas release, mixture should bubble actively</li>
        <li><strong>Week 2-3:</strong> Stirring every 2-3 days, fermentation activity decreases</li>
        <li><strong>Week 4:</strong> Strain liquid, resulting FPE should smell sweet-sour, not putrid</li>
        <li><strong>Storage:</strong> Refrigerate concentrated FPE, dilute 1:500 when using</li>
      </ul>
      
      <h3>2. Specialized FPEs cho different plant needs</h3>
      <p>Different kitchen scraps create FPEs với varying nutrient profiles. Fruit-based FPEs (apple cores, citrus peels) high in potassium và sugars, excellent cho flowering plants. Vegetable-based FPEs (carrot tops, lettuce trimmings) provide balanced nutrition suitable cho foliage plants. Herb-based FPEs (cilantro stems, parsley roots) contain unique compounds mà can enhance plant immunity.</p>
      
      <h2>Worm composting (Vermicomposting) in small spaces</h2>
      
      <h3>1. Setting up apartment-friendly worm bin</h3>
      <p>Vermicomposting accelerates decomposition process và produces superior compost called worm castings. Small-scale worm bin can be created using nested plastic containers với drainage holes. Red wiggler worms ideal cho indoor composting - they process organic matter quickly và reproduce rapidly. Maintain moisture levels như wrung-out sponge và feed worms weekly với fresh kitchen scraps.</p>
      
      <h3>2. Harvesting và using worm castings</h3>
      <p>Worm castings ready after 3-6 months - they look like dark, crumbly soil với earthy smell. Harvest by pushing castings to one side của bin và adding fresh bedding to other side. Worms migrate to fresh food, leaving castings ready cho collection. Use worm castings as potting soil amendment (20-30% ratio) hoặc create worm casting tea by soaking trong water cho 24 hours.</p>
      
      <h2>Seasonal fertilizer recipes</h2>
      
      <h3>1. Spring growth formula</h3>
      <p>Spring months require fertilizers high trong nitrogen để support new growth. Combine coffee grounds, green vegetable trimmings, và young weed clippings. This mixture provides rapid-release nitrogen mà dormant plants cần để break winter rest. Apply diluted formula weekly during active growing period, reducing frequency as plants establish.</p>
      
      <h3>2. Summer flowering booster</h3>
      <p>Flowering plants need increased phosphorus và potassium during summer blooming period. Banana peel fertilizer combined với bone meal substitute (eggshells + wood ash if available) creates excellent flowering formula. Add seaweed extract (can be made from dried seaweed snacks) cho trace minerals mà support robust flower production.</p>
      
      <h3>3. Fall strengthening blend</h3>
      <p>As plants prepare cho dormancy, they benefit from potassium-heavy fertilizers mà strengthen cell walls và improve cold tolerance. Focus on fruit-based FPEs, potato cooking water, và mature compost. Reduce nitrogen content to prevent tender new growth mà won't survive winter conditions.</p>
      
      <h2>Application techniques và timing</h2>
      
      <h3>1. Soil application methods</h3>
      <p>Different fertilizers require different application techniques để maximize effectiveness. Liquid fertilizers best applied to soil around plant base, not on leaves (unless specifically foliar feeding). Solid amendments like compost và crushed eggshells can be mixed into top inch của soil hoặc used as surface mulch. Always water thoroughly after application để activate nutrients.</p>
      
      <h3>2. Foliar feeding with homemade solutions</h3>
      <p>Some homemade fertilizers suitable cho foliar application - spraying directly on leaves cho rapid nutrient uptake. Dilute liquid fertilizers more heavily cho foliar use (1:10 ratio instead of 1:5). Apply early morning hoặc evening để prevent leaf burn. Avoid foliar feeding on fuzzy-leaved plants mà can trap moisture và develop fungal problems.</p>
      
      <h3>3. Frequency và dosage guidelines</h3>
      <p>Homemade organic fertilizers generally gentler than commercial synthetic versions, allowing more frequent application without burning risks. Liquid fertilizers can be applied weekly during growing season, monthly during dormant periods. Solid amendments applied 2-3 times per year provide steady nutrition. Always observe plant response và adjust frequency accordingly - yellowing leaves may indicate over-fertilization.</p>
      
      <h2>Storage và preservation của homemade fertilizers</h2>
      
      <h3>1. Liquid fertilizer storage</h3>
      <p>Fresh liquid fertilizers should be used within week of preparation để prevent spoilage và maintain nutrient content. Fermented extracts can be refrigerated trong sealed containers cho several months. Label containers với creation date và dilution ratios để ensure proper use. Freezing liquid fertilizers possible but may change consistency - thaw completely before use.</p>
      
      <h3>2. Dry amendment preservation</h3>
      <p>Dried materials như crushed eggshells, coffee grounds, và compost can be stored trong sealed containers trong cool, dry locations. Proper storage prevents mold growth và nutrient degradation. Mix trong moisture-absorbing agents như rice if storage area humid. Well-stored dry amendments maintain effectiveness cho 6-12 months.</p>
      
      <h2>Troubleshooting và optimization</h2>
      
      <h3>1. Identifying nutrient deficiencies</h3>
      <p>Understanding plant symptoms helps adjust homemade fertilizer recipes. Yellow leaves typically indicate nitrogen deficiency - increase coffee grounds và green matter trong fertilizer mix. Purple leaf edges suggest phosphorus deficiency - add more bone meal substitutes. Brown leaf margins indicate potassium deficiency - increase banana peel fertilizer frequency.</p>
      
      <h3>2. pH balancing with kitchen waste</h3>
      <p>Most kitchen waste slightly acidic, which benefits acid-loving plants but may require adjustment cho alkaline-preferring species. Wood ash from fireplace (if available) raises pH naturally. Crushed eggshells also slightly alkaline. Coffee grounds lower pH further. Test soil pH periodically và adjust fertilizer ingredients accordingly.</p>
      
      <h3>3. Scaling production cho larger collections</h3>
      <p>As plant collection grows, fertilizer production needs increase proportionally. Consider larger composting systems, multiple fermentation containers, và batch production của liquid fertilizers. Establish routine collection và processing schedule để ensure consistent fertilizer supply. Document successful recipes và ratios cho easy replication.</p>
    `,
    image_url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    slug: "tu-che-phan-bon-huu-co-tu-phe-lieu-nha-bep",
    featured: false,
    created_at: "2024-03-10T12:15:00Z"
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
