'use client';

import React, { useState, createContext } from 'react';
import { CardModal, Run } from '@/app/lib/definitions';
import placeholder from '@/app/lib/placeholderRun.json';

export const AppContext = createContext({
    importedRuns: [] as Run[],
    setImportedRuns: {} as React.Dispatch<React.SetStateAction<Run[]>>,
    runsContext: [] as Run[],
    setRunsContext: {} as React.Dispatch<React.SetStateAction<Run[]>>,
    modalCard: {} as CardModal,
    setModalCard: {} as React.Dispatch<React.SetStateAction<CardModal>>,
})

export function AppContextProvider({ 
    children 
}: {
    children: React.ReactNode
}) {
    const [importedRuns, setImportedRuns] = useState([placeholder] as Run[]);
    const [runsContext, setRunsContext] = useState([] as Run[]);
    const [modalCard, setModalCard] = useState({
        character: "",
        type: "",
        card: "",
        rarity: "",
        upgraded: false,
    });

    return (
        <AppContext.Provider value={{importedRuns, setImportedRuns, runsContext, setRunsContext, modalCard, setModalCard}}>
            { children }
        </AppContext.Provider>
    )
}