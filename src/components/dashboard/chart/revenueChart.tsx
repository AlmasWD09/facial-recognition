"use client";
import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const RevenueChart = () => {
  const [selectValue, setSelctValue] = useState("");
  const [timeframe, setTimeframe] = useState("weekly");

  const handleSelect = (value: string) => {
    setSelctValue(value);
  };

  const weeklyData = [
    { day: "Mon", value: 2000 },
    { day: "Tue", value: 3500 },
    { day: "Wed", value: 2500 },
    { day: "Thu", value: 4500 },
    { day: "Fri", value: 3800 },
    { day: "Sat", value: 4800 },
    { day: "Sun", value: 2500 },
  ];

  const monthlyData = [
    { day: "Week 1", value: 15000 },
    { day: "Week 2", value: 22000 },
    { day: "Week 3", value: 18000 },
    { day: "Week 4", value: 25000 },
  ];

  const data = timeframe === "weekly" ? weeklyData : monthlyData;

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const value = payload[0].value;
      const prevValue = 3224;
      const change = (((value - prevValue) / prevValue) * 100).toFixed(1);

      return (
        <div className="bg-white px-3 py-2 rounded-lg shadow-lg border border-gray-200">
          <p className="text-sm font-semibold text-gray-900">+{change}%</p>
          <p className="text-xs text-gray-500">${value.toLocaleString()}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="border rounded-figma-sm p-6 ">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <div>
          <p className="text-sm text-gray-500">Static analysis</p>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Revenues
          </h2>
        </div>

        {/* Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setTimeframe("weekly")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              timeframe === "weekly" ? "TextGradient" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                timeframe === "weekly" ? "border-red-400" : "border-gray-400"
              }`}
            >
              {timeframe === "weekly" && (
                <div className="w-2 h-2 gradientColor rounded-full" />
              )}
            </div>
            Weekly
          </button>
          <button
            onClick={() => setTimeframe("monthly")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              timeframe === "monthly" ? "TextGradient" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                timeframe === "monthly" ? "border-red-400" : "border-gray-400"
              }`}
            >
              {timeframe === "monthly" && (
                <div className="w-2 h-2 gradientColor rounded-full" />
              )}
            </div>
            Monthly
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-72 sm:h-84">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1EE9B6" stopOpacity={0.4} />
                <stop offset="50%" stopColor="#93c5fd" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#D96FF8" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#f0f0f0"
              vertical={false}
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
              tickFormatter={(value) => `$${value / 1000}k`}
              dx={-10}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: "#d1d5db", strokeWidth: 1 }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#93c5fd"
              strokeWidth={2}
              fill="url(#colorValue)"
              activeDot={{
                r: 6,
                fill: "#3b82f6",
                stroke: "#fff",
                strokeWidth: 2,
                style: { outline: "none" },
              }}
              style={{ outline: "none" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
