import React ,{useState , useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {

  const [data, setdata] = useState([]);
  console.log("data", data)
  const styles = {
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginBottom: '20px',
      border: '1px solid #ddd', // Add this line to add a border to the table
    },
    th: {
      backgroundColor: '#f2f2f2',
      padding: '13px',
      borderBottom: '1px solid #ddd',
    },
    td: {
      padding: '18px',
      borderBottom: '1px solid #ddd',
      textAlign: 'center',
    },
    stickyHeader: {
      position: 'sticky',
      top: '0',
      background: '#f2f2f2',
    },
  };
  
  const [show, setshow] = useState(false);
  const handleClose = () => {
    setid("");
    setname("");
    setcode("");
    setrank("");
    setg_salary("");
    setPresent("");
    setLeave("");
    setSalary("");
    setisupdate(false);
    setshow(false);
  }
  const handleShow = () => setshow(true);
  const [isupdate, setisupdate] = useState(false);
  const [update_data, setupdate_data] = useState("");
  console.log("updat", update_data)

  const [id, setid] = useState("");
  console.log("id", id)
  const [name, setname] = useState( isupdate ? update_data.name : "");
  const [code, setcode] = useState("");
  const [rank, setrank] = useState("");
  const [g_salary, setg_salary] = useState("");
  const [Present, setPresent] = useState("");
  const [Leave, setLeave] = useState("");
  const [Salary, setSalary] = useState("");

  const submit = () => {
let obj = {
  // id : id,
  id : "EmpI2S" + data.length+1,
  name : name,
  code : code,
  rank : rank,
  gross : g_salary,
  Present : Present,
  Leave : Leave,
  Salary: Salary,
}

data.push(obj);
setid("");
setname("");
setcode("");
setrank("");
setg_salary("");
setPresent("");
setLeave("");
setSalary("");
setshow(false);
  }

const [search, setsearch] = useState("");
const [emp_salary, setemp_salary] = useState("");
useEffect(() => {
 let q=  data.filter((v) => {
   if(v.id === search) {
     setemp_salary(v.Salary)
   }
 })
}, [search])

  useEffect(() => {
   if(isupdate) {
    setid(update_data.id);
    setname(update_data.name);
    setcode(update_data.code);
    setrank(update_data.rank);
    setg_salary(update_data.g_salary);
    setPresent(update_data.Present);
    setLeave(update_data.Leave);
    setSalary(update_data.Salary);
     }
  }, [isupdate])
  

  const Delete = (idx)  => {
    let list = [...data];
    list.splice(idx , 1);
    setdata(list);
  }

  const [update_index, setupdate_index] = useState("");
  const update = () => {
    data.splice(update_index, 0, {
      id : id,
      name : name,
      rank : rank,
      gross : g_salary,
      Present : Present,
      Leave : Leave,
      Salary: Salary,
    });
    handleClose();
  }
  return (
    <>
  
    <Modal
      show={show} onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
{isupdate ? "Update Employee" : " Add Employee"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <div>
        {isupdate && 
        
        <div>
          <label>ID</label><br/>
          <input disabled type="text" placeholder="Name" value={id} onChange={(e) => {
            setid(e.target.value);
          }}/>
        </div>
}
        <div>
          <label>Name</label><br/>
          <input type="text" placeholder="Name" value={name} onChange={(e) => {
            setname(e.target.value);
          }}/>
        </div>
        <div>
          <label>Code</label><br/>
          <input type="text" placeholder="Number" value={code} onChange={(e) => {
            setcode(e.target.value);
          }}/>
        </div>

        <div>
          <label>Rank</label><br/>
          <input type="text" placeholder="Text" value={rank} onChange={(e) => {
            setrank(e.target.value);
          }}/>
        </div>

        <div>
          <label>Gross Salary</label><br/>
          <input type="number" placeholder="Number" value={g_salary} onChange={(e) => {
            setg_salary(e.target.value);
          }}/>
        </div>

        <div>
          <label>No. of Present Days</label><br/>
          <input type="number" placeholder="Number" value={Present} onChange={(e) => {
            setPresent(e.target.value);
          }}/>
        </div>

        <div>
          <label>Leave Day</label><br/>
          <input type="number" placeholder="Number" value={Leave} onChange={(e) => {
            setLeave(e.target.value);
          }}/>
        </div>

        <div>
          <label>Paid Salary</label><br/>
          <input type="number" placeholder="Number" value={Salary} onChange={(e) => {
            setSalary(e.target.value);
          }}/>
        </div>
       </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => {
          if(isupdate) {
            update()
          } else {
            submit();
          }
        }}> {isupdate ? "Update":  "Add"}</Button>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
   

    <div>
        <div >
      <div style={{ background: "", width: "", padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>Office Attendance Sheet :</h1>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
            height: "180px",
            background: "",
          }}
        >
          <div
            style={{
              width: "20%",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              textAlign: "center",
            }}
          >
            <h4>Name Of Employee</h4>
            <br />
            <p>{data.length}</p><br/>
            <button onClick={() => {
              setshow(true);
            }}>🔗Add New Employee</button>
            {/* <p>🔗Add New Employee</p> */}
          </div>
          <div
            style={{
              width: "20%",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              textAlign: "center",
            }}
          >
            <h4>Employee I'd</h4>
            <br />
            <input
            type="text"
            placeholder="Enter Employee ID"
            value={search}
            onChange={(e) => {
              setsearch(e.target.value);
            }}
            />
          </div>
          <div
            style={{
              width: "20%",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              textAlign: "center",
            }}
          >
            <h4>Paid Salary</h4>
            <br />
            <p>{emp_salary}</p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>Detail's of Employee I'd :</h1>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
             background: "",
            maxHeight: "70vh",height:"auto",  overflow:"scroll"
          }}
        >
 
             <table style={styles.table } >
      <thead style={styles.stickyHeader}>
        <tr>
          <th style={styles.th}>Sl No.</th>
          <th style={styles.th}>ID</th>
          <th style={styles.th}>Name</th>
          <th style={styles.th}>Code</th>
          <th style={styles.th}>Rank </th>
          <th style={styles.th}>Gross Salary</th>
          <th style={styles.th}>NO . of Present Days</th>
          <th style={styles.th}>Leave Days</th>
          <th style={styles.th}>Paid Salary</th>
          <th style={styles.th}>Action</th>
        </tr>
      </thead>
      <tbody>

        {data.map((itm , idx) => {
          return (
            <tr>
              <td style={styles.td}>{idx + 1}</td>
            <td style={styles.td}>
              <b>{itm.id}</b>
              </td>
            <td style={styles.td}>{itm.name} </td>
            <td style={styles.td}>{itm.code} </td>
            <td style={styles.td}>{itm.rank} </td>
            <td style={styles.td}> {itm.gross}</td>
            <td style={styles.td}> {itm.Present}</td>
            <td style={styles.td}>{itm.Leave}</td>
            <td style={styles.td}>{itm.Salary}</td>
            <td style={styles.td}>
              <button type="button" onClick={()=> {
                setshow(true);
                setisupdate(true);
                setupdate_data(itm);
                setupdate_index(idx);
              }}>Update</button>
              <button type="button" onClick={() => {
                            Delete(idx);
              }}>Delete</button>
            </td>
             
          </tr>
          )
        })}

      </tbody>
    </table>
 
        </div>
      </div>
    </div>
    </div>

    </>

  )
}

export default Dashboard;