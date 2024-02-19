import { MouseEventHandler } from "react";
import Card from "@/app/ui/library/card";
import * as Constants from "@/app/lib/constants";
import { kreon } from "@/app/ui/fonts";
import cardTagsJson from "@/app/lib/card-tags.json";
import { CardModal, CardTags } from "@/app/lib/definitions";

export default function CardModal({
    card, onClose
}: {
    card: CardModal,
    onClose: MouseEventHandler<HTMLDivElement>,
}) {
    if (card.character.length === 0 || card.type.length === 0 || card.card.length === 0) return null;

    const cardTags = cardTagsJson as CardTags;
    const tags = cardTags[card.character][card.type][card.card];

    return (
        <div className="flex fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30" onClick={onClose}>
            <div className="flex flex-row h-fit items-center" onClick={(e) => e.stopPropagation()}>
                <div className="bg-transparent z-40">
                    <Card 
                        character={card.character}
                        card={card.card}
                        type={card.type}
                        rarity={card.rarity}
                        upgraded={card.upgraded}
                        setHover={false}
                    />
                </div>
                <div className="flex flex-col bg-[#9c9c9a] p-4 pl-[4.0rem] justify-start h-[350px] -ml-10 z-35 rounded-xl gap-[0.25rem]">
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