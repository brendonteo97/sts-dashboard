'use client';

import { useContext, useState } from 'react';
import { AppContext } from '@/app/ui/app-context';
import { kreon } from "../../ui/fonts";
import * as Constants from "@/app/lib/constants";
import { timestampToTimeString } from '@/app/lib/data';
import { useParams } from 'next/navigation';
import { Run } from '@/app/lib/definitions';
import RunChart from '@/app/ui/run/run-chart';
import CardComposition from '@/app/ui/run/card-composition';

export default function Page() {
    const {runsContext} = useContext(AppContext);
    const [ currentFloorIndex, setCurrentFloorIndex ] = useState(0);

    const params = useParams<{ play_id: string }>();
    const run = runsContext.find(runsContext => runsContext.play_id === params.play_id) as Run;

    const changeCurrentFloor = (floor: number) => {
        setCurrentFloorIndex(floor);
    }

    return (
        <div className="flex flex-col flex-grow overflow-y-auto p-2 gap-4">
            <div>
                <p className={`'text-[#efc851] text-xl ${kreon.className}`}>{Constants.Renamed_Chars[run.character_chosen]}, {timestampToTimeString(run.timestamp)}</p>
                <RunChart run={run} onClick={changeCurrentFloor}/>
            </div>
            <div className="flex flex-row">
                <div className="flex w-1/2">

                </div>
                <div className="flex w-1/2">
                    <CardComposition run={run} currentFloor={currentFloorIndex}/>
                </div>
            </div>
        </div>
    )
}