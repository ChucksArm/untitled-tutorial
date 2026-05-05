import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/module1", "routes/module1.tsx"),
  route("/module2", "routes/module2.tsx"),
  route("/module3", "routes/module3.tsx"),
  route("/module4", "routes/module4.tsx"),
  route("/module5", "routes/module5.tsx"),
  route("/module6", "routes/module6.tsx"),
  route("/module7", "routes/module7.tsx"),
  route("/module8", "routes/module8.tsx"),
] satisfies RouteConfig;
