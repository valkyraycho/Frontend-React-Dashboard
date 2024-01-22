import React from "react";
import { Header } from "../components";
import {
    ColumnDirective,
    ColumnsDirective,
    ContextMenu,
    Edit,
    ExcelExport,
    Filter,
    GridComponent,
    Inject,
    Page,
    PdfExport,
    Resize,
    Sort,
} from "@syncfusion/ej2-react-grids";
import { contextMenuItems, ordersData, ordersGrid } from "../data/dummy";

const Orders = () => {
    return (
        <div className=" m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Page" title="Orders" />
            <GridComponent
                id="gridcomp"
                dataSource={ordersData}
                allowExcelExport
                allowPdfExport
                allowPaging
                allowSorting
                contextMenuItems={contextMenuItems}
                editSettings={{ allowDeleting: true, allowEditing: true }}>
                <ColumnsDirective>
                    {ordersGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject
                    services={[
                        Resize,
                        Sort,
                        ContextMenu,
                        Filter,
                        Page,
                        ExcelExport,
                        PdfExport,
                        Edit,
                    ]}
                />
            </GridComponent>
        </div>
    );
};

export default Orders;
