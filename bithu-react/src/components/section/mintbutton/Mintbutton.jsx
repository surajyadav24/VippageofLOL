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
                            <p>
                                {props.data}
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </Mintbuttonwrapper>
    )
}
