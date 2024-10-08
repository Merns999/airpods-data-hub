{/* <script type="module"> */}
      // Import the functions you need from the SDKs you need
      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries
    
      // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      
    
      // Initialize Firebase
    //   const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
      const auth = getAuth(app);
      const db = getDatabase();

      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        }
      });

        // Knockout ViewModel
        function ViewModel() {
            var self = this;
            // Observables
            self.email = ko.observable("");
            self.password = ko.observable("");
            self.username = ko.observable("");
            self.saySomething = ko.observable("");
            self.favouriteFood = ko.observable("");
            self.getUsername = ko.observable("");
            // Observable properties for AirPods data
            self.productName = ko.observable("");
            self.price = ko.observable("");
            self.description = ko.observable("");
            self.inStock = ko.observable("");
            self.quantity = ko.observable("");
            self.specs = ko.observable("");
            self.images = ko.observable("");
            self.getProductName = ko.observable("");
            // Observable properties for updating AirPods
            self.updateProductName = ko.observable("");
            self.updatePrice = ko.observable("");
            self.updateDescription = ko.observable("");
            self.updateInStock = ko.observable("");
            self.updateQuantity = ko.observable("");
            self.updateSpecs = ko.observable("");
            self.updateImages = ko.observable("");


            this.authent = async function(){
              debugger;
              const provider = await signInWithPopup(auth, new GoogleAuthProvider());
              debugger;
            }


            this.logout = function(){
              debugger;
              signOut(auth)
                .then(() => {
                    console.log('User signed out');
                    debugger;
                    document.getElementById('login').style.display = 'block';
                    document.getElementById('logout').style.display = 'none';
                })
                .catch((error) => {
                    console.error('Error signing out:', error);
                });
            }
            
            this.AirPodsList = ko.observable([
              { productName: 'AirPods Max', price: 3500, description: 'Immerse yourself in a symphony of sound with AirPods Max - Over-Ear High-Fidelity Headphones.', 
                image: [
                  'https://futureaudiophile.com/wp-content/uploads/2022/09/2-Apple-AirPodsMax-ManyColors-1024x683.jpg',
                  'https://smartbuy.myimaginestore.com/media/mf_webp/jpg/media/catalog/product/cache/4a48ac28cbb6e9c41470e5be5a6d3043/a/i/airpods-max-colors_2.webp',
                  'https://www.sbsmobile.com/ned/227030-thickbox_default/skinpods-for-airpods-max.jpg'
                ], inStock: 1, quantity: 1 , specs: [
                  "Active Noise Cancellation (ANC)",
                  "Spatial audio with dynamic head tracking",
                  "Up to 20 hours of battery life with ANC",
                  "Apple-designed H1 chip for seamless connectivity",
                  "Premium over-ear design with adaptive EQ"
                ]
                },
                { productName: 'Oraimo Freepods 4', price: 3999, description: 'oraimo FreePods 4 ANC True Wireless Earbuds', 
                image: [
                  'https://cdn-img.oraimo.com/NG/album/oeb-e105d/oeb-e105d.png',
                  'https://cdn-img.oraimo.com/fit-in/600x600/MA/product/2024/04/09/105D-nblue.png',
                  'https://files.sophie.co.ke/2023/12/Oraimo_Cannon_2_Pro_18W_Fast_Charging_Charger_Kit_Main_Images16_7202.jpg'
                ], inStock: 1, quantity: 1 ,specs: [
                  "Bluetooth version: 5.2",
                  "Wireless range: Up to 10 meters",
                  "Battery capacity (earbuds): 37mAh each",
                  "Battery capacity (charging case): 500mAh",
                  "Charging time (earbuds): Approximately 1.5 hours",
                  "Charging time (charging case): Approximately 2 hours",
                  "Playback time: Up to 4 hours on a single charge",
                  "Total playback time with charging case: Up to 24 hours",
                  "Touch controls for music and calls",
                  "Voice assistant support",
                  "Comfortable in-ear design",
                  "Input: Type-C",
                  "LED indicators for battery status",
                  "Compact and portable charging case"
                ]
                },
                { productName: 'Oraimo Freepods 4 Tuned by Burna Boy', price: 5999, description: 'Oraimo X Burna Boy SpacePods True Wireless Earbuds', 
                  image: [
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/49/6941651/1.jpg?2845',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq6SrQZ8IlkgyP0rdxbOfoK77FKEE9iL_e9A&s',
                    'https://cdn-img.oraimo.com/tinymce/images/d3d3c95158ba1df20b8a264215fc7cb766b213d1ad0c9.jpg',
                    'https://le.co.ke/wp-content/uploads/2023/11/oeb-e105d-_-680-b2_1_1.jpg'
                  ], inStock: 1, quantity: 1 ,specs: [
                  "Burna Boy Exclusive Voice Prompt, t feels like he's talking to you! 'Noise cancellation','Game Mode','Transparency' ",
                  "Burna Boy Specially Tuned After almost a year of collaboration between Grammy Award winner Burna Boy and the oraimo audio team",
                  "Wireless range: Up to 10 meters",
                  "Battery capacity (earbuds): 37mAh each",
                  "Battery capacity (charging case): 500mAh",
                  "Charging time (earbuds): Approximately 1.5 hours",
                  "Charging time (charging case): Approximately 2 hours",
                  "Playback time: Up to 4 hours on a single charge",
                  "Total playback time with charging case: Up to 24 hours",
                  "Touch controls for music and calls",
                  "Input: Type-C",
                  "Compact and portable charging case"
                ]
                },
                { productName: 'AirPods Pro', price: 1500, description: 'Immerse yourself in pure audio perfection with AirPods Pro featuring advanced Noise Cancellation technology.', 
                  image: [
                    'https://www.phoneplacekenya.com/wp-content/uploads/2019/11/Apple-Airpods-Pro.png',
                    'https://i.ebayimg.com/images/g/0fkAAOSwNINgZlag/s-l500.jpg',
                    
                  ], inStock: 1, quantity: 1, specs: [
                    "Active Noise Cancellation (ANC)",
                    "Transparency mode",
                    "Adaptive EQ for audio optimization",
                    "Sweat and water resistance (IPX4)",
                    "Wireless charging case included"
                  ]
                },
                { productName: 'JBL Live Pro 2', price: 19999, description: 'Elevate your audio experience to new heights with JBL Live Pro 2 – where style meets superior sound.', 
                  image: [
                    'https://www.jbl.com.sg/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw6a81b882/1.JBL_Live%20Pro%202_Product%20image_Hero_Blue.png?sw=537&sfrm=png',
                    'https://avechi.co.ke/mogefov/2023/09/jbl-live-pro-e1687424160200.jpg',
                    'https://www.phoneplacekenya.com/wp-content/uploads/2022/09/JBL-Live-Pro-2-c.jpg',
                    'https://www.unboxify.in/cdn/shop/products/71zJjUcOXJL._SL1500_5752eb17-6a4c-4831-921f-11efdddaa24c.jpg?v=1694962972',
                    'https://gagadget.com/media/post_big/JBL_Live_Pro_2_on_Amazon.jpg'
                  ], inStock: 1, quantity: 1 , specs: [
                    "True Wireless In-Ear Earbuds",
                    "Active Noise Cancellation (ANC)",
                    "Up to X hours of battery life (varies with ANC)",
                    "Touch controls for music and calls",
                    "Voice assistant support (e.g., Google Assistant, Siri)"
                  ]
                },
                { productName: 'Sony WF-1000XM4', price: 4000, description: 'Dive into a world of unparalleled audio with Sony WF-1000XM4 and its industry-leading Noise Cancelation.', 
                  image: ['https://www.pricepoint.co.ke/wp-content/uploads/2022/06/Sony-WF-1000XM4-silver.jpg',
                    'https://www.counterpointresearch.com/wp-content/uploads/2022/04/Counterpoint-Sony-WF-1000XM4-Review.jpg',
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/88/6180761/1.jpg?7845'
                  ], inStock: 1, quantity: 1 ,specs: [
                    "Industry-leading Noise Cancellation",
                    "High-resolution audio with LDAC",
                    "Up to 8 hours of battery life on a single charge",
                    "Additional 16 hours with the charging case",
                    "Speak-to-Chat feature for automatic pause/play"
                  ]
                  },
                { productName: 'Samsung Galaxy Buds Pro', price: 4800, description: 'Unleash immersive sound with intelligent ANC - Samsung Galaxy Buds Pro is your gateway to audio brilliance.', 
                  image: [
                    'https://digitalphones.co.ke/wp-content/uploads/2021/03/Samsung-Galaxy-Buds-Pro.jpg',
                    'https://img.us.news.samsung.com/us/wp-content/uploads/2021/01/12135936/19_galaxybudspro_lifestyle_violetsilverblack_201230070154.jpg',
                    'https://us03-imgcdn.ymcart.com/97025/2023/08/22/e/3/e3e0db4109e86e4c.jpg'
                  ], inStock: 1, quantity: 1 , specs: [
                    "Intelligent Active Noise Cancellation (ANC)",
                    "360-degree surround sound with Dolby Atmos",
                    "Up to 8 hours of playback on a single charge",
                    "Additional 20 hours with the charging case",
                    "IPX7 water resistance for durability"
                  ]
                  },
                  { productName: 'Mi True Wireless Earbuds Basic 2 in Kenya', price: 4000, description: 'The Wireless Earbuds Basic 2 is equipped with the latest Bluetooth 5.0 chip.', 
                    image: [
                      'https://www.mobilehub.co.ke/storage/2023/09/mi-true-wireless-earbuds-basic-2-650x650-1.jpg',
                      'https://www.digitalstore.co.ke/cdn/shop/products/71XQ_EjG8QL._AC_SX679_458c68be-5199-4d49-9544-b872fa83ed80_600x.jpg?v=1647686609',
                    ], inStock: 1, quantity: 1 , specs: [
                      "Bluetooth Version :5.0",
                      "Battery Life :(Single Charge ) 5H",
                      "Additional 20 hours with the charging case",
                      "Effective Distance: 10Metres ",
                      "Microphone Yes"
                    ]
                    },
                { productName: 'Bose QuietComfort Earbuds', price: 4900, description: 'Indulge in pure serenity with Bose QuietComfort Earbuds - Noise-Canceling True Wireless Earbuds.', image: [
                  'https://phonesstorekenya.com/wp-content/uploads/2023/11/QuietComfort-Earbuds-003.jpg',
                  'https://cdn.vox-cdn.com/thumbor/yHQexpmsIp24XKyBcwKC3EXTGos=/0x0:2040x1360/1400x1400/filters:focal(1058x772:1059x773)/cdn.vox-cdn.com/uploads/chorus_asset/file/21946559/IMG_0720-1.0.jpeg',
                  
                ], inStock: 1, quantity: 1 , specs: [
                    "World-class noise cancellation technology",
                    "Up to 6 hours of battery life on a single charge",
                    "Additional 12 hours with the charging case",
                    "Secure and comfortable in-ear design",
                    "Customizable touch controls for music and calls"
                  ]
                  },
                { productName: 'Google Pixel Buds A-Series', price: 4200, description: 'Embark on a journey of rich sound and clear calls with Google Pixel Buds A-Series.', 
                  image: [
                    'https://gadgetcentral.co.ke/wp-content/uploads/2023/05/1622726491_1635923.jpg',
                    'https://lh3.googleusercontent.com/g6l5UAXSFGZ3oiE2N-hGj7TwcAxsq84Pk4H93umJUgJnQ0OyL3XfSyOP65Nt_KYw0t5688w2pYZDoz-Rfs1C9pngonPxAh0VWPU=s0',
                    'https://images.fonearena.com/blog/wp-content/uploads/2021/09/Pixel-Buds-A-Series_FoneArena-2-1024x548.jpg',
                    'https://i.etsystatic.com/21656020/r/il/b8bb82/2622239385/il_570xN.2622239385_cbob.jpg'
                ], inStock: 1, quantity: 1, specs: [
                    "Rich sound and clear calls with Adaptive Sound",
                    "Up to 5 hours of listening time on a single charge",
                    "Additional 24 hours with the charging case",
                    "Quick Charge: 15 minutes for up to 3 hours of listening",
                    "Hands-free Google Assistant integration"
                  ]
                  },
                { productName: 'Anker Soundcore Liberty Air 2 Pro', price: 4300, description: 'Immerse yourself in a world of sound with Anker Soundcore Liberty Air 2 Pro - Hybrid Active Noise Cancellation.', 
                  image: [
                    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/57/918569/1.jpg?3445',
                    'https://www.digitaltrends.com/wp-content/uploads/2021/01/anker-soundcore-liberty-air-2-pro-00012.jpg?fit=1200%2C9999&p=1',
                    'https://anker.com.sg/cdn/shop/files/01_9fd3a704-7444-46d2-a8a9-ecef0824d645.jpg?v=1704879782',
                    'https://images-na.ssl-images-amazon.com/images/I/51snKP8HWiL._AC_UL600_SR600,600_.jpg'
                ], inStock: 1, quantity: 1 , specs: [
                    "Hybrid Active Noise Cancellation for immersive sound",
                    "Up to 7 hours of playtime on a single charge",
                    "Additional 26 hours with the charging case",
                    "HearID personalized sound for a customized listening experience",
                    "4 built-in microphones for clear calls and voice assistant support"
                  ]
                  },
                { productName: 'Jabra Elite 85t', price: 3750, description: 'Escape into tranquility with Jabra Elite 85t and its advanced Active Noise Cancellation.', 
                  image: [
                    'https://cdn.mos.cms.futurecdn.net/3WszNpeYzKi7vWaREaJnrM.jpg',
                    'https://i.ebayimg.com/images/g/tdIAAOSwh-FjqeW6/s-l1200.jpg',
                    'https://www.techielass.com/content/images/2021/12/20211221_081122.jpg',
                    'https://cdn.pickr.com.au/wp-content/uploads/2021/02/85F17DC7-AC36-4FF6-9E14-A4A54B020324.jpeg'
                  ], inStock: 0, quantity: 1 , specs: [
                    "Advanced Active Noise Cancellation (ANC)",
                    "Up to 5.5 hours of battery life on a single charge",
                    "Additional 25 hours with the charging case",
                    "6-microphone technology for clear calls and wind noise protection",
                    "Customizable equalizer for personalized sound"
                  ]
                  },
                { productName: 'OnePlus Buds Pro', price: 3600, description: 'Elevate your audio experience with OnePlus Buds Pro - Smart Adaptive Noise Cancellation at its best.', 
                  image: ['https://www.phoneplacekenya.com/wp-content/uploads/2022/05/OnePlus-Buds-Pro.png',
                    'https://phonesstorekenya.com/wp-content/uploads/2024/05/OnePlus-Buds-Pro-2.jpg',
                    'https://images.hothardware.com/contentimages/article/3134/content/small_OnePlus-Buds-Pro-13.jpg',
                    'https://i.ytimg.com/vi/4A71COerYf8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCsDk9j6LwFh_npTCasAtr7cu5JMw'
                  ], inStock: 1, quantity: 1 , specs: [
                    "Smart Adaptive Noise Cancellation for an immersive experience",
                    "Up to 5 hours of playback on a single charge",
                    "Additional 15 hours with the charging case",
                    "OnePlus Audio ID for personalized sound",
                    "Wireless charging capability"
                  ]
                  },
                { productName: 'Beats Powerbeats Pro', price: 3700, description: 'Experience high-performance audio with Beats Powerbeats Pro - your key to wireless earphone excellence.', image:[
                   'https://www.phoneplacekenya.com/wp-content/uploads/2020/09/Powerbeats-Pro-b.jpg',
                   'https://i5.walmartimages.com/seo/Open-Box-Beats-by-Dr-Dre-Powerbeats-Pro-Totally-Wireless-Earphones_7462a983-b00e-4c4f-9d77-999b53dc7073.d88e04886370f13ea994ea5515556f12.png',
                   'https://photos5.appleinsider.com/gallery/30607-50329-unleashed-spot-beats-powerbeats-pro-xl.jpg',

                  ], inStock: 1, quantity: 1 , specs: [
                    "High-performance audio with powerful bass",
                    "Up to 9 hours of listening time on a single charge",
                    "Additional 24 hours with the charging case",
                    "Sweat and water-resistant design for active lifestyles",
                    "Secure-fit ear hooks for stability during workouts"
                  ]
                  },
                { productName: 'Sennheiser Momentum True Wireless 2', price: 4100, description: 'Indulge in exceptional sound quality with Sennheiser Momentum True Wireless 2.', 
                  image: [
                    'https://m.media-amazon.com/images/I/81NXYrn8JiL.jpg',
                    'https://www.theaudiostore.in/cdn/shop/files/Sennheiser_MOMENTUM_True_Wireless_4_Noise-Canceling_Earbuds_black_copper_09_1024x.jpg?v=1720723344',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYQ2MVTwjpo9r6cPWkr3Ex1nBK2kw6-kafAQ&s'
                  ], inStock: 1, quantity: 1 , specs: [
                    "Premium sound quality with deep bass and clear treble",
                    "Active Noise Cancellation for immersive audio experience",
                    "Up to 7 hours of playback on a single charge",
                    "Additional 21 hours with the charging case",
                    "Touch controls for music playback, calls, and voice assistant",
                    "Customizable touch controls and equalizer settings via the app",
                    "Transparent Hearing feature for ambient sound awareness",
                    "Bluetooth 5.1 for reliable wireless connectivity",
                    "IPX4 water resistance for sweat and splash resistance",
                    "Ergonomic design for a comfortable and secure fit"
                  ]
                  },
                { productName: 'Skullcandy Indy Evo', price: 13100, description: 'Experience freedom with Skullcandy Indy Evo - True Wireless In-Ear Earbuds.', 
                  image: [
                    'https://m.media-amazon.com/images/I/6119HR9g38L.jpg',
                    'https://m.media-amazon.com/images/I/71gxk3w6NrL.jpg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs_RSYTvUXAF5fAI0bFOlGAhjot-gnbw-Ojw&s',
                    'https://support.skullcandy.com/hc/article_attachments/25991292515479'
                  ], inStock: 0, quantity: 1 , specs: [
                    "True Wireless In-Ear Earbuds",
                    "Up to 30 hours of total battery life with the charging case",
                    "Built-in Tile tracker for easy locating",
                    "IP55 sweat, water, and dust resistance",
                    "Touch controls for music, calls, and voice assistant",
                    "Ambient Mode for environmental awareness",
                    "Rapid charge: 10 minutes for 2 hours of playback",
                    "Bluetooth connectivity for wireless convenience"
                  ]
                  },
                { productName: 'Huawei FreeBuds 4i', price: 12000, description: 'Dive into pure audio bliss with Huawei FreeBuds 4i - Active Noise Cancellation Earbuds.', 
                  image: [
                    'https://m.media-amazon.com/images/I/61+M23aLr2L.jpg',
                    'https://www.digitalstore.co.ke/cdn/shop/products/Freebuds4i3_1024x.jpg?v=1626959397',
                    'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/audio/freebuds4i/specs-img/pc_2x-3.jpg',
                    
                ], inStock: 1, quantity: 1, specs: [
                    "Active Noise Cancellation for an immersive listening experience",
                    "Up to 10 hours of playback on a single charge",
                    "Additional 6.5 hours with the charging case",
                    "Dual-microphone system for clear calls and noise reduction",
                    "Touch controls for music playback and calls",
                    "Lightweight and comfortable in-ear design",
                    "Awareness mode for environmental sound awareness",
                    "Bluetooth 5.2 for stable and efficient wireless connectivity"
                  ]
                  },
                { productName: 'Beats Studio Buds', price: 3800, description: 'Unleash the power of sound with Beats Studio Buds - True Wireless Noise Cancelling Earbuds.', 
                  image: [
                    'https://phonesstorekenya.com/wp-content/uploads/2023/12/Beats-Studio-buds-001.jpg',
                    'https://betanews.com/wp-content/uploads/2023/05/Beats2k23-scaled.jpg',
                    'https://d.newsweek.com/en/full/2017689/beats-studio-buds.jpg'
                ], inStock: 0, quantity: 1 ,specs: [
                    "Powerful and balanced sound profile",
                    "Active Noise Cancellation for immersive audio",
                    "Up to 8 hours of listening time on a single charge",
                    "Additional 16 hours with the charging case",
                    "Sweat and water-resistant design for workouts and active use",
                    "Secure-fit ear tips for comfort and stability",
                    "One-touch pairing with both Apple and Android devices",
                    "USB-C charging for quick and convenient power replenishment"
                  ]
                  },
                { productName: 'JBL Free X', price: 13000, description: 'Immerse yourself in the music with JBL Free X - Truly Wireless In-Ear Headphones.', image: [
                  'https://mm.jbl.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwfe1a3d59/JBL_FREEx_Hero_Black.png',
                  'https://manuals.plus/wp-content/uploads/2020/12/JBL-FREE-X-with-Charging-Case_12-300x216.png?ezimgfmt=rs:368x265/rscb1/ng:webp/ngcb1',
                  'https://tradezone.ac/cdn/shop/products/71Hwuk_88AL._AC_SL1500_800x.jpg?v=1574963714'
                ], inStock: 1, quantity: 1 , specs: [
                    "Truly Wireless In-Ear Headphones",
                    "Up to 4 hours of playback on a single charge",
                    "Additional 20 hours with the charging case",
                    "Hands-free calls with built-in microphone",
                    "Comfortable and secure fit for active lifestyles",
                    "Splashproof design for protection against sweat and light rain",
                    "Easy touch controls for music playback and calls",
                    "Smart charging case with LED indicators"
                  ]
                  },
            ]);
            //adding airpods data to the database
            this.addAirPodsToFirebase = function() {
                const db = getDatabase();
                const airPodsList = self.AirPodsList();
                debugger;
                airPodsList.forEach((item, index) => {
                    set(ref(db, 'airpods/' + index), item)
                        .then(() => {
                            debugger;
                            console.log(`Added ${item.productName} to Firebase successfully.`);
                        })
                        .catch((error) => {
                            console.error(`Error adding ${item.productName} to Firebase:`, error);
                        });
                });
            };
            // Function to get AirPods data from Firebase
            this.getAirPodsData = function() {
                const dbRef = ref(db);
                get(child(dbRef, "airpods")).then((snapshot) => {
                    if (snapshot.exists()) {
                        const airPodsData = snapshot.val();
                        let htmlContent = '<h2>AirPods Data:</h2>';
                        debugger;
                        htmlContent += `
                        <table class="airpods-table">
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Description</th>
                                    <th>In Stock</th>
                                    <th>Quantity</th>
                                    <th>Specifications</th>
                                    <th>Images</th>
                                </tr>
                            </thead>
                            <tbody>
                        `;
                        Object.values(airPodsData).forEach((item, index) => {
                          htmlContent += `
                            <tr class="airpods-item">
                                <td>${item.productName}</td>
                                <td>Ksh ${item.price}</td>
                                <td>${item.description}</td>
                                <td>${item.inStock ? 'Yes' : 'No'}</td>
                                <td>${item.quantity}</td>
                                <td>
                                    <ul>
                                        ${item.specs.map(spec => `<li>${spec}</li>`).join('')}
                                    </ul>
                                </td>
                                <td>
                                    <div class="image-container">
                                        ${item.image.map(img => `<img src="${img}" alt="${item.productName}" style="width: 50px; height: auto; margin: 2px; object-fit: contain;">`).join('')}
                                    </div>
                                </td>
                            </tr>
                        `;
                        });
                        htmlContent += `
                              </tbody>
                          </table>
                          `;
                        document.getElementById('airPodsContainer').innerHTML = htmlContent;
                    } else {
                        debugger;
                        document.getElementById('airPodsContainer').innerHTML = "No AirPods data available";
                    }
                }).catch((error) => {
                    console.error("Error fetching AirPods data:", error);
                    document.getElementById('airPodsContainer').innerHTML = "Error fetching AirPods data";
                });
            };
            // Save function
            this.save = function() {
                if(!confirm("Are you sure you want to save this user?")) return;

                set(ref(db, 'users/' + self.username()), {
                    email: self.email(),
                    password: self.password(),
                    Username: self.username(),
                    say_something: self.saySomething(),
                    favourite_food: self.favouriteFood()
                }).then(() => {
                    alert("User added successfully");
                    self.clearFields();
                }).catch((er) => {
                    alert("Error: " + er.message);
                });
            };
            // Get Data function
            this.getData = function() {
                const dbRef = ref(db);
                debugger;
                get(child(dbRef, "users/" + self.getUsername())).then((snapshot) => {
                    if(snapshot.exists()) {
                        var result = snapshot.val();
                        document.getElementById('dataContainer').innerHTML = `
                            <h3>User Data:</h3>
                            <p><strong>Email:</strong> ${result.email}</p>
                            <p><strong>Username:</strong> ${result.Username}</p>
                            <p><strong>Says:</strong> ${result.say_something}</p>
                            <p><strong>Favourite Food:</strong> ${result.favourite_food}</p>
                        `;
                    } else {
                        document.getElementById('dataContainer').innerHTML = "No data available";
                    }
                }).catch((er) => {
                    alert("Error: " + er.message);
                });
            };
            // Update function
            this.update = function() {
              if(!confirm("Are you sure you want to update this user?")) return;
              debugger;
              update(ref(db, 'users/' + self.username()), {
                  email: self.email(),
                  password: self.password(),
                  Username: self.username(),
                  say_something: self.saySomething(),
                  favourite_food: self.favouriteFood()
              }).then(() => {
                  alert("User updated successfully");
                  self.clearFields();
              }).catch((er) => {
                  alert("Error: " + er.message);
              });
            };
            // Delete function
            this.delete = function() {
              if(!confirm("Are you sure you want to delete this user?")) return;
              debugger;
              remove(ref(db, 'users/' + self.username())).then(() => {
                  alert("User removed successfully");
                  self.clearFields();
              }).catch((er) => {
                  alert("Error: " + er.message);
              });
            };
            // Clear fields function
            this.clearFields = function() {
                self.email("");
                self.password("");
                self.username("");
                self.saySomething("");
                self.favouriteFood("");
                self.getUsername("");
            };
            // Function to add new AirPods
            this.addAirPods = function() {
                if(!confirm("Are you sure you want to add these AirPods?")) return;
                debugger;
                set(ref(db, 'airpods/' + self.productName()), {
                    productName: self.productName(),
                    price: self.price(),
                    description: self.description(),
                    inStock: self.inStock(),
                    quantity: self.quantity(),
                    specs: self.specs().split(/[\n,]/).map(item => item.trim()),
                    image: self.images().split(',').map(item => item.trim())
                }).then(() => {
                    alert("AirPods added successfully");
                    self.clearFields();
                }).catch((er) => {
                    alert("Error: " + er.message);
                });
            };
            // Function to update existing AirPods
            this.updateAirPods = function() {
                if(!confirm("Are you sure you want to update these details?")) return;
                debugger;
                update(ref(db, 'airpods/' + self.updateProductName()), {
                    productName: self.updateProductName(),
                    price: self.updatePrice(),
                    description: self.updateDescription(),
                    inStock: self.updateInStock(),
                    quantity: self.updateQuantity(),
                    specs: self.updateSpecs().split(/[\n,]/).map(item => item.trim()),
                    image: self.updateImages().split(',').map(item => item.trim())
                }).then(() => {
                  debugger;
                    alert("AirPods updated successfully");
                    self.clearUpdateFields();
                }).catch((er) => {
                    alert("Error: " + er.message);
                });
            };
            // Function to clear update fields
            self.clearUpdateFields = function() {
                self.updateProductName("");
                self.updatePrice(0);
                self.updateDescription("");
                self.updateInStock(true);
                self.updateQuantity(0);
                self.updateSpecs("");
                self.updateImages("");
            };
        }
        // Apply Knockout bindings
        ko.applyBindings(new ViewModel());
    {/* </script> */}