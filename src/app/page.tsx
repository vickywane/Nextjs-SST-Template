import Header from './components/header'
import Banner from "@/app/components/banner";
import Footer from "@/app/components/footer";

export default function Home() {
    return (
        <main>
            <div className={"flex flex-col justify-between h-[100vh]"} >
                <Header/>
                <Banner/>
                <Footer/>
            </div>
        </main>
    )
}