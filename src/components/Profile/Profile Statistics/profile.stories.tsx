import {Meta, StoryObj} from "@storybook/react";
import Statistics from "./index";
import React from "react";

const meta: Meta<typeof Statistics> ={
    title:'Profile Statistics',
    component:Statistics,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['enrolled','completed','learning','completion'],
            control:{type:'select'},
            defaultValue:'enrolled'
        }
    }
}

export default meta

type Story = StoryObj<typeof Statistics>

export const Default: Story = {
    name:'Default',
    render: (args) => <Statistics> </Statistics>
}

export const EnrolledCourses: Story = {
    name:'Enrolled Courses',
    render: (args) => <Statistics variant={'enrolled'} quantity={"14"} {...args}>
    </Statistics>
}

export const CompletedCourses: Story = {
    name:'Completed Courses',
    render: (args) => <Statistics variant={'completed'} quantity={"13"} {...args}>
    </Statistics>
}

export const LearningTime: Story = {
    name:'Learning Time',
    render: (args) => <Statistics variant={'learning'} quantity={"21:20hr"} {...args}>
    </Statistics>
}

export const CompletionRate: Story = {
    name:'Completion Rate',
    render: (args) => <Statistics variant={'completion'} quantity={"77%"} {...args}>
    </Statistics>
}