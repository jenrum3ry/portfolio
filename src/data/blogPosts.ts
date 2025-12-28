export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  tags: string[];
  image: string;
  imageAlt: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "being-wrong-faster",
    title: "The PM's Real Job: Being Wrong Faster",
    excerpt: "The best product managers aren't the ones with all the answers—they're the ones who discover their mistakes quickly and course-correct before those mistakes become expensive.",
    content: `# The PM's Real Job: Being Wrong Faster

There's a myth in product management that the best PMs always know what to build. That they walk into a room, synthesize complex inputs, and confidently declare the path forward.

I spent years trying to be that PM. The one with the perfect roadmap. The airtight strategy. The answer to every stakeholder question.

It was exhausting. And worse—it was wrong.

## The Confidence Trap

Early in my career, I thought confidence meant having answers. If I didn't know something, I'd figure it out before the meeting. If a stakeholder asked a question I couldn't answer, I'd scramble to fill the gap rather than admit uncertainty.

This approach has two problems:

1. **It's slow.** Waiting until you have perfect information means you're always behind.
2. **It's brittle.** When reality inevitably contradicts your carefully constructed plan, you're stuck defending it instead of adapting.

The PM who projects certainty might look impressive in the room. But they're often building the wrong thing—and discovering it far too late.

## What If the Job Isn't Having Answers?

A few years ago, I was leading a greenfield AI product from concept to production. We were building something veterinary practices had never seen before, solving problems they'd described in vague, contradictory ways.

I could have spent months researching, spec'ing, and perfecting the solution before building anything. Instead, we shipped an MVP in weeks.

It wasn't pretty. It didn't have half the features I thought we'd need. But it put something real in front of users—and their reactions taught us more in two weeks than six months of planning could have.

Some things worked better than expected. Others failed spectacularly. And that was the point.

**The goal wasn't to be right. It was to be wrong faster.**

## Building Systems to Discover Mistakes

The best PMs I know aren't the ones who avoid mistakes—they're the ones who:

- **Ship quickly** to get real feedback instead of hypothetical opinions
- **Run small experiments** before committing to big bets
- **Talk to users constantly** instead of building in isolation
- **Kill features early** when data shows they're not working
- **Celebrate course corrections** instead of defending original plans

This isn't about being reckless. It's about being deliberate. It's about building systems that help you discover—and fix—mistakes before they become catastrophic.

## What This Looks Like in Practice

Instead of spending three months building the "right" solution, we:

- Built a rough prototype in two weeks
- Put it in front of five early adopter practices
- Watched them struggle with the parts we thought were intuitive
- Saw them love the parts we almost cut for being "too simple"
- Rebuilt the product based on what we learned

The final product looked nothing like the initial plan. But it worked—because we were willing to be wrong early and often.

## The Real Skill

The hardest part of product management isn't knowing what to build. It's knowing how to learn what to build.

That means:
- Asking better questions instead of providing confident answers
- Admitting when you don't know something
- Shipping before you're comfortable
- Treating every launch as a learning opportunity
- Measuring what matters and killing what doesn't

Being wrong faster isn't about lowering your standards. It's about raising them.

Because the only thing worse than being wrong is being wrong for a long time—and taking your users, your team, and your company down with you.

## What I Wish I'd Known Earlier

If I could go back and tell my younger self one thing, it would be this:

**Your job isn't to have all the answers. Your job is to build systems that help you discover the answers faster than anyone else.**

The PMs who succeed aren't the ones who never make mistakes. They're the ones who make their mistakes small, early, and recoverable.

They're the ones who ship to learn.

And they're the ones who understand that in product management, being wrong faster is the only way to end up right.`,
    date: "December 2025",
    author: "Jen Rumery",
    readTime: "7 min read",
    tags: ["Product Strategy", "Agile", "User Research", "MVP"],
    image: "/portfolio/pm-strategy-illustration.png",
    imageAlt: "Abstract illustration representing product strategy and iteration"
  },
  {
    id: "80-solution-time-to-first-value",
    title: "The 80% Solution: Time to First Value and My First Greenfield Product",
    excerpt: "How I learned that shipping an 80% solution to the majority beats waiting indefinitely for 100% perfection—and gave veterinarians their nights back.",
    content: `# The 80% Solution: Time to First Value and My First Greenfield Product

It's 8:32 PM on a Tuesday night at a veterinary practice.

The last client has paid. The doors are locked. After a twelve-hour day spent saving animals, you should be heading home. Instead, you're standing in an empty hospital rebooting a server so you can start a software upgrade.

Three hours later, you're still there.

You walk the same path again and again—exam rooms, surgery suites, front desk—clicking "Next" on one of eleven computers. Then waiting. Then walking the loop again. Clicking "Next." Waiting. Over and over.

You're a doctor. A highly trained medical professional. And tonight, your job is human automation.

This was the problem that landed on my desk as a young product manager, and it made me furious. I was determined to build something that would make this absurd waste of time disappear.

What I didn't realize was how badly I misunderstood what "solving the problem" actually meant.

---

## Starting With the Wrong Definition of Success

When I first learned about how painful upgrades were, my reaction was immediate: *we need to do everything for them.*

Veterinary practices don't have IT teams. They're small businesses focused on patient care. Obviously, the right answer was total automation—a system that upgraded every computer in every practice with zero involvement required.

Complete control. Perfect execution.

Sounds reasonable.

Except I couldn't ship it.

Month after month, the product stayed in beta. There was always one more edge case. One more configuration we couldn't fully support. One more scenario where the automation might fail for a subset of users.

My team was ready. The infrastructure worked. But I wouldn't release it.

Because in my mind, success meant upgrading *every* computer. Anything less felt like failure. Like we were letting users down.

In reality, I was letting most of them down by waiting.

---

## The Question That Changed Everything

A senior PM finally pulled me aside and asked a deceptively simple question:

> "What does *good enough* look like?"

I didn't have an answer.

So I did something I should have done much earlier—I went to the data.

I queried our install base to understand what we were actually dealing with. Which practices could upgrade cleanly? Which couldn't? How many machines did they really have?

The results were eye-opening.

Roughly 80% of practices were on versions we could already support with our new upgrade service. Most of them weren't massive hospitals with complex setups—they had nine to eleven computers, not the twenty-plus I had been designing for.

The remaining 20% were on much older or heavily customized configurations. Many had their own IT support or environments that were never going to be compatible with full automation anyway.

And that's when I realized I'd been asking the wrong question the entire time.

---

## Defining Time to First Value

The real question wasn't: *Can we upgrade every computer?*

It was: **What is the time to first value for this product?**

For this service, time to first value wasn't perfection. It wasn't 100% coverage. It was the moment a veterinary practice could get onto the latest version of the software **without staying late in the hospital**.

It was when they could:
- Schedule an upgrade instead of babysitting it
- Go home on Tuesday night
- Wake up on the latest version with bug fixes, security patches, and new features designed to make their workday easier

Once I framed the problem that way, the answer became obvious.

Shipping something that delivered immediate value to 80% of practices was far more impactful than delaying value indefinitely while chasing edge cases that either didn't need us—or couldn't use the service at all.

---

## Reframing the Real Problem

Upgrades weren't just painful because they were manual.

They were painful because they:
- Kept doctors in the hospital long after their workday should have ended
- Prevented practices from accessing improvements meant to help them
- Increased support burden by keeping customers on outdated versions

The real problem we were solving was twofold:
1. Get practices onto the latest version so they could benefit from fixes, features, and improvements
2. Do it without stealing more time from people whose time was already stretched thin

That clarity changed everything.

---

## What We Actually Shipped

We stopped trying to do everything.

Instead, we focused on removing the biggest barrier to value: the hours of manual, late-night work required to upgrade nine to eleven computers.

We built:
- Pre-qualification checks so practices could see upfront which machines would upgrade successfully
- Scheduling so upgrades could run overnight
- Clear communication about what would happen, what wouldn't, and what to do if something failed

We automated what we could control and gave users control where it mattered most.

Now, that exhausted veterinarian at 8:32 PM could schedule an upgrade for the next night and go home—confident the system would handle the tedious work while they slept.

---

## The Silent Success

The moment I knew we'd gotten it right didn't come from a meeting or a metric.

It came from watching the first upgrade complete.

No emergency messages. No support calls. No manual intervention from our team.

The practice scheduled the upgrade. The system qualified their computers. The upgrade ran overnight. And the next morning, they were on the latest version.

That silent success—the thing I thought required perfection—only happened once we shipped something "good enough" and let real users validate it.

---

## What I Learned

1. **Time to first value matters more than theoretical completeness.** Value delayed is value denied.
2. **Solving for edge cases can block the majority.** Data helps separate real user needs from imagined ones.
3. **Automation without trust isn't helpful.** Transparency and control build confidence.
4. **Perfectionism often disguises fear.** Shipping is how you learn.
5. **Your job isn't to be right—it's to learn fast.**

---

## The Broader Lesson

Looking back, my perfectionism wasn't really about protecting users. It was about protecting myself from being wrong.

But by holding the product back, I wasn't avoiding failure—I was prolonging user pain.

The MyCornerstone Upgrade Service ultimately helped thousands of veterinary practices stay current, reduced support burden, and gave doctors their nights back.

None of that would have happened if I'd kept chasing the 100% solution.

Sometimes, 80% shipped—delivered quickly and intentionally—is infinitely more valuable than 100% stuck in your head.`,
    date: "September 3, 2023",
    author: "Jen Rumery",
    readTime: "8 min read",
    tags: ["Product Strategy", "Time to Value", "User Research", "Shipping", "80/20 Rule"],
    image: "/portfolio/80-solution-hero.png",
    imageAlt: "Illustration representing the balance between perfection and shipping value"
  }
];
