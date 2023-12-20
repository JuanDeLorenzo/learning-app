import {Meta, StoryObj} from "@storybook/react";
import Achievement from "./index";
import React from "react";

const meta: Meta<typeof Achievement> ={
    title:'Achievement',
    component:Achievement,
    tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Achievement>

export const Default: Story = {
    name:'Default',
    render: (args) => <Achievement> </Achievement>
}

export const Courses: Story = {
    name:'5 Courses',
    render: (args) => <Achievement reason={"Completed 5 courses!"} {...args}>
    </Achievement>
}