import * as React from 'react';
import { createComponent } from '@lit/react';
import { createComponent as directImportCreateComponent } from './create-component';
import SimpleGreetingWebComponent from './simple-greeting';

export const SimpleGreetingWithPackage = createComponent({
  react: React,
  tagName: 'simple-greeting',
  elementClass: SimpleGreetingWebComponent,
  events: {}
});

export const SimpleGreetingWithDirectImport = directImportCreateComponent({
  react: React,
  tagName: 'simple-greeting',
  elementClass: SimpleGreetingWebComponent,
  events: {}
});
