import BottomBar from "./components/Bottom Bar";
import React from "react";
import profile from "./Assets/Icon Button Symbols/Avatar.png";
import IconButton from "./components/Button/Icon Button";
import Button from "./components/Button/Text Button";
import cooking from "./Assets/Cooking.jpg";
import frontEnd from "./Assets/FrontEnd.png";
import marketing from "./Assets/marketing.png";
import uxUi from "./Assets/UX-UI.png";
import figma from "./Assets/Figma.png";
import BigBlock from "./components/Course Block/Big Course Block";
import Block from "./components/Course Block/Icon Course Block";
import search from "./Assets/Text Field Symbols/Search.png";
import Input from "./components/Text Input";
import pen from "./Assets/Pen Tool.png";
import monitor from "./Assets/monitor.png";
import music from "./Assets/music.png";
import cube from "./Assets/cube.png";
import Category from "./components/Category";
import ElementList from './ElementList';

function Home() {
    const blockData = [
        { onClick: () => window.location.href = '/joinCourse', picture: figma, course: 'Learn Figma', classes: 16, rating: 4.8, users: 18 },
        { picture: cooking, course: 'Cooking 101', classes: 13, rating: 4, users: 90 },
        { picture: uxUi, course: 'UX/UI Design', classes: 14, rating: 3.5, users: 150 },
        { picture: marketing, course: 'Marketing 101', classes: 15, rating: 5, users: 100 },
        { picture: frontEnd, course: 'Front-End Design', classes: 16, rating: 4.5, users: 110 },
    ];

    const bigBlockData = [
        { picture: cooking, course: 'Cooking 101', percentage: 10 },
        { picture: frontEnd, course: 'Front-End Design', percentage: 40 },
        { picture: uxUi, course: 'UX/UI Design', percentage: 95 },
    ];

    const categoryData = [
        { image: pen, category: 'Graphic Design'},
        { image: monitor, category: 'UX UI Design'},
        { image: music, category: 'Music Composer'},
        { image: cube, category: '3D Design'},
        { image: monitor, category: 'UX UI Design'},
    ];

    return (
        <div className="bg-secondary-600">
            <div className="relative z-10 py-4 flex items-center gap-2 px-7">
                <IconButton variant={'profile'} image={profile}></IconButton>
                <div className="text-label font-label">
                    <p className="text-typography-500">Hello,</p>
                    <p className="text-typography-600">Ignacio</p>
                </div>
            </div>
            <div className="bg-typography-400 rounded-3xl">
                <div className="pt-6">
                    <div className="flex items-center justify-between px-7">
                        <Input startIcon={search} placeholder={"Search..."}></Input>
                    </div>
                    <br/>
                    <div className="flex items-center justify-between px-7">
                        <p className="text-body font-body text-typography-600">My Courses</p>
                        <Button variant={'text'}>See All</Button>
                    </div>
                    <ElementList elements={bigBlockData} ElementComponent={BigBlock} />
                    <br/>
                    <div className="flex items-center justify-between px-7">
                        <p className="text-body font-body text-typography-600">Top Categories</p>
                        <Button variant={'text'}>See All</Button>
                    </div>
                    <br/>
                    <ElementList elements={categoryData} ElementComponent={Category} />
                    <br/>
                    <div className="flex items-center justify-between px-7">
                        <p className="text-body font-body text-typography-600">Popular Courses</p>
                        <Button variant={'text'}>See All</Button>
                    </div>
                    <ElementList elements={blockData} ElementComponent={Block} />
                </div>
                <div className='py-7'></div>
                <div className="fixed bottom-0 w-full">
                    <BottomBar></BottomBar>
                </div>
            </div>
        </div>
    );
}

export default Home