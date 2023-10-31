import React, {ReactNode} from 'react'
import {cva, VariantProps} from "class-variance-authority";

const classVariant = cva(['w-full sm:w-fit','rounded-lg '],{
    variants:{
        variant:{
            standard:[
                'bg-white-200 h-10 w-full flex rounded-0',
                'hover:bg-white-500 hover:shadow-lg'
            ]
        }
    },
    defaultVariants:{
        variant:'standard'
    }
})

export interface ClassProps extends VariantProps<typeof classVariant>{
    children?: ReactNode;
}

const Class = ({variant,...rest}:ClassProps) => {
    return <button className={classVariant({variant})} {...rest}>

    </button>
}

export default Class