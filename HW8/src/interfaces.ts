export interface Data {
    data: {
        idNation: string,
        nation: string,
        idYear: number,
        year: string,
        population: number,
        slugNation: string
    }[];
    source?: {
        measures: [];
        annotations?: {
            source_name?: string;
            source_description?: string;
            dataset_name?: string;
            dataset_link?: string;
            table_id?: string;
            topic?: string;
            subtopic?: string;
        };
        name: string;
        substitutions: [];
    };
}

async function getJson(): Promise<Data> {
    const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
    const json = (await response.json()) as Data;
    return json;
}

(async () => {
    const test = await getJson();
    console.log(test.data, test.source);
})();
