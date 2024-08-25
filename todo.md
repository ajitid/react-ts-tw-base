- if upgrading to react 19, use react compiler and add eslint plugin for it (see react conf keynote)
  - use react router v7 alongwith swr (see @shuding\_ tweets)
- see if you need to use any of these new TS rules (or if they're automatically imported with current config)
- Vite recommends additional set of eslint rules, [see readme](./README.md)
- for image loading, see https://x.com/mattrothenberg/status/1818670078570762535
- og opengraph and twitter cards: https://www.redblobgames.com/making-of/little-things/#site-opengraph
- see button props here
  - https://github.com/ajitid/react-spring-v9-playground-2020/blob/master/src/elements/atoms/Button.tsx
  - other impl. https://github.com/ajitid/gapp/blob/main/packages/gapp-frontend/src/elements/atoms/button.tsx
- dark theme no flash
  - https://github.com/ajitid/gapp/blob/main/packages/gapp-frontend/src/pages/_document.tsx#L28
  - other impl. https://www.joshwcomeau.com/react/dark-mode/
- from https://github.com/ajitid/gapp/blob/32006cbc285ec9b3202379bf3877b5483ec743e9/packages/gapp-backend/src/services/db/types.ts#L26:

```ts
// rather than using never, we'll use this to give dev a hint of what is wrong
type ParserError<T extends string> = { error: true } & T
```
