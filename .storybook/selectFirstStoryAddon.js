// from https://stackoverflow.com/questions/53724555/specify-default-page-for-storybook
import addonAPI from '@storybook/addons'
import { STORIES_CONFIGURED } from '@storybook/core-events'

let firstLoad = true

addonAPI.register('edumentab/firstStory', storybookAPI => {
  storybookAPI.on(STORIES_CONFIGURED, () => {
    // when you enter a story, if you are just loading storybook up, default to a specific kind/story.
    if (firstLoad) {
      firstLoad = false // make sure to set this flag to false, otherwise you will never be able to look at another story.
      storybookAPI.selectStory('home', 'welcome')
    }
  })
})
