import * as aws from "@pulumi/aws";

export const timeFunction = new aws.lambda.CallbackFunction("time-function", {
    callback: () => {
        // Leave the callback implementation empty for now.
    },
});

export const timeURL = new aws.lambda.FunctionUrl("time-url", {
    functionName: timeFunction.name,
    authorizationType: "NONE", 
    cors: {
        allowOrigins: ["*"],
        allowMethods: ["GET"],
        },
});
