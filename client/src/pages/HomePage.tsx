import Sidebar from "@/components/home/Sidebar"
import Topbar from "@/components/home/Topbar"

function HomePage() {
  return (
    <div>
        <div className="flex">
            <Sidebar />
            <main className="grow">
                <Topbar />
                <div>
                    main content
                </div>
            </main>
        </div>
    </div>
  )
}

export default HomePage