import { cookies } from "next/headers";
import { Fetch } from "../Fetch";
import { JobProps } from "../interfaces/interface";

export async function fetchDataJobs(): Promise<JobProps[] | undefined> {
  const cookie = cookies();
  const session = cookie.get("session");

  try {
    const jobs = await fetch("http://localhost:8000/api/jobs", {
        method: "GET",
    });
    const data = await jobs.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}
