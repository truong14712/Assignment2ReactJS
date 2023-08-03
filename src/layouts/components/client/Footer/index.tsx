import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="py-10">
			<div className="w-[1290px] mx-auto grid grid-cols-4 border-b-2 py-14">
				<div>
					<h2 className="text-lg font-bold">Contact Us</h2>
					<ul className="mt-8">
						<li className="py-1 text-gray-600">
							<i className="mr-3 fa-solid fa-location-arrow" />
							451 Wall Street, UK, London
						</li>
						<li className="py-1 text-gray-600">
							<i className="mr-3 fa-solid fa-phone" />
							Phone: (+084) 333-1233
						</li>
						<li className="py-1 text-gray-600">
							<i className="mr-3 fa-regular fa-address-book" />
							demo@demo.com.
						</li>
					</ul>
				</div>
				<div>
					<h2 className="text-lg font-bold">My Account</h2>
					<ul className="mt-8">
						<li className="py-1">
							<Link className="text-gray-600 hover:text-[#ECAF82]" to="#">
								The board
							</Link>
						</li>
						<li className="py-1">
							<Link className="text-gray-600 hover:text-[#ECAF82]" to="#">
								Accessories
							</Link>
						</li>
						<li className="py-1">
							<Link className="text-gray-600 hover:text-[#ECAF82]" to="#">
								FAQs
							</Link>
						</li>
						<li className="py-1">
							<Link className="text-gray-600 hover:text-[#ECAF82]" to="#">
								Terms &amp; Conditions
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h2 className="text-lg font-bold">Product</h2>
					<ul className="mt-8">
						<li className="py-1">
							<Link className="text-gray-600 hover:text-[#ECAF82]" to="#">
								Order
							</Link>
						</li>
						<li className="py-1">
							<Link className="text-gray-600 hover:text-[#ECAF82]" to="#">
								Downloads
							</Link>
						</li>
						<li className="py-1">
							<Link className="text-gray-600 hover:text-[#ECAF82]" to="#">
								Addresses
							</Link>
						</li>
						<li className="py-1">
							<Link className="text-gray-600 hover:text-[#ECAF82]" to="#">
								Account details
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h2 className="text-lg font-bold">Design Blog</h2>
					<ul className="mt-8">
						<li className="py-1">
							<Link className="text-gray-600 hover:text-[#ECAF82]" to="#">
								Blog
							</Link>
						</li>
						<li className="py-1">
							<Link className="text-gray-600 hover:text-[#ECAF82]" to="#">
								Forums
							</Link>
						</li>
						<li className="py-1">
							<Link className="text-gray-600 hover:text-[#ECAF82]" to="#">
								Builders Showcase
							</Link>
						</li>
						<li className="py-1">
							<Link className="text-gray-600 hover:text-[#ECAF82]" to="#">
								How-To Guides
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="mt-10 text-center">
				<p className="font-medium">Copyright © 2022 - mixxstore. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
