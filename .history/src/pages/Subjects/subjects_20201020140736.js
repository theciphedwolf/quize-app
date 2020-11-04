import React, { useEffect, useState } from 'react';
import Api from "../../api";
const Subjects = () => {

    const [data,setData] = useState(null)

    useEffect(async()=>{
        const data  = await Api.getSubjects()
        console.log(data)

    })

    return data ?  ( 
        <h1>Subjects</h1>
     ):(<p>Hello World</p>);
}
 
export default Subjects;