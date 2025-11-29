
import React from "react";
import Head from "next/head";
import FloatingButtons from "./FloatingButtons";

export default function Layout({ children }) {
  return (
    <>
      <Head><title>Escuela Montessori</title></Head>
      <main>{children}</main>
      <FloatingButtons />
    </>
  );
}
