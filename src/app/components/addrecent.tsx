import prisma from "@/app/utils/db";

async function getData() {
  const data = await prisma?.movie.findMany({
    select: {
      id: true,
      title: true,
      duration: true,
      age: true,
      overview: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 4,
  });
  return data;
}

export default async function AddedNow() {
  const data = await getData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6">
      {data.map((movie) => (
        <div key={movie.id} className="relative h-48">
          {movie.title}

          <div className="absolute">{movie.overview}</div>
        </div>
      ))}
    </div>
  );
}
