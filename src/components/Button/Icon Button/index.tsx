import React, {ButtonHTMLAttributes} from 'react'
import {cva, VariantProps} from "class-variance-authority";
import arrow from "../../../Assets/Icon Button Symbols/Arrow.png"

const buttonVariant = cva([],{
    variants:{
        variant:{
            send:[
                "bg-message-user w-[47px] h-[47px] px-2.5 py-2 rounded-[32px] justify-center items-center inline-flex",
            ],
            icon:[
                "textButton justify-center items-center inline-flex relative"
            ],
            profile:[
                "w-[61px] h-[61px] rounded-[32px] justify-center items-center"
            ],
            close:[
                "w-[30px] h-[30px] bg-primary-500 bg-opacity-20 rounded-[64px] justify-start items-start gap-2.5 inline-flex"
            ]
        }
    },
    defaultVariants:{
        variant:'icon'
    }
})

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariant>{
    image?: string;
}

const Button = ({variant, image = arrow,...rest}:ButtonProps) => {

    return <button className={buttonVariant({variant})} {...rest} >
        <img src={image} alt="Square Button"/>
    </button>
}

export default Button