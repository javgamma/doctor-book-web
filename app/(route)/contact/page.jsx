import React from 'react';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input';  
import { Textarea } from '@/components/ui/textarea'; // Textarea de la librería shadcn
import { Mail, Phone, MapPin } from 'lucide-react'; // Iconos desde Lucide

const ContactPage = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12">
      <h1 className="text-3xl font-bold text-[#0056e2] mb-8">Contáctanos</h1>

      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        {/* Información de contacto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex items-start space-x-4">
            <Mail className="text-[#0056F7]" size={32} />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Correo Electrónico</h3>
              <p className="text-gray-600">contacto@mediconecta.com</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Phone className="text-[#0056F7]" size={32} />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Teléfono</h3>
              <p className="text-gray-600">+34 123 456 789</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <MapPin className="text-[#0056F7]" size={32} />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Ubicación</h3>
              <p className="text-gray-600">Calle Salud, 123, Madrid, España</p>
            </div>
          </div>
        </div>

        {/* Formulario de contacto */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-medium text-gray-700">Nombre</label>
            <Input id="name" placeholder="Tu nombre completo" className="border-gray-300" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-medium text-gray-700">Correo electrónico</label>
            <Input id="email" type="email" placeholder="tuemail@ejemplo.com" className="border-gray-300" />
          </div>
          <div className="flex flex-col md:col-span-2">
            <label htmlFor="message" className="mb-2 font-medium text-gray-700">Mensaje</label>
            <Textarea id="message" placeholder="Escribe tu mensaje aquí" className="border-gray-300" rows={6} />
          </div>
          <div className="md:col-span-2 flex justify-end">
            <Button className="bg-[#0056F7] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Enviar mensaje
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
