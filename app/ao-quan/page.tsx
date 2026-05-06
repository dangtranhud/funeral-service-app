import Image from 'next/image'
import { PhoneOutlined, CheckCircleOutlined } from '@ant-design/icons'

const products = [
  {
    id: 1,
    name: 'Quan Tài An Táng',
    img: '/quan-tai-1.jpg',
    desc: 'Quan tài gỗ cao cấp dành cho an táng truyền thống, được chế tác tỉ mỉ và trang trọng.',
    price: 'Liên hệ để biết giá',
    features: ['Gỗ tự nhiên cao cấp', 'Thiết kế trang trọng', 'Nhiều kích thước', 'Bảo hành chất lượng'],
  },
  {
    id: 2,
    name: 'Quan Tài Hỏa Táng',
    img: '/quan-tai-2.jpg',
    desc: 'Quan tài chuyên dụng cho hỏa táng, thân thiện môi trường và đúng quy chuẩn.',
    price: 'Liên hệ để biết giá',
    features: ['Vật liệu thân thiện môi trường', 'Đúng quy chuẩn hỏa táng', 'Thiết kế tinh tế', 'Nhiều mẫu mã'],
  },
  {
    id: 3,
    name: 'Tiểu Quách',
    img: '/quan-tai-3.jpg',
    desc: 'Tiểu quách chất lượng cao dùng để cải táng, bền đẹp và trang trọng.',
    price: 'Liên hệ để biết giá',
    features: ['Chất liệu bền chắc', 'Thiết kế trang nhã', 'Kích thước phù hợp', 'Giá cả hợp lý'],
  },
  {
    id: 4,
    name: 'Hũ Tro Cốt',
    img: '/quan-tai-4.jpg',
    desc: 'Hũ tro cốt cao cấp bằng gốm sứ, đồng, đá... phù hợp cho việc lưu giữ tro cốt.',
    price: 'Liên hệ để biết giá',
    features: ['Nhiều chất liệu cao cấp', 'Thiết kế sang trọng', 'Khắc tên theo yêu cầu', 'Bền đẹp theo thời gian'],
  },
]

export default function AoQuan() {
  return (
    <div>
      {/* Banner */}
      <section className="bg-zinc-900 text-white py-20 px-4 text-center">
        <p className="text-yellow-400 uppercase tracking-widest text-sm mb-3 font-semibold">Sản Phẩm</p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Áo Quan & <span className="text-yellow-400">Phụ Kiện</span>
        </h1>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Cung cấp đầy đủ các loại quan tài, tiểu quách và hũ tro cốt chất lượng cao
        </p>
      </section>

      {/* Sản phẩm */}
      <section className="py-16 px-4 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-zinc-900 mb-2">Danh Mục Sản Phẩm</h2>
          <p className="text-center text-zinc-500 mb-12">Tất cả sản phẩm đều đạt tiêu chuẩn chất lượng cao</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((p) => (
              <div key={p.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition border border-zinc-100">
                {/* Ảnh sản phẩm */}
                <div className="relative h-56">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Nội dung */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">{p.name}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-4">{p.desc}</p>
                  <ul className="space-y-2 mb-4">
                    {p.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-zinc-600">
                        <CheckCircleOutlined className="text-yellow-400" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-yellow-500 font-bold">{p.price}</span>
                    <a href="tel:0868576777"
                      className="bg-yellow-400 text-black font-bold px-4 py-2 rounded-full text-sm hover:bg-yellow-300 transition flex items-center gap-2">
                      <PhoneOutlined /> Liên hệ
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-900 text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-extrabold mb-4">
          Cần Tư Vấn Thêm? <span className="text-yellow-400">Gọi Ngay!</span>
        </h2>
        <p className="text-zinc-400 mb-8">Đội ngũ tư vấn sẵn sàng hỗ trợ bạn 24/7</p>
        <a href="tel:0868576777"
          className="bg-yellow-400 text-black font-bold px-10 py-4 rounded-full text-lg hover:bg-yellow-300 transition inline-flex items-center gap-2">
          <PhoneOutlined /> 0868 57 67 77
        </a>
      </section>
    </div>
  )
}