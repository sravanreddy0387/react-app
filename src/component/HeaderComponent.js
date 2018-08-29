import React from 'react'

const HeaderComponent = ({ header, subHeader }) => {
    return (
        <div>
            <h1>{header}</h1>
            <p>{subHeader}</p>
        </div>
    )
}


export default HeaderComponent