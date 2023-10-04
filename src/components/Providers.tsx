import React, { Children, PropsWithChildren, useState } from "react";
import { QueryClient } from "@tanstack/react-query";
import { trpc } from "@/app/_trpc/client";
import { httpBatchLink } from "@trpc/client";
const Providers = ({ children }: PropsWithChildren) => {
  const [QueryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [httpBatchLink({ url: "http://localhost:3000/api/trpc" })],
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={QueryClient}>
      {children}
    </trpc.Provider>
  );
};

export default Providers;
