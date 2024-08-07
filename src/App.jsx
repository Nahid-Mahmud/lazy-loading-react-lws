import { Suspense, useState } from "react";
import demos from "./data/demos";
import importDemo from "./utils/importDemo";

function App() {
  const [selectedDeomo, setSelectedDemo] = useState(null);

  const loadDemo = async (file) => {
    const Demo = await importDemo(file);
    return <Demo />;
  };

  const selectDemo = async (file) => {
    const demoComponent = await loadDemo(file);
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
              className="px-3 py-1 border-2 border-gray-500 rounded-md hover:bg-slate-200"
              onClick={() => selectDemo(demo?.file)}
              key={demo?.id}
            >
              {demo?.name}
            </button>
          ))}
        </div>

        {/* demo component */}
        <div>
          <Suspense fallback={<div>Loading ...</div>}>{selectedDeomo}</Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;
