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
    render: (args) => <Message variant={'user'} {...args}>
        <div className="flex items-center">
            <p className="text-left text-medium pr-5 pb-2 text-white-500">My messages</p>
        </div>
        <div className="flex justify-between items-center mt-2">
            <div>
                <p className="text-primary-600 text-left">✓</p>
            </div>
            <p className="text-right text-white-500">11:31</p>
        </div>
    </Message>
}

export const Received: Story = {
    name:'Received',
    render: (args) => <Message variant={'user'} {...args}>
        <div className="flex items-center">
            <p className="text-left text-medium pr-5 pb-2 text-white-500">My messages</p>
        </div>
        <div className="flex justify-between items-center mt-2">
            <div>
                <p className="text-primary-600 text-left">✓✓</p>
            </div>
            <p className="text-right text-white-500">11:31</p>
        </div>
    </Message>
}

export const Read: Story = {
    name:'Read',
    render: (args) => <Message variant={'user'} {...args}>
        <div className="flex items-center">
            <p className="text-left text-medium pr-5 pb-2 text-white-500">My messages</p>
        </div>
        <div className="flex justify-between items-center mt-2">
            <div>
                <p className="text-green-100 text-left">✓✓</p>
            </div>
            <p className="text-right text-white-500">11:31</p>
        </div>
    </Message>
}

export const Another: Story = {
    name:'Another',
    render: (args) => <Message variant={'another'} {...args}>
        <p className="pr-5 pb-1 font-bold"><u>User Name</u></p>
        <p className="pb-1">Other's Message</p>
        11:31
    </Message>
}