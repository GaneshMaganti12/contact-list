import React from "react"
import "./Contact.css"
import {AiOutlineStar} from "react-icons/ai"
import {AiFillStar} from "react-icons/ai"
import {FcEmptyTrash} from "react-icons/fc"

const Contact = (props) =>{
    const {contacts, clickDelete, clickFav} = props
    const {id, name, number, isFav} = contacts

    const active = isFav

    const deleteContact = () =>{
        clickDelete(id)
    }

    const changeFav = () =>{
        clickFav(id, active)
    }

    return(
        <li className="contact-list">
            <div>
                <p className="name">{name}</p>
                <p className="number">{number}</p>
            </div>
            <div className="icons">
                {isFav? <AiFillStar onClick={changeFav} className="icon" size={18}/> : <AiOutlineStar onClick={changeFav} className="icon" size={18}/>}
                <FcEmptyTrash onClick={deleteContact} className="icon" size={19} />
            </div>
        </li>
    )
}

export default Contact