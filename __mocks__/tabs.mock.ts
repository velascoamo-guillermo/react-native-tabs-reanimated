import TabType from "@/interfaces/Tab.interface";

const data: TabType[] = [
  {
    id: 1,
    name: "Primary",
    icon: "email",
    color: "#b3c6ff", // pastel blue
  },
  {
    id: 2,
    name: "Social",
    icon: "account-group",
    color: "#b2f0e6", // pastel aqua
  },
  {
    id: 3,
    name: "Promotions",
    icon: "tag",
    color: "#ffe0b2", // pastel orange
  },
  {
    id: 4,
    name: "Updates",
    icon: "update",
    color: "#ffd6e0", // pastel pink
  },
  {
    id: 5,
    name: "Forums",
    icon: "forum",
    color: "#e2c2f0", // pastel purple
  },
  {
    id: 6,
    name: "News",
    icon: "newspaper",
    color: "#ffe6e6", // pastel red
  },
  {
    id: 7,
    name: "Purchases",
    icon: "cart",
    color: "#f9fbe7", // pastel green
  },
  {
    id: 8,
    name: "All Mail",
    icon: "inbox",
    color: "#f0f0f0", // pastel grey
  },
];

const dataWithoutIcons: TabType[] = [
  {
    id: 1,
    name: "Primary",
    color: "#b3c6ff", // pastel blue
  },
  {
    id: 2,
    name: "Social",
    color: "#b2f0e6", // pastel aqua
  },
  {
    id: 3,
    name: "Promotions",
    color: "#ffe0b2", // pastel orange
  },
  {
    id: 4,
    name: "Updates",
    color: "#ffd6e0", // pastel pink
  },
  {
    id: 5,
    name: "Forums",
    color: "#e2c2f0", // pastel purple
  },
  {
    id: 6,
    name: "News",
    color: "#ffe6e6", // pastel red
  },
  {
    id: 7,
    name: "Purchases",
    color: "#f9fbe7", // pastel green
  },
  {
    id: 8,
    name: "All Mail",
    color: "#f0f0f0", // pastel grey
  },
];

const dataWithoutColors: TabType[] = [
  {
    id: 1,
    name: "Primary",
  },
  {
    id: 2,
    name: "Social",
  },
  {
    id: 3,
    name: "Promotions",
  },
  {
    id: 4,
    name: "Updates",
  },
  {
    id: 5,
    name: "Forums",
  },
  {
    id: 6,
    name: "News",
  },
  {
    id: 7,
    name: "Purchases",
  },
  {
    id: 8,
    name: "All Mail",
  },
];

export { data, dataWithoutColors, dataWithoutIcons };
