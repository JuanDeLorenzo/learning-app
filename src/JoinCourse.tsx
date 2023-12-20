import React from 'react';
import Button from "./components/Button/Text Button";
import Teachers from "./components/Course Info/Teachers"
import Details from "./components/Course Info/Course Details"
import BottomBar from "./components/Bottom Bar";
import IconButton from "./components/Button/Icon Button";
import CourseTitle from "./components/Course Info/Course Title";
import figma from './Assets/Figma.png';
import wish from "./Assets/Icon Button Symbols/Bookmark.png";
import wishSelected from "./Assets/Icon Button Symbols/BookmarkSelected.png"
import Modal from '@mui/material/Modal';


function JoinCourse() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [wished, setWished] = React.useState(false);
    const wishNow = () => setWished(true);
    const unwish = () => setWished(false);

  return (
      <div className="bg-secondary-600">
          <div className="relative z-10 py-4 h-60">
              <div className="flex items-center justify-between">
                  <div className="flex align-left ml-6">
                      <IconButton onClick={() => window.location.href = '/home'} variant={'icon'}></IconButton>
                  </div>
                  <div className="flex mr-1">
                      <p className="text-typography-600 text-headline font-headline">Course Details</p>
                  </div>
                  <div className="flex align-right mr-6">
                      {wished?
                          <IconButton variant={'icon'} image={wishSelected} onClick={unwish}></IconButton>
                          :
                          <IconButton variant={'icon'} image={wish} onClick={wishNow}></IconButton>
                      }
                  </div>
              </div>
              <br/>
              <div className="pl-5">
                  <CourseTitle name={"Learn Figma"} users={18} rating={4.8} picture={figma}></CourseTitle>
              </div>
          </div>
          <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
          >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[346px] h-[304px] px-[26px] py-[51px] bg-stone-200 rounded-[40px] flex-col justify-start items-start gap-[78px] inline-flex shadow-lg">
                  <div className="w-[280px] text-center text-typography-600 text-title font-title">
                      Join the course ‘’Learn Figma´´?
                  </div>
                  <div className="justify-center items-center gap-[42px] inline-flex">
                      <Button variant={"reject"} onClick={handleClose}>No</Button>
                      <Button variant={"accept"} onClick={handleClose}>Yes</Button>
                  </div>
              </div>
          </Modal>
          <div className="bg-typography-400 rounded-3xl text-typography-600">
              <div className='p-4 text-justify'>
                  <p className="text-title font-title">Description</p>
                  <p className="text-body font-body pt-2">Learn how to use Figma and create amazing designs for your web pages or mobile apps.</p>
                  <br/>
                  <div className="flex items-center justify-between px-7">
                      <Details variant={"lesson"} quantity={16}></Details>
                      <Details variant={"quizzes"} quantity={8}></Details>
                      <Details variant={"hours"} quantity={2.5}></Details>
                  </div>
                  <br/>
                  <p className="text-title font-title">Teachers</p>
                  <div className="flex items-center ">
                      <Teachers name={"Fabrizio Serial"}></Teachers>
                  </div>
                  <div className="flex items-center ">
                      <Teachers name={"Nazareth Lopez Gabeiras"}></Teachers>
                  </div>
                  <br/>
                  <p className="text-title font-title">Lessons</p>
                  <div className="text-title font-title pl-2">
                      <p>1. Introduction</p>
                      <p>2. Plugins</p>
                      <p>3. Shapes</p>
                      <p>4. Text</p>
                      <p>5. Variants</p>
                  </div>
                  <br/>
              </div>
              <div className='py-14'></div>
              <div className="fixed bottom-0 w-full">
                  <div className='text-center px-9'>
                    <Button onClick={handleOpen}>Join Course</Button>
                  </div>
                  <div className='my-2'></div>
                  <BottomBar>
                  </BottomBar>
              </div>
          </div>
      </div>
  );
}

export default JoinCourse;
