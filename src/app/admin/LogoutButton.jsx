"use client";

import { useRouter } from "next/navigation";
export default function LogotButton(){
    const router = useRouter();

    const handleLogout = async () => {
        await fetch("/api/admin/logout",{
            method:"POST",

        });

        router.push("/admin/login")
        router.refresh();
    };
    return(
        <button
            onClick={handleLogout}
            className="w-full rounded-lg bg-red-600 px-4 py-2 text-white"
        >
            Logout
        </button>
    )
}