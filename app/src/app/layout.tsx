

import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

export default function RootLayout({ children, json }: { children: React.ReactNode, json: any }) {
  return (
    <html lang="en">
      <body>
        <Header json={json}/>
        {children}
        <Footer json={json}/>
      </body>
    </html>
  );
}
