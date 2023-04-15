import Item from './Item'
import './Transaction.css'
// import DataContext from '../data/DataContext'
// import { useContext } from 'react'
//porps <ชื่อcomponents ชื่อproperties = "ค่าที่กำหนดให้props"  />


const Transaction =(props) => {
    const {item} = props
    // const {income , out} = useContext(DataContext)
    return (
        <div>
            <ul className="item-list">
                {item.map((e)=>{
                    return <Item title={e.title} amount={e.amount} key={e.id}/>
                    //return <Item {...e} />
                }
                )}
            </ul>
            {/* <p>รายรับ : {income}</p>
            <p>รายจ่าย : {out}</p> */}
            {/* {name} */}
            {/* <DataContext.Consumer>
                {value=><p>{value}</p>}
            </DataContext.Consumer> */}
        </div>

    )

}

export default Transaction;

// key = {uuidv4()}