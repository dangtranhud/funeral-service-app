'use client'
import { useState } from 'react'
import { Form, Input, Button, notification } from 'antd'
import { SendOutlined } from '@ant-design/icons'

export default function ContactForm() {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (values: any) => {
    setLoading(true)
    try {
      const res = await fetch('https://69fbee96fce564e2591710c7.mockapi.io/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name,
          phone: values.phone,
          note: values.note || '',
        }),
      })

      if (!res.ok) throw new Error('Lỗi server')

      form.resetFields()
      notification.success({
        message: 'Đăng ký thành công!',
        description: 'Chúng tôi sẽ liên hệ lại sớm nhất!',
      })
    } catch (error) {
      notification.error({
        message: 'Gửi thất bại!',
        description: 'Có lỗi xảy ra, vui lòng thử lại sau.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Form.Item name="name" rules={[{ required: true, message: 'Nhập họ tên!' }]}>
        <Input placeholder="Họ và tên *" size="large" />
      </Form.Item>
      <Form.Item name="phone" rules={[{ required: true, message: 'Nhập số điện thoại!' }]}>
        <Input placeholder="Số điện thoại *" size="large" />
      </Form.Item>
      <Form.Item name="note">
        <Input.TextArea placeholder="Nội dung cần hỗ trợ..." rows={3} />
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
          Đăng Ký Ngay
        </Button>
      </Form.Item>
    </Form>
  )
}