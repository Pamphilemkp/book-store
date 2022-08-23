import Header from "./Header";
import { useState } from "react";
import InputItems from "../components/InputItems";
import ItemsList from "../components/ItemsList";
// import FormHandle from '../components/formHandle'

function Books() {
   
    
    // const [data, setData] = useState({
    //     author:'',
    //     title:'',
    // });
    
    const [data, setData] = useState([]);

const  handleChange= (data) => {
   
    setData((prev) => {
        // const name = e.target.name;
        // const value = e.target.value;
        return  [...prev, data]
    });

    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if(data.author.trim() !=='' && data.title.trim() !=='' ){
    //         console.log(data);
    //         return data;
    //     }
    // }


    return (
        <div>
            <Header />
            <ItemsList books={data}  />
            <InputItems handleChange={handleChange} />
        </div>
    )
}
export default Books;
