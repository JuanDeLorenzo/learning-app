import {Meta, StoryObj} from "@storybook/react";
import Details from "./index";
import React from "react";

const meta: Meta<typeof Details> ={
    title:'Course Details',
    component:Details,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['lesson','quizzes', 'hours'],
            control:{type:'select'},
            defaultValue:'lesson'
        }
    }
}

export default meta

type Story = StoryObj<typeof Details>

export const Default: Story = {
    name:'Default',
    render: (args) => <Details variant={"lesson"} {...args}>
    </Details>
}

export const Lesson: Story = {
    name:'Lesson',
    render: (args) => <Details variant={"lesson"} quantity={16} {...args}>
    </Details>
}

export const Quizzes: Story = {
    name:'Quizzes',
    render: (args) => <Details variant={"quizzes"} quantity={6} {...args}>
    </Details>
}

export const Hours: Story = {
    name:'Hours',
    render: (args) => <Details variant={"hours"} quantity={2.1} {...args}>
    </Details>
}