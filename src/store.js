var store = {
  debug: true,
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
      },
      {
        name: 'white',
        background: '#ffffff',
        color: '#27313e'
      }
    ],
    currentFont: 'Karla',
    availableWeights: [
      {
        type: 'Light',
        light: true,
        italic: false,
        bold: false
      },
      {
        type: 'Light Italic',
        light: true,
        italic: true,
        bold: false
      },
      {
        type: 'Regular',
        light: false,
        italic: false,
        bold: false
      },
      {
        type: 'Regular Italic',
        light: false,
        italic: true,
        bold: false
      },
      {
        type: 'Bold',
        light: false,
        italic: false,
        bold: true
      },
      {
        type: 'Bold Italic',
        light: false,
        italic: true,
        bold: true
      },
      {
        type: 'Heavy',
        light: false,
        italic: false,
        bold: true
      },
      {
        type: 'Heavy Italic',
        light: false,
        italic: true,
        bold: true
      }
    ],
    selectedWeights: []
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
      reject('404. Theme not found')
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
      reject('404. Theme not found')
    })
  },
  addSelectedWeight (weight) {
    this.debug && console.log('addSelectedWeight triggered with: ', weight)
    this.state.selectedWeights.push(weight)
  },
  removeSelectedWeight (weight) {
    this.debug && console.log('removeSelectedWeight triggered with: ', weight)

    for (var i = 0; i < this.state.selectedWeights.length; i++) {
      let selectedWeight = this.state.selectedWeights[i]

      if (selectedWeight.type === weight.type) {
        this.state.selectedWeights.splice(i, 1)
      }
    }
  }
}

export default store
