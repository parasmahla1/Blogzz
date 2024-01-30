import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BlogZZ",
  description:
    "Explore the world of insightful and engaging blogs on our platform. From lifestyle and technology to travel and wellness, our diverse collection of articles caters to every interest. Immerse yourself in captivating content, expert opinions, and thought-provoking stories. Discover a new perspective with each click. Welcome to a hub of knowledge and inspiration!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
