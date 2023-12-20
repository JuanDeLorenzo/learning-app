import React, {ButtonHTMLAttributes, ReactNode} from 'react'
import {cva, VariantProps} from "class-variance-authority";
import completed from "../../../Assets/Module Symbols/Completed.png"
import play from "../../../Assets/Module Symbols/Video.png"
import book from "../../../Assets/Module Symbols/Book.png"
import exam from "../../../Assets/Module Symbols/Quiz.png"

const classVariant = cva([],{
    variants:{
        variant:{
            standard:[
                'w-full h-16 px-4 bg-greyscale-200 rounded-lg items-center gap-1.5 flex justify-between',
            ]
        }
    },
    defaultVariants:{
        variant:'standard'
    }
})

export interface ClassProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof classVariant>{
    children?: ReactNode;
    lesson?: string;
    title?: string;
    time?: string;
    finished?: boolean;
    icon?: "video"|"lecture"|"quiz";
}

const Class = ({variant, lesson="00", title="Class", time="0:00", finished=false, icon="video", ...rest}:ClassProps) => {
    return <button className={classVariant({variant})} {...rest}>
        <div className="justify-center items-center gap-4 flex">
            <div className="text-center text-typography-class text-title font-title">
                {lesson}
            </div>
            <div className="flex-col items-start inline-flex">
                <div className="w-full h-full text-typography-600 text-body font-body text-left">
                    {title}
                </div>
                <div className="text-typography-500 text-labelXS font-labelXS">
                    {time}
                </div>
            </div>
        </div>
        <div className="w-[35px] h-9 pr-[0.21px] pb-[0.01px] rounded-3xl flex-col justify-center items-center inline-flex">
            {finished ?
                    <img src={completed} alt={"icon"}/>
                :
                <div>
                    {icon === 'video' ?
                        <img src={play} alt={"icon"}/>
                        :
                        <></>
                    }
                    {icon === 'lecture' ?
                        <img src={book} alt={"icon"}/>
                        :
                        <></>
                    }
                    {icon === 'quiz' ?
                        <img src={exam} alt={"icon"}/>
                        :
                        <></>
                    }
                </div>
            }
        </div>
    </button>
}

export default Class