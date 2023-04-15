import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import './App.css';
import { useState,useEffect } from "react";
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";



const Title =() => <h1 style={{color:"red",textAlign:"center",fontSize:"1.5rem"}}>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>

function App() {
  // const initState = [
  //   {id:1,title:"ค่าเช่าบ้าน",amount:-2000},
  //   {id:2,title:"เงินเดือน",amount:25000},
  //   {id:3,title:"ค่าเดินทาง",amount:-1000}
  // ]
  const [items, setItems] = useState([]);
  const [reportIncome, setReportIncome] = useState(0);
  const [reportOut, setReportOut] = useState(0);
   
  
  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem,...prevItem];
    });
  }
  useEffect(()=>{
    const amounts = items.map(items => items.amount)
    const income = amounts.filter(e => e>0).reduce((total,e)=>total+=e,0)
    const out = (amounts.filter(e => e<0).reduce((total,e)=>total+=e,0))*(-1)
    setReportIncome(income);
    setReportOut(out);
  },[items,reportIncome,reportOut])

  //reducer state
  // const [showReport, setShowReport] = useState(false);
  // const reducer = (state,action) => {
  //   switch (action.type) {
  //     case "SHOW":
  //       return setShowReport(true)
  //     case "HIDE":
  //       return setShowReport(false)
  //   }
  // }
  // const [result,dispatch] = useReducer(reducer,showReport)
  return (
    <DataContext.Provider value={
      {
        income : reportIncome,
        out : reportOut
      }
    }>
      <div className="container">
        <Title />
        <ReportComponent />
        {/* {showReport && <ReportComponent/>} */}
        <FormComponent onAddItem={onAddNewItem}/>
        <Transaction item={items}/>
        {/* <div>
        <p>{result}</p>
          <button onClick={()=>dispatch({type:"SHOW"})}>แสดง</button>
          <button onClick={()=>dispatch({type:"HIDE"})}>ซ่อน</button>
        </div> */}
      </div>
    </DataContext.Provider>
  );
}

export default App;
