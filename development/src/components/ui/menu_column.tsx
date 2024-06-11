import { count } from "console";
import * as React from "react";
import { MyType, travelType } from "@/pages/Dashboard/index"


const travelIconElemGen = function (travelIcons: string): JSX.Element {
    return (
        <div><img className="travel-icons" src={travelIcons}></img></div>
    );
};
const travelIconsElemGen = function (icons: number[], travelIcons: string[]): JSX.Element[] {
    let elems: JSX.Element[] = [];
    for (let i = 0; i < icons.length; i++) {
        elems.push(travelIconElemGen(travelIcons[icons[i]]));
    }
    return ( elems );
};
const travelRect = function (travelProperties: travelType, travelIcons: string[]): JSX.Element {
    return (
        <div className='travel-rect'>
            <div className="travel-rect-id-container">
                <div className="travel-rect-id">{travelProperties.travelID}</div>
            </div>
            <div className="travel-rect-time">
                {travelProperties.travelStartTime}-{travelProperties.travelEndTime}
            </div>
            <div className="travel-rect-icon">
                <div>{travelIconsElemGen(travelProperties.icons, travelIcons)}</div>
            </div>
        </div>
    );
};
const travelRectFactory = function (statusTableProperty: MyType, travelIcons: string[]): JSX.Element[] {
    let count: number = statusTableProperty.travel.length;
    let jsxArray: JSX.Element[] = [];
    for (let i = 0; i < count; i++) {
        jsxArray.push(travelRect(statusTableProperty.travel[i], travelIcons));
    }
    return jsxArray;
};

const tableColumn = function (statusTableProperty: MyType, travelIcons: string[]) {
    return (
        <div className={statusTableProperty["class"]}>
            <div className='status-name-div'>
                <div className='status-name'>{statusTableProperty.name}</div>
                <div className='status-number'>
                    <div>{statusTableProperty.travel.length}</div>
                </div>
            </div>
            {travelRectFactory(statusTableProperty, travelIcons)}
        </div>
    );
};

function tableColumnFactory(count: number, statusTableProperties: MyType[], travelIcons: string[]): JSX.Element[] {
    let jsxArray = [];
    let statusTableProperty: MyType;
    for (let i = 0; i < count; i++) {
        statusTableProperty = statusTableProperties[i];
        jsxArray.push(tableColumn(statusTableProperty, travelIcons));
    }
    return jsxArray;
}

const statusTable = function (statusTableProperties: MyType[], travelIcons: string[]): JSX.Element {
    let count: number = statusTableProperties.length;
    return <div className='status-table'>{tableColumnFactory(count, statusTableProperties, travelIcons)}</div>;
};

export { statusTable };
