 import React, { useState } from 'react'
import people from './data.js'
//from the above, even though people is the not the name of the array in that data, but it is suprising that we can console log the people and we will get what wwe have in the ./data

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const[index, setIndex]=useState(0)
  const{id, name, job, image, text}=people[index]
  //the index allows us to access whatever we have in that array with the corresponding index the above means that I want the object in the array corresponding to the index that we have in our useState hook and then destructure what we have and send that to, so as the index changes from the usestate, so is the object we are accessing in the array and so is what we will have in the DOM

  //another way of wrinting our function for next and dprevious
// const checkNumber=(number)=>{
//   if(number > people.length-1){
//   return 0
//   } if(number<0){
//     return people.length -1
//   }
//   return number
//   }


const nextPerson=()=>{
  setIndex((index)=>{
    let newIndex = index + 1
    if (newIndex > people.length-1) {
      return (newIndex = 0)
    }
    if (newIndex < 0) {
      return (newIndex =  people.length-1)
      //it is good to use the people.length-1 instead of just a figure, so that whenever we update our datat we won't have to update stuffs manually
    }
    return (newIndex)
  })
}

const prevPerson = () => {
  setIndex((index) => {
    let newIndex=index - 1
     if (newIndex > people.length-1) {
       return (newIndex = 0)
     }
     if (newIndex < 0) {
       return (newIndex = people.length-1)
     }
    return newIndex
  })
}

  return (<article className='review'>
      <div className='img-container'>
        <img className='person-img' src={image} alt="name" />
        <span className='quote-icon'>
          <FaQuoteRight/>
        </span> 
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
         

        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft/>
        </button>


        <button className='next-btn' onClick={nextPerson}>
            <FaChevronRight/>
        </button>
      </div>
    </article>
    )
}

export default Review
