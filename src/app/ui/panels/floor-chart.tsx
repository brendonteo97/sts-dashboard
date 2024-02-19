import { useContext, useRef } from "react";
import { AppContext } from "@/app/ui/app-context";
import { Chart, ChartData, registerables } from "chart.js";
import * as Constants from "@/app/lib/constants";
import { Pie } from "react-chartjs-2";

interface FloorStats {
    [floor: string]: number;
}

Chart.register(...registerables);

export default function FloorChart() {
    const { runsContext, setRunsContext } = useContext(AppContext);
    const chartRef = useRef();

    let floorStats: FloorStats = {};
    Object.keys(Constants.Renamed_Floors).forEach(key => {
        floorStats[key] = floorStats[key] || 0;
    })

    runsContext.forEach(run => {
        run.path_per_floor.forEach(floor => {
            floorStats[floor]++;
        })
    });

    const labels: string[] = Object.keys(floorStats);
    const counts: number[] = Object.values(floorStats);

    const chartData: ChartData<'pie'> = {
        labels: labels.map(floor => Constants.Renamed_Floors[floor]),
        datasets: [{
            label: "Floor composition",
            data: counts,
            backgroundColor: Constants.FloorChartColors,
        }]
    }

    return (
        <div className="justify-between rounded-xl bg-gray-50 p-4 aspect-[2/1] w-[48rem]">
            <Pie ref={chartRef} data={chartData} />
        </div>
    )
}