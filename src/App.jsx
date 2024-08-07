import { Suspense, useState } from "react";
import demos from "./data/demos";
import importDemo from "./utils/importDemo";

function App() {
  const [selectedDeomo, setSelectedDemo] = useState(null);

  const selectDemo = async (file) => {
    const Demo = await importDemo(file);
    const demoComponent = <Demo />;
    setSelectedDemo(demoComponent);
  };

  return (
    <div className="p-10">
      <div className="space-y-5">
        <h1>React Lazy load explained</h1>

        {/* demo name */}
        <div className="flex gap-2">
          {demos?.map((demo) => (
            <button
              className="border px-3 py-1 border-2 border-gray-500 rounded-md hover:bg-slate-200"
              onClick={() => selectDemo(demo?.file)}
              key={demo?.id}
            >
              {demo?.name}
            </button>
          ))}
        </div>

        {/* demo component */}
        <Suspense fallback={<div>Loading ...</div>}>{selectedDeomo && <div>{selectedDeomo}</div>}</Suspense>
      </div>
    </div>
  );
}

export default App;
