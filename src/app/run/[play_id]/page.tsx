'use client';

import React, { useContext, useState } from 'react';
import { AppContext } from '@/app/ui/app-context';
import { Run } from '@/app/lib/definitions';
import { useParams } from 'next/navigation';

export default function Page() {
    const {runsContext, setRunsContext} = useContext(AppContext);

    const params = useParams<{ play_id: string }>();
    const run = runsContext.find(runsContext => run.play_id === params.play_id) as Run;

    return (
        <main>
            <div>
                <p>{run.play_id}</p>
            </div>
        </main>
    )
}