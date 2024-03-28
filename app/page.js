import Convert from "./Convert";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 container p-4 mx-auto">
      <div className="text-5xl mx-auto">Currency Converter</div>
      <div className="grid grid-cols-2 gap-4 p-2">
        <Convert currency={"DOLLAR"} />
      </div>
    </main>
  );
}
