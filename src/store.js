var store = {
  debug: false,
  state: {
    theme: 'dark',
    themes: [
      {
        name: 'dark',
        background: '#27313e',
        color: '#e5e5ea'
      },
      {
        name: 'light',
        background: '#e8e9df',
        color: '#27313e'
      }
    ]
  },
  setTheme (theme) {
    this.debug && console.log('setTheme triggered with: ', theme)
    return new Promise((resolve, reject) => {
      for (var i = 0; i < this.state.themes.length; i++) {
        if (this.state.themes[i].name === theme) {
          this.state.theme = theme
          resolve(this.state.themes[i])
        }
      }
      reject('Theme not found')
    })
  },
  getTheme (theme) {
    this.debug && console.log('getTheme triggered with: ', theme)
    return new Promise((resolve, reject) => {
      for (var i = 0; i < this.state.themes.length; i++) {
        if (this.state.themes[i].name === theme) {
          resolve(this.state.themes[i])
        }
      }
      reject('Theme not found')
    })
  }
}

export default store
