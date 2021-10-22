import React from "react";
import Pagination from "../common/FormControls/Pagination/Pagination";
import User from "./User";

let Users = ({currentPage, onPageChanged, totalItemCount, pageSize,users, ...props}) => {

    return (
        <div>
            <Pagination
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalItemCount={totalItemCount}
                pageSize={pageSize}
            />
            {users.map(u => <User
                user={u}
                key={u.id}
                followingInProgress={props.followingInProgress}
                unfollow={props.unfollow}
                follow={props.follow}
            />)}
        </div>
    )
}

export default Users