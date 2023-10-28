import React, {ReactNode,ButtonHTMLAttributes} from 'react'
import {cva, VariantProps} from "class-variance-authority";


const profileVariant = cva(['w-full sm:w-fit','rounded-lg '],{
    variants:{
        variant:{
            standard:[
                'bg-primary-200 relative text-black-900 rounded-full rounded-lg p-4 flex flex-col items-center text-small',
                'hover:bg-primary-400',
            ]
        }
    },
    defaultVariants:{
        variant:'standard'
    }
})

export interface ProfileProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof profileVariant>{

}

const Profile = ({variant,...rest}:ProfileProps) => {
    return <button className={profileVariant({variant})} {...rest}/>
}
export default Profile