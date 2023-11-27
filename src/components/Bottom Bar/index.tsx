import React, {ReactNode} from 'react'
import {cva, VariantProps} from "class-variance-authority";
import home from "../../Assets/Home.png"
import homeBlack from "../../Assets/HomeSelected.png"
import courses from "../../Assets/Courses.png"
import coursesBlack from "../../Assets/CoursesSelected.png"
import messages from "../../Assets/Messages.png"
import messagesBlack from "../../Assets/MessagesSelected.png"

const barVariant = cva(['rounded-lg '],{
    variants:{
        variant:{
            classic:[
                'bg-white-pure px-4 py-2 text-primary-800 flex justify-between',
            ],
        }
    },
    defaultVariants:{
        variant:'classic',
    }
})

export interface BarProps extends VariantProps<typeof barVariant> {
    children?: ReactNode;
    house?: boolean;
    course?: boolean;
    message?: boolean;
}

const BottomBar = ({variant, house = true, course = false, message = false, ...rest}:BarProps) => {
    return <div className={barVariant({variant})} {...rest}>
        <div className="flex flex-col items-center px-4 text-small">
            <button className="items-center">
                {house? <img src={homeBlack} alt="Square Button" className="w-12 h-12" />:
                    <img src={home} alt="Square Button" className="w-12 h-12" />}
                Home
            </button>
        </div>
        <div className="flex flex-col items-center px-10 text-small">
            <button className="items-center">
                {course? <img src={coursesBlack} alt="Square Button" className="w-12 h-12" /> :
                    <img src={courses} alt="Square Button" className="w-12 h-12" />}
                Courses
            </button>
        </div>
        <div className="flex flex-col items-center px-4 text-small">
            <button className="items-center">
                {message? <img src={messagesBlack} alt="Square Button" className="w-12 h-12" /> :
                    <img src={messages} alt="Square Button" className="w-12 h-12" />}
                Messages
            </button>
        </div>
    </div>
}

export default BottomBar