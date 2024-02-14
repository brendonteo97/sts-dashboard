'use client';

import RecentRuns from '@/app/ui/panels/recent-runs';
import WinrateGraph from '@/app/ui/panels/win-rate';
import RunFilters from '@/app/ui/panels/run-filters'
import FloorChart from '@/app/ui/panels/floor-chart';

export default function Page() {
    return (
        <div className="flex flex-row max-h-full w-screen gap-6">
            <div>
                <RecentRuns />
            </div>
            <div className="flex flex-col space-y-6 w-auto">
                <RunFilters />
            </div>
            <div className="flex flex-col space-y-6">  
                <WinrateGraph />
                <FloorChart />
            </div>
        </div>
    )
}