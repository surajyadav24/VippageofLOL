import React, {useState, useEffect} from 'react';
import Web3 from 'web3';
import {ABI} from './ABI'; 
import { ethers } from 'ethers';
import BannerV1Wrapper from "./Banner.style";
import Vippass from"../../../../assets/images/vippass/vippass.png"
// import SectionTitle from "../../../../common/sectionTitle";
import sectionTitleShape from "../../../../assets/images/icon/title_shapes.svg";
import Mintbuttonwrapper from '../../mintbutton/Mintbutton.style';
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import Portis from "@portis/web3";
import Torus from "@toruslabs/torus-embed";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { SnackbarProvider, useSnackbar } from 'notistack';

// Mainnet: 0xeb16a342412fa0fe674024e37d0924e2d18d2d26
// Rinkeby: 0x986bFa12850fe12a28b4A56558a41362da3DF284
const contractAddress = "0xeb16a342412fa0fe674024e37d0924e2d18d2d26";
const abi = ABI;

const Banner = () => {
	const { enqueueSnackbar } = useSnackbar();
	const [currentAccount, setCurrentAccount] = useState(null);
	const [dispMsg, setDispMsg] = useState("");
	const [state, setState] = React.useState({
		vertical: 'top',
		horizontal: 'center',
	  });
	const { vertical, horizontal} = state;
	const [open, setOpen] = useState(false);

	const handleClick = (data) => {
		enqueueSnackbar(data, { variant: "info" }, { persist: true });
	  };
	
	  const handleClickVariant = (data, variant) => {
		// variant could be success, error, warning, info, or default
		enqueueSnackbar(data , { variant: variant }, { persist: true });
	  };
	  
		
	const providerOptions = {
		walletconnect: {
			package: WalletConnectProvider, // required
			options: {
			  infuraId: "f844d3ac39704d47ab46606968f926e9" // required
			}
		  	},
		coinbasewallet: {
			package: CoinbaseWalletSDK, // Required
			options: {
				appName: "LOL Loyalty NFT", // Required
				infuraId: "f844d3ac39704d47ab46606968f926e9", // Required
				rpc: "", // Optional if `infuraId` is provided; otherwise it's required
				chainId: 1, // Optional. It defaults to 1 if not provided
				darkMode: true // Optional. Use dark theme, defaults to false
			}
		},
		binancechainwallet: {
				package: true
			},
		portis: {
				package: Portis, // required
				options: {
				  id: "f844d3ac39704d47ab46606968f926e9" // required
				}
			},
		torus: {
				package: Torus, // required
				options: {
				  networkParams: {
					host: "https://www.vip.lordsofthelands.io", // optional
					chainId: 1, // optional
				  }
				}
			  },
		opera: {
				package: true
			  }
		
		};
		
		const web3Modal = new Web3Modal({
			network: "mainnet", // optional
			cacheProvider: false, // optional
			providerOptions, // required
			theme: "dark",
			toggleModal: true
		});

	const mintNftHandler = async () => {
		const instance = await web3Modal.connect();
		const provider = new ethers.providers.Web3Provider(instance);
		setDispMsg("Connecting to wallet")
		handleClick("Connecting to wallet");
		const signer = provider.getSigner();
		const chainId = await provider.getNetwork()
		const balance = await provider.getBalance(await signer.getAddress())
		if (chainId.chainId !== 1) {
			web3Modal.clearCachedProvider();
			handleClickVariant("Incorrect Network. Switch to Ethereum Mainnet",'error')
			return setDispMsg("Incorrect Network. Switch to Ethereum Mainnet")}
		if (ethers.utils.formatEther(balance) < 0.06) {
			web3Modal.clearCachedProvider();
			handleClickVariant("Insufficient Amount",'error')
			return setDispMsg("Insufficient Amount")}
		var contract = new ethers.Contract(contractAddress, abi, signer);
		setDispMsg("Minting your VIP Pass");
		handleClick("Minting your VIP Pass");
		let nftTxn = await contract.mintPass({value: ethers.utils.parseUnits("0.06", 'ether')}).catch((err) => {
			setDispMsg(err.message);
			handleClickVariant(err.message, 'error');
		});
		setDispMsg(`VIP Pass Minted ... Check Txn here https://etherscan.io/tx/${nftTxn.hash}`);
		handleClickVariant(`VIP Pass MintedCheck}`, 'success')
		handleClick(`Check Txn here https://etherscan.io/tx/${nftTxn.hash}`)
		web3Modal.clearCachedProvider();

	}

  const mintNftButton = () => {
    return (
		<Mintbuttonwrapper>
			<div className="container">
				<div className="row">
					<div className="mintbtn-erap">
						<button className="inner-mintbtn" onClick={( async () => { await mintNftHandler()
						})}>
						Mint NFT
						</button>
					</div>
				</div>
			</div>
		</Mintbuttonwrapper>
    )
  	}

 	return (
		<BannerV1Wrapper id="home">
		<div className="container">
			<div className="row">
			<div className="col-lg-12">
				<div className="lolbanner-con">
			  <h2>Claim your Lordship</h2>
				
				<h5>

					<span className="footer_shapes_right">
					<img src={sectionTitleShape} alt="bithu nft footer" />
					</span>
					VIP List Perks
					<span className="shape_left"><img src={sectionTitleShape2} alt=''/></span>
				</h5>
				<div className="vip-pass">
                 <img src={Vippass} alt="" />
            </div>
				</div>
				{mintNftButton()}
				
			</div>

			</div>
		</div>
		</BannerV1Wrapper>
		
	);
	
};

export default Banner;
