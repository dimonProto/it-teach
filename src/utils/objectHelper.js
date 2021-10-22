
export const updateObjectInArray = (items,itemId,objPropname,newObjProps) =>{
    return  items.map(u => {
        if (u[objPropname] === itemId) {
            return {...u, ...newObjProps}
        }
        return u
})
}