import React, {ButtonHTMLAttributes, ReactNode} from 'react'
import {cva, VariantProps} from "class-variance-authority";
import image from "../../../Assets/Picture.jpg";
import whitePaper from "../../../Assets/Course Block Symbols/White Lessons.png";
import whiteStar from "../../../Assets/Course Block Symbols/White Rating.png";
import whiteUsers from "../../../Assets/Course Block Symbols/White Users.png";

const blockVariant = cva(['rounded-lg '],{
    variants:{
        variant:{
            classic:[
                'w-[169px] h-[191px] bg-primary-600 text-typography-400 rounded-lg shadow flex-col inline-flex',
            ],
            search: [
                'w-full h-[115px] bg-primary-600 px-2 rounded-lg items-center gap-4 inline-flex shadow text-typography-400',
            ]
        }
    },
    defaultVariants:{
        variant:'classic',
    }
})

export interface BlockProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof blockVariant>{
    children?: ReactNode;
    picture?: string;
    course?: string;
    classes?: number;
    rating?: number;
    users?: number;
}

const Block = ({variant, picture = image, course="class", classes = 0, users =0, rating=0, ...rest}:BlockProps) => {

    return <button className={blockVariant({variant})} {...rest} >
        <img className="w-[169px] h-[95px] rounded-md" src={picture} alt={"hello"}/>
        <div className="pl-1 flex-col justify-center items-start flex">
            <p className="text-label font-label">{course}</p>
            <div className="justify-center items-center gap-[7.30px] inline-flex text-labelXS font-labelXS">
                <img src={whitePaper} alt={"lessons"}/>
                {classes} Lessons
            </div>
            <div className="justify-center items-center gap-[7.30px] inline-flex text-labelXS font-labelXS">
                <img src={whiteStar} alt={"star"}/>
                {rating}
            </div>
            <div className="justify-center items-center gap-[7.30px] inline-flex text-labelXS font-labelXS">
                <img src={whiteUsers} alt={"users"}/>
                {users} k
            </div>
        </div>
    </button>
}

export default Block