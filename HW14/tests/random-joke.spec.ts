import * as assert from 'assert';
import { JokeApiService } from '../src/services/joke-api.service';
import { JokeResponse } from '../src/services/interfaces/joke-interface';

describe('JokeApiService', () => {
    let jokeService: JokeApiService;

    beforeEach(() => {
        jokeService = new JokeApiService();
    });

    describe('getRandomJoke', () => {
        it('should return a random joke', async () => {
            const joke = await jokeService.getRandomJoke();
            assert.ok(joke, 'Joke should not be null');
            assert.strictEqual(typeof joke?.type, 'string', 'Type should be a string');
            assert.strictEqual(typeof joke?.setup, 'string', 'Setup should be a string');
            assert.strictEqual(typeof joke?.punchline, 'string', 'Punchline should be a string');
            assert.strictEqual(typeof joke?.id, 'number', 'ID should be a number');
        });
    });

    describe('getRandomTenJokes', () => {
        it('should return 10 random jokes', async () => {
            const jokes = await jokeService.getRandomTenJokes();
            assert.ok(jokes, 'Jokes should not be null');
            assert.strictEqual(jokes?.length, 10, 'Should return 10 jokes');
            jokes?.forEach((joke: JokeResponse) => {
                assert.strictEqual(typeof joke.type, 'string', 'Type should be a string');
                assert.strictEqual(typeof joke.setup, 'string', 'Setup should be a string');
                assert.strictEqual(typeof joke.punchline, 'string', 'Punchline should be a string');
                assert.strictEqual(typeof joke.id, 'number', 'ID should be a number');
            });
        });
    });

    describe('getJokeByType', () => {
        it('should return a programming joke', async () => {
            const joke = await jokeService.getJokeByType('programming');
            assert.ok(joke, 'Joke should not be null');
            assert.strictEqual(joke?.type, 'programming', 'Type should be programming');
            assert.strictEqual(typeof joke?.setup, 'string', 'Setup should be a string');
            assert.strictEqual(typeof joke?.punchline, 'string', 'Punchline should be a string');
            assert.strictEqual(typeof joke?.id, 'number', 'ID should be a number');
        });
    });

    describe('getTenJokesByType', () => {
        it('should return 10 programming jokes', async () => {
            const jokes = await jokeService.getTenJokesByType('programming');
            assert.ok(jokes, 'Jokes should not be null');
            assert.strictEqual(jokes?.length, 10, 'Should return 10 jokes');
            jokes?.forEach((joke: JokeResponse) => {
                assert.strictEqual(joke.type, 'programming', 'Type should be programming');
                assert.strictEqual(typeof joke.setup, 'string', 'Setup should be a string');
                assert.strictEqual(typeof joke.punchline, 'string', 'Punchline should be a string');
                assert.strictEqual(typeof joke.id, 'number', 'ID should be a number');
            });
        });
    });

    describe('getJokeByType (invalid type)', () => {
        it('should return null for an invalid joke type', async () => {
            const joke = await jokeService.getJokeByType('invalid_type');
            assert.strictEqual(joke, null, 'Should return null for invalid type');
        });
    });
});
