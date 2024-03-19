declare namespace KB {
  interface UploadFileFormat {
    ext: string
    hash: string
    height: number
    mime: string
    name: string
    size: number
    url: string
    width: number
  }

  interface UploadFile {
    id: number
    mime: string
    name: string
    size: string
    url: string
    width: number
    height: number
    ext: string
    formats: {
      large: UploadFileFormat
      medium: UploadFileFormat
      small: UploadFileFormat
      thumbnail: UploadFileFormat
    }
  }
}
