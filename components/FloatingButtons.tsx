
import React from "react";

const FloatingButtons: React.FC = () => {
  return (
    <div className="fixed right-4 bottom-4 flex flex-col gap-3 z-50">
      <a href="https://wa.me/525500000000" target="_blank" rel="noopener" className="rounded-full shadow-lg px-4 py-2 bg-[#25D366] text-white">WhatsApp</a>
      <a href="mailto:contacto@tu-escuela.com" className="rounded-full shadow-lg px-4 py-2 bg-brandPrimary text-white">Correo</a>
    </div>
  );
};
export default FloatingButtons;
