import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("components/layout.tsx", [
    index("routes/home.tsx"),
    route("/works", "routes/works.tsx"),
    route("/blogs", "routes/blogs.tsx"),
  ]),
] satisfies RouteConfig;
