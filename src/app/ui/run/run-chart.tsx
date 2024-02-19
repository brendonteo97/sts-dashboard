'use client';

import { useContext, useRef } from 'react';
import { AppContext } from '@/app/ui/app-context';
import { Run } from '@/app/lib/definitions';
import { Line } from "react-chartjs-2";
import { Chart, ChartData, registerables } from 'chart.js';

Chart.register(...registerables);

export default function RunChart({ 
    play_id 
} : {
    play_id: string
}) {
    const {runsContext} = useContext(AppContext);
    const chartRef = useRef();

    const run = runsContext.find(runsContext => runsContext.play_id === play_id) as Run;

    const labels: number[] = run.path_taken.map((element, index) => index + 1);
    const hp_per_floor: number[] = run.current_hp_per_floor;

    const chartData: ChartData<'line'> = {
        labels: labels,
        datasets: [{
            label: "HP",
            data: hp_per_floor,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.5)',
        }]
    }

    return (
        <div className="flex flex-grow rounded-xl justify-between bg-gray-50 p-4">
            <Line ref={chartRef} data={chartData} />
        </div>
    )
}