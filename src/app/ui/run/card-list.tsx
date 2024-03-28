import { CardDefaults, Run } from "@/app/lib/definitions";
import CardDefaultsJson from "@/app/lib/card-defaults.json";
import * as Constants from "@/app/lib/constants";
import { useEffect, useState } from "react";
import { kreon } from "../fonts";

export default function CardList({
    currentFloor, run
}: {
    currentFloor: number
    run: Run
}) {
    const [ cardList, setCardList ] = useState<{[card: string]: number}>({});

    useEffect(() => {
        const cardDefaults = CardDefaultsJson as CardDefaults;
        const character = Constants.Renamed_Chars[run.character_chosen].toLowerCase();

        let cards = [...cardDefaults[character]];

        run.card_choices.forEach((value, index, array) => {
            if (value.picked !== Constants.Skip) {
                if (value.floor <= currentFloor + 1) {
                    cards.push(value.picked.toLowerCase().replaceAll(' ', '_'));
                }
            }
        })

        let cardList: {[card: string]: number} = {};

        cards.forEach((card) => {
            if (card in cardList) {
                cardList[card] += 1;
            } else {
                cardList[card] = 1;
            }
        });

        setCardList(cardList);
    }, [currentFloor, run])

    return (
        <div className="flex flex-grow rounded-xl bg-gray-50 p-4">
            <div className="grid grid-cols-3">
                {Object.keys(cardList).map((card) => (
                    <p key={card} className={`text-black text-lg ${kreon.className}`}>{card} x{cardList[card]}</p>
                ))}
            </div>
        </div>
    )
}