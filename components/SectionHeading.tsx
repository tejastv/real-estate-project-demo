type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({ eyebrow, title, description, align = "left", light = false }: SectionHeadingProps) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl`}>
      <p className={`eyebrow ${light ? "text-champagne" : ""}`}>{eyebrow}</p>
      <h2 className={`mt-5 ${light ? "text-white" : ""}`}>{title}</h2>
      {description && <p className={`lead mt-7 ${light ? "lead--light" : ""}`}>{description}</p>}
    </div>
  );
}
