import React, {ReactNode,ButtonHTMLAttributes} from 'react'
import profile from "../../../Assets/Profile.jpg"

export interface PictureProps{
    children?: ReactNode;
    image?: string;
}

const Profile = ({image=profile,...rest}:PictureProps) => {
    return <div className="w-[123px] h-[123px] bg-zinc-400 rounded-full rounded-full items-center align-center p-2">
        <img className="w-full h-full rounded-full" src={image} alt={"Profile"}/>
    </div>
}
export default Profile