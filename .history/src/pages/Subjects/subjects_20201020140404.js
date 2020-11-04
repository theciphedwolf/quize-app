import React, { useEffect } from 'react';
import Api from "../../api";
const Subjects = () => {

    useEffect(()=>{
        const data  = Api.getSubjects().then((res)=>{

        })

        console.log(dataFetched)
    })

    return ( 

        <h1>Subjects</h1>

     );
}
 
export default Subjects;