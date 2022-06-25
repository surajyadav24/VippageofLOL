import React from 'react'
import Mintbuttonwrapper from './Mintbutton.style'
export default function Mintbutton() {
    return (
        <Mintbuttonwrapper>
            <div className="container">
                <div className="row">
                    <div className="mintbtn-erap">
                        <button className="inner-mintbtn">
                            <p>
                                MINT NOW
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </Mintbuttonwrapper>
    )
}
