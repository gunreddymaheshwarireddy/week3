import React from "react";
// import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Week3.css";

const PropsComponent = (props) => {
  return (
    <div>
      <div>
        <div className="container-1">
          <h2 className="text-success">
            Name:
            <span style={{ color: "purple" }}>{props.name}</span>
          </h2>
          <h2 className="text-success">
            <span style={{ color:"#ff6347" }}>{props.hallticket}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

const PropComponent = (props) => {
  const studentDetails = [
    {
      stu_name: "mahi",
      stu_id: "211",
      stu_PhoneNumber: "7561238964",
    },
    {
      stu_name: "vaishu",
      stu_id: "311",
      stu_PhoneNumber: "9876123453",
    },

    {
      stu_name: "eshu",
      stu_id: "497",
      stu_PhoneNumber: "9783215647",
    },
    {
      stu_name: "Akhil",
      stu_id: "986",
      stu_PhoneNumber: "8764320912",
    },
  ];
  return (
    <div>
      <div className="container-2">
        <div class="center">
          <h3><q>Student Details</q></h3>
          <table className="table table-info table-striped" >
            <thead>
              <tr>
                <th>Std_Name</th>
                <th>Std_ID</th>
                <th>Std_PhoneNumber</th>
              </tr>
            </thead>
            <tbody>
              {studentDetails.map((student, index) => (
                <tr data-index={index}>
                  <td>{student.stu_name}</td>
                  <td>{student.stu_id}</td>
                  <td>{student.stu_PhoneNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
class PropsClass extends React.Component {
  render() {
    const employeeDetails = [
      {
        emp_id: "8785",
        emp_name: "srinivas",
        desg: "Manager",
      },
      {
        emp_id: "9868",
        emp_name: "Sridevi",
        desg: "PA",
      },
      {
        emp_id: "9430",
        emp_name: "janaki",
        desg: "COA",
      },
      {
        emp_id: "2119",
        emp_name: "Akash",
        desg: "HR",
      },
    ];
    return (
      <div>
        <div className="container-3">
          <div class="text-center center">
            <h3><q>Employee Details</q></h3>
            <table className="table table-warning table-striped">
              <thead>
                <tr>
                  <th>Emp_ID</th>
                  <th>Emp_Name</th>
                  <th>Emp_Designation </th>
                </tr>
              </thead>
              <tbody>
                {employeeDetails.map((emp, index) => (
                  <tr data-index={index}>
                    <td>{emp.emp_id}</td>
                    <td>{emp.emp_name}</td>
                    <td>{emp.desg}</td>
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
const StudentComponent = (props) => {
  console.log(props);
  const { student } = props;
  return (
    <div>
      <div className="container-4">
        <h3><q> student information</q></h3>
        <table className="table table-secondary table-striped">
          <tbody>
            <tr>
              <td>Stud_Roll No.:</td>
              <td>{student.RollNo}</td>
            </tr>
            <tr>
              <td>Stud_Name:</td>
              <td>{student.Name}</td>
            </tr>
            <tr>
              <td>Stud_Section:</td>
              <td>{student.Section}</td>
            </tr>
            <tr>
              <td>Stud_Year:</td>
              <td>{student.Year}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default function Week3() {
  const student = {
    RollNo: "2211CS010211",
    Name: "G.Maheshwari",
    Section: "Gamma",
    Year: "2nd Year",
  };
  return (
    <div>
      <h1 style={{color:"purple"}}>Week 3-Create React App and Demonstrate Props</h1>
      <div class="container-1">
        <h1 Style="color:red;"><u>Question 1</u></h1>
        <h3 Style="color:orange;"> Create a React Component, using props render one & multiple attribute values and display it on the webpage</h3>
        <h2>
          <h3 Style="color:yellow"><u>Component by using props</u></h3>
        </h2>
        <h3 Style="color: Green"><q>Rendering single attributes by using props</q></h3>
        <PropsComponent name="Akhil Reddy" />
        <h3 Style="color: Green"><q>Rendering multiple attributes by using props</q></h3>
        <PropsComponent name="Akhil Reddy" hallticket="Roll No:2211CS010211" />
      </div>
      <hr></hr>
      <div class="container-2">
        <h1 Style="color:Red;"><u>Question 2</u></h1>
        <h2>
          <h3 Style="color:blue;">Creating a react component by using props and creating a table by using Student details like student ID,Name , PhoneNumber</h3>
        </h2>
        <PropComponent
          name="G.Maheshwari"
          ID="2211CS010211"
          group="8A-1"
        />
      </div>
      <hr></hr>
      <div class="container-3">
        <h1 Style="color:Red;"><u>Question 3</u></h1>
        <h2>
          <h3 Style="color:blue;"> Create a React Component, using props through classes display employee details (Emp-id, Emp-Name, Emp-Designation) on the webpage.</h3>
        </h2>
        <PropsClass/>
      </div>
      <hr></hr>
      <div class="container-4">
        <h1 Style="color:Red;"><u>Question 4</u></h1>
        <h2>
          <h3 Style="color:blue;">Create a Student component table and displaying the student details like student Name,Roll No,Year,Section .</h3>
        </h2>
        <StudentComponent student={student} />
      </div>
    </div>
  );
}
