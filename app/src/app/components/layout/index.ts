import { lazy } from "react";

export const AntiAdBlock = lazy(() =>
  import("./AntiAdBlock").then(mod => ({ default: mod.AntiAdBlock }))
);
export const Error500 = lazy(() =>
  import("./Error500").then(mod => ({ default: mod.Error500 }))
);
export const Footer = lazy(() =>
  import("./Footer").then(mod => ({ default: mod.Footer }))
);
export const Header = lazy(() =>
  import("./Header").then(mod => ({ default: mod.Header }))
);
export const Loading = lazy(() =>
  import("./Loading").then(mod => ({ default: mod.Loading }))
);
export const SubTitle = lazy(() =>
  import("./SubTitle").then(mod => ({ default: mod.SubTitle }))
);
