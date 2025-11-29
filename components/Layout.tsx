import React from "react";
import Head from "next/head";
import FloatingButtons from "./FloatingButtons";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Escuela Montessori</title>
        <meta
          name="description"
          content="Portal web de una escuela Montessori"
        />
      </Head>
      <div className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="font-bold text-lg text-brandPrimary">
              Escuela Montessori
            </div>
            <nav className="flex gap-4 text-sm font-medium text-slate-700">
              <a href="#quienes-somos" className="hover:text-brandPrimary">
                Quiénes somos
              </a>
              <a href="#niveles" className="hover:text-brandPrimary">
                Niveles educativos
              </a>
              <a href="#galeria" className="hover:text-brandPrimary">
                Galería
              </a>
              <a href="#contacto" className="hover:text-brandPrimary">
                Contacto
              </a>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>© {new Date().getFullYear()} Escuela Montessori</span>
            <span>Desplegado en Netlify</span>
          </div>
        </footer>

        <FloatingButtons />
      </div>
    </>
  );
};

export default Layout;
