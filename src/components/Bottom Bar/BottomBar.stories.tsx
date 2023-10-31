import {Meta, StoryObj} from "@storybook/react";
import BottomBar from "./index";
import home from"./Images/Home.png"
import homeBlack from"./Images/HomeSelected.png"
import courses from"./Images/Courses.png"
import coursesBlack from"./Images/CoursesSelected.png"
import messages from"./Images/Messages.png"
import messagesBlack from"./Images/MessagesSelected.png"
import React from "react";
import {IconButton} from "@mui/material";
import darkPen from "../Category/Images/Dark Pen.png";

const meta: Meta<typeof BottomBar> ={
    title:'Bottom Bar',
    component:BottomBar,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['classic'],
            control:{type:'select'},
            defaultValue:'homeSelected'
        }
    }
}

export default meta

type Story = StoryObj<typeof BottomBar>

export const Default: Story = {
    name:'Default',
    render: (args) => <BottomBar {...args}>Button</BottomBar>
}

export const HomeSelected: Story = {
    name:'Home Selected',
    render: (args) => <BottomBar variant={'classic'} {...args}>
        <div className="flex flex-col items-center px-4 text-small">
            <button className="text-3xl">
                <img src={homeBlack} alt="Square Button" className="w-12 h-12" />
                Home
            </button>
        </div>
        <div className="flex flex-col items-center px-10 text-small">
            <button className="text-3xl">
                <img src={courses} alt="Square Button" className="w-12 h-12" />
                Courses
            </button>
        </div>
        <div className="flex flex-col items-center px-4 text-small">
            <button>
                <img src={messages} alt="Square Button" className="w-12 h-12" />
                Messages
            </button>
        </div>
    </BottomBar>
}
export const CoursesSelected: Story = {
    name:'Courses Selected',
    render: (args) => <BottomBar variant={'classic'} {...args}>
        <div className="flex flex-col items-center px-4 text-small">
            <button className="text-3xl">
                <img src={home} alt="Square Button" className="w-12 h-12" />
                Home
            </button>
        </div>
        <div className="flex flex-col items-center px-10 text-small">
            <button className="text-3xl">
                <img src={coursesBlack} alt="Square Button" className="w-12 h-12" />
                Courses
            </button>
        </div>
        <div className="flex flex-col items-center px-4 text-small">
            <button>
                <img src={messages} alt="Square Button" className="w-12 h-12" />
                Messages
            </button>
        </div>
    </BottomBar>
}
export const MessagesSelected: Story = {
    name:'Messages Selected',
    render: (args) => <BottomBar variant={'classic'} {...args}>
        <div className="flex flex-col items-center px-4 text-small">
            <button className="text-3xl">
                <img src={home} alt="Square Button" className="w-12 h-12" />
                Home
            </button>
        </div>
        <div className="flex flex-col items-center px-10 text-small">
            <button className="text-3xl">
                <img src={courses} alt="Square Button" className="w-12 h-12" />
                Courses
            </button>
        </div>
        <div className="flex flex-col items-center px-4 text-small">
            <button>
                <img src={messagesBlack} alt="Square Button" className="w-12 h-12" />
                Messages
            </button>
        </div>
    </BottomBar>
}