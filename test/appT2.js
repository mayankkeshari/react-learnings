debugger;
const apps = [
  {
    name: "InstaPic",
    platform: "ANDROID",
  },
  {
    name: "MadBirds",
    platform: "IOS",
  },
  {
    name: "NetMovies",
    platform: "ANDROID",
  },
  {
    name: "WeTalk",
    platform: "WINDOWS",
  },
];
const platforms = [
  {
    name: "IOS",
    features: ["APP_MANAGEMENT", "FIREWALL"],
  },
  {
    name: "ANDROID",
    features: ["FIREWALL", "KIOSK_MODE"],
  },
  {
    name: "WINDOWS",
    features: ["KIOSK_MODE", "REMOTE_ACCESS"],
  },
];

const lA = ["InstaPic", "NetMovies"];
getFullApps(apps, platforms, lA);

// Complete the getFullApps function below.
function getFullApps(apps, platforms, appNames) {
  if (!apps && !platforms && !appNames) {
    return [];
  }

  const appWithPlatform = apps.filter((ele) => appNames.includes(ele.name));
  const fullAppList = appWithPlatform.map((ele) => {
    ele["features"] = platforms.find(
      (eleP) => eleP.name == ele.platform
    ).features;
    return ele;
  });

  return fullAppList;
}
