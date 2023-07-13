import SideBar from '@/components/SideBar';
import { ReactNode } from 'react';

export default function HomePageLayout(props: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col pl-72">
      <SideBar />
      {props.children}
    </main>
  );
}
