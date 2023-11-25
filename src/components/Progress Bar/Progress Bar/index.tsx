import React, {ReactNode,ButtonHTMLAttributes} from 'react'
import {cva, VariantProps} from "class-variance-authority";
import Marker from "../Markers";


export interface PointerProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    classes?: number;
    position?: number;
}

const Progress = ({classes=3, position=1,...rest}:PointerProps) => {
    let distance = (8 + ((position-1) * (264/(classes-1))));
    if (classes === position){
        distance = ((position-1) * (264/(classes-1)));
    }
    return <div className="items-center flex">
    <div className="h-[3px] rounded-[49.37px] bg-primary-1000 relative" style={{ width: `272px` }}>
        <div className="h-[3px] absolute rounded-[49.37px] bg-pink-200 top-0" style={{ width: `${distance}px` }}></div>
        <div className="flex justify-between items-center absolute w-full -mt-3 px-2">
            {[...Array(classes)].map((_, i) => {
                if (i+1 < position) {
                    return <Marker variant="reached" />;
                } else if (i+1 === position) {
                    return <Marker variant="doing" />;
                } else {
                    return <Marker/>;
                }
            })}
        </div>
    </div>
</div>
}

export default Progress