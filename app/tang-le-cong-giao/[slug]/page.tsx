import { CheckCircleOutlined, PhoneOutlined, ArrowLeftOutlined } from '@ant-design/icons'
import { services } from '../../data/services'
import Link from 'next/link'

export default async function CongGiaoDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services.find(s => s.slug === slug)

  if (!service) {
    return (
      <div className="text-center py-32">
        <h1 className="text-3xl font-bold text-zinc-900">Không tìm thấy dịch vụ!</h1>
        <Link href="/tang-le-cong-giao" className="text-yellow-500 mt-4 inline-block">
          Quay lại
        </Link>
      </div>
    )
  }

  return (
    <div>
      <section className="bg-zinc-900 text-white py-20 px-4 text-center">
        <p className="text-yellow-400 uppercase tracking-widest text-sm mb-3 font-semibold">Chi Tiết Dịch Vụ</p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          <span className="text-yellow-400">{service.title}</span>
        </h1>
        <p className="text-zinc-400 max-w-2xl mx-auto">{service.desc}</p>
      </section>

      <section className="py-16 px-4 bg-zinc-50">
        <div className="max-w-4xl mx-auto">
          <Link href="/tang-le-cong-giao"
            className="inline-flex items-center gap-2 text-yellow-500 font-semibold mb-8 hover:text-yellow-400">
            <ArrowLeftOutlined /> Quay lại danh sách
          </Link>

          <div className="bg-white rounded-2xl shadow-md p-10 border border-zinc-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-extrabold text-zinc-900">{service.title}</h2>
              <span className="text-yellow-500 font-bold text-xl">
                {service.price !== 'Liên hệ' ? `Từ ${service.price} VNĐ` : 'Liên hệ để biết giá'}
              </span>
            </div>

            <p className="text-zinc-600 leading-relaxed mb-8">{service.desc}</p>

            <h3 className="text-lg font-bold text-zinc-900 mb-4">Dịch vụ bao gồm:</h3>
            <ul className="space-y-3 mb-8">
              {service.features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-600">
                  <CheckCircleOutlined className="text-yellow-400 text-lg" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="bg-zinc-50 rounded-xl p-6 text-center">
              <p className="text-zinc-600 mb-4">Liên hệ ngay để được tư vấn miễn phí</p>
              <a href="tel:0868576777"
                className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition inline-flex items-center gap-2">
                <PhoneOutlined /> 0868 57 67 77
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}