export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "being-wrong-faster",
    title: "The PM's Real Job: Being Wrong Faster",
    excerpt: "The best PMs aren't the ones who are right most often. They're the ones who figure out they're wrong the fastest.",
    date: "December 24, 2024",
    readTime: "12 min read",
    category: "Strategy",
    content: `<h1>The PM's Real Job: Being Wrong Faster</h1>

<p>In my first PM role, I spent three months building a feature I was absolutely certain would transform how our customers worked. I'd surveyed users, analyzed competitors, and created detailed specs. Leadership loved the vision. Engineering was excited about the technical challenge. We shipped on schedule.</p>

<p>Adoption was 12%.</p>

<p>I'd been so focused on being right (on having the answers, demonstrating conviction, showing leadership I knew what to build) that I'd optimized for confidence instead of truth. I learned the hard way that the PM's real job isn't knowing what to build. It's discovering what's worth building before you waste months building the wrong thing.</p>

<p>The best PMs I know aren't the ones who are right most often. They're the ones who figure out they're wrong the fastest.</p>

<h2>The Confidence Trap</h2>

<p>Product management has a dangerous cultural expectation: PMs are supposed to "have vision." We're expected to walk into roadmap meetings with conviction, defend our priorities with confidence, and project certainty even when we're operating with incomplete information.</p>

<p>This expectation isn't malicious. It comes from reasonable organizational needs. Stakeholders need to plan budgets. Engineering teams need clear direction. Sales needs to commit to customers. Everyone wants to believe that someone knows where we're going.</p>

<p>But here's the problem: confidence without evidence is just expensive guessing.</p>

<p>When PMs optimize for appearing certain rather than discovering truth, we create roadmaps that look impressive in presentations but crumble on contact with reality. We commit to building features that sound strategic but don't move outcomes. We defend decisions because we've already invested in them, not because they're still the right call.</p>

<p>The confidence trap is seductive because it feels like leadership. It's easier to present a polished roadmap and say "trust me" than to say "here's what we're betting on, and here's how we'll know if we're wrong." The former looks like vision. The latter looks like uncertainty.</p>

<p>But only one of them is actually strategic.</p>

<h2>What "Being Wrong Faster" Actually Means</h2>

<p>Being wrong faster isn't about being reckless or making poor decisions. It's about building systems that expose bad assumptions before they become expensive mistakes.</p>

<p>Here's what this looks like in practice:</p>

<p><strong>Small bets over big bets.</strong> Instead of committing to a six-month roadmap based on what you think will work, commit to validating specific assumptions over the next four weeks. Build the smallest thing that can test your hypothesis. If you're wrong, you've lost four weeks, not six months.</p>

<p><strong>Discovery before execution.</strong> This doesn't mean endless research that delays shipping. It means establishing lightweight, continuous touchpoints with customers that give you ongoing signal about whether you're heading in the right direction. Weekly customer conversations reveal wrong turns faster than quarterly research initiatives.</p>

<p><strong>Outcome focus over feature focus.</strong> When you frame roadmaps around outcomes ("increase adoption by 30%") instead of features ("build AI-powered recommendations"), you create space to pivot when you discover a better path to your goal. Features lock you in. Outcomes give you flexibility to be wrong about the how while staying focused on the what.</p>

<p><strong>Transparent decision-making.</strong> Document what you're betting on and why. Write down the assumptions that would need to be true for your plan to work. This makes it easier to recognize when reality contradicts your assumptions, and it prevents the sunk cost fallacy from keeping you committed to the wrong path.</p>

<p><strong>Building organizational memory of successful pivots.</strong> When you discover you're wrong and change course, don't hide it as a "scope change" or "shifting priorities." Call it what it is: you learned something important and adjusted. Then track whether that pivot worked. Over time, you build credibility that pivoting based on learning is strategic, not indecisive.</p>

<p>The core insight is that being wrong is inevitable. The market shifts, customers behave unpredictably, competitors move, technology evolves. You can't avoid being wrong. But you can absolutely control how quickly you discover it and how much you've invested before you figure it out.</p>

<h2>The Org Design Challenge</h2>

<p>Here's the hard part: most organizations aren't set up to reward being wrong faster. They're set up to punish being wrong at all.</p>

<p>Performance reviews celebrate shipped features, not validated assumptions. Roadmap presentations reward confidence, not honest uncertainty. Quarterly planning cycles lock teams into commitments before they have the data to know if those commitments make sense.</p>

<p>This creates a perverse incentive: PMs learn to present certainty even when they're guessing, because ambiguity looks like weakness. We commit to features we're not sure will work because changing our minds later looks like poor planning. We delay customer conversations until after we've already decided what to build because we're afraid of what we might learn.</p>

<p>Changing this dynamic requires deliberate organizational design:</p>

<p><strong>Reserve capacity for learning in your plans.</strong> Don't present roadmaps that assume perfect information. Explicitly allocate 15-20% of your timeline for course corrections based on what you learn. When leadership sees that buffer in your plans, pivots feel like good risk management rather than missed commitments.</p>

<p><strong>Create decision checkpoints tied to evidence, not dates.</strong> Instead of "ship feature X by Q2," commit to "validate assumption Y by end of Q1, then decide whether to proceed with feature X." This reframes the conversation from execution to learning.</p>

<p><strong>Distinguish between pivots and thrashing.</strong> Not every new piece of information warrants changing direction. Being wrong faster doesn't mean being reactive to every data point. It means synthesizing patterns from continuous discovery and making deliberate adjustments when you've discovered something significant.</p>

<p><strong>Celebrate validated learning, not just shipped features.</strong> When a team discovers they're wrong and pivots before wasting resources, that should be a win worth recognizing. If your org only celebrates launches, you're incentivizing people to ship the wrong thing confidently rather than adjust course strategically.</p>

<h2>When Certainty Is Dangerous</h2>

<p>I've learned to be suspicious of my own confidence. The times I've been most certain about a product direction are often the times I've been most disconnected from what customers actually need.</p>

<p>Certainty is seductive because it simplifies decision-making. When you're certain, you don't need to maintain multiple hypotheses. You don't need to build in flexibility. You don't need to keep listening for signals that you might be wrong. You just execute.</p>

<p>But certainty also makes you blind. When you're convinced you're right, you stop looking for evidence that you're not. You interpret ambiguous signals in ways that confirm your existing beliefs. You dismiss contradictory feedback as outliers or misunderstandings.</p>

<p>This is why the best PMs I know maintain a healthy skepticism of their own ideas. Not because they lack conviction, but because they know that conviction without continuous validation is just a comfortable way to build the wrong thing.</p>

<p>The question isn't "am I confident in this plan?" The question is "what would I need to see to know this plan is wrong, and am I actively looking for that signal?"</p>

<h2>Building the Muscle</h2>

<p>Learning to be wrong faster is a skill, not just a mindset. Here's how to build that muscle:</p>

<p><strong>Start with explicit assumptions.</strong> For any major initiative, write down what needs to be true for this to succeed. Not just high-level hopes like "customers will want this," but specific, testable assumptions like "practice managers will schedule upgrades themselves if they have a 24-hour window to choose from."</p>

<p><strong>Design tests that could prove you wrong.</strong> Bad research validates what you want to believe. Good research tries to break your assumptions. If you're only asking questions that confirm your hypothesis, you're not learning. You're just collecting supporting evidence.</p>

<p><strong>Track how fast you discover mistakes.</strong> This sounds strange, but it's valuable to know your team's "time to wrong" metric. How long does it typically take from "we commit to building X" to "we realize X isn't the right solution"? If it's taking three months or more, that's a signal you need earlier feedback loops.</p>

<p><strong>Practice changing your mind in low-stakes situations.</strong> The ability to pivot on major roadmap decisions is built by practicing on smaller calls. When you learn something that contradicts a minor decision, change course quickly and explicitly. Build the organizational muscle memory that new information should change our plans.</p>

<p><strong>Share your "wrong to right" stories.</strong> When you discover you were wrong about something important and adjust successfully, talk about it. Make it visible how learning led to better outcomes. This builds organizational tolerance for uncertainty.</p>

<h2>Why This Is More Strategic, Not Less</h2>

<p>There's a misconception that being open to being wrong is somehow less strategic than having a clear, unwavering vision. That admitting uncertainty makes you look weak or indecisive.</p>

<p>The reality is exactly the opposite.</p>

<p>Strategy isn't about having all the answers. Strategy is about making good decisions with imperfect information, and then updating those decisions as you learn more. The strategist who commits to a direction and ignores contradictory signals isn't being strong. They're being stubborn.</p>

<p>Being wrong faster is strategic because it minimizes waste. Every week you spend building the wrong thing is a week you're not building the right thing. Every month you delay discovering your plan won't work is a month your competitors could be figuring out what actually does work.</p>

<p>It's strategic because it compounds learning. Teams that discover wrong turns quickly accumulate knowledge about what works faster than teams that commit to long bets. That knowledge becomes competitive advantage.</p>

<p>It's strategic because it builds trust. When you demonstrate that you'll change course based on evidence rather than ego, stakeholders learn to trust your judgment. They know you're optimizing for outcomes, not for being right.</p>

<p>And perhaps most importantly, it's strategic because it acknowledges reality. Your first plan is almost never your best plan. The market will surprise you. Customers will behave unpredictably. Technology will evolve in unexpected ways. You can either pretend you can predict all of this upfront, or you can build a system that helps you adapt quickly when reality contradicts your assumptions.</p>

<h2>The Paradox of PM Confidence</h2>

<p>Here's the paradox I've come to embrace: the more confident I am in my ability to discover when I'm wrong, the less I need to pretend I'm certain about what to build.</p>

<p>Early in my career, I projected confidence about features because I was insecure about my judgment. I needed everyone to believe I knew what I was doing. Now, I'm comfortable saying "here's what we're betting on, here's why we think it will work, and here's how we'll know if we're wrong" because I trust the system I've built to catch mistakes early.</p>

<p>That shift from false certainty to evidence-based confidence changes everything. You stop defending decisions because you've already committed to them and start evaluating decisions based on whether they're still the best path forward. You stop treating roadmaps as promises and start treating them as hypotheses worth testing.</p>

<p>You become more strategic precisely because you're more willing to be wrong.</p>

<h2>What This Looks Like in Practice</h2>

<p>So what does a PM who's optimized for being wrong faster actually do differently?</p>

<p><strong>They build learning into sprint planning.</strong> Every sprint includes not just execution work but discovery work: customer conversations, usage analysis, hypothesis testing. Learning isn't something that happens before building; it happens alongside building.</p>

<p><strong>They make their assumptions explicit in roadmap discussions.</strong> Instead of presenting "we should build X," they present "we believe X will drive outcome Y because of assumption Z, and here's how we'll validate that assumption."</p>

<p><strong>They treat contradictory data as valuable, not threatening.</strong> When a customer says something that challenges the roadmap, they don't get defensive. They get curious. What are we missing? What assumption did we get wrong?</p>

<p><strong>They build tight feedback loops.</strong> They don't wait three months to check if something is working. They instrument early, talk to users often, and look for signal continuously.</p>

<p><strong>They invest in relationships with stakeholders that can handle uncertainty.</strong> They educate leadership on why being wrong faster is strategic. They build trust that pivots based on learning aren't failures. They're good product management.</p>

<h2>The Takeaway</h2>

<p>If there's one thing I wish I'd understood earlier in my career, it's this: the job isn't to know what to build. The job is to discover what's worth building as quickly and efficiently as possible.</p>

<p>That means being willing to start with incomplete information. It means building systems that surface wrong assumptions before they become expensive. It means treating confidence as something you earn through evidence, not something you project to look competent.</p>

<p>The PMs who consistently ship products that work aren't the ones who were magically right from the start. They're the ones who figured out they were wrong while there was still time to fix it.</p>

<p>Be wrong faster. Your product (and your users) will be better for it.</p>`
  },
  {
    id: 2,
    slug: "art-of-prioritization",
    title: "The Art of Prioritization: Beyond the RICE Framework",
    excerpt: "Why traditional prioritization frameworks often fail, and how to build a more nuanced approach that accounts for strategic context.",
    date: "March 3, 2025",
    readTime: "8 min read",
    category: "Strategy",
    content: `<h2>When the Math Stopped Mattering</h2>

<p>I used to love RICE scoring. Give me a spreadsheet, let me quantify reach, impact, confidence, and effort, and I'd give you a perfectly ranked roadmap. The math felt objective. Scientific. Defensible.</p>

<p>Then I shipped a feature with a RICE score of 847 that absolutely no one used, while the "low priority" item scoring 203 that we'd pushed to Q4 turned out to be the thing customers had been begging for all along.</p>

<p>The problem wasn't the framework. The problem was that I'd confused scoring with strategy.</p>

<p>Traditional prioritization frameworks like RICE, WSJF, or ICE promise to make hard decisions easy. Just plug in the numbers, sort by score, and your roadmap writes itself. But real prioritization isn't a math problem. It's a judgment problem that requires understanding context that no formula can capture.</p>

<h2>Why Scoring Frameworks Fail</h2>

<p>Prioritization frameworks are seductive because they give us what we desperately want: a rational, defensible answer to an impossible question. When you're juggling thirty feature requests, three technical debt initiatives, and two platform bets, the promise of objective prioritization is irresistible.</p>

<p>But here's what those frameworks can't tell you:</p>

<p><strong>They can't see strategic momentum.</strong> Sometimes the "right" next move isn't the highest-scoring item. It's the one that unlocks three other things you want to build. A low-scoring API endpoint might be worth building now because it enables the integration strategy you're betting on for next year.</p>

<p><strong>They can't account for team capacity reality.</strong> Your scoring might say Feature A (867) beats Feature B (654), but if Feature A requires three months of dedicated backend work and you have exactly one backend engineer who's already committed to a critical migration, the score is meaningless. Real teams have constraints that spreadsheets don't see.</p>

<p><strong>They can't capture learning value.</strong> Building something to validate an assumption is fundamentally different from building something to ship at scale. A lightweight prototype that scores low on "reach" might teach you whether your entire product direction makes sense. That learning is worth more than any individual feature.</p>

<p><strong>They create false precision.</strong> When you assign "Confidence: 70%" vs "Confidence: 65%", what does that actually mean? You're quantifying intuition, then treating those numbers as if they're measurements. The difference between a RICE score of 758 and 742 is noise, not signal. But once it's in the spreadsheet, we treat 758 as objectively better.</p>

<p><strong>They optimize for features, not outcomes.</strong> Frameworks ask "how valuable is this feature?" But the real question is "what outcome are we trying to move, and what's the fastest path to move it?" Sometimes the answer isn't building anything new. It's fixing something that's broken, improving something that exists, or removing something that's confusing.</p>

<p>The moment you realize your highest-scoring items aren't moving your most important metric is the moment you understand that scoring isn't strategy.</p>

<h2>What Actually Drives Prioritization</h2>

<p>So if frameworks don't work, what does? In my experience, good prioritization comes from asking better questions:</p>

<h3>1. What's blocking our most important outcome?</h3>

<p>Start with the metric or outcome that matters most right now. Not the comprehensive list of things that would be nice to improve. The one thing that, if you moved it significantly, would change how the business performs.</p>

<p>Then ask: what's preventing us from moving that number?</p>

<p>Sometimes it's a missing feature. But often it's a broken experience, a confusing flow, a reliability issue, or a gap in the customer's workflow that your product doesn't address. The highest-leverage work is often invisible to feature-based frameworks because it's about fixing or improving, not adding.</p>

<h3>2. What can only we do right now?</h3>

<p>Teams have unique contexts that change what's possible. Your competitor might be able to build Feature X faster, but only you have the infrastructure to build Feature Y. Your backend team might be deep in a migration that makes certain work nearly free but other work impossibly expensive.</p>

<p>Good prioritization accounts for what your specific team, in this specific moment, is uniquely positioned to do well.</p>

<h3>3. What do we need to learn?</h3>

<p>Not every item on your roadmap needs to ship to customers at scale. Some things exist purely to validate assumptions. When you're making a big bet, the highest-leverage work might be a two-week prototype that proves (or disproves) that the bet is worth making.</p>

<p>Frameworks struggle with this because learning doesn't score well on "reach" or "impact." But learning compounds. The information you gain from a small experiment can save months of building the wrong thing.</p>

<h3>4. What builds vs. what unlocks?</h3>

<p>Some features are endpoints. They deliver value, but they're standalone. Other features are foundations. They unlock entire categories of future work.</p>

<p>A platform API might score low because it has no direct user-facing impact. But if it enables ten high-value integrations you want to build over the next year, it's not competing with those integrations. It's enabling them.</p>

<p>This is where strategic sequencing matters more than scoring. Sometimes you build the lower-scoring thing first because it makes everything else possible.</p>

<h3>5. What's the cost of waiting?</h3>

<p>Not all delayed work costs the same. Delaying a nice-to-have feature by two quarters barely matters. Delaying the fix for an issue that's causing 20% of your customers to churn is catastrophically expensive.</p>

<p>Frameworks treat all delayed work equally. Reality doesn't.</p>

<h2>Building Your Own Prioritization System</h2>

<p>Here's what I've found actually works:</p>

<p><strong>Start with clarity on your current goal.</strong> Not your goals (plural). Your goal (singular). What's the one outcome you're trying to move right now? Get specific. "Improve adoption" is too vague. "Get 40% of trial users to complete their first project within 7 days" is clear.</p>

<p><strong>Map everything to that goal.</strong> For each potential item, don't score it. Just ask: if we did this, would it meaningfully move our goal? If yes, by how much? If no, why are we considering it?</p>

<p>This forces you to articulate your assumptions. "Feature X will improve conversion because users are confused by the current onboarding flow" is a hypothesis you can discuss and validate. "Feature X scores 847" shuts down that conversation.</p>

<p><strong>Separate bets into categories.</strong> Not everything competes. You're not choosing between fixing a critical bug and building a new feature. Those are different budgets. I typically think in three buckets:</p>

<p>- <strong>Reliability & Performance</strong> - Things that need to work correctly before you build new things<br>
- <strong>Core Experience</strong> - Improvements to existing workflows that drive your primary metrics<br>
- <strong>Strategic Bets</strong> - New capabilities or big architectural changes that unlock future value</p>

<p>Each bucket gets capacity. Within each bucket, you prioritize. But you don't pit a platform API against a critical bug fix. They're playing different games.</p>

<p><strong>Include "fast follower" capacity.</strong> This is the most important thing most teams miss. If you plan your roadmap to 100% capacity, you have no space to respond when you learn something important or when an unexpected opportunity appears.</p>

<p>I typically allocate 15-20% of capacity to "fast follow work" - things we'll decide on mid-quarter based on what we learn. This isn't slack time. It's strategic flexibility.</p>

<p><strong>Make your assumptions explicit.</strong> For anything significant, write down: "We're betting that X will drive outcome Y because we believe Z." This does two things. First, it surfaces when you're actually just guessing. Second, it makes it obvious when you've learned something that invalidates the bet.</p>

<p>When you write "We're building Feature X to improve adoption because users are confused by the current flow," you can check: are users actually confused by the current flow? How do we know? What would prove us wrong? If you can't answer those questions, you're not ready to build.</p>

<p><strong>Review with skepticism, not scoring.</strong> When reviewing prioritization, don't ask "what are the scores?" Ask:</p>

<p>- If we only shipped one thing this quarter, which would it be?<br>
- What are we assuming needs to be true for this priority to be right?<br>
- What would we need to see to change our minds?<br>
- What are we explicitly choosing not to do?</p>

<p>The last question is crucial. Every prioritization is a statement about what you won't do. If you can't name what you're saying no to, you haven't actually prioritized. You've just made a wish list.</p>

<h2>When Frameworks Are Actually Useful</h2>

<p>I'm not anti-framework. I'm anti-framework-worship.</p>

<p>Scoring systems are useful when:</p>

<p>- You're comparing similar types of work (multiple feature requests, multiple bug fixes)<br>
- You need a quick filter to eliminate obvious low-value items<br>
- You're communicating with stakeholders who need to understand relative priority</p>

<p>Where frameworks fail is when we treat them as the decision, rather than as input to the decision.</p>

<p>Use frameworks to structure your thinking. Don't let them replace your judgment.</p>

<h2>What This Looks Like in Practice</h2>

<p>So what does prioritization look like when you're not just sorting by RICE score?</p>

<p><strong>You start with your goal.</strong> For us, it was: reduce time-to-first-value for new customers. Specifically, get 50% of trials to successfully complete their first project setup within 3 days.</p>

<p><strong>You map the blockers.</strong> Through user research (mostly our lightweight UX teardowns), we found three main issues:</p>

<p>1. API credentials were confusing to generate<br>
2. The test data flow wasn't obvious<br>
3. Error messages didn't help users recover</p>

<p><strong>You ask: what moves the needle most?</strong> All three mattered. But fixing error messages was fast (2 weeks) and would help even after we fixed the other issues. API credentials was the biggest blocker but required backend changes (6 weeks). Test data flow was medium complexity (4 weeks).</p>

<p><strong>You sequence strategically.</strong> We did:</p>

<p>1. Error messages first (fast win, helped immediately)<br>
2. Test data flow second (meaningful improvement, unlocked better onboarding)<br>
3. API credentials third (biggest impact, but needed the foundation)</p>

<p>If we'd just used RICE, we might have jumped straight to API credentials (highest "impact"). But by the time we shipped it, users would have already churned from poor error messages.</p>

<p>This is the difference between scoring and strategy.</p>

<h2>The Takeaway</h2>

<p>Prioritization frameworks promise to make hard decisions easy. But hard decisions are hard because they require judgment about context, timing, constraints, and strategic fit that no formula can capture.</p>

<p>The best prioritization I've seen doesn't come from better scoring. It comes from:</p>

<p>- Clearer goals<br>
- Better understanding of what's actually blocking those goals<br>
- Honest assessment of what your team can do well right now<br>
- Willingness to sequence work strategically, not just score it independently</p>

<p>Stop trying to find the perfect formula. Start asking better questions.</p>

<p>Your roadmap will be better for it.</p>`
  },
  {
    id: 3,
    slug: "user-research-at-scale",
    title: "Running User Research at Scale Without Breaking the Bank",
    excerpt: "Practical techniques for maintaining a strong user research practice even with limited resources and tight timelines.",
    date: "June 6, 2025",
    readTime: "6 min read",
    category: "Research",
    content: `<h2>The Five-Call Roadmap Reset</h2>

<p>Early in my PM career, I thought "user research" meant hiring a research firm, recruiting participants with screeners, conducting moderated sessions in a lab with a two-way mirror, and spending three months producing a 80-page report.</p>

<p>I also had zero budget, two weeks until our roadmap review, and absolutely no idea if the features we were planning would actually help our users.</p>

<p>So I picked up the phone and called five customers.</p>

<p>Those five conversations changed our entire roadmap. We discovered that 60% of our planned features were solving problems our users didn't have, while the real issue—the one causing them to abandon our product—wasn't on our roadmap at all.</p>

<p>That's when I learned: user research isn't about expensive methodology. It's about systematically learning from the people who use your product before you invest months building the wrong thing.</p>

<h2>The "Perfect Research" Trap</h2>

<p>There's a myth in product management that good user research requires:</p>

<p>- Formal research training<br>
- Significant budget<br>
- Dedicated researchers<br>
- Weeks of planning<br>
- Carefully controlled conditions<br>
- Statistical significance</p>

<p>This myth is expensive. It's also wrong.</p>

<p>The best user research I've conducted hasn't been in a lab. It's been in parking lots between veterinary appointments, on Zoom calls squeezed into a lunch break, watching someone's screen share as they try to complete a task that should be simple but isn't.</p>

<p>Perfect research is the enemy of continuous learning. By the time you've run the perfect study, your assumptions are already baked into your roadmap and you've spent three months not talking to users.</p>

<p>What matters isn't research purity. It's whether you're learning true things about your users fast enough to make better decisions.</p>

<h2>What "At Scale" Actually Means</h2>

<p>"At scale" doesn't mean "constantly" or "with huge sample sizes." It means building user research into your regular operating rhythm so that learning from users isn't a special event. It's just how you work.</p>

<p>Over fifteen months, I conducted 14+ user studies—some formal, most informal. But the real impact wasn't from any single study. It was from building a system where talking to users was as normal as looking at analytics.</p>

<p>Here's what that looked like:</p>

<p><strong>Weekly customer conversations.</strong> Every week, 2-3 conversations with users. Sometimes existing customers. Sometimes churned users. Sometimes trial users who never converted. No elaborate recruiting. Just asking customer success who they're talking to this week, and whether I can join a call.</p>

<p><strong>Lightweight observation sessions.</strong> Instead of formal usability testing, I'd ask users to share their screen and walk me through their actual workflow. Not a task I assigned them. The real thing they're trying to do. This is where you learn what's actually hard, not what's hard in your test scenario.</p>

<p><strong>Structured but simple methodology.</strong> I developed what I call "UX Teardowns"—a repeatable approach that takes 45 minutes per session, requires no special tools, and generates insights you can act on immediately. The goal isn't comprehensive research. It's systematic learning.</p>

<p>The key is consistency over intensity. Five conversations every month for a year teaches you more than 60 conversations crammed into one month, because you're learning over time how things change, what patterns persist, and what your changes actually impact.</p>

<h2>The UX Teardown Methodology</h2>

<p>Here's the approach I've refined through 14+ studies. It's lightweight, repeatable, and doesn't require a research background:</p>

<p><strong>Setup (5 minutes):</strong></p>

<p>- Ask the user to share their screen<br>
- Explain you're trying to understand their workflow, not testing them<br>
- Get verbal consent to take notes<br>
- Ask about their role and how they use the product</p>

<p><strong>Observation (25 minutes):</strong></p>

<p>- Ask them to show you something they do regularly<br>
- Stay quiet and watch<br>
- Note moments of hesitation, confusion, or workarounds<br>
- Don't help them or explain how things "should" work<br>
- Let awkward silences happen—that's when they verbalize their thinking</p>

<p><strong>Key questions (10 minutes):</strong></p>

<p>- "What's the hardest part of [task they just showed]?"<br>
- "How did you learn to do that?"<br>
- "What would you change if you could?"<br>
- "What almost made you stop using this?"</p>

<p><strong>Validation (5 minutes):</strong></p>

<p>- Share back what you heard: "It sounds like X is the biggest friction point. Is that right?"<br>
- Ask if there's anything important you missed<br>
- Thank them and explain what you'll do with their feedback</p>

<p>Total time: 45 minutes. No special software. No incentive budget (though offering a small gift card helps recruiting). No lab.</p>

<p>The magic isn't in the methodology. It's in doing it repeatedly so you start seeing patterns.</p>

<h2>What You Actually Learn</h2>

<p>Formal research is great at answering specific, well-formed questions. Lightweight continuous research is great at discovering the questions you should have been asking.</p>

<p>Through our UX Teardown sessions, I discovered:</p>

<p><strong>The problem behind the feature request.</strong> A customer asked for "better filtering options." Watching her screen, I realized the issue wasn't the filters. It was that our search returned 300 results and she had to manually check each one because the preview didn't show the information she needed. We didn't need better filters. We needed better result previews.</p>

<p><strong>The workaround that revealed broken assumptions.</strong> We saw multiple users keeping a separate spreadsheet to track something our product should have tracked. We thought they just didn't know about our tracking feature. Turned out they knew about it—they just couldn't trust it because it randomly dropped entries. We had a data integrity bug that analytics would never have shown us.</p>

<p><strong>The thing that almost made them churn.</strong> Our retention metrics looked fine. But asking "what almost made you stop using this?" revealed that 50% of new users hit a blocking technical issue in their first week. They only stayed because they'd already bought an annual subscription. We'd optimized onboarding conversion while completely missing the onboarding failure rate.</p>

<p><strong>The surprisingly critical feature we'd ignored.</strong> We'd ranked our help documentation as low priority—users "rarely" clicked on it. Turns out they rarely clicked on it because they couldn't find it. When we improved discoverability, usage jumped 300%. Users had needed help all along. We just made it impossible to access.</p>

<p>This kind of insight doesn't come from surveys or analytics. It comes from watching real people try to do real things.</p>

<h2>Making It Sustainable</h2>

<p>The reason most teams don't do continuous user research isn't capability. It's capacity. Here's how to make it actually sustainable:</p>

<p><strong>Piggyback on existing touchpoints.</strong> Don't create new customer contacts. Join calls that customer success, sales, or support are already having. They're talking to users all day. You just need access.</p>

<p><strong>Rotate the work.</strong> You don't have to do all the research yourself. Train your team on the UX Teardown methodology and rotate who conducts sessions. This distributes the work and builds empathy across the team.</p>

<p><strong>Share insights immediately.</strong> Don't wait to compile a formal report. After each session, send a quick summary to your team: "Talked to Customer X. Three key insights: [...]" The faster you share, the faster insights inform decisions.</p>

<p><strong>Focus on patterns, not individual feedback.</strong> One user saying something might be an outlier. Three users saying the same thing is a pattern. Five users is a trend. Don't make decisions on single data points. Look for what repeats.</p>

<p><strong>Set a minimum baseline.</strong> Commit to a minimum number of customer conversations per month (I aimed for 8-10). Some will be short. Some will be deep. The consistency matters more than any individual conversation.</p>

<p><strong>Make it someone's explicit goal.</strong> If "talk to users more" is just good intentions, it won't happen. Make it a goal. For me, it was: "Conduct 2-3 customer conversations per week." Track it. Report on it. Treat it as seriously as shipping features.</p>

<h2>When You Need More Formal Research</h2>

<p>Lightweight continuous research isn't sufficient for every question. You need more rigorous research when:</p>

<p><strong>You're making a big bet.</strong> If you're considering a major pivot, new product line, or significant platform change, invest in proper research. Bring in specialists if needed. The cost of getting it wrong is too high to rely on informal conversations.</p>

<p><strong>You need to measure not just discover.</strong> Continuous research is excellent for discovery. It's not designed for measurement. If you need to know "what % of users can successfully complete task X," you need structured usability testing with a proper sample.</p>

<p><strong>You're entering a new market.</strong> If you're expanding to a user segment you don't currently serve, you don't have the luxury of learning over time. You need focused research upfront to understand that segment's specific needs and context.</p>

<p><strong>You're dealing with sensitive topics.</strong> Some research requires trained researchers. If you're exploring topics related to health, safety, trauma, or other sensitive areas, bring in someone with proper training and ethical guidelines.</p>

<p>But for day-to-day product decisions? Lightweight continuous research will teach you more than expensive one-off studies ever could.</p>

<h2>The Takeaway</h2>

<p>Good user research isn't about perfect methodology or big budgets. It's about building a system where learning from users happens continuously, not just during "research phases."</p>

<p>The goal isn't comprehensive understanding. It's systematic learning that's fast enough to inform decisions before they're locked in.</p>

<p>Start simple:</p>

<p>- Talk to 2-3 customers this week<br>
- Ask them to show you something they do regularly<br>
- Watch for friction, confusion, and workarounds<br>
- Share what you learned with your team immediately</p>

<p>Do that every week for three months. You'll learn more about your users than any single research report could ever teach you.</p>

<p>And you'll build better products because of it.</p>`
  }
];
