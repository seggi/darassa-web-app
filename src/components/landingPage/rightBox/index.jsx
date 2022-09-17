
import React from 'react'
import { FaLanguage} from "react-icons/fa";
import { welcomeMessage } from "../../../constants/appLabel/text";

import "./style.css";

const RightBox = () => {
  return (
    <> 
        <div className="right-box__contents">
            <div className="box-content__column">
                <div className="top-items-row">
                    <button>
                        <span>English</span> 
                        <i> <FaLanguage /></i>
                    </button>
                </div>
                <div className="bottom-item-column">
                    <span id="welcome">{welcomeMessage.welcome}</span>
                    <span id="quotation">{welcomeMessage.quotation}</span>
                    <span id="quotation1">{welcomeMessage.quotation1}</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default RightBox