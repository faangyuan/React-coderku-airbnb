const theme = {
  color: {
    primary: '#ff385c',
    secondary: '#00848a'
  },
  text: {
    primaryColor: '#222',
    secondaryColor: '#717171'
  },
  mixins: {
    boxShodow: `
    transition: box-shadow 200ms ease;
        &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, .1);
    }
    `
  }
}

export default theme