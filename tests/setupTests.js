import { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

// global.console = {
//   log: jest.fn(),
//   debug: console.debug,
//   trace: console.trace,
//   // map other methods that you want to use like console.table
// };
