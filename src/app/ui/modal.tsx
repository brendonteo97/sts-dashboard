import { MouseEventHandler } from "react";
import Card from "@/app/ui/card";

export default function Modal({
    card, onClose
}: {
    card: string,
    onClose: MouseEventHandler<HTMLDivElement>,
}) {
    if (typeof card !== "string" || card.length === 0) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
            <div className="bg-black p-6 rounded-lg" onClick={(e) => e.stopPropagation()}>
                <Card characterCard={card} setHover={false}/>
            </div>
        </div>
    )
}