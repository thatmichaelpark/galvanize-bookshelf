'use strict';

exports.seed = function(knex) {
  return knex('authors').del()
    .then(() => {
      return knex('authors').insert([{
        id: 1,
        first_name: 'Alex',
        last_name: 'Martelli',
        biography: 'Alex Martelli spent 8 years with IBM Research, winning three Outstanding Technical Achievement Awards.He then spent 13 as a Senior Software Consultant at think3 inc, developing libraries, network protocols, GUI engines, event frameworks, and web access frontends. He has also taught programming languages, development methods, and numerical computing at Ferrara University and other venues. He\'s a C++ MVP for Brainbench, and a member of the Python Software Foundation. He currently works for AB Strakt, a Python-centered software house in Goteborg, Sweden, mostly by telecommuting from his home in Bologna, Italy. Alex\'s proudest achievement is the articles that appeared in Bridge World (January/February 2000), which were hailed as giant steps towards solving issues that had haunted contract bridge theoreticians for decades.',
        portrait_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/alex_martelli.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 2,
        first_name: 'Anna',
        last_name: 'Ravenscroft',
        biography: 'Anna Martelli Ravenscroft is an experienced speaker and trainer, with diverse background developing curricula for church, regional transit, disaster preparedness; developing web applications for therapy, learning, fitness; writing technical books, articles and presentations; active member of Open Source community; skilled at translating between IT professionals and end users.',
        portrait_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/anna_ravenscroft.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 3,
        first_name: 'Allen B.',
        last_name: 'Downey',
        biography: 'Allen Downey is a Professor of Computer Science at Olin College of Engineering. He has taught at Wellesley College, Colby College and U.C. Berkeley. He has a Ph.D. in Computer Science from U.C. Berkeley and Master\'s and Bachelor\'s degrees from MIT.',
        portrait_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/allen_downey.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 4,
        first_name: 'Bonnie',
        last_name: 'Eisenman',
        biography: 'Bonnie Eisenman is a software engineer at Codecademy, with previous experience at Fog Creek Software and Google. She has spoken at several conferences on topics ranging from ReactJS to musical programming and Arduinos. In her spare time, she enjoys building electronic musical instruments, tinkering with hardware projects, and laser-cutting chocolate. Find her on Twitter as @brindelle.',
        portrait_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/bonnie_eisenman.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 5,
        first_name: 'Kyle',
        last_name: 'Simpson',
        biography: 'Kyle Simpson is an Open Web Evangelist who\'s passionate about all things JavaScript. He\'s an author, workshop trainer, tech speaker, and OSS contributor/leader.',
        portrait_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/kyle_simpson.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 6,
        first_name: 'George',
        last_name: 'Heineman',
        biography: 'George T. Heineman is an Associate Professor of Computer Science at WPI. His research interests are in Software Engineering. He co-edited the 2001 book "Component-Based Software Engineering: Putting the Pieces Together". He was the Program Chair for the 2005 International Symposium on Component-Based Software Engineering.',
        portrait_url: 'http://cdn.oreillystatic.com/images/people/154/george_heineman1.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 7,
        first_name: 'David',
        last_name: 'Flanagan',
        biography: 'David Flanagan is a computer programmer who spends most of his time writing about JavaScript and Java. His books with O\'Reilly include JavaScript: The Definitive Guide, JavaScript Pocket Reference, Java in a Nutshell, Java Examples in a Nutshell, and Java Foundation Classes in a Nutshell.',
        portrait_url: 'http://cdn.oreillystatic.com/images/people/154/george_heineman1.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 8,
        first_name: 'Jay',
        last_name: 'McGavren',
        biography: 'Jay McGavren was doing automation for a hotel services company when a colleague introduced him to Programming Perl (a.k.a. the Camel Book). It made him an instant Perl convert, as he liked actually writing code instead of waiting for a 10-person development team to configure a build system. It also gave him the crazy idea to write a technical book someday.',
        portrait_url: 'http://cdn.oreillystatic.com/images/people/154/jay_mcgavren1.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 9,
        first_name: 'Shyam',
        last_name: 'Seshadri',
        biography: 'Currently based out of India, Shyam Seshadri is the CEO of Fundoo Solutions (http://www.befundoo.com), Ex-Googler, Author and Chef. He currently spends his time working on interesting product ideas, conducting training sessions internationally on AngularJS & NodeJS, and providing development and architecture consulting on AngularJS, NodeJS and Mobile applications. He conducts extensive, customized two and three day, hands-on workshops for AngularJS & NodeJS, which have been well received internationally.',
        portrait_url: 'http://cdn.oreillystatic.com/images/people/154/shyam_seshadri-1.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 10,
        first_name: 'Ethan',
        last_name: 'Brown',
        biography: 'Ethan Brown is a senior software engineer at Pop Art, a Portland-based interactive marketing agency, where he is responsible for the architecture and implementation of web sites and web services for clients ranging from small businesses to international enterprise companies. He has over twenty years of programming experience, from embedded to the web, and has embraced the JavaScript stack as the web platform of the future.',
        portrait_url: 'http://cdn.oreillystatic.com/images/people/154/ethan_brown.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 11,
        first_name: 'Chris',
        last_name: 'Mayfield',
        biography: 'Chris Mayfield is an Assistant Professor of Computer Science at James Madison University. He has a Ph.D. in Computer Science from Purdue University and Bachelor\'s degrees in CS and German from the University of Utah. His research focuses on CS education and K-12.',
        portrait_url: 'http://cdn.oreillystatic.com/images/people/154/ethan_brown.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 12,
        first_name: 'Julia',
        last_name: 'Elman',
        biography: 'Julia Elman is a designer, developer, author, speaker and tech education advocate based in North Carolina and has been working her brand of web skills since 2002. Her creative nature drove her to find work at Hallmark Cards, Inc in 2007 where she worked on projects such as the Product (RED) campaign and Hallmark\'s site re-design. From there, she took a dive into Django as a Junior Designer/Developer at World Online in Lawrence, KS. In early 2013, she helped start a local chapter of Girl Develop It and empowered over 1000 members to learn computer programming. She also helped organize the 2013 Teen Tech Camp, where 20 local teens learned Python programming in a one-day event.',
        portrait_url: 'http://cdn.oreillystatic.com/images/people/154/julia_elman-1.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('authors_id_seq', (SELECT MAX(id) FROM authors));"
      );
    });
};
