import Image from 'next/image';
import { AppContext } from '@/app/ui/app-context';
import { useContext } from 'react';
import clsx from 'clsx';
import CardDetailsJson from "@/app/lib/card-details.json";
import { CardDetails } from '@/app/lib/definitions';
import { kreon_bold, kreon_light } from '@/app/ui/fonts';
import React from 'react';

export default function Card({
    character, card, type, rarity, setHover
} : {
    character: string,
    card: string,
    type: string,
    rarity: string,
    setHover: boolean,
}) {
    const imagePath = `/cards/${character}/cardarts/${type}/${card}.png`;
    const cardFrame = `/cards/${character}/cardframes/` + type + "_" + rarity + ".png";

    const { modalCard, setModalCard } = useContext(AppContext);

    const cardDetails = CardDetailsJson as CardDetails;
    const cardTitle = card.split('_').map((part) => 
        part.charAt(0).toUpperCase() + part.slice(1)
    ).join(' ');

    const cardDescription = cardDetails[character][type][card].description.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));

    return (
        <div onClick={() => {
            setModalCard(card);
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
            <div className={`absolute z-20 w-[242px] top-[36px]`}>
                <p className={`text-center text-[24px] text-[#fcf6e4] ${kreon_bold.className} text-shadow `}>
                    {cardTitle}
                </p>
            </div>
            <div className={`absolute z-20 top-[2px] left-[22px]`}>
                <p className={`${kreon_bold.className} text-[40px] text-[#fff6e3]`}>
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