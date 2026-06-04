import type React from "react";

// The original site uses the Ionicons web component (`<ion-icon>`), which is
// registered at runtime by the ionicons ESM module loaded in the root layout.
// Declare it so TSX/JSX accepts the custom element.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ion-icon": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          name?: string;
          src?: string;
          size?: string;
          "aria-label"?: string;
          role?: string;
        },
        HTMLElement
      >;
    }
  }
}

export {};
