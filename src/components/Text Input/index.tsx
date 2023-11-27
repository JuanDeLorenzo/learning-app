import React, {ReactNode} from 'react'
import {cva, VariantProps} from "class-variance-authority";

const inputVariant = cva([],{
    variants:{
        variant:{
            search:[
                'w-[269px] h-[50px] p-2.5 bg-white-input text-primary-input text-stone-500 text-[15px] font-medium font-[\'SF Pro Display\'] rounded-3xl shadow justify-start items-center gap-2.5 inline-flex',
            ],
            data:[
                'w-[329px] h-[56.57px] p-2.5 rounded-lg border border-primary-data justify-start items-center inline-flex text-center text-primary-data text-lg font-normal font-[\'Kumbh Sans\']'
            ],
            error:[
                'w-[329px] h-[56.57px] p-2.5 rounded-lg border border-red-error justify-start items-center inline-flex text-center text-primary-data text-lg font-normal font-[\'Kumbh Sans\']'
            ],
            profile:[
                'w-[308px] h-[47px] px-2.5 py-[3px] bg-primary-edit bg-opacity-10 rounded-2xl justify-start items-center gap-3.5 inline-flex text-black-pure text-[17px] font-normal font-[\'Kumbh Sans\'] leading-snug'
            ],
            message:[
                'w-[342.96px] h-[49.57px] pl-[16.19px] pr-[15.17px] pt-[6.07px] pb-[5.06px] bg-white-pure rounded-[48px] justify-center items-center inline-flex text-black-pure text-xl font-normal font-[\'Kumbh Sans\']'
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