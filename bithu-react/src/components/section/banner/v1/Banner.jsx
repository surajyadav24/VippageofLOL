import React, {useState, useEffect} from 'react';
import Web3 from 'web3';
import {ABI} from './ABI'; 
import { ethers } from 'ethers';
import { useModal } from "../../../../utils/ModalContext";
import BannerV1Wrapper from "./Banner.style";
import Mintbutton from "../../mintbutton/Mintbutton";
import SectionTitle from "../../../../common/sectionTitle";
import sectionTitleShape from "../../../../assets/images/icon/title_shapes.svg";
import sectionTitleShape2 from "../../../../assets/images/icon/title_shapes2.svg";
import Web3Modal from "web3modal";
import Mintbuttonwrapper from '../../mintbutton/Mintbutton.style';
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import Portis from "@portis/web3";
import Torus from "@toruslabs/torus-embed";


const contractAddress = "0xeb16a342412fa0fe674024e37d0924e2d18d2d26";
const abi = ABI;

const Banner = () => {

	const [currentAccount, setCurrentAccount] = useState(null);
	const [dispMsg, setDispMsg] = useState("Connect Wallet");
	// const { mintModalHandle } = useModal();
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
			cacheProvider: true, // optional
			providerOptions, // required
			theme: "dark"
		});

	const connectWalletHandler = async () => {
		const provider = await web3Modal.connect();
		const web3 = new Web3(provider);
		await window.ethereum.send("eth_requestAccounts");
		var accounts = await web3.eth.getAccounts();
		var account = accounts[0];
		var contract = new web3.eth.Contract(abi, contractAddress)
		setCurrentAccount(account);
        setDispMsg("Wallet Connected");

	}

	const mintNftHandler = async () => {
		const instance = await web3Modal.connect();
		const provider = new ethers.providers.Web3Provider(instance);
		const signer = provider.getSigner();
		// const provider = await web3Modal.connect();
		// const web3 = new Web3(provider);
		// await window.ethereum.send("eth_requestAccounts");
		// var accounts = await web3.eth.getAccounts();
		// var account = accounts[0];
		// const signer = provider.getSigner();
		var contract = new ethers.Contract(contractAddress, abi, signer);
		let nftTxn = await contract.mintPass().catch((err) => {
			alert(err.message);
			setDispMsg(err.message);
		});
		console.log(nftTxn);
		setDispMsg(`Check Txn here https://etherscan.io/tx/${nftTxn.hash}`);

	}
	const checkWalletIsConnected = async () => {
		const {ethereum} = window;
		if (!ethereum) {
			setDispMsg("Wallet Not Connected");
			// return alert("Wallet is not connected")
			}
		const accounts = await ethereum.request({method: "eth_accounts"});
			setCurrentAccount(accounts[0]);
			// console.log(accounts);
		
		if(accounts.length !== 0) {
			const account = accounts[0]; 
			setCurrentAccount(account);
			// setDispMsg("Wallet Connected");
			// return alert("Wallet is connected !");
		} else {
			setDispMsg("Account Not Found");
			// return alert("Account Not Found !")
		}
	}
  const connectWalletButton = () => {
    return (
		<Mintbuttonwrapper>
		<div className="container">
		<div className="row">
			<div className="mintbtn-erap">
				<button className="inner-mintbtn" onClick={( async () => { await connectWalletHandler()
				window.location.reload(false);
				})}>
					Connect Wallet
				</button>
			</div>
		</div>
	</div>
	</Mintbuttonwrapper>
    )
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

  useEffect(() => {
	const interval = setInterval(() => {
		checkWalletIsConnected();
		}, 3000);
	return () => clearInterval(interval);
  }, [])
 	return (
		<BannerV1Wrapper id="home">
		<div className="container">
			<div className="row">
			<div className="col-lg-12">
				<div className="lolbanner-con">
				<h2>FINALLY... An NFT Collection with REAL UTILITY</h2>
				
				<h5>

					<span className="footer_shapes_right">
					<img src={sectionTitleShape} alt="bithu nft footer" />
					</span>
					VVIP List Perks
					<span className="shape_left"><img src={sectionTitleShape2} alt=''/></span>
				</h5>
				</div>
				{currentAccount ? mintNftButton() : connectWalletButton()}
				
			</div>

			</div>
		</div>
		</BannerV1Wrapper>
	);
};

export default Banner;
