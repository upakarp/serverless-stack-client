const dev = {
    STRIPE_KEY: "pk_test_51Hrb1JDk0d85w8rnj8NkVkpTyDBlYKRRbTdJjFExXLnmHRGeRr7xVwSMYw9BCguMa5CqyHlnXoRZGZHGpGfjAqTS00Qy1rMCdG",
    s3: {
        REGION: "us-east-2",
        BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-1m0r3dz67uefp",
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://bwjsjk03oc.execute-api.us-east-2.amazonaws.com/dev",
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_FbdZ6pLy9",
        APP_CLIENT_ID: "4j5is199r2ibgr2clvnqsvnnah",
        IDENTITY_POOL_ID: "us-east-2:4bee2818-2736-4626-9e67-9ad4ae38f433",
    },
};

const prod = {
    STRIPE_KEY: "pk_test_51Hrb1JDk0d85w8rnj8NkVkpTyDBlYKRRbTdJjFExXLnmHRGeRr7xVwSMYw9BCguMa5CqyHlnXoRZGZHGpGfjAqTS00Qy1rMCdG",
    s3: {
        REGION: "us-east-2",
        BUCKET: "prod-notes-infra-s3-uploads4f6eb0fd-1lteuvptnaq2n",
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://bknuuwb9o4.execute-api.us-east-2.amazonaws.com/prod",
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_ohT6PbToK",
        APP_CLIENT_ID: "6jscsd01u15ohvngchqb6lufle",
        IDENTITY_POOL_ID: "us-east-2:2b933378-dd68-4a4a-bc01-c556655de62b",
    },
};

const config = {
    MAX_ATTACHMENT_SIZE: 5000000,
    ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
};

export default config;