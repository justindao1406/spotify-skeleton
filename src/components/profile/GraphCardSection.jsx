import React from "react";
import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function GraphCardSection({ data }) {
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <>
      <h2 className="text-white font-bold text-lg mt-3 ml-2 archivo-font">
        This week
      </h2>
      <div className="px-[4px] mt-3">
        <div className="p-[1px] rounded-[15px] w-full bg-gradient-to-b from-[#101010] to-[#666666]">
          <Card className="bg-[#222222] rounded-[14px] border-none">
            <div className="flex justify-start archivo-font px-9 gap-8">
              <div>
                <p className="text-[#A8A8A8] text-[14px] font-medium">
                  Total Listening Time
                </p>
                <p className="text-white text-[18px] font-bold mt-1">
                  11,256 mins
                </p>
              </div>
              <div>
                <p className="text-[#A8A8A8] text-[14px] font-medium">
                  {selectedDay
                    ? data.find((d) => d.name === selectedDay).name
                    : "None"}
                </p>
                <p className="text-white text-[18px] font-bold mt-1">
                  {selectedDay
                    ? data.find((d) => d.name === selectedDay)?.uv
                    : "0"}
                  mins
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="p-[1px] rounded-[15px] bg-gradient-to-b from-[#222222] to-[#ADADAD]">
                <div className="w-[323.5px] h-[200px] bg-[#595959] rounded-[15px] shadow-[0_13px_70px_0_rgba(0,0,0,0.25)] focus:outline-none">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      width={500}
                      height={200}
                      data={data}
                      margin={{
                        top: 20,
                        right: -20,
                        left: 18,
                        bottom: 4,
                      }}
                    >
                      <defs>
                        <linearGradient
                          id="colorGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#793fef"
                            stopOpacity={1}
                          />
                          <stop
                            offset="95%"
                            stopColor="#FD9F83"
                            stopOpacity={0.6}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey={(d) => d.name[0]}
                        tick={(props) => {
                          const { x, y, payload } = props;
                          const dataPoint = data[payload.index];
                          return (
                            <text
                              x={x}
                              y={y + 10}
                              fill={
                                dataPoint?.completed ? "#EFA111" : "#ffffff"
                              }
                              fontFamily="Archivo, sans-serif"
                              fontSize={12}
                              fontWeight={
                                dataPoint?.completed ? "900" : "medium"
                              }
                            >
                              {payload.value}
                            </text>
                          );
                        }}
                      />
                      <YAxis
                        orientation="right"
                        tickCount={4}
                        tick={{
                          fill: "#C3C3C3",
                          fontFamily: "Archivo, sans-serif",
                          fontSize: 8,
                          fontWeight: "medium",
                        }}
                      />

                      <Area
                        type="linear"
                        dataKey="uv"
                        stroke="#FFFFFF"
                        fill="url(#colorGradient)"
                        pointerEvents="none"
                        activeDot={false}
                        cursor={{
                          stroke: "#FFFFFF",
                          strokeWidth: 1,
                          strokeDasharray: "3 3",
                        }}
                        dot={(props) => {
                          const { payload } = props;
                          const isSelected = selectedDay === payload.name;
                          const isCompleted = payload.completed;

                          const fill =
                            isSelected && isCompleted
                              ? "#EFA111"
                              : isSelected
                              ? "#FFFFFF"
                              : "transparent";
                          const stroke = isCompleted ? "#EFA111" : "#FFFFFF";
                          return (
                            <g key={`dot-group-${payload.name}`}>
                              {/* Invisible larger clickable area */}
                              <circle
                                key={`clickable-${payload.name}`}
                                cx={props.cx}
                                cy={props.cy}
                                r={30}
                                fill="transparent"
                                onClick={(e) => setSelectedDay(payload.name)}
                                style={{ cursor: "pointer" }}
                              />
                              {/* Small visible dot */}
                              <circle
                                key={`visible-${payload.name}`}
                                cx={props.cx}
                                cy={props.cy}
                                r={4}
                                fill={fill}
                                stroke={stroke}
                                strokeWidth={2}
                              />
                            </g>
                          );
                        }}
                      />
                      <Tooltip content={() => null} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            <p className="text-[#A8A8A8] text-xs text-center flex justify-start pl-[38px] text-[12px] archivo-font font-medium pb-2">
              Last updated: 25 mins ago
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}
