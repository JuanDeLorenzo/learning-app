import React, {ReactNode} from 'react'
import {cva, VariantProps} from "class-variance-authority";
import image from "../../../Assets/Picture.jpg";
import whitePaper from "../../../Assets/White Lessons.png";
import whiteStar from "../../../Assets/White Rating.png";
import whiteUsers from "../../../Assets/White Users.png";
import whitePaperPressed from "../../../Assets/White Lessons Pressed.png";
import whiteStarPressed from "../../../Assets/White Rating Pressed.png";
import whiteUsersPressed from "../../../Assets/White Users Pressed.png";
import blackPaper from "../../../Assets/Black Lessons.png";
import blackStar from "../../../Assets/Black Rating.png";
import blackUsers from "../../../Assets/Black Users.png";
import blackPaperPressed from "../../../Assets/Black Lessons Pressed.png";
import blackStarPressed from "../../../Assets/Black Rating Pressed.png";
import blackUsersPressed from "../../../Assets/Black Users Pressed.png";

const images = {
    classic: {
        lesson: whitePaper,
        lessonHover: whitePaperPressed,
        star: whiteStar,
        starHover: whiteStarPressed,
        people: whiteUsers,
        peopleHover: whiteUsersPressed,
    },
    white: {
        lesson: blackPaper,
        lessonHover: blackPaperPressed,
        star: blackStar,
        starHover: blackStarPressed,
        people: blackUsers,
        peopleHover: blackUsersPressed,
    },
    search: {
        lesson: whitePaper,
        lessonHover: whitePaperPressed,
        star: whiteStar,
        starHover: whiteStarPressed,
        people: whiteUsers,
        peopleHover: whiteUsersPressed,
    }
}
const blockVariant = cva(['rounded-lg '],{
    variants:{
        variant:{
            classic:[
                'w-[169px] h-[191px] bg-primary-button rounded-lg shadow flex-col inline-flex text-white-pure font-medium font-[\'Kumbh Sans\']"',
                'hover:bg-black-hoverBlock hover:text-white-textHover'
            ],
            white:[
                'w-[169px] h-[191px] bg-white-pure rounded-lg shadow flex-col inline-flex text-primary-blockText font-medium font-[\'Kumbh Sans\']"',
                'hover:bg-primary-hoverBlock hover:text-black-hoverBlockText'
            ],
            search: [
                'w-[354px] h-[115px] bg-primary-button px-2 rounded-lg items-center gap-4 inline-flex shadow text-white-pure font-medium font-[\'Kumbh Sans\']',
                'hover:bg-black-hoverBlock hover:text-white-textHover'
            ]
        }
    },
    defaultVariants:{
        variant:'classic',
    }
})

export interface BlockProps extends  VariantProps<typeof blockVariant>{
    children?: ReactNode;
    picture?: string;
    course?: string;
    classes?: number;
    rating?: number;
    users?: number;
}

const Block = ({variant, picture = image, course="class", classes = 0, users =0, rating=0, ...rest}:BlockProps) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const {
        lesson,
        lessonHover,
        star,
        starHover,
        people,
        peopleHover,
    } = images[variant || "classic"];

    return <button className={blockVariant({variant})} {...rest} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <img className="w-[169px] h-[95px] rounded-md" src={picture} alt={"hello"}/>
        <div className="pl-1 flex-col justify-center items-start flex">
            <p className="text-[15px]">{course}</p>
            <div className="justify-center items-center gap-[7.30px] inline-flex text-[13px]">
                {isHovered? <img src={lessonHover} alt={"lessons"}/> : <img src={lesson} alt={"lessons"}/>}
                {classes} Lessons
            </div>
            <div className="justify-center items-center gap-[7.30px] inline-flex text-[13px]">
                {isHovered? <img src={starHover} alt={"star"}/> : <img src={star} alt={"star"}/>}
                {rating}
            </div>
            <div className="justify-center items-center gap-[7.30px] inline-flex text-[13px]">
                {isHovered? <img src={peopleHover} alt={"users"}/> : <img src={people} alt={"users"}/>}
                {users} k
            </div>
        </div>
    </button>
}

export default Block