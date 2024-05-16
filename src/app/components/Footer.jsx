import React from 'react'

import cmLogo from '@/app/assets/icons/logo-blue.svg'
import Image from 'next/image';

const Footer = () => {
  return (

    <footer className="flex flex-col items-center text-cmdark text-center p-4 static bottom-0 gap-4 py-16">
      <Image
        src={cmLogo}
        alt="CyberMinds Logo Color BLue"
        width={75}
        height={75}
      />
        <p className="text-sm">
          © {new Date().getFullYear()} CyberMinds. All Rights Reserved.
        </p>
      </footer>

  );
};

export default Footer;