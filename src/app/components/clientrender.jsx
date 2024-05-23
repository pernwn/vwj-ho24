'use client'

import React, { useState, useEffect } from "react";
import Loading from "../(overview)/loading";

const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};


const ClientRender = ({ children }) => {
  const isClient = useIsClient();

  if (!isClient) {
    return <Loading/>
  }

  return <>{children}</>;
};

export default ClientRender;
