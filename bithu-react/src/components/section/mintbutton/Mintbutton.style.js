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
		width: 200px;
		height: 50px;
		background: #2effe8;
		background-blend-mode: lighten;
		border-radius: 27px;
	
		p {
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
