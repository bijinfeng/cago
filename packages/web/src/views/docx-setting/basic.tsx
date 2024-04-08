import { Button, Form, Textarea } from "@pingtou/ui"
import React from "react"
import { BannerEdit } from "@/components/banner-edit"
import { BookTitle } from "@/components/book-title"

const DocxSettingBasic: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6 text-xl font-medium">知识库信息</div>
      <Form className="max-w-[668px]">
        <Form.Item label="图标和名称" name="title" required>
          <BookTitle />
        </Form.Item>

        <Form.Item label="简介" name="desc">
          <Textarea maxLength={255} rows={6} />
        </Form.Item>

        <Form.Item label="封面" name="banner">
          <BannerEdit />
        </Form.Item>

        <Button>更新信息</Button>
      </Form>
    </div>
  )
}

export default DocxSettingBasic
