import React, {ReactNode,ButtonHTMLAttributes} from 'react'
import {cva, VariantProps} from "class-variance-authority";


const categoryVariant = cva(['rounded-lg '],{
    variants:{
        variant:{
            standard:[
                'bg-primary-200 relative text-black-900 rounded-full h-24 w-24 rounded-lg flex flex-col items-center text-large',
                'hover:bg-primary-400',
            ]
        }
    },
    defaultVariants:{
        variant:'standard'
    }
})

export interface CategoryProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof categoryVariant>{

}

const Category = ({variant,...rest}:CategoryProps) => {
    return <button className={categoryVariant({variant})} {...rest}/>
}
export default Category