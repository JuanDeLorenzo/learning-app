import {Meta, StoryObj} from "@storybook/react";
import Block from "./index";
import React from "react";
import cooking from "./Images/Cooking.jpg"
import StarIcon from '@mui/icons-material/Star';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AssignmentIcon from '@mui/icons-material/Assignment';

const meta: Meta<typeof Block> ={
    title:'Courses Blocks',
    component:Block,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['classic','small','big','search'],
            control:{type:'select'},
            defaultValue:'homeSelected'
        }
    }
}

export default meta

type Story = StoryObj<typeof Block>

export const Default: Story = {
    name:'Default',
    render: (args) => <Block {...args}>Button</Block>
}

export const ClassicBlock: Story = {
    name:'Classic Course Block',
    render: (args) => <Block variant={'classic'} {...args}>
        <div className='flex flex-col items-center'>
            <img src={cooking} alt="Descripción de la imagen" className="w-44  object-top h-auto rounded-lg"/>
        </div>
        <div className='text-left mt-auto px-1 py-1'>
            <span className='px-1'> Cooking Lessons </span><br/>
            <AssignmentIcon style={{
                fontSize: 12
            }}/>
            <span className='px-0.5'> 16 Lessons </span><br/>
            <PeopleAltIcon style={{
                fontSize: 12
            }}/>
            <span className='px-0.5'> 43 k </span><br/>
            <StarIcon style={{
                fontSize: 12
            }}/>
            <span className='px-0.5'> 4.5 </span>
        </div>
    </Block>
}

export const SmallBlock: Story = {
    name:'Small Course Block',
    render: (args) => <Block variant={'small'} {...args}>
        <div className='flex flex-col items-center'>
            <img src={cooking} alt="Descripción de la imagen" className="w-32  object-top h-20 rounded-lg"/>
        </div>
        <div className='text-left mt-auto px-1 py-1'>
            <span> Cooking Lessons </span><br/>
        </div>
    </Block>
}

export const BigBlock: Story = {
    name:'Big Course Block',
    render: (args) => <Block variant={'big'} {...args}>
        <div className="w-1/2 flex flex-col justify-center">
            <span className="text-center">Cooking Course</span>
            <br/>
            <span className="text-right text-small pr-2">0%</span>
            <div className="h-1 bg-gray-300 w-1/3 bottom-0 absolute left-1/4 transform -translate-x-1/2 -translate-y-4 rounded"></div>

        </div>
        <span className="w-1/2  flex">
            <img src={cooking} alt="Imagen" className="max-h-40 max-w-36 rounded"/>
        </span>
    </Block>
}

export const SearchBlock: Story = {
    name:'Search Result Course Block',
    render: (args) => <Block variant={'search'} {...args}>
        <span className="w-1/2  flex p-1">
            <img src={cooking} alt="Imagen" className="max-h-40 max-w-36 rounded"/>
        </span>
        <div className='text-left pl-2'>
            <span className='px-1'> Cooking Lessons </span><br/>
            <AssignmentIcon style={{
                fontSize: 12
            }}/>
            <span className='px-0.5'> 16 Lessons </span><br/>
            <PeopleAltIcon style={{
                fontSize: 12
            }}/>
            <span className='px-0.5'> 43 k </span><br/>
            <StarIcon style={{
                fontSize: 12
            }}/>
            <span className='px-0.5'> 4.5 </span>
        </div>
    </Block>
}