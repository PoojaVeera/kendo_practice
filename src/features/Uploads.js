import { Upload, UploadFileStatus } from "@progress/kendo-react-upload";
import React from "react";

export const Uploads = () => {
  //   const [files, setFiles] = React.useState([]);
  //   const onAdd = (event) => {
  //     console.log("onAdd: ", event.affectedFiles);
  //     setFiles(event.newState);
  //   };
  //   const onRemove = (event) => {
  //     console.log("onRemove: ", event.affectedFiles);
  //     setFiles(event.newState);
  //   };
  //   const onProgress = (event) => {
  //     console.log("onProgress: ", event.affectedFiles);
  //     setFiles(event.newState);
  //   };
  //   const onStatusChange = (event) => {
  //     console.log("onStatusChange: ", event.affectedFiles);
  //     setFiles(event.newState);
  //   };

  return (
    <div>
      Uploads
      <Upload
        withCredentials={false}
        defaultFiles={[]}
        saveUrl={"https://demos.telerik.com/kendo-ui/service-v4/upload/save"}
        removeUrl={
          "https://demos.telerik.com/kendo-ui/service-v4/upload/remove"
        }
      />
      <Upload
        batch={false}
        multiple={true}
        defaultFiles={[
          {
            name: "Picture1",
            extension: ".jpg",
            size: 4000,
            progress: 0,
            status: UploadFileStatus.Initial,
            uid: "uidPicture1",
          },
        ]}
        withCredentials={false}
        saveUrl={"https://demos.telerik.com/kendo-ui/service-v4/upload/save"}
        removeUrl={
          "https://demos.telerik.com/kendo-ui/service-v4/upload/remove"
        }
      />
    </div>
  );
};
