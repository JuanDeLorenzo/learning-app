import {Meta, StoryObj} from "@storybook/react";
import Button from "./index";
import send from '../../../Assets/Send.png'
import sendHover from '../../../Assets/SendPressed.png'
import edit from '../../../Assets/EditProfile.png'
import editHover from '../../../Assets/EditProfilePressed.png'
import wish from '../../../Assets/Bookmark.png'
import wishHover from '../../../Assets/BookmarkHover.png'
import profile from '../../../Assets/Avatar.png'
import React from "react";

const meta: Meta<typeof Button> ={
    title:'Icon Button',
    component:Button,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['send', 'icon', 'profile'],
            control:{type:'select'},
            defaultValue:'icon'
        }
    }
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
    name:'Default',
    render: (args) => <Button {...args}></Button>
}


export const Send: Story = {
    name:'Send',
    render: (args) => <Button variant={'send'}{...args} imageNormal={send} imageHover={sendHover}>
    </Button>
}

export const Back: Story = {
    name:'Back',
    render: (args) => <Button variant={'icon'} {...args}></Button>
};

export const Edit: Story = {
    name:'Edit',
    render: (args) => <Button variant={'icon'}{...args} imageNormal={edit} imageHover={editHover}>
    </Button>
}

export const Wish: Story = {
    name:'Wish',
    render: (args) => <Button variant={'icon'}{...args} imageNormal={wish} imageHover={wishHover}>
    </Button>
}

export const Profile: Story = {
    name:'Profile',
    render: (args) => <Button variant={'profile'}{...args} imageNormal={profile} imageHover={profile}>
    </Button>
}