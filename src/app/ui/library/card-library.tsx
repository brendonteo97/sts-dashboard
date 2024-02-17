'use client'

import Card from "@/app/ui/library/card";
import { AppContext } from "@/app/ui/app-context";
import { useContext } from "react";
import CardModal from "@/app/ui/library/card-modal";
import CardTagsJson from "@/app/lib/card-tags.json";
import { CardTags } from "@/app/lib/definitions";

export default function CardLibrary() {
    const { modalCard, setModalCard } = useContext(AppContext);

    const cardTags = CardTagsJson as CardTags;
    const rarities = ["common", "uncommon", "rare"]

    const generateCards = () => {
        const cards = [];

        for (const character in cardTags) {
            for (const type in cardTags[character]) {
                for (const card in cardTags[character][type]) {
                    const rarity = cardTags[character][type][card].find((tag) => rarities.includes(tag))!;
                    cards.push(
                        <Card
                            key={character + type + card}
                            character={character}
                            card={card}
                            type={type}
                            rarity={rarity}
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

    return (
        <div className="grid grid-cols-5 gap-5 justify-center">
            {generateCards()}
            <CardModal card={modalCard} onClose={() => setModalCard("")} />
        </div>
    )
}