import "@/app/globals.css";

export const metadata = {
  title: "To_Do App",
  description: "Created by me @kr812345",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
