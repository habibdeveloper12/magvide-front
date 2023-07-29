import React from 'react'

const BlogPara2 = ({title, title2}) => {
  return (
    <p className="text-sm lg:text-base text-[#2B2B2B] font-inter pb-4"><span className="font-bold text-base lg:text-lg">{title}</span>{ title2}</p>
  )
}

export default BlogPara2