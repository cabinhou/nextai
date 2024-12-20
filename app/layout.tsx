import "./globals.css";
import {Inter, ABeeZee,Abhaya_Libre} from "next/font/google"

const inter = Inter({subsets:["latin"]});
//const inter = ABeeZee({subsets:["latin"], weight: '400'});
//const inter = Abhaya_Libre({subsets:["latin"], weight: '400'});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
