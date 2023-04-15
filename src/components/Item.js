import PropTypes from 'prop-types';
// import DataContext from '../data/DataContext';
// import { useContext } from 'react';
//porps <ชื่อcomponents ชื่อproperties = ค่าที่กำหนดให้ props />
const Item =(props)=> {
//const Item =({title,amount})
    const {title,amount} = props;
    const status = amount < 0 ? "out" : "in";
    // const name = useContext(DataContext);
    return (
        <li className={status}>{title} {status}<span>{amount}</span>
                {/* <DataContext.Consumer>
                    {value=><p>{value}</p>}
                </DataContext.Consumer> */}
                {/* {name} */}
        </li>
    );
}

Item.propTypes={
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}

export default Item;