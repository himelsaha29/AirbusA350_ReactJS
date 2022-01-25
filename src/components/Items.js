import React from 'react'
import Button from './Button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const Items = ({title, desc, descLink, backgroundImg, leftBtnTxt, leftBtnLink, rightBtnTxt, rightBtnLink, twoButtons}) => {
    return (
        <div className="item" style={{}}>

            <div className="item_container">
                <div className="item_text">
                    <p>{title}</p>
                    <div className="item_textDesc">
                        <p>{desc}</p>
                    </div>
                </div>
            <div className="item_lowerThird">
                <div className="item_buttons">
                    <Button imp="primary" text={leftBtnTxt} link={leftBtnLink}/>
                    {twoButtons && (
                        <Button imp="secondary" text={rightBtnTxt} link={rightBtnLink}/>
                    )}
                </div>
                {first && (
                    <div className="item_expand">
                        <ExpandMoreIcon />
                    </div>
                )}
            </div>

            </div>
        </div>
    )
}

export default Items
