import React, { useState, useEffect } from 'react'

type Props = {
  num: number
  max: number
  form: React.Dispatch<React.SetStateAction<number>>
}

export default function index({ num, max, form }: Props) {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    setWidth((max - 1) * 86)
    form((max - 1) * 86)
  }, [max])

  return (
    <div className=" flex items-center justify-center w-full">
      <div style={{ width: `${width}px` }} className="relative">
        <hr className="w-full border-t-[2px] border-dashed border-[#050966] absolute top-0 left-0" />
        <div className="flex items-center justify-start absolute top-[-9px] left-0">
          {Array.from(Array(max), (e, i) => {
            return (
              <div
                key={i}
                className={
                  i !== 0
                    ? i + 1 === num
                      ? ' border-2 border-solid border-[#040765] rounded-[50%] bg-[#FFC000]  w-[18px] h-[18px] ml-[66px]'
                      : num > i + 1
                      ? ' border-2 border-solid border-[#040765] rounded-[50%] bg-[#040765]  w-[18px] h-[18px] ml-[66px]'
                      : ' border-2 border-solid border-[#040765] rounded-[50%] bg-white  w-[18px] h-[18px] ml-[66px]'
                    : i + 1 === num
                    ? ' border-2 border-solid border-[#040765] rounded-[50%] bg-[#FFC000]  w-[18px] h-[18px] '
                    : num > i + 1
                    ? ' border-2 border-solid border-[#040765] rounded-[50%] bg-[#040765]  w-[18px] h-[18px] '
                    : ' border-2 border-solid border-[#040765] rounded-[50%] bg-white  w-[18px] h-[18px] '
                }
              >
                {' '}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
