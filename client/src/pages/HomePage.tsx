function HomePage() {
  return (
    <div>
        <div className="flex">
            <aside className="hidden md:block">
                <div className="sticky top-0 bg-white h-20">
                    <p>logo</p>
                </div>
                <div className="sticky top-20 w-[260px] h-[calc(100vh-80px)] bg-white">
                    <p>Sidebar</p>
                </div>
            </aside>
            <main className="grow">
                <div className="sticky top-0 bg-white">
                    <p>topbar</p>
                </div>
                <div>
                    main content
                </div>
            </main>
        </div>
    </div>
  )
}

export default HomePage