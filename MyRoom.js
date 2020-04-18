const colyseus = require("colyseus");

exports.MyRoom = class extends colyseus.Room {
  // State

  onCreate(options) {
    console.log("something", options);
  }

  onJoin(client, options) {
    console.log("onJoin");
  }

  onMessage(client, message) {
    // console.log("client is", client);
    console.log("message", message);

    if (message.type === "PLAY_CARD") {
      //
    }
  }

  onLeave(client, consented) {
    console.log("onLeave");
  }

  onDispose() {
    console.log("onDispose");
  }
};
