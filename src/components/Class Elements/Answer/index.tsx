import {cva, VariantProps} from "class-variance-authority";
import React, {ButtonHTMLAttributes, ReactNode} from "react";
import image from "../../../Assets/Picture.jpg";

const categoryVariant = cva(['rounded-lg '],{
    variants:{
        variant:{
            answer:[
                'w-full h-[45px] pl-6 py-[5px] bg-greyscale-400 rounded-3xl items-center inline-flex text-justify text-typography-600 text-body font-body',
            ],
            correct:[
                'w-full h-[45px] pl-5 py-[5px] bg-greyscale-400 rounded-3xl items-center inline-flex text-justify border-4 border-answer-success text-typography-600 text-body font-body',
            ],
            wrong:[
                'w-full h-[45px] pl-5 py-[5px] bg-greyscale-400 rounded-3xl items-center inline-flex text-justify border-4 border-answer-error text-typography-600 text-body font-body',
            ]
        }
    },
    defaultVariants:{
        variant:'answer'
    }
})

export interface AnswerProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof categoryVariant>{
    children?: ReactNode;
    option?: string;
}

const Answer = ({variant,option="x) Option",...rest}:AnswerProps) => {
    return <button className={categoryVariant({variant})} {...rest}>
        {option}
    </button>
}
export default Answer