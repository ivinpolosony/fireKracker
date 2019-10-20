import React from "react";

const Dashboard = React.lazy(() => import("./views/Dashboard"));
const Report = React.lazy(() => import("./views/Report"));

const Charts = React.lazy(() => import("./views/Charts"));

const Alerts = React.lazy(() => import("./views/Notifications/Alerts"));
const Badges = React.lazy(() => import("./views/Notifications/Badges"));
const Modals = React.lazy(() => import("./views/Notifications/Modals"));

const Widgets = React.lazy(() => import("./views/Widgets/Widgets"));
const Users = React.lazy(() => import("./views/Users/Users"));
const User = React.lazy(() => import("./views/Users/User"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard",exact: true, name: "Dashboard", component: Dashboard },
  { path: "/report", name: "Report", component: Report },
  {
    path: "/notifications",
    exact: true,
    name: "Notifications",
    component: Alerts
  },
  { path: "/notifications/alerts", name: "Alerts", component: Alerts },
  { path: "/notifications/badges", name: "Badges", component: Badges },
  { path: "/notifications/modals", name: "Modals", component: Modals },
  { path: "/widgets", name: "Widgets", component: Widgets },
  { path: "/charts", name: "Charts", component: Charts },
  { path: "/users", exact: true, name: "Users", component: Users },
  { path: "/users/:id", exact: true, name: "User Details", component: User }
];

export default routes;
