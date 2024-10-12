import React, { useEffect, useState } from "react";
import "./Add.css";
import uploadArea from "../../assets/uploadArea.png";
import axios from "axios";

const Add = ({ backendUrl, edit,itemToEdit }) => {
  const [productImage, setProductImage] = useState(false);
  const [trial,setTrial]=useState({})

  const [data, setData] = useState({
    name: "",
    description: "",
    oldPrice: "",
    newPrice: "",
    delivery: "",
  });
  const [updatedFields,setUpdatedFields]=useState({})

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (edit) {
      setUpdatedFields((data)=>({...data,[name]:value}))
    }
    setData((data) => ({ ...data, [name]: value }));
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("oldPrice", data.oldPrice);
    formData.append("newPrice", data.newPrice);
    formData.append("delivery", data.delivery);
    formData.append("image", productImage);

    console.log(formData);



    if (edit) {

      const updatedFormData = new FormData()
      for (const key in updatedFields) {
        updatedFormData.append(`${key}`,updatedFields[key])
        
      }
      updatedFormData.append("itemToEdit", itemToEdit);
      
      setTrial(updatedFormData)
      console.log('updated form data',updatedFormData)

      for (let pair of updatedFormData.entries()) {
        console.log('updatedform data api'+ pair[0] + ": " + pair[1]); // Logs the key and the value
      }

      const response = await axios.post(
        `${backendUrl}/api/admin/updateProduct`,
        updatedFormData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log(response)
    }

    // const response = await axios.post(
    //   `${backendUrl}/api/admin/addProduct`,
    //   formData
    // );
    // console.log(response);

    // if (response.data.success) {
    //   setData({
    //     name: "",
    //     description: "",
    //     oldPrice: "",
    //     newPrice: "",
    //     delivery: "",
    //   });
    //   setProductImage(false);
    // }
  };

  useEffect(() => {
    console.log('updated fields-> ', updatedFields)
    console.log('trial-> ',trial)
  },[updatedFields])

  return (
    <div className="add">
      <form
        onSubmit={(e) => {
          onFormSubmit(e);
        }}
      >
        <div className="productImage">
          <p>Upload Image</p>
          <label htmlFor="productImage">
            <img
              src={
                productImage ? URL.createObjectURL(productImage) : uploadArea
              }
              alt=""
            />
          </label>
          <input
            type="file"
            id="image"
            
            onChange={(e) => {
              console.log(e.target.files);
              setProductImage(e.target.files[0]);
            }}
          />
        </div>

        <div className="productName">
          <p>Product name</p>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={(e) => {
              onChange(e);
            }}
          />
        </div>

        <div className="productDescription">
          <p>Product description</p>
          <input
            type="text"
            name="description"
            value={data.description}
            onChange={(e) => {
              onChange(e);
            }}
          />
        </div>

        <div className="productOldPrice">
          <p>Product old price</p>
          <input
            type="number"
            name="oldPrice"
            value={data.oldPrice}
            onChange={(e) => {
              onChange(e);
            }}
          />
        </div>

        <div className="productNewPrice">
          <p>Product new price</p>
          <input
            type="number"
            name="newPrice"
            value={data.newPrice}
            onChange={(e) => {
              onChange(e);
            }}
          />

          <div className="productDelivery">
            <p>Product delivery</p>
            <input
              type="number"
              name="delivery"
              value={data.delivery}
              onChange={(e) => {
                onChange(e);
              }}
            />
          </div>
        </div>

        <button type="submit" className="productSubmitButton">
          {edit ? <p>Update Product</p> : <p> Add Product</p>}
        </button>
      </form>
    </div>
  );
};

export default Add;
