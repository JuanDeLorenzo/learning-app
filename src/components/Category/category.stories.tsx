import {Meta, StoryObj} from "@storybook/react";
import Category from "./index";
import React from "react";
import pen from "../../Assets/Pen Tool.png"

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
    </Category>
}

export const GraphicDesign: Story = {
    name:'Graphic Design',
    render: (args) => <Category {...args} image={pen} category={"Graphic Design"}>
    </Category>
}