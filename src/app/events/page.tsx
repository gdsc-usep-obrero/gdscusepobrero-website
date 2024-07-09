import { Button } from "@/components/client-wrapper";
import SectionContainer from "@/containers/SectionContainer";
import Link from "next/link";
import ScrapedEventType from "../../types/scrapedEventType";
import Image from "next/image";
import { NextResponse } from "next/server";
import Gallery from "@/components/gallery";

export default async function Page() {
  const res = await fetch(`${process.env.APP_URL}/api/events`);

  const recentEventScrapedContent:
    | { status: number; events: ScrapedEventType[] }
    | undefined = await res.json();

  const linkToBevy =
    "https://gdsc.community.dev/university-of-southeastern-philippines-davao-philippines/";

  return (
    <main>
      <SectionContainer className="px-2">
        <section className="text-center">
          <h1 className="text-4xl font-bold">Events</h1>
          <Link
            href={linkToBevy}
            target="_blank"
            rel="noopener noreferrer"
            className=" text-blue"
          >
            Join us on Bevy!
          </Link>
        </section>

        <section className="py-16">
          <h2 className="text-2xl mb-8 font-semibold">Recent Events</h2>
          {!recentEventScrapedContent && <p>Failed to fetch data.</p>}
          {recentEventScrapedContent && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {recentEventScrapedContent.events.map((event, index) => (
                <div
                  key={index}
                  className="text-center flex flex-col justify-start items-center gap-6"
                >
                  <Link
                    href={event.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      priority
                      src={event.imageUrl}
                      alt={event.name}
                      width={200}
                      height={200}
                      className="rounded-full"
                    />
                  </Link>
                  <div className="text-center">
                    <Link
                      href={event.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h3 className="text-lg font-bold hover:underline">
                        {event.name}
                      </h3>
                    </Link>

                    <p className="text-sm">{event.location}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link href={linkToBevy} target="_blank" rel="noopener noreferrer">
              <Button className="bg-maroon px-12 text-md">
                View More on Bevy!
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-16">
          <h2 className="text-2xl mb-8 font-semibold">Event Highlights</h2>
          <Gallery />
        </section>
      </SectionContainer>
    </main>
  );
}
