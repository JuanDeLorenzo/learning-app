import React, {ReactNode} from 'react'
import profile from "../../../Assets/Profile.jpg";

export interface TeacherProps{
    children?: ReactNode;
    name?: string;
    picture?: string;
}

const Teacher = ({name="Teacher", picture=profile,...rest}:TeacherProps) => {

    return <div className="w-full h-[30px] items-center gap-1.5 inline-flex">
        <img className="w-[28.20px] h-7 rounded-[45px] shadow" src={picture} alt="User"/>
        <div className="text-black-pure text-2xl font-medium font-['Kumbh Sans']">{name}</div>
    </div>
}
export default Teacher