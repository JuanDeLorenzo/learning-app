import React from 'react';
import Button from "./components/Button/Text Button";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import wishList from './Assets/Bookmark.png';
import figma from './Assets/Figma.png';
import user from './Assets/user.png';
import star from './Assets/star.png';
import difficulty from './Assets/easy.png';
import homeBlack from "./Assets/HomeSelected.png";
import courses from "./Assets/Courses.png";
import messages from "./Assets/Messages.png";
import timer from "./Assets/timer.png"
import book from "./Assets/book-open.png"
import puzzle from "./Assets/puzzle.png"
import BottomBar from "./components/Bottom Bar";
import profile from "./Assets/Profile.jpg";
import IconButton from "./components/Button/Icon Button";

function App() {
  return (
      <div>
          <div className="bg-pink-background relative z-10 py-4 h-60">
              <div className="flex items-center justify-between">
                  <div className="flex align-left ml-6">
                      <IconButton variant={'icon'}></IconButton>
                  </div>
                  <div className="flex mr-1">
                      <p className="text-giant">Course Details</p>
                  </div>
                  <button>
                      <img src={wishList} alt="Wish-List Button" className="w-12 h-12 mr-8" />
                  </button>
              </div>
              <br/>
              <div className="flex justify-between">
                  <div className="ml-6 ">
                      <p className="text-titan">Learn Figma</p>
                      <div className="flex justify-between items-center">
                          <div className="flex">
                              <img src={user} alt="Wish-List Button" className="w-6 h-6" />
                            18k
                          </div>
                          <div className="flex">
                              <img src={star} alt="Wish-List Button" className="w-6 h-6" />
                            4.8
                          </div>
                          <div className="flex">
                              <img src={difficulty} alt="Wish-List Button" className="w-6 h-6" />
                            Easy
                          </div>
                      </div>
                  </div>
                  <img src={figma} alt="Figma Icon" className="w-44 h-44 mr-3 transform -translate-y-4" />
              </div>
          </div>

          <div className="bg-white rounded-3xl">
              <div className='p-4 text-justify'>
                  <p className='text-titan'>Description</p>
                  <p className='text-giant pt-2 '>Learn how to use Figma and create amazing designs for your web pages or mobile apps.</p>
                  <br/>
                  <div className="flex items-center justify-between">
                      <div className="bg-green-300 h-36 w-32 rounded-lg p-4">
                          <img src={book} alt="Book" className="w-9 h-9" />
                          <p className="text-giant">16</p>
                          <p className="text-giant">Lessons</p>
                      </div>
                      <div className="bg-green-400 h-36 w-32 rounded-lg p-4 mx-1">
                          <img src={puzzle} alt="Puzzle" className="w-9 h-9" />
                          <p className="text-giant">8</p>
                          <p className="text-giant">Quizzes</p>
                      </div>
                      <div className="bg-orange-100 h-36 w-32 rounded-lg p-4">
                          <img src={timer} alt="Timer" className="w-9 h-9" />
                          <p className="text-giant">2.5</p>
                          <p className="text-giant">Hours</p>
                      </div>
                  </div>
                  <br/>
                  <p className='text-titan'>Teachers</p>
                  <div className="flex items-center ">
                      <div className="rounded-full overflow-hidden w-7 h-7 border-3 border-black-900">
                          <img src={profile} alt="User" className="w-full h-full object-cover" />
                      </div>
                      <p className="text-giant pl-2">Fabrizio Serial</p>
                  </div>
                  <div className="flex items-center ">
                      <div className="rounded-full overflow-hidden w-7 h-7 border-3 border-black-900">
                          <img src={profile} alt="User" className="w-full h-full object-cover" />
                      </div>
                      <p className="text-giant pl-2">Nazareth Lopez Gabeiras</p>
                  </div>
                  <br/>
                  <p className='text-titan'>Lessons</p>
                  <div>
                      <p className="text-giant pl-2">1. Introduction</p>
                      <p className="text-giant pl-2">2. Plugins</p>
                      <p className="text-giant pl-2">3. Shapes</p>
                      <p className="text-giant pl-2">4. Text</p>
                      <p className="text-giant pl-2">5. Variants</p>
                  </div>
                  <br/>
              </div>
              <div className='py-14'></div>
              <div className="fixed bottom-0 w-full">
                  <div className='text-center'>
                    <Button variant={'standard'}>Join Course</Button>
                  </div>
                  <div className='my-2'></div>
                  <BottomBar variant={'classic'}>
                      <div className="flex flex-col items-center px-4 text-small">
                          <button className="text-3xl">
                              <img src={homeBlack} alt="Square Button" className="w-12 h-12" />
                              Home
                          </button>
                      </div>
                      <div className="flex flex-col items-center px-10 text-small">
                          <button className="text-3xl">
                              <img src={courses} alt="Square Button" className="w-12 h-12" />
                              Courses
                          </button>
                      </div>
                      <div className="flex flex-col items-center px-4 text-small">
                          <button>
                              <img src={messages} alt="Square Button" className="w-12 h-12" />
                              Messages
                          </button>
                      </div>
                  </BottomBar>
              </div>
          </div>
      </div>
  );
}

export default App;
