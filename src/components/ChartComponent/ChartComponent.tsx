import React from 'react';
import {Line} from "react-chartjs-2";
import './ChartComponent.scss';


type ChartComponentPropsType = {
    chartData?: any
    title: string
    pointBackgroundColor: string
    pointBorderColor: string
    tooltipText: string
}

const ChartComponent = ({
                            title,
                            pointBackgroundColor,
                            pointBorderColor,
                            tooltipText,
                            chartData
                        }: ChartComponentPropsType) => {
    const data = {

        datasets: [
            {
                label: "",
                data: chartData,
                fill: true,
                backgroundColor: "rgba(254, 130, 113, .7)",
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
                        return `${context.formattedValue} ${tooltipText}`;
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
        <div className={"chart content__box"}>
            <div className={"chart__top"}>
                <p className={"chart__top-title"}><i className="far fa-chart-bar"/>{title}</p>
            </div>

            <Line type={"line"} data={data} options={options}/>
        </div>
    );
};

export default ChartComponent;