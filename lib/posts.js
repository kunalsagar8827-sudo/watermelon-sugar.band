export const posts = [
  {
    slug: "why-we-are-starting-from-zero",
    title: "Why We're Starting From Zero",
    date: "2026-08-01",
    excerpt:
      "No members, no shortcuts. Here's why Watermelon Sugar is choosing to build the hard way, from the first audition up.",
    content: [
      "Every band story you've heard probably starts after the hard part is done — the lineup is set, the sound is found, the first show already happened. We're writing this before any of that, because the build is the part worth documenting.",
      "Watermelon Sugar doesn't exist yet in the way that matters. Right now it's an idea, a name, a direction, and a founder willing to hold auditions instead of just recruiting friends. That's a deliberate choice. A band assembled from people who genuinely auditioned, who wanted the role enough to show up for it, holds together differently than one stitched from convenience.",
      "October 2026 is the date we're holding auditions, not because it's symbolic, but because that's when the groundwork — time, funds, a proper rehearsal setup — will actually be ready. Nothing about this is rushed.",
      "If you're reading this before that date, you're early. That's the best time to be paying attention.",
    ],
  },
  {
    slug: "the-sound-were-chasing",
    title: "The Sound We're Chasing",
    date: "2026-08-01",
    excerpt:
      "K-pop's polish, live band energy, and a bit of rooftop-at-sunset grit. What Watermelon Sugar is trying to sound like.",
    content: [
      "K-pop gets dismissed sometimes as purely a production exercise — vocals stacked in a studio, choreography mapped to the frame. What gets missed is how tight the musicianship underneath actually is. That's the part we're chasing: the discipline of K-pop performance, played by a live band that can actually deliver it in a room.",
      "We want vocals that can carry a note across a rooftop without a safety net, guitar and bass that lock in tight enough to feel rehearsed a hundred times over, and a keyboard layer that gives every track texture instead of just filling space. Drums that don't just keep time but make the room move.",
      "It's less about copying a genre and more about borrowing its standards — precision, presentation, and the sense that everyone on stage earned their spot there.",
    ],
  },
  {
    slug: "india-first-then-the-korea-stage",
    title: "India First, Then the Korea Stage",
    date: "2026-08-01",
    excerpt:
      "The dream has always been Korea. Here's why the plan runs through India first, and what that actually looks like.",
    content: [
      "It would be easy to say the goal is Korea and leave it there. It's more honest to say the plan runs through India first, because that's where the real work happens — small shows, rough rehearsals, the unglamorous process of a band figuring out who it is.",
      "India is where Watermelon Sugar earns its stage presence. If the sound lands here, if a room full of strangers reacts to it the way we hope, that's the signal the next stage is worth chasing. Korea isn't the starting point. It's what a good India run is aimed at.",
      "This is also why the audition process matters so much right now. Every person who joins in October 2026 is signing up for the harder, earlier version of this story — not the version where the hard part is already behind us.",
    ],
  },
];

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug);
}
