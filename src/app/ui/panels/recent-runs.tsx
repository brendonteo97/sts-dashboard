import { useContext, useState } from "react";
import { AppContext } from "@/app/ui/app-context";
import { kreon, kreon_bold } from "@/app/ui/fonts";
import CharacterImage from "@/app/ui/character-image";
import { playtimeToTimeString, timestampToTimeString, renameCharacterChosen } from "@/app/lib/data";
import { Run } from "@/app/lib/definitions";
import Link from "next/link";
import CharacterDropdown from "@/app/ui/panels/dropdowns/character-dropdown";
import * as Constants from '@/app/lib/constants';
import TimestampDropdown from "./dropdowns/timestamp-dropdown";
import Image from 'next/image';
import VictoryDropdown from "./dropdowns/victory-dropdown";

export default function RecentRuns() {
    const { importedRuns, setImportedRuns, runsContext, setRunsContext } = useContext(AppContext);
    const [sortConfig, setSortConfig] = useState<{ key: keyof Run; direction: 'asc' | 'desc' } | null>(null);
    const [showDropdownType, setShowDropdownType] = useState('');

    const handleSort = (key: keyof Run) => {
        let direction: 'asc' | 'desc' = 'asc';

        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }

        const sortedRuns = [...importedRuns].sort((a, b) => {
            if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
            if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
            return 0;
        });

        setImportedRuns(sortedRuns);
        setRunsContext(sortedRuns);
        setSortConfig({ key, direction });
    }

    const handleSetShowDropdownType = (type: string) => {
        if (type === showDropdownType) {
            setShowDropdownType('');
        } else {
            setShowDropdownType(type);
        }
    }

    return (
        <div className="flex-none w-[84rem] h-full flex-col justify-between rounded-xl bg-gray-50 px-4 pb-4 overflow-y-auto md:col-span-4">
            <table className={`hidden min-w-full rounded-md text-gray-900 md:table ${kreon.className}`}>
                <thead className="rounded-md bg-gray-50 text-left text-xl font-normal sticky top-0"> 
                    <tr>
                        <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                            <div className='flex flex-row'>
                                Character
                                <Image
                                    src='dropdown-svgrepo-com.svg'
                                    alt='Dropdown'
                                    width={25}
                                    height={25}
                                    onClick={() => handleSetShowDropdownType(Constants.Character_Chosen)}
                                />
                            </div>
                            <CharacterDropdown show={showDropdownType}/>
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            <div className="flex flex-row">
                                Timestamp
                                <Image
                                    src='dropdown-svgrepo-com.svg'
                                    alt='Dropdown'
                                    width={25}
                                    height={25}
                                    onClick={() => handleSetShowDropdownType(Constants.Timestamp)}
                                />
                            </div>
                            <TimestampDropdown show={showDropdownType}/>
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium" onClick={() => handleSort('playtime')}>
                            Time Taken
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium" onClick={() => handleSort('ascension_level')}>
                            Ascension
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium" onClick={() => handleSort('floor_reached')}>
                            Floor Reached
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            <div className="flex flex-row">
                                Victory?
                                <Image
                                    src='dropdown-svgrepo-com.svg'
                                    alt='Dropdown'
                                    width={25}
                                    height={25}
                                    onClick={() => handleSetShowDropdownType(Constants.Victory)}
                                />
                            </div>
                            <VictoryDropdown show={showDropdownType}/>
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium" onClick={() => handleSort('play_id')}>
                            Play ID
                        </th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                    {runsContext.map((run) => (
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
                                <td className="whitespace-nowrap bg-white px-4 py-5 text-lg">
                                    {run.floor_reached}
                                </td>
                                <td className="whitespace-nowrap bg-white px-4 py-5 text-lg">
                                    {`${run.victory}`}
                                </td>
                                <td className="whitespace-nowrap bg-white px-4 py-5 text-lg">
                                    {run.play_id}
                                </td>
                            </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}