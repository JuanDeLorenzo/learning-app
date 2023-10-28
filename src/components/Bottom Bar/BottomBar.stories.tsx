import {Meta, StoryObj} from "@storybook/react";
import BottomBar from "./index";
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import FeedTwoToneIcon from '@mui/icons-material/FeedTwoTone';
import MessageTwoToneIcon from '@mui/icons-material/MessageTwoTone';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import React from "react";
import {IconButton} from "@mui/material";

const meta: Meta<typeof BottomBar> ={
    title:'Bottom Bar',
    component:BottomBar,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['classic'],
            control:{type:'select'},
            defaultValue:'homeSelected'
        }
    }
}

export default meta

type Story = StoryObj<typeof BottomBar>

export const Default: Story = {
    name:'Default',
    render: (args) => <BottomBar {...args}>Button</BottomBar>
}

export const HomeSelected: Story = {
    name:'Home Selected',
    render: (args) => <BottomBar variant={'classic'} {...args}>
        <div className="flex flex-col items-center px-4 text-small">
            <IconButton className="text-3xl">
                <HomeTwoToneIcon style={{
                    fontSize: 36
                }}/>
            </IconButton>
            Home
        </div>
        <div className="flex flex-col items-center px-10 text-small">
            <IconButton className="text-3xl">
                <FeedOutlinedIcon style={{
                    fontSize: 36
                }}/>
            </IconButton>
            Courses
        </div>
        <div className="flex flex-col items-center px-4 text-small">
            <IconButton>
                <MessageOutlinedIcon style={{
                    fontSize: 36
                }}/>
            </IconButton>
            Messages
        </div>
    </BottomBar>
}
export const CoursesSelected: Story = {
    name:'Courses Selected',
    render: (args) => <BottomBar variant={'classic'} {...args}>
        <div className="flex flex-col items-center px-4 text-small">
            <IconButton className="text-3xl">
                <HomeOutlinedIcon style={{
                    fontSize: 36
                }}/>
            </IconButton>
            Home
        </div>
        <div className="flex flex-col items-center px-10 text-small">
            <IconButton className="text-3xl">
                <FeedTwoToneIcon style={{
                    fontSize: 36
                }}/>
            </IconButton>
            Courses
        </div>
        <div className="flex flex-col items-center px-4 text-small">
            <IconButton>
                <MessageOutlinedIcon style={{
                    fontSize: 36
                }}/>
            </IconButton>
            Messages
        </div>
    </BottomBar>
}
export const MessagesSelected: Story = {
    name:'Messages Selected',
    render: (args) => <BottomBar variant={'classic'} {...args}>
        <div className="flex flex-col items-center px-4 text-small">
            <IconButton className="text-3xl">
                <HomeOutlinedIcon style={{
                    fontSize: 36
                }}/>
            </IconButton>
            Home
        </div>
        <div className="flex flex-col items-center px-10 text-small">
            <IconButton className="text-3xl">
                <FeedOutlinedIcon style={{
                    fontSize: 36
                }}/>
            </IconButton>
            Courses
        </div>
        <div className="flex flex-col items-center px-4 text-small">
            <IconButton>
                <MessageTwoToneIcon style={{
                    fontSize: 36
                }}/>
            </IconButton>
            Messages
        </div>
    </BottomBar>
}