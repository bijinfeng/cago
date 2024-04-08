import { Button } from "@pingtou/ui"
import React, { useRef, useState } from "react"
import type {
  CropperImage,
  CropperPreviewRef,
  CropperRef,
  CropperState,
  CropperTransitions,
} from "react-advanced-cropper"
import { Cropper, CropperPreview } from "react-advanced-cropper"

interface IBannerEditProps {
  value?: string
  onChange?: (value: string) => void
}

interface PreviewState {
  state: CropperState | null
  image: CropperImage | null
  transitions: CropperTransitions | null
  loading?: boolean
  loaded?: boolean
}

export const BannerEdit = React.forwardRef<HTMLDivElement, IBannerEditProps>((props, ref) => {
  const cropperRef = useRef<CropperRef>(null)
  const previewRef = useRef<CropperPreviewRef>(null)
  const [previewState, setPreviewState] = useState<PreviewState>({
    state: null,
    image: null,
    transitions: null,
  })

  const onUpdate = () => {
    setPreviewState({
      state: cropperRef.current!.getState(),
      image: cropperRef.current!.getImage(),
      transitions: cropperRef.current!.getTransitions(),
      loaded: cropperRef.current!.isLoaded(),
      loading: cropperRef.current!.isLoading(),
    })
  }

  return (
    <div ref={ref} className="flex gap-4">
      <Cropper
        ref={cropperRef}
        style={{ width: 284, height: 146 }}
        className="rounded-md"
        stencilProps={{ aspectRatio: 1 }}
        src={props.value || "/book.jpg"}
        onUpdate={onUpdate}
      />
      <div className="flex flex-col justify-end">
        <CropperPreview
          ref={previewRef}
          style={{ width: 142, height: 73 }}
          {...previewState}
        />

        <div className="flex items-center mt-4 gap-2">
          <Button variant="outline" size="sm">重新上传</Button>
          <span className="text-sm text-muted-foreground">预览</span>
        </div>
      </div>
    </div>
  )
})
