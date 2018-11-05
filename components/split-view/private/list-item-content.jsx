/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */
/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

import React from 'react';
import PropTypes from 'prop-types';

export const DISPLAY_NAME = 'SLDSSplitViewListItemContent';

const propTypes = {
	/**
	 * **Item to be displayed**
	 * * `label`: The main label displayed on the top left.
	 * * `topRightText`: The text displayed on the top right.
	 * * `bottomLeftText`: The text displayed on the bottom left.
	 * * `bottomRightText`: The text displayed on the bottom right.
	 */
	item: PropTypes.shape({
		label: PropTypes.string,
		topRightText: PropTypes.string,
		topRightContent: PropTypes.object,
		bottomLeftText: PropTypes.string,
		bottomLeftContent: PropTypes.object,
		bottomRightText: PropTypes.string,
		bottomRightContent: PropTypes.object
	}),
};

const defaultProps = {};

const SplitViewListItemContent = ({ item }) => (
	<div>
		<div className="slds-grid slds-wrap">
			<span
				className="slds-truncate slds-text-body_regular slds-text-color_default"
				title={item.label}
			>
				{item.label}
			</span>
			<span
				className="slds-truncate slds-col_bump-left"
				title={item.topRightText}
			>
				{item.topRightContent ? item.topRightContent : item.topRightText}
			</span>
		</div>
		<div className="slds-grid slds-wrap">
			<span className="slds-truncate" title={item.bottomLeftText}>
				{item.bottomLeftContent ? item.bottomLeftContent : item.bottomLeftText}
			</span>
			<span
				className="slds-truncate slds-col_bump-left"
				title={item.bottomRightText}
			>
				{item.bottomRightContent ? item.bottomRightContent : item.bottomRightText}
			</span>
		</div>
	</div>
);

SplitViewListItemContent.displayName = DISPLAY_NAME;
SplitViewListItemContent.propTypes = propTypes;
SplitViewListItemContent.defaultProps = defaultProps;

export default SplitViewListItemContent;
