'use client';

import '@/styles/globals.css';

import { ReactNode } from 'react';
import Provider from '@/app/_provider';
import Transition from '@/containers/Transition';


const RootContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Provider>
      <Transition>
       {children}
       </Transition>
    </Provider>
  );
};

export default RootContainer;