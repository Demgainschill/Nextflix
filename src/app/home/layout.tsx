import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";
import MovieVideo from "../components/movievideo";
import RecentlyAdded from "../components/recentlyadded";

export default async function HomeLayout({ children }: { children : ReactNode}){ 
    const session = await getServerSession(authOptions);
    if (!session){
        return redirect('/login')
    }

    return (
        <main>
        <div>
            <MovieVideo/>
            <RecentlyAdded/>
        </div>
            {children}
        </main>
    )
}