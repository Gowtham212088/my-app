import React from "react";
import { datas } from "./datas";

export default function List() {

console.log(datas);
  return(
    <div className="page">
        {datas.map((element)=>(
            <NewComponent
         name={element.name}
         poster={element.poster}
         summary={element.summary}
         rating={element.rating}
         />
        ))}
    </div>
  )
 
}

 function NewComponent({name,poster,summary,rating}) {
  return(
   <div className="card">
   <div className="img-div">
<img src={poster}/>
</div>
<div className="name-rating">
<span> {name} </span> <span>⭐ {rating} </span>
</div>
<div className="summary">
<p className="sum-p">{summary} </p>
</div>
  </div>
  )
}
