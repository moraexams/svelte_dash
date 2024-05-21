import { env } from '$env/dynamic/private';

export const dbCredentials: {
	url: string;
	authToken?: string;
} = {
	url: '',
	authToken: undefined
};

if (env.DATABASE_URL !== undefined) {
	console.log('using env.DATABASE_URL as databaseURL');
	dbCredentials.url = env.DATABASE_URL;
} else if (env.TURSO_DATABASE_URL !== undefined && env.TURSO_DATABASE_AUTH_TOKEN !== undefined) {
	console.log('using env.TURSO_DATABASE_URL as databaseURl');
	dbCredentials.url = env.TURSO_DATABASE_URL;
	console.log('using env.TURSO_DATABASE_AUTH_TOKEN as authToken');
	dbCredentials.authToken = env.TURSO_DATABASE_AUTH_TOKEN;
} else {
	console.log('env.DATABASE_URL is undefined');
	console.log('env.TURSO_DATABASE_URL & env.TURSO_DATABASE_AUTH_TOKEN are undefined');
	process.exit(1);
}
