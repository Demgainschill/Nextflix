import Image from 'next/image';
import prisma from '../utils/db'
async function getData(){
    const data = await prisma.movie.findMany({
        select: {
            id : true,
            overview: true,
            title: true,
            imageString: true,
            videoSource: true,
        },
        orderBy: {
            createdAt: 'desc',

        },
        take:  4,
    });
    return data;
}

export default async function RecentlyAdded(){
    const data = await getData();

    return(
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6' >
            {data.map((movie) => (
                <div key={movie.id} className='relative h-48'>
                    <Image src={movie.imageString} width={400} height={500} alt="Movie" className='rounded-sm absolute w-full h-full' 
                    />
                </div>
            ))}
        </div>
    )
}