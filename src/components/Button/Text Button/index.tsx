import React, {ButtonHTMLAttributes} from 'react'
import {cva, VariantProps} from "class-variance-authority";


const buttonVariant = cva([],{
    variants:{
        variant:{
            standard:[
                'bg-primary-600 text-typography-400 w-full h-[50px] py-2.5 rounded-3xl justify-center items-center inline-flex text-title font-title',
                'disabled:bg-primary-400 disabled:text-typography-600 disabled:border-2 disabled:border-primary-600'
            ],
            reject:[
                'bg-primary-500 text-typography-600 w-[123px] h-[54px] py-3 rounded-2xl justify-center items-center inline-flex text-title font-title',
            ],
            accept: [
                "bg-primary-400 text-typography-600 w-[123px] h-[54px] py-3 rounded-2xl justify-center items-center inline-flex text-title font-title",
            ],
            text: [
                "textButton text-typography-link underline text-labelXS font-labelXS",
            ],
            edit: [
                "bg-primary-500 text-typography-600 w-[124px] h-10 py-[9px] rounded-xl justify-center items-center inline-flex text-label font-label",
            ],
            video: [
                "w-[108.33px] h-[26.29px] py-[3px] bg-secondary-500 rounded-lg justify-center items-center inline-flex text-typography-600 text-labelXS font-labelXS",
                "disabled:text-typography-400 disabled:bg-primary-600"
            ]
        }
    },
    defaultVariants:{
        variant:'standard'
    }
})

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariant>{

}

const Button = ({variant, ...rest}:ButtonProps) => {
    return <button className={buttonVariant({variant})} {...rest}/>
}
export default Button