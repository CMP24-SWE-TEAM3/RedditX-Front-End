// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

import { configure } from "enzyme";
// import Adapter from 'enzyme-adapter-react-16'; // only use for React 16
import Adapter from "@zarconontol/enzyme-adapter-react-18";
configure({ adapter: new Adapter() });
