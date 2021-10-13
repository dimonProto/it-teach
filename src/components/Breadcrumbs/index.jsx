import React from 'react'
import './breadcrumbs.scss'

const Breadcrumb = ({ list, className, onClick }) => {

    return (
        <div className={"custom-breadcrumb" + (className ? ` ${className}` : '')}>
            <nav>
                <ol className="breadcrumb">
                    {
                        list.map((item, i) => (
                            <li
                                key={i}
                                className={"breadcrumb-item" + (i === list.length - 1 ? " active" : "")}
                                onClick = {() => {
                                    if(i !== list.length - 1 && onClick){
                                        onClick(i)
                                    }
                                }}
                            >
                                {item}
                            </li>
                        ))
                    }
                </ol>
            </nav>
        </div>
    )
}

export default Breadcrumb
