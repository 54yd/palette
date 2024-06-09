'use client';

import '@/_components/styles/globals.css';

import { ReactNode } from 'react';
import Provider from '@/app/_provider';
import Transition from '@/_components/containers/Transition';


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