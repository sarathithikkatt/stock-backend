import { registerAs } from "@nestjs/config";

export default registerAs(
    'stock',
    (): Record<string, any> => ({
        authKey : process.env.STOCK_API_KEY || '',
        apiUrl: parseInt(process.env.STOCK_API_URL) || ''
    })
);