import React from 'react'

const FaqFooter = () => {
  return (
    <footer className="text-cmdark text-center p-4 static bottom-0">
      <p className="text-sm">
        © {new Date().getFullYear()} CyberMinds. All rights reserved.
      </p>
    </footer>
  );
};

export default FaqFooter;