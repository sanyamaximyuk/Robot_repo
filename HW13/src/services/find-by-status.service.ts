import axios, { AxiosPromise } from 'axios';

export class FindByStatusService {
    public constructor(private url: string) {}

    public getPetByStatus = (status: string): AxiosPromise => {
        return axios.request({
            baseURL: this.url,
            headers: { Accept: 'application/json' },
            method: 'GET',
            url: `v2/pet/findByStatus/${status}`
        });
    };
}
