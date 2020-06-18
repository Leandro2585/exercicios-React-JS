import React from 'react'

export function childrenWithProps(props){
    return React.Children.map(props.children, child => {

        React.cloneElement(child, {
        ...props, ...props.child.props
        })
    })
}