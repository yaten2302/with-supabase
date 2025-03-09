"use client";

import { createClient } from "@/utils/supabase/server";

export default function Home() {
  const handleSubmit = async () => {
    const supabase = await createClient();
    const { data, error } = await supabase.from("users").select("*");
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  };

  return (
    <>
      <h1>Supabase</h1>
      <button onClick={handleSubmit}>Fetch data</button>
    </>
  );
}
