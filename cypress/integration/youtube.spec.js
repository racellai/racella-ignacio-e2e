import {YoutubePage} from "../pages/youtube_page"

const youtubePage = new YoutubePage()
var search_text = 'The whole working-from-home thing — Apple'

it('youtube - end to end youtube test', () => {

    youtubePage.navigate('https://www.youtube.com')
    youtubePage.inputSearchText(search_text)
    youtubePage.submitSearch()
    youtubePage.clickLink(search_text)
    youtubePage.verifySearchLandingPage(search_text)
    youtubePage.verifyUploader()

})