import React from "react";
import ListItem from "./ListItem";


const List = ({data, index}) => {
    
    const filteredData = data.slice(index,index + 5)


    return (
        <div>
            {
                filteredData.map(person=>
                    <ListItem key={person.id} {...person} />)
            }
        </div>
    )
}

export default List;



// const List = ({data}) => {
//     //console.log(data);
    
//     return (
//         <>
//         {data.map((person) => (
            
//           <article className="person" key={person.id}>
//             <img src={person.image} alt={person.name} />
//             <div>
//               <h4>{person.name}</h4>
//               <p>{person.email}</p>
//               <p>{person.age} years</p>
//             </div>
//           </article>))}
//       </>
//         )
//   }
  
//   export default List;