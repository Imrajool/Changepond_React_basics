import { render,screen, } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import FormValComp from './FormValComp'

test("show typed name",()=>{
    render(<FormValComp/>)
    const finput=screen.getByPlaceholderText("Enter first name")
    userEvent.type(finput,"Anto")
})