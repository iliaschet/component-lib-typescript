import React from 'react'

import { addDecorator } from '@storybook/react'
import { withMuiTheme } from "@harelpls/storybook-addon-materialui"

// import {lightTheme, darkTheme} from './theme'
import {MUIButton} from './MUIButton'

// addDecorator(withMuiTheme({
//   "Custom light theme": lightTheme,
//   "Custom dark theme": darkTheme
// }))

export default {
  title: "My/Component",
  decorators: [withMuiTheme()]
}

// for individual story with default themes
export const MyStory = () => <MUIButton />
MyStory.story = {
  decorators: [withMuiTheme()]
}
