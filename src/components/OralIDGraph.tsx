import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface GraphProps {
  salesTypeOne?: number[];
  salesTypeTwo?: number[];
  name: string[] | string;
  colors: string[];
}

export default function OralIDGraph(props: GraphProps) {
  const newData: any[] = [];
  Object.keys(props).map((key) => {
    // @ts-ignore
    newData.push(props[key] as any);
  });
  const data = [];
  for (let i = 0; i < newData[0].length; i++) {
    data.push({
      name: newData[0][i],
      salesTypeOne: newData[2][i],
      salesTypeTwo: newData[3][i],
    });
  }

  console.log(data);
  return (
    <ResponsiveContainer width="100%" height={800}>
      <LineChart width={400} height={400} data={data}>
        <XAxis dataKey="name" />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line
          type="monotone"
          dataKey="salesTypeOne"
          stroke={props.colors[0]}
          strokeWidth={4}
        />
        <Line
          type="monotone"
          dataKey="salesTypeTwo"
          stroke={props.colors[1]}
          strokeWidth={4}
        />
        <Legend iconType={"circle"} />
      </LineChart>
    </ResponsiveContainer>
  );
}
