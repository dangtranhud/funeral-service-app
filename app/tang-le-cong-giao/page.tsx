import Link from 'next/link'
import { PhoneOutlined, ArrowRightOutlined } from '@ant-design/icons'

interface Service {
  id: string
  title: string
  price: string
  category: string
  slug: string
}

async function getServices() {
  const res = await fetch('https://69f83138dd0c226688ee3977.mockapi.io/services', { cache: 'no-store' })
  const data = await res.json()
  return data.filter((s: Service) => s.category === 'cong-giao')
}

export default async function TangLeCongGiao() {
  const congGiaoServices: Service[] = await getServices()

  return (
    <div>
      {/* Banner */}
      <section className="bg-zinc-900 text-white py-20 px-4 text-center">
        <p className="text-yellow-400 uppercase tracking-widest text-sm mb-3 font-semibold">Dịch Vụ</p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Tang Lễ <span className="text-yellow-400">Công Giáo</span>
        </h1>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Tổ chức tang lễ trang trọng theo nghi thức Công giáo, đầy đủ và chuyên nghiệp
        </p>
      </section>

      {/* Danh sách gói */}
      <section className="py-16 px-4 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-zinc-900 mb-2">
            Các Gói Dịch Vụ
          </h2>
          <p className="text-center text-zinc-500 mb-12">
            Lựa chọn gói phù hợp với nhu cầu của gia đình
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {congGiaoServices.map((service: Service) => (
              <div key={service.id}
                className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition border border-zinc-100 flex flex-col">
                <h3 className="text-xl font-bold text-zinc-900 mb-2">{service.title}</h3>
                <p className="text-yellow-500 font-bold text-lg mb-4">
                  {service.price !== 'Liên hệ' ? `Từ ${service.price} VNĐ` : 'Liên hệ để biết giá'}
                </p>
                <Link href={`/tang-le-cong-giao/${service.slug}`}
                  className="mt-auto bg-yellow-400 text-black font-bold px-6 py-3 rounded-full text-center hover:bg-yellow-300 transition flex items-center justify-center gap-2">
                  Xem Chi Tiết <ArrowRightOutlined />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-900 text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-extrabold mb-4">
          Cần Tư Vấn? <span className="text-yellow-400">Gọi Ngay!</span>
        </h2>
        <p className="text-zinc-400 mb-8">Đội ngũ chúng tôi luôn sẵn sàng hỗ trợ 24/7</p>
        <a href="tel:0868576777"
          className="bg-yellow-400 text-black font-bold px-10 py-4 rounded-full text-lg hover:bg-yellow-300 transition inline-flex items-center gap-2">
          <PhoneOutlined /> 0868 57 67 77
        </a>
      </section>
    </div>
  )
}
