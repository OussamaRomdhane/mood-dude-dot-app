import { Silkscreen } from "next/font/google";
import Link from "next/link";

const silkscreen = Silkscreen({ weight: "400", subsets: ["latin"] });

export default function Logo() {
  return (
    <Link
      href="/"
      className={`${silkscreen.className} text-8xl text-emerald-700 shadow-emerald-600 w-full flex justify-center items-center md:text-9xl`}
    >
      <h1>Mood Dude</h1>
    </Link>
  );
}
