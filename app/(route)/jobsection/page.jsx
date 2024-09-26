import React from 'react';
import { Button } from '@/components/ui/button'; 
import Image from 'next/image';

const WorkWithUs = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Texto descriptivo */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Únete a nuestro equipo</h1>
          <p className="text-gray-700 text-lg mb-6">
            En Mediconecta estamos buscando profesionales apasionados por la salud y el bienestar de las personas.

            Si quieres formar parte de un equipo comprometido y en crecimiento, ¡esta es tu oportunidad!
          </p>
          <Button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Enviar CV
          </Button>
        </div>

        {/* Imagen */}
        <div className="flex justify-center items-center">
          <Image
            src="https://st.depositphotos.com/1011643/1490/i/450/depositphotos_14901429-stock-photo-group-of-medical-workers-working.jpg" 
            alt="Doctor"
            width={500}
            height={500}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
