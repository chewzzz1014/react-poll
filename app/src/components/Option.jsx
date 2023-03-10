import React from 'react'

export default function Option({ text, isBad, handleBtnClick, questionId, optionId }) {
    return (
        <div className='flex-1 mt-5 option'>
            {/* ${isBad ? 'text-red-600' : ''} */}
            <p className={`text-2xl`}>{text}</p>
            <button
                className='rounded-md p-4 px-8 mt-5 bg-gray-900 text-white font-bold text-xl self-center '
                onClick={(e) => handleBtnClick(e, questionId, optionId, isBad)}
            >
                Vote
            </button>
        </div>
    )
}
