import Link from 'next/link'
import { PhoneOutlined, ArrowRightOutlined, CheckCircleOutlined } from '@ant-design/icons'
import { services } from '../data/services'

const extras = [
  { slug: 'cong-giao-tron-goi', img: '/cong-giao-tron-goi.png', features: ['Xe tang chuyên dụng', 'Hòm gỗ cao cấp', 'Hoa tươi trang trí', 'Nghi thức Công giáo', 'Nhân viên 24/7'] },
  { slug: 'cong-giao-thiet-ke-rieng', img: '/cong-giao-thiet-ke-rieng.png', features: ['Tư vấn riêng 1-1', 'Thiết kế theo yêu cầu', 'Nghi thức Công giáo đầy đủ', 'Đội ngũ chuyên nghiệp', 'Hỗ trợ 24/7'] },
]

export default function TangLeCongGiao() {
  const congGiaoServices = services.filter(s => s.category === 'cong-giao')

  return (
    <div>
      <section className="relative text-white text-center" style={{ height: '400px' }}>
        <div className="absolute inset-0">
          <img src="/tang-le-1.jpg" alt="Tang Lễ Công Giáo" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-zinc-900 opacity-70"></div>
        </div>
        <div className="relative z-10 pt-24">
          <p className="text-yellow-400 uppercase tracking-widest text-sm mb-3 font-semibold">Dịch Vụ</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Tang Lễ <span className="text-yellow-400">Công Giáo</span>
          </h1>
          <p className="text-zinc-300 max-w-2xl mx-auto px-4">
            Tổ chức tang lễ trang trọng theo nghi thức Công giáo, đầy đủ và chuyên nghiệp
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-zinc-900 mb-2">Các Gói Dịch Vụ</h2>
          <p className="text-center text-zinc-500 mb-12">Lựa chọn gói phù hợp với nhu cầu của gia đình</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {congGiaoServices.map((service) => {
              const extra = extras.find(g => g.slug === service.slug)
              return (
                <div key={service.id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition border border-zinc-100 flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={extra?.img}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
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
                      <a href="tel:0356 23 78 58"
                        className="flex-1 border-2 border-yellow-400 text-yellow-500 font-bold py-2 rounded-full text-center text-sm hover:bg-yellow-400 hover:text-black transition flex items-center justify-center gap-1">
                        <PhoneOutlined /> Gọi ngay
                      </a>
                      <Link href={`/tang-le-cong-giao/${service.slug}`}
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
        <p className="text-zinc-400 mb-8">Đội ngũ chúng tôi luôn sẵn sàng hỗ trợ 24/24</p>
        <a href="tel:0868576777"
          className="bg-yellow-400 text-black font-bold px-10 py-4 rounded-full text-lg hover:bg-yellow-300 transition inline-flex items-center gap-2">
          <PhoneOutlined />0356 23 78 58
        </a>
      </section>
    </div>
  )
}