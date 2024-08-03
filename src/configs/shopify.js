import '@shopify/shopify-api/adapters/node';
import {shopifyApi, ApiVersion, BillingInterval} from '@shopify/shopify-api';
import { restResources } from '@shopify/shopify-api/rest/admin/2024-07';
const shopify = shopifyApi({
    apiKey: process.env.SHOPIFY_API_KEY,
    apiSecretKey: process.env.SHOPIFY_API_SECRET,
    scopes: process.env.SHOPIFY_SCOPES,
    hostName: 'brave-hamster-supreme.ngrok-free.app',
    apiVersion: ApiVersion.January24,
    isEmbeddedApp: true,
    restResources,
});

export default shopify;
