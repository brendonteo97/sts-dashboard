import { useContext } from "react";
import { AppContext } from "@/app/ui/app-context";
import { Bar } from "react-chartjs-2";
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
    const { runs, setRuns } = useContext(AppContext);

    let characterStats: CharacterStats = {};
    Object.keys(Constants.Renamed_Chars).forEach(key => {
        characterStats[key] = characterStats[key] || { wins: 0, total: 0}
    })

    runs.forEach(run => {
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

    return (
        <div className="flex w-1/3 h-1/2 flex-col md:col-span-4">
            <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
                <Bar data={chartData} options={chartOptions} />
            </div>
        </div>
    )
}