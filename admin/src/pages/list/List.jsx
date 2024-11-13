import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import EditProduct from "../../components/editProduct/EditProduct";

const List = ({ backendUrl }) => {
  const [listItems, setListItems] = useState([]);
  // const [itemToEdit,setItemToEdit]=useState('')
  // const [showEditPopup, setShowEditPopup] = useState(false);

  const fetchProductsList = async () => {
    const response = await axios.get(`${backendUrl}/api/admin/listProducts`);
    console.log(response.data.products);
    if (response.data.success) {
      setListItems(response.data.products);
    }
  };

  // const editProduct = async (_id) => {
  //   console.log(_id);
  //   const response = await axios.post(`${backendUrl}/api/admin/updateProduct`, {
  //     _id,
  //   });
  //   console.log(response);
  // };

  useEffect(() => {
    fetchProductsList();
  }, []);

  return (
    <>
      <div className="list">
        <div className="listItems">
          <div className="listItemsHeader">
            <p>Item Image</p>
            <p>Item Name</p>

            <p>Price</p>
            <p>Delivery</p>
            <p>Action</p>
          </div>

          <div className="listItemsContent">
            {listItems.map((item, index) => {
              const { _id, name, newPrice, delivery, image } = item;
              return (
                <div key={index}>
                  <img src={backendUrl + "/images/" + image} alt="" />
                  <h2>{name}</h2>
                  <p>₹ {newPrice}</p>
                  <p>₹ {delivery}</p>
                  <p className="listItemsActionSection">
                    <button
                      onClick={() => {
                        setShowEditPopup(true);
                        setItemToEdit(_id);
                        // editProduct(_id);
                      }}
                    >
                      Edit
                    </button>
                    <button>Remove</button>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default List;

// <>
//   {showEditPopup ? (
//     <EditProduct backendUrl={backendUrl} itemToEdit={itemToEdit} />
//   ) : (
//     <div className="list">
//       <div className="listItems">
//         <h1>Product List</h1>

//         <div className="listItemsHeader">
//           <p>Item Image</p>
//           <p>Item Name</p>
//           <p>Description</p>
//           <p>Price</p>
//           <p>Delivery</p>
//           <p>Action</p>
//         </div>

//         <div className="listItemsContent">
//           {listItems.map((item, index) => {
//             const { _id, name, newPrice, delivery, image } = item;
//             return (
//               <div key={index}>
//                 <img src={backendUrl + "/images/" + image} alt="" />
//                 <h2>{name}</h2>
//                 <p>{newPrice}</p>
//                 <p>{delivery}</p>
//                 <p className="listItemsActionSection">
//                   <button
//                     onClick={() => {
//                       setShowEditPopup(true);
//                       setItemToEdit(_id)
//                       // editProduct(_id);
//                     }}
//                   >
//                     Edit
//                   </button>
//                   <button>Remove</button>
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   )}
// </>
