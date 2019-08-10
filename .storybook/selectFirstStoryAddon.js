// from https://stackoverflow.com/questions/53724555/specify-default-page-for-storybook
import addonAPI from '@storybook/addons'
import {
  STORY_CHANGED,
  SET_STORIES,
  STORIES_CONFIGURED,
} from '@storybook/core-events'

let firstLoad = true
console.log('initial')
addonAPI.register('edumentab/firstStory', storybookAPI => {
  storybookAPI.on(STORIES_CONFIGURED, (kind, story) => {
    // when you enter a story, if you are just loading storybook up, default to a specific kind/story.
    if (firstLoad) {
      firstLoad = false // make sure to set this flag to false, otherwise you will never be able to look at another story.
      storybookAPI.selectStory('home', 'welcome')
    }
  })
})
