import { Silkscreen } from "next/font/google";

const silkscreen = Silkscreen({ weight: "400", subsets: ["latin"] });

export default function Logo() {
  return (
    <h1
      className={`${silkscreen.className} text-9xl text-emerald-700 shadow-emerald-600 dark:text-gray-500 dark:shadow-gray-900 w-full flex justify-center items-center`}
    >
      Mood Dude
    </h1>
  );
}
