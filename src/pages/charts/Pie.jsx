import {
    AccumulationChartComponent,
    AccumulationDataLabel,
    AccumulationLegend,
    AccumulationSeriesCollectionDirective,
    AccumulationSeriesDirective,
    AccumulationTooltip,
    Inject,
    PieSeries,
} from "@syncfusion/ej2-react-charts";
import React from "react";

import { useStateContext } from "../../contexts/ContextProvider";

import { Header } from "../../components";
import { pieChartData } from "../../data/dummy";

const Pie = () => {
    const { currentMode } = useStateContext();

    return (
        <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <Header category="Pie" title="Project Cost Breakdown" />

            <div className=" w-full">
                <AccumulationChartComponent
                    id="chart-pie"
                    legendSettings={{ visible: true, background: "white" }}
                    background={currentMode === "Dark" ? "#33373E" : "#fff"}
                    tooltip={{ enable: true }}>
                    <Inject
                        services={[
                            AccumulationLegend,
                            PieSeries,
                            AccumulationDataLabel,
                            AccumulationTooltip,
                        ]}
                    />
                    <AccumulationSeriesCollectionDirective>
                        <AccumulationSeriesDirective
                            name="Sale"
                            dataSource={pieChartData}
                            xName="x"
                            yName="y"
                            innerRadius="40%"
                            startAngle={0}
                            endAngle={360}
                            radius="70%"
                            explode
                            explodeOffset="10%"
                            explodeIndex={2}
                            dataLabel={{
                                visible: true,
                                name: "text",
                                position: "Inside",
                                font: {
                                    fontWeight: "600",
                                    color: "#fff",
                                },
                            }}
                        />
                    </AccumulationSeriesCollectionDirective>
                </AccumulationChartComponent>
            </div>
        </div>
    );
};

export default Pie;
