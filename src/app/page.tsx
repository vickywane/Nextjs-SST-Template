import Header from "./components/header";
import Banner from "./components/banner";
import Footer from "./components/footer";
 
export default function Home() {
  return (
    <main>
      <div className={"flex flex-col justify-between h-[100vh]"}>
        <Header />
        <Banner />
        <Footer />
      </div>
    </main>
  );
}