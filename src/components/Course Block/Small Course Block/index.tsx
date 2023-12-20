import React, {ButtonHTMLAttributes, ReactNode} from 'react'
import {cva, VariantProps} from "class-variance-authority";
import image from "../../../Assets/Picture.jpg";

const blockVariant = cva(['rounded-lg '],{
    variants:{
        variant:{
            small:[
                'bg-primary-600 text-typography-400 w-[173px] h-[129px] rounded-lg flex-col group justify-center items-center inline-flex',
            ]
        }
    },
    defaultVariants:{
        variant:'small',
    }
})

export interface BlockProps extends ButtonHTMLAttributes<HTMLButtonElement>,  VariantProps<typeof blockVariant>{
    children?: ReactNode;
    picture?: string;
    course?: string;
    notifications?: number;
}

const Block = ({variant, picture=image, course="course", notifications=0,...rest}:BlockProps) => {
    return <button className={blockVariant({variant})} {...rest}>
        <img className="w-[173px] h-[99px] rounded-md" src={picture} alt={"picture"}/>
        {(notifications > 0)?
        <div className="w-[24.07px] h-[24.07px] text-center items-center justify-center absolute bg-red-notification rounded-full text-lg font-normal font-['League Spartan'] -mr-44 mt-16 group-hover:bg-red-notifHover">
            <span> {notifications} </span>
        </div>: <div/>}
        <div className="w-40 h-[30px] text-[15px] text-label font-label py-1">{course}</div>
    </button>
}

export default Block