import {render, screen} from "@testing-library/react";
import {ReactElement} from "react";
import {loadingDone} from "./pause.utils";
import {textsWait} from "./text.utils";


/**
 * Show current state of the test DOM enviroment
 *
 * @example
 * ```javascript
 * debug()
 * ```
 * @category Render
 * */
export let debug = ()=>screen.debug(null as any,10000000);

/**
 * Render dynamic component and wait for `texts` to appear
 *
 * @example
 * ```javascript
 * renderComponent(<MainPage/>,['Messages','Friends'])
 * ```
 * @category Render
 * */
export async function renderComponent(component:ReactElement, texts: string[]):Promise<any>{
    let main = render(component);
    await loadingDone();
    await textsWait(texts);
    return main;
}