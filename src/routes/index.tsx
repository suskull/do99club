import React from 'react';
import Authenticated from 'layouts/Authenticated';
import LandingA from 'pages/LandingA';
import LandingB from 'pages/LandingB';
import LandingC from 'pages/LandingC';
import Download from 'pages/Download';

const routes = [
  {
    exact: true, path: '/', component: LandingA, layout: Authenticated,
  },
  {
    exact: true, path: '/landingb', component: LandingB, layout: Authenticated,
  },
  {
    exact: true, path: '/landingc', component: LandingC, layout: Authenticated,
  },
  {
    exact: true, path: '/download', component: Download, layout: Authenticated,
  },
];

export default routes;
