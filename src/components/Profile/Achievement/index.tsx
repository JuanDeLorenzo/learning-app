import React, {ReactNode,ButtonHTMLAttributes} from 'react'
import prize from "../../../Assets/Profile Symbols/Medal.png"

export interface MedalProps{
    children?: ReactNode;
    medal?: string;
    reason?: string;
}

const Achievement = ({medal=prize,reason="Reason",...rest}:MedalProps) => {
    return <div className="w-auto h-[57px] justify-start items-start inline-flex">
        <img className="relative" src={medal} alt={"Medal"}/>
        <div className="px-2 py-[3px] bg-secondary-600 -mt-4 -ml-3 rounded-md justify-center items-center flex text-center text-typography-600 text-label font-label">
            {reason}
        </div>
    </div>
}
export default Achievement