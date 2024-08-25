// If the util is not a part of a group and is small enough, put it here.

export const noop = () => {}

/**
 * [NOT FOR PRODUCTION] Takes an object and dumps it into JSX
 * Good for quick debugging
 */
export const jsonDump = (obj: unknown) => <pre>{JSON.stringify(obj, null, 2)}</pre>
