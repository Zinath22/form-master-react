import { useState } from "react"

const useInputState = (defaultValue=null) =>{
    const [value, setValue] = useState(defaultValue);

    // const handleChnage = e => {
    //     setValue(e.target.value);
    // }
     // return [value, handleChnage];
    const onChnage = e => {
        setValue(e.target.value);
    }
   
    return{
        value,
        onChnage
    }
}

export default useInputState;