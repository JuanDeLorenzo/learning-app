import React, {ReactNode,ButtonHTMLAttributes} from 'react'
import {cva, VariantProps} from "class-variance-authority";


const buttonVariant = cva([],{
    variants:{
        variant:{
            standard:[
                'bg-primary-button text-white-pure w-[324px] h-[50px] py-2.5 rounded-3xl justify-center items-center inline-flex text-2xl font-[\'Kumbh Sans\']',
                'hover:bg-primary-hoverButton hover:text-white-hover',
                'disabled:bg-white-pure disabled:text-primary-button disabled:border-2 disabled:border-primary-button'
            ],
            reject:[
                'bg-red-button text-white-pure w-[123px] h-[54px] py-3 rounded-2xl justify-center items-center inline-flex text-2xl font-[\'Kumbh Sans\']',
                'hover:bg-red-buttonHover hover:text-white-hover',
            ],
            accept: [
                "bg-blue-button text-white-pure w-[123px] h-[54px] py-3 rounded-2xl justify-center items-center inline-flex text-2xl font-[\'Kumbh Sans\']",
                "hover:bg-blue-buttonHover hover:text-white-hover",
            ],
            text: [
                "textButton text-blue-text text-sm font-semibold font-['Kumbh Sans']",
                "hover:textButton hover:text-blue-textHover hover:font-bold",
            ],
            underline: [
                "textButton text-black text-base font-medium font-['Kumbh Sans'] underline",
                "hover:font-bold",
            ],
            edit: [
                "bg-primary-edit bg-opacity-20 w-[124px] h-10 py-[9px] rounded-xl justify-center items-center inline-flex text-[17px] font-normal font-['Kumbh Sans'] leading-snug\"",
                "hover:bg-blue-profile hover:bg-opacity-20"
            ],
            video: [
                "w-[108.33px] h-[26.29px] py-[3px] bg-pink-button rounded-lg justify-center items-center inline-flex text-black text-[13px] font-semibold font-['SF Pro Display']",
                "hover:text-white-pure hover:bg-primary-button",
                "disabled:text-white-pure disabled:bg-primary-button"
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