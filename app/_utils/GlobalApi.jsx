const { default: axios } = require("axios")

const API_KEY=process.env.NEXT_PUBLIC_STRAPI_API_KEY

const axiosClient=axios.create({
    baseURL:process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337/api',
    headers:{
        'Authorization':`Bearer ${API_KEY}`
    }
})

const getCategory=()=>axiosClient.get('categories?populate=*');

const getDoctorList=()=> axiosClient.get('doctors?populate=*');

const getDoctorsByCategory=(category)=> axiosClient.get('/doctors?filters[categories][Name][$in]='+category+"&populate=*");

const getDoctorById=(id)=>axiosClient.get('doctors/'+id+'?populate=*')

const bookAppointment=(data)=>axiosClient.post('/appointments',data);

const getUserBookingList=(userEmail)=>axiosClient.get("/appointments?[filters][Email][$eq]="+userEmail+"&populate[doctor][populate][image][populate][0]=url&populate=*")

const deleteBooking=(id)=>axiosClient.delete('/appointments/'+id)
      
const sendEmail=(data)=>axios.post('/api/sendEmail',data);



export default {
    getCategory,
    getDoctorList,
    getDoctorsByCategory,
    getDoctorById,
    bookAppointment,
    getUserBookingList,
    deleteBooking,
    sendEmail
}


// import axios from 'axios';

// const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

// const axiosClient = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337/api',
//   headers: {
//     'Authorization': `Bearer ${API_KEY}`
//   }
// });

// const handleApiError = (error) => {
//   if (error.response) {
//     // The request was made and the server responded with a status code
//     // that falls out of the range of 2xx
//     console.error('Error response:', error.response.status, error.response.data);
//     throw new Error(`API error: ${error.response.status} - ${JSON.stringify(error.response.data)}`);
//   } else if (error.request) {
//     // The request was made but no response was received
//     console.error('Error request:', error.request);
//     throw new Error('No response received from API');
//   } else {
//     // Something happened in setting up the request that triggered an Error
//     console.error('Error:', error.message);
//     throw new Error(`Request setup error: ${error.message}`);
//   }
// };

// const getCategory = async () => {
//   try {
//     const response = await axiosClient.get('categories?populate=*');
//     return response.data;
//   } catch (error) {
//     handleApiError(error);
//   }
// };

// const getDoctorList = async () => {
//   try {
//     const response = await axiosClient.get('doctors?populate=*');
//     return response.data;
//   } catch (error) {
//     handleApiError(error);
//   }
// };

// const getDoctorsByCategory = async (category) => {
//   try {
//     const response = await axiosClient.get(`/doctors?filters[categories][Name][$in]=${category}&populate=*`);
//     return response.data;
//   } catch (error) {
//     handleApiError(error);
//   }
// };

// const getDoctorById = async (id) => {
//   try {
//     const response = await axiosClient.get(`doctors/${id}?populate=*`);
//     return response.data;
//   } catch (error) {
//     handleApiError(error);
//   }
// };

// export default {
//   getCategory,
//   getDoctorList,
//   getDoctorsByCategory,
//   getDoctorById
// };