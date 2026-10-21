
 // Public configuration only. Never put passwords, tokens, or private keys here.
window.APP_CONFIG = {
  apiUrl: "https://script.google.com/macros/s/AKfycbw8uXCLSCJpVyzN4q_Ow4f6i-HhZGm34gzOU1GdDABR-Mh6enAxe2Az1dFFMBrvqi13/exec",

  qrImageUrl: "kbzpay-qr.jpg",
  brandName: "Swal-Sone Service",

  events: [
    {
      id: "road-run",
      name: "Road Run / Marathon",
      title: "ROAD RUN & MARATHON",
      date: "To be announced",
      banner: "event-header.jpg",
      description: "Road race registration.",
      categories: ["3 KM", "5 KM", "10 KM", "16 KM", "21 KM", "42 KM"],
      fees: {}
    },
    {
      id: "fun-run",
      name: "Fun Run",
      title: "FUN RUN",
      date: "To be announced",
      banner: "event-header.jpg",
      description: "Community fun run registration.",
      categories: [
        "3 KM", "5 KM", "8 KM", "9 KM", "10 KM",
        "13 KM", "16 KM", "21 KM", "30 KM", "42 KM",
        "50 KM", "70 KM", "100 KM"
      ],
      fees: {}
    },
    {
      id: "trail-run",
      name: "Trail Run",
      title: "TRAIL RUN",
      date: "To be announced",
      banner: "event-header.jpg",
      description: "Trail event. ITRA ID is optional.",
      categories: ["5 KM", "10 KM", "21 KM", "42 KM", "50 KM", "70 KM", "100 KM"],
      fees: {},
      fields: { itraId: { label: "ITRA ID", required: false } }
    },
    {
      id: "triathlon",
      name: "Triathlon",
      title: "TRIATHLON",
      date: "To be announced",
      banner: "event-header.jpg",
      description: "Choose Individual or Relay.",
      categories: ["Sprint", "Olympic", "Middle Distance", "Long Distance"],
      fees: {},
      relay: true
    },
    {
      id: "duathlon",
      name: "Duathlon",
      title: "DUATHLON",
      date: "To be announced",
      banner: "event-header.jpg",
      description: "Choose Individual or Relay.",
      categories: ["Sprint", "Standard", "Middle Distance"],
      fees: {},
      relay: true
    },
    {
      id: "music",
      name: "Music Event",
      title: "MUSIC EVENT",
      date: "To be announced",
      banner: "event-header.jpg",
      description: "Music event ticket registration.",
      categories: ["General Admission", "VIP"],
      fees: {}
    }
  ]
};
