import {screen} from "@testing-library/react";

export const exist = (id:string)=>screen.queryByTestId(id);
export const noExist = (id:string)=>expect(screen.queryByTestId(id)).not.toBeInTheDocument();