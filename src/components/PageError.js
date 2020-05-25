import React from 'react'

export default function PageError() {
    return (
        <div className="PageError">
            {this.props.error.message}
        </div>
    )
}
