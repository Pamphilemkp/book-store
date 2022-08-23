import Header from "./Header";
import { useState } from "react";
import InputItems from "../components/imputItems";
import ItemsList from "../components/itemsList";

function Books() {
   
    
    const [data, setData] = useState({
        author:'',
        title:'',
    });
    

const  handleChange= (e) => {
   
    setData((prev) => {
        const name = e.target.name;
        const value = e.target.value;
        return  {...prev, [name]: value} 
    });

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
        return data;
    }

    return (
        <div>
            <Header />
            <ItemsList handleSubmitprop={handleSubmit}  />
            <InputItems handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
    )
}
export default Books;
