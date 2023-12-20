import React, {ReactNode} from 'react'
import user from "../../../Assets/Course Content Symbols/user.png";
import star from "../../../Assets/Course Content Symbols/star.png";
import easy from "../../../Assets/Course Content Symbols/easy.png";
import medium from "../../../Assets/Course Content Symbols/medium.png";
import hard from "../../../Assets/Course Content Symbols/hard.png";
import image from "../../../Assets/Picture.jpg";


export interface TitleProps {
    children?: ReactNode;
    name?: string;
    users?: number;
    rating?: number;
    picture?: string;
    difficulty?: 'easy' | 'medium' | 'hard';
}

const CourseTitle = ({name="Course", users=0, rating=0, picture=image, difficulty='easy',...rest}:TitleProps) => {

    return <div className="h-[191px] w-full justify-between items-center inline-flex text-center text-typography-600">
        <div className="flex-col justify-center items-center inline-flex text-display font-display">
            <div className="w-full h-[50px]">
                {name}
            </div>
            <div className="justify-start items-center gap-[11px] inline-flex text-labelXS font-labelXS">
                <div className="w-full pr-[9.61px] pt-[7px] pb-[7.50px] justify-start items-start flex">
                    <div className="w-4 self-stretch justify-center items-center inline-flex">
                        <img src={user} alt="users" className="w-4 h-4 relative flex-col justify-start items-start flex"/>
                    </div>
                    <div>{users}k</div>
                </div>
                <div className="pr-[9.61px] py-1.5 justify-start items-start flex">
                    <div className="w-[19px] h-[19px] justify-center items-center inline-flex">
                        <img src={star} alt="Star"  className="w-[19px] h-[19px] relative flex-col justify-start items-start flex"/>
                    </div>
                    <div>{rating}</div>
                </div>
                <div className="pr-[3.67px] py-[4.46px] justify-center items-center gap-[3.88px] flex">
                    {difficulty === 'easy' ?
                        <>
                            <div className="w-[29.45px] h-[22.09px] justify-center items-center inline-flex">
                                <img src={easy} alt="Wish-List Button" className="w-[29.45px] h-[22.09px] relative"/>
                            </div>
                            <div>Easy
                            </div>
                        </>
                        :
                        <></>
                    }
                    {difficulty === 'medium' ?
                        <>
                            <div className="w-[29.45px] h-[22.09px] justify-center items-center inline-flex">
                                <img src={medium} alt="Wish-List Button" className="w-[29.45px] h-[22.09px] relative"/>
                            </div>
                            <div>Medium
                            </div>
                        </>
                        :
                        <></>
                    }
                    {difficulty === 'hard' ?
                        <>
                            <div className="w-[29.45px] h-[22.09px] justify-center items-center inline-flex">
                                <img src={hard} alt="Wish-List Button" className="w-[29.45px] h-[22.09px] relative"/>
                            </div>
                            <div>Hard
                            </div>
                        </>
                        :
                        <></>
                    }
                </div>
            </div>
        </div>
        <div>
            <img src={picture} alt="Figma Icon" className="w-[180.97px] h-[191px]" />
        </div>
    </div>
}
export default CourseTitle