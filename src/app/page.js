
'use client';
import { useState } from "react";
import { editItem } from "./edit";
//import { updateItem } from "./update";



const App = () => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");
  const [buttonval, setbuttonval] = useState("Add");
  const  [thiskey, setthiskey] = useState();

  

  const addItem = () => {
    setList([...list, { key: list.length + 1, title: value, isChecked: false, isComplete : false }]);
    setValue("");
    
  };
  
  const deleteItem = (ids) => {
    const sortedList = list.filter((item) => item.key !== ids);
    setList(sortedList);
  };

  const checkItem = (ids) => {
    setList(
      list.map((item) =>
        item.key === ids ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const decision = (thiskey) => {
    if (buttonval == "Add"){ 
      addItem();
    }
    else{
      updateItem(thiskey);
    }
   
  };



  const updateItem = (ids) => {
    setList(
      list.map((item) =>
        item.key === ids ? { ...item, title: value } : item
      )
    );
    setValue("");
    setbuttonval("Add")
  };

  return (
    <div className="container">
      <h1 className="title">To do List</h1>

      <div className="input-container">
        <input
          type="text"
          className="item-input"
          placeholder="Add an item"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />


        <button className="add-button" 
        onClick={() => decision(thiskey)}>
           {buttonval}
        </button>
      </div>

      <ul className="item-list">


      {list.map((item) => item.isChecked === false ? 
        (
          <li className="item"
          key={item.key}
          >
            <span
              style={{
                textDecoration: item.isChecked ? "line-through" : "none",
              }}
            >
              {item.title}
            </span>
             

            

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            
              <input
                type="checkbox"
                name=""
                id=""
                onChange={() => checkItem(item.key)}
              />
              <p>Done?</p>

              <button
                className="delete-button"
                onClick={() => editItem(item.key, item, list, setList , value, setValue, buttonval, setbuttonval, setthiskey,  thiskey)}
              >
                Edit
              </button>
             

              <button
                className="delete-button"
                onClick={() => deleteItem(item.key)}
              >
                Delete
              </button>


            </div>
          </li>
        )
        : ""
        )
        }

        
      

      </ul>     


     <h2>Competed</h2>

      <ul className="item-list">


        {list.map((item) => item.isChecked === true ? 
        (
          <li className="item" key={item.key}>
            <span
              style={{
                textDecoration: item.isChecked ? "line-through" : "none",
              }}
            >
              {item.title}
            </span>
            
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <input
                type="checkbox"
                name=""
                id=""
                onChange={() => checkItem(item.key)}
              />
              </div>
              <p>Undo</p>

          </li>
        ) : ""
        )
        }
      

      </ul>       

    </div>
   
  );
};

export default App;