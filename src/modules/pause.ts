export function pause(seconds:number):Promise<void>{
  return new Promise<void>((done)=>{
    setTimeout(done, seconds*1000);
  });
}
