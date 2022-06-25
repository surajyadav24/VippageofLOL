import styled, { keyframes } from 'styled-components';
import sectionBgImage from '../../../../assets/images/bg/h1_banner_bg.png';

const rotate = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;

const BannerV1Wrapper = styled.section`
	background: url(${sectionBgImage});
	min-height: 950px;
	width: 100%;
	background-size: cover;
	background-position: top center;
	background-repeat: no-repeat;
	padding-top: 192px;

  .footer_shapes_left {
          left: 0px;
          top: 0px;
          height: 50%;
          z-index: 0;
        }
        .footer_shapes_right {
          right: 0px;
          top: 0px;
          height: 100%;
          z-index: 0;
        }
        .footer_shapes_left img{
          width:"50%"!important;
        }

		footer_shapes_right{
			width:50%;
			height:20px;
		}

	.lolbanner-con {
		h5 {
			font-family: "Bakbak One";
	    background: linear-gradient( 85deg, rgb(255 153 0) 38.16%, #f5960c 35.6%, #ffdaa4 53.01%, rgb(239 174 77 / 94%) 49.5% );
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
			text-fill-color: transparent;
word-spacing:"0.5px"
			text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		}
		text-align: center;
		color: #fff;
		letter-spacing: 1px;
	}
	.bithu_v1_baner_left {
		margin-top: 66px;
		max-width: 500px;
		width: 100%;
		min-height: 550px;
		display: flex;
		align-items: flex-start;
		justify-content: center;
		flex-direction: column;

		h2 {
			font-family: "Bakbak One";
			font-style: normal;
			font-weight: 400;
			font-size: 60px;
			line-height: 80px;
			text-transform: uppercase;
			color: #ffffff;
			margin-bottom: 32px;
		}

		h3 {
			font-family: "Bakbak One";
			font-style: normal;
			font-weight: 400;
			font-size: 40px;
			line-height: 60px;
			text-transform: uppercase;
			color: #ffffff;
		}

		.banner_buttons {
			display: flex;
			column-gap: 30px;
			margin-top: 58px;
		}

		.coin-info {
			display: flex;
			flex-direction: column;
			margin-top: 37px;
			span {
				font-family: "Bakbak One";
				font-size: 18px;
				line-height: 36px;
				text-transform: uppercase;
				color: rgba(255, 255, 255, 0.8);

				& .highlighted {
					color: #ffe600;
				}
			}
		}
	}

	.bithu_v1_baner_right {
		max-width: 500px;
		width: 100%;
		margin-left: auto;
		margin-top: 66px;

		.mint_live_circle_sect {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 140px;
			width: 140px;
			border-radius: 50%;
			border: none;
			background: #ffe600;
			position: absolute;
			top: -65px;
			left: -65px;
			z-index: 1;

			.mint_live_circle {
				position: relative;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100%;
				width: 100%;

				.mint_live_text {
					animation: ${rotate} 20s linear infinite;
					position: absolute;
				}
			}
		}

		.bithu_v1_baner_right_img_sect {
			position: relative;
			width: 100%;
			height: 550px;
			display: flex;
			align-items: center;
			justify-content: center;

			.bithu_v1_baner_right_img_bg {
				position: absolute;
				top: 0px;
				left: 0px;
				width: 100%;
				height: 100%;
				z-index: 0;
				img {
					width: 100%;
					height: 100%;
				}
			}

			.bithu_v1_baner_right_img {
				position: relative;
				z-index: 1;
			}
		}
	}

	@media only screen and (max-width: 1199px) {
		.bithu_v1_baner_left {
			h2 {
				font-size: 50px;
				line-height: 65px;
			}

			h3 {
				font-size: 34px;
				line-height: 38px;
			}

			.baner_buttons {
				margin-top: 40px;
			}
		}
	}

	@media only screen and (max-width: 991px) {
		.bithu_v1_baner_left {
			margin-top: 0px;
			justify-content: flex-start;
		}

		.bithu_v1_baner_right {
			margin: 70px auto;
			padding: 0px 68px;
			max-width: 568px;
			width: 100%;

			.bithu_v1_baner_right_img {
				width: 55%;
			}
		}
	}

	@media only screen and (max-width: 767px) {
		.bithu_v1_baner_left {
			h2 {
				font-size: 40px;
				line-height: 50px;
				margin-bottom: 20px;
			}

			h3 {
				font-size: 28px;
				line-height: 38px;
			}

			.banner_buttons {
				margin-top: 25px;
			}
		}

		.bithu_v1_baner_right {
			padding-right: 0px;

			.bithu_v1_baner_right_img_sect {
				height: 480px;
			}
		}
	}

	@media only screen and (max-width: 480px) {
		.bithu_v1_baner_left {
			h2 {
				font-size: 37px;
			}

			h3 {
				font-size: 22px;
			}

			.coin-info {
				font-size: 14px;
				line-height: 29px;
			}

			.banner_buttons {
				flex-direction: column;
				justify-content: flex-start;
				align-items: flex-start;

				.bithu-btn + .bithu-btn {
					margin-top: 20px;
				}
			}
		}

		.bithu_v1_baner_right {
			padding-left: 34px;

			.mint_live_circle_sect {
				height: 90px;
				width: 90px;
				top: -36px;
				left: -40px;
			}
		}
	}

	@media (max-width: 375px) {
		.bithu_v1_baner_left {
			h2 {
				font-size: 35px;
			}
			h3 {
				font-size: 22px;
			}
		}
	}

	@media (max-width: 360px) {
		.bithu_v1_baner_left {
			.coin-info {
				font-size: 13px;
			}
		}
	}
`;

export default BannerV1Wrapper;
