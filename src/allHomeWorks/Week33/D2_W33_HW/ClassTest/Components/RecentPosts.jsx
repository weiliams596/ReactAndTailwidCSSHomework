import React from 'react';
import { Link } from 'react-router-dom';

export default function RecentPosts() {
  return (
    <section className='flex flex-col bg-blue-100'>
      <div className='flex justify-around pt-[50px]'>
        <h3>Recent posts</h3>
        <Link className='text-[#00A8CC]'>View all</Link>
      </div>
      <div className='grid grid-cols-2 gap-[2%] p-[10%]'>
        <div className='bg-white flex flex-col justify-between '>
            <h1 className='px-[4%]'>Making a design system from scratch</h1>
            <div className='flex flex-row justify-around p-[20px]'>
                <p>12 Feb 2020</p>
                <p>|</p>
                <p>Design, Pattern</p>
            </div>
            <p className='px-[4%]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
        <div className='bg-white'>
            <h1 className='px-[4%]'>Creating pixel perfect icons in Figma</h1>
            <div className='flex flex-row justify-around p-[20px]'>
                <p>12 Feb 2020</p>
                <p>|</p>
                <p>Figma, Icon Design</p>
            </div>
            <p className='px-[4%]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
      </div>
    </section>
  )
}
