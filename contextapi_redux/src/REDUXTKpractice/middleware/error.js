const error = (store)=>(next)=>action=>{
 if(action.type === "SHOW_ERROR"){
    //here we pass error in payload
    console.log(action.payload.error)
 }else{
    next(action)
 }
}
export default error