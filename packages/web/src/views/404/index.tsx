import PageNotFound from "@/assets/page-not-found.svg?react"

export function ErrorPage() {
  return (
    <div className="flex items-center justify-center text-primary">
      <PageNotFound width={200} />
    </div>
  )
}
