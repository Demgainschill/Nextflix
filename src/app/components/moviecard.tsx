"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import addTowatchlist, { deleteFromWatchlist } from "../action";
import { usePathname } from "next/navigation";
import { Heading1, Heart, PlayCircle } from "lucide-react";

interface iAppProps {
  title: string;
  overview: string;
  movieId: number;
  watchList: boolean;
  watchListId: string;
  youtubeUrl: string;
}
export default function MovieCard({
  movieId,
  overview,
  title,
  watchList,
  watchListId,
  youtubeUrl,
}: iAppProps) {
  const pathName = usePathname();

  return (
    <>
      <div className="flex justify-center items-center">
        <button className="mt-14">
          <PlayCircle className="h-20 w-20 justify-center " />
        </button>
      </div>

      <div className="right-5 top-5 absolute z-10 ">
        {watchList ? (
          <form action={deleteFromWatchlist}>
            {" "}
            <input type="hidden" name="watchListId" value={watchListId} />
            <input type="hidden" name="pathname" value={pathName} />
            <Button variant="outline" size={"icon"}>
              <Heart className="w-4 h-4 text-red-500 relative" />
            </Button>
          </form>
        ) : (
          <form action={addTowatchlist}>
            <input type="hidden" name="movieId" value={movieId} />
            <input type="hidden" name="pathname" value={pathName} />
            <Button variant="outline" size={"icon"}>
              <Heart className="w-4 h-4 " />
            </Button>
          </form>
        )}
      </div>
    </>
  );
}
