import Image from 'next/image';
import { AppContext } from '@/app/ui/app-context';
import { useContext } from 'react';

export default function Card({
    character, card
} : {
    character: string,
    card: string,
}) {
    const imagePath = `/cards/${character}/${card}.webp`;

    const { modalOpen, setModalOpen } = useContext(AppContext);

    return (
        <Image
            src={imagePath}
            className="hover:scale-125 transition-transform tranform-gpu"
            onClick={() => {
                setModalOpen(true);
                console.log("Setting modal open to true");
            }}
            alt={`${card}`}
            width={323}
            height={443}
        />
    )
}