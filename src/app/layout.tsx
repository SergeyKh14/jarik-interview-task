import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test task",
  description: "Test task",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
