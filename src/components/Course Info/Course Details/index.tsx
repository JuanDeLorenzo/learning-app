import React, {ReactNode,ButtonHTMLAttributes} from 'react'
import {cva, VariantProps} from "class-variance-authority";
import book from "../../../Assets/Course Content Symbols/book-open.png";
import puzzle from "../../../Assets/Course Content Symbols/puzzle.png";
import timer from "../../../Assets/Course Content Symbols/timer.png";

const info = {
    lesson: {
        icon: book,
        title: "Lessons",
    },
    quizzes: {
        icon: puzzle,
        title: "Quizzes",
    },
    hours: {
        icon: timer,
        title: "Hours",
    }
}
const courseVariant = cva([''],{
    variants:{
        variant:{
            lesson:[
                'bg-course-lesson w-[99px] h-[129px] px-[17px] py-3 rounded-2xl shadow flex-col justify-center items-start gap-2.5 inline-flex',
            ],
            quizzes:[
                'bg-course-quizzes w-[99px] h-[129px] px-[17px] py-3 rounded-2xl shadow flex-col justify-center items-start gap-2.5 inline-flex',
            ],
            hours:[
                'bg-course-time w-[99px] h-[129px] px-[17px] py-3 rounded-2xl shadow flex-col justify-center items-start gap-2.5 inline-flex'
            ]
        }
    },
    defaultVariants:{
        variant:'lesson'
    }
})

export interface DetailsProps extends VariantProps<typeof courseVariant>{
    children?: ReactNode;
    quantity?: number;
}

const Details = ({variant, quantity=0,...rest}:DetailsProps) => {
    const {
        icon,
        title,
    } = info[variant || "lesson"];

    return <div className={courseVariant({variant})} {...rest}>
        <img src={icon} alt="Book" className="w-[19.77px] h-[29.60px] flex-col justify-center items-center flex"/>
        <p className="text-center text-typography-600 text-title font-title ">{quantity}</p>
        <p className="text-center text-typography-500 text-body font-body">{title}</p>
    </div>
}
export default Details