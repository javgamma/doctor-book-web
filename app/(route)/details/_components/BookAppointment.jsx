"use client"
import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogClose,
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
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      if (!doctor || !doctor.id) {
          console.error('Doctor prop is missing or does not have an id', doctor);
      }
      getTime();
    }, [doctor]);

    const getTime = () => {
      const timeList = [];
      for (let i = 9; i <= 18; i++) {
          timeList.push({ time: `${i}:00 ${i < 12 ? 'AM' : 'PM'}` });
          timeList.push({ time: `${i}:30 ${i < 12 ? 'AM' : 'PM'}` });
      }
      setTimeSlot(timeList);
    }

    const saveBooking = () => {
      const formattedDate = date.toISOString().split('T')[0];
      const data = {
        data: {
          Username: user?.given_name + " " + user?.family_name,
          Email: user?.email,
          Time: selectedTimeSlot,
          Date: formattedDate,
          doctor: doctor.data.id,
          Note: note
        }
      };
      
      GlobalApi.bookAppointment(data).then(resp => {
        if(resp) {
          GlobalApi.sendEmail(data).then(resp => {

          });
          toast("Cita agendada, revise su email");
        }
      });
    }

    const isPastDay = (day) => {
        return day <= new Date();
    }

  return (
    <div>
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <Button 
        onClick={() => setIsOpen(true)}
        className="w-full rounded-full border-2 border-primary hover:text-white hover:bg-primary mt-2"
        variant="outline">
          Agendar cita
          </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w[350px] max-h-[90vh]  overflow-y-auto  md:w-[1200px] lg:w-[full] mx-auto overflow-x-hidden  ">
        <DialogHeader>
          <DialogTitle className="text-xl text-center text-secondary font-bold mt-5">Agendar Cita</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <div className="mt-4 space-y-4  ">
            <div className='flex flex-col w-[330px] '>
              <h2 className='flex gap-2 items-center text-sm font-semibold mb-2'>
                <CalendarDays className='text-primary h-4 w-4'/>
                Selecciona Fecha
              </h2>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={isPastDay}
                className="rounded-md border shadow-sm flex justify-center w-[300px]"
              />
            </div>

            <div>
              <h2 className='flex gap-2 items-center text-sm font-semibold mb-2'>
                <Clock className='text-primary h-4 w-4'/>
                Seleccione la hora
              </h2>
              <div className='grid grid-cols-2 gap-1 max-h-[220px] w-[300px] md:grid-cols-4 overflow-y-auto'>
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
              placeholder="Escriba aquí el motivo de la consulta..." 
              onChange={(e) => setNote(e.target.value)}
              className="w-[300px] text-sm"
              rows={3}
            />
          </div>
        </DialogDescription>
        <DialogFooter className="mt-4 mr-20">
          <Button 
            type="button" 
            disabled={!(date && selectedTimeSlot)}
            onClick={() => {
              saveBooking();
              setIsOpen(false)}
            }
          >
            Agendar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </div>
    
  );
}

export default BookAppointment
