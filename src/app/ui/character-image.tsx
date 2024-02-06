import Image from 'next/image';

export default function CharacterImage({
    character,
}: {
    character: string;
}) {
    const imagePathMap: Record<string, string> = {
        DEFECT: '/defect.jpg',
        IRONCLAD: '/ironclad.jpg',
        THE_SILENT: '/silent.jpg',
        WATCHER: '/watcher.jpg', 
    };

    const imagePath = imagePathMap[character];

    return (
        <Image
            src={imagePath}
            className="rounded-full"
            alt={`${character}`}
            width={28}
            height={28}
        />
    )
}