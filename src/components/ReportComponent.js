import { useContext } from "react";
import DataContext from "../data/DataContext";
import "./ReportComponent.css";
// import DataContext from "../data/DataContext";

const ReportComponent = () => {
    // const name = useContext(DataContext)
    const {income , out} = useContext(DataContext);
    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
        <div>
            <h4>ยอดคงเหลือ (บาท)</h4>
            <h1>฿{formatNumber((income - out).toFixed(2))}</h1>
            <div className="report-container">
                <div>
                    <h4>ยอดรายรับ</h4>
                    <p className="reportIncome">฿{formatNumber((income).toFixed(2))}</p>
                </div>
                <div>
                    <h4>ยอดรายจ่าย</h4>
                    <p className="reportOut">฿{formatNumber((out).toFixed(2))}</p>
                </div>
            </div>
        </div>
    )
}

export default ReportComponent