
import { authOptions } from "@/app/utils/auth";
import prisma from "@/app/utils/db";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

async function getData(category: string){


        switch(category){
            case 'shows': {
                const data = await prisma.movie.findMany({
                    where: {    
                        category: 'show',
                    },
                    select: {
                        id: true,
                        age: true,
                        title: true,
                        imageString: true,
                        
                    },
                });
                return data;
            }
        case 'recent': {
            const data = await prisma.movie.findMany({
                where: {
                    category: 'recent',
                },
                select: {
                    age: true,
                    title: true,
                    id: true,
                    imageString: true,
                },
                
            });
            return data;
        }
        
        default: {
            throw new Error();
            
            
            
        }
        }
}


export default async function CategoryPage({
    params,
}: {
    params : {category: string};
}){
    const session = await getServerSession(authOptions)
    const data = await getData(params.category);
    return (
        
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 '>
            {data.map((movie) =>(
                    <div className="flex flex-col px-10 py-20">

                    <><Image src={movie.imageString} width={200} height={200} alt={"pic"}
                    className="object-cover hover:scale-125 duration-300"
                    ></Image>
                    <h1 className="font-semibold text-lg py-6">
                        {movie.title}
                        <Link href='#' ><p>Hello</p></Link>
                    </h1>
                </>
                    </div>
            ))}
            </div>
    )
}