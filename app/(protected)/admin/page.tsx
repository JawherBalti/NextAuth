"use client"

import { useState } from "react";

const AdminPage = () => {
  const [response, setResponse] = useState("");
  
  const adminOnlyApi = () => {
    fetch("/api/admin").then((data) => {
      if (data.ok) setResponse("OK");
      else setResponse("ERROR");
    });
  };
  return (
    <div>
      Admin
      <button onClick={adminOnlyApi}>Test</button>
      <h6>{response}</h6>
    </div>
  );
};

export default AdminPage;
