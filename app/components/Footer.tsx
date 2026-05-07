import Link from 'next/link'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <Link href="/" className="flex flex-col leading-none mb-4">
            <span className="text-2xl font-extrabold text-white tracking-widest">
            FUN<span className="text-yellow-400">ERA</span>
            </span>
            <span className="text-xs text-zinc-500 tracking-wider">Dịch Vụ Tang Lễ Trọn Gói</span>
          </Link>
          <p className="text-sm leading-relaxed text-zinc-400">
            Đồng hành cùng gia đình trong những khoảnh khắc khó khăn nhất.
            Tổ chức tang lễ trang trọng, chuyên nghiệp và tận tâm.
          </p>
          <div className="mt-4 flex gap-3">
            <span className="bg-zinc-800 text-yellow-400 text-xs px-3 py-1 rounded-full">Phật Giáo</span>
            <span className="bg-zinc-800 text-yellow-400 text-xs px-3 py-1 rounded-full">Công Giáo</span>
            <span className="bg-zinc-800 text-yellow-400 text-xs px-3 py-1 rounded-full">24/7</span>
          </div>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">
            Liên Kết Nhanh
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: 'Trang chủ', href: '/' },
              { label: 'Giới thiệu', href: '/gioi-thieu' },
              { label: 'Tang Lễ Phật Giáo', href: '/tang-le-phat-giao' },
              { label: 'Tang Lễ Công Giáo', href: '/tang-le-cong-giao' },
              { label: 'Áo Quan', href: '/ao-quan' },
              { label: 'Liên hệ', href: '/lien-he' },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href}
                  className="hover:text-yellow-400 transition-colors duration-200 flex items-center gap-2">
                  <span className="text-yellow-400">›</span> {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">
            Liên Hệ
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <div className="bg-yellow-400 text-black p-2 rounded-full">
                <FiPhone size={14} />
              </div>
              <div>
                <p className="text-zinc-500 text-xs">Hotline 24/7</p>
                <a href="tel:0356237858" className="text-white font-bold hover:text-yellow-400">
                 0356237858
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-yellow-400 text-black p-2 rounded-full">
                <FiMail size={14} />
              </div>
              <div>
                <p className="text-zinc-500 text-xs">Email</p>
                <span className="text-white">dangphuc@Funera.vn</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-yellow-400 text-black p-2 rounded-full mt-1">
                <FiMapPin size={14} />
              </div>
              <div>
                <p className="text-zinc-500 text-xs">Địa chỉ</p>
                <span className="text-white">TP.Đồng Nai, Việt Nam</span>
              </div>
            </li> 
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-800 py-4 text-center text-xs text-zinc-600">
        © 2026 <span className="text-yellow-400 font-semibold">Funera</span>.Hi
      </div>
    </footer>
  )
}