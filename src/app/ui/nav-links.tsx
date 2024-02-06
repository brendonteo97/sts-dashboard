'use client';

import { usePathname } from "next/navigation";
import clsx from 'clsx';
import Link from "next/link";
import { kreon, kreon_bold } from "@/app/ui/fonts";

const links = [
    { name: 'Dashboard', href: '/', },
    { name: 'Test2', href: '/run', },
    { name: 'Test3', href: '/test', },
]

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-[#8c3b34] outline-[#cdb45f] outline-4 p-3 text-lg font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                            {
                                'bg-[#c24b4a] outline-[#cdb45f] text-blue-600': pathname === link.href,
                            }
                        )}
                    >
                        <p className={`hidden md:block ${kreon_bold.className} text-lg`}>{link.name}</p>
                    </Link>
                )
            })}
        </>
    )
}