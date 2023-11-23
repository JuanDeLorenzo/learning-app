import {Meta, StoryObj} from "@storybook/react";
import Block from "./index";
import React from "react";
import cooking from "../../../Assets/Cooking.jpg"

const meta: Meta<typeof Block> ={
    title:'Big Courses Blocks',
    component:Block,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['big'],
            control:{type:'select'},
            defaultValue:'big'
        }
    }
}

export default meta

type Story = StoryObj<typeof Block>

export const Default: Story = {
    name:'Default',
    render: (args) => <Block {...args}>
    </Block>
}

export const BigBlock: Story = {
    name:'Big Course Block',
    render: (args) => <Block {...args} picture={cooking} course={"Cooking 101"} percentage={40}>
    </Block>
}