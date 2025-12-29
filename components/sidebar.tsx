"use client";
import {Home, Plus, Settings} from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Sidebar = () => {
    const pathname = usePathname();
    const Routes = [
        {
            icon: Home,
            href: "/",
            label: "Home",
            pro: false,
        },
        {
            icon: Plus,
            href: "/companion/new",
            label: "Create",
            pro: true,
        },
        {
            icon: Settings,
            href: "/settings",
            label: "Settings",
            pro: false,
        },
    ]
    const onNavigate = (url: string, pro: boolean) => {
        return router.push(url);
    }

    return (
        <div className="space-y-4 bg-secondary h-full flex-col text-primary bg-secondary">
            <div className="p-3 flex flex-1 justify-center">
                <div className="space-y-2">
                    {Routes.map((route) => (
                        <Link href={route.href} key={route.href}>
                            <div onClick={() => onNavigate(route.href, route.pro)}
                             className={cn(
                                "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                                pathname === route.href && "bg-primary/10 text-primary"
                            )}>
                                <div className="flex flex-col items-center gap-x-2 flex-1">
                                    <route.icon className="w-5 h-5"/>
                                    {route.label}
                                </div>
                                <ChevronRight className="w-4 h-4"/>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}