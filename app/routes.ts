import { type RouteConfig, index, layout, prefix } from "@react-router/dev/routes";

export default [
  layout("root.tsx", [
    index("routes/home.tsx"),
    ...prefix("module", [
      { path: "1", file: "routes/module1.tsx" },
      { path: "2", file: "routes/module2.tsx" },
      { path: "3", file: "routes/module3.tsx" },
      { path: "4", file: "routes/module4.tsx" },
      { path: "5", file: "routes/module5.tsx" },
      { path: "6", file: "routes/module6.tsx" },
      { path: "7", file: "routes/module7.tsx" },
      { path: "8", file: "routes/module8.tsx" },
    ]),
  ]),
] satisfies RouteConfig;
