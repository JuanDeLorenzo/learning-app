import {Meta, StoryObj} from "@storybook/react";
import Class from "./index"
import React from "react";

const meta: Meta<typeof Class> ={
    title:'Class',
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
    render: (args) => <Class></Class>
}

export const Completed: Story = {
    name:'Completed',
    render: (args) => <Class lesson={"01"} title={"What is UI Design?"} time={"7:32"} finished={true}></Class>
}

export const Video: Story = {
    name:'Video',
    render: (args) => <Class lesson={"01"} title={"What is UI Design?"} time={"7:32"}></Class>
}

export const Lecture: Story = {
    name:'Lecture',
    render: (args) => <Class lesson={"02"} title={"Set up Figma account"} time={"5:30"} icon={"lecture"}></Class>
}

export const Quiz: Story = {
    name:'Quiz',
    render: (args) => <Class lesson={"03"} title={"Working with Figma Layer"} time={"9:56"} icon={"quiz"}></Class>
}