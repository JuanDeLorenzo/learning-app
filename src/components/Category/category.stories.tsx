import {Meta, StoryObj} from "@storybook/react";
import Category from "./index";
import React from "react";
import pen from "../../Assets/Pen Tool.png"
import darkPen from "../../Assets/Dark Pen.png"

const meta: Meta<typeof Category> ={
    title:'Category',
    component:Category,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['standard'],
            control:{type:'select'},
            defaultValue:'standard'
        }
    }
}

export default meta

type Story = StoryObj<typeof Category>

export const Default: Story = {
    name:'Default',
    render: (args) => <Category {...args}>
        <div className="relative group">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-12 h-12 bg-gray-300 shadow-md rounded items-center group-hover:bg-primary-400">
                <HoverableIcon />
            </div>
            <p className="text-center text-center w-24 pt-10">Graphic Design</p>
        </div>
    </Category>
}

const HoverableIcon = () => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered ? <img src={darkPen} alt="Square Button" className="w-12 h-12 object-cover items-center" /> : <img src={pen} alt="Square Button" className="w-12 h-12 object-cover items-center" />}
        </div>
    );
};