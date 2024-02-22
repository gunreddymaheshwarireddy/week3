import React from "react";

const employeeDetails = [
    {
      eid: "211",
      ename: "Akhil",
      ds: "Manager",
    },
    {
      eid: "456",
      ename: "Srinivas reddy",
      ds: "HR",
    },
    {
      eid: "975",
      ename: "Sridevi",
      ds: "Developer",
    },
    {
      eid: "827",
      ename: "Mahi",
      ds: "Team Leader",
    },
];


class employeedetails extends React.Component {
    render() {
      return (
        <div>
          <div>
            <h2><u>Using props through classes to display employee details</u></h2>
            <div style={{width:'fit-content',margin:'auto'}}>
              <table className="table table-hover table-primary">
                <thead>
                  <tr>
                    <th>Employee ID</th>
                    <th>Employee Name</th>
                    <th>Designation </th>
                  </tr>
                </thead>
                <tbody>
                  {employeeDetails.map((emp, index) => (
                    <tr data-index={index}>
                      <td>{emp.eid}</td>
                      <td>{emp.ename}</td>
                      <td>{emp.ds}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
  }
  export default employeedetails;