import { FileWithPath } from "react-dropzone";
import { Run } from "./definitions";

const readFile = (file: File): Promise<string> => {
    return new Promise((resolve) => {
        const reader = new FileReader();

        reader.onload = (event) => {
            const fileContent = event.target?.result as string;
            resolve(fileContent);
        }

        reader.readAsText(file);
    });
};

export async function handleDrop(acceptedFiles: FileWithPath[]) {
    const runs: Run[] = await Promise.all(
            acceptedFiles.map(async (file) => {
                const content: string = await readFile(file);
                const run: Run = JSON.parse(content) as Run;
                return run;
            })
        );

    return runs;
}

export function playtimeToTimeString(playtime: number) {
    const hours = Math.floor(playtime / 3600);
    const minutes = Math.floor((playtime % 3600) / 60 );
    const seconds = playtime % 60;

    const hoursString = String(hours).padStart(2, '0');
    const minutesString = String(minutes).padStart(2, '0');
    const secondsString = String(seconds).padStart(2, '0');

    return (
        `${hoursString}:${minutesString}:${secondsString}`
    );
}

export function timestampToTimeString(timestamp: number) {
    const date = new Date(timestamp * 1000);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return (
        `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    )
}

export function renameCharacterChosen(character: string) {
    switch (character) {
        case "THE_SILENT": {
            return 'Silent';
        }
        case "IRONCLAD": {
            return 'Ironclad';
        }
        case "DEFECT": {
            return 'Defect';
        }
        case "WATCHER": {
            return 'Watcher';
        }
    }
}