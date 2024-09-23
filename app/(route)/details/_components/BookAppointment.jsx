// "use client"
// import React, { useEffect, useState } from 'react'
// import {
//     Dialog,
//     DialogClose,
//     DialogContent,
//     DialogDescription,
//     DialogFooter,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
//   } from "@/components/ui/dialog"
// import { Button } from '@/components/ui/button'
// import { Calendar } from "@/components/ui/calendar"
// import { CalendarDays, Clock, DoorClosed } from 'lucide-react'
// import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
// import { Textarea } from '@/components/ui/textarea'
// import GlobalApi from '@/app/_utils/GlobalApi'
// import { toast } from 'sonner'

  

// const BookAppointment = ({doctor}) => {
//     const [date, setDate]=useState(new Date());
//     const [timeSlot,setTimeSlot]=useState();
//     const [selectedTimeSlot,setSelectedTimeSlot]=useState();
//     const [note,setNote]=useState();
//     const {user}=useKindeBrowserClient();

//     useEffect(() => {
//       if (!doctor || !doctor.id) {
//           console.error('Doctor prop is missing or does not have an id', doctor);
//       }
//   }, [doctor]);

//     useEffect(()=>{
//       getTime();
//     },[])

//     const getTime = () => {

//       const timeList = [];

//       for (let i = 10; i <= 12; i++) {
//           timeList.push({
//               time: i + ':00 AM'
//           })
//           timeList.push({
//               time: i + ':30 AM'
//           })
//       }
//       for (let i = 1; i <= 6; i++) {
//           timeList.push({
//               time: i + ':00 PM'
//           })
//           timeList.push({
//               time: i + ':30 PM'
//           })
//       }

//       setTimeSlot(timeList)
//     }


//     const saveBooking=()=>{
//       const formattedDate = date.toISOString().split('T')[0]
//       const data={

//         data:{
//           Username:user.given_name+" "+user.family_name,
//           Email:user.email,
//           Time:selectedTimeSlot,
//           Date:formattedDate,
//           doctor: doctor.data.id,

//           Note:note
//         }
//       }
//       console.log(data)

//       GlobalApi.bookAppointment(data).then(resp=>{
//         console.log(resp);
//         if(resp)
//         {
//           GlobalApi.sendEmail(data).then(resp=>{
//             console.log(resp)
//           })
//           toast("Cita agendada, revise su email")
//         }
//       })

//     }

//     const isPastDay=(day)=>{
//         return day<=new Date();
//       }

//   return (
//     <Dialog>
//       <DialogTrigger>
//         <Button className="mt-3 rounded-full"> Agendar cita</Button>
//       </DialogTrigger>
//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle>Agendar Cita</DialogTitle>
//           <DialogDescription>
//             <div>
//               <div className="grid grid-cols-1 md:grid-cols-2 items-baseline mt-5">
//                 {/**Calendar */}
//                 <div className='flex flex-col gap-3 items-baseline'>
//                     <h2 className='flex gap-2 items-center'>
//                         <CalendarDays className='text-primary h-5 w-5'/>
//                         Selecciona Fecha
//                     </h2>
//                   <Calendar
//                     mode="single"
//                     selected={date}
//                     onSelect={setDate}
//                     disabled={isPastDay}
//                     className="rounded-md border"
//                   />
//                 </div>

//                 {/**Time Slot */}
//                 <div className=' mt-3 md:mt-0'>
//                         <h2 className='flex gap-2 items-center mb-3'>
//                           <Clock className='text-primary h-5 w-5'/>
//                           Seleccione la hora
//                         </h2>
//                         <div className='grid grid-cols-3 gap-2 border 
//                         rounded-lg p-5'>
//                           {timeSlot?.map((item,index)=>(
//                             <h2 
//                             onClick={()=>setSelectedTimeSlot(item.time)}
//                             className={`p-2 border cursor-pointer
//                             text-center hover:bg-primary hover:text-white
//                             rounded-full
//                             ${item.time==selectedTimeSlot&&'bg-primary text-white'}`}>{item.time}</h2>
//                           ))}
//                         </div>
            
//                     </div>
//               </div>
//               <Textarea className="mt-3" placeholder="¿Algun comentario?" onChange={(e)=>setNote(e.target.value)} />
//             </div>
//           </DialogDescription>
//         </DialogHeader>
//         <DialogFooter className="sm:justify-end">
//           <DialogClose asChild >
//             <>
//             <Button type="button" 
//             className="text-red-500 border-red-500"
//             variant="outline">
//               Cerrar
//             </Button>
//             <Button type="button" disabled={!(date&&selectedTimeSlot)}
//             onClick={()=>saveBooking()}
//             >
//               Agendar
//             </Button>
//             </>
//           </DialogClose>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// }

// export default BookAppointment

// "use client"
// import React, { useEffect, useState } from 'react'
// import {
//     Dialog,
//     DialogClose,
//     DialogContent,
//     DialogDescription,
//     DialogFooter,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
//   } from "@/components/ui/dialog"
// import { Button } from '@/components/ui/button'
// import { Calendar } from "@/components/ui/calendar"
// import { CalendarDays, Clock, DoorClosed } from 'lucide-react'
// import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
// import { Textarea } from '@/components/ui/textarea'
// import GlobalApi from '@/app/_utils/GlobalApi'
// import { toast } from 'sonner'

// const BookAppointment = ({doctor}) => {
//     const [date, setDate] = useState(new Date());
//     const [timeSlot, setTimeSlot] = useState([]);
//     const [selectedTimeSlot, setSelectedTimeSlot] = useState();
//     const [note, setNote] = useState('');
//     const {user} = useKindeBrowserClient();

//     useEffect(() => {
//       if (!doctor || !doctor.id) {
//           console.error('Doctor prop is missing or does not have an id', doctor);
//       }
//       getTime();
//     }, [doctor]);

//     const getTime = () => {
//       const timeList = [];
//       for (let i = 10; i <= 18; i++) {
//           timeList.push({ time: `${i}:00 ${i < 12 ? 'AM' : 'PM'}` });
//           timeList.push({ time: `${i}:30 ${i < 12 ? 'AM' : 'PM'}` });
//       }
//       setTimeSlot(timeList);
//     }

//     const saveBooking = () => {
//       const formattedDate = date.toISOString().split('T')[0];
//       const data = {
//         data: {
//           Username: user.given_name + " " + user.family_name,
//           Email: user.email,
//           Time: selectedTimeSlot,
//           Date: formattedDate,
//           doctor: doctor.data.id,
//           Note: note
//         }
//       };
      
//       GlobalApi.bookAppointment(data).then(resp => {
//         if(resp) {
//           GlobalApi.sendEmail(data).then(resp => {
//             console.log(resp);
//           });
//           toast("Cita agendada, revise su email");
//         }
//       });
//     }

//     const isPastDay = (day) => {
//         return day <= new Date();
//     }

//   return (
//     <Dialog>
//       <DialogTrigger>
//         <Button className="w-full sm:w-auto mt-3 rounded-full">Agendar cita</Button>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[425px] md:max-w-[600px] lg:max-w-[800px]">
//         <DialogHeader>
//           <DialogTitle className="text-2xl font-bold">Agendar Cita</DialogTitle>
//           <DialogDescription>
//             <div className="mt-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className='flex flex-col gap-3'>
//                     <h2 className='flex gap-2 items-center text-lg font-semibold'>
//                         <CalendarDays className='text-primary h-5 w-5'/>
//                         Selecciona Fecha
//                     </h2>
//                   <Calendar
//                     mode="single"
//                     selected={date}
//                     onSelect={setDate}
//                     disabled={isPastDay}
//                     className="rounded-md border shadow-sm"
//                   />
//                 </div>

//                 <div>
//                   <h2 className='flex gap-2 items-center mb-3 text-lg font-semibold'>
//                     <Clock className='text-primary h-5 w-5'/>
//                     Seleccione la hora
//                   </h2>
//                   <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 border rounded-lg p-4 max-h-[300px] overflow-y-auto'>
//                     {timeSlot?.map((item, index) => (
//                       <Button
//                         key={index}
//                         variant={item.time === selectedTimeSlot ? 'default' : 'outline'}
//                         onClick={() => setSelectedTimeSlot(item.time)}
//                         className="w-full"
//                       >
//                         {item.time}
//                       </Button>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <Textarea 
//                 className="mt-6" 
//                 placeholder="¿Algún comentario?" 
//                 onChange={(e) => setNote(e.target.value)}
//                 rows={4}
//               />
//             </div>
//           </DialogDescription>
//         </DialogHeader>
//         <DialogFooter className="sm:justify-end mt-6">
//           <DialogClose asChild>
//             <Button type="button" variant="outline" className="w-full sm:w-auto">
//               Cerrar
//             </Button>
//           </DialogClose>
//           <Button 
//             type="button" 
//             disabled={!(date && selectedTimeSlot)}
//             onClick={() => saveBooking()}
//             className="w-full sm:w-auto mt-2 sm:mt-0"
//           >
//             Agendar
//           </Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// }

// export default BookAppointment

// "use client"
// import React, { useEffect, useState } from 'react'
// import {
//     Dialog,
//     DialogClose,
//     DialogContent,
//     DialogDescription,
//     DialogFooter,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
//   } from "@/components/ui/dialog"
// import { Button } from '@/components/ui/button'
// import { Calendar } from "@/components/ui/calendar"
// import { CalendarDays, Clock } from 'lucide-react'
// import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
// import { Textarea } from '@/components/ui/textarea'
// import GlobalApi from '@/app/_utils/GlobalApi'
// import { toast } from 'sonner'

// const BookAppointment = ({doctor}) => {
//     const [date, setDate] = useState(new Date());
//     const [timeSlot, setTimeSlot] = useState([]);
//     const [selectedTimeSlot, setSelectedTimeSlot] = useState();
//     const [note, setNote] = useState('');
//     const {user} = useKindeBrowserClient();

//     useEffect(() => {
//       if (!doctor || !doctor.id) {
//           console.error('Doctor prop is missing or does not have an id', doctor);
//       }
//       getTime();
//     }, [doctor]);

//     const getTime = () => {
//       const timeList = [];
//       for (let i = 10; i <= 18; i++) {
//           timeList.push({ time: `${i}:00 ${i < 12 ? 'AM' : 'PM'}` });
//           timeList.push({ time: `${i}:30 ${i < 12 ? 'AM' : 'PM'}` });
//       }
//       setTimeSlot(timeList);
//     }

//     const saveBooking = () => {
//       const formattedDate = date.toISOString().split('T')[0];
//       const data = {
//         data: {
//           Username: user.given_name + " " + user.family_name,
//           Email: user.email,
//           Time: selectedTimeSlot,
//           Date: formattedDate,
//           doctor: doctor.data.id,
//           Note: note
//         }
//       };
      
//       GlobalApi.bookAppointment(data).then(resp => {
//         if(resp) {
//           GlobalApi.sendEmail(data).then(resp => {
//             console.log(resp);
//           });
//           toast("Cita agendada, revise su email");
//         }
//       });
//     }

//     const isPastDay = (day) => {
//         return day <= new Date();
//     }

//   return (
//     <div className="max-w-sm mx-auto">
//       <Dialog>
//         <DialogTrigger>
//           <Button className="w-full rounded-full">Agendar cita</Button>
//         </DialogTrigger>
//         <DialogContent className="w-full max-w-[350px] p-4">
//           <DialogHeader>
//             <DialogTitle className="text-xl font-bold">Agendar Cita</DialogTitle>
//           </DialogHeader>
//           <DialogDescription>
//             <div className="mt-4 space-y-4">
//               <div>
//                 <h2 className='flex gap-2 items-center text-sm font-semibold mb-2'>
//                   <CalendarDays className='text-primary h-4 w-4'/>
//                   Selecciona Fecha
//                 </h2>
//                 <Calendar
//                   mode="single"
//                   selected={date}
//                   onSelect={setDate}
//                   disabled={isPastDay}
//                   className="rounded-md border shadow-sm"
//                 />
//               </div>

//               <div>
//                 <h2 className='flex gap-2 items-center text-sm font-semibold mb-2'>
//                   <Clock className='text-primary h-4 w-4'/>
//                   Seleccione la hora
//                 </h2>
//                 <div className='grid grid-cols-3 gap-1 max-h-[150px] overflow-y-auto'>
//                   {timeSlot?.map((item, index) => (
//                     <Button
//                       key={index}
//                       variant={item.time === selectedTimeSlot ? 'default' : 'outline'}
//                       onClick={() => setSelectedTimeSlot(item.time)}
//                       className="w-full text-xs py-1 px-2"
//                     >
//                       {item.time}
//                     </Button>
//                   ))}
//                 </div>
//               </div>

//               <Textarea 
//                 placeholder="¿Algún comentario?" 
//                 onChange={(e) => setNote(e.target.value)}
//                 className="w-full text-sm"
//                 rows={3}
//               />
//             </div>
//           </DialogDescription>
//           <DialogFooter className="mt-4 space-y-2">
//             <DialogClose asChild>
//               <Button type="button" variant="outline" className="w-full">
//                 Cerrar
//               </Button>
//             </DialogClose>
//             <Button 
//               type="button" 
//               disabled={!(date && selectedTimeSlot)}
//               onClick={() => saveBooking()}
//               className="w-full"
//             >
//               Agendar
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }

// export default BookAppointment


"use client"
import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Calendar } from "@/components/ui/calendar"
import { CalendarDays, Clock } from 'lucide-react'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { Textarea } from '@/components/ui/textarea'
import GlobalApi from '@/app/_utils/GlobalApi'
import { toast } from 'sonner'

const BookAppointment = ({doctor}) => {
    const [date, setDate] = useState(new Date());
    const [timeSlot, setTimeSlot] = useState([]);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState();
    const [note, setNote] = useState('');
    const {user} = useKindeBrowserClient();

    useEffect(() => {
      if (!doctor || !doctor.id) {
          console.error('Doctor prop is missing or does not have an id', doctor);
      }
      getTime();
    }, [doctor]);

    const getTime = () => {
      const timeList = [];
      for (let i = 10; i <= 18; i++) {
          timeList.push({ time: `${i}:00 ${i < 12 ? 'AM' : 'PM'}` });
          timeList.push({ time: `${i}:30 ${i < 12 ? 'AM' : 'PM'}` });
      }
      setTimeSlot(timeList);
    }

    const saveBooking = () => {
      const formattedDate = date.toISOString().split('T')[0];
      const data = {
        data: {
          Username: user.given_name + " " + user.family_name,
          Email: user.email,
          Time: selectedTimeSlot,
          Date: formattedDate,
          doctor: doctor.data.id,
          Note: note
        }
      };
      
      GlobalApi.bookAppointment(data).then(resp => {
        if(resp) {
          GlobalApi.sendEmail(data).then(resp => {
            console.log(resp);
          });
          toast("Cita agendada, revise su email");
        }
      });
    }

    const isPastDay = (day) => {
        return day <= new Date();
    }

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="w-full rounded-full ">Agendar cita</Button>
      </DialogTrigger>
      <DialogContent className="w-[340px] p-4 max-h-[90vh] overflow-y-auto md:w-[1200px] lg:w-[full]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Agendar Cita</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <div className="mt-4 space-y-4">
            <div>
              <h2 className='flex gap-2 items-center text-sm font-semibold mb-2'>
                <CalendarDays className='text-primary h-4 w-4'/>
                Selecciona Fecha
              </h2>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={isPastDay}
                className="rounded-md border shadow-sm"
              />
            </div>

            <div>
              <h2 className='flex gap-2 items-center text-sm font-semibold mb-2'>
                <Clock className='text-primary h-4 w-4'/>
                Seleccione la hora
              </h2>
              <div className='grid grid-cols-2 gap-1 max-h-[120px] overflow-y-auto'>
                {timeSlot?.map((item, index) => (
                  <Button
                    key={index}
                    variant={item.time === selectedTimeSlot ? 'default' : 'outline'}
                    onClick={() => setSelectedTimeSlot(item.time)}
                    className="w-full text-xs py-1 px-2"
                  >
                    {item.time}
                  </Button>
                ))}
              </div>
            </div>

            <Textarea 
              placeholder="¿Algún comentario?" 
              onChange={(e) => setNote(e.target.value)}
              className="w-full text-sm"
              rows={3}
            />
          </div>
        </DialogDescription>
        <DialogFooter className="mt-4">
          <Button 
            type="button" 
            disabled={!(date && selectedTimeSlot)}
            onClick={() => saveBooking()}
            className="w-full"
          >
            Agendar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default BookAppointment