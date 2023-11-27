import {Meta, StoryObj} from "@storybook/react";
import Menu from './index'
import React from "react";
import Progress from "../../Progress Bar/Progress Bar";
import Class from "../../Module/Class";
import Module from "../../Module/Module";

const meta: Meta<typeof Menu> ={
    title:'Menu',
    component:Menu,
    tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Menu>

export const Default: Story = {
    name:'Default',
    render: (args) => <Menu {...args}>
    </Menu>
}

export const InClass: Story = {
    name:'In Class',
    render: (args) => <Menu moduleList={[<Module title={"Module 1: Introduction"} components={"1 video, 1 Lecture, 1 quiz"}
                                                 progressBar={<Progress classes={3} position={2}></Progress>} classList={[<Class lesson={"01"} title={"What is UI Design?"} time={"7:32"} finished={true}/>,
        <Class lesson={"02"} title={"Set up Figma account"} time={"5:30"} icon={"lecture"}/>,
        <Class lesson={"03"} title={"Working with Figma Layer"} time={"9:56"} icon={"quiz"}/>]}></Module>,
        <Module title={"Module 1: Introduction"} components={"1 video, 1 Lecture, 1 quiz"}
                progressBar={<Progress classes={3} position={1}></Progress>} classList={[<Class lesson={"01"} title={"What is UI Design?"} time={"7:32"}/>,
            <Class lesson={"02"} title={"Set up Figma account"} time={"5:30"} icon={"lecture"}/>,
            <Class lesson={"03"} title={"Working with Figma Layer"} time={"9:56"} icon={"quiz"}/>]}></Module>,
        <Module title={"Module 1: Introduction"} components={"1 video, 1 Lecture, 1 quiz"}
                progressBar={<Progress classes={3} position={1}></Progress>} classList={[<Class lesson={"01"} title={"What is UI Design?"} time={"7:32"}/>,
            <Class lesson={"02"} title={"Set up Figma account"} time={"5:30"} icon={"lecture"}/>,
            <Class lesson={"03"} title={"Working with Figma Layer"} time={"9:56"} icon={"quiz"}/>]}></Module>,
        <Module title={"Module 1: Introduction"} components={"1 video, 1 Lecture, 1 quiz"}
                progressBar={<Progress classes={3} position={1}></Progress>} classList={[<Class lesson={"01"} title={"What is UI Design?"} time={"7:32"}/>,
            <Class lesson={"02"} title={"Set up Figma account"} time={"5:30"} icon={"lecture"}/>,
            <Class lesson={"03"} title={"Working with Figma Layer"} time={"9:56"} icon={"quiz"}/>]}></Module>,
        <Module title={"Module 1: Introduction"} components={"1 video, 1 Lecture, 1 quiz"}
                progressBar={<Progress classes={3} position={1}></Progress>} classList={[<Class lesson={"01"} title={"What is UI Design?"} time={"7:32"}/>,
            <Class lesson={"02"} title={"Set up Figma account"} time={"5:30"} icon={"lecture"}/>,
            <Class lesson={"03"} title={"Working with Figma Layer"} time={"9:56"} icon={"quiz"}/>]}></Module>,
        <Module title={"Module 1: Introduction"} components={"1 video, 1 Lecture, 1 quiz"}
                progressBar={<Progress classes={3} position={1}></Progress>} classList={[<Class lesson={"01"} title={"What is UI Design?"} time={"7:32"}/>,
            <Class lesson={"02"} title={"Set up Figma account"} time={"5:30"} icon={"lecture"}/>,
            <Class lesson={"03"} title={"Working with Figma Layer"} time={"9:56"} icon={"quiz"}/>]}></Module>]} {...args}>
    </Menu>
}