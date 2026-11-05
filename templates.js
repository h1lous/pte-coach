// Templates: structure and short frames. Essay structure follows the widely taught
// "4 paragraphs, 15 sentences" method (as shown by Language Academy); wording below is our own.
window.TEMPLATES = {
essay:{
 intro:'Four paragraphs, fifteen sentences, about 250 to 280 words. Every sentence has a job, so you never wonder what to write next. Keep the frames short: most of your words must be about the topic, because Pearson gives Content 0 to essays that rely on memorised material.',
 paras:[
  {name:'Introduction',target:'4 sentences · 60 to 70 words',sentences:4,words:[60,70],steps:[
   ['General statement','One sentence about the broad topic, not the question.',['[Topic] has become an integral part of modern life.','[Topic] plays an important role in today\'s society.']],
   ['One side','What one group believes, or the first side of the issue.',['Some people argue that [view A].','While [topic] offers remarkable benefits, ...']],
   ['Other side (or rephrase the question)','The opposite view, or the question in your own words.',['However, others believe that [view B].','It cannot be denied that [concern].']],
   ['Plan and position','What the essay will do. Give your opinion here only if the question asks for it.',['This essay will discuss both views and argue that [position].','This essay will explain why I largely agree with this statement.']]]},
  {name:'Body 1: the side you favour',target:'5 sentences · 85 to 95 words',sentences:5,words:[85,95],steps:[
   ['Introduce the side','A topic sentence for the paragraph.',['To begin with, [topic] offers a number of advantages.','To commence with, there are strong reasons to support [view].']],
   ['Point 1','Your strongest reason.',['One of the main benefits is that [point].','The most important reason is that [point].']],
   ['Explain it','Why or how it matters.',['This means that [explanation].','This is because [reason], and as a result [effect].']],
   ['Example','A specific, believable example (a study, a survey, an event, a place).',['For instance, a recent study by [university] found that [finding].','For example, in Australia, [specific case].']],
   ['Point 2','A second reason; no explanation needed.',['Furthermore, [point 2].','In addition, [point 2].']]]},
  {name:'Body 2: the other side',target:'4 sentences · 70 to 80 words',sentences:4,words:[70,80],steps:[
   ['Introduce the other side','Turn to the opposing view or a disadvantage.',['On the other hand, [topic] also has certain drawbacks.','Nevertheless, some concerns deserve attention.']],
   ['Point','The main opposing reason.',['The most serious concern is that [point].','One major disadvantage is that [point].']],
   ['Explain it','Why it matters.',['As a result, [effect].','In other words, [explanation].']],
   ['Example','A specific example for this side.',['For example, [specific case].','As an illustration, [specific case].']]]},
  {name:'Conclusion',target:'2 sentences · 35 to 45 words',sentences:2,words:[35,45],steps:[
   ['Overall summary','Restate your position and the main reasons in new words.',['In conclusion, although [view B], [position] because [main reason].','To sum up, the advantages of [topic] clearly outweigh its disadvantages.']],
   ['Suggestion or prediction','A recommendation or a look ahead.',['Therefore, governments should [recommendation].','In the future, [prediction].']]]}],
 types:[
  ['Agree or disagree / to what extent','Opinion needed. Body 1 = reasons you agree; Body 2 = the opposing view, then why it is weaker.'],
  ['Discuss both views (and give your opinion)','Body 1 = the view you favour; Body 2 = the other view. Opinion only if the question asks for it.'],
  ['Advantages and disadvantages / outweigh','Body 1 = advantages; Body 2 = disadvantages. Say which outweighs in the introduction and conclusion if asked.'],
  ['Causes and solutions / problems and effects','Body 1 = causes (or problems); Body 2 = solutions (or effects). No "other side" needed.'],
  ['Describe and decide (e.g. a new invention)','Name and briefly describe the thing in the introduction; Body 1 = benefits; Body 2 = harms; verdict in conclusion.']],
 connectors:[['Start a body','To begin with · To commence with · Firstly'],['Add','Furthermore · Additionally · Moreover · In addition'],['Explain','This means that · This is because · As a result'],['Example','For instance · For example · As an illustration'],['Other side','On the other hand · However · Nevertheless · On the contrary'],['Conclude','In conclusion · To sum up · Overall · Therefore']],
 swaps:[['big','significant'],['good','beneficial'],['bad','detrimental, harmful'],['a lot of','a number of, a significant amount of'],['people','individuals'],['kids','children'],['get','obtain'],['help','assist'],['show','reveal, demonstrate'],['think','believe']],
 rules:['No contractions: do not, it is, cannot.','Choose Australian or British or American spelling and stay consistent (organisation or organization, not both).','Use each connector only once.','Simple, controlled sentences of 15 to 20 words beat long ones you cannot control.','Not sure how to spell a word? Use one you can spell; there is no spell check.'],
 sample:{prompt:'Technology has made it easier than ever to work from anywhere. Do the advantages of remote work outweigh the disadvantages? Support your answer with reasons and examples.',
  paras:[
  'Flexible working arrangements have become a defining feature of the modern workplace. Many employees value the freedom to work from home, as it removes long commutes and allows a better balance between work and family life. However, critics argue that it weakens teamwork and makes learning harder for junior staff. This essay will examine both views and argue that the advantages of remote work clearly outweigh its disadvantages.',
  'To begin with, working from home offers several important benefits. One of the main advantages is that staff save a significant amount of time and money that would otherwise be spent travelling. This means that they can start the day with more energy and devote extra hours to focused, high-quality work. For instance, a recent survey of office workers in Brisbane found that most respondents completed demanding reports faster at home than in an open-plan office. Furthermore, companies can reduce their spending on office space and recruit talented individuals who live far from the city.',
  'On the other hand, remote work can create certain challenges. The most serious concern is that communication becomes slower when colleagues cannot speak face to face. As a result, new graduates may miss out on the informal guidance they would normally receive from experienced staff. For example, a junior engineer working online may wait several hours for an answer that would take only seconds in person, which slows down their progress.',
  'In conclusion, although remote work can reduce spontaneous collaboration, its advantages for productivity, wellbeing and recruitment are far greater. Organisations should therefore adopt hybrid models that combine the flexibility of home-based work with regular in-person days for training and teamwork.']}},
swt:{
 intro:'One sentence, 5 to 75 words; aim for 30 to 50. Exactly one full stop, at the end. Semicolons are fine inside the sentence; just never type a second full stop, question mark or exclamation mark. Content is worth 4 of the 9 points, so cover the main idea, the turning point and the conclusion, in your own words.',
 steps:[['Topic','Find the main idea, usually in the first one or two sentences.'],['Turning point','Look for however, but, although, yet: the complication or contrast.'],['Conclusion','The last sentence or two: the result, solution or implication.'],['Join','Link the three ideas into one sentence with connectors, paraphrasing key words.'],['Check','One full stop? 5 to 75 words? Subject and verb agree? Spelling?']],
 frames:[
  ['Contrast frame (most passages)','Although [main idea], [contrast or complication], which [effect], so [conclusion].'],
  ['Cause and effect frame','[Topic] [main claim] because [reason], and as a result [effect], although [limitation or contrast].'],
  ['Neutral frame (for descriptive passages)','[Topic] [main idea], including [key point 1] and [key point 2], which suggests that [conclusion].']],
 connectors:'although · while · whereas · because · since · which · so · and therefore · as a result · despite · ; however, · ; hence,',
 sample:{source:'Remote work and city centres (built-in passage)',answer:'Although remote work has reduced demand for city centre offices and hurt businesses reliant on commuters, researchers argue that central business districts are not disappearing but transforming, as hybrid work continues and empty offices are converted into homes.'}},
sst:{
 intro:'Summarize Spoken Text: 50 to 70 words (aim for 55 to 65), two or three sentences. Form 0 below 40 or above 100 words. Spelling is scored, so proofread.',
 frame:'The speaker discussed [topic]. They explained that [key point 1] and [key point 2], because [reason]. In addition, [key point 3]. Finally, they concluded that [conclusion].',
 notes:'While listening: topic in the first 10 seconds, then 4 to 6 keywords (nouns and numbers), then the conclusion. Write from your notes, not from memory of exact sentences.',
 sample:{source:'The history of the weekend (built-in lecture)',answer:'The lecture explained that the two-day weekend is a recent invention. During the Industrial Revolution, factory workers had only Sunday off and often skipped Mondays, so employers offered a Saturday half day in return for attendance. Later, manufacturers and trade unions promoted a full two-day weekend, which became standard by the mid-twentieth century.'}},
rts:{
 caution:'A popular Respond to a Situation template begins "The situation presented here is about..." and narrates the prompt. The official rubric marks responses that rely heavily on prompt language at 2 out of 6 or below, rewards language that goes beyond the prompt, and gives memorised material Content 0. Speak TO the person instead.',
 frame:'Greet → acknowledge → explain (in your own words) → apologise or give a reason → offer a solution or make a request → polite close.',
 example:'Hi Sam, I\'m really sorry, but I have some bad news about your lecture notes. I accidentally spilled coffee on a few pages, and some parts are now hard to read. I know your exam is next week, so I\'ve already typed up my own notes for those lectures, and I can print a clean copy for you today. Again, I apologise, and I\'ll be much more careful next time.'}
};
// Short generic phrases used to estimate how much of a response is template language.
window.FRAME_PHRASES=['has become an integral part of modern life','plays an important role in today','in today\'s world','some people argue that','others believe that','it cannot be denied that','this essay will discuss','this essay will examine','both views','to begin with','to commence with','offers a number of advantages','one of the main benefits is that','one of the main reasons','this means that','this is because','for instance','for example','a recent study by','a research conducted by','furthermore','in addition','additionally','moreover','on the other hand','the most serious concern is that','as a result','in other words','as an illustration','in conclusion','to sum up','overall','therefore','in the future','the situation presented here is about','while considering this','we should also focus on','it is important to take into account that','we need to address the key factors','this situation should be handled with a focus on','the image shows','the graph shows','the chart shows','the speaker discussed','the lecture was about','the speaker talked about','they also mentioned','the discussion was about','the passage explains that','it is clear that','in my opinion','i strongly believe that','largely agree','partially agree'];
