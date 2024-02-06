'use client';

import React, { useContext, useState } from 'react';
import { RunContext } from '@/app/ui/run-context';
import { Run } from '@/app/lib/definitions';
import { useParams } from 'next/navigation';

export default function Page() {
    const {runs, setRuns} = useContext(RunContext);

    const params = useParams<{ play_id: string }>();
    const run = runs.find(run => run.play_id === params.play_id) as Run;

    return (
        <main>
            <div>
                <p>{run.play_id}</p>
            </div>
        </main>
    )
}