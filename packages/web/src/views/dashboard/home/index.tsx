import { CreateDoc } from "./create-doc"
import DocList from "./doc-list"

function DashboardHome() {
  return (
    <div className="px-9">
      <div className="mt-[26px] mb-[22px] text-lg font-medium">开始</div>
      <CreateDoc />
      <div className="mt-7 mb-4 text-base font-medium">文档</div>
      <DocList />
    </div>
  )
}

export default DashboardHome
