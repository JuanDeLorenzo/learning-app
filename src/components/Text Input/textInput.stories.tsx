import {Meta, StoryObj} from "@storybook/react";
import Input from "./index";
import React from "react";
import pen from '../../Assets/Text Field Symbols/EditPen.png'
import filter from '../../Assets/Text Field Symbols/Filter.png'
import search from '../../Assets/Text Field Symbols/Search.png'
import crossEye from '../../Assets/Text Field Symbols/NoVisible.png'

const meta: Meta<typeof Input> ={
    title:'Text Input',
    component:Input,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['search','data', 'error','profile','message'],
            control:{type:'select'},
            defaultValue:'search'
        }
    }
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
    name:'Input Bar',
    render: (args) => <Input></Input>

}

export const Search: Story = {
    name:'Search Bar',
    render: (args) => <Input startIcon={search} placeholder={"Search..."}></Input>
}

export const SearchFilter: Story = {
    name:'Search bar with filter',
    render: (args) => <Input startIcon={search} placeholder={"Search..."} endIcon={filter}></Input>
}

export const Data: Story = {
    name:'Data bar',
    render: (args) => <Input variant={"data"} placeholder={"Email"}></Input>
}

export const DataIcon: Story = {
    name:'Data bar with privacy',
    render: (args) => <Input variant={"data"} placeholder={"Password"} endIcon={crossEye}></Input>
}

export const DataError: Story = {
    name:'Data after an error',
    render: (args) => <Input variant={"error"} placeholder={"Password"} endIcon={crossEye}></Input>
}

export const Profile: Story = {
    name:'Profile edit bar',
    render: (args) => <Input variant={"profile"} startIcon={pen} placeholder={"Juan Cruz"}></Input>
}

export const Message: Story = {
    name:'Message bar',
    render: (args) => <Input variant={"message"} placeholder={"Write a message"}></Input>
}