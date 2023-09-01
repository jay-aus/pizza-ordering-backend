import { Pizza, prestonMenu, southbankMenu } from './menuData';

export interface Location {
    name: string;
    menu: Pizza[];
  }
  
  export const locations: Location[] = [
    {
      name: 'Preston',
      menu: prestonMenu,
    },
    {
      name: 'Southbank',
      menu: southbankMenu,
    },
    // Add more locations as needed
  ];
