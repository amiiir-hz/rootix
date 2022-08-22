// export const modeLight = () => (dispatch) => {
//   dispatch({
//     type: "light",
//   });
// };
// export const modeDark = () =>(dispatch)=>{
//     dispatch({
//         type:"dark"
//     })
// }
export const modeSeloctor =(modeSelect)=>(dispatch)=>{
    dispatch({
        type:'select',
        payload:modeSelect
    })
}
