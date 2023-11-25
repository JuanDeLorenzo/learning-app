import {Meta, StoryObj} from "@storybook/react";
import Notification from "./index";
import React from "react";
import profile from "../../Assets/Profile.jpg"

const meta: Meta<typeof Notification> ={
    title:'Notifications',
    component:Notification,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['standard'],
            control:{type:'select'},
            defaultValue:'standard'
        }
    }
}

export default meta

type Story = StoryObj<typeof Notification>

export const Profile: Story = {
    name:'Profile Default',
    render: (args) => <Notification {...args} title={"Nazareth Lopez Gabeiras"} ></Notification>
}

export const Module: Story = {
    name:'Module Default',
    render: (args) => <Notification variant='module' title={"Module 2: Plugins"} {...args}></Notification>
}

export const ProfileNotif: Story = {
    name:'Profile With Notification',
    render: (args) => <Notification {...args} title={"Nazareth Lopez Gabeiras"} notifications={3}></Notification>
}

export const ModuleNotif: Story = {
    name:'Module With Notification',
    render: (args) => <Notification variant='module' title={"Module 2: Plugins"} notifications={3} {...args}></Notification>
}