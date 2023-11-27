import {Meta, StoryObj} from "@storybook/react";
import Answer from './index'
import React from "react";

const meta: Meta<typeof Answer> ={
    title:'Answer',
    component:Answer,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['answer','correct','wrong'],
            control:{type:'select'},
            defaultValue:'answer'
        }
    }
}

export default meta

type Story = StoryObj<typeof Answer>

export const Default: Story = {
    name:'Default',
    render: (args) => <Answer {...args}>
    </Answer>
}

export const Option: Story = {
    name:'Option',
    render: (args) => <Answer option={"b) UI"} {...args}>
    </Answer>
}

export const Wrong: Story = {
    name:'Wrong Answer',
    render: (args) => <Answer variant={"wrong"} option={"b) UI"} {...args}>
    </Answer>
}

export const Correct: Story = {
    name:'Correct Answer',
    render: (args) => <Answer variant={"correct"} option={"b) UI"} {...args}>
    </Answer>
}