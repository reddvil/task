import React, { memo } from 'react';

const SkeletonLoader = () => {
	return (
		<div>
			Loading...
		</div>
	);
};


SkeletonLoader.displayName = 'Meama.SkeletonLoader';
export default memo(SkeletonLoader);
