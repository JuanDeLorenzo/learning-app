import React, {ReactNode,ButtonHTMLAttributes} from 'react'
import {cva, VariantProps} from "class-variance-authority";

const pointerVariant = cva([],{
    variants:{
        variant:{
            unreached:[
                'bg-primary-marker rounded-full h-5 w-5 flex items-center justify-center text-primary-marker',
            ],
            reached:[
                'bg-pink-marker rounded-full h-5 w-5 flex items-center justify-center text-pink-marker',
            ],
            doing:[
                'bg-pink-marker rounded-full h-7 w-7 flex items-center justify-center text-pink-marker',
            ]
        }
    },
    defaultVariants:{
        variant:'unreached'
    }
})

export interface PointerProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof pointerVariant>{

}

const Marker = ({variant,...rest}:PointerProps) => {
    return <button className={pointerVariant({variant})} {...rest}>
        1
    </button>
}

export default Marker