import {Meta, StoryObj} from "@storybook/react";
import Pointer from "./index";
import React from "react";

const meta: Meta<typeof Pointer> ={
    title:'Progress Bar',
    component:Pointer,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['unreached','reached','doing'],
            control:{type:'select'},
            defaultValue:'standard'
        }
    }
}

export default meta

type Story = StoryObj<typeof Pointer>

export const Lessons3: Story = {
    name:'3 Lessons',
    render: (args) => <div className="flex items-center">
        <div className="h-3 bg-primary-1000 w-40 rounded-full relative">
            <div className="h-3 bg-pink-200 w-20 absolute rounded-full top-0"></div>
            <div className="flex justify-between items-center absolute w-full px-3">
                <div className="relative transform -translate-y-1/3">
                    <Pointer variant="reached" />
                </div>
                <div className="relative transform -translate-y-1/4">
                    <Pointer variant="doing" />
                </div>
                <div className="relative transform -translate-y-1/3">
                    <Pointer variant="unreached" />
                </div>
            </div>
        </div>
    </div>
}

export const Lessons5: Story = {
    name:'5 Lessons',
    render: (args) => <div className="flex items-center">
        <div className="h-3 bg-primary-1000 w-40 rounded-full relative">
            <div className="h-3 bg-pink-200 w-20 absolute rounded-full top-0"></div>
            <div className="flex justify-between items-center absolute w-full px-3">
                <div className="relative transform -translate-y-1/3">
                    <Pointer variant="reached" />
                </div>
                <div className="relative transform -translate-y-1/3">
                    <Pointer variant="reached" />
                </div>
                <div className="relative transform -translate-y-1/4">
                    <Pointer variant="doing" />
                </div>
                <div className="relative transform -translate-y-1/3">
                    <Pointer variant="unreached" />
                </div>
                <div className="relative transform -translate-y-1/3">
                    <Pointer variant="unreached" />
                </div>
            </div>
        </div>
    </div>
}