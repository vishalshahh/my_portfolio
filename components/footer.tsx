import React from 'react'

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Vishal Shah. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> &nbsp;  
        {/* built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting. */}
        Frontend: React, Next.js, Tailwind CSS, Framer Motion. |
        Backend: TypeScript. |
        Contact form: React Email & Resend. |
        Hosting: Vercel
      </p>
    </footer>
  );
}
