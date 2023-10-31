import React, {ReactNode,ButtonHTMLAttributes} from 'react'
import {cva, VariantProps} from "class-variance-authority";


const buttonVariant = cva([],{
    variants:{
        variant:{
            standard:[
                'bg-primary-700 text-white rounded-3xl w-full',
                'hover:bg-primary-100 hover:text-white rounded-3xl',
            ],
            reject:[
                'bg-red-100 text-white rounded-lg w-16',
                'hover:bg-red-300 hover:text-white-100 rounded-full',
            ],
            accept: [
                "bg-blue-100 text-white rounded-lg w-16",
                "hover:bg-blue-300 hover:text-white-100 rounded-full",
            ],
            text: [
                "textButton text-blue-700",
                "hover: textButton hover:text-blue-900 hover:font-bold",
            ],
            send:[
                "bg-blue-200 rounded-full h-10 w-10",
                "hover:bg-blue-800 hover:rounded-full hover:h-10 hover:w-10",
            ],
            back:[
                "textButton justify-center",
                "hover: textButton hover:justify-center hover:outline-black",
            ],
        },
        size:{
            tiny: ['px-1 py-1 text-xs'],
            small:['px-5 py-1 text-xs'],
            medium:['px-4 py-3 text-sm'],
            large:['px-12 py-1 text-lg'],
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
// //     variant?: 'outlined' | 'fulfilled' | 'ghost' | 'white'
// //     size?: string
// //     children: ReactNode
// // }
// //
// // const disabled = 'disabled:bg-grey-300 disabled:text-grey-700'
// //
// // const Button = ({variant,size='medium',children}:ButtonProps) => {
// // return(<button className={'bg-primary-500 text-grey-700 py-3 px-4 rounded-lg hover:bg-blue-500 disabled:bg-green-300 ' + disabled}>{
// //     children
// // }</button>)
// // }
export default Button