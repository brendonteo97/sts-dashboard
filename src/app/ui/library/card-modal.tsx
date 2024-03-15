import { MouseEventHandler, useContext, useEffect, useState } from "react";
import Card from "@/app/ui/library/card";
import { kreon_light } from "@/app/ui/fonts";
import { CardModal, CardTags } from "@/app/lib/definitions";
import { AppContext } from "../app-context";
import TagDropdown from "./tag-dropdown";
import clsx from "clsx";

export default function CardModal({
    card
}: {
    card: CardModal
}) {
    const { userTags, setModalCard } = useContext(AppContext);
    const [ hideTagDropdown, setHideTagDropdown ] = useState(true);
    const [ tags, setTags ] = useState([] as string[]);

    useEffect(() => {
        if (card.character.length !== 0 || card.type.length !== 0 || card.card.length !== 0) {
            setTags(userTags[card.character][card.type][card.card]);
        }
    }, [card, userTags]);

    const handleAddTag = (newTag: string) => {
        setTags([...tags, newTag]);
        userTags[card.character][card.type][card.card].push(newTag);
        setHideTagDropdown(true);
    }

    const closeModal: MouseEventHandler<HTMLDivElement> = () => {
        setModalCard({
            character: "",
            type: "",
            card: "",
            rarity: "",
            upgraded: false,
        });
        setHideTagDropdown(true);
    }

    if (card.character.length === 0 || card.type.length === 0 || card.card.length === 0) return null;

    return (
        <div className="flex fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30" onClick={closeModal}>
            <div className="flex flex-row h-fit items-center relative" onClick={(e) => e.stopPropagation()}>
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
                <div className={`grid grid-rows-6 grid-flow-col bg-sts_blue p-4 pl-[4.0rem] justify-start h-[350px] -ml-10 z-30 rounded-xl gap-[1rem]`}>
                    {tags.map(tag => (
                        <div key={tag} className={`rounded-xl ${kreon_light.className} text-xl text-center bg-sts_blue_dark p-1`}>
                            {tag}
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-[0.5rem] z-20 right-[1rem]">
                    <button className={clsx(
                        `rounded-b-xl py-2 px-4 bg-sts_blue_dark border-x-4 border-b-4 border-sts_blue ${kreon_light.className} hover:bg-sts_blue_highlighted`,
                        {
                            "bg-sts_blue_highlighted": !hideTagDropdown,
                        }
                    )} onClick={() => setHideTagDropdown(!hideTagDropdown)}
                    >
                        Add tag
                    </button>
                    <TagDropdown 
                        hidden={hideTagDropdown} 
                        onAddTag={handleAddTag}
                    />
                </div>
            </div>
        </div>
    )
}