import Script from 'next/script';
import React, { useEffect, useRef } from "react";

const RichEditor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // @ts-ignore
    const { createOpenEditor } = window.Doc;
    // 创建编辑器
    const editor = createOpenEditor(editorRef.current, {
      input: {},
      image: {
        isCaptureImageURL() {
          return false;
        },
      },
    });
    // 设置内容
    editor.setDocument('text/lake', '<p><span style="color: rgb(255, 111, 4),rgb(243, 48, 171)">欢迎来到yuque编辑器</span></p>');
    // 监听内容变动
    editor.on('contentchange', () => {
      console.info(editor.getDocument('text/lake'));
    });
  }, []);

  return (
    <>
      <div ref={editorRef} />
      <Script crossOrigin="anonymous" src="https://unpkg.com/react@18/umd/react.production.min.js" />
      <Script crossOrigin="anonymous" src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" />
      <Script src="https://gw.alipayobjects.com/render/p/yuyan_npm/@alipay_lakex-doc/1.12.0/umd/doc.umd.js" />
    </>
  )
}

export default RichEditor;
