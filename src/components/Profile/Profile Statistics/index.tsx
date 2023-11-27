import React, {ReactNode,ButtonHTMLAttributes} from 'react'
import {cva, VariantProps} from "class-variance-authority";
import courses from "../../../Assets/Enrolled Courses.png";
import completed from "../../../Assets/Completed Courses.png";
import learning from "../../../Assets/Learning Time.png";
import accuracy from "../../../Assets/Accuracy.png";

const info = {
    enrolled: {
        icon: courses,
        title: "Enrolled Courses",
    },
    completed: {
        icon: completed,
        title: "Completed Courses",
    },
    learning: {
        icon: learning,
        title: "Learning Time",
    },
    completion: {
        icon: accuracy,
        title: "Completion Rate",
    }
}

const statisticVariant = cva([''],{
    variants:{
        variant:{
            enrolled:[
                'w-40 h-12 px-[5px] py-1.5 bg-white-statistics rounded-2xl text-blue-enrolled justify-start items-center gap-0.5 inline-flex'
            ],
            completed:[
                'w-40 h-12 px-[5px] py-1.5 bg-white-statistics rounded-2xl text-green-profile justify-start items-center gap-0.5 inline-flex'
            ],
            learning: [
                'w-40 h-12 px-[5px] py-1.5 bg-white-statistics rounded-2xl text-orange-learning justify-start items-center gap-0.5 inline-flex'
            ],
            completion: [
                'w-40 h-12 px-[5px] py-1.5 bg-white-statistics rounded-2xl text-pink-accuracy justify-start items-center gap-0.5 inline-flex'
            ]
        }
    },
    defaultVariants:{
        variant:'enrolled'
    }
})

export interface StatisticProps extends VariantProps<typeof statisticVariant>{
    children?: ReactNode;
    quantity?: string;
}

const Statistics = ({variant, quantity="0",...rest}:StatisticProps) => {
    const {
        icon,
        title,
    } = info[variant || "enrolled"];

    return <div className={statisticVariant({variant})} {...rest}>
        <div className="w-[30.77px] h-[30.77px] relative">
            <img alt={"icon"} src={icon}/>
        </div>
        <div className="flex-col justify-center items-start gap-0.5 inline-flex">
            <div className="w-[19.69px] h-4 text-base font-normal font-['Kumbh Sans']">{quantity}</div>
            <div className="text-black-pure text-[11.08px] font-normal font-['Kumbh Sans']">{title}</div>
        </div>
    </div>
}
export default Statistics