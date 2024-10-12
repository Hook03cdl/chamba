"use client";
import getRole from "@/lib/utils/getRole";
import { useEffect, useState } from "react";

export default function Page() {
  const [role, setRole] = useState("");
  useEffect(() => {
    const fetchRole = async () => {
      const role = await getRole();
      setRole(role);
    };
    fetchRole();
  }, []);
  return <>{role === "1" ? <h1>Trabajador</h1> : <h1>Nose Todavia</h1>}</>;
}
