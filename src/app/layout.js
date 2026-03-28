import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Just Eat Takeaway - Restaurant Search",
  description:
    "A web application that displays restaurant listings based on postcode input, showcasing Just Eat Takeaway's restaurant data",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
