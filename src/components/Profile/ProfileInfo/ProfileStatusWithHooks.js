import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks  = (props) => {
     const [editMode,setEditMode] = useState(false)
     const [status,setStatus] = useState(props.status)

    useEffect(() =>{
        setStatus(props.status)
    }, [props.status])

     let activateEditMode = () => {
         setEditMode(true)
     }

     let deactivateEditMode = () =>  {
         setEditMode(false)
            props.updateStatus(status)
     }

     let onStatusChange = (e) => {
            setStatus(e.currentTarget.value)
     }

    return(
        <>
            { !editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status  || '--------'} </span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true}  onBlur={deactivateEditMode} value={status}/>
                </div>
            }
        </>
    )
}

export default ProfileStatusWithHooks
