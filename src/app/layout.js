import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "jsalsa.com",
  description: "HANG TIGHT WITH THAT CHIP...jSALSA IS COMING SOON....",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <GoogleTagManager gtmId='GTM-K8BJWSMQ' />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
