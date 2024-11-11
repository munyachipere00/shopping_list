import React from "react";

export const updateItem = (ids, item, list, setList , value, setValue, buttonval, setbuttonval, setThiskey, thiskey) => {
   
    
       console.log("list", list)
       console.log("item", item)
        setList(
          list.map((item) =>
            item.key === ids ? { ...item, title: value } : item
          )
        );
        setValue("");
     
    



    return(
        <h1>to do form</h1>
    )
}


    

  