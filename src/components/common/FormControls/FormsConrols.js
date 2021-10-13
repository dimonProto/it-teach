import React from "react";
import classes from "./FormsConrols.module.css"

const FormControl = ({input, meta,  ...props}) => {

    const showError = meta.touched && meta.error

    return (
        <div className={classes.formControl + ' ' + (showError ? classes.error : "")}>
            {props.children}
            { showError  && <span>{meta.error}</span>}
        </div>
    )
}
export const Textarea = (props) => {
    const {input, meta,  ...Restprops} = props
    return <FormControl {...props}> <textarea {...input} {...Restprops}  /></FormControl>
}
export const Input = (props) => {
    const {input, meta,  ...Restprops} =  props
    return <FormControl {...props}> <input {...input} {...Restprops}  /></FormControl>
}

// export const Textarea = ({input, meta,  ...props}) => {

//     const showError = meta.touched && meta.error
//
//     return (
//         <div className={classes.formControl + ' ' + (showError ? classes.error : "")}>
//             <textarea {...input} {...props}  />
//             { showError  && <span>{meta.error}</span>}
//         </div>
//     )
// }
//
//
// export const Input = ({input, meta,  ...props}) => {
//
//     const showError = meta.touched && meta.error
//
//     return (
//         <div className={classes.formControl + ' ' + (showError ? classes.error : "")}>
//             <input {...input} {...props}  />
//             { showError  && <span>{meta.error}</span>}
//         </div>
//     )
// }