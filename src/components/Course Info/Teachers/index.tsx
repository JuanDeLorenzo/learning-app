import React, {ReactNode} from 'react'
import profile from "../../../Assets/Profile.jpg";

export interface TeacherProps{
    children?: ReactNode;
    name?: string;
    picture?: string;
}

const Teacher = ({name="Teacher", picture=profile,...rest}:TeacherProps) => {

    return <div className="w-full h-[30px] text-typography-600 text-title font-title items-center gap-1.5 inline-flex">
        <img className="w-[28.20px] h-7 rounded-[45px] shadow" src={picture} alt="User"/>
        <div>{name}</div>
    </div>
}
export default Teacher