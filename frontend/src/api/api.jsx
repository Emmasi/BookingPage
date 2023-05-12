// import { useEffect, useState } from "react";
// import { getData } from '../utils';
// export function customHook(){
//    const [data, setData] = useState();
   
//    useEffect(()=>{
//       fetchData();
//    },[])
//    const fetchData = async () => {
//       try {
//         const response = await getData('data.json', 'json');
//         setData(response.persons);
//       } catch (error) {
//         console.error(error);
//       }
//    };
//    return(data);
// }

// const FetchData =(url)=>{
//   const [alldata,setalldata]= useState( null)
//   const fetchfunction =(url)=>{
//   fetch(url)
//         .then((response) => response.json())
//         .then((data) => setalldata(data))
//         .catch((e) => {console.error(e)})
//   }
//   useEffect(() => {
//     const fetchAllData = async (url)=>{
//       const alldata = await fetchfunction(url)
//       setalldata(alldata); 
//     };
//     fetchAllData(url)
//   },[]);
//     return alldata;   
// }
// export {FetchData}

// const ApiComponent = () => {
//   const [data, setData] = useState();

//   useEffect(() => {
//     // fetch data
//     const listlessons = async () => {
//       const data = await (await fetch("/booking")).json();
//       console.log(data);
//       setData(data);
//     };

//     listlessons();
//   }, []);
// };
// export default ApiComponent;
