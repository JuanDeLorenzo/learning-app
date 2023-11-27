import React, {ReactNode,ButtonHTMLAttributes} from 'react'
import {cva, VariantProps} from "class-variance-authority";
import book from "../../../Assets/book-open.png";
import puzzle from "../../../Assets/puzzle.png";
import timer from "../../../Assets/timer.png";

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
                'bg-green-lesson w-[99px] h-[129px] px-[17px] py-3 rounded-2xl shadow flex-col justify-center items-start gap-2.5 inline-flex font-[\'Kumbh Sans\']',
            ],
            quizzes:[
                'bg-green-quizzes w-[99px] h-[129px] px-[17px] py-3 rounded-2xl shadow flex-col justify-center items-start gap-2.5 inline-flex font-[\'Kumbh Sans\']',
            ],
            hours:[
                'bg-orange-time w-[99px] h-[129px] px-[17px] py-3 rounded-2xl shadow flex-col justify-center items-start gap-2.5 inline-flex font-[\'Kumbh Sans\']'
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
        <p className="text-center text-black-pure text-2xl font-medium ">{quantity}</p>
        <p className="text-center text-primary-input text-lg font-normal">{title}</p>
    </div>
}
export default Details