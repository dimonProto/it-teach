import React from "react";


export const withSuspense = (Component) => {
        return (props) =>{
           return <React.Suspense fallback={<h2>Could not fetch posts.</h2>}>
                      <Component {...props}/>
                  </React.Suspense>
        }

}


