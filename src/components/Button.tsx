

import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = {
  buttonType?: string,
  onClick?: () => void,
  children?: ReactNode
  className?: string,
  // className?: React.ButtonHTMLAttributes<HTMLButtonElement>   //--- for cn()
}
export const Button = ({ buttonType, onClick, children, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(`
        h-[45px] w-full border-[none] rounded-[5px] bg-[#473a2b] text-[#fff] text-[16px] cursor-pointer flex justify-center items-center [transion:all_0.25] hover:bg-[#322618]
        ${buttonType === 'secondary' && 'text-[14px] opacity-[0.85]'}`,
        className)}
    >
      {children}
    </button>
  )
}