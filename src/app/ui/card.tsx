import Image from 'next/image';
import { AppContext } from '@/app/ui/app-context';
import { useContext } from 'react';
import clsx from 'clsx';

export default function Card({
    characterCard, setHover
} : {
    characterCard: string,
    setHover: boolean,
}) {
    const [character, card] = characterCard.split("_");

    const imagePath = `/cards/${character}/${card}.webp`;

    const { modalCard: modalOpen, setModalCard: setModalOpen } = useContext(AppContext);

    return (
        <Image
            src={imagePath}
            className={clsx(
                "transition-transform tranform-gpu",
                {
                    "hover:scale-125": setHover,
                }
            )}
            onClick={() => {
                setModalOpen(characterCard);
            }}
            alt={`${card}`}
            width={323}
            height={443}
        />
    )
}