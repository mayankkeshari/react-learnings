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

debugger;
getAppNamesWithFeature(apps, platforms, "KIOSK_MODE");


// Complete the getAppNamesWithFeature function below.
function getAppNamesWithFeature(apps, platforms, featureName) {
  if (!apps && !platforms && !featureName) {
    return;
  }

  const platformNamesHavingFeature = platforms.filter((ele) =>
    ele.features.includes(featureName)
  ).map((ele) => ele.name);

  const appLen = apps.length;
  let reqApps = [];
  for (let i = 0; i < appLen; i++) {
    if (platformNamesHavingFeature.includes(apps[i].platform)) {
      reqApps.push(apps[i].name);
    }
  }
  console.log(reqApps);
}
