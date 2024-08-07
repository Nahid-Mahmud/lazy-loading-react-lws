import { lazy } from "react";

const importDemo = async (file) => {
  return await lazy(() => import(`../components/${file}`)); // retirs a promise
};

export default importDemo;
