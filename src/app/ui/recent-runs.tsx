import { useContext, useState } from "react";
import { AppContext } from "@/app/ui/app-context";
import { kreon, kreon_bold } from "@/app/ui/fonts";
import CharacterImage from "@/app/ui/character-image";
import { playtimeToTimeString, timestampToTimeString, renameCharacterChosen } from "@/app/lib/data";
import { Run } from "@/app/lib/definitions";
import Link from "next/link";

export default function RecentRuns() {
    const { runs, setRuns } = useContext(AppContext);
    const [sortConfig, setSortConfig] = useState<{ key: keyof Run; direction: 'asc' | 'desc' } | null>(null);

    const handleSort = (key: keyof Run) => {
        let direction: 'asc' | 'desc' = 'asc';

        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }

        const sortedRuns = [...runs].sort((a, b) => {
            if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
            if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
            return 0;
        });

        setRuns(sortedRuns);
        setSortConfig({ key, direction });
    }

    return (
        <div className="flex w-1/3 flex-col md:col-span-4 max-h-fit">
            <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4 overflow-auto">
                <table className={`hidden min-w-full rounded-md text-gray-900 md:table ${kreon.className}`}>
                    <thead className="rounded-md bg-gray-50 text-left text-xl font-normal"> 
                        <tr>
                            <th scope="col" className="px-4 py-5 font-medium sm:pl-6" onClick={() => handleSort('character_chosen')}>
                                Character
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium" onClick={() => handleSort('timestamp')}>
                                Timestamp
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium" onClick={() => handleSort('playtime')}>
                                Time Taken
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium" onClick={() => handleSort('ascension_level')}>
                                Ascension
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium" onClick={() => handleSort('victory')}>
                                Victory?
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 text-gray-900">
                        {runs.map((run) => (
                                <tr key={run.play_id} className="group">
                                    <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-lg text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                                        <Link
                                            href={`/run/${run.play_id}`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <CharacterImage character={run.character_chosen} />
                                                <p>{renameCharacterChosen(run.character_chosen)}</p>
                                            </div>
                                        </Link>
                                    </td>
                                    <td className="whitespace-nowrap bg-white px-4 py-5 text-lg">
                                        {timestampToTimeString(run.timestamp)}
                                    </td>
                                    <td className="whitespace-nowrap bg-white px-4 py-5 text-lg">
                                        {playtimeToTimeString(run.playtime)}
                                    </td>
                                    <td className="whitespace-nowrap bg-white px-4 py-5 text-lg">
                                        {run.ascension_level}
                                    </td>
                                    <td className="whitespace-nowrap bg-white px-4 py-5 text-lg group-first-of-type:rounded-md group-last-of-type:rounded-md">
                                        {`${run.victory}`}
                                    </td>
                                </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}