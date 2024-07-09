export default function SectionContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={"w-full " + className}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
