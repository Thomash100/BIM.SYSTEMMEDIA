import { type ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';
import TechBackground from './TechBackground';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen overflow-hidden bg-ink text-slate-100">
      <TechBackground />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
