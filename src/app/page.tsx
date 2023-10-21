import Image from "next/image";
import gdsc from "public/images/gdsc.png";

export default function Home() {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <div>
        <Image
          className="mx-auto mb-4"
          src={gdsc}
          alt="GDSC Icon"
          width={200}
          placeholder="blur"
        />
        <h1 className=" text-4xl">Arriving Soon!</h1>
      </div>
    </main>
  );
}
