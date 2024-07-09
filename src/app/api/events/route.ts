import { NextResponse } from "next/server";
import * as cheerio from "cheerio";
import ScrapedEventType from "@/types/scrapedEventType";

export async function GET() {
  try {
    const res = await fetch(
      "https://gdsc.community.dev/university-of-southeastern-philippines-davao-philippines/"
    );
    const data = await res.text();

    const $ = cheerio.load(data);

    const events: ScrapedEventType[] = [];

    // Select the parent element with the specific id
    const parent = $("#mu9W6Ekd-k3");

    // Loop through the direct children of the parent element
    parent.children().each((i, el) => {
      const event = $(el);
      const url =
        event.find("a").attr("href") ||
        "https://gdsc.community.dev/university-of-southeastern-philippines-davao-philippines/";
      const imageUrl = event.find("img").attr("src") || "#";
      const details = event.find(".dynamic-text");

      const date = details.eq(0).text().trim() || "";
      const type = details.eq(1).text().trim() || "";
      const name = details.eq(2).text().trim() || "";
      const location = details.eq(3).text().trim() || "";

      // Push the event only if it has a name and type to avoid duplicates

      events.push({
        name,
        type,
        location,
        url,
        date,
        imageUrl,
      });
    });

    // Assign the correct imageUrl to the correct event
    if (events.length >= 8) {
      events[1].imageUrl = events[0].imageUrl;
      events[3].imageUrl = events[2].imageUrl;
      events[5].imageUrl = events[4].imageUrl;
      events[7].imageUrl = events[6].imageUrl;

      // Remove the placeholders at indices 0, 2, 4, 6
      const filteredEvents = events.filter((_, index) => index % 2 !== 0);

      return NextResponse.json({ status: 200, events: filteredEvents });
    } else {
      return NextResponse.json({ status: 200, events: events });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      error: "Error occurred while scraping",
    });
  }
}
