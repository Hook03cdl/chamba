'use server'
import { JobProps } from "../interfaces/interface";

export async function fetchDataJobs(): Promise<JobProps[] | undefined> {
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
