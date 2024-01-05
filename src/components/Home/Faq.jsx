import React, { useState } from "react";
import Quiz from '../../utils/Quiz';
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import Container from "../Container";

const Faq= () => {
  const [openSection, setOpenSection] = useState(false);

  const handleOpen = (index) => {
    setOpenSection(index === openSection ? false : index);
  };

  return (
    <Container>
      <div className="container flex flex-col justify-center py-8 mx-auto ">
            <h2 className="text-sm md:text-xl  font-bold mb-6 md:mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-2 pb-2">
            {Quiz.map((quiz, index) => (
              <div key={index} className={`w-full  border-b border-gray-300 ${openSection === index ? "open" : "" }`}>
                <h1 className=" flex justify-between items-center font-medium text-base px-4 py-4 " onClick={() => handleOpen(index)}>
                  {quiz.question}
                  {openSection === index ? <AiOutlineMinus size={16} color="red"/> : <AiOutlinePlus size={16}/>}
                </h1>
                <p className={`${ openSection === index ? "block" : "hidden"} text-base py-4 pt-0 ml-4  `}>
                  {quiz.answer}
                </p>
              </div>
            ))}

          </div>
        </div>
    </Container>
  );
}


export default Faq
