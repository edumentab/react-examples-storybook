// This file is references in package.json.jest.setupFilesAfterEnv

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
