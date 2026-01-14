import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // ambil tahun sekarang

  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>Rayhan MA</span>
        <p className="text-slate-600">© {currentYear} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
