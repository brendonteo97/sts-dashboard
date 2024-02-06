'use client';

import React, { useState, createContext } from 'react';
import { Run } from '@/app/lib/definitions';

export const RunContext = createContext({
    runs: [] as Run[],
    setRuns: {} as React.Dispatch<React.SetStateAction<Run[]>>,
})

export function RunContextProvider({ 
    children 
}: {
    children: React.ReactNode
}) {
    const [runs, setRuns] = useState([] as Run[]);

    return (
        <RunContext.Provider value={{runs, setRuns}}>
            { children }
        </RunContext.Provider>
    )
}