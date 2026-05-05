import Link from 'next/link'
import Image from 'next/image'
import { 
  HeartOutlined, 
  StarOutlined, 
  HomeOutlined, 
  PhoneOutlined, 
  TeamOutlined, 
  ClockCircleOutlined, 
  CheckCircleOutlined 
} from '@ant-design/icons'

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
    <div className="min-h-screen bg-white">
      {/* Hero Banner - Đã xóa chữ để hiện ảnh đẹp */}
      <section className="relative bg-zinc-900 text-white py-32 md:py-64 px-4 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner-hero.png" 
            alt="Dịch vụ tang lễ chuyên nghiệp"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Lớp phủ mờ nhẹ để giữ chiều sâu cho ảnh nhưng không che mất chi tiết */}
          <div className="absolute inset-0 bg-black/30 bg-gradient-to-t from-zinc-900/80 via-transparent to-black/20"></div>
        </div>

        {/* Content - Chỉ giữ lại nút bấm để không che ảnh */}
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center mt-auto md:mt-32">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:0868576777"
              className="w-full sm:w-auto bg-yellow-400 text-black font-bold px-10 py-4 rounded-full hover:bg-yellow-300 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-2xl">
              <PhoneOutlined /> Gọi Ngay: 0868 57 67 77
            </a>
            <Link href="/gioi-thieu"
              className="w-full sm:w-auto border-2 border-white text-white font-bold px-10 py-4 rounded-full hover:bg-white hover:text-black transition-all backdrop-blur-md shadow-2xl">
              Tìm Hiểu Thêm
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-yellow-400 py-12 relative z-20 shadow-2xl">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-2 transition-transform hover:-translate-y-1">
              {stat.icon}
              <p className="text-3xl md:text-4xl font-black text-zinc-900">{stat.number}</p>
              <p className="text-zinc-800 font-semibold text-sm uppercase tracking-tighter">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-4">
              Dịch Vụ Của Chúng Tôi
            </h2>
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
                <h3 className="text-2xl font-bold text-zinc-900 mb-4 group-hover:text-yellow-600 transition">
                  {s.title}
                </h3>
                <p className="text-zinc-500 text-md leading-relaxed mb-6">{s.desc}</p>
                <p className="mt-auto text-yellow-600 font-bold text-sm">XEM CHI TIẾT →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-zinc-900 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Cần Hỗ Trợ <span className="text-yellow-400">Ngay Bây Giờ?</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-10">
            Đội ngũ của chúng tôi luôn sẵn sàng 24/24 để lắng nghe và đồng hành cùng gia đình bạn trong mọi tình huống.
          </p>
          <a href="tel:0868576777"
            className="bg-yellow-400 text-black font-bold px-12 py-5 rounded-full text-xl hover:bg-yellow-300 transition-all inline-flex items-center gap-3 shadow-2xl transform hover:scale-105">
          </a>
          
        </div>
      </section>
    </div>
  )
}