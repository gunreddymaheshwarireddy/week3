import React from "react";

const studentDetails = [
    {
      sid: "2211CS010211",
      sname: "Snow White",
      group: "Gamma",
    },
    {
      sid: "2211CS010853",
      sname: "Cindrella",
      group: "Sigma",
    },
    {
      sid: "2211CS010582",
      sname: "Rapunzel",
      group: "Zeta",
    },
    {
      sid: "2211CS010976",
      sname: "Beauty",
      group: "Epsilon",
    },
]


function studentdetails(props){
    return(
        <div>
            <h2><u>Using props through functions to display student details</u></h2>
        <div style={{width:'fit-content',margin:'auto'}}>
            <table className="table table-hover table-primary">
                <thead>
                    <tr>
                        <td>Student Id</td>
                        <td>Student Name</td>
                        <td>Student Email</td>
                    </tr>
                </thead>
                <tbody>
                {studentDetails.map((props, index) => (
                <tr data-index={index}>
                  <td>{props.sid}</td>
                  <td>{props.sname}</td>
                  <td>{props.email}</td>
                </tr>
                ))}
                </tbody>
            </table>
        </div>
        </div>
    );
}
export default studentdetails;