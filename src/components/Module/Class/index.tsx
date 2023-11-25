import React, {ReactNode} from 'react'
import {cva, VariantProps} from "class-variance-authority";
import completed from "../../../Assets/Completed.png"
import play from "../../../Assets/Video.png"
import book from "../../../Assets/Book.png"
import exam from "../../../Assets/Quiz.png"

const classVariant = cva([],{
    variants:{
        variant:{
            standard:[
                'w-[348px] h-16 px-4 bg-white-class rounded-lg items-center gap-1.5 inline-flex font-[\'Kumbh Sans\']',
                'hover:bg-white-pure hover:shadow-lg'
            ]
        }
    },
    defaultVariants:{
        variant:'standard'
    }
})

export interface ClassProps extends VariantProps<typeof classVariant>{
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
            <div className="text-center text-green-classNumber text-2xl font-bold">
                {lesson}
            </div>
            <div className="flex-col items-start inline-flex">
                <div className="w-[215px] text-black-pure text-lg font-medium text-left">
                    {title}
                </div>
                <div className="text-primary-blockText text-sm font-normal">
                    {time}
                </div>
            </div>
        </div>
            {finished ?
                <div className="w-[35px] h-9 pr-[0.21px] pb-[0.01px] rounded-3xl flex-col justify-center items-center inline-flex">
                    <img src={completed} alt={"icon"}/>
                </div>
                :
                <div className="w-[35px] h-9 pr-[0.21px] pb-[0.01px] rounded-3xl flex-col justify-center items-center inline-flex">
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
    </button>
}

export default Class