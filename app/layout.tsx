import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ekkOS Documentation',
  description: 'Complete documentation for ekkOS - AI Memory That Actually Learns',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-[#050508] text-white antialiased">
        {/* Beta Banner */}
        <div className="bg-gradient-to-r from-amber-600/90 to-orange-600/90 text-white text-center py-2 px-4 text-sm font-medium">
          <span className="inline-flex items-center gap-2">
            <span className="bg-white/20 px-2 py-0.5 rounded text-xs font-bold">BETA</span>
            ekkOS is currently in beta. Please report all bugs to{' '}
            <a href="mailto:support@ekkos.dev" className="underline hover:no-underline font-semibold">
              support@ekkos.dev
            </a>
          </span>
        </div>
        {children}
      </body>
    </html>
  );
}


