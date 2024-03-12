import CreateKnow from "@/components/create-know"
import DocList from "@/components/doc-list"

function DashboardHome() {
  return (
    <div className="px-9">
      <div className="mt-[26px] mb-[22px] text-lg font-medium">开始</div>
      <div className="flex space-x-3">
        <CreateKnow />
      </div>
      <div className="mt-7 mb-4 text-base font-medium">文档</div>
      <div>
        <DocList />
      </div>
    </div>
  )
}

export default DashboardHome
