export const isArrayEmpty=(arr)=>{
    if(arr !==undefined && arr !==null && arr.Length > 0){
        return true;
    }
    return false;
}
export const dumpLogs=(message)=>{
    console.log(message);
}
//export {isArrayEmpty, dumpLogs}