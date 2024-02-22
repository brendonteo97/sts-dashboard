'use client';

import React, { useState, createContext, useEffect } from 'react';
import { CardModal, CardTags, Run } from '@/app/lib/definitions';
import placeholder from '@/app/lib/placeholderRun.json';
import cardTagsJson from '@/app/lib/card-tags.json';

export const AppContext = createContext({
    importedRuns: [] as Run[],
    setImportedRuns: {} as React.Dispatch<React.SetStateAction<Run[]>>,
    runsContext: [] as Run[],
    setRunsContext: {} as React.Dispatch<React.SetStateAction<Run[]>>,
    modalCard: {} as CardModal,
    setModalCard: {} as React.Dispatch<React.SetStateAction<CardModal>>,
    userTags: {} as CardTags,
    setUserTags: {} as React.Dispatch<React.SetStateAction<CardTags>>, 
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
    const [userTags, setUserTags] = useState({})

    //Initial load from localStorage
    useEffect(() => {
        const storageUserTags = localStorage.getItem('userTags');
        if (storageUserTags === null) {
            localStorage.setItem('userTags', JSON.stringify(cardTagsJson));
            setUserTags(cardTagsJson);
        } else {
            setUserTags(JSON.parse(storageUserTags) as CardTags);
        }
    }, []);

    return (
        <AppContext.Provider value={{
            importedRuns, setImportedRuns, runsContext, setRunsContext, modalCard, setModalCard, userTags, setUserTags
            }}>
            { children }
        </AppContext.Provider>
    )
}