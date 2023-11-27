import React, {ReactNode,ButtonHTMLAttributes} from 'react'
import {cva, VariantProps} from "class-variance-authority";


const messageVariant = cva(['w-36 sm:w-fit','rounded-lg '],{
    variants:{
        variant:{
            user:[
                'bg-blue-send rounded-full min-w-[157.50px] h-auto relative shadow py-1 px-2 text-medium flex-col inline-flex text-white-pure',
            ],
            another:[
                'bg-primary-anotherText text-black-pure rounded-full min-w-[157.50px] h-auto relative shadow py-1 px-2 text-medium flex-col inline-flex text-left',
            ]
        }
    },
    defaultVariants:{
        variant:'user'
    }
})

export interface MessageProps extends VariantProps<typeof messageVariant>{
    children?: ReactNode;
    status?: 'sent' | 'received' | 'read';
    sender?: string;
    message?: string;
    hour?: string;
}

const Message = ({variant, status='sent', sender="Somebody", message="Hello", hour="00:00",...rest}:MessageProps) => {
    const isUserVariant = variant === 'user';

    return <div className={messageVariant({variant})} {...rest}>
        <div className="flex items-center">
            {isUserVariant ?
                <>
                    <p className="text-left text-medium pr-5 pt-1 text-[15px] font-normal font-['Kumbh Sans']">{message}</p>
                </> :
                <>
                    <div className="flex-col items-center">
                        <p className="pr-5 font-bold text-[15px] font-['Kumbh Sans']"><u>{sender}</u></p>
                        <p className="pr-5 font-normal text-[15px] font-['Kumbh Sans']">{message}</p>
                    </div>
                </>
            }
        </div>
        <div className="h-5"></div>
        {isUserVariant ?
            <>
                <div className="flex justify-between items-center mt-1">
                    <div>
                        {status === 'read' ?
                            <div>
                                <p className="text-green-progress text-left">✓✓</p>
                            </div>
                            :
                            <div></div>
                        }
                        {status === 'sent' ?
                            <div>
                                <p className="text-left">✓</p>
                            </div>
                            :
                            <div></div>
                        }
                        {status === 'received' ?
                            <div>
                                <p className="text-left">✓✓</p>
                            </div>
                            :
                            <div></div>
                        }
                    </div>
                    <p className="text-right text-xs font-normal font-['Kumbh Sans']">{hour}</p>
                </div>
            </>
            :
            <>
                <div>
                    <p className="text-right pb-1 text-xs font-normal font-['Kumbh Sans']">{hour}</p>
                </div>
            </>
        }
    </div>
}
export default Message