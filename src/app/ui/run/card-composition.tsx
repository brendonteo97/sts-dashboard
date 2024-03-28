import { CardDefaults, CardTags, Run } from "@/app/lib/definitions";
import CardDefaultsJson from "@/app/lib/card-defaults.json";
import * as Constants from "@/app/lib/constants";
import { SetStateAction, useContext, useEffect, useRef, useState } from "react";
import { ChartData } from "chart.js/auto";
import { Chart, ChartOptions, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import { AppContext } from "../app-context";

Chart.register(...registerables);

export default function CardComposition({
    currentFloor, run
}: {
    currentFloor: number
    run: Run
}) {
    const { userTags } = useContext(AppContext);
    const [ chartData, setChartData ] = useState<ChartData<'bar'>>({
        labels: [],
        datasets: [],
    });
    const [ chartOptions, setChartOptions ] = useState<ChartOptions<'bar'>>({})
    const chartRef = useRef();

    useEffect(() => {
        const cardDefaults = CardDefaultsJson as CardDefaults;
        const character = Constants.Renamed_Chars[run.character_chosen].toLowerCase();

        let cardLibrary = [...cardDefaults[character]];

        run.card_choices.forEach((value, index, array) => {
            if (value.picked !== Constants.Skip) {
                if (value.floor <= currentFloor + 1) {
                    cardLibrary.push(value.picked.toLowerCase().replaceAll(' ', '_'));
                }
            }
        })

        let tagCount: {[tag: string]: number} = {};
        cardLibrary.forEach((card) => {
            for (const type in userTags[character]) {
                if (userTags[character][type][card] !== undefined) {
                    const tagsTemp = userTags[character][type][card]
                    tagsTemp.forEach((tag) => {
                        if (!Object.keys(tagCount).includes(tag)) {
                            tagCount[tag] = 1;
                        } else {
                            tagCount[tag] += 1;
                        }
                    })
                }
            }
        })

        const chartData: ChartData<'bar'> = {
            labels: Object.keys(tagCount),
            datasets: [{
                label: "Card Count",
                data: Object.values(tagCount),
            }]
        }

        const chartOptions: ChartOptions<'bar'> = {
            scales: {
                y: {
                    max: cardLibrary.length,
                }
            }
        }

        setChartData(chartData);
        setChartOptions(chartOptions);
    }, [currentFloor, run, userTags])

    return (
        <div className="flex flex-grow rounded-xl bg-gray-50 aspect-[2/1]">
            <Bar ref={chartRef} data={chartData} options={chartOptions}/>
        </div>
    )
}