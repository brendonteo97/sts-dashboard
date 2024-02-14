'use client';

import { useContext } from 'react';
import { AppContext } from '@/app/ui/app-context';
import RecentRuns from '@/app/ui/panels/recent-runs';
import WinrateGraph from '@/app/ui/panels/win-rate';
import RunFilters from '@/app/ui/panels/run-filters'

export default function Page() {
    return (
        <div className="flex flex-row max-h-full w-screen gap-6">
            <div>
                <RecentRuns />
            </div>
            <div className="flex flex-col space-y-6 max-h-full w-auto">
                <RunFilters />
                <WinrateGraph />
            </div>
        </div>
    )
}