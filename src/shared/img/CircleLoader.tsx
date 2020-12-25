import * as React from "react";

export function CircleLoader() {
  return (
    // <svg width="64px" height="64px" viewBox="0 0 128 128">
    //   <rect x="0" y="0" width="100%" height="100%" fill="#FFFFFF"/>
    //   <g>
    //     <path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#000000" fill-opacity="1"/>
    //     <path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#c0c0c0" fill-opacity="0.25" transform="rotate(45 64 64)"/>
    //     <path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#c0c0c0" fill-opacity="0.25" transform="rotate(90 64 64)"/>
    //     <path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#c0c0c0" fill-opacity="0.25" transform="rotate(135 64 64)"/>
    //     <path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#c0c0c0" fill-opacity="0.25" transform="rotate(180 64 64)"/>
    //     <path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#c0c0c0" fill-opacity="0.25" transform="rotate(225 64 64)"/>
    //     <path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#c0c0c0" fill-opacity="0.25" transform="rotate(270 64 64)"/>
    //     <path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#c0c0c0" fill-opacity="0.25" transform="rotate(315 64 64)"/>
    //     <animateTransform attributeName="transform" type="rotate" values="0 64 64;45 64 64;90 64 64;135 64 64;180 64 64;225 64 64;270 64 64;315 64 64" calcMode="discrete" dur="720ms" repeatCount="indefinite">
    //
    //     </animateTransform>
    //   </g>
    // </svg>
 <svg width="64px" height="64px" viewBox="0 0 128 128" >
   <g>
     <path fill="#ff8c00" fillOpacity="1" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/>
     <animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="720ms" repeatCount="indefinite"></animateTransform>
   </g>
 </svg>
  );
}

