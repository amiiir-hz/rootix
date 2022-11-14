import React from 'react'

type Props = { data: string }

function index({ data }: Props) {
  return (
    <div className="flex items-center  justify-center mx-auto mt-[12px] leading-[20px]">
      <div className="h-[1.5px] flex-1 bg-[#5F5E62]"></div>
      <h2 className="px-[12px] text-[#5F5E62] text-[14px]  font-medium ">
        {data}
      </h2>
      <div className="h-[1.5px] flex-1 bg-[#5F5E62]"></div>
    </div>
  )
}

export default index
