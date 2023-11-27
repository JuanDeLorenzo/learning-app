import React, {ReactNode,ButtonHTMLAttributes} from 'react'
import {cva, VariantProps} from "class-variance-authority";
import arrow from "../../../Assets/Arrow.png"
import hoverArrow from "../../../Assets/ArrowPressed.png"

const buttonVariant = cva([],{
    variants:{
        variant:{
            send:[
                "bg-blue-send w-[47px] h-[47px] px-2.5 py-2 rounded-[32px] justify-center items-center inline-flex",
                "hover:bg-blue-sendHover",
            ],
            icon:[
                "textButton justify-center items-center inline-flex relative",
            ],
            profile:[
                "w-[61px] h-[61px] rounded-[32px] justify-center items-center"
            ],
            close:[
                "w-[30px] h-[30px] bg-primary-edit bg-opacity-20 rounded-[64px] justify-start items-start gap-2.5 inline-flex",
                "hover:bg-blue-profile hover:bg-opacity-20"
            ]
        }
    },
    defaultVariants:{
        variant:'icon'
    }
})

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariant>{
    imageNormal?: string;
    imageHover?: string;
}

const Button = ({variant, imageNormal = arrow, imageHover = hoverArrow,...rest}:ButtonProps) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return <button className={buttonVariant({variant})} {...rest} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        {isHovered? <img src={imageHover} alt="Square Button"/> : <img src={imageNormal} alt="Square Button"/>}
    </button>
}

export default Button