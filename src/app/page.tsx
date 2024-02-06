'use client';

import { useContext } from 'react';
import { AppContext } from '@/app/ui/app-context';
import RecentRuns from '@/app/ui/recent-runs';
import placeholder from '@/app/lib/placeholderRun.json';
import { Run } from '@/app/lib/definitions';

export default function Page() {
    const { runs, setRuns } = useContext(AppContext);

    if (runs.length === 0) {
        setRuns([placeholder] as Run[]);
    }

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