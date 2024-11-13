import React, { useState } from "react";
import "./EditProduct.css";
import uploadArea from "../../assets/uploadArea.png";
import Add from "../../pages/add/Add";

const EditProduct = ({backendUrl, itemToEdit  }) => {

    const [edit,setEdit]=useState(true)

  return (
    <div>
      <Add backendUrl={backendUrl} itemToEdit={itemToEdit} edit={edit} />
    </div>
  );
};

export default EditProduct;
