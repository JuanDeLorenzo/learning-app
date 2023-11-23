import {Meta, StoryObj} from "@storybook/react";
import Profile from "./index";
import React from "react";
import profile from "../../Assets/Profile.jpg"

const meta: Meta<typeof Profile> ={
    title:'Profile',
    component:Profile,
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

type Story = StoryObj<typeof Profile>

export const Default: Story = {
    name:'Default',
    render: (args) => <Profile {...args}>
        <div className="rounded-full overflow-hidden w-24 h-24 border-4 border-white">
            <img src={profile} alt="User" className="w-full h-full object-cover" />
        </div>
        <p className="mt-2 text-center w-24">Nazareth Lopez Gabeiras</p>
    </Profile>
}

export const Notification: Story = {
    name:'With Notification',
    render: (args) => <Profile {...args}>
        <div className="rounded-full overflow-hidden w-24 h-24 border-4 border-white">
            <img src={profile} alt="User" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-1/2 right-1/4 transform translate-y-3/4 -mr-8 w-6 h-6 rounded-full bg-red-600 flex items-center justify-center transition text-white-300 z-40 shadow-md group-hover:bg-red-800">
            1
        </div>
        <p className="mt-2 text-center w-24">Nazareth Lopez Gabeiras</p>
    </Profile>
}