import React, {ReactNode} from 'react'
import {cva, VariantProps} from "class-variance-authority";

const inputVariant = cva([],{
    variants:{
        variant:{
            search:[
                'w-full h-[50px] p-2.5 bg-greyscale-200 text-primary-input text-typography-500 text-label font-label rounded-3xl shadow justify-start items-center gap-2.5 inline-flex',
            ],
            data:[
                'w-full h-[56.57px] p-2.5 rounded-lg border border-typography-500 justify-start items-center inline-flex text-center text-typography-500 text-body font-body'
            ],
            error:[
                'w-full h-[56.57px] p-2.5 rounded-lg border border-answer-error justify-start items-center inline-flex text-center text-typography-500 text-body font-body'
            ],
            profile:[
                'w-full h-[47px] px-2.5 py-[3px] bg-greyscale-600 bg-opacity-50 rounded-2xl justify-start items-center gap-3.5 inline-flex text-typography-600 text-label font-label leading-snug'
            ],
            message:[
                'w-full h-[49.57px] pl-[16.19px] pr-[15.17px] pt-[6.07px] pb-[5.06px] bg-greyscale-200 rounded-[48px] justify-center items-center inline-flex text-typography-600 text-body font-body'
            ]
        }
    },
    defaultVariants:{
        variant:'search'
    }
})

export interface InputProps extends VariantProps<typeof inputVariant>{
    children?: ReactNode;
    startIcon?: string;
    endIcon?: string;
    placeholder?: string;
}

const Input = ({ variant, startIcon="empty", endIcon="empty", placeholder="Placeholder", ...rest }: InputProps) => {
    return <div className={inputVariant({variant})} {...rest}>
        {startIcon === 'empty' ?
            <></>
            :
            (
                <div>
                    <img src={startIcon} alt={"start icon"}/>
                </div>
            )}
        <input placeholder={placeholder} className="w-full border-none focus:outline-none bg-transparent"/>
        {endIcon === 'empty' ?
            <></>
            :
            (
            <div>
                <button>
                    <img src={endIcon} alt={"end icon"}/>
                </button>
            </div>
        )}
    </div>
}

export default Input