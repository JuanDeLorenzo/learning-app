import React, {ReactNode,ButtonHTMLAttributes} from 'react'
import {cva, VariantProps} from "class-variance-authority";

const pointerVariant = cva(['w-full sm:w-fit','rounded-lg '],{
    variants:{
        variant:{
            unreached:[
                'bg-primary-1000 rounded-full h-5 w-5 flex items-center justify-center text-primary-1000',
            ],
            reached:[
                'bg-pink-200 rounded-full h-5 w-5 flex items-center justify-center text-pink-200',
            ],
            doing:[
                'bg-pink-200 rounded-full h-7 w-7 flex items-center justify-center text-pink-200',
            ]
        }
    },
    defaultVariants:{
        variant:'unreached'
    }
})

export interface PointerProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof pointerVariant>{

}

const Pointer = ({variant,...rest}:PointerProps) => {
    return <button className={pointerVariant({variant})} {...rest}>
        1
    </button>
}

export default Pointer