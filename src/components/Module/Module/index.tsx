import React, {ReactNode} from 'react'
import {cva, VariantProps} from "class-variance-authority";
import Progress from "../../Progress Bar/Progress Bar";
import Class, {ClassProps} from "../Class";

const classVariant = cva([],{
    variants:{
        variant:{
            standard:[
                'w-[348px] h-[278px] py-[7px] bg-white-class rounded-3xl flex-col justify-center items-center inline-flex font-[\'Kumbh Sans\']'
            ]
        }
    },
    defaultVariants:{
        variant:'standard'
    }
})

export interface ModuleProps extends VariantProps<typeof classVariant>{
    children?: ReactNode;
    title?: string;
    components?: string;
    progressBar?: React.ReactNode
    classList?: React.ReactNode[];
}

const Module = ({variant, title="Title", components="0 videos, 0 lectures, 0 quizes", progressBar=null, classList=[<Class/>,<Class/>,<Class/>],...rest}:ModuleProps) => {
    return <div className={classVariant({variant})} {...rest}>
        {progressBar != null? <div className="flex items-center py-4 mt-5">
                {progressBar}
        </div>
            :
            <></>
        }
        <div className="w-[348px] h-[66px] px-[15px] py-[7px] flex-col justify-center items-start gap-px flex">
            <div className="text-black-pure text-xl font-semibold">{title}</div>
            <div className="text-primary-blockText text-sm font-normal">{components}</div>
        </div>
        <div className="flex-col justify-center items-center gap-[3px] flex">
            {classList.map((classItem, index) => (
                    classItem
            ))}
        </div>
    </div>
}

export default Module