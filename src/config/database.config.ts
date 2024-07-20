import { registerAs } from "@nestjs/config";

export default registerAs(
    'databse',
    (): Record<string, any> => ({
        mongo : {
            uri:process.env.MONGO_URI,
            options: process.env.MONGO_OPTIONS
        }
    })
);