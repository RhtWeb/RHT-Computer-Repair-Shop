import { createSafeActionClient } from 'next-safe-action'
import { z } from 'zod'
import type { NeonDbError } from '@neondatabase/serverless'

export const actionClient = createSafeActionClient({
    defineMetadataSchema() {
        return z.object({
            actionName: z.string(),
        })
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    handleServerError(e, utils) {
        // const { clientInput, metadata } = utils
        // console.log(e.cause?.constructor)

        if (e.cause?.constructor.name === 'NeonDbError') {
            const { code, detail } = e.cause as NeonDbError
            if (code === "23505") {
                // feedback displayed for user 
                // not reported to Sentry
                return `Unique entry required. ${detail}`
            }
        }

        if (e.cause?.constructor.name === 'NeonDbError') {
            return "Database Error: Your data did not save. Support will be notified."
        }

        return e.message
    }
})