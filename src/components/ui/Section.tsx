import { siteConfig } from "@/config/site.config";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  backgroundImageUrl?: string;
  backgroundOverlayOpacity?: number;
  backgroundOverlayColor?: "background" | "foreground" | "primary";
};

export function Section(
  {
    children,
    className = "",
    id,
    backgroundImageUrl,
    backgroundOverlayOpacity,
    backgroundOverlayColor = "background",
  }: Props,
) {
  return (
    <section
      id={id}
      className={`py-12 md:pb-20 ${className}`}
      style={{
        backgroundImage: `url(${siteConfig.basePath}${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {backgroundOverlayOpacity && (
        <div
          className={`absolute inset-0 bg-${backgroundOverlayColor}`}
          style={{ opacity: backgroundOverlayOpacity }}
        />
      )}
      {children}
    </section>
  );
}
