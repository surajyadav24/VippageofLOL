import React from 'react'
import data from "../../../assets/data/about/Caboutdata/cabout"
export default function Cabout() {
    const { aboutDescription3, aboutDescription4 } = data;
    return (
        <Cabout>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="c-about-left-sec">
                            <p>{aboutDescription3}</p>
                            <p>{aboutDescription4}</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="c-about-right-sec">

                        </div>
                    </div>
                </div>
            </div>
        </Cabout>

    )
}
