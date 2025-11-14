import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site web",
};

export default function MentionsLegalesPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-12">
      {children}
    </div>
  );
}
