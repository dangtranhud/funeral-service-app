import Link from 'next/link'
import { PhoneOutlined, ArrowRightOutlined, CheckCircleOutlined } from '@ant-design/icons'
import { services } from '../data/services'

const extras = [
  { slug: 'tang-le-tiet-kiem',      image: '/pl-tiet-kiem1.jpg',      features: ['Xe tang chuyên dụng', 'Hòm gỗ tiêu chuẩn', 'Hoa tươi trang trí', 'Đội nhạc lễ'] },
  { slug: 'tang-le-tron-goi',       image: '/pl-tron-goi1.jpg',       features: ['Xe tang cao cấp', 'Hòm gỗ cao cấp', 'Hoa tươi phong phú', 'Nhân viên 24/7'] },
  { slug: 'tang-le-thiet-ke-rieng', image: '/pl-thiet-ke-rieng1.jpg', features: ['Tư vấn riêng 1-1', 'Thiết kế theo yêu cầu', 'Không giới hạn dịch vụ', 'Hỗ trợ 24/7'] },
]

export default function TangLePhatGiao() {
  const phatGiaoServices = services.filter(s => s.category === 'phat-giao')

  return (
    <div>
      <section className="relative text-white text-center" style={{ height: '400px' }}>
        <div className="absolute inset-0">
          <img src="/tang-le-2.jpg" alt="Tang Lễ Phật Giáo" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-zinc-900 opacity-70"></div>
        </div>
        <div className="relative z-10 pt-24">
          <p className="text-yellow-400 uppercase tracking-widest text-sm mb-3 font-semibold">Dịch Vụ</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Tang Lễ <span className="text-yellow-400">Phật Giáo</span>
          </h1>
          <p className="text-zinc-300 max-w-2xl mx-auto px-4">
            Tổ chức tang lễ trang nghiêm theo nghi thức Phật giáo, đầy đủ và chuyên nghiệp
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-zinc-900 mb-2">Các Gói Dịch Vụ</h2>
          <p className="text-center text-zinc-500 mb-12">Lựa chọn gói phù hợp với nhu cầu của gia đình</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {phatGiaoServices.map((service) => {
              const extra = extras.find(g => g.slug === service.slug)
              return (
                <div key={service.id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition border border-zinc-100 flex flex-col overflow-hidden">

                  {/* ẢNH THAY CHO ICON 🙏 */}
                  <div className="h-48 overflow-hidden">
                    <img
                      src={extra?.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-zinc-900 mb-2">{service.title}</h3>
                    <p className="text-yellow-500 font-bold text-lg mb-4">
                      {service.price !== 'Liên hệ' ? `Từ ${service.price} VNĐ` : 'Liên hệ để biết giá'}
                    </p>
                    <ul className="space-y-2 mb-6 flex-1">
                      {extra?.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-zinc-600">
                          <CheckCircleOutlined className="text-yellow-400" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-3 mt-auto">
                      <a href="tel:0356237858"
                        className="flex-1 border-2 border-yellow-400 text-yellow-500 font-bold py-2 rounded-full text-center text-sm hover:bg-yellow-400 hover:text-black transition flex items-center justify-center gap-1">
                        <PhoneOutlined /> Gọi ngay
                      </a>
                      <Link href={`/tang-le-phat-giao/${service.slug}`}
                        className="flex-1 bg-yellow-400 text-black font-bold py-2 rounded-full text-center text-sm hover:bg-yellow-300 transition flex items-center justify-center gap-1">
                        Chi tiết <ArrowRightOutlined />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-zinc-900 text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-extrabold mb-4">
          Cần Tư Vấn? <span className="text-yellow-400">Gọi Ngay!</span>
        </h2>
        <p className="text-zinc-400 mb-8">Đội ngũ chúng tôi luôn sẵn sàng hỗ trợ 24/7</p>
        <a href="tel:0356237858"
          className="bg-yellow-400 text-black font-bold px-10 py-4 rounded-full text-lg hover:bg-yellow-300 transition inline-flex items-center gap-2">
          <PhoneOutlined /> 0356 23 78 58
        </a>
      </section>
    </div>
  )
}