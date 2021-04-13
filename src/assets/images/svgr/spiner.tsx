import React, { memo } from 'react';

const SpinerInner = () => (
    <svg viewBox="0 0 24 24">
        <path d="M12,22c5.421,0,10-4.579,10-10h-2c0,4.337-3.663,8-8,8s-8-3.663-8-8c0-4.336,3.663-8,8-8V2C6.579,2,2,6.58,2,12 C2,17.421,6.579,22,12,22z" />
    </svg>
);

export const Spiner = memo(SpinerInner);
