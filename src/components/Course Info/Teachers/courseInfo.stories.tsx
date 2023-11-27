import {Meta, StoryObj} from "@storybook/react";
import Teacher from "./index";
import React from "react";
import profile from '../../../Assets/Avatar.png'

const meta: Meta<typeof Teacher> ={
    title:'Teacher Cards',
    component:Teacher,
    tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Teacher>

export const Default: Story = {
    name:'Default',
    render: (args) => <Teacher {...args}>
    </Teacher>
}

export const Teacher1: Story = {
    name:'Teacher 1',
    render: (args) => <Teacher name={"Teacher 1"} picture={profile} {...args}>
    </Teacher>
}