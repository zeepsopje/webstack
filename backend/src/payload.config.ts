import path from 'path'
import payload from 'payload';

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import Users from './collections/Users'
import Pages from './collections/Pages'
import Media from './collections/Media'

import Nav from './globals/Nav';

export default buildConfig({
	admin: {
		user: Users.slug,
		bundler: webpackBundler(),
	},
	globals: [Nav],
	endpoints: [
		{
			path: '/globals',
			method: 'get',
			handler: async (req, res) => {
				const nav = await payload.findGlobal({ slug: 'nav' });

				res.json(nav);
			}

		}
	],
	editor: slateEditor({}),
	collections: [Users, Pages, Media],
	typescript: {
		outputFile: path.resolve(__dirname, 'payload-types.ts'),
	},
	graphQL: {
		schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
	},
	csrf: [
		process.env.FRONTEND_URL,
		process.env.BACKEND_URL,
	],
	plugins: [payloadCloud()],
	db: mongooseAdapter({
		url: process.env.DATABASE_URI,
	}),
})
