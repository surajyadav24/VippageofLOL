import React from 'react'
import Mintbuttonwrapper from './Mintbutton.style'
export default function Mintbutton() {
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
