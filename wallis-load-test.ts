import { step, TestSettings, By, beforeAll, afterAll } from '@flood/element'

export const settings: TestSettings = {
	// userAgent: 'flood-chrome-test',
	 loopCount: -1,
	actionDelay: 2, 
	// Automatically wait for elements before trying to interact with them
	waitUntil: 'visible',
}

export default () => {

	// If you want to do some actions before/after every single step, use beforeEach/afterEach
	// beforeEach(async browser => {})
	// afterEach(async browser => {})

	step('Start', async browser => {
		await browser.visit('https://survey.wallisgroup.com.au/SE/?st=3WxqDV8V6cwfPXCW7oW77uGm2jxOEPt89aFJEHGKx6Q%3D&tui=1631500438755&nocookie=')
	})

	// browser keyword can be shorthanded as anything that is descriptive to you.
	step('Step 1 Enter Survey', async browser => {
		const linkNext = await browser.findElement(By.css('#SurveyNavigationBottomControl_Next_ImageButton'))
		linkNext.click()
	})

	// browser keyword can be shorthanded as anything that is descriptive to you.
	step('Step 2 Hows your Day and next', async browser => {
		const buttonDay = await browser.findElement(By.css('#Q_Q1 > fieldset > div > div.questionContent > div.choiceList > div.vertical.radioCheckboxAlternateRow.radioButton > div.choice.choiceContainer > img'))
		buttonDay.click()

		const linkNext = await browser.findElement(By.css('#SurveyNavigationBottomControl_Next_ImageButton'))
		linkNext.click()
	})

	step('Step 3 Submit Survey', async browser => {
		const linkNext = await browser.findElement(By.css('#SurveyNavigationBottomControl_Next_ImageButton'))
		linkNext.click()
	})


}
