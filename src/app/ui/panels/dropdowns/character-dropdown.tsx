import * as Constants from '@/app/lib/constants';
import { AppContext } from '../../app-context';
import { useContext, useEffect, useState } from 'react';

export default function CharacterDropdown({
    show
}: {
    show: string
}) {
    const { importedRuns, setRunsContext} = useContext(AppContext);
    const [ runFilters, setRunFilters ] = useState<string[]>([])

    const toggleCharacterCheckbox = (character: string) => {
        const updatedCharacters = runFilters.includes(character)
            ? runFilters.filter(char => char !== character)
            : [...runFilters, character];
        setRunFilters(prevFilters => ({ ...prevFilters, Characters: updatedCharacters}));
    }

    useEffect(() => {
        const filteredRuns = importedRuns.filter((run) => {
            const characterMatch = runFilters.includes(run.character_chosen);
            return characterMatch;
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
                                checked={runFilters.includes(character)}
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