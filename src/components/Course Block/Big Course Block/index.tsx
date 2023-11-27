import React, {ReactNode} from 'react'
import {cva, VariantProps} from "class-variance-authority";
import image from "../../../Assets/Picture.jpg";

const blockVariant = cva(['rounded-lg '],{
    variants:{
        variant:{
            big: [
                'bg-white-card w-cover h-[173px] group rounded-lg items-center gap-1 inline-flex',
                'hover:bg-white-cardHover'
            ]
        }
    },
    defaultVariants:{
        variant:'big',
    }
})

export interface BlockProps extends  VariantProps<typeof blockVariant>{
    children?: ReactNode;
    picture?: string;
    course?: string;
    percentage?: number;
}

const Block = ({variant, picture = image, course="class", percentage = 0,...rest}:BlockProps) => {
    return <button className={blockVariant({variant})} {...rest}>
        <div className="px-[11px] w-[203.9px] flex-col gap-2.5 inline-flex">
            <span className="text-center text-zinc-700 text-xl text-black-cardTitle font-medium font-['SF Pro Display'] group-hover:text-black-hoverBlockText">{course}</span>
            <br/>
            <div className="flex-col flex pl-2">
                <span className="text-right text-xs mr-2 text-black-blockText group-hover:text-black-hoverBigText">{percentage}%</span>
                <div className="left-0 relative">
                    <div className="h-[13.79px] w-full absolute bg-gray-300 rounded-[15px] group-hover:bg-gray-700" style={{ width: `164.22px` }}></div>
                    <div className="h-[13.79px] w-full absolute bg-green-progress rounded-[15px] group-hover:bg-green-progressHover" style={{ width: `${(164.22 * percentage/100)}px` }}></div>
                </div>
            </div>
        </div>
        <div>
            <img className="w-[203.9px] h-[173px] rounded-lg" src={picture} alt={"picture"}/>
        </div>
    </button>
}

export default Block