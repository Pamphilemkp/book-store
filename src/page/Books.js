import Header from "./Header";
import { useState } from "react";
import InputItems from "../components/InputItems";
import ItemsList from "../components/itemsList";
// import FormHandle from '../components/formHandle'

function Books() {
    const [data, setdata] = useState([]);

    const handleChange=(data)=>{
        setdata(prev => {
          return  [...prev, data]
        })
    }
    
    return (
        <div className='container'>
            <Header />
            <ItemsList books={data} />
            <InputItems handleChange={handleChange} />
        </div>
    )
}
export default Books;
