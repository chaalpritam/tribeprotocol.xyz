import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecosystem Apps",
  description:
    "Apps built on Tribe Protocol — tribeapp.wtf (web), Tribe for iOS and Android, tribe-insta (Instagram-shaped), and the tribe-app developer demo.",
};

export default function AppsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
