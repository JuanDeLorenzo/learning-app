import React, {ReactNode} from 'react'
import {cva, VariantProps} from "class-variance-authority";

const blockVariant = cva(['w-full sm:w-fit','rounded-lg '],{
    variants:{
        variant:{
            classic:[
                'bg-primary-700 text-white-300 text-medium rounded-lg',
                'hover:bg-black-100 hover:text-white-100'
            ],
            small:[
                'bg-primary-700 text-white-300 text-medium rounded-lg max-w-xs',
                'hover:bg-black-100 hover:text-white-100'
            ],
            big: [
                'bg-white-300 text-black-200 h-30 w-56 rounded flex items-center relative group',
                'hover:bg-white-400'
            ],
            search: [
                'bg-primary-700 text-white-300 h-30 text-medium rounded flex items-center',
                'hover:bg-black-100 hover:text-white-100'
            ]
        }
    },
    defaultVariants:{
        variant:'classic',
    }
})

export interface BlockProps extends  VariantProps<typeof blockVariant>{
    children?: ReactNode;
}

const Block = ({variant,...rest}:BlockProps) => {
    return <button className={blockVariant({variant})} {...rest}/>
}

export default Block