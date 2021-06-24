import React from 'react'

const Faq = ({faq}) => {
    return (
        <div className="flex items-center border-b py-4">
            <span className="flex-1">{faq.title}</span>
            <i className="text-bookmark-purple fas fa-chevron-down cursor-pointer"></i>
          </div>
    )
}

export default Faq
