function Tables() {
    return ( 
        <div className="p-6 bg-gray-100 min-h-screen">
      <main className="flex space-x-6">
        <aside className="w-64 bg-white shadow-md p-4">
          <nav>
            <ul>
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-200">Overview</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-200">Analytics</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-200">Reports</a>
              </li>
            </ul>
          </nav>
        </aside>
        <div className="flex-1">
          <section className="bg-white shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Overview</h2>
            <p className="text-gray-600">This is the overview section of the dashboard.</p>
          </section>
          
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Card 1</h3>
              <p className="text-gray-600">Content for card 1.</p>
            </div>
            <div className="bg-white shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Card 2</h3>
              <p className="text-gray-600">Content for card 2.</p>
            </div>
            <div className="bg-white shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Card 3</h3>
              <p className="text-gray-600">Content for card 3.</p>
            </div>
          </section>
        </div>
      </main>
    </div>
     );
}

export default Tables;