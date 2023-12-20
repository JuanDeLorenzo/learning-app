import {Meta, StoryObj} from "@storybook/react";
import Progress from "./index";
import React from "react";

const meta: Meta<typeof Progress> ={

    title:'Progress Bar',
    component:Progress,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Progress>

export const Default: Story = {
    name:'Default',
    render: (args) => <Progress></Progress>
}

export const Lesson3: Story = {
    name:'3 Lessons, beginning',
    render: (args) => <Progress></Progress>
}

export const Lesson5: Story = {
    name:'5 Lessons, halfway',
    render: (args) => <Progress classes={5} position={3}></Progress>
}

export const Lesson7: Story = {
    name:'7 Lessons, finishing',
    render: (args) => <Progress classes={7} position={7}></Progress>
}