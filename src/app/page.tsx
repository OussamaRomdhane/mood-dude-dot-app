import Image from "next/image";
import Logo from "@/components/logo/Logo";
import AnimatedMoodDudes from "@/components/animated-mood-dudes/AnimatedMoodDudes";
import Nav from "@/components/nav/Nav";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center justify-center overflow-hidden h-screen mt-6 mb-24 z-10">
      <Logo />
      <Nav />
      <AnimatedMoodDudes />
      <section className="w-12/12 flex flex-wrap items-center justify-center box-border space-x-0">
        <a href="https://play.google.com/store/apps/details?id=com.eiilo.mood.dude.android" target="_blank" className="inline-block">
          <Image
            src="/get-it-google-play.png"
            alt="Get it on Google Play"
            width={270}
            height={80}
            className="hover:opacity-70"
          />
        </a>
      </section>
    </main>
  );
}
