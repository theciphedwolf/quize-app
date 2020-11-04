import React, { useEffect, useState } from 'react';
import Api from "../../api";
const Subjects = () => {

    const [data,setData] = useState(null)

    useEffect(()=>{
        const data  = Api.getSubjects().then((res)=>{
            setData(res);
        })

    })

    return ( 
        if()
        <h1>Subjects</h1>

     );
}
 
export default Subjects;