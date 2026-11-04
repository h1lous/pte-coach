// Intensive 5-day programme before the test (Monday 9 November 2026).
// Weighting logic: Speaking 88 and Writing 86 are the hardest targets, so Read Aloud, Repeat Sentence,
// Write Essay, Summarize Written Text and Write from Dictation (the biggest point sources) get the most volume.
window.PLAN = {
 testDate:'2026-11-09',
 targets:{Speaking:88,Writing:86,Reading:65,Listening:75},
 days:[
 {date:'2026-11-04',title:'Wednesday: setup and baseline',focus:'Find out exactly where you stand today. Do the blocks in order; the reports set tomorrow\'s priorities.',blocks:[
  {id:'d1-setup',kind:'read',title:'Setup (15 min)',mins:15,links:[['settings','Test your voice capture until 100% of the test sentence is recognised'],['templates','Read the essay, Summarize Written Text and Summarize Spoken Text templates once']]},
  {id:'d1-spk',kind:'drill',title:'Speaking baseline',mins:35,tasks:[['RA',3],['RS',6],['DI',2],['RL',1],['RTS',1],['SGD',1],['ASQ',3]]},
  {id:'d1-wri',kind:'drill',title:'Writing baseline',mins:45,tasks:[['SWT',1],['WE',1],['SST',1],['WFD',6]]},
  {id:'d1-rl',kind:'drill',title:'Reading and listening check',mins:25,tasks:[['RFIBD',2],['RO',1],['RFIBDD',1],['HIW',1],['LFIB',1],['HCS',1]]}]},
 {date:'2026-11-05',title:'Thursday: speaking engine',focus:'Read Aloud and Repeat Sentence carry the most Speaking points. Today builds fluency first, then the open tasks, then a timed Part 1.',blocks:[
  {id:'d2-flu',kind:'drill',title:'Fluency engine: Read Aloud and Repeat Sentence',mins:40,tasks:[['RA',6],['RS',12]]},
  {id:'d2-open',kind:'drill',title:'Open speaking: images, lectures, situations, discussions',mins:45,tasks:[['DI',4],['RL',2],['RTS',3],['SGD',2]]},
  {id:'d2-wfd',kind:'drill',title:'Write from Dictation sprint',mins:15,tasks:[['WFD',12]]},
  {id:'d2-wri',kind:'drill',title:'Essay plus summary',mins:35,tasks:[['WE',1],['SWT',1]]},
  {id:'d2-gap',kind:'gap',title:'Gap drill (auto-picked from your weakest tasks)',mins:20},
  {id:'d2-mock',kind:'mock',title:'Timed Part 1 mock (Speaking and Writing)',mins:75,scope:'1'}]},
 {date:'2026-11-06',title:'Friday: writing engine',focus:'Essay and summaries under strict timing, plus listening accuracy. Use the essay planner every time.',blocks:[
  {id:'d3-ess',kind:'drill',title:'Two timed essays',mins:45,tasks:[['WE',2]]},
  {id:'d3-sum',kind:'drill',title:'Summaries: written and spoken',mins:45,tasks:[['SWT',2],['SST',2]]},
  {id:'d3-wfd',kind:'drill',title:'Write from Dictation sprint',mins:15,tasks:[['WFD',12]]},
  {id:'d3-spk',kind:'drill',title:'Speaking circuit',mins:35,tasks:[['RA',4],['RS',8],['DI',2],['RTS',1],['SGD',1]]},
  {id:'d3-lis',kind:'drill',title:'Listening accuracy',mins:30,tasks:[['HIW',2],['LFIB',2],['SMW',1],['HCS',1],['LMCMA',1],['LMCSA',1]]},
  {id:'d3-gap',kind:'gap',title:'Gap drill',mins:20}]},
 {date:'2026-11-07',title:'Saturday: full mock and repair',focus:'Sit a complete test in exam conditions in the morning, then repair the weakest components the report shows.',blocks:[
  {id:'d4-mock',kind:'mock',title:'Full mock test (new AI paper)',mins:135,scope:'all',src:'ai'},
  {id:'d4-gap1',kind:'gap',title:'Repair session 1',mins:25},
  {id:'d4-read',kind:'drill',title:'Reading accuracy',mins:25,tasks:[['RFIBD',3],['RFIBDD',2],['RO',2],['RMCSA',1]]},
  {id:'d4-gap2',kind:'gap',title:'Repair session 2',mins:25}]},
 {date:'2026-11-08',title:'Sunday: polish and rest',focus:'Short, sharp practice in the morning, then stop by the afternoon. Sleep matters more than one more essay.',blocks:[
  {id:'d5-spk',kind:'drill',title:'Speaking polish',mins:30,tasks:[['RA',4],['RS',6],['DI',2],['RTS',1],['SGD',1],['RL',1]]},
  {id:'d5-wri',kind:'drill',title:'Writing polish',mins:35,tasks:[['WE',1],['SWT',1],['WFD',8]]},
  {id:'d5-gap',kind:'gap',title:'Final gap drill',mins:20},
  {id:'d5-review',kind:'read',title:'Review (15 min), then rest',mins:15,links:[['templates','Re-read the essay map and the connector list once'],['progress','Look at your weakest three tasks, then close the laptop']]}]}
 ],
 testDay:['Sleep 7 to 8 hours. Light breakfast, water, arrive 30 minutes early with your passport.','Warm up your voice on the way: read a news article aloud for 5 minutes.','Speak at normal volume and pace, start within 3 seconds of the tone, never restart a sentence.','Repeat Sentence and Read Aloud: fluency beats perfection. Keep going.','Essay: plan 2 minutes, write the 15-sentence map, keep 3 minutes to check word count and spelling.','Summarize Written Text: one full stop only. Count your words.','Write from Dictation: type every word you caught, then check plurals and spelling.','Reading: answer everything; unanswered questions score zero.']
};
// Typical points per item in a real test, used to weight estimated skill scores like the exam does.
window.TYPICAL_POINTS={RA:50,RS:13,DI:16,RL:16,ASQ:1,RTS:16,SGD:16,SWT:9,WE:26,RFIBD:4,RMCMA:2.5,RO:4,RFIBDD:3.5,RMCSA:1,SST:12,LMCMA:2.5,LFIB:5,HCS:1,LMCSA:1,SMW:1,HIW:3.5,WFD:10};
