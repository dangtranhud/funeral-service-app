import { NextResponse } from 'next/server'

export async function GET() {
  const services = [
    { id: 1, slug: 'tang-le-tiet-kiem', title: 'Tang Lễ Tiết Kiệm', price: '15.000.000', category: 'phat-giao' },
    { id: 2, slug: 'tang-le-tron-goi', title: 'Tang Lễ Trọn Gói', price: '30.000.000', category: 'phat-giao' },
    { id: 3, slug: 'tang-le-thiet-ke-rieng', title: 'Tang Lễ Thiết Kế Riêng', price: 'Liên hệ', category: 'phat-giao' },
    { id: 4, slug: 'cong-giao-tron-goi', title: 'Tang Lễ Công Giáo Trọn Gói', price: '25.000.000', category: 'cong-giao' },
    { id: 5, slug: 'cong-giao-thiet-ke-rieng', title: 'Tang Lễ Công Giáo Thiết Kế Riêng', price: 'Liên hệ', category: 'cong-giao' },
  ]
  return NextResponse.json(services)
}