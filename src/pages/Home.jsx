import React from "react";
import DessertCard from "../components/DessertCard";

const desserts = [
  {
    name: "隕石奶酪",
    description: "濃郁香滑，入口即化的太空奶酪",
    image: "https://source.unsplash.com/400x300/?panna-cotta,dessert",
  },
  {
    name: "星塵泡芙",
    description: "外酥內軟，包裹著閃爍銀河餡料",
    image: "https://source.unsplash.com/400x300/?cream-puff,dessert",
  },
  {
    name: "巴斯克蛋糕",
    description: "手工製作，用心甜點",
    image: "/images/unnamed.jpg",
  },
];

export default function Home() {
  return (
    <main className="p-6 flex flex-wrap gap-6 justify-center">
      {desserts.map((item, i) => (
        <DessertCard key={i} {...item} />
      ))}
    </main>
  );
}
