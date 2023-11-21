import axios from 'axios';
//const url='https://jsonplaceholder.typicode.com/users'
const url='https://fakestoreapi.com/products'
/*getting data from API*/ 
export async function getData() {
  
    try {
      
        const response = await axios.get(`${url}`);
       
        return response;
    } catch (error) {
        console.error("Error in fectching data:", error);
        throw error; // Rethrow the error to be handled by the caller
    }
}