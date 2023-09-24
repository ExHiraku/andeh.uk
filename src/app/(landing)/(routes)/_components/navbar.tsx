import Link from "next/link";

import { Icons } from "@/components/icons";
import { Logo } from "./logo";
import { MobileSidebar } from "./mobile-sidebar";

export const Navbar = () => {
    return (
        <nav className="p-6 border-b border-primary shadow-lg">
            <div className="flex items-center justify-between md:hidden">
                <Logo />
                <div className="flex items-center">
                    <MobileSidebar />
                </div>
            </div>
            <div className="hidden md:flex items-center justify-between max-w-7xl mx-auto">
                <div className="flex items-center gap-x-32">
                    <Logo />
                    <div className="flex items-center gap-x-8">
                        <p className="text-primary font-semibold">Home</p>
                        <Link
                            href="#about"
                            className="text-primary-foreground transition duration-200 hover:text-primary"
                        >
                            About
                        </Link>
                        <Link
                            href="#projects"
                            className="text-primary-foreground transition duration-200 hover:text-primary"
                        >
                            Projects
                        </Link>
                        <Link
                            href="#contact"
                            className="text-primary-foreground transition duration-200 hover:text-primary"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
                <div className="flex gap-x-4">
                    <Link
                        href="https://discord.com/users/957437570546012240"
                        className="fill-white hover:fill-primary transition duration-200"
                        target="_blank"
                    >
                        {Icons.discord}
                    </Link>
                    <Link
                        href="https://x.com/ExHiraku"
                        className="fill-white hover:fill-primary transition duration-200"
                        target="_blank"
                    >
                        {Icons.twitter}
                    </Link>
                    <Link
                        href="https://github.com/ExHiraku"
                        className="fill-white hover:fill-primary transition duration-200"
                        target="_blank"
                    >
                        {Icons.github}
                    </Link>
                    <Link
                        href="https://twitch.tv/ExHiraku"
                        className="fill-white hover:fill-primary transition duration-200"
                        target="_blank"
                    >
                        {Icons.twitch}
                    </Link>
                </div>
            </div>
        </nav>
    )
}