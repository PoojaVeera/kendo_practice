// import { GridLayout, GridLayoutItem } from "@progress/kendo-react-layout";
// import React from "react";

// export const Body = () => {
//   return (
//     <div>
//       <GridLayout
//         rows={[{ height: 50 }, { height: 50 }]}
//         cols={[{ width: 50 }, { width: 50 }]}
//         gap={{ rows: 2, cols: 2 }}
//         style={{
//           backgroundColor: "blueviolet",
//           position: "absolute",
//           top: "40%",
//           left: "30%",
//         }}
//       >
//         <GridLayoutItem row={1} col={1}>
//           ABC
//         </GridLayoutItem>
//         <GridLayoutItem row={1} col={2}>
//           ABCD
//         </GridLayoutItem>
//         <GridLayoutItem row={2} col={1}>
//           ABC
//         </GridLayoutItem>
//         <GridLayoutItem row={2} col={2}>
//           ABC
//         </GridLayoutItem>
//       </GridLayout>
//     </div>
//   );
// };

import React, { useState } from "react";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { process } from "@progress/kendo-data-query";
import orders from "./orders.json";
import "../App.scss";

export const Body = () => {
  const [dataState, setDataState] = useState({
    skip: 0,
    take: 20,
    sort: [
      {
        field: "orderDate",
        dir: "desc",
      },
    ],
    group: [
      {
        field: "customerID",
      },
    ],
  });
  const [dataResult, setDataResult] = useState(process(orders, dataState));
  // const dataStateChange = (event) => {
  //   setDataResult(process(orders, event.dataState));
  //   setDataState(event.dataState);
  // };

  return (
    <div className="body">
      {/* <Grid
        className="grid1"
        style={{
          position: "fixed",
          top: "10%",
          left: "10%",
          right: "10%",
          height: "500px",
        }}
        data={dataResult}
        {...dataState}
      >
        <GridColumn field="customerID" width="200px" />
        <GridColumn field="shipName" width="280px" />
        <GridColumn field="freight" width="200px" />
        <GridColumn field="employeeID" width="200px" />
        <GridColumn field="orderID" title="ID" width="90px" />
      </Grid> */}
      <Grid data={orders} className="gg">
        <GridColumn field="orderID" title="ID"></GridColumn>
        <GridColumn field="shipName" tile="SHIP"></GridColumn>
        <GridColumn field="freight" title="FREIGHT"></GridColumn>
        <GridColumn field="employeeID" title="EMP ID"></GridColumn>
        <GridColumn field="customerID" title="CUSTOMER ID"></GridColumn>
      </Grid>
    </div>
  );
};
