import { Footprints, Icon, icons } from "lucide-react";
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar } from "recharts";

const Expensedashboard = () => {
  const data = [
    { name: "Food & Drinks", value: 400, fill: "#F68D2B", Icon},
    { name: "Groceries", value: 300, fill: "#F4A79D" },
    { name: "Travel", value: 300, fill: "#344BFD" },
    { name: "Health", value: 200, fill: "#23A52C" },
  ];
  const bardata = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div id="dashboardbox">
      <div id="dashboardheader">
        <h1 className="zeromargin">Expense Chart</h1>
        <h1 className="zeromargin">Expense Tracker</h1>
      </div>

      <div className="dasboarditems">
        <div style={{ width: "300px", height: "300px" }}>
          <PieChart
            responsive
            style={{
              maxWidth: "300px",
              aspectRatio: 1,
            }}
          >
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius="90%"
              innerRadius="60%"
              isAnimationActive={true}
            >
            

              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
           
          </PieChart>
        </div>
        
        <BarChart
          style={{
            width: "300px",
            maxWidth: "500px",
            maxHeight: "500px",
            aspectRatio: 2.618,
          }}
          responsive
          data={bardata}
        >
          <Bar dataKey="pv" fill="#344BFD" />
        </BarChart>
      </div>
    </div>
  );
};

export default Expensedashboard;
