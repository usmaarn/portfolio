import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("components/layout.tsx", [
    index("routes/home.tsx"),
    route("/work", "routes/work.tsx"),
    route("/projects", "routes/projects.tsx"),
    route("/blogs", "routes/blogs.tsx"),
  ]),
] satisfies RouteConfig;
