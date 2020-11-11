import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import Slack = require("node-slack");
import { CommonAlert } from './model/CommonAlert';
import * as dotenv from "dotenv";
import { getReport, getResourceNameFromId } from "./lib/helpers";


const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    if (req.body) {
        dotenv.config();
        const slack = new Slack(process.env.SLACK_URL);

        const alert: CommonAlert = req.body
        const resources = alert.data.essentials.alertTargetIDs;

        resources.forEach(resourceId => slack.send({
            text: "Something 💩 happend to *<"
                + process.env.AZURE_PORTAL_BASE
                + resourceId + "|"
                + getResourceNameFromId(resourceId)
                + ">*.",
            attachments: [{ color: '#ffaa44' }, getReport(alert)]
        }));
        
        context.res = {
            status: 200
        }
    }

    context.done();

};

export default httpTrigger;


