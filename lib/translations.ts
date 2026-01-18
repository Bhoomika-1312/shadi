export type Language = 'en' | 'hi'

export const translations = {
    en: {
        // Shared
        loading: 'Loading...',
        shubhVivah: 'Shubh Vivah',
        weddingInvitation: 'Wedding Invitation',
        omNamahShivay: '|| Om Namah Shivay ||',
        omGaneshayNamah: '|| Om Shri Ganeshay Namah ||',
        requestHonor: 'REQUEST THE HONOR OF YOUR PRESENCE',
        inviteYou: 'Invite you to celebrate our union',
        withLove: 'With love',
        coupleAndFamily: 'The Couple & Family',
        fromBhatias: "From Bhatia's and Family",
        whatsappCommunity: 'Join our Whatsapp Community for more updates!!',
        eventSummary: '— The Celebration —',
        parents: {
            groom: 'Mr. Pradeep Kumar Bhatia & Mrs. Rashmi Bhatia',
            bride: 'Mr. Pradeep Bhatia & Mrs. Lekha Bhatia',
            contact: 'Contact: +91 9871585058'
        },
        madeWithLove: 'Made with ❤️',

        // Landing Page
        landing: {
            invitationTitle: 'Wedding Invitation',
            invitationDesc: 'The ceremony details and venue location',
            invitationBtn: 'Open Card',
            memoriesTitle: 'Memories & RSVP',
            memoriesDesc: 'Please confirm your presence & explore our moments together',
            memoriesBtn: 'Open Gallery',
            blessingsTitle: 'Blessings',
            blessingsDesc: 'Blessings, warm wishes and love',
            blessingsBtn: 'See Wishes',
            celebration: '— The Wedding Celebration —',
        },
        rsvp: {
            title: 'RSVP',
            desc: "Please let us know if you'll be joining us for our special day",
            unlockMsg: '✨ Submit RSVP to unlock Memories ✨',
            attendingQuestion: 'Will you be attending?',
            yes: "Yes, I'll be there!",
            no: "Sorry, can't make it",
            messageLabel: 'Message (Optional)',
            messagePlaceholder: 'Share a message or let us know about any dietary requirements...',
            submitBtn: 'Submit RSVP & Unlock Memories',
            submitting: 'Submitting...',
            thankYouTitle: 'Thank You!',
            thankYouMsg: "Your RSVP has been received. We're so excited to share our special day with you!",
            viewMemoriesBtn: 'View Memories',
            memoriesUnlocked: "You've unlocked our gallery of beautiful moments.",
            loginTitle: 'You are not logged in',
            loginMsg: 'Please visit the invitation page to enter your name first.',
            goToInvitation: 'Go to Invitation',
        },

        // Blessings
        blessings: {
            title: 'Blessings & Wishes',
            subtitle: 'Messages of love and blessings from our family and friends',
            parentsTitle: 'Blessings from Parents',
            parentsSubtitle: 'With love and blessings from our parents',
            shareTitle: 'Share Your Blessings',
            namePlaceholder: 'Your Name',
            relPlaceholder: 'Relationship (e.g. Friend, Aunt)',
            msgPlaceholder: 'Write your beautiful message here...',
            sendBtn: 'Send Blessings',
            sending: 'Sending...',
            groomParents: "Groom's Parents",
            brideParents: "Bride's Parents",
            groomParentsMsg: "May your life together be blessed with love, joy, and endless happiness. Start this new chapter with our heartfelt blessings.",
            brideParentsMsg: "Wishing you both a lifetime of togetherness and love. May God always bless your union.",
            list: [
                {
                    name: "Pradeep Bhatia",
                    relationship: "Bride's Father",
                    message:
                        "May your union be blessed with love, peace, and prosperity. May you always walk hand in hand through every joy and challenge of life."
                },
                {
                    name: "Lekha Bhatia",
                    relationship: "Bride's Mother",
                    message:
                        "May God shower His choicest blessings upon you both. May your bond grow stronger with each passing day and your home be filled with warmth and happiness."
                },
                {
                    name: "Chirag Bhatia",
                    relationship: "Bride's Brother",
                    message:
                        "Wishing you a lifetime filled with happiness, love, and togetherness. May your new beginning be as beautiful as your dreams."
                },
                {
                    name: "Sandeep Bhatia",
                    relationship: "Bride's Chachu",
                    message:
                        "May your life together be filled with love, respect, and shared happiness. Wishing you both endless moments of joy and togetherness."
                },
                {
                    name: "Keerti Bhatia",
                    relationship: "Bride's Chachi",
                    message:
                        "Sending you heartfelt blessings for a beautiful life ahead. May your bond grow stronger with love, understanding, and countless happy memories."
                },
                {
                    name: "Pradeep Kumar Bhatia",
                    relationship: "Groom's Father",
                    message:
                        "May your journey together be blessed with understanding, respect, and endless happiness. May you always support each other in every phase of life."
                },
                {
                    name: "Rashmi Bhatia",
                    relationship: "Groom's Mother",
                    message:
                        "May your home always be filled with love, laughter, and harmony. May God bless your bond and keep you together forever."
                },
                {
                    name: "Bhoomika Bhatia",
                    relationship: "Groom's Sister",
                    message:
                        "Wishing you both a lifetime of love, companionship, and beautiful memories. May your journey together be joyful and fulfilling."
                },
                {
                    name: "Dev Bhatia",
                    relationship: "Groom's Brother",
                    message:
                        "May your married life be filled with trust, happiness, and unwavering support for one another. Wishing you a bright and beautiful future together."
                }
            ],

        },

        // Memories
        memories: {
            title: 'Our Memories',
            subtitle: 'Capturing moments of love, laughter, and togetherness',
            unlockPrompt: '✨ Submit RSVP to unlock our full gallery ✨',
        },

        // Love Story
        loveStory: {
            title: 'Timeline',
            subtitle: "Every love story is beautiful, but ours is our favorite. Here's our journey together.",
            events: [
                { title: 'Haldi Ceremony', desc: 'Get ready for cheerful colors of Haldi and fun games.' },
                { title: 'The Proposal', desc: 'Every moment together felt like a blessing from above.' },
                { title: 'Wedding Phere', desc: 'A moment that changed our lives forever, sealed with love and promises.' },
                { title: 'Our Reception', desc: 'Two souls, one heart, forever united in the presence of our loved ones.' },
            ]
        },

        // Event Details
        eventDetails: {
            title: 'Event Details',
            subtitle: 'We would be honored to have you celebrate with us',
            dateLabel: 'Date',
            timeLabel: 'Time',
            venueLabel: 'Venue',
            events: [
                {
                    title: 'Haldi Ceremony',
                    date: '9th February 2026',
                    time: '11:00 AM onwards',
                    venue: 'Green Mangalam Resorts, Mathura',
                    address: 'Goverdhan Chauraha, Mathura',
                    desc: 'Join us as we celebrate our Haldi with vibrant games and blessings.',
                },
                {
                    title: 'Engagement Ceremony',
                    date: '9th February 2026',
                    time: '7:00 PM',
                    venue: 'Green Mangalam Resorts, Mathura',
                    address: 'Goverdhan Chauraha, Mathura',
                    desc: 'Join us as we celebrate our engagement with traditional ceremonies and performances.',
                },
                {
                    title: 'Sehra Bandi Rasam',
                    date: '10th February 2026',
                    time: '11:00 AM onwards',
                    venue: 'Green Mangalam Resorts, Mathura',
                    address: 'Goverdhan Chauraha, Mathura',
                    desc: 'Join us as we celebrate our pherres blessings.',
                },
                {
                    title: 'Reception ',
                    date: '10th February 2026',
                    time: '7:00 PM',
                    venue: 'Green Mangalam Resorts, Mathura',
                    address: 'Goverdhan Chauraha, Mathura',
                    desc: 'Our reception followed by dinner.',
                },
            ]
        },

        // Venue Maps
        venueMaps: {
            title: 'Find Us',
            subtitle: 'Get directions to our celebration venues',
            openMapsBtn: 'Open in Google Maps',
            mapUnavailable: 'Map unavailable',
            clickForDirections: 'Click button below for directions',
            venues: [
                { name: 'Wedding Venue', address: 'Mangalam Resorts, Mathura' },
            ]
        },

        // Login Form
        login: {
            welcome: 'Welcome to Our Wedding',
            enterName: 'Please enter your name to personalize your invitation',
            namePlaceholder: 'Your Full Name',
            continue: 'Continue',
        },

        // Audio
        audio: {
            welcomeTitle: "Welcome to Nandam's Wedding",
            welcomeMsg: 'We would love to share our special day with you. Would you like to play the background music?',
            yes: 'Yes, Play Music',
            no: 'No Thanks',
        }
    },
    hi: {
        // Shared
        loading: 'लोड हो रहा है...',
        shubhVivah: 'शुभ विवाह',
        weddingInvitation: 'विवाह निमंत्रण',
        omNamahShivay: '|| ॐ नमः शिवाय ||',
        omGaneshayNamah: '|| ॐ श्री गणेशाय नमः ||',
        requestHonor: 'आपकी उपस्थिति का अनुरोध करते हैं',
        inviteYou: 'आपको हमारे संघ का जश्न मनाने के लिए आमंत्रित करते हैं',
        withLove: 'सप्रेम',
        coupleAndFamily: 'युगल और परिवार',
        fromBhatias: "भाटिया परिवार की ओर से",
        whatsappCommunity: 'अधिक अपडेट के लिए हमारे व्हाट्सएप कम्युनिटी से जुड़ें!!',
        eventSummary: '— समारोह —',
        parents: {
            groom: 'श्री प्रदीप कुमार भाटिया एवं श्रीमती रश्मी भाटिया',
            bride: 'श्री प्रदीप भाटिया एवं श्रीमती लेखा भाटिया',
            contact: 'संपर्क: +91 91493 25219'
        },
        madeWithLove: 'प्रेम से बनाया गया ❤️',

        // Landing Page
        landing: {
            invitationTitle: 'विवाह निमंत्रण',
            invitationDesc: 'समारोह का विवरण और स्थल',
            invitationBtn: 'निमंत्रण देखें',
            memoriesTitle: 'यादें और RSVP',
            memoriesDesc: 'कृपया अपनी उपस्थिति की पुष्टि करें और हमारी यादें देखें',
            memoriesBtn: 'गैलरी खोलें',
            blessingsTitle: 'शुभकामनाएं',
            blessingsDesc: 'हमें अपनी शुभकामनाएं और प्यार भेजें',
            blessingsBtn: 'शुभकामनाएं भेजें',
            celebration: '— विवाह समारोह —',
        },

        // RSVP
        rsvp: {
            title: 'RSVP',
            desc: "कृपया हमें बताएं कि क्या आप हमारे विशेष दिन के लिए हमारे साथ शामिल होंगे",
            unlockMsg: '✨ यादें देखने के लिए RSVP जमा करें ✨',
            attendingQuestion: 'क्या आप शामिल होंगे?',
            yes: "हां, मैं आऊंगा!",
            no: "क्षमा करें, नहीं आ सकूंगा",
            messageLabel: 'संदेश (वैकल्पिक)',
            messagePlaceholder: 'एक संदेश साझा करें या हमें किसी भी आहार संबंधी आवश्यकता के बारे में बताएं...',
            submitBtn: 'RSVP जमा करें और यादें खोलें',
            submitting: 'जमा हो रहा है...',
            thankYouTitle: 'धन्यवाद!',
            thankYouMsg: "आपका RSVP प्राप्त हो गया है। हम आपके साथ अपना विशेष दिन साझा करने के लिए बहुत उत्साहित हैं!",
            viewMemoriesBtn: 'यादें देखें',
            memoriesUnlocked: "आपने हमारे खूबसूरत पलों की गैलरी को अनलॉक कर दिया है।",
            loginTitle: 'आप लॉग इन नहीं हैं',
            loginMsg: 'कृपया पहले अपना नाम दर्ज करने के लिए निमंत्रण पृष्ठ पर जाएं।',
            goToInvitation: 'निमंत्रण पर जाएं',
        },

        // Blessings
        blessings: {
            title: 'आशीर्वाद और शुभकामनाएं',
            subtitle: 'हमारे परिवार और दोस्तों से प्यार और आशीर्वाद के संदेश',
            parentsTitle: 'माता-पिता का आशीर्वाद',
            parentsSubtitle: 'हमारे माता-पिता से प्यार और आशीर्वाद के साथ',
            shareTitle: 'अपना आशीर्वाद साझा करें',
            namePlaceholder: 'आपका नाम (Your Name)',
            relPlaceholder: 'संबंध (जैसे मित्र, चाची)',
            msgPlaceholder: 'अपना सुंदर संदेश यहाँ लिखें...',
            sendBtn: 'आशीर्वाद भेजें',
            sending: 'भेजा जा रहा है...',
            groomParents: "वर के माता-पिता",
            brideParents: "वधु के माता-पिता",
            groomParentsMsg: "आपका जीवन प्यार, खुशी और अनंत खुशियों से भरा हो। हमारे दिल से आशीर्वाद के साथ इस नए अध्याय की शुरुआत करें।",
            brideParentsMsg: "आप दोनों को जीवन भर के साथ और प्यार की शुभकामनाएं। भगवान हमेशा आपके संघ को आशीर्वाद दें।",
            list: [
                {
                    name: "प्रदीप भाटिया",
                    relationship: "वधु के पिता",
                    message: "आपका संघ प्रेम, शांति और समृद्धि से धन्य हो। आप जीवन की हर खुशी और चुनौती में हमेशा हाथ में हाथ डालकर चलें।"
                },
                {
                    name: "लेखा भाटिया",
                    relationship: "वधु की माता",
                    message: "ईश्वर आप दोनों पर अपना सर्वोत्तम आशीर्वाद बरसाए। आपका बंधन हर गुजरते दिन के साथ मजबूत हो और आपका घर गर्मजोशी और खुशियों से भरा रहे।"
                },
                {
                    name: "चिराग भाटिया",
                    relationship: "वधु के भाई",
                    message: "आपको खुशी, प्यार और साथ से भरे जीवन की शुभकामनाएं। आपकी नई शुरुआत आपके सपनों की तरह ही सुंदर हो।"
                },
                {
                    name: "संदीप भाटिया",
                    relationship: "वधु के चाचा",
                    message: "आपका जीवन प्रेम, सम्मान और साझा खुशियों से भरा हो। आप दोनों को खुशी और साथ के अनंत पलों की शुभकामनाएं।"
                },
                {
                    name: "कीर्ति भाटिया",
                    relationship: "वधु की चाची",
                    message: "आपको आगे के सुंदर जीवन के लिए हार्दिक आशीर्वाद। आपका बंधन प्यार, समझ और अनगिनत सुखद यादों के साथ मजबूत हो।"
                },
                {
                    name: "प्रदीप कुमार भाटिया",
                    relationship: "वर के पिता",
                    message: "आपकी साथ की यात्रा समझ, सम्मान और अनंत खुशियों से भरी हो। आप जीवन के हर चरण में हमेशा एक-दूसरे का समर्थन करें।"
                },
                {
                    name: "रश्मि भाटिया",
                    relationship: "वर की माता",
                    message: "आपका घर हमेशा प्यार, हंसी और सद्भाव से भरा रहे। भगवान आपके बंधन को आशीर्वाद दें और आपको हमेशा साथ रखें।"
                },
                {
                    name: "भूमिका भाटिया",
                    relationship: "वर की बहन",
                    message: "आप दोनों को प्यार, साथ और खूबसूरत यादों के जीवन भर की शुभकामनाएं। आपकी साथ की यात्रा आनंदमय और संतोषजनक हो।"
                },
                {
                    name: "देव भाटिया",
                    relationship: "वर के भाई",
                    message: "आपका वैवाहिक जीवन विश्वास, खुशी और एक-दूसरे के लिए अटूट समर्थन से भरा हो। आप दोनों को उज्ज्वल और सुंदर भविष्य की शुभकामनाएं।"
                }
            ]
        },

        // Memories
        memories: {
            title: 'हमारी यादें',
            subtitle: 'प्यार, हंसी और साथ के पलों को कैद करना',
            unlockPrompt: '✨ हमारी पूरी गैलरी अनलॉक करने के लिए RSVP जमा करें ✨',
        },

        // Love Story
        loveStory: {
            title: 'हमारी प्रेम कहानी',
            subtitle: "हर प्रेम कहानी सुंदर है, लेकिन हमारी सबसे पसंदीदा है। यह है हमारा सफर।",
            events: [
                { title: 'हल्दी समारोह', desc: 'हल्दी के हंसमुख रंगों और मजेदार खेलों के लिए तैयार हो जाएं।' },
                { title: 'प्रस्ताव (The Proposal)', desc: 'एक साथ हर पल ऊपर से एक आशीर्वाद जैसा लगा।' },
                { title: 'विवाह फेरे', desc: 'वह पल जिसने हमेशा के लिए हमारी जिंदगी बदल दी, प्यार और वादों के साथ सील।' },
                { title: 'हमारा विवाह', desc: 'दो आत्माएं, एक दिल, हमेशा के लिए हमारे प्रियजनों की उपस्थिति में एकजुट।' },
            ]
        },

        // Event Details
        eventDetails: {
            title: 'समारोह का विवरण',
            subtitle: 'आपकी उपस्थिति से हमारा उत्सव और भी खास हो जाएगा',
            dateLabel: 'तिथि',
            timeLabel: 'समय',
            venueLabel: 'आयोजन स्थल',
            events: [
                {
                    title: 'हल्दी समारोह',
                    date: '9 फरवरी 2026',
                    time: 'प्रातः 11:00 बजे से',
                    venue: 'ग्रीन मंगलम रिसॉर्ट्स, मथुरा',
                    address: 'गोवर्धन चौराहा, मथुरा',
                    desc: 'हल्दी के रंगों और मस्ती भरे खेलों के साथ हमारे साथ जश्न मनाएं।',
                },
                {
                    title: 'सगाई समारोह',
                    date: '9 फरवरी 2026',
                    time: 'सायं 7:00 बजे',
                    venue: 'ग्रीन मंगलम रिसॉर्ट्स, मथुरा',
                    address: 'गोवर्धन चौराहा, मथुरा',
                    desc: 'पारंपरिक रीति-रिवाजों और सांस्कृतिक कार्यक्रमों के साथ हमारी सगाई का जश्न मनाएं।',
                },
                {
                    title: 'सेहरा बांधी रस्म',
                    date: '10 फरवरी 2026',
                    time: 'प्रातः 11:00 बजे से',
                    venue: 'ग्रीन मंगलम रिसॉर्ट्स, मथुरा',
                    address: 'गोवर्धन चौराहा, मथुरा',
                    desc: 'पवित्र फेरों से पहले के आशीर्वाद और रस्मों में शामिल हों।',
                },
                {
                    title: 'स्वागत समारोह',
                    date: '10 फरवरी 2026',
                    time: 'सायं 7:00 बजे',
                    venue: 'ग्रीन मंगलम रिसॉर्ट्स, मथुरा',
                    address: 'गोवर्धन चौराहा, मथुरा',
                    desc: 'हमारा स्वागत समारोह, इसके बाद रात्रिभोज।',
                },
            ]
        },

        // Venue Maps
        venueMaps: {
            title: 'मार्गदर्शन (Venue)',
            subtitle: 'हमारे समारोह स्थलों के लिए दिशा-निर्देश प्राप्त करें',
            openMapsBtn: 'Google Maps में खोलें',
            mapUnavailable: 'मानचित्र उपलब्ध नहीं है',
            clickForDirections: 'दिशा-निर्देशों के लिए नीचे क्लिक करें',
            venues: [
                { name: 'विवाह स्थल', address: 'मंगलम रिसॉर्ट्स, मथुरा' },
            ]
        },

        // Login Form
        login: {
            welcome: 'हमारे विवाह में आपका स्वागत है',
            enterName: 'अपने निमंत्रण को निजीकृत करने के लिए कृपया अपना नाम दर्ज करें',
            namePlaceholder: 'आपका पूरा नाम (Your Full Name)',
            continue: 'जारी रखें',
        },

        // Audio
        audio: {
            welcomeTitle: "नंदम की शादी में आपका स्वागत है",
            welcomeMsg: 'हम अपना विशेष दिन आपके साथ साझा करना पसंद करेंगे। क्या आप पृष्ठभूमि संगीत बजाना चाहेंगे?',
            yes: 'हां, संगीत बजाएं',
            no: 'नहीं धन्यवाद',
        }
    }
}
