import SectionContainer from "@/containers/SectionContainer";
import cover from "public/images/about-cover.jpg";
import Image from "next/image";
import Link from "next/link";

const data: { name: string; url: string; imageSrc: string }[] = [
  {
    name: "John Doe",
    url: "#",
    imageSrc: "/images/placeholder.jpg",
  },
  {
    name: "Jane Doe",
    url: "#",
    imageSrc: "/images/placeholder.jpg",
  },
  {
    name: "Juan Dela Cruz",
    url: "#",
    imageSrc: "/images/placeholder.jpg",
  },
  {
    name: "Maria Clara",
    url: "#",
    imageSrc: "/images/placeholder.jpg",
  },
  {
    name: "Pedro Penduko",
    url: "#",
    imageSrc: "/images/placeholder.jpg",
  },
  {
    name: "Juan Tamad",
    url: "#",
    imageSrc: "/images/placeholder.jpg",
  },
  {
    name: "Maria Makiling",
    url: "#",
    imageSrc: "/images/placeholder.jpg",
  },
];

export default function Page() {
  return (
    <main>
      <SectionContainer>
        <h1 className="text-4xl font-bold text-center">About</h1>

        <section className="my-6">
          <Image
            src={cover}
            height={400}
            width={1600}
            alt=""
            className="rounded-xl"
          />
        </section>

        <section className="mt-12">
          <h2 className="font-semibold text-2xl mb-4">
            What is GDSC USeP Obrero?
          </h2>
          <p>
            <span className="font-bold">
              Google Developer Student Clubs USeP Obrero
            </span>{" "}
            is an accredited student-run organization whose members are driven
            to learn Google developer technologies, improve skills in a
            peer-to-peer learning environment and foster a community of
            like-minded individuals who are passionate in technology,
            innovation, and growth.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-semibold text-2xl mb-4">What do we do?</h2>
          <ul className="list-disc px-8">
            <li>
              Cultivate and support the tech community at the University of
              Southeastern Philippines Obrero Campus
            </li>
            <li>Workshops</li>
            <li>Tech Talks</li>
            <li>Collaborative Projects</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-semibold text-xl mb-4">
            Website Development Team
          </h2>
          <p>
            Our sincere thanks to the following individuals for contributing to
            this website:
          </p>

          <div className="flex gap-4">
            {data.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 mt-4"
              >
                <Link
                  href={member.url}
                  rel="
                    noopener noreferrer"
                  target="_blank
                  "
                >
                  <Image
                    src={member.imageSrc}
                    alt=""
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                </Link>
                <div>
                  <Link
                    href={member.url}
                    rel="
                    noopener noreferrer"
                    target="_blank
                  "
                  >
                    <h3 className="font-bold hover:underline">{member.name}</h3>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </SectionContainer>
    </main>
  );
}
