import { Button } from "@/components/client-wrapper";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="text-center mt-40">
      <div>
        <h2 className=" font-bold text-xl">Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href={"/"}>
          <Button className=" bg-maroon mt-8">Return Home</Button>
        </Link>
      </div>
    </section>
  );
}
