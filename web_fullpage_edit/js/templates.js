const templates = [
  {
    templateId: "t0",
    children: [
      {
        type: "div",
        id: "t0_1",
        styleSheet: {
          position: "relative",
          "background-image": "linear-gradient( 135deg, #97ABFF 10%, #123597 100%)"
        },
        className: ['a'],
        children: [
          {
            id: "t0_1_1",
            type: "div",
            styleSheet: {
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "50%",
              height: "50%",
              transform: "translate(-50%, -50%)",
              background: "rgba( 255, 255, 255, 0.2 )",
              "box-shadow": "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              "backdrop-filter": "blur( 15px )",
              "-webkit-backdrop-filter": "blur( 15px )",
              "border-radius": "4px",
              "border": "1px solid rgba( 255, 255, 255, 0.18 )",
              "z-index": 2
            },
          },
          {
            id: "t0_1_2",
            type: "div",
            styleSheet: {
              position: "absolute",
              top: "16%",
              left: "16%",
              width: "18%",
              height: "25%",
              background: "#0aa1dd",
              "border-radius": "50%",
              "z-index": 1
            }
          },
          {
            id: "t0_1_3",
            type: "div",
            styleSheet: {
              position: "absolute",
              bottom: "16%",
              right: "16%",
              width: "18%",
              height: "25%",
              background: "#79DAE8",
              "border-radius": "50%",
              "z-index": 1
            }
          }
        ],
      }
    ],
  },
  {
    templateId: "t1",
    children: [
      {
        type: "div",
        id: "t1_1",
        styleSheet: {
          display: "flex",
        },
        children: [
          {
            id: "t1_1_1",
            type: "div",
            styleSheet: {
              width: "40%",
              height: "100%",
              "background-image": "url(https://cdn.pixabay.com/photo/2021/11/18/21/58/sunflower-6807491_960_720.jpg)",
              "background-size": "cover"
            },
            className: ['a']
          },
          {
            id: "t1_1_2",
            type: "div",
            styleSheet: {
              width: "60%",
              height: "100%",
              background: "#B9F8D3"
            },
          }
        ]
      },
    ],
  },
];
