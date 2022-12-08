import { Button } from "@progress/kendo-react-buttons";
import { Dialog, DialogActionsBar } from "@progress/kendo-react-dialogs";
import { MultiSelect } from "@progress/kendo-react-dropdowns";
import { RadioButton, RadioGroup } from "@progress/kendo-react-inputs";
import React, { useState } from "react";
import * as S from "./screen.styles";

const zones = ["zone1", "zone2", "zone3", "zone4", "zone5"];
const areas = ["area1", "area2", "area3", "area4", "area5"];
const branches = ["branch1", "branch2", "branch3", "branch4"];
export const Screen = () => {
  {
    () => {
      if (selectedValue === "ALL") {
        return <p>THIS SCHEME IS APPLICABLE FOR EVERYONE</p>;
      } else if (selectedValue === "Area") {
        return (
          <S.RD>
            <S.dropDown>
              <MultiSelect data={areas} onChange={onChange} value={value} />
            </S.dropDown>
          </S.RD>
        );
      } else if (selectedValue === "Zone") {
        return (
          <S.RD>
            <S.dropDown>
              <MultiSelect data={areas} onChange={onChange} value={value} />
              <MultiSelect data={zones} onChange={onChange} value={value} />
            </S.dropDown>
          </S.RD>
        );
      } else if (selectedValue === "Branch") {
        area && (
          <S.RD>
            <S.dropDown>
              <MultiSelect data={areas} onChange={onChange} value={value} />
              <MultiSelect data={zones} onChange={onChange} value={value} />
              <MultiSelect data={branches} onChange={onChange} value={value} />
            </S.dropDown>
          </S.RD>
        );
      }
    };
  }
  const data = [
    { label: "All" },
    { label: "Area" },
    { label: "Zone" },
    { label: "Branch" },
  ];
  const [selectedValue, setSelectedValue] = useState();
  const [visible, setVisible] = React.useState(true);
  const toggleDialog = () => {
    setVisible(!visible);
  };

  const [all, setAll] = useState(false);
  const [zone, setZone] = useState(false);
  const [area, setArea] = useState(false);
  const [branch, setBranch] = useState(false);
  const [check, setCheck] = useState(data[0].value);
  const [value, setValue] = useState([]);
  //   const handleChange = (e) => {
  //     setCheck(e.value);
  //   };
  const onChange = (event) => {
    setValue(event.value);
  };
  const handleChange = React.useCallback(
    (e) => {
      setSelectedValue(e.value);
    },
    [setSelectedValue]
  );

  return (
    <div>
      <h1>Please select an option</h1>
      {/* <RadioGroup
        data={data}
        layout={"horizontal"}
        value={check}
        onChange={handleChange}
      /> */}
      {/* current value is {check} */}

      <div>
        <S.RD>
          <RadioButton
            name="ALL"
            label="ALL"
            value="ALL"
            checked={selectedValue === "ALL"}
            onChange={handleChange}
            onClick={() => {
              setAll(true);
            }}
          />
          <RadioButton
            label="Area"
            name="Area"
            value="Area"
            checked={selectedValue === "Area"}
            onChange={handleChange}
            onClick={() => setArea(true)}
          />
          <RadioButton
            label="Zone"
            name="Zone"
            value="Zone"
            checked={selectedValue === "Zone"}
            onChange={handleChange}
            // onClick={() => setZone(true)}
          />
          <RadioButton
            label="Branch"
            name="Branch"
            value={branch}
            checked={selectedValue === "Branch"}
            onChange={handleChange}
            onClick={() => selectedValue === "Branch"}
          />
        </S.RD>
      </div>
      <br />

      {/* {all && (
        <Dialog onClose={toggleDialog}>
          <p>THIS SCHEME IS APPLICABLE FOR EVERYONE</p>
          <DialogActionsBar>
            <Button onClick={toggleDialog}>Submit</Button>
          </DialogActionsBar>
        </Dialog>
      )} */}
      {/* {area && (
        <Dialog onClose={toggleDialog}>
          <S.RD>
            <S.dropDown>
              <MultiSelect data={areas} onChange={onChange} value={value} />
            </S.dropDown>
          </S.RD>
          <DialogActionsBar>
            <Button onClick={toggleDialog}>Submit</Button>
          </DialogActionsBar>
        </Dialog>
      )} */}
      {/* {zone && (
        <Dialog onClose={toggleDialog}>
          <S.RD>
            <S.dropDown>
              <MultiSelect data={areas} onChange={onChange} value={value} />
              <MultiSelect data={zones} onChange={onChange} value={value} />
            </S.dropDown>
          </S.RD>
          <DialogActionsBar>
            <Button onClick={toggleDialog}>Submit</Button>
          </DialogActionsBar>
        </Dialog>
      )}
      {branch && (
        <Dialog onClose={toggleDialog}>
          <S.RD>
            <S.dropDown>
              <MultiSelect data={areas} onChange={onChange} value={value} />
              <MultiSelect data={zones} onChange={onChange} value={value} />
              <MultiSelect data={branches} onChange={onChange} value={value} />
            </S.dropDown>
          </S.RD>
          <DialogActionsBar>
            <Button onClick={toggleDialog}>Submit</Button>
          </DialogActionsBar>
        </Dialog>
      )} */}
    </div>
  );
};
