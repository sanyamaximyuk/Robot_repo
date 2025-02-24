import { Data } from './interfaces';

async function getJson(): Promise<Data> {
    const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
    const json = (await response.json()) as Data;
    return json;
}

class Obj2 {
    public summary: string;
    public totalPopulation: number;

    public constructor(data: Data) {
        if (!data?.source?.annotations) {
            throw new Error('Invalid data: missing annotations');
        }
        this.summary = `Dataset: ${data.source.annotations.dataset_name} (${data.source.annotations.source_name})`;
        this.totalPopulation = data.data.reduce((sum, entry) => sum + entry.population, 0);
    }
}

(async () => {
    const obj1 = await getJson();
    console.log('Original Data:', obj1);

    const obj2 = new Obj2(obj1);
    console.log('Transformed Object:', obj2);
})();
