import React, {ReactNode,ButtonHTMLAttributes} from 'react'
import profile from "../../../Assets/Profile.jpg"

export interface PictureProps{
    children?: ReactNode;
    image?: string;
    name?: string;
}

const Profile = ({image=profile,name="Name",...rest}:PictureProps) => {
    return <div className="w-[123px] h-[157px] flex-col justify-start items-center gap-3.5 inline-flex">
        <div className="w-[123px] h-[123px] bg-greyscale-800 rounded-full rounded-full items-center align-center p-2">
            <img className="w-full h-full rounded-full" src={image} alt={"Profile"}/>
        </div>
        <div className="text-center text-typography-600 text-label font-label">{name}</div>
    </div>
}
export default Profile