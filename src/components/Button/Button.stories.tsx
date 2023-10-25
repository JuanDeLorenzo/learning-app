import {Meta, StoryObj} from "@storybook/react";
import Button from "./index";

const meta: Meta<typeof Button> ={
    title:'Button',
    component:Button,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['standard','reject','accept'],
            control:{type:'select'},
            defaultValue:'standard'
        },
        size:{
            options:['small','medium','large'],
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

export const Fulfilled: Story = {
    name:'Course',
    render: (args) => <Button variant={'standard'} {...args}>Join Course</Button>
}
export const Outlined: Story = {
    name:'Modal',
    render: (args) =>
        <div className={'flex flex-col w-[250px] gap-2'}>
            <Button variant={'reject'} size={'small'} {...args}>No</Button>
            <Button variant={'accept'} size={'small'} {...args}>Yes</Button>
        </div>
}