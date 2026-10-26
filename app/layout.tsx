import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Credit Cards Sahi Hai — Smart Spending, Maximum Rewards',
  description:
    'Simple, day- and spend-specific credit card usage tips across American Express, Axis Bank, and HDFC Bank. Zero jargon, no points math required.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        {/* Suppress third-party Chrome extension errors from triggering the Next.js dev overlay */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function shouldIgnore(eventOrError) {
                  var filename = (eventOrError && eventOrError.filename) || '';
                  var stack = (eventOrError && eventOrError.error && eventOrError.error.stack) || (eventOrError && eventOrError.reason && eventOrError.reason.stack) || '';
                  return filename.indexOf('chrome-extension:') !== -1 ||
                         filename.indexOf('embed_script.js') !== -1 ||
                         stack.indexOf('chrome-extension:') !== -1 ||
                         stack.indexOf('embed_script.js') !== -1;
                }
                window.addEventListener('error', function(e) {
                  if (shouldIgnore(e)) {
                    e.stopImmediatePropagation();
                  }
                }, true);
                window.addEventListener('unhandledrejection', function(e) {
                  if (shouldIgnore(e)) {
                    e.stopImmediatePropagation();
                  }
                }, true);
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900 antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        {/* Hidden anchor root to satisfy browser extensions expecting standard React mount containers */}
        <div id="root" style={{ display: 'none' }} aria-hidden="true" />
      </body>
    </html>
  );
}
