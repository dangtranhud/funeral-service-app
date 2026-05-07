'use client'
import { useEffect, useState } from 'react'
import { Table, Button, Modal, Form, Input, Popconfirm, notification, Spin } from 'antd'
import { EditOutlined, DeleteOutlined, ReloadOutlined, UserOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons'

const API_URL = 'https://69fbee96fce564e2591710c7.mockapi.io/contacts'

interface Contact {
  id: string
  name: string
  phone: string
  email?: string
  message?: string
  note?: string
  createdAt: string
}

export default function AdminPage() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [editTarget, setEditTarget] = useState<Contact | null>(null)
  const [saving, setSaving] = useState(false)
  const [form] = Form.useForm()
  const fetchContacts = async () => {
    setLoading(true)
    try {
      const res = await fetch(API_URL)
      const data = await res.json()
      setContacts(data.sort((a: Contact, b: Contact) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      ))
    } catch {
      notification.error({ message: 'Không tải được dữ liệu!' })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchContacts() }, [])
  const openEdit = (record: Contact) => {
    setEditTarget(record)
    form.setFieldsValue(record)
    setEditModal(true)
  }
  const handleSave = async (values: any) => {
    if (!editTarget) return
    setSaving(true)
    try {
      const res = await fetch(`${API_URL}/${editTarget.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error()
      notification.success({ message: 'Cập nhật thành công!' })
      setEditModal(false)
      fetchContacts()
    } catch {
      notification.error({ message: 'Cập nhật thất bại!' })
    } finally {
      setSaving(false)
    }
  }
  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
      if (!res.ok) throw new Error()
      notification.success({ message: 'Đã xoá liên hệ!' })
      setContacts(prev => prev.filter(c => c.id !== id))
    } catch {
      notification.error({ message: 'Xoá thất bại!' })
    }
  }

  const columns = [
    {
      title: '#',
      key: 'index',
      width: 55,
      render: (_: any, __: any, i: number) => (
        <span className="text-zinc-400 text-sm font-mono">{i + 1}</span>
      ),
    },
    {
      title: 'Họ và tên',
      dataIndex: 'name',
      key: 'name',
      render: (v: string) => (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
            {v?.charAt(0)?.toUpperCase() || '?'}
          </div>
          <span className="font-semibold text-zinc-800">{v}</span>
        </div>
      ),
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
      key: 'phone',
      render: (v: string) => (
        <a href={`tel:${v}`} className="text-blue-600 hover:text-yellow-500 font-mono">
          {v}
        </a>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (v: string) => v
        ? <span className="text-zinc-600 text-sm">{v}</span>
        : <span className="text-zinc-300 text-sm italic">—</span>,
    },
    {
      title: 'Nội dung',
      key: 'content',
      render: (r: Contact) => {
        const text = r.message || r.note || ''
        return text
          ? <span className="text-zinc-600 text-sm">{text.length > 50 ? text.slice(0, 50) + '...' : text}</span>
          : <span className="text-zinc-300 text-sm italic">—</span>
      },
    },
    {
      title: 'Thời gian',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (v: string) => (
        <span className="text-zinc-400 text-xs font-mono">
          {new Date(v).toLocaleString('vi-VN')}
        </span>
      ),
    },
    {
      title: 'Thao tác',
      key: 'action',
      width: 110,
      render: (record: Contact) => (
        <div className="flex gap-2">
          <Button
            size="small"
            icon={<EditOutlined />}
            onClick={() => openEdit(record)}
            className="border-yellow-400 text-yellow-600 hover:bg-yellow-50"
          />
          <Popconfirm
            title="Xoá liên hệ này?"
            description="Hành động này không thể hoàn tác."
            onConfirm={() => handleDelete(record.id)}
            okText="Xoá"
            cancelText="Huỷ"
            okButtonProps={{ danger: true }}
          >
            <Button
              size="small"
              danger
              icon={<DeleteOutlined />}
            />
          </Popconfirm>
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="bg-zinc-900 px-6 py-5 flex items-center justify-between">
        <div>
          <p className="text-yellow-400 text-xs uppercase tracking-widest font-semibold mb-1">
            Blackstones Admin
          </p>
          <h1 className="text-white text-2xl font-extrabold">
            Quản Lý Liên Hệ
          </h1>
        </div>
        <Button
          icon={<ReloadOutlined />}
          onClick={fetchContacts}
          loading={loading}
          className="border-zinc-600 text-zinc-300 hover:border-yellow-400 hover:text-yellow-400"
        >
          Làm mới
        </Button>
      </div>
      <div className="px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Tổng liên hệ',  value: contacts.length,                                                                            color: 'bg-yellow-400' },
          { label: 'Hôm nay',       value: contacts.filter(c => new Date(c.createdAt).toDateString() === new Date().toDateString()).length, color: 'bg-green-400'  },
          { label: 'Có email',      value: contacts.filter(c => c.email).length,                                                        color: 'bg-blue-400'   },
          { label: 'Có tin nhắn',   value: contacts.filter(c => c.message || c.note).length,                                            color: 'bg-purple-400' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-xl p-4 shadow-sm border border-zinc-100 flex items-center gap-3">
            <div className={`${s.color} w-10 h-10 rounded-lg flex items-center justify-center text-black font-extrabold text-lg`}>
              {s.value}
            </div>
            <span className="text-zinc-500 text-sm">{s.label}</span>
          </div>
        ))}
      </div>
      <div className="px-6 pb-10">
        <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden">
          <Spin spinning={loading}>
            <Table
              dataSource={contacts}
              columns={columns}
              rowKey="id"
              pagination={{ pageSize: 10, showSizeChanger: false }}
              locale={{ emptyText: 'Chưa có liên hệ nào' }}
              rowClassName="hover:bg-zinc-50 transition-colors"
            />
          </Spin>
        </div>
      </div>
      <Modal
        title={
          <div className="flex items-center gap-2">
            <EditOutlined className="text-yellow-500" />
            <span>Chỉnh sửa liên hệ</span>
          </div>
        }
        open={editModal}
        onCancel={() => setEditModal(false)}
        footer={null}
        width={500}
      >
        <Form form={form} layout="vertical" onFinish={handleSave} className="mt-4">
          <Form.Item label="Họ và tên" name="name" rules={[{ required: true, message: 'Nhập họ tên!' }]}>
            <Input prefix={<UserOutlined className="text-zinc-400" />} size="large" />
          </Form.Item>
          <Form.Item label="Số điện thoại" name="phone" rules={[{ required: true, message: 'Nhập số điện thoại!' }]}>
            <Input prefix={<PhoneOutlined className="text-zinc-400" />} size="large" />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input prefix={<MailOutlined className="text-zinc-400" />} size="large" />
          </Form.Item>
          <Form.Item label="Tin nhắn / Ghi chú" name="message">
            <Input.TextArea rows={3} />
          </Form.Item>
          <div className="flex gap-3 justify-end mt-2">
            <Button onClick={() => setEditModal(false)}>Huỷ</Button>
            <Button
              type="primary"
              htmlType="submit"
              loading={saving}
              style={{ backgroundColor: '#facc15', color: 'black', border: 'none', fontWeight: 'bold' }}
            >
              Lưu thay đổi
            </Button>
          </div>
        </Form>
      </Modal>

    </div>
  )
}