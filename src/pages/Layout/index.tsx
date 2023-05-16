import { ReactNode } from 'react';
import Header from '../../components/Header';
import './index.scss'
import Footer from '../../components/Footer';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <main>
        { children }
      </main>
      <Footer WebPageName={'Mohd Wajid Portfolio'}/>
    </div>

  );
}