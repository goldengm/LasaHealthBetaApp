const Mixpanel = {
    init: jest.fn(),
    track: jest.fn(),
    identify: jest.fn(),
    alias: jest.fn(),
    people: {
      set: jest.fn(),
    },
  };
  
  export default Mixpanel;