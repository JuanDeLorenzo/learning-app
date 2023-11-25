import {Meta, StoryObj} from "@storybook/react";
import Marker from "./index";
import React from "react";

const meta: Meta<typeof Marker> ={

    title:'Marker',
    component:Marker,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['unreached','reached','doing'],
            control:{type:'select'},
            defaultValue:'unreached'
        }
    }
}

export default meta

type Story = StoryObj<typeof Marker>

export const Default: Story = {
    name:'Default',
    render: (args) => <Marker />
}

export const Unreached: Story = {
    name:'Unreached',
    render: (args) => <Marker/>
}

export const Reached: Story = {
    name:'Reached',
    render: (args) => <Marker variant="reached" />
}

export const Doing: Story = {
    name:'Doing',
    render: (args) => <Marker variant="doing" />
}