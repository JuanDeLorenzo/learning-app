import React, {ReactNode} from 'react'
import home from "../../Assets/Bottom Navbar Symbols/Home.png"
import homeBlack from "../../Assets/Bottom Navbar Symbols/HomeSelected.png"
import courses from "../../Assets/Bottom Navbar Symbols/Courses.png"
import coursesBlack from "../../Assets/Bottom Navbar Symbols/CoursesSelected.png"
import messages from "../../Assets/Bottom Navbar Symbols/Messages.png"
import messagesBlack from "../../Assets/Bottom Navbar Symbols/MessagesSelected.png"

export interface BarProps{
    children?: ReactNode;
    house?: boolean;
    course?: boolean;
    message?: boolean;
}

const BottomBar = ({house = true, course = false, message = false, ...rest}:BarProps) => {
    return <div className="bg-primary-400 w-full px-9 py-2 text-labelXS font-labelXS text-typography-600 flex justify-between">
        <div>
            <button className="items-center">
                {house? <img src={homeBlack} alt="Square Button" className="w-12 h-12" />:
                    <img src={home} alt="Square Button" className="w-12 h-12" />}
            </button>
            <br/>
            Home
        </div>
        <div className="items-center">
            <button className="pl-4">
                {course? <img src={coursesBlack} alt="Square Button" className="w-12 h-12" /> :
                    <img src={courses} alt="Square Button" className="w-12 h-12" />}
            </button>
            <br/>
            My Courses
        </div>
        <div className="items-center">
            <button className="pl-2">
                {message? <img src={messagesBlack} alt="Square Button" className="w-12 h-12" /> :
                    <img src={messages} alt="Square Button" className="w-12 h-12" />}
            </button>
            <br/>
            Messages
        </div>
    </div>
}

export default BottomBar