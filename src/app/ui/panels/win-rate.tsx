import { useContext, useRef } from "react";
import { AppContext } from "@/app/ui/app-context";
import { Bar, getElementAtEvent } from "react-chartjs-2";
import { ChartOptions, ChartData } from "chart.js/auto";
import { Chart, registerables } from "chart.js";
import * as Constants from "@/app/lib/constants";

interface CharacterStats {
    [character: string]: {
        wins: number;
        total: number;
    }
}

Chart.register(...registerables);

export default function WinrateGraph() {
    const { runsContext, setRunsContext } = useContext(AppContext);
    const chartRef = useRef();

    let characterStats: CharacterStats = {};
    Object.keys(Constants.Renamed_Chars).forEach(key => {
        characterStats[key] = characterStats[key] || { wins: 0, total: 0}
    })

    runsContext.forEach(run => {
        characterStats[run.character_chosen].total++
        if (run.victory) {
            characterStats[run.character_chosen].wins++
        }
    });

    const labels: string[] = Object.keys(characterStats);
    const winrates: number[] = labels.map(character => {
        const stats = characterStats[character];
        return stats.wins / stats.total;
    });

    const chartData: ChartData<'bar'> = {
        labels: labels.map(character => Constants.Renamed_Chars[character]),
        datasets: [{
            label: "Win Rate by Character",
            data: winrates,
            backgroundColor: Constants.BarChartColors,
        }]
    };

    const chartOptions: ChartOptions<'bar'> = {
        scales: {
            y: {
                type: 'linear',
                beginAtZero: true,
                max: 1,
                ticks: {
                    stepSize: 0.1
                }
            }
        }
    };

    const chartClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
        console.log(typeof(event))
        if (chartRef.current) {
            const chart = Chart.getChart(chartRef.current);
            const element = getElementAtEvent(chartRef.current, event);
            console.log(element);
        }
    }

    return (
        <div className="justify-between rounded-xl bg-gray-50 p-4 aspect-[2/1] w-[48rem]">
            <Bar ref={chartRef} data={chartData} options={chartOptions} onClick={chartClick} />
        </div>
    )
}