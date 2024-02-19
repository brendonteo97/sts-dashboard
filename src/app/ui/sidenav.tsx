'use client';

import { FileWithPath } from "react-dropzone";
import { handleDrop } from "@/app/lib/data";
import MyDropzone from "@/app/ui/dropzone";
import Link from "next/link";
import NavLinks from "@/app/ui/nav-links";
import { useContext } from "react";
import { AppContext } from "@/app/ui/app-context";
import { kreon } from "@/app/ui/fonts";

export default function SideNav() {
    const {importedRuns, setImportedRuns} = useContext(AppContext);
    const {runsContext, setRunsContext} = useContext(AppContext);
    
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <Link
                className=""
                href="/"
            >
                <div>
                    <p className={`text-[#efc851] text-xl ${kreon.className}`}>Slay the Spire Dashboard</p>
                </div>
            </Link>
            <div>
                <MyDropzone onDrop={
                    async (acceptedFiles: FileWithPath[]) => {
                        const runs = await handleDrop(acceptedFiles);
                        setImportedRuns(runs);
                        setRunsContext(runs);
                    }
                }/>
            </div>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <NavLinks />
                <div className="hidden h-auto w-full grow rounder-md bg-[#8c3b34] md:block"></div>
            </div>
        </div>
    );
}