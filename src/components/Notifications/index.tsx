import React, {ReactNode,ButtonHTMLAttributes} from 'react'
import {cva, VariantProps} from "class-variance-authority";
import profile from "../../Assets/Profile.jpg";


const profileVariant = cva(['w-36 sm:w-fit','rounded-lg '],{
    variants:{
        variant:{
            profile:[
                'w-[108px] h-[147px] p-2 bg-primary-500 rounded-2xl flex-col justify-start items-center gap-2 inline-flex relative',
            ],
            module: [
                'w-full h-[82px] px-3.5 py-[7px] bg-primary-500 rounded-3xl justify-start items-center gap-2.5 inline-flex relative pr-24',
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
            <div className="w-full text-typography-600 text-display font-display">{title}</div>
            :
            <div className="w-[92px] h-[29px] text-center text-typography-600 text-labelXS font-labelXS pb-2">
                {title}
        </div>
        }
        {(notifications <= 0) ?
            <></> :

            (isModuleVariant?
                    <div
                        className="w-[25px] h-[25px] right-0 top-0 -mr-3 absolute bg-notification-notification rounded-full shadow text-typography-400 text-label font-label">
                        {notifications}
                    </div>
                    :
                    <div
                        className="w-[24.07px] h-[24.07px] right-0 -mr-4 top-28 absolute bg-notification-notification rounded-full shadow text-center text-typography-400 text-label font-label">
                        {notifications}
                    </div>
            )
        }
    </button>
}
export default Notification