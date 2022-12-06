import { DropDownList } from "@progress/kendo-react-dropdowns";
import {
  Avatar,
  GridLayout,
  GridLayoutItem,
} from "@progress/kendo-react-layout";
import React from "react";
import { DD, HEADER, SUBHEAD, GL, AV } from "./Header.styles";

export const Header = () => {
  return (
    <div>
      <HEADER>
        <AV>
          <Avatar type="image" size="large">
            <img
              src="https://w0.peakpx.com/wallpaper/135/412/HD-wallpaper-iron-man-death-iron-man-sad-thumbnail.jpg"
              alt="ironman"
            />
          </Avatar>
        </AV>

        <GL>
          <GridLayout
            gap={{ rows: 1, cols: 2 }}
            // rows={[{ height: 20 }]}
            // cols={[{ width: 50 }, { width: 200 }]}
          >
            <GridLayoutItem row={1} col={1}>
              NAME
            </GridLayoutItem>
            <GridLayoutItem row={1} col={2}>
              APPLICATION NUMBER
            </GridLayoutItem>
          </GridLayout>
        </GL>
      </HEADER>
      <SUBHEAD>
        HELLO
        <DD>
          <DropDownList defaultValue={"abc"}></DropDownList>
        </DD>
      </SUBHEAD>
    </div>
  );
};
