<template>
  <div>
    <svg class="w-[300] h-[200] rounded-xl block" role="img" aria-labelledby="loading-aria" viewBox="0 0 300 200" preserveAspectRatio="none">
      <title id="loading-aria">Loading...</title>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        clip-path="url(#clip-path)"
        style="fill: url('#fill')"
      />
      <defs>
        <clipPath id="clip-path">
          <rect
            x="0"
            y="0"
            rx="0"
            ry="0"
            width="300"
            height="200"
          />
        </clipPath>
        <linearGradient id="fill">
          <stop offset="0.599964" stop-color="#f3f3f3" stop-opacity="1">
            <animate attributeName="offset" values="-2; -2; 1" keyTimes="0; 0.25; 1" dur="2s" repeatCount="indefinite" />
          </stop>
          <stop offset="1.59996" stop-color="#ecebeb" stop-opacity="1">
            <animate attributeName="offset" values="-1; -1; 2" keyTimes="0; 0.25; 1" dur="2s" repeatCount="indefinite" />
          </stop>
          <stop offset="2.59996" stop-color="#f3f3f3" stop-opacity="1">
            <animate attributeName="offset" values="0; 0; 3" keyTimes="0; 0.25; 1" dur="2s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>
