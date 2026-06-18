"use client";

import { useEffect, useState } from "react";
import { runEzoic } from "../libs/ezoic";

export default function EzoicAd({ id }: Readonly<{ id: number }>) {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
    runEzoic(() => window.ezstandalone?.showAds?.(id));

    return () => {
      runEzoic(() => window.ezstandalone?.destroyPlaceholders?.(id));
    };
  }, [id]);

  if (!isRendered) return null;

  return (
    <aside aria-label="Advertisement">
      <div id={`ezoic-pub-ad-placeholder-${id}`} />
    </aside>
  );
}
