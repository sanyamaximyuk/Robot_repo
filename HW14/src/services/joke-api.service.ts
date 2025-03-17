import { JokeResponse, JokeArrayResponse } from './interfaces/joke-interface';

export class JokeApiService {
    private baseUrl = 'https://official-joke-api.appspot.com';

    public async getRandomJoke(): Promise<JokeResponse | null> {
        try {
            const response = await fetch(`${this.baseUrl}/random_joke`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return (await response.json()) as JokeResponse;
        } catch (error) {
            console.error('Error fetching random joke:', error);
            return null;
        }
    }

    public async getRandomTenJokes(): Promise<JokeArrayResponse | null> {
        try {
            const response = await fetch(`${this.baseUrl}/random_ten`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return (await response.json()) as JokeArrayResponse;
        } catch (error) {
            console.error('Error fetching random ten jokes:', error);
            return null;
        }
    }

    public async getJokeByType(type: string): Promise<JokeResponse | null> {
        try {
            const response = await fetch(`${this.baseUrl}/jokes/${type}/random`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return (await response.json()) as JokeResponse;
        } catch (error) {
            console.error(`Error fetching ${type} joke:`, error);
            return null;
        }
    }

    public async getTenJokesByType(type: string): Promise<JokeArrayResponse | null> {
        try {
            const response = await fetch(`${this.baseUrl}/jokes/${type}/ten`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return (await response.json()) as JokeArrayResponse;
        } catch (error) {
            console.error(`Error fetching ten ${type} jokes:`, error);
            return null;
        }
    }
}
