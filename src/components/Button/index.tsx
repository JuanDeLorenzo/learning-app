import React, {ReactNode,ButtonHTMLAttributes} from 'react'
import {cva, VariantProps} from "class-variance-authority";


const buttonVariant = cva(['w-full sm:w-fit','rounded-lg '],{
    variants:{
        variant:{
            standard:[
                'bg-primary-700 text-white',
                'hover:bg-primary-100 hover:text-white',
                'disabled:bg-primary-300 disabled:text-primary-900',
            ],
            reject:[
                'bg-red-100 text-white',
                'hover:sm-red-300 hover:text-darkWhite-100',
            ],
            accept: [
                "bg-blue-100 text-white",
                "hover:sm-blue-300 hover:text-darkWhite-100",
            ]
        },
        size:{
            small:['px-4 py-2 text-xs'],
            medium:['px-4 py-3 text-sm'],
            large:['px-4 py-3 text-base'],
        }
    },
    defaultVariants:{
        variant:'standard',
        size:'large'
    }
})

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariant>{

}

const Button = ({variant,size, ...rest}:ButtonProps) => {
    return <button className={buttonVariant({size, variant})} {...rest}/>
}


// interface ButtonProps {
//     variant?: 'outlined' | 'fulfilled' | 'ghost' | 'white'
//     size?: string
//     children: ReactNode
// }
//
// const disabled = 'disabled:bg-grey-300 disabled:text-grey-700'
//
// const Button = ({variant,size='medium',children}:ButtonProps) => {
// return(<button className={'bg-primary-500 text-grey-700 py-3 px-4 rounded-lg hover:bg-blue-500 disabled:bg-green-300 ' + disabled}>{
//     children
// }</button>)
// }
export default Button