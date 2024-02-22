'use client';

import { useContext } from 'react';
import { AppContext } from '@/app/ui/app-context';
import { kreon } from "@/app/ui/fonts";
import * as Constants from "@/app/lib/constants";
import { timestampToTimeString } from '@/app/lib/data';
import { useParams } from 'next/navigation';
import { Run } from '@/app/lib/definitions';
import RunChart from '@/app/ui/run/run-chart';
import CardComposition from '@/app/ui/run/card-composition';

export default function Page() {
    const {runsContext} = useContext(AppContext);

    const params = useParams<{ play_id: string }>();
    const run = runsContext.find(runsContext => runsContext.play_id === params.play_id) as Run;

    return (
        <div className="flex flex-col w-[132rem]">
            <div>
                <p className={`'text-[#efc851] text-xl ${kreon.className}`}>{Constants.Renamed_Chars[run.character_chosen]}, {timestampToTimeString(run.timestamp)}</p>
                <RunChart play_id={params.play_id} />
            </div>
            <div>
                <CardComposition />
            </div>
        </div>
    )
}