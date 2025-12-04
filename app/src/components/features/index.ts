import { lazy } from "react";

export const Home = lazy(() =>
  import("./Home").then(mod => ({ default: mod.Home }))
);
export const Account = lazy(() =>
  import("./Account").then(mod => ({ default: mod.Account }))
);
export const Item = lazy(() =>
  import("./Item").then(mod => ({ default: mod.Item }))
);
export const Error404 = lazy(() =>
  import("./Error404").then(mod => ({ default: mod.Error404 }))
);
export const Search = lazy(() =>
  import("./Search").then(mod => ({ default: mod.Search }))
);
export const Settings = lazy(() =>
  import("./Settings").then(mod => ({ default: mod.Settings }))
);
export const Watch = lazy(() =>
  import("./Watch").then(mod => ({ default: mod.Watch }))
);