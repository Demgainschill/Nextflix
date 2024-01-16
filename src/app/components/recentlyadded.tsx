import Image from "next/image";
import prisma from "../utils/db";
import MovieCard from "./moviecard";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
async function getData() {
  const data = await prisma.movie.findMany({
    select: {
      id: true,
      overview: true,
      title: true,
      WatchLists: true,
      imageString: true,
      youtubeString: true,
      age: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 4,
  });
  return data;
}

export default async function RecentlyAdded() {
  const session = await getServerSession(authOptions);
  const data = await getData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-10 px-4 static py-20 ">
      {data.map((movie) => (
        <div key={movie.id} className="relative h-48 top-96">
          <Image
            src={movie.imageString}
            width={400}
            height={500}
            alt="Movie"
            className="rounded-sm absolute w-full h-full transform transition duration-500 hover:scale-125 "
          />
          <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100 ">
            <Image
              src={movie.imageString}
              alt={"movie"}
              width={800}
              height={800}
              className="absolute w-full h-full -z-10 rounded-lg object-cover"
            />
            <MovieCard
              movieId={movie.id}
              overview={movie.overview}
              title={movie.title}
              watchListId={movie.WatchLists[0]?.id}
              youtubeUrl={movie.youtubeString}
              watchList={movie.WatchLists.length > 0 ? true : false}
              key={movie.id}
            />
            <div className="flex flex-col">
              <p className="font-semibold text-white">{movie.title}</p>
              <p>{movie.age}+</p>
              <p className="line-clamp-3  px-6">{movie.overview}</p>
            </div>
          </div>
          <div className="text-lg font-semibold relative bottom-6 py-2">
            {movie.title}
          </div>
        </div>
      ))}
    </div>
  );
}
