import React, {ReactNode} from 'react'
import {cva, VariantProps} from "class-variance-authority";

const searchVariant = cva([],{
    variants:{
        variant:{
            standard:[
                'bg-white-300 rounded-full h-10 border-opacity-0 px-2 focus:outline-none focus:ring-0',
            ]
        }
    },
    defaultVariants:{
        variant:'standard'
    }
})

export interface SearchProps extends VariantProps<typeof searchVariant>{
    children?: ReactNode;
}

const Search = ({variant,...rest}:SearchProps) => {
    return <input
        type="text"
        placeholder="Search..."
        className={searchVariant({variant})} {...rest}
    />
}

export default Search