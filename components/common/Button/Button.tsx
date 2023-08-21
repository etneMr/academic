import './Button.scss'

import React from 'react'

export const ViewMore = () => {
    return (
        <button className="viewmore">
            View More
        </button>
    )
}


export const ButtonWithIcon = ({ label, icon }) => {
    return (
        <button className='button-with-icon'>
            <div className="text">
                {label}
            </div>
            <div className="icon">
                {icon}
            </div>
        </button>
    )
}