// Writing booster plan for the retake (starts Thursday 19 November 2026).
// Based on the 9 November result: Listening 80, Reading 74, Speaking 85, Writing 72.
// Pearson skills profile: everything full or near full EXCEPT Extended Writing (Write Essay),
// with the advice: support main ideas with explanations and examples, use persuasive techniques,
// embed paraphrases appropriately, write effective conclusions.
// So essays carry most of the volume; speaking and the high-weight reproduce tasks get short daily maintenance.
window.PLAN = {
 name:'Writing booster',
 startDate:'2026-11-19',
 testDate:'2026-11-26',
 lastResult:{date:'2026-11-09',Listening:80,Reading:74,Speaking:85,Writing:72,Overall:78},
 targets:{Speaking:88,Writing:86,Reading:74,Listening:80},
 days:[
 {date:'2026-11-19',title:'Day 1: diagnose your essay',focus:'Pearson rated your essay (Extended Writing) as your only real gap. Today you learn the four things Pearson asked for, then write two essays so the coach can see exactly which of the four is missing.',blocks:[
  {id:'b1-clinic',kind:'read',title:'Essay clinic: the four fixes (20 min)',mins:20,links:[['clinic','Read the four fixes and the strong versus weak examples'],['samples','Read Essay 1 and Essay 2 in Sample answers once']]},
  {id:'b1-ess',kind:'drill',title:'Two timed essays (diagnosis)',mins:45,tasks:[['WE',2]]},
  {id:'b1-para',kind:'read',title:'Paragraph builder: 3 body paragraphs',mins:20,links:[['clinic','Build 3 body paragraphs: claim, reason, specific example, link back']]},
  {id:'b1-keep',kind:'drill',title:'Maintenance: Repeat Sentence and dictation',mins:15,tasks:[['RS',6],['WFD',6]]}]},
 {date:'2026-11-20',title:'Day 2: body paragraphs that argue',focus:'Every body paragraph needs a claim, a reason (because, this means), a specific example (a name, a place or a number) and a final sentence that links back to your position.',blocks:[
  {id:'b2-para',kind:'read',title:'Paragraph builder: 4 body paragraphs',mins:25,links:[['clinic','Aim for a pass on all four checks in each paragraph']]},
  {id:'b2-ess',kind:'drill',title:'Two timed essays',mins:45,tasks:[['WE',2]]},
  {id:'b2-keep',kind:'drill',title:'Maintenance: speaking',mins:20,tasks:[['RA',3],['RS',6],['DI',2]]}]},
 {date:'2026-11-21',title:'Day 3: persuasion and paraphrase',focus:'Persuasive techniques: concede then rebut, cause and effect chains, and evidence words (research shows, data suggests). Paraphrase the prompt in your introduction instead of copying it.',blocks:[
  {id:'b3-clinic',kind:'read',title:'Essay clinic: persuasion and paraphrase drills',mins:20,links:[['clinic','Do the paraphrase drill on three prompts']]},
  {id:'b3-ess',kind:'drill',title:'Two timed essays',mins:45,tasks:[['WE',2]]},
  {id:'b3-sum',kind:'drill',title:'Summaries and dictation (keep these at full marks)',mins:30,tasks:[['SWT',1],['SST',1],['WFD',8]]}]},
 {date:'2026-11-22',title:'Day 4: conclusions that finish the argument',focus:'A strong conclusion restates your position in new words, pulls your two reasons together, and ends with a recommendation or implication. It never adds a brand new idea and never repeats the introduction word for word.',blocks:[
  {id:'b4-conc',kind:'read',title:'Conclusion builder: 4 conclusions',mins:20,links:[['clinic','Write 4 conclusions and pass all checks']]},
  {id:'b4-ess',kind:'drill',title:'Two timed essays',mins:45,tasks:[['WE',2]]},
  {id:'b4-keep',kind:'drill',title:'Maintenance: open speaking and note taking',mins:25,tasks:[['RL',2],['RTS',1],['SGD',1],['ASQ',3]]}]},
 {date:'2026-11-23',title:'Day 5: timed Part 1',focus:'A full Part 1 under exam timing, then one more essay. Check that your essay habits hold under pressure.',blocks:[
  {id:'b5-mock',kind:'mock',title:'Timed Part 1 mock (Speaking and Writing)',mins:75,scope:'1'},
  {id:'b5-ess',kind:'drill',title:'One essay after the mock',mins:22,tasks:[['WE',1]]},
  {id:'b5-gap',kind:'gap',title:'Gap drill (auto-picked)',mins:20}]},
 {date:'2026-11-24',title:'Day 6: essay sprint',focus:'Three timed essays on different prompt types: discuss both views, agree or disagree, and causes and solutions. Change the opening words of sentences 1, 4 and 15 every time.',blocks:[
  {id:'b6-ess',kind:'drill',title:'Three timed essays',mins:66,tasks:[['WE',3]]},
  {id:'b6-keep',kind:'drill',title:'Maintenance: Read Aloud and Repeat Sentence',mins:15,tasks:[['RA',3],['RS',6]]},
  {id:'b6-gap',kind:'gap',title:'Gap drill (auto-picked)',mins:20}]},
 {date:'2026-11-25',title:'Day 7: light polish, then rest',focus:'One calm essay, a short speaking warm up, and a final read of the clinic. Sleep matters more than another essay.',blocks:[
  {id:'b7-ess',kind:'drill',title:'One essay',mins:22,tasks:[['WE',1]]},
  {id:'b7-keep',kind:'drill',title:'Speaking warm up',mins:15,tasks:[['RA',2],['RS',4],['DI',1]]},
  {id:'b7-review',kind:'read',title:'Final review (10 min), then rest',mins:10,links:[['clinic','Re-read the four fixes once'],['samples','Re-read one sample essay']]}]}
 ],
 testDay:['Sleep 7 to 8 hours. Light breakfast, water, arrive 30 minutes early with your passport.','Warm up your voice on the way: read something aloud for 5 minutes.','Essay: spend 2 minutes planning your position, two reasons and one specific example for each.','Each body paragraph: claim, reason, specific example (a name, place or number), then link back to your position.','Conclusion: restate your position in new words, combine both reasons, end with a recommendation. No new ideas.','Keep 3 minutes to check word count (220 to 280), spelling and one consistent spelling style.','Summaries, Repeat Sentence and dictation are already at full marks: do them exactly as you did on 9 November.','Speaking: start within 3 seconds of the tone, keep going, never restart a sentence.']
};
// Typical points per item in a real test, used to weight estimated skill scores like the exam does.
window.TYPICAL_POINTS={RA:50,RS:13,DI:16,RL:16,ASQ:1,RTS:16,SGD:16,SWT:9,WE:26,RFIBD:4,RMCMA:2.5,RO:4,RFIBDD:3.5,RMCSA:1,SST:12,LMCMA:2.5,LFIB:5,HCS:1,LMCSA:1,SMW:1,HIW:3.5,WFD:10};
