export interface JokeResponse {
    type: string;
    setup: string;
    punchline: string;
    id: number;
}

export type JokeArrayResponse = JokeResponse[];
