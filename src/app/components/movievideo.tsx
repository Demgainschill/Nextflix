import React from "react";
import prisma from "../utils/db";
import Image from "next/image";
import { Button } from "@/components/ui/button";

async function getData() {
  try {
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
  } catch (error) {
    console.error("Error");
  }
}

export default async function MovieVideo() {
  const data = await getData();
  return (
    <div>
      <video
        poster={data?.imageString}
        autoPlay
        muted
        loop
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        className="w-full absolute top-0 left-0 h-[60vh] object-cover  brightness-[60%] -z-10 backdrop-blur-lg"
      ></video>
      <div className="flex justify-center flex-col w-[90%] lg:w-[40%] mx-auto items-left relative top-60 right-96">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
          {data?.title}
        </h1>
        <p className="text-white mt-5 line-clamp-3 text-xl">{data?.overview}</p>
      </div>
      <div className="flex gap-x-3 relative top-64 left-48">
        <Button>See more</Button>
        <Button>Learn more</Button>
      </div>
    </div>
  );
}
