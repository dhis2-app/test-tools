import {render, screen} from "@testing-library/react";
import {ReactElement} from "react";
import {loadingDone} from "./pause.utils";
import {textsWait} from "./text.utils";



export let debug = ()=>screen.debug(null as any,10000000);

export async function renderComponent(component:ReactElement, toContain: string[]):Promise<any>{
    let main = render(component);
    await loadingDone();
    await textsWait(toContain);
    return main;
}