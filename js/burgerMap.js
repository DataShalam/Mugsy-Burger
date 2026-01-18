"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const map = L.map("burger-map").setView([41.7169725, 44.7520336], 14);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  const burgerBars = [
    {
      name: "Mugsy Rustaveli",
      coords: [41.7070812, 44.7849185],
      address: "8/2 Petre Melikishvili St",
    },
    {
      name: "Mugsy Teqnikuri",
      coords: [41.7245547, 44.7341693],
      address: "63 Vazha Pshavela Ave",
    },
  ];

  burgerBars.forEach((bar) => {
    L.marker(bar.coords)
      .addTo(map)
      .bindPopup(`<strong>${bar.name}</strong><br>${bar.address}`);
  });
});
