import React, { useEffect, useState } from 'react'

import {data} from './ResultsData';
function Results({previousStep}) {
    const [results,setResults]=useState([]);
    // console.log(previousStep)
    let year='';
    if(previousStep.message.includes(2021)){
      year='2021';
    }
    else if(previousStep.message.includes(2022)){
        year='2022';
    }
    else if(previousStep.message.includes(2023)){
        year='2023'
    }
    useEffect(()=>{
        console.log(year);
        let temp=[]
        for(var i=0; i<data.length; i++){
            if(data[i].year==='2021'){
                temp=data[i].achi;
                break;
            }
        }
        setResults(temp);
    },[])
    console.log(results);
  return (
    
    <div className='res'>
        <h2>List of Top Performers of the year {year}</h2>
<ul>
        {results.map((item)=>{
            return(
                
                    <li>
                        <img src={item.img} className='img'></img>
                        <span>{item.name}</span>
                    </li>
             
            )
        })}
           </ul>
        </div>
  )
}

export default Results