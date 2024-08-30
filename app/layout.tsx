import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";
import SearchModal from "./components/modals/SearchModal";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "EverStay",
  description: "Marketplace for short- and long-term homestays",
  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/images/EverStayLogoWhite.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/images/EverStayLogoWhite.png",
      },
    ],
  },
};

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Link href="/">
            <Image
              src="/images/EverStayLogoWhite.png"
              alt="Logo"
              width={100}
              height={50}
            />
          </Link>
        </header>
        <ClientOnly>
          <ToasterProvider />
          <SearchModal />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
