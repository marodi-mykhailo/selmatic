import React from 'react';
import {Line} from "react-chartjs-2";
import './ChartComponent.scss';


type ChartComponentPropsType = {
    data?: Array<number>
    title: string
    pointBackgroundColor: string
    pointBorderColor: string
    tooltipText: string
}

const ChartComponent = ({title, pointBackgroundColor, pointBorderColor, tooltipText}: ChartComponentPropsType) => {
    const data = {
        labels: [...Array.from({length: 30}, (_, index) => index + 1)],
        datasets: [
            {
                label: "",
                data: [...Array(30).fill(0)],
                fill: false,
                backgroundColor: pointBackgroundColor,
                borderColor: pointBorderColor,
            },
        ],
    };

    const options = {
        responsive: true,
        pointRadius: 4,
        pointHoverRadius: 5,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                displayColors: false,
                yAlign: 'bottom',

                callbacks: {
                    label: function (context: any) {
                        let label = `${context.formattedValue} ${tooltipText}`
                        return label;
                    },
                    title: function () {
                        return null
                    },
                    labelTextColor: function () {
                        return '#fff';
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    stepSize: 1
                }
            },

        },
    };

    return (
        <div className={"chart"}>
            <div className={"chart__top"}>
                <p className={"chart__top-title"}><i className="far fa-chart-bar"/>{title}</p>
            </div>

            <Line type={"line"} data={data} options={options}/>
        </div>
    );
};

export default ChartComponent;