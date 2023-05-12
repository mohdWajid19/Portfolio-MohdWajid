import { ReactNode } from 'react';
import Header from '../../components/Header';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <main>hi</main>
      { children }
    </div>
  );
}