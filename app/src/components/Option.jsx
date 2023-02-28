import React from 'react'

export default function Option({ text, isBad, handleBtnClick }) {
    return (
        <div className='flex-1 mt-5 option'>
            <p className={`text-2xl ${isBad ? 'text-red-600' : ''}`}>{text}</p>
            <button
                className='rounded-md p-4 px-8 mt-5 bg-gray-900 text-white font-bold text-xl self-center '
                onClick={(e) => handleBtnClick(e, isBad)}
            >
                Vote
            </button>
        </div>
    )
}
