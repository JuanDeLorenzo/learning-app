import {Meta, StoryObj} from "@storybook/react";
import Question from './index'
import React from "react";

const meta: Meta<typeof Question> ={
    title:'Question',
    component:Question,
    tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Question>

export const Default: Story = {
    name:'Default',
    render: (args) => <Question {...args}>
    </Question>
}

export const Right: Story = {
    name:'More rights',
    render: (args) => <Question number={5} total= {7} right= {4} wrong= {1} question={"What is the abbreviation of User Experience?"} {...args}>
    </Question>
}

export const Wrong: Story = {
    name:'More wrongs',
    render: (args) => <Question number={5} total= {7} right= {1} wrong= {4} question={"What is the abbreviation of User Experience?"} {...args}>
    </Question>
}