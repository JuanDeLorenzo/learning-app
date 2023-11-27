import {cva, VariantProps} from "class-variance-authority";
import React, {ButtonHTMLAttributes, ReactNode} from "react";
import image from "../../../Assets/Picture.jpg";

const categoryVariant = cva(['rounded-lg '],{
    variants:{
        variant:{
            answer:[
                'w-[387px] h-[45px] pl-6 py-[5px] bg-zinc-300 rounded-3xl items-center inline-flex text-justify text-black text-xl font-normal font-[\'Kumbh Sans\']',
                'hover:bg-primary-categoryHover',
            ],
            correct:[
                'w-[387px] h-[45px] pl-5 py-[5px] bg-zinc-300 rounded-3xl items-center inline-flex text-justify border-4 border-green-400 text-black text-xl font-normal font-[\'Kumbh Sans\']',
            ],
            wrong:[
                'w-[387px] h-[45px] pl-5 py-[5px] bg-zinc-300 rounded-3xl items-center inline-flex text-justify border-4 border-red-400 text-black text-xl font-normal font-[\'Kumbh Sans\']',
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