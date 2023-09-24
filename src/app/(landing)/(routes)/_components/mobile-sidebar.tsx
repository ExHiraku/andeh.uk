import { Menu } from "lucide-react";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Sidebar } from "./sidebar";

export const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger className="md:hidden hover:opacity-75 transition">
                <Menu />
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
                <Sidebar />
            </SheetContent>
        </Sheet>
    )
}