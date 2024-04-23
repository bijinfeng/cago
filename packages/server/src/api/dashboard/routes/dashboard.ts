export default {
  routes: [
    {
      method: "GET",
      path: "/dashboard",
      handler: "dashboard.exampleAction",
      config: {
        auth: false,
      },
    },
  ],
}
