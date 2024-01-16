import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";
import MovieVideo from "../components/movievideo";

import Logout from "../components/logoutbutton";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import Hydratelogout from "../components/hydratelogout";
import Navbar from "../components/navbar";
import logo from "../../../public/netflix_logo.svg";
import Footer from "../components/footer";
import PlayVideoModal from "../components/playvideomodel";
import AddedNow from "../components/addrecent";
import RecentlyAdded from "../components/recentlyadded";
import CategoryPage from "./[category]/page";
export default async function HomeLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/login");
  }

  return (
    <main className="min-h-full flex-col">
      <div>
        <Logout />

        <Navbar />

        {children}
      </div>
    </main>
  );
}
