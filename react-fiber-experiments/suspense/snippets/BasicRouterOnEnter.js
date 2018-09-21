Router.config({
  "/someroute": {
    onEnter: () => {
      return somePromise();
    }
  }
});