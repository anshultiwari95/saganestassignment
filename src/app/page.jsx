import { Footer, Headers } from '../components';
import Hero from '../components/hero/Hero';
import Caring from '../components/sections/Caring';
import Client from '../components/sections/Client';
import CommunityManagement from '../components/sections/CommunityManagement';
import Demo from '../components/sections/Demo';
import Spending from '../components/sections/Spending';
import Customers from '../components/sections/Customers';
import Design from '../components/sections/Design';
import Reinvent from '../components/sections/Reinvent';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Headers/>
      <main>
        <Hero/>
        <Client/>
        <CommunityManagement/>
        <Spending/>
        <Reinvent/>
        <Design/>
        <Customers/>
        <Caring/>
        <Demo/>
      </main>
      <Footer/>
    </div>
  );
}