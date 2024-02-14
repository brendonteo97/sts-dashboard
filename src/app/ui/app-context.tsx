'use client';

import React, { useState, createContext } from 'react';
import { Run } from '@/app/lib/definitions';
import placeholder from '@/app/lib/placeholderRun.json';

export const AppContext = createContext({
    importedRuns: [] as Run[],
    setImportedRuns: {} as React.Dispatch<React.SetStateAction<Run[]>>,
    runsContext: [] as Run[],
    setRunsContext: {} as React.Dispatch<React.SetStateAction<Run[]>>,
    modalCard: "" as string,
    setModalCard: {} as React.Dispatch<React.SetStateAction<string>>,
})

export function AppContextProvider({ 
    children 
}: {
    children: React.ReactNode
}) {
    const [importedRuns, setImportedRuns] = useState([placeholder] as Run[]);
    const [runsContext, setRunsContext] = useState([] as Run[]);
    const [modalCard, setModalCard] = useState("");

    return (
        <AppContext.Provider value={{importedRuns, setImportedRuns, runsContext, setRunsContext, modalCard, setModalCard}}>
            { children }
        </AppContext.Provider>
    )
}