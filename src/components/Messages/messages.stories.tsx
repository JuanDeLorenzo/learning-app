import {Meta, StoryObj} from "@storybook/react";
import Message from "./index";
import React from "react";

const meta: Meta<typeof Message> ={
    title:'Message',
    component:Message,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['user','another'],
            control:{type:'select'},
            defaultValue:'standard'
        }
    }
}

export default meta

type Story = StoryObj<typeof Message>

export const Sent: Story = {
    name:'Sent',
    render: (args) => <Message variant={'user'} message={"Howdy"} hour={"22:48"}{...args}>
    </Message>
}

export const Received: Story = {
    name:'Received',
    render: (args) => <Message variant={'user'} status={"received"} message={"Howdy"} hour={"22:48"} {...args}>
    </Message>
}

export const Read: Story = {
    name:'Read',
    render: (args) => <Message variant={'user'} status={"read"} message={"Howdy"} hour={"22:48"} {...args}>
    </Message>
}

export const Another: Story = {
    name:'Another',
    render: (args) => <Message variant={'another'} sender={"Fabrizio Serial"} message={"Howdy"} hour={"22:48"}{...args}>
    </Message>
}