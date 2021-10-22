import React,{useState} from "react";
import classes from "./Paginator.module.css";

const Pagination = ({totalItemCount,pageSize,currentPage,onPageChanged,portionSize = 10}) => {

    const pageCount = Math.ceil(totalItemCount / pageSize);
    const pages = [];
    for (let i = 1; i < pageCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pageCount/ portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize
    let rightPortionPageNumber = portionNumber * portionSize

    return (
            <div className={classes.pagination}>
                {portionNumber > 1 && <button onClick={ ()=> {setPortionNumber(portionNumber - 1)}}>Prev</button>}
                {pages.filter((p)=> p >= leftPortionPageNumber && p <= rightPortionPageNumber).map((p) => {
                    return(
                        <span key={p} className={currentPage === p && classes.selectedPage}
                              onClick={ () => { onPageChanged(p) }}>
                            {p}
                        </span>)
                })}
                {portionCount > portionNumber && <button onClick={ ()=> {setPortionNumber(portionNumber + 1)}}>Next</button>}
            </div>

    )
}

export default Pagination