import { ReactNode } from 'react'

// WC = WithChildren
// usage: FC<WC> or FC<WC<Props>>
export type WC<P = unknown> = P & { children: ReactNode }

// Stricter Omit
export type Except<ObjectType, KeysType extends keyof ObjectType> = Pick<
  ObjectType,
  Exclude<keyof ObjectType, KeysType>
>
