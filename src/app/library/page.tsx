'use client';

import * as Constants from "@/app/lib/constants";
import Card from "@/app/ui/card";
import { AppContext } from "@/app/ui/app-context";
import { useContext } from "react";
import Modal from "@/app/ui/modal";

export default function Page() {
    const { modalOpen, setModalOpen } = useContext(AppContext);

    return (
        <main>
            <div className="grid grid-cols-5 gap-5 justify-center">
                {Constants.Ironclad_Cards.map((card) => {
                    return (
                        <Card 
                            key={card}
                            card={card} 
                            character={"ironclad"}
                        />
                    )
                })}
                <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
            </div>
        </main>
    )
}