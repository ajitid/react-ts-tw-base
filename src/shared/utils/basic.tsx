export const noop = () => {}

/**
 * [NOT FOR PRODUCTION] Takes an object and dumps it into JSX
 * Good for quick debugging
 */
export const jsonDump = (obj: unknown) => <pre>{JSON.stringify(obj, null, 2)}</pre>

export const onServer = typeof window !== 'object'
export const inDevelopment = import.meta.env.DEV
