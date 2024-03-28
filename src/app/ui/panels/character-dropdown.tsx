import * as Constants from '@/app/lib/constants';
import { AppContext } from '../app-context';
import { useContext, useEffect, useState } from 'react';

interface RunFilters {
    Characters: string[],
    Timestamp: number | null,
    AscensionLevel: number | null,
    Victory: boolean | null,
}

export default function CharacterDropdown({
    show
}: {
    show: string
}) {
    const { importedRuns, setRunsContext} = useContext(AppContext);
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

    useEffect(() => {
        const filteredRuns = importedRuns.filter((run) => {
            const characterMatch = runFilters.Characters.includes(run.character_chosen);
            const victoryMatch = runFilters.Victory === null || runFilters.Victory === run.victory;
            return characterMatch && victoryMatch;
        });
        setRunsContext(filteredRuns);
    }, [runFilters, importedRuns, setRunsContext]);

    if (show === Constants.Character_Chosen) {
        return (
            <div className="absolute origin-top-left rounded-xl bg-gray-100 py-2 px-1 border-black border-2">
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
        )
    }
    return null;
}