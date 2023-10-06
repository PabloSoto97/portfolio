import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-b-transparent border-l-transparent border-r-transparent text-white">
      <div className="container p-12  flex justify-between">
        <div>
          <Image
            src="/images/icon8.png"
            alt="icon image"
            className="w-full h-full object-cover"
            width={40}
            height={40}
          ></Image>
        </div>
        <p className="text-slate-600">Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
