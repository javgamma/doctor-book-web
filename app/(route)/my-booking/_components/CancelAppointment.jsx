import React from "react";
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
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { TriangleAlert } from "lucide-react";

const CancelAppointment = ({ onContinueClick }) => {


  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button variant="cancel">Cancelar cita</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="flex flex-col items-center">
        <AlertDialogHeader >
          <AlertDialogTitle className="flex text-lg">¿Seguro quieres cancelar tu cita?</AlertDialogTitle>
          <AlertDialogDescription className="flex justify-center gap-2 text-red-500">
            <TriangleAlert size={18} />{" "}
            <span className="flex text-lg">
              Si lo haces, esta acción no se puede revertir
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-primary text-white"
          >Mantener cita</AlertDialogCancel>
          <AlertDialogAction onClick={() => onContinueClick()} className="bg-red-500">
            Cancelar cita
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CancelAppointment;
