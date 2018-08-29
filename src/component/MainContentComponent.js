import React from 'react'

const MainContentComponent = ({ content }) => {
    return (
        <div className='main-content'>
            <h3>{content.contentText}</h3>
        </div>
    )
}

export default MainContentComponent