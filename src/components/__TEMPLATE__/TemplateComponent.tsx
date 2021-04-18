// Core
import React, { memo } from 'react';

// Store
import { connect } from 'react-redux';

// Assets

// Types
import { TemplateComponentTypes } from './templateComponentTypes';

// MapToProps
import { mapStateToProps } from './mapStateToProps';
import { mapDispatchToProps } from './mapDispatchToProps';

// Style
import './TemplateComponent.scss';

const TemplateComponentInner: React.FC<TemplateComponentTypes> = ({ key }) => (
    <div className="template-component">Template component {key}</div>
);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(memo(TemplateComponentInner));
