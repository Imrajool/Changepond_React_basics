import { render, screen } from '@testing-library/react';
import App from './App';
import SumComp from './components/SumComp';
import GreetComp from './components/GreetComp';
import { fireEvent } from '@testing-library/react';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test("Adding two numbers",()=>{
//   expect(SumComp(10,20)).toBe(30)
// })

// test("Greet",()=>{
//     render(<GreetComp/>)
//     const title = screen.getByText("Good Afternoon")
//     expect(title).toBeInTheDocument();
// })

// test("Greet",()=>{
//     render(<GreetComp/>)
//     const title = screen.getByTitle("Image")
//     expect(title).toBeInTheDocument();
// })

// test("Input check",()=>{
//     render(<GreetComp/>)
//     const inputCheck = screen.getByRole("textbox")
//     expect(inputCheck).toBeInTheDocument();
//     const placeholderCheck = screen.getByPlaceholderText("Enter name")
//     expect(placeholderCheck).toBeInTheDocument();

//     expect(inputCheck).toHaveAttribute("name","username")
//     expect(inputCheck).toHaveAttribute("id","UserID")
// })


// describe("API test case group",()=>{
//     test("test case 1",()=>{
//         render(<GreetComp/>)
//         const checkInput = screen.getByRole("textbox")
//         expect(checkInput).toHaveAttribute("name","username")
//     })

//     test("test case 2",()=>{
//         render(<GreetComp/>)
//         const checkInput = screen.getByRole("textbox")
//         expect(checkInput).toHaveAttribute("name","username")
        
//     })
// })


// describe("UI test case group",()=>{
//     test("test case 3",()=>{
//         render(<GreetComp/>)
//         const checkInput = screen.getByRole("textbox")
//         expect(checkInput).toBeInTheDocument()
//     })

//     test("test case 4",()=>{
//         render(<GreetComp/>)
//         const checkInput = screen.getByRole("textbox")
//         expect(checkInput).toBeInTheDocument()
//     })

//     describe("Nested UI test case",()=>{
//         test("nested test case",()=>{
//         render(<GreetComp/>)
//         const checkInput = screen.getByRole("textbox")
//         expect(checkInput).toBeInTheDocument()
//     })
//     })
// })

 
test("click event test case",()=>{
  render(<GreetComp/>);
  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(screen.getByText("updated data")).toBeInTheDocument();
})