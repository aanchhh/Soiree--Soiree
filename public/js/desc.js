document.addEventListener('DOMContentLoaded', function() {
    const backBtn = document.getElementById('back-btn');
    const fullContent = document.getElementById('full-content');

    backBtn.addEventListener('click', function() {
        window.history.back();
    });

    // Logic to fetch and display blog content based on ID
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get('id'); // Assuming you pass blog id in query parameter

    // Example blog data (replace with your dynamic fetching logic)
    const blogsData = {
        blog1: {
            title: "Benefits of Lemons",
            date: "September 7th, 2024",
            content: `
                <img src="./images/lemon.png" /><br><br>
                <p>Lemons are more than just a sour addition to your lemonade. These bright yellow
                fruits are packed with nutrients and offer a surprising range of health benefits.
                Let's take a look at why you should consider incorporating more lemons into your diet.<br>
                <u><b>Vitamin C Powerhouse: </b></u>One of the most well-known benefits of lemons is their
                high vitamin C content. Just one lemon can provide nearly half of your daily recommended
                intake of vitamin C, which is essential for a healthy immune system.<br>
                <u><b>Lemons for a Happy Gut: </b></u> Our gut is home to trillions of bacteria, both good 
                and bad. A healthy balance is key for optimal digestion and overall well-being. Lemons, with 
                their citric acid content, may play a role in supporting this balance. Here's how:
                <ol>
                <li><i><u>Aiding Digestion:</u></i> The citric acid in lemons can stimulate the production of 
                stomach acid, which helps break down food for better nutrient absorption.</li>
                <li><i><u>Fiber Power: </u></i>The white, pulpy part of the lemon, often discarded, contains 
                pectin, a soluble fiber. This fiber acts like a prebiotic, feeding the good bacteria in your gut 
                and promoting a healthy gut environment.</li></ol>
                <u><b><p>Lemons for Glowing Skin:</b></u> Lemons aren't just good for your insides; they can also be 
                your skin's best friend!</p>
                <ol>
                <li><i><u>Natural Exfoliant: </u></i>The citric acid in lemons has mild exfoliating properties. This can help remove 
                dead skin cells, revealing a brighter, smoother complexion. However, be gentle, as overuse can irritate 
                sensitive skin.</li></ol><br></p>`
        },
        blog2: {
            title: "Your Guide to become the Best You",
            date: "June 11th, 2024",
            content: `
            <img src="./images/best version of you.png" /> <br><br>
            <p>The year is in full swing, but it's never too late to set your sights on self-improvement! 
            Whether you're looking to boost your health, master new skills, or simply become 
            a more mindful individual, 2024 can be the year you reach your full potential. Here are some tips to get you started:<br>
            <u><b>Define Your "Best Self": </b></u> The best version of you isn't someone else - it's the
            person you're striving to become. Who do you truly aspire to be? What lights you up? What kind of impact do you want to make?<br>
            <u><b>Cultivate a Growth Mindset:</b></u> Believe in your ability to learn and improve. Setbacks are inevitable, but they're not roadblocks. View challenges as opportunities 
            to develop resilience and new skills. Celebrate small wins, and remember, progress over perfection!<br>
            <u><b>Prioritize Your Wellbeing: </b></u>You can't pour from an empty cup. Taking care of yourself physically and mentally is essential. This includes getting enough sleep, 
            eating nutritious foods, and finding healthy ways to manage stress. Consider activities like meditation, yoga, or spending time in nature.<br>
            <u><b>Fuel Your Body and Mind:</b></u> What you put in is what you get out. Nourish your body with a balanced diet rich in fruits, vegetables, and whole grains. Don't forget 
            to feed your mind too! Read books, listen to educational podcasts, or take courses that pique your interest.<br>
            <u><b>Embrace Continuous Learning:</b></u> The world is constantly evolving, and so should you. Stay curious and open to learning new things. Take an online class, attend workshops, 
            or strike up conversations with people from different backgrounds.<br>
            <u><b>Build Strong Relationships: </b></u>Humans are social creatures. Surround yourself with positive, supportive people who encourage your growth. Invest time in nurturing these 
            relationships, and don't be afraid to ask for help when you need it.<br>
            <u><b>Celebrate Your Uniqueness: </b></u> We all have unique strengths, quirks, and experiences. Embrace what makes you, you! Don't compare yourself to others; focus on your own 
            journey and celebrate your individuality.<br>
            <u><b>Practice Self-Compassion: </b></u> Be kind to yourself. We all make mistakes, and that's okay. Forgive yourself, learn from your experiences, and move forward with grace.<br>
            <i><u>Remember:</u></i> Becoming your best self is a continuous process, not a destination. There will be ups and downs, but with dedication and self-compassion, you'll blossom into 
            the amazing person you were meant to be. So, embrace the journey, enjoy the growth, and keep shining brightly in 2024!<br></p>`
        },
        blog3: {
            title: "Best skincare products in town",
            date: "January 18th, 2024",
            content: `
            <img src="./images/skincare.png" /><br><br>
            <p>The world of skincare is constantly evolving, with new trends and products emerging all the time. 
            But some products manage to stand out from the crowd, becoming cult favorites that deliver real results.<br>
            <u><b>Niacinamide Powerhouses: </b></u> Niacinamide, a form of vitamin B3, has quickly become a skincare superstar. 
            This multi-tasking ingredient tackles a variety of concerns, from minimizing pores and blemishes to improving skin 
            texture and barrier function. Serums with high concentrations of niacinamide have become a staple in many routines, 
            and for good reason.<br>
            <u><b>The Rise of Korean Essences: </b></u>  Korean beauty trends have taken the world by storm, and essences are a prime example. 
            These lightweight, hydrating liquids pack a punch of beneficial ingredients. They prep your skin for serums and moisturizers, 
            leaving it plump and dewy.<br>
            <u><b>SPF Revolution: </b></u> Thankfully, the importance of sunscreen is no longer a secret. But the past few years have seen a surge in innovative 
            sunscreens that offer high protection without the greasy, white cast of the past. Look for lightweight formulas with SPF 30 or higher 
            that are comfortable to wear every day.<br>
            <u><b>Cica (Centella Asiatica) Soothers: </b></u>Centella Asiatica, also known as cica, has become a go-to ingredient for calming and soothing irritated skin. 
            This botanical extract helps reduce inflammation, promote healing, and strengthen the skin barrier. Cica creams and ointments are perfect for those 
            with sensitive skin or redness concerns.<br>
            <u><b>The Acid Reign: </b></u>AHAs (alpha hydroxy acids) and BHAs (beta hydroxy acids) have long been used for exfoliation and tackling various skin concerns. 
            However, recent advancements have led to gentler and more targeted acid formulations. These allow for more personalized exfoliation routines that address
            specific concerns without irritation.<br>
            <u><b>Remember: </b></u>While these products are standouts, finding the perfect skincare routine is a personal journey. It's important to consider your unique skin type 
            and concerns when choosing products.  Consult a dermatologist for personalized advice, especially if you have any underlying skin conditions.<br>
            <u><b>Bonus Tip: </b></u>Don't forget the power of consistency!  For these products to work their magic, you need to use them regularly as directed. So ditch the product 
            hopping and give your skin a chance to experience the transformative power of these skincare gamechangers!<br></p>`
        },
        blog4: {
            title: "Manhattan Majesty",
            date: "November 9th, 2024",
            content:`
            <img src="./images/NEW YORK CITY BABY.png" /><br><br>
            <p>New York City. The mere mention of the name conjures images of towering skyscrapers, 
            bustling energy, and a lifestyle unlike any other. If you are looking for an apartment, 
            look no more, here are some options are as dazzling 
            as the city lights themselves.<br>
            <u><b>Penthouse Perfection: </b></u> Picture yourself gazing out at the twinkling cityscape 
            from your private balcony, perched atop a prestigious high-rise. Floor-to-ceiling windows bathe 
            your apartment in natural light, showcasing the ever-changing panorama. Inside, sleek finishes, 
            designer appliances, and a gourmet kitchen create a haven of comfort and refined taste.<br>
            <u><b>Location, Location, Location: </b></u> Luxury in NYC isn't just about the apartment itself. It's about 
            stepping out your door and being mere steps away from the best the city has to offer.  Imagine 
            strolling to world-renowned museums and theaters, indulging in Michelin-starred restaurants, or 
            catching a Broadway show – all within walking distance.  Fifth Avenue's iconic stores beckon for a 
            designer shopping spree, while Central Park provides a tranquil escape amidst the urban jungle.<br>
            <u><b>Luxury Living Services: </b></u>A truly luxurious NYC experience extends beyond the apartment walls.  Many 
            high-end buildings offer top-tier amenities that cater to your every whim. State-of-the-art fitness 
            centers, rooftop terraces with breathtaking views, concierge services to handle anything from restaurant 
            reservations to dog walking – these are just a few of the perks that come with living the NYC luxury dream.<br>
            <u><b>A City Alive 24/7: </b></u>New York City never sleeps, and neither does the luxury lifestyle.  Whether it's attending 
            exclusive galas, catching a late-night jazz performance, or indulging in a private chef experience at home – the
            city caters to those who crave constant excitement and a life less ordinary.<br>
            <u><b>NYC Luxury: </b></u>Not for the Faint of Heart:  Living a luxurious life in NYC comes with a price tag, and it's not for everyone.  
            But for those who crave the energy, the connections, and the unparalleled access that this city offers, the investment is 
            well worth it. It's a place where dreams are made of, and every day is an adventure waiting to unfold.<br></p>`
        },
        blog5: {
            title: "Breathe Deep, Live Better:  How Houseplants are the Secret to Your Zen Home",
            date: "July 19th, 2024",
            content: `
            <img src="./images/interior-design-with-plant-shadow-low-angle.jpg"/><br><br>
            <p>Surround yourself with more than just décor! Plants are taking over homes, and 
            for good reason. Discover how houseplants can boost your mood, purify your air, 
            and create a tranquil haven, all while adding a touch of natural beauty to your space. <br>
            <u><b>Natural Air Purifiers: </b></u>Houseplants act as living filters, removing common toxins like benzene and formaldehyde from the air we breathe. This can improve allergies, respiratory problems, and even boost your overall sense of well-being.<br>
            <u><b>Mood-Boosting Greenery: </b></u>Studies have shown that simply being around plants can reduce stress and anxiety. The color green has a calming effect, and caring for plants can provide a sense of accomplishment and nurture.<br>
            <u><b>Sharper Focus and Creativity:</b></u> Research suggests that incorporating plants in your workspace can improve concentration and cognitive function. A touch of nature can also spark creativity and help you feel more inspired.<br>
            <u><b>Increased Humidity:</b></u> Many houseplants help regulate humidity levels, especially beneficial in drier climates. This can improve respiratory health, alleviate dry skin, and even reduce the frequency of colds.<br>
            <u><b>A Gateway to Mindfulness:</b></u> Taking care of plants encourages a more mindful approach to life. Watering, pruning, and simply observing their growth can be a form of meditation, promoting relaxation and present-moment awareness.<br>
            <u><b>Bonus Tip:</b></u> Choose plants that suit your lifestyle. Low-maintenance varieties like snake plants or spider plants are perfect for busy schedules.</p>`
        },
        blog6: {
            title: "The Allure of Nude & How to Master It ",
            date: "28th February, 2024",
            content: `
            <img src="./images/Premium Photo _ The box plaster podium and tropical palm shadow, abstract minimal mockup background for product presentation_ 3d rendering.jpg" /><br><br>
            <p>Forget flashy colors, nude is the new "it" shade in photography! This blog dives 
            into the trend's rise across industries, explores its calming effect, and offers pro 
            tips for mastering the technique with insights from a renowned French photographer. 
            So ditch the vibrancy and embrace the serenity of nude tones in your next shot.<br>
            <u><b>Sophistication and Minimalism:</b></u> Nudes move away from the loud and flashy, embracing a sense of quiet elegance. The focus shifts to textures, light play, and composition, 
            creating a timeless and sophisticated visual language.<br>
            <u><b>Versatility Across Genres:</b></u> Nudes aren't limited to fashion photography. They can be used to create stunning landscapes, capture the raw beauty of still life, or add a touch of intimacy
            to portraiture.<br>
            <u><b>Highlighting Texture and Form:</b></u> Nude tones allow textures and forms to take center stage. From the delicate veins of a leaf to the intricate details of a weathered wall, the absence of vibrant colors 
            puts the spotlight on the subject's unique characteristics.
            <u><b>A Timeless Allure:</b></u> Unlike trendy color palettes that come and go, nudes have a timeless quality. Photographs bathed in these calming tones can endure the test of time, retaining their elegance for years to come.</p>`
        },
        blog7: {
            title: "Less is the New More: Your Guide to Mastering the Minimalist Lifestyle",
            date: "11th November, 2024",
            content: `
            <img src="./images/minimal.png" /><br><br>
            <p>Drowning in clutter? Minimalism is taking over, and young adults are 
                leading the charge! This blog unpacks the hottest lifestyle trend, showing 
                you how to declutter your space, simplify your life, and embrace the freedom
                of "less." Dive in for a step-by-step guide to join the minimalist movement 
                and discover the joy of owning less and living more.
                <ol>
                <li><p><u><b> Define Your "Why":</b></u>Minimalism isn't about deprivation; it's about intentionality.  What aspects of your life feel cluttered or overwhelming?  Do you crave more time, less stress, or a space that reflects your true self?  Identifying your 
                "why" will fuel your motivation throughout the decluttering process.</p></li>
                <li><p><u><b>Start Small and Celebrate Wins:</b></u>Decluttering an entire home can be daunting. Begin with a manageable area like a drawer or a shelf.  Tackling small victories builds momentum and keeps you from feeling overwhelmed.</p></li>
                <li><p><u><b>Ask Yourself the Tough Questions:</b></u>As you sort through belongings,  ask yourself: "Does this spark joy?" or "Have I used this in the past year?"  If the answer is no, consider letting it go. Remember, letting go doesn't mean throwing away; donate, sell, or recycle unwanted items.</p></li>
                <li><p><u><b>Embrace Multifunctional Items:</b></u>Minimalism champions quality over quantity. Invest in well-made, versatile pieces that serve multiple purposes.  A futon in the living room can act as a couch and a guest bed,  while a cast-iron skillet can be used for everything from frying to baking.</p></li>
                <li><p><u><b> Minimalism is a Journey, Not a Destination:</b></u>Minimalism is a continuous process of refining your space and habits. Don't be discouraged by setbacks. Embrace the journey of decluttering, and enjoy the newfound freedom and peace of mind that comes with owning less and living more.</p></li>
                </ol>
                </p>`
        },
        blog8: {
            title: "Sipping on Sunshine: The Rise of the Brown Bookstagram",
            date: "9th March, 2024",
            content: `
            <img src="./images/books.png" /><br><br>
            <p>Brown Bookstagram embraces a more rustic, vintage vibe, celebrating the beauty of worn leather-bound classics, rich mahogany bookshelves, and that undeniably satisfying feeling of turning a well-loved page with a hint of coffee staining the corner.<br>
            <u><b>But why brown? Here's the allure:</b></u>
            <u><b>A Warm and Inviting Escape:</b></u>
            Brown tones evoke feelings of comfort, security, and nostalgia. Scrolling through a Brown Bookstagram feed feels like curling up with a good book in a cozy armchair on a rainy day.<br>
            <u><b>Celebrating the Classics:</b></u>
            Leather-bound editions, vintage paperbacks, and antique bookstores are all hallmarks of the Brown aesthetic. It's a celebration of literature's rich history and the timeless beauty of the physical book.<br>
            <u><b>A Focus on the Story:</b></u>
            By stripping away the bright colors and minimalist backdrops, Brown Bookstagram allows the stories themselves to take center stage. The focus is on the worn spines that hint at countless journeys within their pages.<br>
            <i><b><u>So, how can you join the Brown Bookstagram movement?</u></b></i><br>
            <ol>
            <li><b>Embrace the Warm Tones:</b>  Think warm lighting, wooden furniture, and earthy textures as your backdrop</li><br>
            <li><b>Showcase Your Classics:</b>  Dust off those leather-bound beauties or your favorite vintage finds.</li><br>
            <li><b>Capture the Reading Experience:</b>  Include a steaming mug of coffee, a crackling fireplace, or a cozy blanket in your photos.</li><br>
            <li><b>Focus on the Story:</b>  Let your favorite well-worn books be the stars of the show.</li><br>
            </ol></p>`
        },
        blog9: {
            title: "Paris Calling: The Hottest Cafes You Need to Try Now",
            date: "13th December, 2024",
            content: `
            <img src="./images/paris.png" /><br><br>
            <p><u><b>Paris Calling: The Hottest Cafes You Need to Try Now</b></u><br>
            The City of Lights is known for its romance, its art, and of course, its incredible food scene. But for many, Paris is synonymous with charming cafes – the perfect spot to sip a coffee, nibble on a pastry, and soak up the Parisian atmosphere.
            But with so many cafes to choose from, where do you even begin? Well, fret no more! This blog will introduce you to some of the hottest cafes in Paris right now, each offering something unique and delicious.<br>
            <b><u>The Instagram-Worthy Spot: Fragments</u></b><br>
            If you're looking for a cafe that's as aesthetically pleasing as it is delicious, Fragments is the place for you. This trendy spot in the Marais district boasts a beautifully curated interior with pastel colors, exposed brick walls, 
            and plenty of natural light. But don't let the looks fool you – the food here is equally impressive. Think fluffy ricotta pancakes, vibrant açai bowls, and an array of mouthwatering pastries.<br>
            <b><u>The Hidden Gem: Ten Belles Bread</u></b><br>
            Tucked away in the Canal Saint-Martin neighborhood, Ten Belles Bread is a haven for bread lovers. This bakery-cafe uses organic flour and traditional methods to create some of the most delicious bread you'll ever taste. They also offer 
            a fantastic selection of pastries, sandwiches, and brunch options. Plus, the cozy atmosphere and friendly staff make it the perfect spot to relax and escape the hustle and bustle of the city.<br>
            <b><u>The Classic Parisian Experience: Cafe de Flore</u></b><br>
            No trip to Paris is complete without a visit to a historic cafe. Cafe de Flore, located in the Saint-Germain-des-Pres district, is a Parisian institution. Frequented by literary giants like Jean-Paul Sartre and Simone de Beauvoir, 
            this cafe oozes with history and charm. Sip on a strong espresso, people-watch from the terrace, and soak up the atmosphere of a bygone era.<br></p>`

        },
        blog10: {
            title: "First Date Yourself: The Empowering Guide to Solo Adventures & Self-Discovery",
            date: "9th February, 2024",
            content: `
            <img src="./images/solo-date.png" /><br><br>
            <p>We all crave connection, but sometimes the most important relationship we neglect is the one with ourselves. Enter the concept of the "Solo Date," a powerful tool for self-discovery and personal growth. Forget the awkward first-date jitters; 
            this adventure is all about prioritizing you and rediscovering the amazing person you are.<br>
            <b><u>Why a Solo Date? </u></b><br>
            Life can get busy, and spending quality time alone often falls to the bottom of the to-do list. But taking yourself on a solo date offers a multitude of benefits:<br>
            <ul>
            <li><b>Reconnecting with Yourself:</b>  Daily routines can make us lose sight of our passions and desires. A solo date allows you to reconnect with your inner voice, explore your interests, and rediscover what truly sparks joy.</li>
            <li><b>Boosting Confidence:</b> Stepping outside your comfort zone and venturing out alone can be incredibly empowering. It builds self-reliance and shows you that you can have a fantastic time in your own company.</li>
            <li><b>Unleashing Creativity:</b> Free from the expectations of others, you can explore activities that truly inspire you. Visit a museum that piques your curiosity, take a dance class you've always wanted to try, or simply wander through a bookstore and get lost in the world of words.</li>
            <li><b>Practicing Self-Care:</b>  Solo dates are the perfect opportunity to prioritize your well-being. Treat yourself to a relaxing massage, indulge in a healthy lunch at a cafe, or simply spend time in nature. Self-care isn't selfish; it's essential for a happy and fulfilling life.</li>
            </ul>
            <p><b><u>Planning Your Perfect Solo Date</u></b>
            The beauty of a solo date lies in its flexibility. Here are some tips to get you started:</p>
            <ul>
            <li><b>Follow Your Passions:</b> What ignites your soul? Do you crave adventure? Perhaps a solo hike or a weekend getaway is in order. Maybe you're a museum enthusiast - plan a day exploring local exhibits.</li>
            <li><b>Embrace New Experiences:</b>  Step outside your comfort zone! Take a cooking class, learn a new skill, or attend a workshop on a topic that interests you. You might surprise yourself with hidden talents and newfound passions.</li>
            <li><b>Practice Mindfulness:</b>  Be present in the moment. Savor your delicious meal, appreciate the beauty of nature, and simply enjoy your own company. Disconnect from technology and allow yourself to truly be in the moment.</li>
            <li><b>Don't Be Afraid to Splurge (a little):</b> Treat yourself!  Enjoy a solo dinner at a nice restaurant, book a luxurious spa treatment, or buy that book you've been eyeing. You deserve it!</li>
            <li><b>Document Your Journey:</b>  Take pictures, write in a journal, or simply capture your thoughts and experiences.  Reflecting on your solo date will solidify the positive impact it has on you.</li>
            </ul><br></p>`
        },
    };

    if (blogId && blogsData[blogId]) {
        const blog = blogsData[blogId];
        const blogHTML = `
            <h2 class="blog-title">${blog.title}</h2>
            <div class="blog-date">${blog.date}</div>
            <div class="blog-content">${blog.content}</div>
        `;
        fullContent.innerHTML = blogHTML;
    } else {
        fullContent.innerHTML = "<p>Blog not found</p>";
    }
});
