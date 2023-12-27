'use server';
import prisma from '@/app/utils/db'
import { revalidatePath } from "next/cache";

export default async function addTowatchlist(formData: FormData){
    'use server';

    const movieId = formData.get('movieId')
    const pathname = formData.get('pathname') as string;
    
    const data = await prisma?.watchList.create({
        data: {
            userId: 'abc',
            movieId: Number(movieId) ,
        },
    });
    
    revalidatePath(pathname)
   
}

export async function deleteFromWatchlist(formData: FormData){
    'use server';
    const watchListId = formData.get('watchListId') as string
    const pathname = formData.get('pathname') as string;

    const data = await prisma.watchList.delete({
        where: {
            id: watchListId 
        },
    });

    revalidatePath(pathname)
}