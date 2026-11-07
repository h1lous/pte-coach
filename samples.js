// Writing sample paper: model answers in the student templates.
window.SAMPLES={
"swt": [
{
"title": "Sample 1: Version A (passage has a \"however\")",
"passage": "For generations, homework has been regarded as an essential part of schooling. Parents and teachers have argued that it reinforces classroom learning, develops independence and builds the study habits students will need later in life. However, a large body of research suggests that the benefits depend heavily on age. For secondary students, moderate amounts of homework are associated with higher achievement. For primary school children, by contrast, studies have found little or no academic benefit, and long assignments can cause stress and family conflict while reducing time for play, reading for pleasure and sleep. In response, a number of schools have replaced traditional worksheets with shorter, purposeful tasks, such as reading with a family member or a short practical activity. Supporters say this approach keeps the positive habits that homework is meant to build, without the costs.",
"template": "Although [TOPIC + main claim], [TURN], which/as [CAUSE or EFFECT], so [TAKEAWAY].",
"answer": "Although homework has traditionally been seen as essential for learning, research shows that it brings little benefit for young children, which suggests that schools should set shorter, purposeful tasks, so that students still build study habits without losing time for play and rest.",
"slots": [
[
"TOPIC + main claim",
"homework has traditionally been seen as essential for learning"
],
[
"TURN",
"research shows that it brings little benefit for young children"
],
[
"CAUSE or EFFECT",
"which suggests that schools should set shorter, purposeful tasks"
],
[
"TAKEAWAY",
"so that students still build study habits without losing time for play and rest"
]
]
},
{
"title": "Sample 2: Version B (problem and solution)",
"passage": "Noise is often overlooked as a form of pollution, yet the World Health Organization ranks it as one of the most significant environmental threats to health in Europe. Long-term exposure to traffic noise has been linked to disturbed sleep, high blood pressure and an increased risk of heart disease. As cities grow, the problem is worsening: more vehicles, round-the-clock construction and expanding flight paths mean that millions of residents are exposed to noise levels above recommended limits. Some cities have begun to respond. Quieter road surfaces can reduce traffic noise by several decibels, limits on construction hours protect sleep, and parks and trees absorb sound while making neighbourhoods more pleasant. Experts argue that noise should be treated as a public health priority in urban planning rather than an unavoidable cost of city life.",
"template": "[PROBLEM] is [getting worse / threatening X] because [CAUSE], so [SOLUTION] is needed to [GOAL].",
"answer": "Urban noise pollution is increasingly harming residents' sleep and heart health because traffic, construction and aircraft have grown with city populations, so quieter road surfaces, stricter building hours and more green space are needed to protect public health.",
"slots": [
[
"PROBLEM",
"Urban noise pollution"
],
[
"getting worse / threatening X",
"is increasingly harming residents' sleep and heart health"
],
[
"CAUSE",
"traffic, construction and aircraft have grown with city populations"
],
[
"SOLUTION",
"quieter road surfaces, stricter building hours and more green space"
],
[
"GOAL",
"to protect public health"
]
]
},
{
"title": "Sample 3: Version C (explains or describes, no turn)",
"passage": "Octopuses are among the most intelligent invertebrates ever studied. In laboratory experiments, they have learned to unscrew jar lids to reach food, navigate mazes and escape from closed tanks. In the wild, some species carry coconut shells across the sea floor and assemble them into shelters, a behaviour that many scientists consider genuine tool use. Octopuses also appear able to recognise individual humans, reacting differently to keepers who have treated them kindly or unkindly. What makes this intelligence especially remarkable is how differently it is organised: around two thirds of an octopus's neurons are located not in its brain but in its arms, which can respond to touch and taste semi-independently. Because octopuses and humans last shared an ancestor more than 500 million years ago, researchers believe their intelligence evolved entirely separately from that of vertebrates.",
"template": "[TOPIC] [MAIN POINT], as [SUPPORT 1] and [SUPPORT 2], which suggests that [TAKEAWAY].",
"answer": "Octopuses are remarkably intelligent invertebrates, as they can solve puzzles, use coconut shells as tools and recognise individual humans, and most of their neurons are located in their arms, which suggests that complex intelligence can evolve in very different ways.",
"slots": [
[
"TOPIC + MAIN POINT",
"Octopuses are remarkably intelligent invertebrates"
],
[
"SUPPORT 1",
"they can solve puzzles, use coconut shells as tools and recognise individual humans"
],
[
"SUPPORT 2",
"most of their neurons are located in their arms"
],
[
"TAKEAWAY",
"complex intelligence can evolve in very different ways"
]
]
}
],
"we": [
{
"title": "Essay 1: discuss both views",
"prompt": "Some people think that the best way to reduce traffic congestion is to build more roads, while others believe public transport should be improved instead. Discuss both views and give your own opinion.",
"paras": [
"Traffic congestion **has become** one of the most frustrating problems in growing cities around the world. **Some people argue that** building more roads is the most effective way to reduce traffic jams. **However, others believe that** governments should invest in better public transport instead. **In my view,** improving public transport is a far more lasting solution.",
"**To begin with,** public transport **has several advantages** for crowded cities. **The main reason is that** a single train or bus can carry hundreds of passengers while using very little road space. **This means that** every commuter who switches from driving frees up room for those who genuinely need a car, such as tradespeople and delivery drivers. **For instance,** one suburban rail line can move as many people in an hour as several lanes of motorway. **Furthermore,** frequent services reduce air pollution and give people who cannot drive, such as students and older residents, far more independence.",
"**On the other hand,** building new roads **has some serious drawbacks.** **The most serious concern is that** extra lanes tend to attract additional drivers, a pattern that transport researchers call induced demand. **As a result,** congestion often returns to its previous level within a few years, despite the enormous cost of construction. **For example,** widening a busy motorway can cause years of disruption, only for traffic to slow down again soon after it reopens.",
"**In conclusion, although** new roads may bring short-term relief, improving public transport is the better solution **because** it moves more people with less space and less pollution. City governments **should therefore** prioritise frequent, affordable and reliable services over road expansion."
],
"slots": [
[
"TOPIC",
"traffic congestion in growing cities"
],
[
"SIDE A / SIDE B",
"build more roads / improve public transport"
],
[
"POSITION",
"improving public transport is more lasting"
],
[
"POINT 1 + EXPLAIN",
"carries many passengers in little space, frees roads for those who need cars"
],
[
"WHO + WHERE + NUMBER",
"one suburban rail line equals several lanes of motorway"
],
[
"POINT 2",
"less pollution, independence for non-drivers"
],
[
"OTHER SIDE: POINT + EFFECT",
"induced demand, congestion returns within years"
],
[
"SPECIFIC CASE",
"motorway widening: years of disruption, traffic slows again"
],
[
"RECOMMENDATION",
"city governments prioritise frequent, reliable services"
]
]
},
{
"title": "Essay 2: agree or disagree",
"prompt": "Governments should invest more in preventive healthcare, such as promoting exercise and healthy eating, rather than in treating illness. To what extent do you agree or disagree?",
"paras": [
"Rising healthcare costs **have forced** many governments to rethink how they spend their health budgets. **Some people argue that** more money should be directed towards preventing illness, for example by promoting exercise and healthy eating. **However, others believe that** treating sick patients must remain the first priority. **This essay agrees that** preventive healthcare deserves considerably more investment, although treatment cannot be neglected.",
"**To start with,** prevention **offers several important benefits.** **The main reason is that** many of the most common chronic diseases, such as type two diabetes and heart disease, are closely linked to lifestyle. **This means that** helping people stay active and eat well can stop these conditions from developing in the first place. **For instance,** physiotherapists can run community strength and balance classes that help older adults avoid falls, which are a leading cause of hospital admissions in this age group. **Furthermore,** preventing illness is usually far cheaper than paying for surgery, medication and long hospital stays.",
"**On the other hand,** spending mainly on treatment **has some drawbacks.** **The most serious concern is that** hospitals end up caring for patients only after their conditions have become severe and expensive to manage. **As a result,** waiting lists grow and health systems face increasing financial pressure every year. **For example,** a patient whose diabetes is not managed early may later need kidney dialysis, which is costly for the system and exhausting for the patient.",
"**In conclusion, although** treatment will always be essential, preventive healthcare should receive more funding **because** it reduces both suffering and long-term costs. Policy makers **would be wise to** set aside a fixed share of every health budget for prevention programs."
],
"slots": [
[
"TOPIC",
"rising healthcare costs and how budgets are spent"
],
[
"SIDE A / SIDE B",
"fund prevention / treatment must come first"
],
[
"POSITION",
"prevention deserves more investment, treatment still matters"
],
[
"POINT 1 + EXPLAIN",
"chronic diseases are linked to lifestyle, so activity and diet prevent them"
],
[
"WHO + WHERE + NUMBER",
"physio-led strength and balance classes reduce falls in older adults"
],
[
"POINT 2",
"prevention is cheaper than surgery and hospital stays"
],
[
"OTHER SIDE: POINT + EFFECT",
"patients treated only when severe; waiting lists and costs grow"
],
[
"SPECIFIC CASE",
"unmanaged diabetes leading to kidney dialysis"
],
[
"RECOMMENDATION",
"a fixed share of every health budget for prevention"
]
]
}
],
"sst": [
{
"title": "Lecture 1: Exercise as medicine",
"bank": "Exercise as medicine",
"answer": "The speaker discussed the idea of exercise as a form of medicine. They explained that regular activity reduces the risk of heart disease, diabetes and several cancers, and that prescribed exercise can work as well as medication for some chronic conditions, because it improves symptoms and function, although few adults are active enough. Finally, they concluded that referral to physiotherapists and exercise physiologists is essential.",
"slots": [
[
"TOPIC",
"the idea of exercise as a form of medicine"
],
[
"MAIN POINT (+ POINT 2)",
"activity reduces disease risk; prescribed exercise can work as well as medication"
],
[
"SUPPORT",
"it improves symptoms and function"
],
[
"TURN",
"few adults are active enough"
],
[
"TAKEAWAY",
"referral to physiotherapists and exercise physiologists is essential"
]
]
},
{
"title": "Lecture 2: Fast fashion",
"bank": "Fast fashion",
"answer": "The speaker discussed fast fashion, which is cheap clothing produced quickly to follow trends. They explained that it harms the environment, because production has doubled while clothes are worn less, using large amounts of water and filling landfill, although some consumers now buy second-hand or rent clothes. Finally, they concluded that governments may make brands responsible for their waste.",
"slots": [
[
"TOPIC",
"fast fashion, cheap clothing produced quickly to follow trends"
],
[
"MAIN POINT",
"it harms the environment"
],
[
"SUPPORT",
"production has doubled while clothes are worn less; water use and landfill"
],
[
"TURN",
"some consumers now buy second-hand or rent clothes"
],
[
"TAKEAWAY",
"governments may make brands responsible for their waste"
]
]
}
]
};
