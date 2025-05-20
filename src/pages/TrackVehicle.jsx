import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import CountUp from "react-countup";

const COLORS = ["#1d4ed8", "#10b981", "#f59e0b", "#ef4444"];

const sampleData = {
  "Nissan Patrol": [
    { month: "Jan", price: 16000 },
    { month: "Feb", price: 16400 },
    { month: "Mar", price: 16700 },
    { month: "Apr", price: 16800 },
    { month: "May", price: 17000 },
    { month: "Jun", price: 17500 },
  ],
};

const barData = [
  { month: "Jan", sales: 8 },
  { month: "Feb", sales: 14 },
  { month: "Mar", sales: 11 },
  { month: "Apr", sales: 16 },
  { month: "May", sales: 13 },
  { month: "Jun", sales: 19 },
];

const pieData = [
  { name: "Good", value: 15 },
  { name: "Fair", value: 10 },
  { name: "Salvage", value: 6 },
  { name: "Damaged", value: 4 },
];

const areaData = [
  { month: "Jan", profit: 1200 },
  { month: "Feb", profit: 1400 },
  { month: "Mar", profit: 1100 },
  { month: "Apr", profit: 1600 },
  { month: "May", profit: 1900 },
  { month: "Jun", profit: 2100 },
];

const mapLocation = {
  lat: 32.7767,
  lng: -96.797,
};

const TrackVehicle = () => {
  const [selectedVehicle, setSelectedVehicle] = useState("Nissan Patrol");

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <h2 className="text-3xl font-bold">Vehicle Analysis & Tracking</h2>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Line Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4">
            Price Trend - {selectedVehicle}
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={sampleData[selectedVehicle]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#1d4ed8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4">Monthly Sales Volume</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4">
            Vehicle Condition Distribution
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name} (${(percent * 100).toFixed(0)}%)`
                }
                outerRadius={80}
                dataKey="value">
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Area Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4">
            Estimated Profit Over Time
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={areaData}>
              <defs>
                <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1d4ed8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#1d4ed8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="profit"
                stroke="#1d4ed8"
                fillOpacity={1}
                fill="url(#colorProfit)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4">Vehicle Location Map</h3>
        <MapContainer
          center={mapLocation}
          zoom={6}
          scrollWheelZoom={false}
          className="w-full h-[400px] rounded-lg">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={mapLocation}>
            <Popup>{selectedVehicle} - Last Known Location</Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Vehicle Management Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h4 className="text-lg font-semibold mb-2">Total Listings</h4>
          <p className="text-2xl font-bold text-blue-700">
            <CountUp duration={6} end={820}></CountUp>
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h4 className="text-lg font-semibold mb-2">Approved</h4>
          <p className="text-2xl font-bold text-blue-700">
            <CountUp duration={6} end={786}></CountUp>
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h4 className="text-lg font-semibold mb-2">Avg. Bid</h4>
          <p className="text-2xl font-bold text-blue-500">
            $<CountUp duration={6} end={(14, 350)}></CountUp>
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h4 className="text-lg font-semibold mb-2">Est. Profit</h4>
          <p className="text-2xl font-bold text-blue-600">
            $<CountUp duration={7} end={48900}></CountUp>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrackVehicle;
