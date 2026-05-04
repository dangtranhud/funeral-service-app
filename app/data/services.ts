export interface Service {
  id: number
  slug: string
  title: string
  price: string
  desc: string
  features: string[]
  category: string
}

export const services: Service[] = [
  {
    id: 1,
    slug: 'tang-le-tiet-kiem',
    title: 'Tang Lễ Tiết Kiệm',
    price: '15.000.000',
    desc: 'Gói tang lễ tiết kiệm phù hợp với mọi gia đình, đầy đủ nghi thức Phật giáo trang nghiêm.',
    features: ['Xe tang chuyên dụng', 'Hòm gỗ tiêu chuẩn', 'Hoa tươi trang trí', 'Đội nhạc lễ', 'Nhân viên phục vụ'],
    category: 'phat-giao',
  },
  {
    id: 2,
    slug: 'tang-le-tron-goi',
    title: 'Tang Lễ Trọn Gói',
    price: '30.000.000',
    desc: 'Gói tang lễ trọn gói cao cấp, đầy đủ mọi dịch vụ theo nghi thức Phật giáo.',
    features: ['Xe tang cao cấp', 'Hòm gỗ cao cấp', 'Hoa tươi phong phú', 'Đội nhạc lễ chuyên nghiệp', 'Nhân viên phục vụ 24/7', 'Trang trí linh đường'],
    category: 'phat-giao',
  },
  {
    id: 3,
    slug: 'tang-le-thiet-ke-rieng',
    title: 'Tang Lễ Thiết Kế Riêng',
    price: 'Liên hệ',
    desc: 'Gói tang lễ được thiết kế riêng theo yêu cầu của gia đình, không giới hạn dịch vụ.',
    features: ['Tư vấn riêng 1-1', 'Thiết kế theo yêu cầu', 'Dịch vụ cao cấp nhất', 'Đội ngũ chuyên nghiệp', 'Hỗ trợ 24/7', 'Không giới hạn dịch vụ'],
    category: 'phat-giao',
  },
  {
    id: 4,
    slug: 'cong-giao-tron-goi',
    title: 'Tang Lễ Công Giáo Trọn Gói',
    price: '25.000.000',
    desc: 'Gói tang lễ trọn gói theo nghi thức Công giáo trang trọng và đầy đủ.',
    features: ['Xe tang chuyên dụng', 'Hòm gỗ cao cấp', 'Hoa tươi trang trí', 'Nghi thức Công giáo', 'Nhân viên phục vụ 24/7'],
    category: 'cong-giao',
  },
  {
    id: 5,
    slug: 'cong-giao-thiet-ke-rieng',
    title: 'Tang Lễ Công Giáo Thiết Kế Riêng',
    price: 'Liên hệ',
    desc: 'Gói tang lễ Công giáo được thiết kế riêng theo yêu cầu của gia đình.',
    features: ['Tư vấn riêng 1-1', 'Thiết kế theo yêu cầu', 'Nghi thức Công giáo đầy đủ', 'Đội ngũ chuyên nghiệp', 'Hỗ trợ 24/7'],
    category: 'cong-giao',
  },
]