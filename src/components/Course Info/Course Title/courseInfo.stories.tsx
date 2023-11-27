import {Meta, StoryObj} from "@storybook/react";
import CourseTitle from "./index";
import React from "react";
import figma from "../../../Assets/Figma.png";

const meta: Meta<typeof CourseTitle> ={
    title:'Course Title',
    component:CourseTitle,
    tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof CourseTitle>

export const Default: Story = {
    name:'Default',
    render: (args) => <CourseTitle {...args}>
    </CourseTitle>
}

export const Easy: Story = {
    name:'Learn Figma Easy',
    render: (args) => <CourseTitle name={"Learn Figma"} users={18} rating={4.8} picture={figma} {...args}>
    </CourseTitle>
}

export const Medium: Story = {
    name:'Learn Figma Medium',
    render: (args) => <CourseTitle name={"Learn Figma"} users={18} rating={4.8} picture={figma} difficulty={"medium"} {...args}>
    </CourseTitle>
}

export const Hard: Story = {
    name:'Learn Figma Hard',
    render: (args) => <CourseTitle name={"Learn Figma"} users={18} rating={4.8} picture={figma} difficulty={"hard"} {...args}>
    </CourseTitle>
}