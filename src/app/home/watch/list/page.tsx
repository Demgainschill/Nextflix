import { authOptions } from "@/app/utils/auth";
import { getServerSession } from "next-auth/next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import prisma from "@/app/utils/db";
import MovieCard from "@/app/components/moviecard";
import { LucidePlayCircle } from "lucide-react";

async function getData(userId: string) {
  const data = await prisma.watchList.findMany({
    where: {
      userId: userId,
    },
    select: {
      Movie: {
        select: {
          id: true,
          title: true,
          age: true,
          duration: true,
          imageString: true,
          youtubeString: true,
          overview: true,
          WatchLists: true,
        },
      },
    },
  });
  return data;
}

export default async function WatchList() {
  const session = await getServerSession(authOptions);
  const data = await getData("abc");
  return (
    <>
      <div>
        <h1 className="text-6xl font-semibold text-white  relative top-24 px-12 ">
          Your watchlist
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-20">
        {data.map((movie) => (
          <div key={movie.Movie?.id}>
            <div className="flex flex-col px-10 py-20">
              <>
                <div>
                  <Image
                    src={movie.Movie?.imageString as string}
                    width={400}
                    height={400}
                    alt={"pic"}
                    className="object-cover hover:scale-125 duration-300"
                  ></Image>

                  <MovieCard
                    key={movie.Movie?.id}
                    movieId={movie.Movie?.id as number}
                    overview={movie.Movie?.overview as string}
                    title={movie.Movie?.title as string}
                    watchListId={movie.Movie?.WatchLists[0]?.id as string}
                    youtubeUrl={movie.Movie?.youtubeString as string}
                    watchList={
                      (movie.Movie?.WatchLists.length as number) > 0
                        ? true
                        : false
                    }
                  />
                </div>
                <h1 className="font-semibold text-lg py-6">
                  {movie.Movie?.title}
                </h1>
              </>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
