import {Meta, StoryObj} from "@storybook/react";
import Button from "./index";
import send from '../../../Assets/Icon Button Symbols/Send.png'
import edit from '../../../Assets/Icon Button Symbols/EditProfile.png'
import wish from '../../../Assets/Icon Button Symbols/Bookmark.png'
import wishSelected from "../../../Assets/Icon Button Symbols/BookmarkSelected.png"
import profile from '../../../Assets/Icon Button Symbols/Avatar.png'
import x from '../../../Assets/Profile Symbols/X.png'
import React from "react";

const meta: Meta<typeof Button> ={
    title:'Icon Button',
    component:Button,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['send', 'icon', 'profile','close'],
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
    render: (args) => <Button variant={'send'}{...args} image={send}>
    </Button>
}

export const Back: Story = {
    name:'Back',
    render: (args) => <Button variant={'icon'} {...args}></Button>
};

export const Edit: Story = {
    name:'Edit',
    render: (args) => <Button variant={'icon'}{...args} image={edit}>
    </Button>
}

export const Close: Story = {
    name:'Close',
    render: (args) => <Button variant={'close'}{...args} image={x} >
    </Button>
}

export const Wish: Story = {
    name:'Wish',
    render: (args) => <Button variant={'icon'}{...args} image={wish}>
    </Button>
}

export const Wished: Story = {
    name:'Wished',
    render: (args) => <Button variant={'icon'}{...args} image={wishSelected}>
    </Button>
}

export const Profile: Story = {
    name:'Profile',
    render: (args) => <Button variant={'profile'}{...args} image={profile}>
    </Button>
}