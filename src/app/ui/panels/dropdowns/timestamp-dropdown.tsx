import { Run } from "@/app/lib/definitions";
import { useContext, useState } from "react";
import { AppContext } from "../../app-context";
import * as Constants from '@/app/lib/constants';
import { sortRuns } from "@/app/lib/data";

export default function TimestampDropdown({
    show
}: {
    show: string
}) {
    const { importedRuns, setImportedRuns, runsContext, setRunsContext } = useContext(AppContext);
    const [sortAscending, setSortAscending] = useState(false);

    const handleSort = (
        key: keyof Run,
        ascending: boolean
    ) => {
        let sortedRuns = sortRuns(key, ascending, importedRuns);

        setImportedRuns(sortedRuns);
        setRunsContext(sortedRuns);
        if (ascending) {
            setSortAscending(true);
        } else {
            setSortAscending(false);
        }
    }

    if (show === Constants.Timestamp) {
        return (
            <div className="absolute origin-top-left rounded-xl bg-gray-100 py-2 px-1 border-black border-2 divide-y divide-gray-200">
                <div className="py-1">
                </div>
                <div className="py-1 flex flex-col">
                    <div>
                        <input
                            type="radio"
                            value={Constants.Ascending}
                            checked={sortAscending}
                            onClick={() => handleSort(Constants.Timestamp, true)}
                        />
                        {Constants.Ascending}
                    </div>
                    <div>
                        <input
                            type="radio"
                            value={Constants.Descending}
                            checked={!sortAscending}
                            onClick={() => handleSort(Constants.Timestamp, false)}
                        />
                        {Constants.Descending}
                    </div>
                </div>
            </div>
        )
    }
}