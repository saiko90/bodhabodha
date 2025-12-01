import { createClient } from '@sanity/client'

// CONFIGURATION
const client = createClient({
  projectId: '0vpdrtth',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk37pCgGdxjAApRWNIZLsfweYdlbVHO2AdC4KNHbp3iQn39l9SNdIIl1k6dG948Q2A5pNaFMWjVK4yoGbf7xrpCsRNYtp2EPyYVS9MHCtg8rHUFLYNqI3UJBFUN8OT6D3P9eSklQx9lgVhYgLCMBQl5HADCP636KyQlhSvSfJuIUjiFo0tZB',
  useCdn: false,
})

// LES DONNÉES (Déjà formatées d'après le doc Word)
const questions = [
  {
    _type: 'question',
    text: "What brings you to AWARE right now?",
    answers: [
      { stage: 'red', text: "I'm looking for my soulmate, partner, other half" },
      { stage: 'orange', text: "I'm looking for someone I really connect with" },
      { stage: 'yellow', text: "My usual approach to relationships hasn't been working" },
      { stage: 'green', text: "I'm being more careful about who I partner with now" },
      { stage: 'trueblue', text: "I want to be more thoughtful about relationships" },
      { stage: 'indigogo', text: "I'm interested in a more intentional approach to partnership" },
      { stage: 'whitelight', text: "I'm curious about a more conscious approach to coupling" }
    ]
  },
  {
    _type: 'question',
    text: "What happens when you feel strong attraction to someone?",
    answers: [
      { stage: 'red', text: "Excited—like they might be exactly what's been missing" },
      { stage: 'orange', text: "Hopeful this could really be something special" },
      { stage: 'yellow', text: "Cautiously optimistic but trying not to get my hopes up too high" },
      { stage: 'green', text: "Interested but a bit guarded" },
      { stage: 'trueblue', text: "Curious to see if our values actually align" },
      { stage: 'indigogo', text: "Aware of the attraction but checking if it's genuine or familiar pattern" },
      { stage: 'whitelight', text: "Interested and grounded about it" }
    ]
  },
  {
    _type: 'question',
    text: "What's been your experience with relationships so far?",
    answers: [
      { stage: 'red', text: "I'm taking a completely fresh approach to relationships" },
      { stage: 'orange', text: "I've had some promising starts but nothing has worked out yet" },
      { stage: 'yellow', text: "People never seem to be who they appeared to be at first" },
      { stage: 'green', text: "It's been harder than I expected" },
      { stage: 'trueblue', text: "I'm taking a break to figure out what I actually want" },
      { stage: 'indigogo', text: "I'm trying to be more conscious about my choices this time" },
      { stage: 'whitelight', text: "I've learned a lot about myself through relationships" }
    ]
  },
  {
    _type: 'question',
    text: "When you think about your ideal relationship, what matters most?",
    answers: [
      { stage: 'red', text: "Finding someone who complements me—who has strengths where I have weaknesses" },
      { stage: 'orange', text: "That effortless chemistry where everything just flows" },
      { stage: 'yellow', text: "Someone who's actually reliable and follows through on what they say" },
      { stage: 'green', text: "Feeling safe and not getting hurt again" },
      { stage: 'trueblue', text: "Building something based on shared values and honesty" },
      { stage: 'indigogo', text: "Two people who are both whole on their own choosing to be together" },
      { stage: 'whitelight', text: "Partnership between equals who both have meaningful lives" }
    ]
  },
  {
    _type: 'question',
    text: "When you're meeting someone you're attracted to for the first time, how do you feel?",
    answers: [
      { stage: 'red', text: "Hoping they'll be as great in person as they seemed initially" },
      { stage: 'orange', text: "Excited and optimistic about the possibilities" },
      { stage: 'yellow', text: "A bit skeptical but willing to give it a shot" },
      { stage: 'green', text: "Nervous and trying not to overthink it" },
      { stage: 'trueblue', text: "Curious to see if there's genuine compatibility" },
      { stage: 'indigogo', text: "Present and paying attention to how I actually feel, not just the chemistry" },
      { stage: 'whitelight', text: "Relaxed and seeing what naturally unfolds" }
    ]
  },
  {
    _type: 'question',
    text: "What's your biggest challenge in dating right now?",
    answers: [
      { stage: 'red', text: "Finding someone who's actually right for me" },
      { stage: 'orange', text: "Turning initial chemistry into something lasting" },
      { stage: 'yellow', text: "People not living up to how they present themselves" },
      { stage: 'green', text: "Trusting again after being let down" },
      { stage: 'trueblue', text: "Being clear about what I actually want" },
      { stage: 'indigogo', text: "Not falling back into old patterns" },
      { stage: 'whitelight', text: "Finding someone at the same level of self-awareness" }
    ]
  },
  {
    _type: 'question',
    text: "What do you notice about the people you're usually attracted to?",
    answers: [
      { stage: 'red', text: "They tend to have qualities or a lifestyle I admire" },
      { stage: 'orange', text: "There's usually instant chemistry and it feels different each time" },
      { stage: 'yellow', text: "They seem great initially but there are usually similar issues later" },
      { stage: 'green', text: "I'm not sure—I'm questioning my usual type" },
      { stage: 'trueblue', text: "I'm realizing I've been attracted to the same type repeatedly" },
      { stage: 'indigogo', text: "I can see what draws me to them and I'm being more selective now" },
      { stage: 'whitelight', text: "I'm attracted to people who are independent and fulfilled" }
    ]
  },
  {
    _type: 'question',
    text: "How do you handle it when someone you're dating disappoints you?",
    answers: [
      { stage: 'red', text: "I usually give them the benefit of the doubt and hope things improve" },
      { stage: 'orange', text: "I'm surprised because they seemed so different from that" },
      { stage: 'yellow', text: "I'm frustrated because it feels like the same thing happening again" },
      { stage: 'green', text: "It hits harder than it probably should" },
      { stage: 'trueblue', text: "I take time to reflect on what happened and what I can learn" },
      { stage: 'indigogo', text: "I notice my reaction and try to respond thoughtfully rather than automatically" },
      { stage: 'whitelight', text: "I observe it without taking it personally" }
    ]
  },
  {
    _type: 'question',
    text: "What makes you lose interest in someone you're dating?",
    answers: [
      { stage: 'red', text: "If they're missing the qualities I'm looking for" },
      { stage: 'orange', text: "If the initial connection doesn't feel as strong as I thought" },
      { stage: 'yellow', text: "If they do something that reminds me of past disappointments" },
      { stage: 'green', text: "If they seem like they might hurt me" },
      { stage: 'trueblue', text: "If our values or life goals don't align" },
      { stage: 'indigogo', text: "If I notice I'm falling into an old pattern with them" },
      { stage: 'whitelight', text: "If they're not genuinely available or ready for partnership" }
    ]
  },
  {
    _type: 'question',
    text: "How do you feel about being single right now?",
    answers: [
      { stage: 'red', text: "Restless—I'm ready for something to change" },
      { stage: 'orange', text: "Hopeful that I'll meet the right person soon" },
      { stage: 'yellow', text: "Tired of it—I've been doing this for a while" },
      { stage: 'green', text: "Uncertain and a bit vulnerable" },
      { stage: 'trueblue', text: "Okay with it—I'm using this time to work on myself" },
      { stage: 'indigogo', text: "Content but open to meeting someone who's right" },
      { stage: 'whitelight', text: "Content with my life and curious about the creative possibilities of partnership" }
    ]
  },
  {
    _type: 'question',
    text: "When someone you're dating pulls away or seems distant, what do you typically do?",
    answers: [
      { stage: 'red', text: "Worry they're losing interest and try harder to connect" },
      { stage: 'orange', text: "Feel confused because things seemed so good" },
      { stage: 'yellow', text: "Feel frustrated—this is exactly what always happens" },
      { stage: 'green', text: "Feel anxious and wonder what I did wrong" },
      { stage: 'trueblue', text: "Take space to think about whether this relationship is right for me" },
      { stage: 'indigogo', text: "Notice the pattern and check in with myself about how to respond" },
      { stage: 'whitelight', text: "Give them space while staying grounded in myself" }
    ]
  },
  {
    _type: 'question',
    text: "How comfortable are you with emotional intimacy in relationships?",
    answers: [
      { stage: 'red', text: "I crave it and want to connect deeply as soon as possible" },
      { stage: 'orange', text: "I'm very open to it when there's chemistry" },
      { stage: 'yellow', text: "I want it but I've been let down too many times" },
      { stage: 'green', text: "I want it but I'm afraid of getting hurt" },
      { stage: 'trueblue', text: "I'm learning what healthy intimacy looks like for me" },
      { stage: 'indigogo', text: "I'm comfortable with it when it develops naturally and mutually" },
      { stage: 'whitelight', text: "I'm comfortable with deep connection and maintaining my independence" }
    ]
  },
  {
    _type: 'question',
    text: "After a promising first encounter with someone, how do you feel?",
    answers: [
      { stage: 'red', text: "Excited and already imagining a future with them" },
      { stage: 'orange', text: "Hopeful and wanting to see them again as soon as possible" },
      { stage: 'yellow', text: "Cautiously optimistic but preparing myself for disappointment" },
      { stage: 'green', text: "Happy it went well but a bit anxious about what comes next" },
      { stage: 'trueblue', text: "Interested and taking time to see if my feelings are genuine" },
      { stage: 'indigogo', text: "Positive and curious to see how things develop naturally" },
      { stage: 'whitelight', text: "Pleased and relaxed about letting things unfold" }
    ]
  },
  {
    _type: 'question',
    text: "How important is regular communication when you're getting to know someone?",
    answers: [
      { stage: 'red', text: "Very important—I feel anxious when I don't hear from them" },
      { stage: 'orange', text: "Important—I like staying connected and feeling close" },
      { stage: 'yellow', text: "Important but I'm skeptical when they don't follow through" },
      { stage: 'green', text: "Important—gaps in communication make me uneasy" },
      { stage: 'trueblue', text: "Somewhat important but I'm learning to be okay with space" },
      { stage: 'indigogo', text: "Nice but not essential—I trust things are fine without constant contact" },
      { stage: 'whitelight', text: "I appreciate communication but I don't need it to feel secure" }
    ]
  },
  {
    _type: 'question',
    text: "How do you feel when someone you're interested in wants to take things slow?",
    answers: [
      { stage: 'red', text: "I worry it means they're not that interested" },
      { stage: 'orange', text: "Confused because I thought we had something special" },
      { stage: 'yellow', text: "Frustrated—this is what they all say before it falls apart" },
      { stage: 'green', text: "Worried I did something wrong or they're pulling away" },
      { stage: 'trueblue', text: "I check in with myself about whether I'm okay with their pace" },
      { stage: 'indigogo', text: "Comfortable—I appreciate when both people are thoughtful about timing" },
      { stage: 'whitelight', text: "Fine—I'm not in a rush either" }
    ]
  },
  {
    _type: 'question',
    text: "How do you feel about people depending on you emotionally?",
    answers: [
      { stage: 'red', text: "I want to be the person they can rely on completely" },
      { stage: 'orange', text: "It feels good to be needed and trusted that way" },
      { stage: 'yellow', text: "I've done it before and it always ends up being too much" },
      { stage: 'green', text: "It's overwhelming but I don't know how to say no" },
      { stage: 'trueblue', text: "I'm learning to support without taking responsibility for their feelings" },
      { stage: 'indigogo', text: "I'm happy to support them but they need to handle their own emotions" },
      { stage: 'whitelight', text: "I can be there for them without carrying what's theirs to carry" }
    ]
  },
  {
    _type: 'question',
    text: "When a relationship doesn't work out, what do you typically think?",
    answers: [
      { stage: 'red', text: "They weren't the right person for me" },
      { stage: 'orange', text: "We just weren't compatible after all" },
      { stage: 'yellow', text: "They didn't live up to what I needed" },
      { stage: 'green', text: "Maybe I did something wrong" },
      { stage: 'trueblue', text: "I think about what I could have done differently" },
      { stage: 'indigogo', text: "I look at what we both contributed to it not working" },
      { stage: 'whitelight', text: "It wasn't the right fit for either of us" }
    ]
  },
  {
    _type: 'question',
    text: "What makes a relationship feel fulfilling to you?",
    answers: [
      { stage: 'red', text: "When they treat me the way I need to be treated" },
      { stage: 'orange', text: "When we both make each other feel valued and loved" },
      { stage: 'yellow', text: "When they actually show up the way they should" },
      { stage: 'green', text: "When I feel secure and they're consistent" },
      { stage: 'trueblue', text: "When I can be myself and they accept me" },
      { stage: 'indigogo', text: "When we both bring our best and support each other's growth" },
      { stage: 'whitelight', text: "When both people have rich lives and partnership adds a new dimension" }
    ]
  },
  {
    _type: 'question',
    text: "If you keep experiencing similar issues in dating, what would you think?",
    answers: [
      { stage: 'red', text: "I keep meeting the wrong people" },
      { stage: 'orange', text: "I haven't found the right match yet" },
      { stage: 'yellow', text: "People keep doing the same disappointing things" },
      { stage: 'green', text: "Maybe there's something about me that attracts this" },
      { stage: 'trueblue', text: "I need to understand what I'm doing that creates this pattern" },
      { stage: 'indigogo', text: "I'm probably repeating something I need to change" },
      { stage: 'whitelight', text: "There's a pattern I'm contributing to and I can shift it" }
    ]
  },
  {
    _type: 'question',
    text: "What needs to change for your dating life to improve?",
    answers: [
      { stage: 'red', text: "I need to meet different types of people" },
      { stage: 'orange', text: "I need to find someone who's actually right for me" },
      { stage: 'yellow', text: "People need to be more honest about who they are" },
      { stage: 'green', text: "I need to feel more confident and secure" },
      { stage: 'trueblue', text: "I need to understand myself and what I really want" },
      { stage: 'indigogo', text: "I need to keep working on my patterns and choices" },
      { stage: 'whitelight', text: "Nothing needs to change—I'm open to what unfolds" }
    ]
  }
];

// FONCTION D'IMPORT
async function importData() {
  console.log(`🚀 Démarrage de l'import de ${questions.length} questions...`);
  
  try {
    const transaction = client.transaction();
    
    questions.forEach((doc, index) => {
      transaction.createOrReplace({
        _id: `question-${index + 1}`, // IDs fixes pour éviter les doublons
        ...doc
      });
    });

    const result = await transaction.commit();
    console.log('✅ Import terminé avec succès !', result);
  } catch (error) {
    console.error('❌ Erreur lors de l\'import :', error.message);
  }
}

importData();