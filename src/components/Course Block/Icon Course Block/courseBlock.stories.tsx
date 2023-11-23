import {Meta, StoryObj} from "@storybook/react";
import Block from "./index";
import React from "react";
import cooking from "../../../Assets/Cooking.jpg";

const meta: Meta<typeof Block> ={
    title:'Icons Courses Blocks',
    component:Block,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['classic','white', 'search'],
            control:{type:'select'},
            defaultValue:'classic'
        }
    }
}

export default meta

type Story = StoryObj<typeof Block>

export const Default: Story = {
    name:'Default',
    render: (args) => <Block {...args}></Block>
}

export const ClassicBlock: Story = {
    name:'Classic Course Block',
    render: (args) => <Block {...args} picture={cooking} course={"Cooking 101"} classes={12} rating={4.5} users={120}></Block>
}

export const White: Story = {
    name:'White Course Block',
    render: (args) => <Block variant={'white'} {...args} picture={cooking} course={"Cooking 101"} classes={12} rating={4.5} users={120}></Block>
}

export const SearchBlock: Story = {
    name:'Search Result Course Block',
    render: (args) => <Block variant={'search'} {...args} picture={cooking} course={"Cooking 101"} classes={12} rating={4.5} users={120}></Block>
}