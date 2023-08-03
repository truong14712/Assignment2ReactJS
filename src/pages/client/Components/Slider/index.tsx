import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const SimpleSlider = () => {
	function SamplePrevArrow(props: any) {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{ ...style, display: 'block', background: 'gray', borderRadius: '20px' }}
				onClick={onClick}
			/>
		);
	}
	function SampleNextArrow(props: any) {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{ ...style, display: 'block', background: 'gray', borderRadius: '20px' }}
				onClick={onClick}
			/>
		);
	}
	var settings = {
		dots: true,
		lazyLoad: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 1,
		appendDots: (dots: string) => (
			<div style={{}}>
				<ul style={{ margin: '-5px', padding: '10px' }}> {dots} </ul>
			</div>
		),
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};
	return (
		<div className="container w-[720px] mx-auto my-4">
			<Slider {...settings}>
				<div>
					<img
						src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/08/banner/realme11-4G-720-220-720x220.png"
						alt=""
					/>
				</div>
				<div>
					<img
						src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/07/banner/y36-720-220-720x220.png"
						alt=""
					/>
				</div>
				<div>
					<img
						src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/07/banner/iP14PRM-720-220-720x220.png"
						alt=""
					/>
				</div>
				<div>
					<img
						src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/08/banner/Redmi-Note-12-720-220-720x220.png"
						alt=""
					/>
				</div>
			</Slider>
		</div>
	);
};

export default SimpleSlider;
