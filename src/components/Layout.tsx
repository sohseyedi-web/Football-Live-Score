import Sidebar from "./Sidebar";
import Navbar from './Navbar';


const Layout = () => {
  return (
    <section className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-1 flex h-full">
      <Sidebar />
      <main className="">
        soheil
      </main>
      </main>
    </section>
  );
};

export default Layout;
