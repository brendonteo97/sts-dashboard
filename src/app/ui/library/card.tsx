import Image from 'next/image';
import { AppContext } from '@/app/ui/app-context';
import { useContext } from 'react';
import clsx from 'clsx';
import CardDetailsJson from "@/app/lib/card-details.json";
import { CardDetails } from '@/app/lib/definitions';
import { kreon_bold, kreon_light } from '@/app/ui/fonts';
import React from 'react';

export default function Card({
    character, card, type, rarity, upgraded, setHover
} : {
    character: string,
    card: string,
    type: string,
    rarity: string,
    upgraded: boolean,
    setHover: boolean,
}) {
    const { modalCard, setModalCard } = useContext(AppContext);
    const baseCard = card;
    if (upgraded) {
        card += "+";
    }

    const imagePath = `/cards/${character}/cardarts/${type}/${baseCard}.png`;
    const cardFrame = `/cards/${character}/cardframes/` + type + "_" + rarity + ".png";

    const cardDetails = CardDetailsJson as CardDetails;
    const cardTitle = card
                        .split('_')
                        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
                        .join(' ');

    const cardDescription = cardDetails[character][type][card].description.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));

    return (
        <div onClick={() => {
            setModalCard({
                character: character,
                card: baseCard,
                type: type,
                rarity: rarity,
                upgraded: upgraded,
            });
        }} className={clsx(
            "flex transition-transform tranform-gpu z-10 w-[323px] h-[443px] relative justify-center",
            {
                "hover:scale-125": setHover,
            }
        )}>
            <div className="absolute z-10">
                <Image
                    src={cardFrame}
                    alt={`${type} + "_" + ${rarity}`}
                    width="1050"
                    height="1365"
                />
            </div>
            <div className="absolute z-0 w-[242px] top-[60px]">
                <Image
                    src={imagePath}
                    alt={`${card}`}
                    width="380"
                    height="500"
                />
            </div>
            <div className={`absolute z-20 w-[242px] top-[34px]`}>
                <p className={`text-center text-[26px] text-[#4e4747] ${kreon_bold.className} text-shadow `}>
                    {cardTitle}
                </p>
            </div>
            <div className={`absolute z-20 top-[2px] left-[23px]`}>
                <p className={`${kreon_bold.className} text-[40px] text-[#4e4747]`}>
                    {cardDetails[character][type][card].energy}
                </p>
            </div>
            <div className={`grid place-content-center absolute z-20 w-[242px] h-[154px] top-[244px]`}>
                <p className={`text-center text-[24px] text-[#fff6e5] leading-tight ${kreon_light.className}`}>
                    {cardDescription}
                </p>
            </div>
        </div>
    )
}