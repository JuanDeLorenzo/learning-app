import {Meta, StoryObj} from "@storybook/react";
import Button from "./index";
import React from "react";

const meta: Meta<typeof Button> ={
    title:'Button',
    component:Button,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['standard','reject','accept', 'text', 'edit', 'video'],
            control:{type:'select'},
            defaultValue:'standard'
        },
        disabled: { control: 'boolean' }
    }
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
    name:'Default',
    render: (args) => <Button {...args}>Button</Button>
}

export const Standard: Story = {
    name:'Standard',
    render: (args) => <Button variant={'standard'} {...args}>Join Course</Button>
}
export const Reject: Story = {
    name:'Reject',
    render: (args) => <Button variant={'reject'} {...args}>No</Button>
}
export const Accept: Story = {
    name:'Accept',
    render: (args) => <Button variant={'accept'} {...args}>Yes</Button>
}
export const Text: Story = {
    name:'Text',
    render: (args) => <Button variant={'text'} {...args}>Here</Button>
}
export const Edit: Story = {
    name:'Edit',
    render: (args) => <Button variant={'edit'} {...args}>Remove Photo</Button>
};
export const Video: Story = {
    name:'Video',
    render: (args) => <Button variant={'video'} {...args}>Notes</Button>
};