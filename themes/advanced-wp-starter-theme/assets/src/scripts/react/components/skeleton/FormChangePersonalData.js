import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function FormChangePersonalData() {
  return (
    <div className='mb-6' style={{ padding: '1.5rem', border: '1px solid #ddd', borderRadius: '8px', background: '#fff' }}>
      <Skeleton width="50%" height="24px" className="mb-5" />
      <div className="row mb-6">
        <div className="col-xl-6">
          <Skeleton width="30%" height="14px" />
          <Skeleton width="100%" height="51px" />
        </div>
        <div className="col-xl-6">
          <Skeleton width="30%" height="14px" />
          <Skeleton width="100%" height="51px" />
        </div>
      </div>
      <div>
        <Skeleton width="30%" height="14px" />
        <Skeleton width="100%" height="36px" className="mb-6" />
      </div>
      <Skeleton width="30%" height="48px" style={{ borderRadius: '5px' }} />
    </div>
  );
}

export default FormChangePersonalData;
