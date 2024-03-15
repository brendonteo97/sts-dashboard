'use client';

import { useContext, useRef } from 'react';
import { AppContext } from '@/app/ui/app-context';
import { Run } from '@/app/lib/definitions';
import { Line, getElementAtEvent } from "react-chartjs-2";
import { Chart, ChartData, registerables } from 'chart.js';

Chart.register(...registerables);

export default function RunChart({ 
    run, onClick
} : {
    run: Run;
    onClick: (floor: number) => void;
}) {
    const chartRef = useRef();

    const labels: number[] = run.path_per_floor.map((element, index) => index + 1);
    const hp_per_floor: number[] = run.current_hp_per_floor;
    const gold_per_floor: number[] = run.gold_per_floor;

    const chartData: ChartData<'line'> = {
        labels: labels,
        datasets: [{
            label: "HP",
            data: hp_per_floor,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.5)',
        }, {
            label: "Gold",
            data: gold_per_floor,
            backgroundColor: 'rgb(186, 140, 61)',
            borderColor: 'rgba(186, 140, 61, 0.5)'
        }]
    }

    const chartClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
        if (chartRef.current) {
            const chart = Chart.getChart(chartRef.current);
            const element = getElementAtEvent(chartRef.current, event);
            if (element.length !== 0) {
                onClick(element[0].index);
            }
        }
    }

    return (
        <div className="rounded-xl justify-between bg-gray-50 p-4 aspect-[2/1]">
            <Line ref={chartRef} data={chartData} onClick={chartClick}/>
        </div>
    )
}