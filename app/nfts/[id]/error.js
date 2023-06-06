"use client";

import { useCallback } from "react";

export default function Error({ error, reset }) {

  useCallback(() => {
    console.log(error);
  }, [error]);

  return <div>{error.message}</div>;
}
