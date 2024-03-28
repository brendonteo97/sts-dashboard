import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../app-context";
import * as Constants from '@/app/lib/constants';

export default function VictoryDropdown({
    show
}: {
    show: string
}) {
    const { importedRuns, setRunsContext} = useContext(AppContext);
    const [ victoryFilter, setVictoryFilter ] = useState<boolean | null>(null);

    useEffect(() => {
        const filteredRuns = importedRuns.filter((run) => {
            const victoryMatch = victoryFilter === null || victoryFilter === run.victory;
            return victoryMatch;
        });
        setRunsContext(filteredRuns);
    }, [victoryFilter, importedRuns, setRunsContext]);

    if (show === Constants.Victory) {
        return (
            <div className="absolute origin-top-left rounded-xl bg-gray-100 py-2 px-1 border-black border-2 flex flex-col">
                <div>
                    <input
                        type="radio"
                        checked={victoryFilter === true}
                        onClick={() => setVictoryFilter(true)}
                    />
                    True
                </div>
                <div>
                    <input
                        type="radio"
                        checked={victoryFilter !== true}
                        onClick={() => setVictoryFilter(false)}
                    />
                    False
                </div>
            </div>
        )
    }
    return null;
}