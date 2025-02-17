import React, { ComponentProps } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonStyles = cva(["transition-colors"],{
    variants:{
        variant:{
            default:["bg-secondary", "hover:bg-secondary-hover"],
            ghost:["hover:bg-gray-100"]
        },

        size:{
            default:["Irounded", "p-2"],
            icon:["rounded-full","w-10", "h-10", "flex", "items-center", "justify-center", "p-2.5"]
        }
    },
    defaultVariants:{
      variant:"default",
      size:"default"
    }
})

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">


const Button = ({variant,size, className, ...props}: ButtonProps) => {
  return (
    <div>
      <button {...props} 
      className={twMerge(buttonStyles({variant,size}), className)}/>
    </div>
  )
}

export default Button
