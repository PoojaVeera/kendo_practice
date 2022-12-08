import React, { useCallback, useState } from "react";
import { RadioButton } from "@progress/kendo-react-inputs";
import { MultiSelect } from "@progress/kendo-react-dropdowns";
import * as S from "./screen.styles";
const zones = ["zone1", "zone2", "zone3", "zone4", "zone5"];
const areas = ["area1", "area2", "area3", "area4", "area5"];
const branches = ["branch1", "branch2", "branch3", "branch4"];
export const Screen1 = () => {
  const [all, setAll] = useState(false);
  const [zone, setZone] = useState(false);
  const [area, setArea] = useState(false);
  const [branch, setBranch] = useState(false);
  const [selectedValue, setSelectedValue] = useState("all");
  const [value, setValue] = useState([]);

  const handleChange = useCallback(
    (e) => {
      setSelectedValue(e.value);
    },
    [setSelectedValue]
  );
  const onChange = (event) => {
    setValue(event.value);
  };
  return (
    <div>
      <RadioButton
        name="all"
        value="first"
        checked={selectedValue === "all"}
        label="all"
        onChange={handleChange}
      />
      <br />
      <RadioButton
        name="area"
        value="second"
        checked={selectedValue === "area"}
        label="area"
        onChange={handleChange}
      />
      <br />
      <RadioButton
        name="zone"
        value="third"
        checked={selectedValue === "zone"}
        label="zone"
        onChange={handleChange}
      />
      {all && <p>this is applicable to all</p>}
      {area && (
        <S.RD>
          <S.dropDown>
            <MultiSelect
              data={areas}
              onChange={onChange}
              value={value}
              onClick={() => setArea(true)}
            />
          </S.dropDown>
        </S.RD>
      )}
      {zone && (
        <S.RD>
          <S.dropDown>
            <MultiSelect data={areas} onChange={onChange} value={value} />
            <MultiSelect data={zones} onChange={onChange} value={value} />
          </S.dropDown>
        </S.RD>
      )}
    </div>
  );
};
