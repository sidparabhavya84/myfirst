import React from "react";
import './title.css'

function Gallary() {
    let image = ["./images/p-1.jpg","./images/p-2.jpg","./images/p-3.jpg","./images/p-4.jpg","./images/p-5.jpg","./images/p-6.jpg","./images/p-7.jpg","./images/p-8.jpg"]
    
    return (
        <div className="gallary">
            {
                image.map((image) => {
                    return (
                        <div className="items">
                            <img src={image} />

                        </div>
                    )
                })
            }
        </div>
    )
}

export default Gallary;