export type User = {
    uid: string;
    email: string;
    userNmae: string;
};

export type GoogleUser = {
    uid: string;
    accessToken: string;
    auth: any;
    displayName: string;
    email: string;
    emailVerified: boolean;
    isAnonymous: boolean;
    metadata: {
        createdAt: string;
        creationTime: string;
        lastLoginAt: string;
        lastSignInTime: string;
    };
    phoneNumber: string;
    photoURL: string;
    proactiveRefresh: any;
    providerData: any;
    providerId: string;
    reloadUserInfo: any;
    stsTokenManager: any;
    tenantId: string;
};
