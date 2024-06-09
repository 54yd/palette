
import React from 'react';
import UploadPage from '@/app/upload';  

import AppTransition from '@/_components/utils/useTransition';
const Page = () => {

    //UseTransition()
    return (
        <div>
            <UploadPage />
            <AppTransition />
        </div>
    );
};

export default Page;