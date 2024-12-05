"use client";

import { useEffect } from "react";
import Image from "next/image";
import { dudesDataArray } from "@/data/dudes";

const refsMap = new Map<string, HTMLDivElement | null>();

const getRandomInRange = (min: number, max: number) =>
  (Math.random() * (max - min) + min).toFixed(2);

export default function AnimatedMoodDudes() {
  useEffect(() => {
    let i = 0;
    refsMap.forEach((value) => {
      i++;
      const position =
        i * Math.floor((window.innerWidth + 1000) / refsMap.size);
      if (value != null) {
        value.style.right = `${-50 + position}px`;
        value.style.animationDuration = `${getRandomInRange(10, 40)}s`;
        value.style.animationDelay = `${getRandomInRange(0, 10)}s`;
      }
    });
  }, [refsMap.size]);

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <>
      {dudesDataArray.map(({ id, imageKey }) => (
        <div
          key={id}
          className="moodDude"
          ref={(ref) => {
            refsMap.set(id, ref);
          }}
        >
          <Image
            src={`/${imageKey}.png`}
            alt="Mood Dude"
            width={40}
            height={56}
          />
        </div>
      ))}
    </>
  );
}
