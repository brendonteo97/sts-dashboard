import { MouseEventHandler, useContext, useEffect, useState } from "react";
import Card from "@/app/ui/library/card";
import { kreon_light } from "@/app/ui/fonts";
import { CardModal, CardTags } from "@/app/lib/definitions";
import { AppContext } from "../app-context";
import TagDropdown from "./tag-dropdown";

export default function CardModal({
    card, onClose
}: {
    card: CardModal,
    onClose: MouseEventHandler<HTMLDivElement>,
}) {
    const { userTags } = useContext(AppContext);
    const [ showTagDropdown, setShowTagDropdown ] = useState(true);
    const [ tags, setTags ] = useState([] as string[]);

    useEffect(() => {
        if (card.character.length !== 0 || card.type.length !== 0 || card.card.length !== 0) {
            setTags(userTags[card.character][card.type][card.card]);
        }
    }, [card, userTags]);

    const handleAddTag = (newTag: string) => {
        setTags([...tags, newTag]);
    }

    if (card.character.length === 0 || card.type.length === 0 || card.card.length === 0) return null;

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
                <div className="grid grid-rows-6 grid-flow-col bg-[#546b70] p-4 pl-[4.0rem] justify-start h-[350px] -ml-10 z-35 rounded-xl gap-[1rem]">
                    {tags.map(tag => (
                        <div key={tag} className={`rounded-xl ${kreon_light.className} text-xl text-center bg-[#222a2b] p-1`}>
                            {tag}
                        </div>
                    ))}
                    <div className="grid grid-rows-subgrid row-start-6 relative">
                        <button className={`rounded-xl bg-[#222a2b] ${kreon_light.className}`} onClick={() => setShowTagDropdown(!showTagDropdown)}>
                            Add tag
                        </button>
                        <TagDropdown 
                            hidden={showTagDropdown} 
                            character={card.character}
                            type={card.type}
                            card={card.card}
                            onAddTag={handleAddTag}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}