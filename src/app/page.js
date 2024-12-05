import Card from "@/components/Card";
import data from "../data/data.json";

export default function Home() {
  return (
    <div>
      <main>
        {data.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              index={index}
            />
          );
        })}
      </main>
    </div>
  );
}
