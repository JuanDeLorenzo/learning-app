import React, {ButtonHTMLAttributes} from 'react'
import {cva, VariantProps} from "class-variance-authority";
import picture from "../../Assets/Picture.jpg";


const categoryVariant = cva(['rounded-lg '],{
    variants:{
        variant:{
            standard:[
                'bg-primary-400 text-typography-500 w-76 h-20 pb-5 rounded-lg shadow flex-col justify-end items-center inline-flex text-neutral-500 text-label font-label',
            ]
        }
    },
    defaultVariants:{
        variant:'standard'
    }
})

export interface CategoryProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof categoryVariant>{
    image?: string;
    category?: string;
}

const Category = ({variant,image=picture,category="category",...rest}:CategoryProps) => {

    return <button className={categoryVariant({variant})} {...rest}>
        <div className="w-10 h-[42px] relative">
            <div className="w-10 h-[42px] left-0 top-0 -mt-5 absolute bg-white-card items-center rounded-md shadow p-1">
                <img src={image} alt="Square Button" className="w-9 h-9" />
            </div>
        </div>
        <div className="w-[76px] h-[30px] text-center px-1">
            {category}
        </div>
    </button>
}
export default Category