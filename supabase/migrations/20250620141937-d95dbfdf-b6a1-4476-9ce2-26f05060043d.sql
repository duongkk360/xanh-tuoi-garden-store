
-- Cập nhật quy ước category cho bảng products
UPDATE products SET category = 1 WHERE category = 1; -- Cây có hoa -> Văn Phòng (giữ nguyên)
UPDATE products SET category = 2 WHERE category = 2; -- Mini -> Tiểu Cảnh (giữ nguyên) 
UPDATE products SET category = 3 WHERE category = 3; -- Phong thủy -> Phụ Kiện Tiểu Cảnh (giữ nguyên)

-- Thêm comment để rõ ràng về quy ước mới
COMMENT ON COLUMN products.category IS '1: Văn Phòng, 2: Tiểu Cảnh, 3: Phụ Kiện Tiểu Cảnh';
