import React, {ReactNode,ButtonHTMLAttributes} from 'react'
import {cva, VariantProps} from "class-variance-authority";


const messageVariant = cva(['w-36 sm:w-fit','rounded-lg '],{
    variants:{
        variant:{
            user:[
                'bg-blue-200 rounded-full h-auto min-w-40 max-w-md py-1 px-2 text-medium',
            ],
            another:[
                'bg-primary-200 text-black-900 rounded-full h-auto min-w-40 max-w-md py-1 px-2 text-medium text-left',
            ]
        }
    },
    defaultVariants:{
        variant:'user'
    }
})

export interface MessageProps extends VariantProps<typeof messageVariant>{
    children?: ReactNode;
}

const Message = ({variant,...rest}:MessageProps) => {
    return <div className={messageVariant({variant})} {...rest}/>
}
export default Message