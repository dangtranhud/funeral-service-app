import Link from 'next/link'
import { HeartOutlined, StarOutlined, HomeOutlined, PhoneOutlined, TeamOutlined, ClockCircleOutlined, CheckCircleOutlined } from '@ant-design/icons'

const services = [
  {
    title: 'Tang Lễ Phật Giáo',
    desc: 'Dịch vụ tang lễ trọn gói theo nghi thức Phật giáo trang nghiêm.',
    icon: <HeartOutlined className="text-5xl text-yellow-400" />,
    href: '/tang-le-phat-giao',
  },
  {
    title: 'Tang Lễ Công Giáo',
    desc: 'Dịch vụ tang lễ trọn gói theo nghi thức Công giáo trang trọng.',
    icon: <StarOutlined className="text-5xl text-yellow-400" />,
    href: '/tang-le-cong-giao',
  },
  {
    title: 'Áo Quan',
    desc: 'Cung cấp các loại quan tài an táng, hỏa táng và hũ tro cốt.',
    icon: <HomeOutlined className="text-5xl text-yellow-400" />,
    href: '/ao-quan',
  },
]

const stats = [
  { number: '5000+', label: 'Gia đình tin tưởng', icon: <TeamOutlined className="text-3xl text-zinc-900" /> },
  { number: '10+', label: 'Năm kinh nghiệm', icon: <StarOutlined className="text-3xl text-zinc-900" /> },
  { number: '24/7', label: 'Hỗ trợ liên tục', icon: <ClockCircleOutlined className="text-3xl text-zinc-900" /> },
  { number: '100%', label: 'Tận tâm phục vụ', icon: <CheckCircleOutlined className="text-3xl text-zinc-900" /> },
]

export default function Home() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative bg-zinc-900 text-white py-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-950 opacity-95"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-yellow-400 uppercase tracking-widest text-sm mb-4 font-semibold">
            Dịch Vụ Tang Lễ Trọn Gói
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Đồng Hành Cùng <br />
            <span className="text-yellow-400">Gia Đình Bạn</span>
          </h1>
          <p className="text-zinc-300 text-lg mb-8 max-w-2xl mx-auto">
            Chúng tôi tổ chức tang lễ trang trọng, chuyên nghiệp và tận tâm.
            Giúp gia đình bạn vượt qua giai đoạn khó khăn nhất.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0868576777"
              className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition flex items-center justify-center gap-2">
              <PhoneOutlined /> Gọi Ngay: 0868 57 67 77
            </a>
            <Link href="/gioi-thieu"
              className="border-2 border-yellow-400 text-yellow-400 font-bold px-8 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition">
              Tìm Hiểu Thêm
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-yellow-400 py-10">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              {stat.icon}
              <p className="text-3xl font-extrabold text-zinc-900">{stat.number}</p>
              <p className="text-zinc-700 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dịch vụ */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-zinc-900 mb-2">
            Dịch Vụ Của Chúng Tôi
          </h2>
          <p className="text-center text-zinc-500 mb-12">
            Cung cấp đầy đủ các dịch vụ tang lễ chuyên nghiệp
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <Link href={s.href} key={i}
                className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition group border border-zinc-100">
                <div className="mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-yellow-500 transition">
                  {s.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
                <p className="mt-4 text-yellow-500 font-semibold text-sm">Xem chi tiết →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-900 text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-extrabold mb-4">
          Cần Hỗ Trợ <span className="text-yellow-400">Ngay Bây Giờ?</span>
        </h2>
        <p className="text-zinc-400 mb-8">
          Đội ngũ của chúng tôi luôn sẵn sàng 24/24 để hỗ trợ gia đình bạn
        </p>
        <a href="tel:0868576777"
          className="bg-yellow-400 text-black font-bold px-10 py-4 rounded-full text-lg hover:bg-yellow-300 transition inline-flex items-center gap-2">
          <PhoneOutlined /> 0868 57 67 77
        </a>
      </section>
    </div>
  )
}