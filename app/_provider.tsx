import { ReactNode } from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { SessionProvider } from 'next-auth/react'; // Adjust the import path if necessary

import Html from './_html';

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <Html>
      <SessionProvider>
        <AntdRegistry>
          {children}
        </AntdRegistry>
      </SessionProvider>
    </Html>
  );
}

export default Provider;