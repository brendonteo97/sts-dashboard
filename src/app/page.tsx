'use client';

import { useContext } from 'react';
import { RunContext } from '@/app/ui/run-context';
import { kreon, kreon_bold } from '@/app/ui/fonts';
import RecentRuns from '@/app/ui/recent-runs';

export default function Page() {
    const { runs, setRuns } = useContext(RunContext);

    return (
        <main>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                {runs.length !== 0 ? (
                    <RecentRuns />
                ) : (<></>)}
            </div>
        </main>
    )
}