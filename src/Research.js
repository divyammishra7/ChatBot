import React from 'react'
import { ResearchData } from './ResultsData'

function Research() {
  return (
    <div>
        <h1>List of Research Institutes</h1>
        <ul>
        {ResearchData.map((item)=>{
            return (
              <li>

              
                <img  className='img' src={item.img}></img>
                <h3>{item.name}</h3>
                
                </li>


                )
        })}
</ul>
    </div>
  )
}

export default Research