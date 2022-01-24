import React from 'react'
import Button from './Button'

const Items = ({title, desc, descLink, backgroundImg, leftBtnTxt, leftBtnLink, rightBtnTxt, rightBtnLink, twoButtons}) => {
    return (
        <div className="item" style={{}}>

            <div className="item_container">
                <div className="item_text">
                    <p>Title</p>
                    <div className="item_textDesc">
                        <p>{desc}</p>
                    </div>
                </div>
            </div>

            <div className="item_lowerThird">
                <div className="item_buttons">
                    <Button
                </div>
            </div>

        </div>
    )
}

export default Items
