const Home = () => {
	return (
		<div>
			<section className="min-h-screen text-gray-600 body-font ">
				<div className="container px-5 py-10 mx-auto">
					<div className="flex flex-wrap -m-4">
						<div className="w-full p-4 md:w-1/2 lg:w-1/4">
							<a className="relative block h-48 overflow-hidden rounded">
								<img
									alt="ecommerce"
									className="block object-cover object-center w-full h-full cursor-pointer"
									src="https://dummyimage.com/420x260"
								/>
							</a>
							<div className="mt-4">
								<h2 className="text-lg font-medium text-gray-900 title-font">The Catalyzer</h2>
								<h3 className="mb-1 text-base tracking-widest text-gray-500 title-font">200&</h3>
								<p className="mt-1">desc</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
