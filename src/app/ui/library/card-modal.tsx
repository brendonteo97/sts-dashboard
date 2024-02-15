import { MouseEventHandler } from "react";
import Card from "@/app/ui/library/card";
import * as Constants from "@/app/lib/constants";
import { kreon } from "@/app/ui/fonts";

export default function CardModal({
    card, onClose
}: {
    card: string,
    onClose: MouseEventHandler<HTMLDivElement>,
}) {
    if (typeof card !== "string" || card.length === 0) return null;

    const tags = Constants.Default_Tags_Map[card];

    return (
        <div className="flex fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
            <div className="flex flex-row h-fit items-center" onClick={(e) => e.stopPropagation()}>
                <div className="bg-transparent z-10">
                    <Card characterCard={card} setHover={false}/>
                </div>
                <div className="flex flex-col bg-[#9c9c9a] p-4 pl-[4.0rem] justify-start h-[350px] -ml-10 z-0 rounded-xl gap-[0.25rem]">
                    {tags.map(tag => (
                        <div key={tag} className={`rounded-xl ${kreon.className} text-xl bg-black p-0.5`}>
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}