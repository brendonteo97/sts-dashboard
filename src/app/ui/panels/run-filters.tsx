import { kreon } from "@/app/ui/fonts";
import React, { useContext, useState } from "react";
import { AppContext } from "@/app/ui/app-context";
import * as Constants from "@/app/lib/constants";

interface RunFilters {
    Characters: string[],
    Timestamp: number | null,
    AscensionLevel: number | null,
    Victory: boolean | null,
}

export default function RunFilters() {
    const { importedRuns, setRunsContext } = useContext(AppContext);
    const [ runFilters, setRunFilters ] = useState<RunFilters>({
        Characters: [Constants.Ironclad_Data, Constants.Silent_Data, Constants.Defect_Data, Constants.Watcher_Data],
        Timestamp: null,
        AscensionLevel: null,
        Victory: null,
    })

    const toggleCharacterCheckbox = (character: string) => {
        const updatedCharacters = runFilters.Characters.includes(character)
            ? runFilters.Characters.filter(char => char !== character)
            : [...runFilters.Characters, character];
        setRunFilters(prevFilters => ({ ...prevFilters, Characters: updatedCharacters}));
    }

    React.useEffect(() => {
        const filteredRuns = importedRuns.filter((run) => {
            const characterMatch = runFilters.Characters.includes(run.character_chosen);
            const victoryMatch = runFilters.Victory === null || runFilters.Victory === run.victory;
            return characterMatch && victoryMatch;
        });
        setRunsContext(filteredRuns);
    }, [runFilters, importedRuns, setRunsContext]);

    return (
        <div className="rounded-xl bg-gray-50 w-[36rem]">
            <div className={`grid grid-cols-3 gap-4 p-4 ${kreon.className} text-lg text-gray-900`}>
                <div className="col-start-1">
                    <p>Character: </p>
                </div>
                <div className="grid grid-cols-2 gap-4 col-start-2 col-span-2">
                    {Object.keys(Constants.Renamed_Chars).map(character => (
                        <div key={character}>
                            <label>
                                <input
                                    type="checkbox"
                                    onChange={() => toggleCharacterCheckbox(character)}
                                    value={character}
                                    checked={runFilters.Characters.includes(character)}
                                />
                                {Constants.Renamed_Chars[character]}
                            </label>
                        </div>
                    ))}
                </div>
                <div className="col-start-1">Timestamp</div>
                <div className="col-start-1">Ascension Level</div>
                <div className="col-start-1">Victory</div>
            </div>
        </div>
    )
}