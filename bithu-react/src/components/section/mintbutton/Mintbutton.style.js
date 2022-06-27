import styled from 'styled-components';

const Mintbutton = styled.section`
.mintbtn-erap{
	margin:20px 0px;
	display:flex;
	justify-content:center;

}
	.inner-mintbtn {
		margin: 0 auto;
		margin-top: 30px;
		width: 486px;
		height: 82.55px;
		background: #72FF79;
		background-blend-mode: lighten;
		border-radius: 13px;
	
		p {
			font-weight:800;
			display: flex;
			padding-top: 12px;
			color: #000;
			justify-content: center;
			align-items: center;
			transform: scale(1.2);
			-webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
			transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
		}

	}
	
`;

export default Mintbutton;
