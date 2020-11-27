const config = {
    s3: {
        REGION: "us-east-2",
        BUCKET: "app-note-upload",
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://bknuuwb9o4.execute-api.us-east-2.amazonaws.com/prod",
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_6blFV17f0",
        APP_CLIENT_ID: "7jgig6i29bc84ft0c7sc4sga7j",
        IDENTITY_POOL_ID: "us-east-2:3d85975e-dc50-4b9c-9507-7860f7881a74",
    },
};

export default config;