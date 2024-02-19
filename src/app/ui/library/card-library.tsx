'use client'

import Card from "@/app/ui/library/card";
import { AppContext } from "@/app/ui/app-context";
import { useContext, useState } from "react";
import CardModal from "@/app/ui/library/card-modal";
import CardListJson from "@/app/lib/card-list.json";
import CardTagsJson from "@/app/lib/card-tags.json";
import { CardList, CardOptions, CardTags } from "@/app/lib/definitions";
import { kreon_bold } from "../fonts";

export default function CardLibrary() {
    const { modalCard, setModalCard } = useContext(AppContext);
    const [ cardOptions, setCardOptions ] = useState<CardOptions>({
        upgraded: false,
    });

    const cardList = CardListJson as CardList;
    const cardTags = CardTagsJson as CardTags;
    const rarities = ["common", "uncommon", "rare"]

    const generateCards = () => {
        const cards = [];

        for (const character in cardList) {
            for (const type in cardList[character]) {
                for (const card of cardList[character][type]) {
                    const rarity = cardTags[character][type][card].find((tag) => rarities.includes(tag))!;
                    cards.push(
                        <Card
                            key={character + type + card}
                            character={character}
                            card={card}
                            type={type}
                            rarity={rarity}
                            upgraded={cardOptions.upgraded}
                            setHover={true}
                        />
                    );
                }
            }
        }

        cards.sort((a, b) => {
            if (a.props.card < b.props.card) return -1;
            if (a.props.card > b.props.card) return 1;
            return 0;
        });

        return cards;
    }

    const toggleUpgradeCheckbox = () => {
        const toggledCardOptions = {
            ...cardOptions,
            upgraded: !cardOptions.upgraded,
        }
        setCardOptions(toggledCardOptions);
    }

    return (
        <div className="flex flex-col p-6">
            <div className={`rounded-xl bg-gray-50 ${kreon_bold.className} text-lg text-gray-900 p-2`}>
                <label>
                    <input
                        type="checkbox"
                        onChange={() => toggleUpgradeCheckbox()}
                        checked={cardOptions.upgraded}
                    />
                    Upgraded?
                </label>
            </div>
            <div className="grid grid-cols-5 gap-5 justify-center overflow-y-auto pt-10 p-6">
                {generateCards()}
                <CardModal 
                    card={modalCard}
                    onClose={() => setModalCard({
                        character: "",
                        type: "",
                        card: "",
                        rarity: "",
                        upgraded: false,
                    })} 
                />
            </div>
        </div>
    )
}