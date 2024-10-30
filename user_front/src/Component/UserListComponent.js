import React from "react";


function UserListComponent(props){
   
    return(
     <div  className="pad15">
         <table id="Users">
             <thead>
                 <tr>
                     <th>First Name</th>
                     <th>Last Name</th>
                     <th>Middle Name</th>
                     <th>Prefix</th>
                     <th>Nick Name</th>
                     <th>AddressLine1</th>
                     <th>AddressLine2</th>
                     <th>Zipcode</th>
                     <th>State/City</th>
                     <th>Country</th>
                     <th>Friends</th>
                     <th>hobbies</th>
                 </tr>
             </thead>
             <tbody>
             {props.UserList && props.UserList.map((item,i)=>(
                 <tr key={i}>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.middleName}</td>
                        <td>{item.prefix}</td>
                        <td>{item.nickName}</td>
                        <td>{item.addressLine1}</td>
                        <td>{item.addressLine2}</td>
                        <td>{item.zipcode}</td>
                        <td>{item.city+"/"+item.state}</td>
                        <td>{item.country}</td>
                        <td>{item.friends.toString()}</td>
                        <td>{item.hobbies.toString()}</td>
                 </tr>))}
             </tbody>
         </table>
     </div>
    )
}
export default UserListComponent;