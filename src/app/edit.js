import React from "react";

export const editItem = async (ids, item, list, setList , value, setValue, buttonval, setbuttonval, setthiskey, thiskey) => {
   
    setthiskey(ids)
    setValue(list[ids-1].title)
    setbuttonval("update")
    console.log("thiskey", thiskey)

    return(
        <h1>to do form</h1>
    )
}


    

  