// import { useEffect, useState } from "react";

// const useFetch = (url) =>{

//     const [components, setComponents] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         setTimeout(()=>{
//             fetch(url) 
//             .then((response)=>{
//                 if (!response.ok){
//                     throw Error("Ooooooooopss! ...unable to connect to the server. >>>Check your internet connection and try again!");
//                 }
//                 return response.json()
//             })
//             .then((item)=>{
//                 console.log(item)
//                 setComponents(item)
//                 setLoading(false)
//             })
//             .catch((error)=>{
//                 console.log(error.message)
//                 setError(error.message)
//                 setLoading(false)
//             })
//         }, 5000)
//     }, []);

//     const handleDelete = (id) => {
//         console.log('The id of the clicked component is', id)
//         const filteredComponents = components.filter((component, index) => component.id !== id )
//         setComponents(filteredComponents)
//     }

//     return {components, loading, error} = useFetch('http://localhost:8000/courses');
// }

// export default useFetch;