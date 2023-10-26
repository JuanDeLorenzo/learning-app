import {Meta, StoryObj} from "@storybook/react";
import Button from "./index";
import SendIcon from '@mui/icons-material/Send';

const meta: Meta<typeof Button> ={
    title:'Button',
    component:Button,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['standard','reject','accept', 'text', 'send'],
            control:{type:'select'},
            defaultValue:'standard'
        },
        size:{
            options:['tiny', 'small','medium','large'],
            control:{type:'select'},
            defaultValue:'medium'
        }
    }
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
    name:'Default',
    render: (args) => <Button {...args}>Button</Button>
}

export const Course: Story = {
    name:'Course',
    render: (args) => <Button variant={'standard'} size={'large'}{...args}>Join Course</Button>
}
export const Modal: Story = {
    name:'Modal',
    render: (args) =>
        <div className={'flex flex-col w-[250px] gap-2'}>
            <Button variant={'reject'} size={'small'} {...args}>No</Button>
            <Button variant={'accept'} size={'small'} {...args}>Yes</Button>
        </div>
}
export const Text: Story = {
    name:'Text',
    render: (args) => <Button variant={'text'} size={'medium'}{...args}>Here</Button>
}

export const Send: Story = {
    name:'Send',
    render: (args) => <Button variant={'send'} size={'tiny'}{...args}><SendIcon/></Button>
}