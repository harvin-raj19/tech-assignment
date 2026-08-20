import {test, expect} from '@playwright/test';
import {newPost, updatedPost} from '../../test-data/posts';

test.use({baseURL: 'https://jsonplaceholder.typicode.com'});

test.describe.serial('Posts API Tests', () => {
    let postId: number;

    test('[POST] Create a new post', async ({request}) => {
        const response = await request.post('/posts', {
            data: {
                title: newPost.title,
                body: newPost.body,
                userId: newPost.userId
            }
        });
        expect(response.status()).toBe(201);

        const createdPost = await response.json();
        postId = createdPost.id;

        expect(createdPost.title).toBe(newPost.title);
        expect(createdPost.body).toBe(newPost.body);
        expect(createdPost.userId).toBe(newPost.userId);
        expect(postId).toBeGreaterThan(0);
    });

    test('[GET] Read the created post', async ({request}) => {
        const response = await request.get(`/posts/${postId}`);
        // Create post doesn't stores the data as its Mock API
        expect(response.status()).toBe(404);
    });

    test('[PATCH] Update the created post', async ({request}) => {
        const response = await request.patch(`/posts/${postId}`, {
            data: {
                body: updatedPost.body
            }
        });
        expect(response.status()).toBe(200);
        const updatedbody = await response.json();
        expect(updatedbody.body).toBe(updatedPost.body);
    });

    test('[VERIFY UPDATE] Verify the updated post', async ({request}) => {
        const response = await request.get(`/posts/${postId}`);
        // Update post doesn't update the data as its Mock API
        expect(response.status()).toBe(404);
    });

    test('[DELETE] Delete the created post', async ({request}) => {
        const response = await request.delete(`/posts/${postId}`);
        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(body).toEqual({});
    });

    test('[VERIFY DELETE] Verify the deleted post', async ({request}) => {
        const response = await request.get(`/posts/${postId}`);
        // Delete post doesn't remove the data as its Mock API
        expect(response.status()).toBe(404);
    });

});