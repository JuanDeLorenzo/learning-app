import React, {ReactNode} from 'react'
import {cva, VariantProps} from "class-variance-authority";

const barVariant = cva(['rounded-lg '],{
    variants:{
        variant:{
            classic:[
                'bg-white-200 px-4 py-2 text-primary-800 flex justify-between',
            ],
        }
    },
    defaultVariants:{
        variant:'classic',
    }
})

export interface BarProps extends VariantProps<typeof barVariant> {
    children?: ReactNode;
}

const BottomBar = ({variant, ...rest}:BarProps) => {
    return <div className={barVariant({variant})} {...rest}/>
}

export default BottomBar