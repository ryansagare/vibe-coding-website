import { Inter } from "next/font/google";
import "../styles/globals.css";
import CookieBanner from "../components/CookieBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vibe Coding | AI-Powered Development",
  description:
    "Discover vibe coding: a flow-state approach to software development that combines human intuition with AI tools like ChatGPT, Claude, and GitHub.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
          {/* Main content */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer className="border-t border-slate-800 px-6 py-6 text-sm text-slate-400">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
              <p className="font-semibold text-slate-200">
                Vibe Coding · AI-assisted software development
              </p>
              <div className="flex gap-4">
                <a href="/" className="hover:text-slate-100">
                  Home
                </a>
                <a href="/workflow" className="hover:text-slate-100">
                  Workflow
                </a>
                <a href="/tools" className="hover:text-slate-100">
                  Tools
                </a>
                <a href="/privacy" className="hover:text-slate-100">
                  Privacy
                </a>
              </div>
            </div>
          </footer>

          {/* Cookie banner lives at the very bottom */}
          <CookieBanner />
        </div>

        {/* Tiny script to prevent dark-mode flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
