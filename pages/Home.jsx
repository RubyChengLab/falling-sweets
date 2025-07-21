import React from "react";
import DessertCard from "../components/DessertCard";

const desserts = [
  {
    name: "隕石奶酪",
    description: "濃郁香滑，入口即化的太空奶酪",
    image: "/images/your-image.jpg", // 要改成有上傳的圖片路徑
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
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">隕落甜點所</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {desserts.map((item, index) => (
          <DessertCard key={index} dessert={item} />
        ))}
      </div>
    </div>
  );
}
