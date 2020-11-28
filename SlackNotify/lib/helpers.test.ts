
import { AllOf } from '../model/CommonAlert';
import { isOverThreshold, getResourceNameFromId } from './helpers';

describe('getResourceNameFromId ', () => {
    test(' expect to return value after last /',
        () => expect(
            getResourceNameFromId("/subscriptions/.../virtualmachines/test")
        ).toBe('test')
    );
});

describe('isOverThreshold should return ', () => {
    test('true if some of the metrics is over threshold', () => {

        const allOf: AllOf[] = [
            {
                "metricName": "Percentage CPU",
                "metricNamespace": "Microsoft.Compute/virtualMachines",
                "operator": "GreaterThan",
                "threshold": "25",
                "timeAggregation": "Average",
                "dimensions": [
                    {
                        "name": "ResourceId",
                        "value": "3efad9dc-3d50-4eac-9c87-8b3fd6f97e4e"
                    }
                ],
                "metricValue": 7.727
            },
            {
                "metricName": "Percentage CPU",
                "metricNamespace": "Microsoft.Compute/virtualMachines",
                "operator": "GreaterThan",
                "threshold": "25",
                "timeAggregation": "Average",
                "dimensions": [
                    {
                        "name": "ResourceId",
                        "value": "3efad9dc-3d50-4eac-9c87-8b3fd6f97e4e"
                    }
                ],
                "metricValue": 80
            }
        ]
        expect(isOverThreshold(allOf)).toBe(true);
    });

    test('false if none of the metrics is over threshold', () => {

        const allOf: AllOf[] = [
            {
                "metricName": "Percentage CPU",
                "metricNamespace": "Microsoft.Compute/virtualMachines",
                "operator": "GreaterThan",
                "threshold": "25",
                "timeAggregation": "Average",
                "dimensions": [
                    {
                        "name": "ResourceId",
                        "value": "3efad9dc-3d50-4eac-9c87-8b3fd6f97e4e"
                    }
                ],
                "metricValue": 7.727
            },
            {
                "metricName": "Percentage CPU",
                "metricNamespace": "Microsoft.Compute/virtualMachines",
                "operator": "GreaterThan",
                "threshold": "25",
                "timeAggregation": "Average",
                "dimensions": [
                    {
                        "name": "ResourceId",
                        "value": "3efad9dc-3d50-4eac-9c87-8b3fd6f97e4e"
                    }
                ],
                "metricValue": 21
            }
        ]
        expect(isOverThreshold(allOf)).toBe(false);
    });
});