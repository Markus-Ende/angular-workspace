// This file is required by karma.conf.js and loads recursively all the .spec and framework files
// This is a copy of the default test.ts that only searches for *.pact.ts files

import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// Then we find all the tests.
const contextApps = require.context('..', true, /\.pact\.ts$/);
// And load the modules.
contextApps.keys().map(contextApps);
