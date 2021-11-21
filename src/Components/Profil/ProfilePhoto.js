import React from 'react'
import cat from '../../assests/hamadihk.jpg'
function ProfilePhoto() {
    return (
        <div className="poo">
            <img className="cont" src={cat} alt="gatous" style={{height:'300px',width:'400px',borderRadius:'50%',marginLeft:'30px',paddingTop:'10px'}} />
        </div>
    )
}

export default ProfilePhoto
