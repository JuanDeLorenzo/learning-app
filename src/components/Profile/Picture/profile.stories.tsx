import {Meta, StoryObj} from "@storybook/react";
import Profile from "./index";
import React from "react";
import profile from "../../../Assets/Profile Symbols/Avatar2.png"

const meta: Meta<typeof Profile> ={
    title:'Profile Picture',
    component:Profile,
    tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Profile>

export const Default: Story = {
    name:'Default',
    render: (args) => <Profile> </Profile>
}

export const Avatar: Story = {
    name:'Avatar',
    render: (args) => <Profile image={profile} name={"Ignacio"} {...args}>
    </Profile>
}