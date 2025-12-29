"use client";
import { Menu, Sparkles } from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google"; 
import { UserButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

const font = Poppins({
    subsets: ["latin"],
    weight: "600",
});

export const Navbar = () =>{    
    return (
        <div className="fixed w-full z-50 flex justify-between item-center py-2 border-b border-primary/10 bg-secondary h-16">
            <div className="flex items-center">
                <MobileSidebar/>
                <Link href="/">
                    <h1 className={cn(
                        "hidden md:block text-xl md:text-3xl font-bold text-primary",
                        font.className
                        )}>
                            AI Companion
                    </h1>

                </Link>
            </div>
            <div className="flex items-center gap-x-3">
                <Button size="sm" variant="premium">
                    Upgrade 
                    <Sparkles className="w-4 h-4 ml-2 fill-white text-white"/>
                </Button>
                <ModeToggle/>
                <UserButton/>

            </div>
        </div>
    )
}