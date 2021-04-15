// Core
import React, { memo } from 'react';

// Assets
import { Spiner as SpinerSvg } from 'assets/images/svgr/spiner';

// Types
import { SpinerTypes } from './spinerTypes';

// Style
import './spiner.scss';

const SpinerInner = (props: SpinerTypes) => (
    <div className="spiner">{props.isFetching && <SpinerSvg />}</div>
);

export const Spiner = memo(SpinerInner);
