import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Page = async () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  //   получаю из  redirect("/auth-callback?origin=dashboard") => dashboard
  const origin = searchParams.get("origin");
  const apiResponce = await fetch("api/whatever");
  const data = apiResponce.json();
  return <div></div>;
};

export default Page;
