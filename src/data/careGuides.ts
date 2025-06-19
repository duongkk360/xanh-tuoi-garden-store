
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
    title: 'Thiết kế vườn mini trong nhà',
    slug: 'thiet-ke-vuon-mini-trong-nha',
    excerpt: 'Hướng dẫn tạo một khu vườn mini hoàn hảo trong không gian sống. Mang thiên nhiên vào ngôi nhà của bạn.',
    content: `
      <h2>Quy hoạch không gian vườn mini</h2>
      <p>Vườn mini trong nhà cần được bố trí hợp lý để tận dụng tối đa không gian và ánh sáng tự nhiên. Xác định vị trí có ánh sáng tốt nhất trong nhà.</p>

      <h3>Chọn vị trí lý tưởng</h3>
      <ul>
        <li>Gần cửa sổ để nhận ánh sáng tự nhiên</li>
        <li>Có thông gió tốt, không bị gió lùa</li>
        <li>Dễ dàng chăm sóc và quan sát</li>
        <li>Không cản trở sinh hoạt hàng ngày</li>
      </ul>

      <h3>Thiết kế theo tầng</h3>
      <p>Sử dụng kệ nhiều tầng để tối ưu không gian. Đặt cây cao ở tầng dưới, cây thấp ở tầng trên. Tạo độ cao khác nhau để tăng tính thẩm mỹ.</p>

      <h3>Lựa chọn cây phù hợp</h3>
      <p>Kết hợp cây lá và cây hoa, cây đứng và cây treo. Chọn cây có tốc độ phát triển khác nhau để duy trì cân bằng lâu dài.</p>

      <h3>Hệ thống tưới nước tự động</h3>
      <p>Có thể lắp đặt hệ thống tưới nhỏ giọt hoặc sử dụng chậu tự tưới để tiện chăm sóc khi đi vắng.</p>

      <h3>Trang trí và phụ kiện</h3>
      <p>Thêm đèn LED trang trí, sỏi màu, tượng nhỏ để tăng tính thẩm mỹ. Sử dụng chậu cùng màu sắc hoặc chất liệu để tạo sự thống nhất.</p>

      <h3>Bảo trì vườn mini</h3>
      <p>Kiểm tra và chăm sóc định kỳ hàng tuần. Thay thế cây yếu kịp thời. Vệ sinh lá cây và khu vực trồng cây thường xuyên.</p>
    `,
    image_url: '/lovable-uploads/71996b5a-7b06-441d-9760-e67c64c01406.png',
    category: 'basics',
    created_at: '2024-02-15',
    featured: false,
    read_time: 6,
    author: 'Kiến trúc sư Lan Phương',
    tags: ['vườn mini', 'thiết kế', 'không gian xanh']
  },
  {
    id: '10',
    title: 'Cây cảnh và phong thủy trong nhà',
    slug: 'cay-canh-va-phong-thuy-trong-nha',
    excerpt: 'Tìm hiểu về ý nghĩa phong thủy của các loại cây cảnh và cách bố trí để thu hút may mắn, tài lộc.',
    content: `
      <h2>Nguyên tắc phong thủy với cây cảnh</h2>
      <p>Theo phong thủy, cây cảnh không chỉ trang trí mà còn giúp cân bằng năng lượng trong nhà. Mỗi loại cây mang ý nghĩa và tác dụng riêng.</p>

      <h3>Cây cảnh hợp mệnh</h3>
      <ul>
        <li><strong>Mệnh Mộc:</strong> Cây trúc, cây sung, cây đề</li>
        <li><strong>Mệnh Hỏa:</strong> Cây hồng môn, cây phát tài</li>
        <li><strong>Mệnh Thổ:</strong> Cây kim ngân, cây ngọc bích</li>
        <li><strong>Mệnh Kim:</strong> Cây lưỡi hổ, cây kim tiền</li>
        <li><strong>Mệnh Thủy:</strong> Cây phú quý, cây thủy sinh</li>
      </ul>

      <h3>Vị trí đặt cây theo phong thủy</h3>
      <p>Cửa chính: đặt cây lớn để chặn khí xấu. Góc tài lộc (góc chéo cửa chính): cây kim tiền, cây phát tài. Phòng ngủ: tránh cây có gai, chọn cây thanh lọc không khí.</p>

      <h3>Cây cảnh mang tài lộc</h3>
      <p>Cây phát tài, cây kim tiền, cây ngọc bích được cho là thu hút tiền bạc. Cây trúc mang lại may mắn và thịnh vượng.</p>

      <h3>Những điều cần tránh</h3>
      <p>Không đặt cây chết, cây bệnh trong nhà. Tránh cây có nhiều gai trong phòng ngủ. Không đặt quá nhiều cây làm âm khí quá nặng.</p>

      <h3>Chăm sóc cây theo nguyên tắc phong thủy</h3>
      <p>Giữ cây luôn xanh tốt, cắt bỏ lá vàng ngay lập tức. Thay nước và vệ sinh chậu cây thường xuyên để giữ năng lượng tích cực.</p>
    `,
    image_url: '/lovable-uploads/3d8436a2-face-4e0a-9080-7f11ceb6c900.png',
    category: 'basics',
    created_at: '2024-02-10',
    featured: false,
    read_time: 5,
    author: 'Thầy Phong thủy Minh Tuấn',
    tags: ['phong thủy', 'may mắn', 'tài lộc']
  },
  {
    id: '11',
    title: 'Nhân giống cây cảnh tại nhà',
    slug: 'nhan-giong-cay-canh-tai-nha',
    excerpt: 'Học các phương pháp nhân giống cây cảnh đơn giản và hiệu quả. Tự tay tạo ra khu vườn phong phú từ những cây ban đầu.',
    content: `
      <h2>Các phương pháp nhân giống phổ biến</h2>
      <p>Có nhiều cách để nhân giống cây cảnh: gieo hạt, chiết cành, chia khóm, ghép cành. Mỗi phương pháp phù hợp với từng loại cây khác nhau.</p>

      <h3>Nhân giống bằng chiết cành</h3>
      <ul>
        <li>Chọn cành khỏe mạnh, không có hoa</li>
        <li>Cắt cành dài 10-15cm, có 3-4 nút lá</li>
        <li>Bỏ lá dưới, giữ lại 2-3 lá trên ngọn</li>
        <li>Nhúng vào hormone tạo rễ (nếu có)</li>
        <li>Cắm vào đất ẩm hoặc nước sạch</li>
      </ul>

      <h3>Điều kiện thành công</h3>
      <p>Nhiệt độ 20-25°C, độ ẩm cao, ánh sáng nhẹ. Tránh ánh sáng trực tiếp và gió mạnh. Giữ đất luôn ẩm nhưng không ngập nước.</p>

      <h3>Nhân giống bằng gieo hạt</h3>
      <p>Chọn hạt tươi, ngâm nước 24 giờ trước khi gieo. Sử dụng đất gieo hạt chuyên dụng, tơi xốp. Gieo không quá sâu, che ẩm bằng màng plastic.</p>

      <h3>Chăm sóc cây con</h3>
      <p>Tưới nước nhẹ nhàng, tránh làm đổ cây. Bón phân loãng khi cây có 4-6 lá thật. Ghép chậu riêng khi rễ đã phát triển tốt.</p>

      <h3>Chia sẻ và trao đổi</h3>
      <p>Khi thành công, bạn có thể chia sẻ cây con với bạn bè. Tham gia các nhóm yêu cây cảnh để trao đổi kinh nghiệm và cây giống.</p>
    `,
    image_url: '/lovable-uploads/ff452d84-50fa-4268-a28f-45adef1a3b3e.png',
    category: 'basics',
    created_at: '2024-02-05',
    featured: false,
    read_time: 6,
    author: 'Kỹ sư Nông nghiệp Thái Sơn',
    tags: ['nhân giống', 'chiết cành', 'gieo hạt']
  },
  {
    id: '12',
    title: 'Cây cảnh mùa đông - Chăm sóc đặc biệt',
    slug: 'cay-canh-mua-dong-cham-soc-dac-biet',
    excerpt: 'Hướng dẫn chăm sóc cây cảnh trong mùa đông lạnh giá. Bảo vệ cây khỏi rét đậm và duy trì sự phát triển.',
    content: `
      <h2>Thách thức của mùa đông với cây cảnh</h2>
      <p>Mùa đông mang đến nhiều thách thức: nhiệt độ thấp, ít ánh sáng, không khí khô hanh. Cây cảnh cần được chăm sóc đặc biệt để vượt qua mùa khó khăn này.</p>

      <h3>Điều chỉnh tưới nước mùa đông</h3>
      <ul>
        <li>Giảm tần suất tưới xuống 1-2 lần/tuần</li>
        <li>Kiểm tra độ ẩm đất trước khi tưới</li>
        <li>Sử dụng nước ấm (nhiệt độ phòng)</li>
        <li>Tưới vào buổi sáng để cây có thời gian khô</li>
      </ul>

      <h3>Bảo vệ cây khỏi lạnh</h3>
      <p>Di chuyển cây vào trong nhà hoặc nơi có mái che. Sử dụng đèn sưởi hoặc thảm ấm cho khu vực trồng cây. Bọc chậu cây bằng vật liệu giữ nhiệt.</p>

      <h3>Bổ sung ánh sáng nhân tạo</h3>
      <p>Sử dụng đèn LED grow light để bù đắp thiếu ánh sáng tự nhiên. Chiếu sáng 8-10 giờ/ngày cho cây lá, 6-8 giờ cho cây nghỉ đông.</p>

      <h3>Tăng độ ẩm không khí</h3>
      <p>Sử dụng máy phun sương hoặc đặt khay nước gần cây. Nhóm các cây lại gần nhau để tạo vi khí hậu ẩm.</p>

      <h3>Điều chỉnh dinh dưỡng</h3>
      <p>Giảm hoặc ngừng bón phân vì cây phát triển chậm. Chỉ bón phân loãng 1 tháng/lần cho cây xanh quanh năm.</p>

      <h3>Theo dõi sâu bệnh mùa đông</h3>
      <p>Không khí trong nhà khô dễ sinh nhện đỏ. Kiểm tra thường xuyên và xử lý kịp thời. Tăng cường thông gió nhẹ để tránh nấm mốc.</p>
    `,
    image_url: '/lovable-uploads/3d8436a2-face-4e0a-9080-7f11ceb6c900.png',
    category: 'basics',
    created_at: '2024-01-30',
    featured: false,
    read_time: 5,
    author: 'Chuyên gia Hồ Thuần',
    tags: ['mùa đông', 'chăm sóc đặc biệt', 'bảo vệ cây']
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

