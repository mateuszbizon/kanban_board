import Sidebar from "@/components/home/Sidebar"
import Topbar from "@/components/home/Topbar"

function HomePage() {
  return (
    <div>
        <Topbar />
        <div className="flex">
            <Sidebar />
            <main className="grow">
                <div>
                    main content
                </div>
            </main>
        </div>
    </div>
  )
}

export default HomePage