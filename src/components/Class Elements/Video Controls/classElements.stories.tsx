import {Meta, StoryObj} from "@storybook/react";
import Controller from "./index";
import React from "react";

const meta: Meta<typeof Controller> ={
    title:'Video Control',
    component:Controller,
    tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Controller>

export const Notes: Story = {
    name:'Notes Selected',
    render: (args) => <Controller {...args}>
    </Controller>
}

export const Attachments: Story = {
    name:'Attachments Selected',
    render: (args) => <Controller selected={'attachments'} {...args}>
    </Controller>
}

export const Summary: Story = {
    name:'Summary Selected',
    render: (args) => <Controller selected={'summary'} {...args}>
    </Controller>
}