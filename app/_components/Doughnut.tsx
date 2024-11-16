"use client";

/* PLUGINS */
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut as ChartDoughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
    data: {
        name: string;
        value: number;
        bg: string;
    }[];
}

const Doughnut = ({ data }: Props) => {
    const chart_data = {
        labels: data.map((item) => item.name),
        datasets: [
            {
                data: data.map((item) => item.value),
                backgroundColor: data.map((item) => item.bg),
                borderWidth: 0,
                weight: 1
            },
            {
                data: data.map((item) => item.value),
                backgroundColor: data.map((item) => `${item.bg}75`),
                borderWidth: 0,
                weight: 1.3,
                cutout: "68%"
            }
        ]
    };

    return (
        <ChartDoughnut
            data={chart_data}
            options={{
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }}
        />
    );
};

export default Doughnut;
