import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from 'next/font/google'
import {
  ClerkProvider,
  
} from '@clerk/nextjs'
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "sonner";

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Slide',
  description: 'Automate DMs and comments on instagram',
  icons: {
    icon: "/svgviewer-png-output.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body
          suppressHydrationWarning
          className={jakarta.className}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
          {children}
        <Toaster />
          
        </ThemeProvider>

          </body>
      </html>
    </ClerkProvider>
    
  );
}
