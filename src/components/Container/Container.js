import React from 'react'

const Container = (props) => {
    return (
        <div className="container">
            {props.gameScreen}
            {props.children}
        </div>
    )
}

export default Container