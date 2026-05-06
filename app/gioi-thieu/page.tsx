import Image from 'next/image'
import { CheckCircleOutlined, HeartOutlined, SafetyOutlined, TeamOutlined } from '@ant-design/icons'

const values = [
  { icon: <HeartOutlined className="text-4xl text-yellow-400" />, title: 'Tận Tâm', desc: 'Chúng tôi đặt tâm huyết vào từng tang lễ, đồng hành cùng gia đình trong những lúc khó khăn nhất.' },
  { icon: <SafetyOutlined className="text-4xl text-yellow-400" />, title: 'Chuyên Nghiệp', desc: 'Đội ngũ nhân viên được đào tạo bài bản, giàu kinh nghiệm trong lĩnh vực tổ chức tang lễ.' },
  { icon: <CheckCircleOutlined className="text-4xl text-yellow-400" />, title: 'Minh Bạch', desc: 'Chi phí rõ ràng, không phát sinh, gia đình hoàn toàn yên tâm về dịch vụ.' },
  { icon: <TeamOutlined className="text-4xl text-yellow-400" />, title: 'Đồng Hành', desc: 'Luôn có mặt 24/7, hỗ trợ gia đình từ khi bắt đầu đến khi kết thúc tang lễ.' },
]

export default function GioiThieu() {
  return (
    <div>
      {/* Banner */}
      <section className="bg-zinc-900 text-white py-20 px-4 text-center">
        <p className="text-yellow-400 uppercase tracking-widest text-sm mb-3 font-semibold">Về Chúng Tôi</p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Giới Thiệu <span className="text-yellow-400">Blackstones</span></h1>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Hơn 10 năm đồng hành cùng hàng nghìn gia đình Việt Nam trong những giây phút khó khăn nhất
        </p>
      </section>

      {/* Giới thiệu */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-zinc-900 mb-4">Chúng Tôi Là Ai?</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Blackstones là đơn vị cung cấp dịch vụ tang lễ trọn gói hàng đầu tại TP. Hồ Chí Minh.
              Với hơn 10 năm kinh nghiệm, chúng tôi đã đồng hành cùng hơn 5000 gia đình.
            </p>
            <p className="text-zinc-600 leading-relaxed mb-6">
              Chúng tôi hiểu rằng mỗi tang lễ là một câu chuyện riêng, một sự tiễn biệt đặc biệt.
              Vì vậy, chúng tôi luôn lắng nghe và tôn trọng từng mong muốn của gia đình.
            </p>
            <a href="tel:0868576777"
              className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-300 transition inline-block">
              📞 Liên Hệ Ngay
            </a>
          </div>

          {/* Ảnh đội ngũ */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/doi-ngu.png"
              alt="Đội ngũ Blackstones"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Giá trị cốt lõi */}
      <section className="py-16 px-4 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-zinc-900 mb-2">Giá Trị Cốt Lõi</h2>
          <p className="text-center text-zinc-500 mb-12">Những giá trị chúng tôi luôn hướng tới</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md text-center hover:shadow-xl transition">
                <div className="mb-4">{v.icon}</div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">{v.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{v.desc}</p>
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
          className="bg-yellow-400 text-black font-bold px-10 py-4 rounded-full text-lg hover:bg-yellow-300 transition">
          📞 0868 57 67 77
        </a>
      </section>
    </div>
  )
}