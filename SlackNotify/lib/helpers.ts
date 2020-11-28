import { AllOf, CommonAlert } from "../model/CommonAlert";

export const getResourceNameFromId = (resource: string): string => {
    const t = resource.split('/');
    return t[t.length - 1];
};

export function getReport(alert: CommonAlert) {
    return {
        "color": "#5FA202",
        "blocks": alert.data.alertContext.condition.allOf.map(v => ({
            "type": "section",
            "fields": [
                {
                    "type": "mrkdwn",
                    "text": "*Metric Name:*\n" + v.metricName
                },
                {
                    "type": "mrkdwn",
                    "text": "*Operator:*\n" + v.operator
                },
                {
                    "type": "mrkdwn",
                    "text": "*Threshold:*\n" + v.threshold
                },
                {
                    "type": "mrkdwn",
                    "text": "*Time Aggregation:*\n" + v.timeAggregation
                },
                {
                    "type": "mrkdwn",
                    "text": "*Metric Value:*\n" + v.metricValue
                }
            ]
        })
        )
    };
}

export const isOverThreshold = (allOf: AllOf[]) => {
    return allOf.map(a => a.metricValue > new Number(a.threshold)).some(Boolean);
}