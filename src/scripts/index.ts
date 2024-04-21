const ws = new WebSocket("ws://localhost:3001");

// ws.onopen = function () {
//   console.log("connected");
//   ws.send(
//     JSON.stringify({
//       event: "events",
//       data: "test",
//     })
//   );

//   ws.onmessage = function (data) {
//     console.log("ответ от сервера:", JSON.parse(data.data));
//   };
// };

ws.addEventListener("open", (ev) => {
  console.log(ev);
  console.log("connected");

  ws.send(
    JSON.stringify({
      event: "events",
      data: "test",
    })
  );
});

ws.addEventListener("message", (ev) => {
  console.log("ответ от сервера:", JSON.parse(ev.data));
});

ws.addEventListener("close", (ev) => {
  console.log("сервер закрыл соединение", ev);
});

// ws.addEventListener("open", () => {
//   ws.send("Hello server!");
// });

// ws.send("tuk, tuk, tuk!!!");
