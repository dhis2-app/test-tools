import {waitForElementToBeRemoved,screen} from '@testing-library/react';

/**
 * Pause test execution by `sec` seconds
 *
 * @example
 * ```javascript
 * await pause(0.2)
 * ```
 * @category Pause
 * */
export function pause(sec:number):Promise<void>{
  return new Promise<void>((done)=>{
    setTimeout(done, sec*1000);
  });
}

/**
 * Wait until loading dialog disappears within `sec` seconds
 * Assuming loading dialog has id `loading`
 *
 * @example
 * ```javascript
 * await loadingDone(2)
 * ```
 * @category Pause
 * */
export async function loadingDone(sec?:number):Promise<any>{
    let timeout = (sec||15)*1000;
    await pause(0.2);
    if (!screen.queryByTestId('loading')) return Promise.resolve();
    return waitForElementToBeRemoved(() => screen.queryAllByTestId('loading'),{timeout});
}
