import Image from "next/image";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="bg-black">
        <Header/>
            <section className="">
                <div className="flex flex-col justify-center items-center">
                    <div className="h-[560px] w-[900px] bg-image rounded-xl mt-10 mb-10">
                    <Image src="/images/governer-house.jpg" alt="Resume" width={150} height={150} className="flex justify-center items-center mt-20 ml-96 mb-20"/>
                    <h1 className="flex justify-center items-center text-5xl font-semibold text-white">Hello, My Name Is Zohair Khan</h1>
                    <p className="flex justify-center items-center mt-10 text-2xl text-white">I am 17 years old and currently completing my A levels </p>
                    </div>
                </div>
            </section>

            <footer>
            <div className="bg-slate-600 p-9 mt-[93px] text-white">
                <p className="flex flex-col justify-center items-center text-lg">&copy; 2024 My Portfolio</p>
            </div>
        </footer>
    </div>
  );
}