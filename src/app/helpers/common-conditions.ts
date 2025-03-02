export interface conditionsOptions {
    value: string;
    label: string;
    }
    
    export const condOptions:  conditionsOptions[] = [
        { value: '>', label: 'GreaterThan' },
        { value: '>=', label: 'GreaterOrEqual' },
        { value: '=', label: 'Equal' },
        { value: '<', label: 'LessThan>' },
        { value: '<=', label: 'LessOrEqual' },
    ]