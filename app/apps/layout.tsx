import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecosystem Apps",
  description:
    "Apps built on Tribe Protocol — tribeapp.wtf (web), Tribe (iOS), tribe-ios (Twitter-shaped), Android coming soon, tribe-insta, and the tribe-app demo.",
};

export default function AppsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
