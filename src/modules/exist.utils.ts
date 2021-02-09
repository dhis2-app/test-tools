import {screen} from "@testing-library/react";

/**
 * Check that element found by `id` exists in DOM
 *
 * @example
 * ```javascript
 * exist('searchBar')
 * ```
 * @category Exist
 * */
export const exist = (id:string)=>screen.queryByTestId(id);

/**
 * Check that element with `id` does not exist in DOM
 *
 * @example
 * ```javascript
 * notExist('loading')
 * ```
 * @category Exist
 * */
export const notExist = (id:string)=>expect(screen.queryByTestId(id)).not.toBeInTheDocument();