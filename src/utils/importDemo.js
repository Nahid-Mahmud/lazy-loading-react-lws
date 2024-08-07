import { lazy } from "react";

const importDemo = async (file) => {
  return await lazy(() => import( /* @vite-ignore */ `../components/${file}`)); // retirs a promise
};

export default importDemo;
