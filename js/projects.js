document.addEventListener('DOMContentLoaded', function() {
    const projects = [

        {
            image: 'assets/florencia-florist.png',
            title: 'Web Development',
            description: 'Florencia Florist',
            techStacks: ['Html', 'CSS', 'GSAP','LocoMotive-Scroll'],
            sourceCodeLink: 'https://github.com/ntehseen/FlorenciaFlorist',
            liveLink: 'https://ntehseen.github.io/FlorenciaFlorist/',
            boxShadowColor: 'rgb(208, 174, 61)' // Example of a different color
        },
        {
            image: 'assets/iamnacho.png',
            title: 'Web Development',
            description: 'I Am Nacho Mama',
            techStacks: ['HTML', 'CSS', 'JavaScript, Bootstrap'],
            sourceCodeLink: 'https://github.com/ntehseen/IAmNachoMama',
            liveLink: 'https://ntehseen.github.io/IAmNachoMama/',
            boxShadowColor: 'rgba(255, 80, 0, 0.264)' // Example of another different color
        },

        {
            image: 'assets/verticle-slider.png',
            title: 'JavaScript',
            description: 'Vertical Slider',
            techStacks: ['Javascript', 'CSS','Html'],
            sourceCodeLink: 'https://github.com/ntehseen/Vertical-Slider',
            liveLink: 'https://ntehseen.github.io/Vertical-Slider/',
            boxShadowColor: 'rgba(90,139,158)' // Example of a different color
        },
        {
            image: 'assets/Layman.png',
            title: 'JavaScript',
            description: 'Layman Hall Theatre',
            techStacks: ['Javascript', 'CSS','Html'],
            sourceCodeLink: 'https://github.com/ntehseen/The-Layman-Hall-Theater',
            liveLink: 'https://ntehseen.github.io/The-Layman-Hall-Theater/',
            boxShadowColor: 'rgba(255, 80, 0, 0.264)' // Example of a different color
        },
        {
            image: 'assets/calc-js.png',
            title: 'JavaScript',
            description: 'Simple JavaScript Calculator',
            techStacks: ['JavaScript'],
            sourceCodeLink: 'https://github.com/ntehseen/JavaScript-Calculator',
            liveLink: 'https://ntehseen.github.io/JavaScript-Calculator/',
            boxShadowColor: 'rgba(100, 100,190)' // Example of a different color
        },
        {
            image: 'assets/blurry.jpg',
            title: 'Javascript',
            description: 'Blurry Loader',
            techStacks: ['Html', 'CSS', 'JavaScript'],
            sourceCodeLink: 'https://github.com/ntehseen/Blurry-Loader',
            liveLink: 'https://ntehseen.github.io/Blurry-Loader/',
            boxShadowColor: 'rgba(78, 176, 244)' // Example of a different color
        },
        // Add more projects as needed
        {
            image: 'assets/motor-veh.png',
            title: 'Data Science/Analytics',
            description: 'Motor Vehicle Collisions in New York City Analysis Dashboard',
            techStacks: ['Python', 'Pandas', 'Matplotlib'],
            sourceCodeLink: 'https://github.com/ntehseen/Motor-Vehicle-Collisions-in-New-York-City-Analysis-Dashboard',
            liveLink: 'https://project1.com',
            boxShadowColor: 'rgba(52, 51, 100)' // Add desired box shadow color
        },
        {
            image: 'assets/cred_fraud.jpg',
            title: 'Generative AI',
            description: 'Data Balancing : Fraud Detection using Generative Adversarial Networks (GANs)',
            techStacks: ['Python', 'TensorFlow', 'GANs'],
            sourceCodeLink: 'https://github.com/ntehseen/Data-Balancing-with-Gen-AI-Credit-Card-Fraud-Detection',
            liveLink: 'https://project2.com',
            boxShadowColor: 'rgba(138, 223, 224)' // Example of a different color
        },
        {
            image: 'assets/pre-sal-rev.png',
            title: 'Machine Learning',
            description: 'Predict Sales Revenue with scikit-learn',
            techStacks: ['Pandas', 'Numpy', 'Sk-learn'],
            sourceCodeLink: 'https://github.com/ntehseen/-Predict-Sales-Revenue-with-scikit-learn',
            liveLink: 'https://github.com/ntehseen/-Predict-Sales-Revenue-with-scikit-learn',
            boxShadowColor: 'rgba(195, 175, 250)' // Example of a different color
        },
        {
            image: 'assets/Emotion-AI-Detection.png',
            title: 'Deep Learning/ Computer Vision',
            description: 'Facial Expression Classification Using Residual Neural Nets',
            techStacks: ['Pandas', 'Tensorflow', 'Keras', 'Neural Network','CV2'],
            sourceCodeLink: 'https://github.com/ntehseen/Facial-Expression-Classification-Using-Residual-Neural-Nets',
            liveLink: 'https://github.com/ntehseen/Facial-Expression-Classification-Using-Residual-Neural-Nets',
            boxShadowColor: 'rgba(237, 164, 109)' // Example of a different color
        },


    ];

    const carouselContent = document.getElementById('carouselContent');
    const chunkSize = 3;
    for (let i = 0; i < projects.length; i += chunkSize) {
        const chunk = projects.slice(i, i + chunkSize);
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        if (i === 0) carouselItem.classList.add('active');

        const row = document.createElement('div');
        row.classList.add('d-flex', 'justify-content-center', 'flex-wrap');

        chunk.forEach(project => {
            const card = document.createElement('div');
            card.classList.add('card', 'glass-card', 'mx-4');
            card.style.setProperty('--card-shadow-color', project.boxShadowColor);
            card.innerHTML = `
                <img src="${project.image}" class="card-img-top" alt="${project.title}">
                <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text-d">${project.description}</p>
                    <hr class="hr-line">
                    <p class="card-text"><strong class="tech-stacks">Tech Stacks</strong> <br> ${project.techStacks.join(', ')}</p>
                    <div class="btn-group">
                        <a href="${project.sourceCodeLink}" class="btn btn-primary" target="_blank">Source Code</a>
                        <a href="${project.liveLink}" class="btn btn-secondary" target="_blank">Live Link</a>
                    </div>
                </div>
            `;
            row.appendChild(card);
        });

        carouselItem.appendChild(row);
        carouselContent.appendChild(carouselItem);
    }
});