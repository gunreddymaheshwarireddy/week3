import React from "react";



const StudentComponent=(props)=>{
    console.log(props);
    const {student}=props;
    return(
   <div>
    <h2><u>Student component using Object Destructing through props</u></h2>
    <div style={{width:'fit-content',margin:'auto'}}>
    <table className=" table table-striped table-hover table-danger">
    <tbody>
    <tr> <td>RollNo.:</td> <td>{student.RollNo}</td> </tr>
    <tr> <td>Name:</td> <td>{student.Name}</td> </tr>
    <tr> <td>Mobile:</td> <td>{student.Mobile}</td> </tr>
    <tr> <td>Email:</td> <td>{student.Email}</td> </tr>
    </tbody>
    </table>
    </div>
    </div>
    );
}
export default StudentComponent;