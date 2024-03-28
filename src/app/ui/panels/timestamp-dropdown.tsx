import { Run } from "@/app/lib/definitions";
import { useContext, useState } from "react";
import { AppContext } from "../app-context";
import * as Constants from '@/app/lib/constants';

export default function TimestampDropdown({
    show
}: {
    show: string
}) {
    const { importedRuns, setImportedRuns, runsContext, setRunsContext } = useContext(AppContext);
    const [sortConfig, setSortConfig] = useState<{ key: keyof Run; direction: 'asc' | 'desc' } | null>(null);

    const handleSort = (key: keyof Run) => {
        let direction: 'asc' | 'desc' = 'asc';

        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }

        const sortedRuns = [...importedRuns].sort((a, b) => {
            if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
            if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
            return 0;
        });

        setImportedRuns(sortedRuns);
        setRunsContext(sortedRuns);
        setSortConfig({ key, direction });
    }

    if (show === Constants.Timestamp)
    return (
        <div className="absolute origin-top-left rounded-xl bg-gray-50 py-1">

            <p>test text</p>
        </div>
    )
}