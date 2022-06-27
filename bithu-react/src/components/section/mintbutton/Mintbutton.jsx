import React from 'react';
import Mintbuttonwrapper from './Mintbutton.style';
import Web3 from "web3";
import Web3Modal from "web3modal";


const providerOptions = {
    /* See Provider Options Section */
  };
  
  const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions // required
  });


export default function Mintbutton(props) {
    return (
        <Mintbuttonwrapper>
            <div className="container">
                <div className="row">
                    <div className="mintbtn-erap">
                        <button className="inner-mintbtn">
                            <link to={{ pathname: "https://www.premint.xyz/LOL/" }}></link>
                            <h2 className='mt-0'>
                                MINT NOW
                            </h2>
                            <h5>
                            
                            </h5>
                        </button>
                    </div>
                </div>
            </div>
        </Mintbuttonwrapper>
    )
}
