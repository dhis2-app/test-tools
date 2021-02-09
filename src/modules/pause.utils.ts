import {waitForElementToBeRemoved,screen} from '@testing-library/react';

export function pause(seconds:number):Promise<void>{
  return new Promise<void>((done)=>{
    setTimeout(done, seconds*1000);
  });
}

export async function loadingDone(timeOut?:number):Promise<any>{
    let timeout = (timeOut||15)*1000;
    await pause(0.2);
    if (!screen.queryByTestId('loading')) return Promise.resolve();
    return waitForElementToBeRemoved(() => screen.queryAllByTestId('loading'),{timeout});
}
