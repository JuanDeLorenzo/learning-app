import React, {ButtonHTMLAttributes, ReactNode, useEffect, useRef, useState} from 'react'
import {cva, VariantProps} from "class-variance-authority";
import image from "../../../Assets/Picture.jpg";

const blockVariant = cva(['rounded-lg '],{
    variants:{
        variant:{
            big: [
                'bg-primary-400 w-cover h-[173px] group rounded-lg items-center gap-1 inline-flex'
            ]
        }
    },
    defaultVariants:{
        variant:'big',
    }
})

export interface BlockProps extends ButtonHTMLAttributes<HTMLButtonElement>,  VariantProps<typeof blockVariant>{
    children?: ReactNode;
    picture?: string;
    course?: string;
    percentage?: number;
}

const Block = ({variant, picture = image, course="class", percentage = 0,...rest}:BlockProps) => {
    const primerDivRef = useRef(null);
    const [anchoPrimerDiv, setAnchoPrimerDiv] = useState(0);

    useEffect(() => {
        if (primerDivRef.current) {
            const ancho = (primerDivRef.current as HTMLElement).getBoundingClientRect().width;
            setAnchoPrimerDiv(ancho);
        }
    }, []);

    return <button className={blockVariant({variant})} {...rest}>
        <div className="px-[11px] w-[203.9px] flex-col gap-2.5 inline-flex">
            <span className="text-center text-zinc-700 text-typography-600 text-body font-body ">{course}</span>
            <br/>
            <div className="flex-col flex pl-2">
                <span className="text-right text-labelXS font-labelXS mr-2 text-typography-500">{percentage}%</span>
                <div className="left-0 relative">
                    <div ref={primerDivRef} className="h-[13.79px] w-full absolute bg-greyscale-400 rounded-[15px]"></div>
                    <div className={`h-[13.79px] absolute bg-answer-success rounded-[15px]`} style={{ width: `${(anchoPrimerDiv * (percentage/100))}px` }}></div>
                </div>
            </div>
        </div>
        <div>
            <img className="w-[203.9px] h-[173px] rounded-lg" src={picture} alt={"picture"}/>
        </div>
    </button>
}

export default Block