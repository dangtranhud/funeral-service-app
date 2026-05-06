import Link from 'next/link'
import Image from 'next/image'
import { 
  HeartOutlined, StarOutlined, HomeOutlined, PhoneOutlined, 
  TeamOutlined, ClockCircleOutlined, CheckCircleOutlined 
} from '@ant-design/icons'

const services = [
  { title: 'Tang Lễ Phật Giáo', desc: 'Dịch vụ tang lễ trọn gói theo nghi thức Phật giáo trang nghiêm.', icon: <HeartOutlined className="text-5xl text-yellow-400" />, href: '/tang-le-phat-giao' },
  { title: 'Tang Lễ Công Giáo', desc: 'Dịch vụ tang lễ trọn gói theo nghi thức Công giáo trang trọng.', icon: <StarOutlined className="text-5xl text-yellow-400" />, href: '/tang-le-cong-giao' },
  { title: 'Áo Quan', desc: 'Cung cấp các loại quan tài an táng, hỏa táng và hũ tro cốt.', icon: <HomeOutlined className="text-5xl text-yellow-400" />, href: '/ao-quan' },
]

const stats = [
  { number: '5000+', label: 'Gia đình tin tưởng', icon: <TeamOutlined className="text-3xl text-zinc-900" /> },
  { number: '10+', label: 'Năm kinh nghiệm', icon: <StarOutlined className="text-3xl text-zinc-900" /> },
  { number: '24/7', label: 'Hỗ trợ liên tục', icon: <ClockCircleOutlined className="text-3xl text-zinc-900" /> },
  { number: '100%', label: 'Tận tâm phục vụ', icon: <CheckCircleOutlined className="text-3xl text-zinc-900" /> },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner - chỉ hiện ảnh */}
      <section className="relative bg-zinc-900 overflow-hidden">
        <div className="relative w-full" style={{ height: '600px' }}>
          <Image
            src="/banner-herro.png"
            alt="Dịch vụ tang lễ chuyên nghiệp"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="bg-yellow-400 py-12 shadow-2xl">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform">
              {stat.icon}
              <p className="text-3xl md:text-4xl font-black text-zinc-900">{stat.number}</p>
              <p className="text-zinc-800 font-semibold text-sm uppercase tracking-tighter">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dịch vụ */}
      <section className="py-24 px-4 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-4">Dịch Vụ Của Chúng Tôi</h2>
            <div className="h-1 w-20 bg-yellow-400 mx-auto mb-4"></div>
            <p className="text-zinc-500 max-w-xl mx-auto">
              Cung cấp đầy đủ các dịch vụ tang lễ chuyên nghiệp, đáp ứng mọi nhu cầu và tín ngưỡng của gia đình.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <Link href={s.href} key={i}
                className="bg-white rounded-3xl shadow-sm p-10 hover:shadow-2xl transition-all duration-300 group border border-zinc-100 flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-zinc-50 rounded-2xl group-hover:bg-yellow-50 transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4 group-hover:text-yellow-600 transition">{s.title}</h3>
                <p className="text-zinc-500 leading-relaxed mb-6">{s.desc}</p>
                <p className="mt-auto text-yellow-600 font-bold text-sm">XEM CHI TIẾT →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-900 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Cần Hỗ Trợ <span className="text-yellow-400">Ngay Bây Giờ?</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-10">
            Đội ngũ của chúng tôi luôn sẵn sàng 24/24 để lắng nghe và đồng hành cùng gia đình bạn.
          </p>
          <a href="tel:0868576777"
            className="bg-yellow-400 text-black font-bold px-12 py-5 rounded-full text-xl hover:bg-yellow-300 transition-all inline-flex items-center gap-3 shadow-2xl">
            <PhoneOutlined /> 0868 57 67 77
          </a>
        </div>
      </section>
    </div>
  )
}