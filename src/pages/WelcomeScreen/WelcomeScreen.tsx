// Core
import React, { memo } from 'react';

// Components
import { ReactStart } from 'components/ReactStart/ReactStart';

const WelcomeScreenInner = () => <ReactStart />;

export const WelcomeScreen = memo(WelcomeScreenInner);
