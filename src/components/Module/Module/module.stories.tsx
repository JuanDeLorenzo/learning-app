import {Meta, StoryObj} from "@storybook/react";
import Progress from "../../Progress Bar/Progress Bar";
import Module from "./index"
import React from "react";
import completed from "../../../Assets/Completed.png"
import video from "../../../Assets/Video.png"
import book from "../../../Assets/Book.png"
import quiz from "../../../Assets/Quiz.png"
import Class from "../Class";

const meta: Meta<typeof Module> ={
    title:'Module',
    component:Module,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['classic'],
            control:{type:'select'},
            defaultValue:'standard'
        }
    }
}

export default meta

type Story = StoryObj<typeof Module>

export const Default: Story = {
    name:'Default',
    render: (args) => <Module></Module>

}

export const Basic: Story = {
    name:'Basic',
    render: (args) => <Module
        title={"Module 1: Introduction"}
        components={"1 video, 1 Lecture, 1 quiz"}
        classList={[
            <Class lesson={"01"} title={"What is UI Design?"} time={"7:32"} ></Class>,
            <Class lesson={"02"} title={"Set up Figma account"} time={"5:30"} icon={"lecture"}></Class>,
            <Class lesson={"03"} title={"Working with Figma Layer"} time={"9:56"} icon={"quiz"}></Class>
        ]}
    ></Module>

}

export const InLesson: Story = {
    name:'In Lesson',
    render: (args) => <Module title={"Module 1: Introduction"} components={"1 video, 1 Lecture, 1 quiz"}
                              progressBar={<Progress classes={3} position={2}></Progress>} classList={[<Class lesson={"01"} title={"What is UI Design?"} time={"7:32"} finished={true}/>,
        <Class lesson={"02"} title={"Set up Figma account"} time={"5:30"} icon={"lecture"}/>,
        <Class lesson={"03"} title={"Working with Figma Layer"} time={"9:56"} icon={"quiz"}/>]}></Module>
}