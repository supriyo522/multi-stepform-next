import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Multi-Step Form with Real-Time",
  description: "Multi-Step Form with Real-Time Collaboration(Frontend Only)",
};

import DarkModeToggle from '../components/DarkModeToggle';

const Layout = ({ children }) => (
  <html lang="en" className="dark">
    <body className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <header className="p-4 bg-gray-200 dark:bg-gray-800">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">Multi-Step Form</h1>
        <DarkModeToggle />
      </header>
      <main className="flex-grow p-4">{children}</main>
      <footer className="p-4 bg-gray-200 dark:bg-gray-800 text-center text-gray-900 dark:text-gray-100">
        Feel free to reach out at ZenStreet.ai
      </footer>
    </body>
  </html>
);

export default Layout;
