const IP="192.168.200.20"
const PORT=3002
const URL="http://"+IP+":"+PORT+"/"

export const getAllLaptops=(fnRefreshList)=>{
    fetch(URL+"laptops")
    .then((response)=>{return response.json()})
    .then((body)=>{
        fnRefreshList(body);
    })
}