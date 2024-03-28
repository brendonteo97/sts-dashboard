'use client';

import RecentRuns from '@/app/ui/panels/recent-runs';
import WinrateGraph from '@/app/ui/panels/win-rate';
import FloorChart from '@/app/ui/panels/floor-chart';

export default function Page() {
    return (
        <div className="flex-none p-6 grid-rows-2 md:overflow-y-auto md:p-12">
            <div className="flex flex-row max-h-full gap-6">
                <div>
                    <RecentRuns />
                </div>
                <div className="flex flex-col space-y-6">  
                    <WinrateGraph />
                    <FloorChart />
                </div>
            </div>
        </div>
    )
}