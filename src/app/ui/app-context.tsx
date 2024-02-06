'use client';

import React, { useState, createContext } from 'react';
import { Run } from '@/app/lib/definitions';

export const AppContext = createContext({
    runs: [] as Run[],
    setRuns: {} as React.Dispatch<React.SetStateAction<Run[]>>,
    modalOpen: false,
    setModalOpen: {} as React.Dispatch<React.SetStateAction<boolean>>,
})

export function AppContextProvider({ 
    children 
}: {
    children: React.ReactNode
}) {
    const [runs, setRuns] = useState([] as Run[]);
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <AppContext.Provider value={{runs, setRuns, modalOpen, setModalOpen}}>
            { children }
        </AppContext.Provider>
    )
}