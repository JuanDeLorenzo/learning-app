import {Meta, StoryObj} from "@storybook/react";
import Pointer from "../Progress Bar/index";
import Class from "./index"
import React from "react";
import completed from "../../Assets/Completed.png"
import video from "../../Assets/Video.png"
import book from "../../Assets/Book.png"
import quiz from "../../Assets/Quiz.png"

const meta: Meta<typeof Class> ={
    title:'Module',
    component:Class,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['classic'],
            control:{type:'select'},
            defaultValue:'standard'
        }
    }
}

export default meta

type Story = StoryObj<typeof Class>

export const Default: Story = {
    name:'Default',
    render: (args) => <div className='bg-white-200 w-64 rounded items-center p-2'>
        <div className='pb-2'>
            <p className='text-large'>Module 1</p>
            <p className='text-small'>2 videos, 1 lecture and 1 quiz</p>
        </div>
        <Class>
            <p className='left-0 text-large text-green-200'>01</p>
            <div className='px-2'>
                <p className='text-large'>Welcome to UI Design</p>
                <p className='text-small align-left'>2:30</p>
            </div>
            <img src={completed} alt="completed" className="max-h-10 max-w-10 px-1 right-0"/>
        </Class>
        <div className='py-1'></div>
        <Class>
            <p className='left-0 text-large text-green-200'>02</p>
            <div className='px-2'>
                <p className='text-large'>History of UI Design</p>
                <p className='text-small align-left'>1:30</p>
            </div>
            <img src={video} alt="video" className="max-h-10 max-w-10 px-1 right-0"/>
        </Class>
        <div className='py-1'></div>
        <Class>
            <p className='left-0 text-large text-green-200'>03</p>
            <div className='px-2'>
                <p className='text-large'>Techniques UI Design</p>
                <p className='text-small align-left'>8 pages</p>
            </div>
            <img src={book} alt="book" className="max-h-10 max-w-10 px-1 right-0"/>
        </Class>
        <div className='py-1'></div>
        <Class>
            <p className='left-0 text-large text-green-200'>04</p>
            <div className='px-2'>
                <p className='text-large'>Final Test</p>
                <p className='text-small align-left'>7 questions</p>
            </div>
            <img src={quiz} alt="quiz" className="max-h-10 max-w-10 px-1 right-0"/>
        </Class>
    </div>
}

export const InLesson: Story = {
    name:'In Lesson',
    render: (args) => <div className='bg-white-200 w-64 rounded items-center p-2'>
        <div className="flex items-center py-2 transform translate-x-9">
            <div className="h-1 bg-primary-1000 w-40 rounded-full relative">
                <div className="h-1 bg-pink-200 w-14 absolute rounded-full top-0"></div>
                <div className="flex justify-between items-center absolute w-full px-2">
                    <div className="relative transform -translate-y-1/2">
                            <Pointer variant="reached" />
                    </div>
                    <div className="relative transform -translate-y-1/3">
                        <Pointer variant="doing" />
                    </div>
                    <div className="relative transform -translate-y-1/2">
                        <Pointer variant="unreached" />
                    </div>
                    <div className="relative transform -translate-y-1/2">
                        <Pointer variant="unreached" />
                    </div>
                </div>
            </div>
        </div>
        <div className='py-2'>
            <p className='text-large'>Module 1</p>
            <p className='text-small'>2 videos, 1 lecture and 1 quiz</p>
        </div>
        <Class>
            <p className='left-0 text-large text-green-200'>01</p>
            <div className='px-2'>
                <p className='text-large'>Welcome to UI Design</p>
                <p className='text-small align-left'>2:30</p>
            </div>
            <img src={completed} alt="completed" className="max-h-10 max-w-10 px-1 right-0"/>
        </Class>
        <div className='py-1'></div>
        <Class>
            <p className='left-0 text-large text-green-200'>02</p>
            <div className='px-2'>
                <p className='text-large'>History of UI Design</p>
                <p className='text-small align-left'>1:30</p>
            </div>
            <img src={video} alt="video" className="max-h-10 max-w-10 px-1 right-0"/>
        </Class>
        <div className='py-1'></div>
        <Class>
            <p className='left-0 text-large text-green-200'>03</p>
            <div className='px-2'>
                <p className='text-large'>Techniques UI Design</p>
                <p className='text-small align-left'>8 pages</p>
            </div>
            <img src={book} alt="book" className="max-h-10 max-w-10 px-1 right-0"/>
        </Class>
        <div className='py-1'></div>
        <Class>
            <p className='left-0 text-large text-green-200'>04</p>
            <div className='px-2'>
                <p className='text-large'>Final Test</p>
                <p className='text-small align-left'>7 questions</p>
            </div>
            <img src={quiz} alt="quiz" className="max-h-10 max-w-10 px-1 right-0"/>
        </Class>
    </div>
}