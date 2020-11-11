// Generated by https://quicktype.io

export interface CommonAlert {
    schemaId: string;
    data:     Data;
}

export interface Data {
    essentials:   Essentials;
    alertContext: AlertContext;
}

export interface AlertContext {
    properties:    null;
    conditionType: string;
    condition:     Condition;
}

export interface Condition {
    windowSize: string;
    allOf:      AllOf[];
}

export interface AllOf {
    metricName:      string;
    metricNamespace: string;
    operator:        string;
    threshold:       string;
    timeAggregation: string;
    dimensions:      Dimension[];
    metricValue:     number;
}

export interface Dimension {
    name:  string;
    value: string;
}

export interface Essentials {
    alertId:             string;
    alertRule:           string;
    severity:            string;
    signalType:          string;
    monitorCondition:    string;
    monitoringService:   string;
    alertTargetIDs:      string[];
    originAlertId:       string;
    firedDateTime:       string;
    resolvedDateTime:    string;
    description:         string;
    essentialsVersion:   string;
    alertContextVersion: string;
}
