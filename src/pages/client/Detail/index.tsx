
const Detail = () => {
	return <div>
		<main className="my-8">
  <div className="container px-6 mx-auto">
    <div className="md:flex md:items-center">
      <div className="w-full h-64 md:w-1/2 lg:h-96">
        <img className="object-cover w-full h-full max-w-lg mx-auto rounded-md" src="https://images.unsplash.com/photo-1578262825743-a4e402caab76?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="Nike Air" />
      </div>
      <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
        <h3 className="text-lg text-gray-700 uppercase">Nike Air</h3>
        <span className="mt-3 text-gray-500">$125</span>
        <hr className="my-3" />
        <div className="mt-2">
          <label className="text-sm text-gray-700" htmlFor="count">Count:</label>
          <div className="flex items-center mt-1">
            <button className="text-gray-500 focus:outline-none focus:text-gray-600">
              <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </button>
            <span className="mx-2 text-lg text-gray-700">20</span>
            <button className="text-gray-500 focus:outline-none focus:text-gray-600">
              <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </button>
          </div>
        </div>
        <div className="mt-3">
          <label className="text-sm text-gray-700" htmlFor="count">Color:</label>
          <div className="flex items-center mt-1">
            <button className="w-5 h-5 mr-2 bg-blue-600 border-2 border-blue-200 rounded-full focus:outline-none" />
            <button className="w-5 h-5 mr-2 bg-teal-600 rounded-full focus:outline-none" />
            <button className="w-5 h-5 mr-2 bg-pink-600 rounded-full focus:outline-none" />
          </div>
        </div>
        <div className="flex items-center mt-6">
          <button className="px-8 py-2 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">Order Now</button>
          <button className="p-2 mx-2 text-gray-600 border rounded-md hover:bg-gray-200 focus:outline-none">
            <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          </button>
        </div>
      </div>
    </div>
    <div className="mt-16">
      <h3 className="text-2xl font-medium text-gray-600">More Products</h3>
      <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="w-full max-w-sm mx-auto overflow-hidden rounded-md shadow-md">
          <div className="flex items-end justify-end w-full h-56 bg-cover" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80")'}}>
            <button className="p-2 mx-5 -mb-4 text-white bg-blue-600 rounded-full hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </button>
          </div>
          <div className="px-5 py-3">
            <h3 className="text-gray-700 uppercase">Chanel</h3>
            <span className="mt-2 text-gray-500">$12</span>
          </div>
        </div>
        <div className="w-full max-w-sm mx-auto overflow-hidden rounded-md shadow-md">
          <div className="flex items-end justify-end w-full h-56 bg-cover" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80")'}}>
            <button className="p-2 mx-5 -mb-4 text-white bg-blue-600 rounded-full hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </button>
          </div>
          <div className="px-5 py-3">
            <h3 className="text-gray-700 uppercase">Man Mix</h3>
            <span className="mt-2 text-gray-500">$12</span>
          </div>
        </div>
        <div className="w-full max-w-sm mx-auto overflow-hidden rounded-md shadow-md">
          <div className="flex items-end justify-end w-full h-56 bg-cover" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80")'}}>
            <button className="p-2 mx-5 -mb-4 text-white bg-blue-600 rounded-full hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </button>
          </div>
          <div className="px-5 py-3">
            <h3 className="text-gray-700 uppercase">Classic watch</h3>
            <span className="mt-2 text-gray-500">$12</span>
          </div>
        </div>
        <div className="w-full max-w-sm mx-auto overflow-hidden rounded-md shadow-md">
          <div className="flex items-end justify-end w-full h-56 bg-cover" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1590664863685-a99ef05e9f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=345&q=80")'}}>
            <button className="p-2 mx-5 -mb-4 text-white bg-blue-600 rounded-full hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </button>
          </div>
          <div className="px-5 py-3">
            <h3 className="text-gray-700 uppercase">woman mix</h3>
            <span className="mt-2 text-gray-500">$12</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

	</div>;
};

export default Detail;
