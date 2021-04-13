// Core
import React from 'react';

// Assets
import { Spiner as SpinerSvg } from 'assets/images/svgr/spiner';

// Types
import { SpinerTypes } from './spinerTypes';

// Style
import './spiner.scss';

export const Spiner = (props: SpinerTypes) => (
    <div className="spiner">{props.isFetching && <SpinerSvg />}</div>
);
