import Image from "next/image";
import Homepage from "./Homepage";
import Navbar from "./Navbar";

export default function Home() {
  const stats = [
    { stat: "Feeding 2000 people a day", image: "", index: 1 },
    { stat: "Feeding 2000 people a day", image: "", index: 2 },
    { stat: "Feeding 2000 people a day", image: "", index: 3 },
    { stat: "Feeding 2000 people a day", image: "", index: 4 },
    { stat: "Feeding 2000 people a day", image: "", index: 5 },
    { stat: "Feeding 2000 people a day", image: "", index: 6 },
  ];

  return (
    <div>
      <div className="flex w-full h-screen flex-col">
        <Navbar />
        <Homepage />
      </div>
      <div className="flex justify-center w-full h-screen bg-slate-200 p-20">
        <div className="flex relative w-full h-full">
          <Image src="/map.png" alt="map" fill={true} className="rounded-md" />
        </div>
      </div>
      <div className="flex flex-col p-12 gap-8 bg-gray-300 text-black">
        <div className="flex flex-col gap-4">
          <div className="font-bold text-5xl">Stats</div>
          <div className="font-thin text-3xl">Subheading</div>
        </div>
        <div className="flex flex-grow p-8 flex-wrap gap-1 justify-between">
          {stats.map((item) => (
            <div
              key={item.index}
              className="flex flex-col bg-white basis-1/4 p-2 my-2 rounded-sm"
            >
              <div className="flex">
                <div className="">
                  <q>{item.stat}</q>
                </div>
              </div>
              <Image
                src="/map.png"
                alt=""
                width={300}
                height={300}
                className="rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
