import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import BlogCard from '../src/components/blogs/blogCard';
import BlogPost from "../src/components/blogs/blogPost";

// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

const testBlogData = {
    id: 1,
    userId: 14,
    title: 'testTitle',
    body: 'testBody'
}

it('blogCard-Test', () => {

    const blogDom = render(<BlogCard blogData={testBlogData} />);

    const blogTitle = blogDom.getByTitle('blog-title')
    const blogBody = blogDom.getByTitle('blog-body')

    console.log('=========', blogTitle.textContent)
    console.log('=========', blogBody.textContent)

    expect(blogTitle.textContent).toBe(testBlogData.title)
    expect(blogBody.textContent).toBe(testBlogData.body)

});
