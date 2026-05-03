'use client'
import Link from 'next/link'
import { useState } from 'react'
import { FiPhone, FiMenu, FiX } from 'react-icons/fi'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Giới thiệu', href: '/gioi-thieu' },
    { label: 'Tang Lễ Phật Giáo', href: '/tang-le-phat-giao' },
    { label: 'Tang Lễ Công Giáo', href: '/tang-le-cong-giao' },
    { label: 'Áo Quan', href: '/ao-quan' },
    { label: 'Liên hệ', href: '/lien-he' },
  ]

  return (
    <header className="bg-gray-900 text-white fixed w-full z-50 shadow-lg">
      <div className="bg-yellow-500 text-black text-center text-sm py-1 font-semibold">
        Tận tâm - Chuyên nghiệp - Minh Bạch
      </div>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-yellow-400 tracking-wide">
          BLACKSTONES
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}
              className="hover:text-yellow-400 transition-colors duration-200">
              {link.label}
            </Link>
          ))}
        </nav>
        <a href="tel:0868576777"
          className="hidden md:flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold hover:bg-yellow-300 transition">
          <FiPhone /> 0868 57 67 77
        </a>
        <button className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}
              className="text-white hover:text-yellow-400 py-1 border-b border-gray-700"
              onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <a href="tel:0868576777" className="text-yellow-400 font-bold mt-2">
            📞 0909090909
          </a>
        </div>
      )}
    </header>
  )
}