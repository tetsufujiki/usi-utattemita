"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

function getRecDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `REC_${year}.${month}.${day}`;
}

export function RecDate() {
  const recDate = useSyncExternalStore(subscribe, getRecDate, () => "REC_----.--.--");

  return <span className="font-mono text-xs font-bold">{recDate}</span>;
}
