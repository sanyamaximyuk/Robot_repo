import { Data } from './interfaces';

export interface ExtendedData extends Data {
    extraOptions: {
        option1: string;
        option2: string;
    };
}

const res: Partial<ExtendedData> = {};
res.extraOptions = {
    option1: 'element',
    option2: 'your wishes'
};
