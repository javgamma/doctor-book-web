import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Button } from '@/components/ui/button'
import { TriangleAlert } from 'lucide-react'
  


const CancelAppointment = ({onContinueClick}) => {
  return (
<AlertDialog>
  <AlertDialogTrigger>
    <Button className="text-primary border-primary hover:text-red-600 hover:border-red-600"  variant="outline" >Cancelar cita</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle >¿Seguro quieres cancelar tu cita?</AlertDialogTitle>
      <AlertDialogDescription className="flex justify-center gap-2 text-red-500">
      <TriangleAlert size={18}/> <span className='flex'>Si lo haces, esta acción no se puede revertir</span>
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Mantener cita</AlertDialogCancel>
      <AlertDialogAction onClick={()=>onContinueClick()}>Continuar</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

  )
}

export default CancelAppointment
