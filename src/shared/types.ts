import type { ReactNode } from 'react'

/**
 * WC = WithChildren
 *
 * @example use along with other props
 *
 * ```tsx
 * interface Props extends WC {
 *   // other props
 * }
 *
 * export const BasicLayout: FC<Props> = (props) => {
 *   // ...
 * }
 * ```
 *
 * @example use directly
 *
 * ```tsx
 * export const BasicLayout: FC<WC> = ({ children }) => {
 *   return <main>{children}</main>
 * }
 * ```
 */
export interface WC {
  children: ReactNode
}

// Stricter Omit
export type Except<ObjectType, KeysType extends keyof ObjectType> = Pick<
  ObjectType,
  Exclude<keyof ObjectType, KeysType>
>
