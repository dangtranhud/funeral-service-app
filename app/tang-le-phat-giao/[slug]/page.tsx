import { CheckCircleOutlined, PhoneOutlined, ArrowLeftOutlined } from '@ant-design/icons'
import { services } from '../../data/services'
import Link from 'next/link'
import ContactForm from '../../components/ContactForm'

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services.find(s => s.slug === slug)

  if (!service) {
    return (
      <div className="text-center py-32">
        <h1 className="text-3xl font-bold">Không tìm thấy dịch vụ!</h1>
        <Link href="/tang-le-phat-giao" className="text-yellow-500 mt-4 inline-block">← Quay lại</Link>
      </div>
    )
  }

  const images =
    slug === 'tang-le-tiet-kiem'
      ? ['/pl-tiet-kiem1.jpg', '/pl-tiet-kiem2.jpg', '/pl-tiet-kiem3.jpg', '/pl-tiet-kiem4.jpg']
      : slug === 'tang-le-tron-goi'
      ? ['/pl-tron-goi1.jpg', '/pl-tron-goi2.jpg', '/pl-tron-goi3.jpg', '/pl-tron-goi4.jpg']
     : ['/pl-thiet-ke-rieng1.jpg', '/pl-thiet-ke-rieng2.jpg', '/pl-thiet-ke-rieng3.jpg', '/pl-thiet-ke-rieng4.jpg']

  return (
    <div>
      <section className="bg-zinc-900 text-white py-20 px-4 text-center">
        <p className="text-yellow-400 uppercase tracking-widest text-sm mb-3 font-semibold">Chi Tiết Dịch Vụ</p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          <span className="text-yellow-400">{service.title}</span>
        </h1>
      </section>

      <section className="py-16 px-4 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <Link href="/tang-le-phat-giao"
            className="inline-flex items-center gap-2 text-yellow-500 font-semibold mb-8 hover:text-yellow-400">
            <ArrowLeftOutlined /> Quay lại danh sách
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl shadow-md p-8 border border-zinc-100">
                <h2 className="text-2xl font-extrabold text-zinc-900 mb-4">{service.title}</h2>
                <p className="text-zinc-600 leading-relaxed mb-6">{service.desc}</p>
                <div className="bg-yellow-50 rounded-xl p-4 mb-6">
                  <p className="text-yellow-600 font-bold text-lg">
                    💰 Giá: {service.price !== 'Liên hệ' ? `Từ ${service.price} VNĐ` : 'Liên hệ để biết giá'}
                  </p>
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-4">✨ Dịch vụ bao gồm:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 bg-zinc-50 rounded-lg p-3">
                      <CheckCircleOutlined className="text-yellow-400 text-lg" />
                      <span className="text-zinc-700 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-8 border border-zinc-100">
                <h3 className="text-lg font-bold text-zinc-900 mb-4">📸 Hình Ảnh Thực Tế</h3>
                <div className="grid grid-cols-2 gap-4">
                  {images.map((img, i) => (
                    <img key={i} src={img} alt={`Ảnh ${i + 1}`}
                      className="w-full h-48 object-cover rounded-xl hover:scale-105 transition duration-300" />
                  ))}
                </div>
              </div>

              <div className="bg-zinc-900 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-yellow-400 mb-4 text-lg">🤝 Cam Kết Của Chúng Tôi</h3>
                <ul className="space-y-2 text-zinc-300 text-sm">
                  <li>✅ Hỗ trợ 24/7, có mặt trong vòng 30 phút</li>
                  <li>✅ Chi phí minh bạch, không phát sinh</li>
                  <li>✅ Đội ngũ chuyên nghiệp, tận tâm</li>
                  <li>✅ Đảm bảo nghi thức đúng theo Phật giáo</li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="bg-white rounded-2xl shadow-md p-6 border border-zinc-100 sticky top-24">
                <h3 className="text-lg font-bold text-zinc-900 mb-4 text-center">
                  📞 Đăng Ký Hỗ Trợ Ngay
                </h3>
                <ContactForm />
                <div className="mt-4 text-center">
                  <p className="text-zinc-500 text-xs mb-2">Hoặc gọi trực tiếp</p>
                  <a href="tel:0868576777"
                    className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-300 transition inline-flex items-center gap-2 w-full justify-center">
                    <PhoneOutlined /> 0356 23 78 58
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}