import { ChangeEvent, useContext, useEffect, useState } from "react";
import { kreon_light } from "@/app/ui/fonts";
import { AppContext } from "../app-context";

export default function TagDropdown({
    hidden, character, type, card, onAddTag
}: {
    hidden: boolean,
    character: string,
    type: string,
    card: string,
    onAddTag: (newTag: string) => void,
}) {
    const [ tagText, setTagText ] = useState('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTagText(event.target.value);
    }

    const addTag = () => {
        onAddTag(tagText);
    }

    return (
        <div hidden={hidden} className="shadow h-auto absolute -bottom-[1.5rem]">
            <div className="flex flex-grow">
                <div className="flex flex-col">
                    <label className="text-black">
                        <input
                            type="text"
                            value={(tagText)}
                            onChange={handleInputChange}
                            placeholder="Enter tag..."
                        />
                    </label>
                </div>
                <div>
                    <button className={`rounded-r-xl bg-[#222a2b] ${kreon_light.className}`} onClick={addTag}>
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}