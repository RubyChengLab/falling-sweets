import React from "react";

export default function DessertCard({ name, description, image }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-xs">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}
