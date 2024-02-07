'use client';

import { useContext } from 'react';
import { AppContext } from '@/app/ui/app-context';
import RecentRuns from '@/app/ui/recent-runs';
import placeholder from '@/app/lib/placeholderRun.json';
import { Run } from '@/app/lib/definitions';
import WinrateGraph from './ui/graphs/win-rate';

export default function Page() {
    const { runs, setRuns } = useContext(AppContext);

    if (runs.length === 0) {
        setRuns([placeholder] as Run[]);
    }

    return (
        <div className="flex flex-auto w-screen h-auto max-h-full gap-6">
            {runs.length !== 0 ? (
                <RecentRuns />
            ) : (<></>)}
            {runs.length !== 0 ? (
                <WinrateGraph />
            ) : (<></>)}
        </div>
    )
}