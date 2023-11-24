import React, {ReactNode,ButtonHTMLAttributes} from 'react'
import {cva, VariantProps} from "class-variance-authority";
import image from "../../Assets/Picture.jpg";


const categoryVariant = cva(['rounded-lg '],{
    variants:{
        variant:{
            standard:[
                'bg-white-card group text-primary-blockText w-76 h-20 pb-5 rounded-lg shadow flex-col justify-end items-center inline-flex text-neutral-500 text-[15px] font-medium font-[\'Kumbh Sans\']',
                'hover:bg-primary-categoryHover',
            ]
        }
    },
    defaultVariants:{
        variant:'standard'
    }
})

export interface CategoryProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof categoryVariant>{
    imageNormal?: string;
    imageHover?: string;
    category?: string;
}

const Category = ({variant,imageNormal=image,imageHover=image,category="category",...rest}:CategoryProps) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return <button className={categoryVariant({variant})} {...rest} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className="w-10 h-[42px] relative">
            <div className="w-10 h-[42px] left-0 top-0 -mt-5 absolute bg-white-card items-center rounded-md shadow p-1 group-hover:bg-primary-categoryHover">
                {isHovered? <img src={imageHover} alt="Square Button" className="w-9 h-9" /> : <img src={imageNormal} alt="Square Button" className="w-9 h-9" /> }
            </div>
        </div>
        <div className="w-[76px] h-[30px] text-center px-1">
            {category}
        </div>
    </button>
}
export default Category