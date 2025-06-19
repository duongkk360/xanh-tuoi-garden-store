export interface CareGuide {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url: string;
  category: string;
  created_at: string;
  featured: boolean;
  read_time: number;
  author: string;
  tags: string[];
}

export const careGuides: CareGuide[] = [
  {
    id: '1',
    title: 'Kiến thức cơ bản về cây cảnh trong nhà',
    slug: 'kien-thuc-co-ban-ve-cay-canh-trong-nha',
    excerpt: 'Hướng dẫn chi tiết cho người mới bắt đầu trồng cây cảnh trong nhà. Tìm hiểu về các loại cây phù hợp và cách bố trí không gian xanh.',
    content: `
      <h2>Chọn cây cảnh phù hợp với không gian sống</h2>
      <p>Việc chọn cây cảnh phù hợp là bước đầu tiên quan trọng nhất khi bắt đầu tạo không gian xanh trong nhà. Mỗi loại cây có yêu cầu riêng về ánh sáng, độ ẩm và không gian.</p>
      
      <h3>Các loại cây dễ chăm sóc cho người mới bắt đầu</h3>
      <ul>
        <li><strong>Cây kim tiền:</strong> Cây bền bỉ, ít cần nước, thích hợp với ánh sáng yếu</li>
        <li><strong>Cây lưỡi hổ:</strong> Dễ chăm sóc, thanh lọc không khí hiệu quả</li>
        <li><strong>Cây trầu bà:</strong> Phát triển nhanh, thích hợp treo hoặc để bàn</li>
        <li><strong>Cây phát tài:</strong> Mang ý nghĩa phong thủy tốt, dễ sinh trưởng</li>
      </ul>

      <h3>Bố trí cây cảnh trong từng không gian</h3>
      <p>Mỗi góc trong nhà có thể trở thành điểm nhấn xanh mát. Phòng khách phù hợp với cây lớn như cây thiên điểu, cây đề, tạo điểm nhấn ấn tượng. Phòng ngủ nên chọn cây nhỏ xinh như cây sen đá, cây lô hội giúp thanh lọc không khí ban đêm.</p>

      <h3>Lưu ý khi bắt đầu trồng cây</h3>
      <p>Hãy bắt đầu với ít cây và tăng dần khi đã có kinh nghiệm. Quan sát cây hàng ngày để nhận biết sớm các dấu hiệu bất thường. Ghi chép lịch tưới nước và chăm sóc để tạo thói quen tốt.</p>

      <h3>Công cụ cần thiết</h3>
      <p>Chuẩn bị các dụng cụ cơ bản như bình tưới nước, kéo cắt tỉa, phân bón, đất trồng chất lượng. Đầu tư vào chậu cây đẹp để tăng tính thẩm mỹ cho không gian.</p>
    `,
    image_url: '/lovable-uploads/40519606-257d-4eb1-8ef9-66f9bafffd1c.png',
    category: 'basics',
    created_at: '2024-03-15',
    featured: true,
    read_time: 5,
    author: 'Đội ngũ Green Garden',
    tags: ['cây cảnh', 'người mới bắt đầu', 'trong nhà']
  },
  {
    id: '2',
    title: 'Nghệ thuật tưới nước cho cây cảnh',
    slug: 'nghe-thuat-tuoi-nuoc-cho-cay-canh',
    excerpt: 'Học cách tưới nước đúng cách - yếu tố quyết định sự sống còn của cây cảnh. Khám phá các kỹ thuật tưới nước hiệu quả.',
    content: `
      <h2>Hiểu về nhu cầu nước của cây</h2>
      <p>Mỗi loại cây có nhu cầu nước khác nhau. Cây nhiệt đới thường cần nhiều nước hơn cây sa mạc. Việc hiểu rõ đặc điểm từng loại cây sẽ giúp bạn tưới nước đúng cách.</p>

      <h3>Các dấu hiệu cây cần nước</h3>
      <ul>
        <li>Đất khô, nứt nẻ trên bề mặt</li>
        <li>Lá bắt đầu héo, cong xuống</li>
        <li>Màu lá nhạt dần, không bóng</li>
        <li>Thân cây mềm, không cứng cáp</li>
      </ul>

      <h3>Kỹ thuật tưới nước hiệu quả</h3>
      <p>Tưới nước vào buổi sáng sớm hoặc chiều tối khi nhiệt độ không quá cao. Nước nên được tưới từ từ để thấm sâu vào rễ, tránh tưới nhanh làm nước tràn ra ngoài.</p>

      <h3>Các loại nước phù hợp</h3>
      <p>Nước mưa là lựa chọn tốt nhất cho cây. Nước máy cần để lắng ít nhất 24 giờ để clo bay hơi. Tránh dùng nước quá lạnh hoặc quá nóng.</p>

      <h3>Tần suất tưới nước</h3>
      <p>Mùa hè tưới 2-3 lần/tuần, mùa đông giảm xuống 1-2 lần/tuần. Kiểm tra độ ẩm đất bằng cách đưa ngón tay sâu 2-3cm vào đất.</p>

      <h3>Lỗi thường gặp khi tưới nước</h3>
      <p>Tưới quá nhiều nước là nguyên nhân hàng đầu cây chết. Tưới không đều, chỉ ướt bề mặt cũng gây hại cho rễ cây.</p>
    `,
    image_url: '/lovable-uploads/ff452d84-50fa-4268-a28f-45adef1a3b3e.png',
    category: 'watering',
    created_at: '2024-03-10',
    featured: true,
    read_time: 4,
    author: 'Chuyên gia Nguyễn Minh',
    tags: ['tưới nước', 'chăm sóc cây', 'kỹ thuật']
  },
  {
    id: '3',
    title: 'Ánh sáng và sự phát triển của cây',
    slug: 'anh-sang-va-su-phat-trien-cua-cay',
    excerpt: 'Tìm hiểu về tầm quan trọng của ánh sáng đối với cây cảnh và cách tối ưu hóa điều kiện ánh sáng trong nhà.',
    content: `
      <h2>Vai trò của ánh sáng trong quá trình quang hợp</h2>
      <p>Ánh sáng là nguồn năng lượng chính giúp cây thực hiện quá trình quang hợp. Không có ánh sáng đủ, cây không thể sản xuất thức ăn và sẽ dần suy yếu.</p>

      <h3>Các loại ánh sáng cho cây cảnh</h3>
      <ul>
        <li><strong>Ánh sáng trực tiếp:</strong> Thích hợp cho cây yêu sáng như xương rồng</li>
        <li><strong>Ánh sáng gián tiếp:</strong> Phù hợp với hầu hết cây cảnh trong nhà</li>
        <li><strong>Ánh sáng nhân tạo:</strong> Đèn LED phổ đầy đủ cho vùng thiếu sáng</li>
      </ul>

      <h3>Nhận biết thiếu ánh sáng</h3>
      <p>Cây thiếu sáng thường có thân mảnh, yếu, lá nhạt màu và khoảng cách giữa các lá xa nhau. Cây cũng có thể nghiêng về phía nguồn sáng.</p>

      <h3>Bố trí cây theo ánh sáng</h3>
      <p>Đặt cây gần cửa sổ hướng đông hoặc tây để nhận ánh sáng mềm. Tránh cửa sổ hướng nam với ánh sáng quá mạnh vào mùa hè.</p>

      <h3>Sử dụng đèn chiếu sáng</h3>
      <p>Đèn LED toàn phổ là lựa chọn tốt nhất, tiết kiệm điện và phát ra ít nhiệt. Chiếu sáng 12-14 giờ/ngày cho cây lá, 8-10 giờ cho cây hoa.</p>
    `,
    image_url: '/lovable-uploads/56f533a4-2b20-44a7-bf2c-f488f1b916e2.png',
    category: 'light',
    created_at: '2024-03-08',
    featured: false,
    read_time: 4,
    author: 'Kỹ sư Lê Thành',
    tags: ['ánh sáng', 'quang hợp', 'chăm sóc']
  },
  {
    id: '4',
    title: 'Bí mật của đất trồng chất lượng',
    slug: 'bi-mat-cua-dat-trong-chat-luong',
    excerpt: 'Khám phá thành phần đất trồng lý tưởng và cách pha trộn đất phù hợp cho từng loại cây cảnh.',
    content: `
      <h2>Thành phần đất trồng lý tưởng</h2>
      <p>Đất trồng tốt cần có cấu trúc tơi xốp, thoát nước tốt nhưng vẫn giữ được độ ẩm cần thiết. Thành phần cân bằng giữa đất sét, đất cát và mùn hữu cơ.</p>

      <h3>Các loại đất cơ bản</h3>
      <ul>
        <li><strong>Đất thịt:</strong> Giàu dinh dưỡng, giữ ẩm tốt</li>
        <li><strong>Đất cát:</strong> Thoát nước nhanh, thoáng khí</li>
        <li><strong>Đất sét:</strong> Giữ nước lâu nhưng dễ bị đọng nước</li>
        <li><strong>Mùn hữu cơ:</strong> Cung cấp dinh dưỡng và cải thiện cấu trúc đất</li>
      </ul>

      <h3>Pha trộn đất cho cây cảnh</h3>
      <p>Công thức cơ bản: 40% đất thịt + 30% mùn hữu cơ + 20% đất cát + 10% trấu hun. Điều chỉnh tỷ lệ tùy theo nhu cầu từng loại cây.</p>

      <h3>Kiểm tra chất lượng đất</h3>
      <p>Đất tốt có màu nâu đen, mùi thơm đất, không bị đặc cứng. Khi nắm đất ướt trong tay, đất không chảy ra mà cũng không quá dính.</p>

      <h3>Cải thiện đất nghèo</h3>
      <p>Thêm phân compost, mùn dừa hoặc trấu hun để cải thiện cấu trúc. Bổ sung vôi nếu đất quá chua, lưu huỳnh nếu đất quá kiềm.</p>

      <h3>Thay đất định kỳ</h3>
      <p>Thay đất 1-2 năm/lần để đảm bảo dinh dưỡng. Cây non thay đất thường xuyên hơn cây già.</p>
    `,
    image_url: '/lovable-uploads/0c796c02-4e90-4ef1-adfa-ca4611f2076a.png',
    category: 'soil',
    created_at: '2024-03-05',
    featured: false,
    read_time: 5,
    author: 'Tiến sĩ Phạm Nga',
    tags: ['đất trồng', 'dinh dưỡng', 'pha trộn']
  },
  {
    id: '5',
    title: 'Bón phân đúng cách cho cây cảnh',
    slug: 'bon-phan-dung-cach-cho-cay-canh',
    excerpt: 'Hướng dẫn chi tiết về các loại phân bón và lịch bón phân khoa học giúp cây phát triển khỏe mạnh.',
    content: `
      <h2>Hiểu về nhu cầu dinh dưỡng của cây</h2>
      <p>Cây cần ba nguyên tố chính NPK: Nitơ (N) giúp lá xanh tốt, Phốt pho (P) kích thích ra hoa và củ quả, Kali (K) tăng sức đề kháng.</p>

      <h3>Các loại phân bón phổ biến</h3>
      <ul>
        <li><strong>Phân hữu cơ:</strong> Phân compost, phân chuồng, an toàn lâu dài</li>
        <li><strong>Phân vô cơ:</strong> NPK, đơn phân, hiệu quả nhanh</li>
        <li><strong>Phân lá:</strong> Dạng dung dịch, thẩm thấu qua lá</li>
        <li><strong>Phân chậm tan:</strong> Viên nén, cung cấp dinh dưỡng đều đặn</li>
      </ul>

      <h3>Lịch bón phân theo mùa</h3>
      <p>Mùa xuân-hè (tháng 3-8): Bón đạm để cây phát triển nhanh. Mùa thu (tháng 9-11): Tăng phốt pho và kali. Mùa đông: Giảm hoặc ngừng bón phân.</p>

      <h3>Cách bón phân hiệu quả</h3>
      <p>Bón phân vào buổi sáng sớm hoặc chiều tối. Tưới nước nhẹ trước và sau khi bón. Không bón phân khi đất khô hoặc cây đang bị bệnh.</p>

      <h3>Dấu hiệu thiếu dinh dưỡng</h3>
      <p>Thiếu nitơ: lá vàng từ dưới lên. Thiếu phốt pho: lá tím, ra hoa kém. Thiếu kali: lá cháy viền, dễ gãy.</p>

      <h3>Lưu ý khi bón phân</h3>
      <p>Không bón quá liều có thể gây cháy rễ. Phân hữu cơ cần ủ chín trước khi sử dụng. Đọc kỹ hướng dẫn trên bao bì phân.</p>
    `,
    image_url: '/lovable-uploads/3816c3bf-6bf9-40c3-9b41-c049ceb26505.png',
    category: 'fertilizer',
    created_at: '2024-03-01',
    featured: false,
    read_time: 4,
    author: 'Kỹ sư Vũ Hải',
    tags: ['phân bón', 'dinh dưỡng', 'NPK']
  },
  {
    id: '6',
    title: 'Phòng trừ sâu bệnh hại cây cảnh',
    slug: 'phong-tru-sau-benh-hai-cay-canh',
    excerpt: 'Nhận biết và xử lý các loại sâu bệnh phổ biến trên cây cảnh. Phương pháp phòng trừ an toàn và hiệu quả.',
    content: `
      <h2>Những loại sâu bệnh phổ biến</h2>
      <p>Cây cảnh thường gặp phải rệp xanh, rệp sáp, nhện đỏ, bọ trĩ và các bệnh nấm. Mỗi loại có đặc điểm riêng và cách xử lý khác nhau.</p>

      <h3>Nhận biết sâu hại</h3>
      <ul>
        <li><strong>Rệp xanh:</strong> Côn trùng nhỏ màu xanh, tụ tập ở ngọn non</li>
        <li><strong>Rệp sáp:</strong> Màu trắng như bông, bám trên thân và lá</li>
        <li><strong>Nhện đỏ:</strong> Tạo tơ nhện, lá có đốm trắng nhỏ</li>
        <li><strong>Bọ trĩ:</strong> Ăn lá tạo lỗ, hoạt động ban đêm</li>
      </ul>

      <h3>Phương pháp phòng trừ tự nhiên</h3>
      <p>Xịt nước xà phòng loãng, dầu Neem, dung dịch tỏi ớt. Sử dụng côn trùng có ích như bọ rùa để diệt rệp.</p>

      <h3>Bệnh nấm và cách điều trị</h3>
      <p>Bệnh đốm lá, phấn trắng, thối rễ thường do độ ẩm cao. Cắt bỏ phần bị bệnh, cải thiện thông gió, xịt thuốc diệt nấm sinh học.</p>

      <h3>Phòng bệnh hiệu quả</h3>
      <p>Đảm bảo cây được thông gió tốt, không tưới nước lên lá, cách ly cây mới mua. Kiểm tra cây định kỳ để phát hiện sớm.</p>

      <h3>Xử lý khi cây bị nhiễm bệnh nặng</h3>
      <p>Cô lập cây bệnh ngay lập tức. Cắt bỏ hoàn toàn phần bị bệnh, thay đất mới, khử trùng chậu cây.</p>
    `,
    image_url: '/lovable-uploads/556253b6-7b7d-4409-8547-f9c535d729cb.png',
    category: 'pests',
    created_at: '2024-02-28',
    featured: true,
    read_time: 6,
    author: 'Chuyên gia Trần Hưng',
    tags: ['sâu bệnh', 'phòng trừ', 'bảo vệ thực vật']
  },
  {
    id: '7',
    title: 'Nghệ thuật tạo hình và cắt tỉa cây cảnh',
    slug: 'nghe-thuat-tao-hinh-va-cat-tia-cay-canh',
    excerpt: 'Học cách tạo hình và cắt tỉa cây cảnh để tạo ra những tác phẩm nghệ thuật sống động trong nhà.',
    content: `
      <h2>Nguyên tắc cơ bản của cắt tỉa</h2>
      <p>Cắt tỉa không chỉ để tạo hình đẹp mà còn giúp cây khỏe mạnh hơn. Loại bỏ cành già, yếu để dinh dưỡng tập trung vào cành khỏe.</p>

      <h3>Thời điểm cắt tỉa phù hợp</h3>
      <ul>
        <li>Mùa xuân: Thời điểm tốt nhất cho hầu hết các loại cây</li>
        <li>Sau khi ra hoa: Cắt tỉa cây có hoa</li>
        <li>Khi cây dormant: Cây rụng lá vào mùa đông</li>
        <li>Cắt tỉa nhẹ: Có thể thực hiện quanh năm</li>
      </ul>

      <h3>Công cụ cắt tỉa chuyên dụng</h3>
      <p>Kéo cắt cành sắc bén, được khử trùng. Cưa nhỏ cho cành to. Dao cắt nhỏ gọn cho cành nhỏ. Luôn giữ công cụ sạch sẽ.</p>

      <h3>Kỹ thuật cắt tỉa cơ bản</h3>
      <p>Cắt nghiêng 45 độ, cách nách lá khoảng 5mm. Cắt từ ngoài vào trong, từ dưới lên trên. Không cắt quá nhiều cùng lúc.</p>

      <h3>Tạo hình theo phong cách</h3>
      <p>Phong cách tự nhiên: giữ hình dáng tự nhiên, chỉ cắt cành xấu. Phong cách hình học: tạo hình tròn, vuông, tam giác.</p>

      <h3>Chăm sóc sau cắt tỉa</h3>
      <p>Tưới nước đầy đủ nhưng không quá ướt. Bón phân nhẹ để cây hồi phục. Tránh ánh sáng mạnh trong vài ngày đầu.</p>
    `,
    image_url: '/lovable-uploads/28ec1401-289f-4c25-9f5b-bdb1e25614d5.png',
    category: 'basics',
    created_at: '2024-02-25',
    featured: false,
    read_time: 5,
    author: 'Nghệ nhân Hoàng Anh',
    tags: ['cắt tỉa', 'tạo hình', 'nghệ thuật']
  },
  {
    id: '8',
    title: 'Nghệ thuật Bonsai - Tinh hoa của cây cảnh',
    slug: 'nghe-thuat-bonsai-tinh-hoa-cua-cay-canh',
    excerpt: 'Khám phá thế giới Bonsai đầy thú vị. Học cách tạo ra những tác phẩm Bonsai từ những cây con nhỏ bé.',
    content: `
      <h2>Lịch sử và ý nghĩa của Bonsai</h2>
      <p>Bonsai có nguồn gốc từ Trung Quốc, được người Nhật phát triển thành nghệ thuật tinh tế. Bonsai thể hiện vẻ đẹp của thiên nhiên thu nhỏ trong chậu.</p>

      <h3>Các phong cách Bonsai phổ biến</h3>
      <ul>
        <li><strong>Thẳng đứng (Chokkan):</strong> Thân thẳng, cân đối</li>
        <li><strong>Nghiêng (Shakan):</strong> Thân nghiêng tự nhiên</li>
        <li><strong>Thác đổ (Kengai):</strong> Cành rủ xuống như thác nước</li>
        <li><strong>Rừng nhỏ (Yose-ue):</strong> Nhiều cây trồng cùng chậu</li>
      </ul>

      <h3>Chọn cây phù hợp cho Bonsai</h3>
      <p>Cây sung, cây đa, cây tùng, cây me là những lựa chọn tốt cho người mới bắt đầu. Chọn cây có thân khỏe, rễ đẹp và dễ uốn nắn.</p>

      <h3>Kỹ thuật uốn dây cơ bản</h3>
      <p>Sử dụng dây nhôm hoặc đồng để uốn cành. Quấn dây từ dưới lên trên, góc 45 độ. Không quấn quá chặt để tránh làm tổn thương cây.</p>

      <h3>Chăm sóc Bonsai đặc biệt</h3>
      <p>Bonsai cần được tưới nước thường xuyên do chậu nhỏ. Bón phân ít mà nhiều lần. Thay đất 2-3 năm/lần.</p>

      <h3>Sabaikán - nghệ thuật cắt tỉa cho Bonsai</h3>
      <p>Cắt bỏ cành thừa, cành chéo, cành mọc ngược chiều. Tạo tầng lá cân đối. Luôn giữ hình tam giác tổng thể.</p>
    `,
    image_url: '/lovable-uploads/1bd07260-89f8-4c95-9645-96021120b2f9.png',
    category: 'basics',
    created_at: '2024-02-20',
    featured: true,
    read_time: 7,
    author: 'Thầy Minh Bonsai',
    tags: ['bonsai', 'nghệ thuật', 'tạo hình']
  },
  {
    id: '9',
    title: 'Thiết kế vườn mini trong nhà - Không gian xanh hoàn hảo',
    slug: 'thiet-ke-vuon-mini-trong-nha',
    excerpt: 'Hướng dẫn tạo một khu vườn mini hoàn hảo trong không gian sống. Mang thiên nhiên vào ngôi nhà của bạn một cách tinh tế và hiệu quả.',
    content: `
      <h2>Quy hoạch không gian vườn mini thông minh</h2>
      <p>Vườn mini trong nhà cần được bố trí hợp lý để tận dụng tối đa không gian và ánh sáng tự nhiên. Việc quy hoạch đúng đắn sẽ tạo ra một hệ sinh thái nhỏ hoàn chỉnh trong chính ngôi nhà của bạn.</p>

      <h3>Phân tích và chọn vị trí lý tưởng</h3>
      <ul>
        <li><strong>Gần cửa sổ:</strong> Để nhận ánh sáng tự nhiên tối đa, đặc biệt là ánh sáng sáng sớm</li>
        <li><strong>Thông gió tốt:</strong> Không bị gió lùa nhưng vẫn có không khí lưu thông</li>
        <li><strong>Dễ quan sát:</strong> Vị trí thuận tiện để chăm sóc và theo dõi cây hàng ngày</li>
        <li><strong>Không cản trở:</strong> Không làm ảnh hưởng đến động tuyến sinh hoạt gia đình</li>
        <li><strong>Gần nguồn nước:</strong> Thuận tiện cho việc tưới nước và vệ sinh</li>
      </ul>

      <h3>Thiết kế theo tầng và chiều sâu</h3>
      <p>Sử dụng kệ nhiều tầng để tối ưu không gian theo chiều dọc. Đặt cây cao ở tầng dưới để tạo nền, cây trung bình ở tầng giữa, và cây nhỏ xinh ở tầng trên. Tạo độ cao khác nhau bằng cách sử dụng đế nâng, tạo cảm giác tự nhiên như trong rừng.</p>

      <h3>Lựa chọn và phối hợp cây</h3>
      <p>Kết hợp hài hòa giữa cây lá xanh và cây có hoa màu sắc. Cây đứng thẳng kết hợp với cây treo tạo tầng lớp. Chọn cây có tốc độ phát triển khác nhau để duy trì cân bằng lâu dài. Ưu tiên cây có khả năng thanh lọc không khí như cây lưỡi hổ, cây spider plant.</p>

      <h3>Hệ thống tưới nước tự động hiện đại</h3>
      <p>Lắp đặt hệ thống tưới nhỏ giọt với timer tự động để đảm bảo cây được tưới đều đặn. Sử dụng chậu tự tưới với hệ thống dự trữ nước cho những lúc đi vắng dài ngày. Bố trí hệ thống thoát nước hiệu quả để tránh ngập úng.</p>

      <h3>Trang trí và phụ kiện thẩm mỹ</h3>
      <p>Thêm đèn LED dây trang trí để tạo không khí ấm cúng vào buổi tối. Sử dụng sỏi màu, cát trang trí để tạo điểm nhấn. Bổ sung tượng nhỏ, đài phun nước mini để tăng tính thẩm mỹ. Sử dụng chậu cùng màu sắc hoặc chất liệu để tạo sự thống nhất.</p>

      <h3>Bảo trì và phát triển vườn mini</h3>
      <p>Lập lịch kiểm tra và chăm sóc định kỳ hàng tuần. Thay thế cây yếu kịp thời để duy trì vẻ đẹp tổng thể. Vệ sinh lá cây và khu vực trồng cây thường xuyên. Bổ sung cây mới theo mùa để có sự đổi mới.</p>

      <h3>Tối ưu hóa vi khí hậu</h3>
      <p>Sử dụng khay nước để tăng độ ẩm không khí xung quanh cây. Nhóm các cây lại gần nhau để tạo vi khí hậu ẩm ướt. Sử dụng máy phun sương tự động vào những ngày khô hanh.</p>
    `,
    image_url: '/lovable-uploads/71996b5a-7b06-441d-9760-e67c64c01406.png',
    category: 'basics',
    created_at: '2024-02-15',
    featured: false,
    read_time: 8,
    author: 'Kiến trúc sư Lan Phương',
    tags: ['vườn mini', 'thiết kế', 'không gian xanh', 'trang trí nội thất']
  },
  {
    id: '10',
    title: 'Cây cảnh và phong thủy - Hài hòa năng lượng trong ngôi nhà',
    slug: 'cay-canh-va-phong-thuy-trong-nha',
    excerpt: 'Tìm hiểu sâu về ý nghĩa phong thủy của các loại cây cảnh và cách bố trí khoa học để thu hút may mắn, tài lộc và năng lượng tích cực.',
    content: `
      <h2>Triết lý phong thủy và cây cảnh trong đời sống</h2>
      <p>Theo triết lý phong thủy cổ xưa, cây cảnh không chỉ là vật trang trí đơn thuần mà còn là những "cầu nối" giúp cân bằng năng lượng (khí) trong không gian sống. Mỗi loại cây mang trong mình những đặc tính năng lượng riêng biệt, có thể ảnh hưởng tích cực đến sức khỏe, tài vận và các mối quan hệ.</p>

      <h3>Cây cảnh phù hợp theo ngũ hành</h3>
      <ul>
        <li><strong>Mệnh Mộc (1974, 1975, 1982, 1983...):</strong> Cây trúc, cây sung, cây đề - tăng cường sức mạnh bản mệnh</li>
        <li><strong>Mệnh Hỏa (1976, 1977, 1984, 1985...):</strong> Cây hồng môn, cây phát tài - kích hoạt năng lượng sáng tạo</li>
        <li><strong>Mệnh Thổ (1978, 1979, 1986, 1987...):</strong> Cây kim ngân, cây ngọc bích - ổn định và bình an</li>
        <li><strong>Mệnh Kim (1980, 1981, 1988, 1989...):</strong> Cây lưỡi hổ, cây kim tiền - thu hút tài lộc</li>
        <li><strong>Mệnh Thủy (1972, 1973, 1990, 1991...):</strong> Cây phú quý, cây thủy sinh - tăng cường trí tuệ</li>
      </ul>

      <h3>Bản đồ phong thủy và vị trí đặt cây</h3>
      <p><strong>Khu vực cửa chính:</strong> Đặt cây lớn như cây kim tiền hoặc cây phát tài để "chặn" khí xấu từ bên ngoài, chỉ cho phép năng lượng tích cực vào nhà. <strong>Góc tài lộc (góc chéo cửa chính):</strong> Vị trí quan trọng nhất, nên đặt cây kim tiền, cây ngọc bích hoặc cây phát tài để kích hoạt năng lượng thịnh vượng.</p>

      <p><strong>Phòng khách:</strong> Trung tâm giao lưu, nên chọn cây có tán lá rộng như cây đề, cây thiên điểu để tạo không khí ấm cúng. <strong>Phòng ngủ:</strong> Tránh cây có gai như xương rồng, ưu tiên cây thanh lọc không khí như cây lô hội, cây spider plant để cải thiện chất lượng giấc ngủ.</p>

      <h3>Cây cảnh mang tài lộc và thịnh vượng</h3>
      <p><strong>Cây kim tiền:</strong> Lá hình đồng xu, biểu tượng của sự giàu có, đặc biệt hiệu quả trong góc Đông Nam. <strong>Cây phát tài:</strong> Tên gọi đã nói lên ý nghĩa, lá xanh tươi tượng trưng cho sự phát triển không ngừng của tài chính. <strong>Cây ngọc bích:</strong> Màu xanh ngọc quý, mang lại may mắn trong đầu tư và kinh doanh.</p>

      <h3>Những điều tuyệt đối cần tránh</h3>
      <p><strong>Cây chết hoặc héo úa:</strong> Tạo ra năng lượng âm tính, ảnh hưởng xấu đến vận khí gia đình, cần loại bỏ ngay lập tức. <strong>Cây có gai trong phòng ngủ:</strong> Gây căng thẳng, ảnh hưởng đến giấc ngủ và mối quan hệ vợ chồng. <strong>Quá nhiều cây:</strong> Tạo âm khí quá nặng, đặc biệt nguy hiểm trong phòng ngủ.</p>

      <h3>Nguyên tắc chăm sóc theo phong thủy</h3>
      <p>Giữ cây luôn xanh tươi và khỏe mạnh để duy trì năng lượng tích cực. Cắt bỏ lá vàng, lá khô ngay lập tức vì chúng mang năng lượng suy thoái. Thay nước và vệ sinh chậu cây thường xuyên để năng lượng lưu thông tốt. Nói chuyện với cây và chăm sóc bằng tình yêu thương để tăng cường kết nối năng lượng.</p>

      <h3>Lịch trồng cây theo âm lịch</h3>
      <p>Trồng cây vào những ngày tốt theo âm lịch để tăng cường hiệu quả phong thủy. Tránh trồng cây vào ngày suy, ngày hạn để không mang năng lượng xấu vào nhà.</p>
    `,
    image_url: '/lovable-uploads/3d8436a2-face-4e0a-9080-7f11ceb6c900.png',
    category: 'basics',
    created_at: '2024-02-10',
    featured: false,
    read_time: 10,
    author: 'Thầy Phong thủy Minh Tuấn',
    tags: ['phong thủy', 'may mắn', 'tài lộc', 'ngũ hành', 'năng lượng']
  },
  {
    id: '11',
    title: 'Nhân giống cây cảnh tại nhà - Từ nghiệp dư đến chuyên nghiệp',
    slug: 'nhan-giong-cay-canh-tai-nha',
    excerpt: 'Học các phương pháp nhân giống cây cảnh đơn giản và hiệu quả. Tự tay tạo ra khu vườn phong phú từ những cây ban đầu với kỹ thuật chuyên nghiệp.',
    content: `
      <h2>Tổng quan về nhân giống cây cảnh</h2>
      <p>Nhân giống là nghệ thuật tạo ra những cây mới từ cây mẹ, giúp bạn mở rộng khu vườn một cách kinh tế và hiệu quả. Đây cũng là cách tuyệt vời để bảo tồn những giống cây quý hiếm hoặc có ý nghĩa đặc biệt.</p>

      <h3>Các phương pháp nhân giống phổ biến</h3>
      <ul>
        <li><strong>Chiết cành (Cutting):</strong> Phương pháp phổ biến nhất, cắt cành để tạo cây mới</li>
        <li><strong>Gieo hạt (Seeding):</strong> Từ hạt giống tự nhiên hoặc thu hoạch</li>
        <li><strong>Chia khóm (Division):</strong> Tách cây mẹ thành nhiều cây con</li>
        <li><strong>Ghép cành (Grafting):</strong> Kỹ thuật nâng cao, ghép cành tốt lên gốc khỏe</li>
        <li><strong>Giâm lá (Leaf cutting):</strong> Tạo cây mới từ lá, phù hợp với sen đá</li>
      </ul>

      <h3>Kỹ thuật chiết cành chuyên nghiệp</h3>
      <p><strong>Chọn cành:</strong> Cành khỏe mạnh, không có hoa, độ tuổi 6-12 tháng, không quá non hoặc quá già. <strong>Thời điểm:</strong> Mùa xuân hoặc đầu mùa hè khi cây đang trong giai đoạn sinh trưởng mạnh. <strong>Chuẩn bị cành:</strong> Cắt cành dài 10-15cm, có 3-4 nút lá, cắt nghiêng 45 độ dưới nút lá.</p>

      <p><strong>Xử lý cành:</strong> Bỏ lá dưới, giữ lại 2-3 lá trên ngọn, cắt nhỏ lá lớn để giảm bay hơi. Nhúng vào hormone tạo rễ (IBA hoặc NAA) nếu có. <strong>Môi trường giâm:</strong> Đất giâm tơi xốp (cát + mùn dừa), độ ẩm vừa phải, nhiệt độ 20-25°C.</p>

      <h3>Điều kiện môi trường tối ưu</h3>
      <p><strong>Nhiệt độ:</strong> 20-25°C là lý tưởng cho hầu hết các loại cây. <strong>Độ ẩm:</strong> 70-80%, sử dụng màng che hoặc hộp nhựa trong để giữ ẩm. <strong>Ánh sáng:</strong> Ánh sáng tán xạ, tránh ánh sáng trực tiếp gây héo. <strong>Thông gió:</strong> Nhẹ nhàng để tránh nấm mốc nhưng không làm khô cành.</p>

      <h3>Phương pháp gieo hạt hiệu quả</h3>
      <p><strong>Chuẩn bị hạt:</strong> Chọn hạt tươi, đầy đặn, ngâm nước ấm 24 giờ để kích thích nảy mầm. <strong>Đất gieo:</strong> Sử dụng đất gieo hạt chuyên dụng, tơi xốp, thoát nước tốt. <strong>Kỹ thuật gieo:</strong> Gieo không quá sâu (2-3 lần kích thước hạt), che ẩm bằng màng plastic có thủng lỗ.</p>

      <h3>Chăm sóc cây con chuyên nghiệp</h3>
      <p><strong>Tưới nước:</strong> Sử dụng bình xịt tưới nhẹ nhàng, tránh làm đổ cây non. Giữ độ ẩm đất ổn định nhưng không ngập úng. <strong>Dinh dưỡng:</strong> Bón phân loãng (1/4 nồng độ bình thường) khi cây có 4-6 lá thật. <strong>Ghép chậu:</strong> Chuyển cây vào chậu riêng khi rễ dài 3-5cm và có ít nhất 4 lá thật.</p>

      <h3>Xây dựng cộng đồng chia sẻ</h3>
      <p>Khi thành công trong nhân giống, bạn có thể tham gia các nhóm yêu cây cảnh để trao đổi kinh nghiệm và cây giống. Tổ chức những buổi gặp mặt chia sẻ cây con với bạn bè, hàng xóm. Ghi chép quá trình nhân giống để tích lũy kinh nghiệm và chia sẻ với cộng đồng.</p>

      <h3>Khắc phục sự cố thường gặp</h3>
      <p><strong>Cành bị thối:</strong> Do quá ẩm, cải thiện thoát nước và giảm tưới. <strong>Không ra rễ:</strong> Kiểm tra nhiệt độ, độ ẩm và chất lượng cành chiết. <strong>Cây con chết:</strong> Thường do shock khi ghép chậu, cần tập quen dần với môi trường mới.</p>
    `,
    image_url: '/lovable-uploads/ff452d84-50fa-4268-a28f-45adef1a3b3e.png',
    category: 'basics',
    created_at: '2024-02-05',
    featured: false,
    read_time: 9,
    author: 'Kỹ sư Nông nghiệp Thái Sơn',
    tags: ['nhân giống', 'chiết cành', 'gieo hạt', 'kỹ thuật', 'chuyên nghiệp']
  },
  {
    id: '12',
    title: 'Cây cảnh mùa đông - Chiến lược chăm sóc toàn diện',
    slug: 'cay-canh-mua-dong-cham-soc-dac-biet',
    excerpt: 'Hướng dẫn chi tiết chăm sóc cây cảnh trong mùa đông lạnh giá. Bảo vệ cây khỏi rét đậm và duy trì sự phát triển khỏe mạnh qua mùa khó khăn.',
    content: `
      <h2>Hiểu biết về thách thức mùa đông</h2>
      <p>Mùa đông mang đến nhiều thách thức nghiêm trọng cho cây cảnh: nhiệt độ thấp có thể làm đóng băng tế bào, ít ánh sáng mặt trời ảnh hưởng đến quá trình quang hợp, không khí khô hanh do hệ thống sưởi, và chu kỳ sinh trưởng chậm lại của thực vật.</p>

      <h3>Phân loại cây theo khả năng chịu lạnh</h3>
      <ul>
        <li><strong>Cây chịu lạnh tốt:</strong> Cây lưỡi hổ, cây kim tiền, cây trúc - có thể chịu 5-10°C</li>
        <li><strong>Cây nhạy cảm với lạnh:</strong> Cây phát tài, cây hồng môn - cần nhiệt độ trên 15°C</li>
        <li><strong>Cây nhiệt đới:</strong> Cây thiên điểu, cây monstera - cần nhiệt độ trên 18°C</li>
        <li><strong>Cây sa mạc:</strong> Xương rồng, sen đá - chịu lạnh tốt nhưng sợ ẩm ướt</li>
      </ul>

      <h3>Chiến lược tưới nước mùa đông</h3>
      <p><strong>Tần suất tưới:</strong> Giảm xuống 50-70% so với mùa hè, từ 3 lần/tuần xuống 1-2 lần/tuần. <strong>Thời điểm tưới:</strong> Tưới vào buổi sáng (9-11h) để cây có thời gian hấp thụ và khô trước khi nhiệt độ giảm vào đêm. <strong>Chất lượng nước:</strong> Sử dụng nước ở nhiệt độ phòng (20-25°C), tránh nước quá lạnh gây shock.</p>

      <p><strong>Kỹ thuật kiểm tra:</strong> Đưa ngón tay sâu 3-5cm vào đất, chỉ tưới khi đất khô. Quan sát màu sắc đất và độ nặng của chậu để đánh giá độ ẩm.</p>

      <h3>Hệ thống bảo vệ khỏi lạnh</h3>
      <p><strong>Di chuyển vào trong:</strong> Đưa cây nhạy cảm vào nhà, đặt gần cửa sổ hướng nam để nhận ánh sáng tối đa. <strong>Thiết bị sưởi ấm:</strong> Sử dụng đèn sưởi ceramic, thảm ấm điện cho khu vực trồng cây, duy trì nhiệt độ 18-22°C. <strong>Bọc bảo vệ:</strong> Bọc chậu cây bằng vải nỉ, giấy báo hoặc plastic bubble để giữ nhiệt cho rễ.</p>

      <h3>Giải pháp ánh sáng nhân tạo</h3>
      <p><strong>Đèn LED grow light:</strong> Sử dụng đèn phổ đầy đủ (400-700nm) để bù đắp thiếu ánh sáng tự nhiên. <strong>Thời gian chiếu:</strong> 8-10 giờ/ngày cho cây lá, 6-8 giờ cho cây trong giai đoạn nghỉ đông. <strong>Khoảng cách:</strong> Đặt đèn cách cây 30-50cm để tránh cháy lá.</p>

      <h3>Quản lý độ ẩm không khí</h3>
      <p><strong>Máy phun sương:</strong> Sử dụng máy phun sương tự động để duy trì độ ẩm 50-60%. <strong>Khay nước:</strong> Đặt khay nước rộng có sỏi gần cây để tăng độ ẩm cục bộ. <strong>Nhóm cây:</strong> Tập trung cây lại gần nhau để tạo vi khí hậu ẩm ướt tự nhiên.</p>

      <h3>Điều chỉnh dinh dưỡng thông minh</h3>
      <p><strong>Giảm tần suất bón phân:</strong> Từ 2 tuần/lần xuống 1 tháng/lần vì cây hấp thụ chậm. <strong>Loại phân phù hợp:</strong> Sử dụng phân có hàm lượng Kali cao để tăng sức chịu lạnh. <strong>Phân lá:</strong> Xịt phân lá loãng 2 tuần/lần để bổ sung vi lượng.</p>

      <h3>Phòng chống sâu bệnh mùa đông</h3>
      <p><strong>Nhện đỏ:</strong> Thường xuất hiện do không khí khô, tăng độ ẩm và xịt nước thường xuyên. <strong>Rệp sáp:</strong> Kiểm tra kỹ gốc lá và thân cây, xử lý bằng cồn 70% hoặc dầu neem. <strong>Nấm mốc:</strong> Cải thiện thông gió và giảm độ ẩm đất để ngăn ngừa.</p>

      <h3>Lịch chăm sóc hàng tuần</h3>
      <p><strong>Thứ 2:</strong> Kiểm tra nhiệt độ và điều chỉnh hệ thống sưởi. <strong>Thứ 4:</strong> Kiểm tra độ ẩm đất và tưới nước nếu cần. <strong>Thứ 6:</strong> Vệ sinh lá và kiểm tra sâu bệnh. <strong>Chủ nhật:</strong> Đánh giá tổng thể và lập kế hoạch tuần tiếp theo.</p>
    `,
    image_url: '/lovable-uploads/3d8436a2-face-4e0a-9080-7f11ceb6c900.png',
    category: 'basics',
    created_at: '2024-01-30',
    featured: false,
    read_time: 12,
    author: 'Chuyên gia Hồ Thuần',
    tags: ['mùa đông', 'chăm sóc đặc biệt', 'bảo vệ cây', 'nhiệt độ', 'ánh sáng']
  }
];

// Helper functions
export const getCareGuideBySlug = (slug: string): CareGuide | undefined => {
  return careGuides.find(guide => guide.slug === slug);
};

export const getRelatedCareGuides = (currentId: string, category: string, limit = 3): CareGuide[] => {
  return careGuides
    .filter(guide => guide.id !== currentId && guide.category === category)
    .slice(0, limit);
};

export const getCareGuidesByCategory = (category: string): CareGuide[] => {
  return careGuides.filter(guide => guide.category === category);
};

export const getFeaturedCareGuides = (): CareGuide[] => {
  return careGuides.filter(guide => guide.featured);
};
