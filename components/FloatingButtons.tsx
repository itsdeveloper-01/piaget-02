import React from "react";

const FloatingButtons: React.FC = () => {
  const whatsappNumber = "525500000000"; // cámbialo
  const emailAddress = "contacto@tu-escuela.com"; // cámbialo

  return (
    <div className="fixed right-4 bottom-4 flex flex-col gap-3 z-50">
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full shadow-lg px-4 py-2 bg-[#25D366] text-white text-sm font-semibold hover:scale-105 transition-transform"
      >
        WhatsApp
      </a>
      <a
        href={`mailto:${emailAddress}`}
        className="rounded-full shadow-lg px-4 py-2 bg-brandPrimary text-white text-sm font-semibold hover:scale-105 transition-transform"
      >
        Correo
      </a>
    </div>
  );
};

export default FloatingButtons;
