import React from 'react'

export default function Header({answered, total}) {
    return (
        <div className="flex justify-between">
            <div className="text-white">a</div>
            <div className="text-white">{`${answered} / ${total}`}</div>
        </div>
    )
}
