import {Meta, StoryObj} from "@storybook/react";
import Search from "./index";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

const meta: Meta<typeof Search> ={
    title:'Search Bar',
    component:Search,
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

type Story = StoryObj<typeof Search>

export const Default: Story = {
    name:'Default',
    render: (args) => <div className='rounded-full border bg-white-300 focus:border-black-900 px-2'>
        <SearchIcon/>
        <Search variant={"standard"} {...args}>
        </Search>
    </div>
}

export const Filter: Story = {
    name:'With Filter',
    render: (args) => <div className='rounded-full border bg-white-300 focus:border-black-900 px-2'>
        <SearchIcon/>
        <Search variant={"standard"} {...args}>
        </Search>
        <button>
            <FilterAltOutlinedIcon className="right-0"/>
        </button>
    </div>

}