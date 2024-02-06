'use client';

import React, { useState, createContext } from 'react';
import { Run } from '@/app/lib/definitions';

export const AppContext = createContext({
    runs: [] as Run[],
    setRuns: {} as React.Dispatch<React.SetStateAction<Run[]>>,
    modalCard: "" as string,
    setModalCard: {} as React.Dispatch<React.SetStateAction<string>>,
})

export function AppContextProvider({ 
    children 
}: {
    children: React.ReactNode
}) {
    const [runs, setRuns] = useState([] as Run[]);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalCard, setModalCard] = useState("");

    return (
        <AppContext.Provider value={{runs, setRuns, modalCard, setModalCard}}>
            { children }
        </AppContext.Provider>
    )
}