import {Meta, StoryObj} from "@storybook/react";
import Block from "./index";
import React from "react";
import cooking from "../../../Assets/Cooking.jpg"
import StarIcon from '@mui/icons-material/Star';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AssignmentIcon from '@mui/icons-material/Assignment';

const meta: Meta<typeof Block> ={
    title:'Small Courses Blocks',
    component:Block,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['small'],
            control:{type:'select'},
            defaultValue:'small'
        }
    }
}

export default meta

type Story = StoryObj<typeof Block>

export const Default: Story = {
    name:'Default',
    render: (args) => <Block {...args}>
    </Block>
}

export const SmallBlock: Story = {
    name:'Small Course Block',
    render: (args) => <Block {...args} picture={cooking} course={"Cooking 101"}>
    </Block>
}

export const SmallBlockNotification: Story = {
    name:'Small Course Block with Notification',
    render: (args) => <Block {...args} picture={cooking} course={"Cooking 101"} notifications={4}>
    </Block>
}