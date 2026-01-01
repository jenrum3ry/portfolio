import { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "being-wrong-faster",
    title: "The PM's Real Job: Being Wrong Faster",
    excerpt: "Beyond 'fail fast': Why the best product managers focus on being wrong faster, and how to build systems that expose bad assumptions before they become expensive mistakes.",
    date: "December 30, 2025",
    readTime: "12 min read",
    category: "Product Leadership",
    image: "/portfolio/pm-strategy-illustration.png",
    imageAlt: "Abstract illustration representing product strategy and iteration",
    content: `<h1>The PM's Real Job: Being Wrong Faster</h1>

<p>In a previous PM role, I inherited an AI feature that had been live for several months with disappointing adoption numbers. The AI itself was solid - it provided clinically sound recommendations. But we'd made a critical workflow mistake.</p>

<p>Users would generate AI recommendations, review them, and then manually re-enter everything into their system of record. We'd built something technically impressive that failed the "so what?" test.</p>

<p>"I'm not going to use something that doubles my documentation time," one user told us bluntly.</p>

<p>After we integrated the AI outputs directly into the workflow - auto-populating fields so users could review and approve rather than retype from scratch - adoption more than tripled. The AI hadn't changed. The integration had.</p>

<p>I learned that being technically right doesn't matter if you're solving the wrong part of the problem.</p>

<p>The best PMs I know aren't the ones who are right most often. They're the ones who figure out they're wrong the fastest.</p>

<p>You'll hear this called "failing fast" in startup circles, a principle from <a href="https://theleanstartup.com/" target="_blank" rel="noopener noreferrer">Eric Ries' Lean Startup methodology</a>, but that framing has always bothered me. Failure implies recklessness. What we're actually doing is building systems to surface bad assumptions before they become expensive mistakes. It's not about failing - it's about being wrong faster.</p>

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

<p><strong>Small bets over big bets.</strong><br>Instead of committing to a six-month roadmap based on what you think will work, commit to validating specific assumptions over the next four weeks. Build the smallest thing that can test your hypothesis. If you're wrong, you've lost four weeks, not six months.</p>

<p><strong>Discovery before execution.</strong><br>This doesn't mean endless research that delays shipping. It means establishing lightweight, continuous touchpoints with customers that give you ongoing signal about whether you're heading in the right direction. Weekly customer conversations reveal wrong turns faster than quarterly research initiatives.</p>

<p><strong>Outcome focus over feature focus.</strong><br>When you frame roadmaps around outcomes ("increase adoption by 30%") instead of features ("build AI-powered recommendations"), you create space to pivot when you discover a better path to your goal. Features lock you in. Outcomes give you flexibility to be wrong about the how while staying focused on the what.</p>

<p><strong>Transparent decision-making.</strong><br>Document what you're betting on and why. Write down the assumptions that would need to be true for your plan to work. This makes it easier to recognize when reality contradicts your assumptions, and it prevents the sunk cost fallacy from keeping you committed to the wrong path.</p>

<p><strong>Building organizational memory of successful pivots.</strong><br>When you discover you're wrong and change course, don't hide it as a "scope change" or "shifting priorities." Call it what it is: you learned something important and adjusted. Then track whether that pivot worked. Over time, you build credibility that pivoting based on learning is strategic, not indecisive.</p>

<p>The core insight is that being wrong is inevitable. The market shifts, customers behave unpredictably, competitors move, technology evolves. You can't avoid being wrong. But you can absolutely control how quickly you discover it and how much you've invested before you figure it out.</p>

<h2>The Org Design Challenge</h2>

<p>Here's the hard part: most organizations aren't set up to reward being wrong faster. They're set up to punish being wrong at all.</p>

<p>Performance reviews celebrate shipped features, not validated assumptions. Roadmap presentations reward confidence, not honest uncertainty. Quarterly planning cycles lock teams into commitments before they have the data to know if those commitments make sense.</p>

<p>This creates a perverse incentive: PMs learn to present certainty even when they're guessing, because ambiguity looks like weakness. We commit to features we're not sure will work because changing our minds later looks like poor planning. We delay customer conversations until after we've already decided what to build because we're afraid of what we might learn.</p>

<p>I've watched teams spend six months building features because "it was on the roadmap" even after week two revealed the core assumption was wrong. The sunk cost fallacy kicks in, and suddenly "we've already invested so much" becomes the reason to keep going. No one wants to be the person who "wasted" two months of work, so they waste four more months instead.</p>

<p>Changing this dynamic requires deliberate organizational design:</p>

<p><strong>Reserve capacity for learning in your plans.</strong><br>Don't present roadmaps that assume perfect information. Explicitly allocate 15-20% of your timeline for course corrections based on what you learn. When leadership sees that buffer in your plans, pivots feel like good risk management rather than missed commitments.</p>

<p><strong>Create decision checkpoints tied to evidence, not dates.</strong><br>Instead of "ship feature X by Q2," commit to "validate assumption Y by end of Q1, then decide whether to proceed with feature X." This reframes the conversation from execution to learning.</p>

<p><strong>Distinguish between pivots and thrashing.</strong><br>Not every new piece of information warrants changing direction. Being wrong faster doesn't mean being reactive to every data point. It means synthesizing patterns from continuous discovery and making deliberate adjustments when you've discovered something significant.</p>

<p><strong>Celebrate validated learning, not just shipped features.</strong><br>When a team discovers they're wrong and pivots before wasting resources, that should be a win worth recognizing. If your org only celebrates launches, you're incentivizing people to ship the wrong thing confidently rather than adjust course strategically.</p>

<h2>When Certainty Is Dangerous</h2>

<p>I've learned to be suspicious of my own confidence. The times I've been most certain about a product direction are often the times I've been most disconnected from what customers actually need.</p>

<p>Certainty is seductive because it simplifies decision-making. When you're certain, you don't need to maintain multiple hypotheses. You don't need to build in flexibility. You don't need to keep listening for signals that you might be wrong. You just execute.</p>

<p>I once saw a PM so certain about a dashboard redesign that they ignored user testing showing people couldn't find basic functions. "They'll learn the new interface," the PM insisted. Three months post-launch, support tickets were up 40%. Certainty made them blind to evidence. When you're convinced you're right, you stop looking for evidence that you're not. You interpret ambiguous signals in ways that confirm your existing beliefs. You dismiss contradictory feedback as outliers or misunderstandings.</p>

<p>This is why the best PMs I know maintain a healthy skepticism of their own ideas. Not because they lack conviction, but because they know that conviction without continuous validation is just a comfortable way to build the wrong thing.</p>

<p>The question isn't "am I confident in this plan?" The question is "what would I need to see to know this plan is wrong, and am I actively looking for that signal?"</p>

<h2>Building the Muscle</h2>

<p>Learning to be wrong faster is a skill, not just a mindset. Here's how to build that muscle:</p>

<h3>Start with explicit assumptions</h3>

<p>For any major initiative, write down what needs to be true for this to succeed. Not just high-level hopes like "customers will want this," but specific, testable assumptions.</p>

<p>For that AI feature I mentioned earlier, our implicit assumption was: "Vets will adopt AI diagnostic recommendations if they're clinically accurate." That sounds reasonable. But when forced to make it explicit and specific, the real assumption became: "Vets will tolerate manual re-entry of AI recommendations if those recommendations save them clinical reasoning time."</p>

<p>That's a very different bet. And when you write it down that starkly, you immediately see the problem: we were asking vets to trade five minutes of clinical thinking for five minutes of typing. The time savings were zero.</p>

<p>If we'd started with that explicit assumption, we could have tested it with a simple prototype: show vets AI recommendations on a printout and ask them to transcribe it into their medical record. We would have learned in a 30-minute user session what took us three months to discover in production.</p>

<h3>Define "what would prove me wrong"</h3>

<p>For each assumption, explicitly state what evidence would make you rethink your approach. This creates clear decision points and prevents you from rationalizing away contradictory data.</p>

<h3>Build tight feedback loops</h3>

<p>The faster you can test assumptions, the faster you can adjust. Instead of waiting for quarterly research studies, create continuous touchpoints with customers. Build prototypes. Run small experiments. Get signal flowing regularly.</p>

<h3>Separate learning investments from shipping commitments</h3>

<p>When you commit to shipping something by a date, you're stuck. But if you commit to validating an assumption by a date, you preserve optionality. If you learn your assumption was wrong, you can pivot before investing in the full build.</p>

<h3>Practice changing your mind publicly</h3>

<p>Share when you've discovered you were wrong. Explain what you learned and why you're adjusting course. This normalizes pivoting based on evidence and makes it easier for others on your team to do the same.</p>

<p>The point isn't to never be confident. It's to calibrate your confidence to the evidence you have. When you're operating on assumptions, treat them as assumptions. When you've validated something, then you can commit with real conviction.</p>

<h3>The "Wrong Fast" Checklist</h3>

<p>Before committing to build anything significant, I run through this:</p>

<ul>
<li>✓ What's the assumption that needs to be true?</li>
<li>✓ What's the cheapest way to test it?</li>
<li>✓ What would prove me wrong?</li>
<li>✓ Can I test this in 2 weeks or less?</li>
<li>✓ If I'm wrong, what did I learn?</li>
</ul>

<p>If I can't answer these in under 5 minutes, I'm not ready to build.</p>

<h2>The Takeaway</h2>

<img src="/portfolio/being-wrong-faster-infographic.png" alt="Being Wrong Faster Framework - comparing elaborate planning vs quick learning cycles" />

<p>The myth of product management is that great PMs have great instincts. They just know what to build.</p>

<p>The reality is that great PMs have great systems for learning quickly. They know what they don't know. They build feedback loops that expose wrong assumptions early. They optimize for speed of learning, not appearance of certainty.</p>

<p>Your job isn't to be right. Your job is to discover when you're wrong before it costs too much to fix.</p>

<p>Be wrong faster. It's the only way to end up right.</p>`
  },
  {
    id: 2,
    slug: "prioritization-beyond-rice",
    title: "The Art of Prioritization: Beyond the RICE Framework",
    excerpt: "Why scoring frameworks fail and what actually drives strategic prioritization in product management.",
    date: "July 18, 2024",
    readTime: "11 min read",
    category: "Product Strategy",
    image: "",
    imageAlt: "",
    content: `<h1>The Art of Prioritization: Beyond the RICE Framework</h1>

<h2>When the Math Stopped Mattering</h2>

<p>I used to love RICE scoring. Give me a spreadsheet, let me quantify reach, impact, confidence, and effort, and I'd give you a perfectly ranked roadmap. The math felt objective. Scientific. Defensible.</p>

<p>Then I shipped a feature with a RICE score of 847 that absolutely no one used, while the "low priority" item scoring 203 that we'd pushed to Q4 turned out to be the thing customers had been begging for all along.</p>

<p>The problem wasn't the framework. The problem was that I'd confused scoring with strategy.</p>

<p>Credit where it's due: when Intercom's Sean McBride <a href="https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/" target="_blank" rel="noopener noreferrer">created RICE</a>, he was solving a genuine problem. Teams needed a way to compare wildly different initiatives without letting personal bias dominate. RICE gave them that. But here's what I discovered: having an objective method for scoring doesn't mean you're solving the right problem. You can be rigorously quantifying the wrong question.</p>

<p>Traditional prioritization frameworks like RICE, WSJF, or ICE promise to make hard decisions easy. Just plug in the numbers, sort by score, and your roadmap writes itself. But real prioritization isn't a math problem. It's a judgment problem that requires understanding context that no formula can capture.</p>

<h2>Why Scoring Frameworks Fail</h2>

<p>Prioritization frameworks are seductive because they give us what we desperately want: a rational, defensible answer to an impossible question. When you're juggling thirty feature requests, three technical debt initiatives, and two platform bets, the promise of objective prioritization is irresistible.</p>

<p>But here's what those frameworks can't tell you:</p>

<p><strong>They can't see strategic momentum.</strong><br>Sometimes the "right" next move isn't the highest-scoring item. It's the one that unlocks three other things you want to build. A low-scoring API endpoint might be worth building now because it enables the integration strategy you're betting on for next year.</p>

<p><strong>They can't account for team capacity reality.</strong><br>Your scoring might say Feature A (867) beats Feature B (654), but if Feature A requires three months of dedicated backend work and you have exactly one backend engineer who's already committed to a critical migration, the score is meaningless. Real teams have constraints that spreadsheets don't see.</p>

<p><strong>They can't capture learning value.</strong><br>Building something to validate an assumption is fundamentally different from building something to ship at scale. A lightweight prototype that scores low on "reach" might teach you whether your entire product direction makes sense. That learning is worth more than any individual feature.</p>

<p><strong>They create false precision.</strong><br>When you assign "Confidence: 70%" vs "Confidence: 65%", what does that actually mean? You're quantifying intuition, then treating those numbers as if they're measurements. The difference between a RICE score of 758 and 742 is noise, not signal. But once it's in the spreadsheet, we treat 758 as objectively better.</p>

<p><strong>They optimize for features, not outcomes.</strong><br>Frameworks ask "how valuable is this feature?" But the real question is "what outcome are we trying to move, and what's the fastest path to move it?" Sometimes the answer isn't building anything new. It's fixing something that's broken, improving something that exists, or removing something that's confusing.</p>

<p>The moment you realize your highest-scoring items aren't moving your most important metric is the moment you understand that scoring isn't strategy.</p>

<h2>What Actually Drives Prioritization</h2>

<p>So if frameworks don't work, what does? In my experience, good prioritization comes from asking better questions:</p>

<p><strong>1. What's blocking our most important outcome?</strong><br>Start with the metric or outcome that matters most right now. Not the comprehensive list of things that would be nice to improve. The one thing that, if you moved it significantly, would change how the business performs.</p>

<p>Then ask: what's preventing us from moving that number?</p>

<p>Sometimes it's a missing feature. But often it's a broken experience, a confusing flow, a reliability issue, or a gap in the customer's workflow that your product doesn't address. The highest-leverage work is often invisible to feature-based frameworks because it's about fixing or improving, not adding.</p>

<p><strong>2. What can only we do right now?</strong><br>Teams have unique contexts that change what's possible. Your competitor might be able to build Feature X faster, but only you have the infrastructure to build Feature Y. Your backend team might be deep in a migration that makes certain work nearly free but other work impossibly expensive.</p>

<p>Good prioritization accounts for what your specific team, in this specific moment, is uniquely positioned to do well.</p>

<p><strong>3. What do we need to learn?</strong><br>Not every item on your roadmap needs to ship to customers at scale. Some things exist purely to validate assumptions. When you're making a big bet, the highest-leverage work might be a two-week prototype that proves (or disproves) that the bet is worth making.</p>

<p>Frameworks struggle with this because learning doesn't score well on "reach" or "impact." But learning compounds. The information you gain from a small experiment can save months of building the wrong thing.</p>

<p><strong>4. What builds vs. what unlocks?</strong><br>Some features are endpoints. They deliver value, but they're standalone. Other features are foundations. They unlock entire categories of future work.</p>

<p>A platform API might score low because it has no direct user-facing impact. But if it enables ten high-value integrations you want to build over the next year, it's not competing with those integrations. It's enabling them.</p>

<p>This is where strategic sequencing matters more than scoring. Sometimes you build the lower-scoring thing first because it makes everything else possible.</p>

<p><strong>5. What's the cost of waiting?</strong><br>Not all delayed work costs the same. Delaying a nice-to-have feature by two quarters barely matters. Delaying the fix for an issue that's causing 20% of your customers to churn is catastrophically expensive.</p>

<p>Frameworks treat all delayed work equally. Reality doesn't.</p>

<h2>Building Your Own Prioritization System</h2>

<p>Here's what I've found actually works:</p>

<p><strong>Start with clarity on your current goal.</strong><br>Not your goals (plural). Your goal (singular). What's the one outcome you're trying to move right now? Get specific. "Improve adoption" is too vague. "Get 40% of trial users to complete their first project within 7 days" is clear.</p>

<p><strong>Map everything to that goal.</strong><br>For each potential item, don't score it. Just ask: if we did this, would it meaningfully move our goal? If yes, by how much? If no, why are we considering it?</p>

<p>This forces you to articulate your assumptions. "Feature X will improve conversion because users are confused by the current onboarding flow" is a hypothesis you can discuss and validate. "Feature X scores 847" shuts down that conversation.</p>

<p><strong>Separate bets into categories.</strong><br>Not everything competes. You're not choosing between fixing a critical bug and building a new feature. Those are different budgets. I typically think in three buckets:</p>

<ul>
<li><strong>Reliability & Performance</strong> - Things that need to work correctly before you build new things</li>
<li><strong>Core Experience</strong> - Improvements to existing workflows that drive your primary metrics</li>
<li><strong>Strategic Bets</strong> - New capabilities or big architectural changes that unlock future value</li>
</ul>

<p>Each bucket gets capacity. Within each bucket, you prioritize. But you don't pit a platform API against a critical bug fix. They're playing different games.</p>

<p><strong>Include "fast follower" capacity.</strong><br>This is the most important thing most teams miss. If you plan your roadmap to 100% capacity, you have no space to respond when you learn something important or when an unexpected opportunity appears.</p>

<p>I typically allocate 15-20% of capacity to "fast follow work" - things we'll decide on mid-quarter based on what we learn. This isn't slack time. It's strategic flexibility.</p>

<p><strong>Make your assumptions explicit.</strong><br>For anything significant, write down: "We're betting that X will drive outcome Y because we believe Z." This does two things. First, it surfaces when you're actually just guessing. Second, it makes it obvious when you've learned something that invalidates the bet.</p>

<p>When you write "We're building Feature X to improve adoption because users are confused by the current flow," you can check: are users actually confused by the current flow? How do we know? What would prove us wrong? If you can't answer those questions, you're not ready to build.</p>

<p><strong>Review with skepticism, not scoring.</strong><br>When reviewing prioritization, don't ask "what are the scores?" Ask:</p>

<ul>
<li>If we only shipped one thing this quarter, which would it be?</li>
<li>What are we assuming needs to be true for this priority to be right?</li>
<li>What would we need to see to change our minds?</li>
<li>What are we explicitly choosing not to do?</li>
</ul>

<p>The last question is crucial. Every prioritization is a statement about what you won't do. If you can't name what you're saying no to, you haven't actually prioritized. You've just made a wish list.</p>

<h2>When Frameworks Are Actually Useful</h2>

<p>I'm not anti-framework. I'm anti-framework-worship.</p>

<p>Scoring systems are useful when:</p>

<ul>
<li>You're comparing similar types of work (multiple feature requests, multiple bug fixes)</li>
<li>You need a quick filter to eliminate obvious low-value items</li>
<li>You're communicating with stakeholders who need to understand relative priority</li>
</ul>

<p>Where frameworks fail is when we treat them as the decision, rather than as input to the decision.</p>

<p>Use frameworks to structure your thinking. Don't let them replace your judgment.</p>

<h2>What This Looks Like in Practice</h2>

<p>So what does prioritization look like when you're not just sorting by RICE score?</p>

<p><strong>You start with your goal.</strong><br>For us, it was: reduce time-to-first-value for new customers. Specifically, get 50% of trials to successfully complete their first project setup within 3 days.</p>

<p><strong>You map the blockers.</strong><br>Through user research (mostly our lightweight UX teardowns), we found three main issues:</p>

<ul>
<li>API credentials were confusing to generate</li>
<li>The test data flow wasn't obvious</li>
<li>Error messages didn't help users recover</li>
</ul>

<p><strong>You ask: what moves the needle most?</strong><br>All three mattered. But fixing error messages was fast (2 weeks) and would help even after we fixed the other issues. API credentials was the biggest blocker but required backend changes (6 weeks). Test data flow was medium complexity (4 weeks).</p>

<p><strong>You sequence strategically.</strong><br>We did:</p>

<ol>
<li>Error messages first (fast win, helped immediately)</li>
<li>Test data flow second (meaningful improvement, unlocked better onboarding)</li>
<li>API credentials third (biggest impact, but needed the foundation)</li>
</ol>

<p>If we'd just used RICE, we might have jumped straight to API credentials (highest "impact"). But by the time we shipped it, users would have already churned from poor error messages.</p>

<p>This is the difference between scoring and strategy.</p>

<h2>The Takeaway</h2>

<p>Prioritization frameworks promise to make hard decisions easy. But hard decisions are hard because they require judgment about context, timing, constraints, and strategic fit that no formula can capture.</p>

<p>The best prioritization I've seen doesn't come from better scoring. It comes from:</p>

<ul>
<li>Clearer goals</li>
<li>Better understanding of what's actually blocking those goals</li>
<li>Honest assessment of what your team can do well right now</li>
<li>Willingness to sequence work strategically, not just score it independently</li>
</ul>

<p>Stop trying to find the perfect formula. Start asking better questions.</p>

<p>Your roadmap will be better for it.</p>`
  },
  {
    id: 3,
    slug: "continuous-user-research",
    title: "Continuous User Research Without Breaking the Bank",
    excerpt: "How to build a systematic user research practice with no budget, no researchers, and 45 minutes per session.",
    date: "March 12, 2024",
    readTime: "10 min read",
    category: "User Research",
    image: "",
    imageAlt: "",
    content: `<h1>Continuous User Research Without Breaking the Bank</h1>

<h2>The Five-Call Roadmap Reset</h2>

<p>Early in my PM career, I thought "user research" meant hiring a research firm, recruiting participants with screeners, conducting moderated sessions in a lab with a two-way mirror, and spending three months producing a 80-page report.</p>

<p>I also had zero budget, two weeks until our roadmap review, and absolutely no idea if the features we were planning would actually help our users.</p>

<p>So I picked up the phone and called five customers.</p>

<p>Those five conversations changed our entire roadmap. We discovered that 60% of our planned features were solving problems our users didn't have, while the real issue - the one causing them to abandon our product - wasn't on our roadmap at all.</p>

<p>That's when I learned: user research isn't about expensive methodology. It's about systematically learning from the people who use your product before you invest months building the wrong thing.</p>

<h2>The "Perfect Research" Trap</h2>

<p>There's a myth in product management that good user research requires:</p>
<ul>
<li>Formal research training</li>
<li>Significant budget</li>
<li>Dedicated researchers</li>
<li>Weeks of planning</li>
<li>Carefully controlled conditions</li>
<li>Statistical significance</li>
</ul>

<p>This myth is expensive. It's also wrong.</p>

<p>The best user research I've conducted hasn't been in a lab. It's been in parking lots between veterinary appointments, on Zoom calls squeezed into a lunch break, watching someone's screen share as they try to complete a task that should be simple but isn't.</p>

<p>Perfect research is the enemy of continuous learning. By the time you've run the perfect study, your assumptions are already baked into your roadmap and you've spent three months not talking to users.</p>

<p>What matters isn't research purity. It's whether you're learning true things about your users fast enough to make better decisions.</p>

<h2>What "At Scale" Actually Means</h2>

<p>"At scale" doesn't mean "constantly" or "with huge sample sizes." It means building user research into your regular operating rhythm so that learning from users isn't a special event. It's just how you work.</p>

<p>Over fifteen months, I conducted 14+ user studies - some formal, most informal. But the real impact wasn't from any single study. It was from building a system where talking to users was as normal as looking at analytics.</p>

<p>Here's what that looked like:</p>

<p><strong>Weekly customer conversations.</strong> Every week, 2-3 conversations with users. Sometimes existing customers. Sometimes churned users. Sometimes trial users who never converted. No elaborate recruiting. Just asking customer success who they're talking to this week, and whether I can join a call.</p>

<p><strong>Lightweight observation sessions.</strong> Instead of formal usability testing, I'd ask users to share their screen and walk me through their actual workflow. Not a task I assigned them. The real thing they're trying to do. This is where you learn what's actually hard, not what's hard in your test scenario.</p>

<p><strong>Structured but simple methodology.</strong> I developed what I call "UX Teardowns" - a repeatable approach that takes 45 minutes per session, requires no special tools, and generates insights you can act on immediately. The goal isn't comprehensive research. It's systematic learning.</p>

<p>The key is consistency over intensity. Five conversations every month for a year teaches you more than 60 conversations crammed into one month, because you're learning over time how things change, what patterns persist, and what your changes actually impact.</p>

<div class="section-callout">
<h2>The UX Teardown Methodology</h2>
</div>

<p>Here's the approach I've refined through 14+ studies. It's lightweight, repeatable, and doesn't require a research background:</p>

<p><strong>Setup (5 minutes):</strong></p>
<ul>
<li>Ask the user to share their screen</li>
<li>Explain you're trying to understand their workflow, not testing them</li>
<li>Get verbal consent to take notes</li>
<li>Ask about their role and how they use the product</li>
</ul>

<p><strong>Observation (25 minutes):</strong></p>
<ul>
<li>Ask them to show you something they do regularly</li>
<li>Stay quiet and watch</li>
<li>Note moments of hesitation, confusion, or workarounds</li>
<li>Don't help them or explain how things "should" work</li>
<li>Let awkward silences happen - that's when they verbalize their thinking</li>
</ul>

<p><strong>Key questions (10 minutes):</strong></p>
<ul>
<li>"What's the hardest part of [task they just showed]?"</li>
<li>"How did you learn to do that?"</li>
<li>"What would you change if you could?"</li>
<li>"What almost made you stop using this?"</li>
</ul>

<p><strong>Validation (5 minutes):</strong></p>
<ul>
<li>Share back what you heard: "It sounds like X is the biggest friction point. Is that right?"</li>
<li>Ask if there's anything important you missed</li>
<li>Thank them and explain what you'll do with their feedback</li>
</ul>

<p>Total time: 45 minutes. No special software. No incentive budget (though offering a small gift card helps recruiting). No lab.</p>

<p>The magic isn't in the methodology. It's in doing it repeatedly so you start seeing patterns.</p>

<h2>What You Actually Learn</h2>

<p>Formal research is great at answering specific, well-formed questions. Lightweight continuous research is great at discovering the questions you should have been asking.</p>

<p>Through our UX Teardown sessions, I discovered:</p>

<p><strong>The problem behind the feature request.</strong> A customer asked for "better filtering options." Watching her screen, I realized the issue wasn't the filters. It was that our search returned 300 results and she had to manually check each one because the preview didn't show the information she needed. We didn't need better filters. We needed better result previews.</p>

<p><strong>The workaround that revealed broken assumptions.</strong> We saw multiple users keeping a separate spreadsheet to track something our product should have tracked. We thought they just didn't know about our tracking feature. Turned out they knew about it - they just couldn't trust it because it randomly dropped entries. We had a data integrity bug that analytics would never have shown us.</p>

<p><strong>The thing that almost made them churn.</strong> Our retention metrics looked fine. But asking "what almost made you stop using this?" revealed that 50% of new users hit a blocking technical issue in their first week. They only stayed because they'd already bought an annual subscription. We'd optimized onboarding conversion while completely missing the onboarding failure rate.</p>

<p><strong>The surprisingly critical feature we'd ignored.</strong> We'd ranked our help documentation as low priority - users "rarely" clicked on it. Turns out they rarely clicked on it because they couldn't find it. When we improved discoverability, usage jumped 300%. Users had needed help all along. We just made it impossible to access.</p>

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
<ul>
<li>Talk to 2-3 customers this week</li>
<li>Ask them to show you something they do regularly</li>
<li>Watch for friction, confusion, and workarounds</li>
<li>Share what you learned with your team immediately</li>
</ul>

<p>Do that every week for three months. You'll learn more about your users than any single research report could ever teach you.</p>

<p>And you'll build better products because of it.</p>`
  },
  {
    id: 4,
    slug: "80-solution-time-to-first-value",
    title: "The 80% Solution: Time to First Value",
    excerpt: "How I learned that shipping an 80% solution to the majority beats waiting indefinitely for 100% perfection - and gave veterinarians their nights back.",
    date: "December 5, 2025",
    readTime: "8 min read",
    category: "Product Strategy",
    image: "/portfolio/veterinarian-upgrade-service.jpg",
    imageAlt: "Doctor in scrubs working at computer in medical facility",
    content: `<h1>The 80% Solution: Time to First Value</h1>

<p>It's 8:32 PM on a Tuesday night at a veterinary practice.</p>

<p>The last client has paid. The doors are locked. After a twelve-hour day spent saving animals, you should be heading home. Instead, you're standing in an empty hospital rebooting a server so you can start a software upgrade.</p>

<p>Three hours later, you're still there.</p>

<p>You walk the same path again and again - exam rooms, surgery suites, front desk - clicking "Next" on one of eleven computers. Then waiting. Then walking the loop again. Clicking "Next." Waiting. Over and over.</p>

<p>You're a doctor. A highly trained medical professional. And tonight, your job is human automation.</p>

<p>This was the problem that landed on my desk as a young product manager, and it made me furious. I was determined to build something that would make this absurd waste of time disappear.</p>

<p>What I didn't realize was how badly I misunderstood what "solving the problem" actually meant.</p>

<h2>Starting With the Wrong Definition of Success</h2>

<p>When I first learned about how painful upgrades were, my reaction was immediate: <em>we need to do everything for them.</em></p>

<p>Veterinary practices don't have IT teams. They're small businesses focused on patient care. Obviously, the right answer was total automation - a system that upgraded every computer in every practice with zero involvement required.</p>

<p>Complete control. Perfect execution.</p>

<p>Sounds reasonable.</p>

<p>Except I couldn't ship it.</p>

<p>Month after month, the product stayed in beta. There was always one more edge case. One more configuration we couldn't fully support. One more scenario where the automation might fail for a subset of users.</p>

<p>My team was ready. The infrastructure worked. But I wouldn't release it.</p>

<p>Because in my mind, success meant upgrading <em>every</em> computer. Anything less felt like failure. Like we were letting users down.</p>

<p>In reality, I was letting most of them down by waiting.</p>

<h2>The Question That Changed Everything</h2>

<p>A senior PM finally pulled me aside and asked a deceptively simple question:</p>

<blockquote>"What does <em>good enough</em> look like?"</blockquote>

<p>I didn't have an answer.</p>

<p>So I did something I should have done much earlier, I went to the data.</p>

<p>I queried our install base to understand what we were actually dealing with. Which practices could upgrade cleanly? Which couldn't? How many machines did they really have?</p>

<p>The results were eye-opening.</p>

<p>Roughly 80% of practices were on versions we could already support with our new upgrade service. Most of them weren't massive hospitals with complex setups - they had nine to eleven computers, not the twenty-plus I had been designing for.</p>

<p>The remaining 20% were on much older or heavily customized configurations. Many had their own IT support or environments that were never going to be compatible with full automation anyway.</p>

<p>And that's when I realized I'd been asking the wrong question the entire time.</p>

<div class="section-callout">
<h2>Defining Time to First Value</h2>
</div>

<p>The real question wasn't: <em>Can we upgrade every computer?</em></p>

<p>It was:</p>

<p><strong>What is the time to first value for this product?</strong></p>

<p>For this service, time to first value wasn't perfection. It wasn't 100% coverage. It was the moment a veterinary practice could get onto the latest version of the software without staying late in the hospital.</p>

<p>It was when they could:</p>
<ul>
<li>Schedule an upgrade instead of babysitting it</li>
<li>Go home on Tuesday night</li>
<li>Wake up on the latest version with bug fixes, security patches, and new features designed to make their workday easier</li>
</ul>

<p>Once I framed the problem that way, the answer became obvious.</p>

<p>Shipping something that delivered immediate value to 80% of practices was far more impactful than delaying value indefinitely while chasing edge cases that either didn't need us - or couldn't use the service at all.</p>

<h2>Reframing the Real Problem</h2>

<p>Upgrades weren't just painful because they were manual.</p>

<p>They were painful because they:</p>
<ul>
<li>Kept doctors in the hospital long after their workday should have ended</li>
<li>Prevented practices from accessing improvements meant to help them</li>
<li>Increased support burden by keeping customers on outdated versions</li>
</ul>

<p>The real problem we were solving was twofold:</p>
<ol>
<li>Get practices onto the latest version so they could benefit from fixes, features, and improvements</li>
<li>Do it without stealing more time from people whose time was already stretched thin</li>
</ol>

<p>That clarity changed everything.</p>

<h2>What We Actually Shipped</h2>

<p>We stopped trying to do everything.</p>

<p>Instead, we focused on removing the biggest barrier to value: the hours of manual, late-night work required to upgrade nine to eleven computers.</p>

<p>We built:</p>
<ul>
<li>Pre-qualification checks so practices could see upfront which machines would upgrade successfully</li>
<li>Scheduling so upgrades could run overnight</li>
<li>Clear communication about what would happen, what wouldn't, and what to do if something failed</li>
</ul>

<p>We automated what we could control and gave users control where it mattered most.</p>

<p>Now, that exhausted veterinarian at 8:32 PM could schedule an upgrade for the next night and go home, confident the system would handle the tedious work while they slept.</p>

<h2>The Silent Success</h2>

<p>The moment I knew we'd gotten it right didn't come from a meeting or a metric.</p>

<p>It came from watching the first upgrade complete.</p>

<p>No emergency messages. No support calls. No manual intervention from our team.</p>

<p>The practice scheduled the upgrade. The system qualified their computers. The upgrade ran overnight. And the next morning, they were on the latest version.</p>

<p>That silent success - the thing I thought required perfection - only happened once we shipped something "good enough" and let real users validate it.</p>

<h2>What I Learned</h2>

<img src="/portfolio/80 percent info graphic.png" alt="Five key learnings: Time to first value matters more than theoretical completeness, Solving for edge cases can block the majority, Automation without trust isn't helpful, Perfectionism often disguises fear, Your job isn't to be right - it's to learn fast" style="max-width: 600px; margin: 2rem auto; display: block;" />

<h2>The Broader Lesson</h2>

<p>Looking back, my perfectionism wasn't really about protecting users. It was about protecting myself from being wrong.</p>

<p>But by holding the product back, I wasn't avoiding failure, I was prolonging user pain.</p>

<p>The MyCornerstone Upgrade Service ultimately helped thousands of veterinary practices stay current, reduced support burden, and gave doctors their nights back.</p>

<p>None of that would have happened if I'd kept chasing the 100% solution.</p>

<p>Sometimes, 80% shipped - delivered quickly and intentionally - is infinitely more valuable than 100% stuck in your head.</p>`
  }
];
