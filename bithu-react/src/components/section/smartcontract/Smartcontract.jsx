// import React from 'react'
// import Web3 from "web3";
// import { useEffect } from 'react';
// export default function Smartcontract() {
//   const providerUrl = Process.env.PROVIDER_URL||"http://localhost:8545";
//   useEffect(() => {
//     const web3 = new Web3(providerUrl);
//     let provider = window.etherium;
//     if (typeof provider !== "undefined") {
//       //metamask installed
//       provider.request({
//         method: "eth_requestAccounts"
//       }).then(accounts => {
//         console.log(accounts)
//       }).catch(err =>{ console.log(err);})
//     }
//   }, [])

//   return (
// <div></div>
//   )
// }


