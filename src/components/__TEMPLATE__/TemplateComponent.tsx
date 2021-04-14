// Core
import React from 'react';

// Assets

// Types
import { TemplateComponentTypes } from './templateComponentTypes';

// Style
import './TemplateComponent.scss';

export const TemplateComponent = (props: TemplateComponentTypes) => (
    <div className="template-component">Template component {props.key}</div>
);
