// const { default: axios } = require("axios")

// const API_KEY=process.env.NEXT_PUBLIC_STRAPI_API_KEY

// // const axiosClient=axios.create({
// //     baseURL:process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337/api',
// //     headers:{
// //         'Authorization':`Bearer ${API_KEY}`
// //     }
// // })
// // console.log("Esta es la apikey",API_KEY);


// const axiosClient = axios.create({
//     baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337/api',
//     headers: {
//       'Authorization': API_KEY ? `Bearer ${API_KEY}` : ''
//     }
//   });

// // const axiosClient = axios.create({
// //     baseURL: 'https://postgree-strapi-one.onrender.com/',
// //     // Si estás usando autenticación, asegúrate de incluir el token aquí
// //     // headers: {
// //     //   'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
// //     //   'Content-Type': 'application/json',
// //     // },
// //     headers: {
// //               'Authorization': API_KEY ? `Bearer ${API_KEY}` : '',
// //               'Content-Type': 'application/json',
// //             }
// //   });


// const getCategory=()=>axiosClient.get('/api/categories?populate=*');


const { default: axios } = require("axios")

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

const axiosClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Authorization': API_KEY ? `Bearer ${API_KEY}` : '',
        'Content-Type': 'application/json',
    }
});

const handleApiError = (error) => {
    if (error.response) {
        console.error('Error response:', {
            status: error.response.status,
            data: error.response.data,
            headers: error.response.headers,
            config: {
                method: error.config.method,
                url: error.config.url,
                data: error.config.data,
                headers: error.config.headers
            }
        });
        throw new Error(`API error: ${error.response.status} - ${JSON.stringify(error.response.data)}`);
    } else if (error.request) {
        console.error('Error request:', error.request);
        throw new Error('No response received from API');
    } else {
        console.error('Error:', error.message);
        throw new Error(`Request setup error: ${error.message}`);
    }
};


// const getCategory = async () => {
//     try {
//       const response = await fetch(`${API_URL}/categories?populate=*`);
//       console.log(response);
      
//       const data = await response.json();
//       console.log(data);
      
//       return data;
//     } catch (error) {
//       console.error('Error fetching categories:', error);
//     }
//   };


// const getDoctorList=()=> axiosClient.get('/api/doctors?populate=*');

const getDoctorsByCategory=(category)=> axiosClient.get('/api/doctors?filters[categories][Name][$in]='+category+"&populate=*");

const getDoctorById=(id)=>axiosClient.get('/api/doctors/'+id+'?populate=*')

// const bookAppointment=(data)=>axiosClient.post('/api/appointments',data);

const getUserBookingList=(userEmail)=>axiosClient.get("/api/appointments?[filters][Email][$eq]="+userEmail+"&populate[doctor][populate][Image][populate][0]=url&populate=*")

// const getUserBookingList = (userEmail) => axiosClient.get("/api/appointments?[filters][Email][$eq]="+userEmail+"&populate=doctor.Image")  // INFO CON IMG

// const getUserBookingList = (userEmail) => axiosClient.get("/api/appointments?[filters][Email][$eq]="+userEmail+"&populate=doctor.Image")


const deleteBooking=(id)=>axiosClient.delete('/api/appointments/'+id)
      
const sendEmail=(data)=>axios.post('/api/sendEmail',data);



// export default {
//     getCategory,
//     getDoctorList,
//     getDoctorsByCategory,
//     getDoctorById,
//     bookAppointment,
//     getUserBookingList,
//     deleteBooking,
//     sendEmail
// }


// const axios = require('axios');




// const handleApiError = (error) => {
//     if (error.response) {
//         console.error('Error response:', error.response.status, error.response.data);
//         throw new Error(`API error: ${error.response.status} - ${JSON.stringify(error.response.data)}`);
//     } else if (error.request) {
//         console.error('Error request:', error.request);
//         throw new Error('No response received from API');
//     } else {
//         console.error('Error:', error.message);
//         throw new Error(`Request setup error: ${error.message}`);
//     }
// };




//----ESTOS LOS COMENTARE  Y USARE LOS ANTERIORES ------------/////

const getCategory = async () => {
    try {
        const response = await axiosClient.get('/api/categories?populate=*');
        console.log(response.data);
        
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};

const getDoctorList = async () => {
    try {
        const response = await axiosClient.get('/api/doctors?populate=*');
        return response;
    } catch (error) {
        console.log(error);
    }
};



// const getDoctorById = async (id) => {
//     try {
//         const response = await axiosClient.get(`/api/doctors/${id}?populate=*`);
//         return response.data;
//     } catch (error) {
//         handleApiError(error);
//     }
// };

// const getDoctorById = async (id) => {
//     console.log('Fetching doctor with id:', id);
//     try {
//         const response = await axiosClient.get(`/api/doctors/${id}?populate=*`);
//         console.log('Doctor data received:', response.data);
//         return response.data;
//     } catch (error) {
//         console.error('Error in getDoctorById:', error);
//         handleApiError(error);
//     }
// };

const bookAppointment = async (data) => {
    try {
        const response = await axiosClient.post('/api/appointments', data);
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};

// const getUserBookingList = async (userEmail) => {
//     try {
//         const response = await axiosClient.get(`/api/appointments?filters[Email][$eq]=${encodeURIComponent(userEmail)}&populate[doctor][populate][image][populate][0]=url&populate=*`);
//         return response.data;
//     } catch (error) {
//         handleApiError(error);
//     }
// };

// const deleteBooking = async (id) => {
//     try {
//         const response = await axiosClient.delete(`/api/appointments/${id}`);
//         return response.data;
//     } catch (error) {
//         handleApiError(error);
//     }
// };

// const sendEmail = async (data) => {
//     try {
//         const response = await axios.post('/api/sendEmail', data);
//         return response.data;
//     } catch (error) {
//         handleApiError(error);
//     }
// };

////-------------- HASTA AQUI LOS COMENTO -----------------

// module.exports = {
//     getCategory,
//     getDoctorList,
//     getDoctorsByCategory,
//     getDoctorById,
//     bookAppointment,
//     getUserBookingList,
//     deleteBooking,
//     sendEmail
// };


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