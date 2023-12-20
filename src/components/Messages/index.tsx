import React, {ReactNode,ButtonHTMLAttributes} from 'react'
import {cva, VariantProps} from "class-variance-authority";


const messageVariant = cva(['w-36 sm:w-fit','rounded-lg '],{
    variants:{
        variant:{
            user:[
                'bg-message-user rounded-full min-w-[157.50px] h-auto relative shadow py-1 px-2 text-medium flex-col inline-flex text-typography-400',
            ],
            another:[
                'bg-greyscale-400 text-typography-600 rounded-full min-w-[157.50px] h-auto relative shadow py-1 px-2 text-medium flex-col inline-flex text-left',
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
                    <p className="text-left text-medium pr-5 pt-1 text-label font-label">{message}</p>
                </> :
                <>
                    <div className="flex-col items-center">
                        <p className="pr-5 text-label font-label"><u>{sender}</u></p>
                        <p className="pr-5 text-label font-label">{message}</p>
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
                                <p className="text-message-read text-label font-label text-left">✓✓</p>
                            </div>
                            :
                            <div></div>
                        }
                        {status === 'sent' ?
                            <div>
                                <p className="text-left text-label font-label">✓</p>
                            </div>
                            :
                            <div></div>
                        }
                        {status === 'received' ?
                            <div>
                                <p className="text-left text-label font-label">✓✓</p>
                            </div>
                            :
                            <div></div>
                        }
                    </div>
                    <p className="text-right text-labelXS font-labelXS">{hour}</p>
                </div>
            </>
            :
            <>
                <div>
                    <p className="text-right pb-1 text-labelXS font-labelXS">{hour}</p>
                </div>
            </>
        }
    </div>
}
export default Message