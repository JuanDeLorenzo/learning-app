import React, {ReactNode,ButtonHTMLAttributes} from 'react'
import {cva, VariantProps} from "class-variance-authority";
import profile from "../../Assets/Profile.jpg";


const profileVariant = cva(['w-36 sm:w-fit','rounded-lg '],{
    variants:{
        variant:{
            profile:[
                'w-[108px] h-[143px] p-2 bg-primary-anotherText rounded-2xl flex-col justify-start items-center gap-2 inline-flex relative group',
                'hover:bg-primary-notifHover',
            ],
            module: [
                'w-[360px] h-[82px] px-3.5 py-[7px] bg-primary-anotherText rounded-3xl justify-start items-center gap-2.5 inline-flex relative group pr-24',
                'hover:bg-primary-notifHover',
            ]
        }
    },
    defaultVariants:{
        variant:'profile'
    }
})

export interface NotificationProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof profileVariant>{
    title?: string;
    image?: string;
    notifications?: number;
}

const Notification = ({variant,title="Notification", image=profile, notifications= 0, ...rest}:NotificationProps) => {
    const isModuleVariant = variant === 'module';

    return <button className={profileVariant({variant})} {...rest}>
        {isModuleVariant? <></>: <img className="w-[90px] h-[90px] rounded-[45px]" src={image} alt={"profile picture"}/>}
        {isModuleVariant?
            <div className="text-black-pure text-[31px] font-normal font-['Kumbh Sans']">{title}</div>
            :
            <div className="w-[92px] h-[29px] text-center text-black-pure text-xs font-normal font-['Kumbh Sans']">
                {title}
        </div>
        }
        {(notifications <= 0) ?
            <></> :

            (isModuleVariant?
                    <div
                        className="w-[25px] h-[25px] right-0 top-0 -mr-3 absolute bg-red-notification rounded-full shadow text-white-pure text-lg font-normal font-['League Spartan'] group-hover:bg-red-notifHover">
                        {notifications}
                    </div>
                    :
                    <div
                        className="w-[24.07px] h-[24.07px] right-0 -mr-3 top-28 absolute bg-red-notification rounded-full shadow text-center text-white-pure text-lg font-normal font-['League Spartan'] group-hover:bg-red-notifHover">
                        {notifications}
                    </div>
            )
        }
    </button>
}
export default Notification