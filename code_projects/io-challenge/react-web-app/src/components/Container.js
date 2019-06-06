import React from 'react'

const Container = (props)=> {
    return(
        <div className={`container ${ props.extraClass }`}>
            { props.children }
        </div>
    )
}


export default Container