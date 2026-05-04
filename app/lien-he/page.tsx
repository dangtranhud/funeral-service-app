'use client'
import { useState } from 'react'
import { Form, Input, Button, notification, Card } from 'antd'
import { PhoneOutlined, MailOutlined, EnvironmentOutlined, SendOutlined } from '@ant-design/icons'

export default function LienHe() {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const handleSubmit = (values: any) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      form.resetFields()
      notification.success({
        message: 'Gửi thành công!',
        description: 'Cảm ơn bạn! Chúng tôi sẽ liên hệ lại sớm nhất!',
        placement: 'topRight',
      })
    }, 1000)
  }

  return (
    <div>
      {/* Banner */}
      <section className="bg-zinc-900 text-white py-20 px-4 text-center">
        <p className="text-yellow-400 uppercase tracking-widest text-sm mb-3 font-semibold">Liên Hệ</p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Liên Hệ <span className="text-yellow-400">Với Chúng Tôi</span>
        </h1>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Đội ngũ chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7
        </p>
      </section>

      {/* Nội dung */}
      <section className="py-16 px-4 bg-zinc-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Thông tin */}
          <div>
            <h2 className="text-2xl font-extrabold text-zinc-900 mb-6">Thông Tin Liên Hệ</h2>
            <div className="space-y-4">
              <Card className="border border-zinc-100 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-400 text-black p-3 rounded-full">
                    <PhoneOutlined className="text-xl" />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-sm">Hotline 24/7</p>
                    <a href="tel:0868576777" className="text-zinc-900 font-bold text-lg hover:text-yellow-500">
                      0868 57 67 77
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="border border-zinc-100 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-400 text-black p-3 rounded-full">
                    <MailOutlined className="text-xl" />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-sm">Email</p>
                    <p className="text-zinc-900 font-bold text-lg">info@blackstones.vn</p>
                  </div>
                </div>
              </Card>

              <Card className="border border-zinc-100 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-400 text-black p-3 rounded-full">
                    <EnvironmentOutlined className="text-xl" />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-sm">Địa chỉ</p>
                    <p className="text-zinc-900 font-bold text-lg">TP. Hồ Chí Minh, Việt Nam</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-6 bg-zinc-900 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-yellow-400 mb-2">Giờ Làm Việc</h3>
              <p className="text-zinc-300 text-sm">
                Hỗ trợ <span className="text-yellow-400 font-bold">24/7</span> — Kể cả ngày lễ
              </p>
            </div>
          </div>

          {/* Form Ant Design */}
          <Card className="shadow-md border border-zinc-100">
            <h2 className="text-2xl font-extrabold text-zinc-900 mb-6">Gửi Tin Nhắn</h2>
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
              <Form.Item
                label="Họ và tên"
                name="name"
                rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}
              >
                <Input placeholder="Nhập họ và tên" size="large" />
              </Form.Item>

              <Form.Item
                label="Số điện thoại"
                name="phone"
                rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
              >
                <Input placeholder="Nhập số điện thoại" size="large" />
              </Form.Item>

              <Form.Item label="Email" name="email">
                <Input placeholder="Nhập email" size="large" type="email" />
              </Form.Item>

              <Form.Item
                label="Tin nhắn"
                name="message"
                rules={[{ required: true, message: 'Vui lòng nhập tin nhắn!' }]}
              >
                <Input.TextArea placeholder="Nhập tin nhắn..." rows={4} />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  icon={<SendOutlined />}
                  size="large"
                  style={{ backgroundColor: '#facc15', color: 'black', fontWeight: 'bold', border: 'none', width: '100%', borderRadius: '999px' }}
                >
                  Gửi Tin Nhắn
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </section>
    </div>
  )
}