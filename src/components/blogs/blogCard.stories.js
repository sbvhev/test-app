import React from 'react';

import BlogCard from './blogCard';

export default {
	component: BlogCard,
	title: 'BlogCard',
};

const Template = (args) => <BlogCard {...args} />;

export const Default = Template.bind({});
Default.args = {
	blogData: {
		id: 1,
		userId: 10,
		title: 'Test Title',
		body: 'Test Body',
	},
};
