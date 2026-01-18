const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const posts = [
    {
        "id": "1",
        "title": "Getting Started with React Hooks",
        "shortDesc": "Learn how to use React Hooks to simplify your functional components and manage state effectively without class components.",
        "fullDesc": "React Hooks have revolutionized how we write React components by allowing us to use state and other React features without writing classes. In this comprehensive guide, we'll explore useState, useEffect, useContext, and custom hooks. You'll learn how to manage component state with useState, handle side effects with useEffect, share data across your component tree with useContext, and even create your own reusable custom hooks. We'll cover common pitfalls and best practices to help you write cleaner, more maintainable React code. By the end of this article, you'll be able to refactor class components to functional components with hooks and understand when and how to use each hook effectively in your projects. We'll also discuss how hooks integrate with modern development workflows and testing strategies to ensure your applications remain robust and scalable as they grow in complexity.",
        "image": "https://i.postimg.cc/MZsf74ZW/gerea.jpg",
        "date": "2025-10-02",
        "authorName": "Sarah Johnson",
        "authorEmail": "sarah.johnson@techblog.com",
        "category": ["Programming", "Web Development"]
    },
    {
        "id": "2",
        "title": "The Future of Artificial Intelligence in Healthcare",
        "shortDesc": "Exploring how AI is transforming medical diagnosis, treatment planning, and patient care delivery.",
        "fullDesc": "Artificial Intelligence is making remarkable strides in the healthcare sector, revolutionizing how we approach medical diagnosis, treatment, and patient care. This comprehensive analysis examines AI applications in medical imaging, where machine learning algorithms can detect diseases like cancer with accuracy rivaling human experts. We explore natural language processing systems that can analyze medical records and research papers to suggest treatment options, and predictive analytics that identify patients at risk for various conditions. The article also covers robotic surgery assisted by AI, virtual nursing assistants, and drug discovery accelerated by machine learning. Ethical considerations around patient privacy, algorithm bias, and the doctor-AI relationship are thoroughly discussed. Real-world case studies demonstrate how hospitals and research institutions are implementing these technologies to improve outcomes while reducing costs. Understanding these developments is crucial for healthcare professionals, policymakers, and patients navigating this rapidly evolving landscape.",
        "image": "https://i.postimg.cc/bvTwzDd5/aiinhel.webp",
        "date": "2025-10-08",
        "authorName": "Dr. Michael Chen",
        "authorEmail": "mchen@ai-research.org",
        "category": ["Tech", "Health", "Science"]
    },
    {
        "id": "3",
        "title": "Sustainable Tech: Green Computing Solutions",
        "shortDesc": "How technology companies are reducing environmental impact through energy-efficient designs and practices.",
        "fullDesc": "As digital transformation accelerates, the environmental impact of technology has become a critical concern. This in-depth exploration covers how the tech industry is addressing its carbon footprint through green computing initiatives. We examine energy-efficient data center designs that utilize renewable energy sources and advanced cooling systems. The article discusses the development of low-power processors, sustainable manufacturing processes for electronic devices, and e-waste management strategies. Cloud computing's role in reducing energy consumption through resource sharing is analyzed, along with software optimization techniques that minimize processing requirements. Case studies from major tech companies demonstrate successful implementations of circular economy principles and carbon-neutral operations. The guide also provides practical advice for individuals and businesses looking to reduce their digital environmental impact, from choosing energy-efficient devices to optimizing cloud resource usage. These sustainable practices represent not just environmental responsibility but also significant cost savings and competitive advantages in an increasingly eco-conscious market.",
        "image": "https://i.postimg.cc/MGz0dF4F/greai.jpg",
        "date": "2025-10-15",
        "authorName": "Emma Rodriguez",
        "authorEmail": "emma.rodriguez@greenliving.com",
        "category": ["Tech", "Lifestyle", "Environment"]
    },
    {
        "id": "4",
        "title": "Python for Data Science and Machine Learning",
        "shortDesc": "Essential Python libraries and techniques for data analysis, visualization, and machine learning projects.",
        "fullDesc": "Python has become the dominant language for data science due to its powerful libraries and ease of use. This comprehensive tutorial covers the essential tools every data professional should master. We begin with pandas for data manipulation and cleaning, exploring advanced techniques for handling missing data, merging datasets, and time series analysis. The guide progresses to NumPy for numerical computations and scientific computing, then moves to visualization with matplotlib and seaborn for creating publication-quality graphs. Machine learning receives extensive coverage with scikit-learn for traditional algorithms and TensorFlow/PyTorch for deep learning applications. Practical examples using real-world datasets demonstrate complete workflows from data acquisition to model deployment. You'll learn feature engineering techniques, hyperparameter tuning strategies, and model evaluation methods. The article also covers MLOps practices for maintaining production machine learning systems and ethical considerations in data science projects. These skills are invaluable across industries from finance to healthcare to e-commerce.",
        "image": "https://i.postimg.cc/prjkgnB8/pyds.jpg",
        "date": "2025-10-22",
        "authorName": "David Park",
        "authorEmail": "david.park@datascience.io",
        "category": ["Tech", "Programming", "Data Science"]
    },
    {
        "id": "5",
        "title": "Digital Wellness: Balancing Technology and Mental Health",
        "shortDesc": "Strategies for maintaining mental well-being in an increasingly digital world through mindful tech usage.",
        "fullDesc": "The constant connectivity of modern life presents significant challenges to our mental health and overall well-being. This comprehensive guide explores the intersection of technology and psychology, providing evidence-based strategies for cultivating a healthier relationship with digital devices. We examine the psychological effects of social media, including comparison anxiety and attention fragmentation, and how notification systems hijack our brain's reward pathways. The article presents practical digital detox techniques, from scheduled device-free times to application usage limits and notification management. Mindfulness practices adapted for the digital age help rebuild attention capacity and reduce stress. We also cover the positive potential of technology for mental health, including meditation apps, online therapy platforms, and digital support communities. Workplace strategies for preventing digital burnout and maintaining work-life boundaries in remote settings are discussed. By implementing these approaches, readers can harness technology's benefits while protecting their mental health and reclaiming control over their attention and time.",
        "image": "https://i.postimg.cc/fWYcQZNp/diw.jpg",
        "date": "2025-10-29",
        "authorName": "Lisa Thompson",
        "authorEmail": "lisa.thompson@mindfulwellness.com",
        "category": ["Health", "Lifestyle", "Tech"]
    },
    {
        "id": "6",
        "title": "Building Responsive Web Applications",
        "shortDesc": "Modern techniques for creating websites that work perfectly across all devices from mobile to desktop.",
        "fullDesc": "Responsive web design has evolved from a best practice to an essential requirement in our multi-device ecosystem. This comprehensive guide covers cutting-edge approaches to creating fluid, adaptive web applications that deliver optimal user experiences across smartphones, tablets, laptops, and desktops. We delve deep into modern CSS layout systems including CSS Grid for two-dimensional layouts and Flexbox for one-dimensional interfaces. Advanced media query techniques, responsive typography systems, and container queries for component-level adaptability are thoroughly explained. The article addresses performance optimization strategies for mobile devices, touch interface design principles, and accessibility considerations for responsive designs. Practical examples demonstrate how to build complex responsive layouts that maintain usability and aesthetic integrity across viewports. Progressive enhancement and graceful degradation strategies ensure broad compatibility while leveraging modern browser capabilities. These skills are fundamental for web developers creating future-proof applications that meet today's diverse browsing patterns and device capabilities.",
        "image": "https://i.postimg.cc/ydHNFMbx/res.jpg",
        "date": "2025-11-03",
        "authorName": "Alex Rivera",
        "authorEmail": "alex.rivera@webdev.com",
        "category": ["Programming", "Web Development"]
    },
    {
        "id": "7",
        "title": "Tech-Driven Nutrition: Apps and Gadgets for Healthy Eating",
        "shortDesc": "How technology is helping people make better food choices through apps, wearables, and smart kitchen devices.",
        "fullDesc": "The intersection of technology and nutrition has created powerful tools for supporting healthier eating habits. This comprehensive review examines how mobile applications, wearable devices, and smart kitchen gadgets are transforming nutritional awareness and behavior change. We analyze popular nutrition tracking apps that provide detailed macronutrient and micronutrient analysis, recipe suggestions based on dietary preferences, and progress monitoring toward health goals. Wearable technology that integrates with these apps to provide comprehensive health data is evaluated for accuracy and usefulness. Smart kitchen scales, connected appliances, and food storage systems that reduce waste and simplify healthy cooking are explored. The article also covers emerging technologies like AI-powered meal planners, gut microbiome testing kits, and personalized nutrition based on genetic testing. Practical guidance helps readers select the most appropriate tools for their specific needs and avoid common pitfalls like tracking obsession or data overload. These technological solutions make evidence-based nutrition more accessible and actionable for everyone.",
        "image": "https://i.postimg.cc/90S5BTQ8/ted.png",
        "date": "2025-11-07",
        "authorName": "Dr. James Wilson",
        "authorEmail": "jwilson@nutritionfacts.org",
        "category": ["Health", "Tech", "Lifestyle"]
    },
    {
        "id": "8",
        "title": "Cloud Security and Compliance Best Practices",
        "shortDesc": "Essential security measures and compliance strategies for protecting data in cloud environments.",
        "fullDesc": "As organizations accelerate cloud adoption, robust security practices and regulatory compliance have become critical priorities. This comprehensive guide covers fundamental security principles and advanced protection strategies for cloud infrastructure across IaaS, PaaS, and SaaS models. We examine the shared responsibility model in detail, clarifying which security aspects are managed by cloud providers versus customers. Identity and access management receives extensive coverage, including multi-factor authentication, role-based access control, and privileged access management. Data protection strategies encompass encryption at rest and in transit, key management services, and data loss prevention tools. Network security controls like security groups, virtual private clouds, and web application firewalls are explained with implementation examples. The article addresses compliance frameworks including GDPR, HIPAA, and SOC 2, providing guidance for achieving and maintaining compliance in cloud environments. Real-world case studies demonstrate common security misconfigurations and how to avoid them, while incident response planning ensures preparedness for security events.",
        "image": "https://i.postimg.cc/3w36m9ZT/cloud.webp",
        "date": "2025-11-10",
        "authorName": "Priya Sharma",
        "authorEmail": "priya.sharma@cloudsec.com",
        "category": ["Tech", "Security", "Business"]
    },
    {
        "id": "9",
        "title": "Remote Work Technology Stack for Distributed Teams",
        "shortDesc": "Essential tools and technologies for maintaining productivity and collaboration in remote work environments.",
        "fullDesc": "The shift to distributed work has accelerated the development and adoption of technologies that support remote collaboration and productivity. This comprehensive guide examines the complete technology stack required for effective remote work arrangements. We analyze communication platforms like Slack and Microsoft Teams for real-time messaging, and Zoom and Google Meet for video conferencing with best practices for virtual meetings. Project management tools including Asana, Trello, and Jira help teams coordinate work transparently across time zones. Cloud storage solutions like Google Drive and Dropbox facilitate document sharing and version control. The article also covers specialized tools for virtual whiteboarding, code collaboration, and asynchronous communication that respects focus time. Security considerations for remote access, data protection, and device management are thoroughly addressed. Implementation strategies help organizations select the right tool combinations for their specific needs while avoiding tool fatigue. Case studies demonstrate how companies of various sizes have successfully built remote work infrastructures that maintain productivity, company culture, and employee engagement despite physical distance.",
        "image": "https://i.postimg.cc/wMDZDrZf/rem.avif",
        "date": "2025-11-12",
        "authorName": "Rachel Kim",
        "authorEmail": "rachel.kim@wellnessguide.com",
        "category": ["Tech", "Lifestyle"]
    },
    {
        "id": "10",
        "title": "Blockchain Applications in Supply Chain and Finance",
        "shortDesc": "How blockchain technology is revolutionizing supply chain transparency and financial services beyond cryptocurrency.",
        "fullDesc": "Blockchain technology's potential extends far beyond cryptocurrencies, offering transformative solutions for supply chain management and financial services. This comprehensive analysis explores how distributed ledger technology creates unprecedented transparency and efficiency in global supply chains. We examine real-world implementations that track products from raw materials to end consumers, reducing fraud, improving quality control, and enabling ethical sourcing verification. In financial services, blockchain facilitates faster cross-border payments, reduces settlement times for securities trading, and enables new forms of digital assets. Smart contracts automate complex business agreements while reducing counterparty risk and administrative overhead. The article covers regulatory developments, interoperability challenges, and scalability solutions that address current limitations. Case studies from major corporations and financial institutions demonstrate tangible benefits and implementation lessons. Understanding these applications is essential for business leaders across industries as blockchain technology moves from experimental to operational stages, potentially reshaping global commerce and finance in fundamental ways.",
        "image": "https://i.postimg.cc/KvZJ94Mn/block.png",
        "date": "2025-11-14",
        "authorName": "Marcus Wright",
        "authorEmail": "marcus.wright@blockchaintech.com",
        "category": ["Tech", "Business", "Finance"]
    },
    {
        "id": "11",
        "title": "Fitness Technology: Smart Home Gyms and Wearables",
        "shortDesc": "How smart equipment and wearable technology are transforming home workout experiences and tracking.",
        "fullDesc": "The fitness technology revolution has made sophisticated workout experiences accessible in home environments through smart equipment and advanced wearables. This comprehensive review examines connected fitness platforms like Peloton, Mirror, and Tonal that offer guided workouts with real-time feedback and community features. We analyze smart strength training equipment that adjusts resistance automatically and tracks progress over time. Wearable technology receives extensive coverage, including advanced fitness trackers and smartwatches that monitor heart rate variability, blood oxygen levels, and sleep quality with increasing accuracy. The article explores how these devices integrate with health platforms to provide holistic wellness insights. Practical guidance helps consumers select equipment that matches their fitness goals, space constraints, and budget considerations. We also address privacy concerns with health data collection and strategies for maintaining motivation without becoming overly dependent on technology. These innovations represent a fundamental shift in how people approach fitness, making personalized, data-driven workouts accessible outside traditional gym environments.",
        "image": "https://i.postimg.cc/xdHvjSmd/sma.avif",
        "date": "2025-11-16",
        "authorName": "Jessica Miller",
        "authorEmail": "jessica.miller@fitnesscoach.com",
        "category": ["Health", "Tech", "Lifestyle"]
    },
    {
        "id": "12",
        "title": "The Future of Work: AI and Remote Collaboration",
        "shortDesc": "How artificial intelligence is enhancing remote work capabilities and transforming workplace collaboration.",
        "fullDesc": "The convergence of artificial intelligence and remote work technologies is creating fundamentally new ways of working and collaborating. This extensive analysis examines how AI tools are enhancing remote work experiences through intelligent meeting assistants that transcribe conversations, identify action items, and facilitate participation across time zones. Language translation technologies break down communication barriers in global teams, while AI-powered project management tools predict timelines, allocate resources, and identify potential bottlenecks. The article explores virtual workspace platforms that recreate serendipitous office interactions and AI coaches that provide personalized professional development. We address ethical considerations around algorithmic management, privacy in monitored digital workplaces, and the potential for AI to either augment or replace human roles. Case studies from forward-thinking organizations demonstrate successful implementations and lessons learned. This transformation requires new skills and mindsets from both workers and managers as they navigate increasingly AI-enhanced work environments that prioritize outcomes over physical presence.",
        "image": "https://i.postimg.cc/pTCnyVLx/huai.jpg",
        "date": "2025-11-20",
        "authorName": "Daniel Cooper",
        "authorEmail": "daniel.cooper@workfutures.com",
        "category": ["AI", "Business", "Lifestyle"]
    }
];

// Root route
app.get('/', (req, res) => {
    res.send('HunchFlick in operation!');
});

// Get all posts
app.get('/posts', (req, res) => {
    const sortedPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    res.send(sortedPosts);
});

// Get post by ID
app.get('/posts/:id', (req, res) => {
    const id = req.params.id;
    const post = posts.find(p => p.id === id);
    res.send(post);
});

// Add new post
app.post('/posts', (req, res) => {
    const { title, shortDesc, fullDesc, image, date, authorName, authorEmail, category } = req.body;

    const newPost = {
        id: (posts.length + 1).toString(),
        title,
        shortDesc,
        fullDesc,
        image: image || null,
        date: date || new Date().toISOString().split('T')[0],
        timestamp: new Date().getTime(),
        authorName,
        authorEmail,
        category: category || "Uncategorized"
    };

    // Add to posts array
    posts.push(newPost);
    res.send(newPost);
});

// Delete a post
app.delete('/posts/:id', (req, res) => {
    const id = req.params.id;
    const index = posts.findIndex(p => p.id === id);

    posts.splice(index, 1);
    res.send({ message: 'Post deleted successfully' });
});

// Latest posts
app.get('/latest-posts', (req, res) => {
    const latestPosts = [...posts]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Sort by newest first
        .slice(0, 3);
    res.send(latestPosts);
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});