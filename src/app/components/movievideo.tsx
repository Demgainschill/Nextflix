import React from 'react'
import prisma from '../utils/db';
import Image from 'next/image';

async function getData(){
    try{

        const data = await prisma.movie.findFirst({
            select: {
                title: true,
                overview: true,
                videoSource: true,
                imageString: true,
                id: true,
            },
        });
        return data;
    }catch(error){
        console.error("Error")
    }
}


export default async function MovieVideo(){
  const data = await getData()
    return (
    <div>
        <video
        poster={data?.imageString}
        autoPlay
        muted
        loop
        src={data?.videoSource}
        className='w-full absolute top-0 left-0 h-[60vh] object-cover  brightness-[60%]'
        ></video>
        <div className='absolute w-[90%] lg:w-[40%] mx-auto'>
            <h1>{data?.title}</h1>
        </div>
    </div>
  );
}

