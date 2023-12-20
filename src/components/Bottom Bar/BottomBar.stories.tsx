import {Meta, StoryObj} from "@storybook/react";
import BottomBar from "./index";
import React from "react";

const meta: Meta<typeof BottomBar> ={
    title:'Bottom Bar',
    component:BottomBar,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof BottomBar>

export const Default: Story = {
    name:'Default',
    render: (args) => <BottomBar {...args}></BottomBar>
}

export const HomeSelected: Story = {
    name:'Home Selected',
    render: (args) => <BottomBar {...args}></BottomBar>
}
export const CoursesSelected: Story = {
    name:'Courses Selected',
    render: (args) => <BottomBar {...args} house={false} course={true}></BottomBar>
}
export const MessagesSelected: Story = {
    name:'Messages Selected',
    render: (args) => <BottomBar {...args} house={false} message={true}></BottomBar>
}