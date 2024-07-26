<template>
  <div class="home">
    <!-- Hero Section -->
    <v-container style="margin-top: 70px;">
      <v-row align="center">
        <v-col cols="12" md="6" data-aos="fade-right">
          <div class="hero-image-container">
            <v-img
              :src="require('../assets/picture(2).jpg')"
              class="hero-image my-3"
              contain
              height="600"
              width="800"
              alt="Profile Picture"
            />
          </div>
        </v-col>
        <v-col cols="12" md="6" class="text-md-left" style="place-content: center;" data-aos="fade-left">
          <h2 class="greeting">Hello, I'm Kent Joshua</h2>
          <h1 class="display-4">
            <span :class="['typewriter', currentTitleClass]">{{ currentTitle }}</span>
          </h1>
          <p class="introduction">
            Hello! I am Kent Joshua, a first-year college student with a passion for web design and development. I specialize in creating responsive and visually appealing websites that offer excellent user experiences. My expertise includes HTML, CSS, JavaScript, and various frameworks. I am committed to continuous learning and enhancing my skills in emerging technologies.
          </p>
          <v-btn color="#A7121D" class="mt-4" outlined>ABOUT ME</v-btn>
        </v-col>
      </v-row>
    </v-container>

    <!-- Skills Section -->
    <v-container class="skills-section py-12" style="margin-top: 30px;">
      <v-row>
        <v-col cols="12" class="text-center mb-6" data-aos="fade-up">
          <h2 class="section-title" style="margin: auto;">My Skills and Assets</h2>
          <p class="section-description">Skills that make me a proficient web developer.</p>
          <v-btn color="#fff" outlined>DETAILED VIEW</v-btn>
        </v-col>
        <v-col cols="12" md="4" v-for="skill in skills" :key="skill.title" data-aos="zoom-in-up">
          <v-card :color="skill.color" dark flat class="skill-card">
            <v-card-text class="text-center">
              <v-icon :size="40" :color="skill.iconColor">{{ skill.icon }}</v-icon>
              <h3 class="skill-title">{{ skill.title }}</h3>
              <p class="skill-description">{{ skill.description }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Projects Section -->
    <v-container class="projects-section py-12">
      <v-row>
        <v-col cols="12" class="text-center mb-6" data-aos="fade-up">
          <h2 class="section-title">Featured Projects</h2>
          <p class="section-description">Here are some of the projects I've worked on recently.</p>
          <v-btn color="#fff" outlined>VIEW ALL</v-btn>
        </v-col>
        <v-col cols="12" md="6" v-for="project in projects" :key="project.title" data-aos="flip-left">
          <v-card color="#1c1c1c" dark flat class="project-card">
            <v-img :src="project.image" class="project-image"></v-img>
            <v-card-title class="project-title">{{ project.title }}</v-card-title>
            <v-card-text class="project-description">{{ project.description }}</v-card-text>
            <v-card-actions>
              <v-btn text style="background-color: #A7121D;">KNOW MORE</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Contact Section -->
    <v-container class="contacts-section py-12">
      <v-row>
        <v-col cols="12" class="text-center mb-6" data-aos="fade-up">
          <h2 class="section-title">Contact Me</h2>
          <p class="section-description">Feel free to reach out to me using the details below.</p>
        </v-col>

        <v-col cols="12" md="12" class="mx-auto" data-aos="fade-up">
          <v-card color="#1c1c1c" dark flat class="contact-card pa-4">
            <v-list>
              <!-- Email -->
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-email</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="contact-title">Email</v-list-item-title>
                  <v-list-item-subtitle>
                    <a href="mailto:kent.joshua@example.com" class="contact-link">kentjoshuaolimberio@gmail.com</a>
                    <p class="contact-description">Feel free to send me a message anytime. I respond to emails within 24 hours.</p>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <!-- Phone -->
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-phone</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="contact-title">Phone</v-list-item-title>
                  <v-list-item-subtitle>
                    <a href="tel:+09682031670" class="contact-link">0968-2031-670</a>
                    <p class="contact-description">For urgent matters, feel free to call or send a text message.</p>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <!-- Location -->
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-map-marker</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="contact-title">Location</v-list-item-title>
                  <v-list-item-subtitle>Metro Manila, Philippines</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <!-- LinkedIn -->
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-linkedin</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="contact-title">LinkedIn</v-list-item-title>
                  <v-list-item-subtitle>
                    <a href="https://www.linkedin.com/in/kent-joshua-olimberio-5452222aa/" target="_blank" class="contact-link">linkedin.com/in/kentjoshua</a>
                    <p class="contact-description">Connect with me on LinkedIn for professional updates and networking.</p>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  data () {
    return {
      skills: [
        {
          title: 'HTML & CSS',
          description: 'Proficient in creating responsive layouts and modern designs.',
          icon: 'fab fa-html5',
          iconColor: 'orange',
          color: '#1c1c1c'
        },
        {
          title: 'JavaScript',
          description: 'Experienced in writing clean and efficient JavaScript code.',
          icon: 'fab fa-js-square',
          iconColor: 'yellow',
          color: '#A7121D'
        },
        {
          title: 'Vue.js',
          description: 'Skilled in building dynamic and interactive web applications with Vue.js.',
          icon: 'fab fa-vuejs',
          iconColor: 'green',
          color: '#1c1c1c'
        },
        {
          title: 'Node.js',
          description: 'Experienced in building backend services with Node.js.',
          icon: 'fab fa-node',
          iconColor: 'green',
          color: '#A7121D'
        },
        {
          title: 'Git & GitHub',
          description: 'Very proficient in version control using Git and GitHub.',
          icon: 'fab fa-github',
          iconColor: 'black',
          color: '#1c1c1c'
        },
        {
          title: 'UI/UX Design',
          description: 'Adept at designing user-friendly interfaces and experiences.',
          icon: 'fas fa-pencil-ruler',
          iconColor: 'blue',
          color: '#A7121D'
        },
        {
          title: 'PHP',
          description: 'Very Skilled in server-side scripting and Backend with PHP.',
          icon: 'fab fa-php',
          iconColor: 'violet',
          color: '#1c1c1c'
        },
        {
          title: 'C++',
          description: 'Proficient in system and application programming with C++.',
          icon: 'fab fa-cuttlefish',
          iconColor: 'blue',
          color: '#A7121D'
        },
        {
          title: 'Figma',
          description: 'Experienced in designing interfaces and prototypes with Figma.',
          icon: 'fab fa-figma',
          iconColor: 'purple',
          color: '#1c1c1c'
        },
        {
          title: 'Java',
          description: 'Very Experienced in developing applications and GUI\'s with Java.',
          icon: 'fab fa-java',
          iconColor: 'red',
          color: '#A7121D'
        },
        {
          title: 'Bootstrap',
          description: 'Proficient in building responsive websites with Bootstrap.',
          icon: 'fab fa-bootstrap',
          iconColor: 'indigo',
          color: '#1c1c1c'
        },
        {
          title: 'Python',
          description: 'Beginner experience with Machine Learning and Data Analysis.',
          icon: 'fab fa-python',
          iconColor: 'blue',
          color: '#A7121D'
        }
      ],
      projects: [
        {
          title: 'Foreign Document Request System',
          description: 'A web application that allows users to request and manage foreign documents efficiently.',
          image: require('../assets/picture(3).png')
        },
        {
          title: 'PyriTech Store',
          description: 'An e-commerce platform for buying and selling tech gadgets with a user-friendly interface.',
          image: require('../assets/picture(4).png')
        },
        {
          title: 'Calculator',
          description: 'A modern, web-based calculator application with advanced functionalities.',
          image: require('../assets/picture(5).png')
        },
        {
          title: 'Business Website',
          description: 'A professional website designed for showcasing a business and its services.',
          image: require('../assets/picture(6).png')
        }
      ],
      currentTitle: '',
      titles: ['Web Designer', 'Full Stack Developer'],
      currentTitleIndex: 0,
      isTyping: true,
      typingSpeed: 150, // Speed in milliseconds
      erasingSpeed: 150, // Speed in milliseconds
      pauseDuration: 2000 // Pause duration before starting erase
    }
  },
  mounted () {
    this.typeTitle()
  },
  beforeDestroy () {
    clearTimeout(this.typingTimeout)
    clearTimeout(this.erasingTimeout)
  },
  methods: {
    typeTitle () {
      const title = this.titles[this.currentTitleIndex]
      this.currentTitle = ''
      this.isTyping = true
      this.typeEffect(title, 0)
    },
    typeEffect (title, index) {
      if (index < title.length) {
        this.currentTitle += title.charAt(index)
        this.typingTimeout = setTimeout(() => {
          this.typeEffect(title, index + 1)
        }, this.typingSpeed)
      } else {
        this.isTyping = false
        this.typingTimeout = setTimeout(() => {
          this.eraseEffect(title, title.length - 1)
        }, this.pauseDuration)
      }
    },
    eraseEffect (title, index) {
      if (index >= 0) {
        this.currentTitle = title.substring(0, index)
        this.erasingTimeout = setTimeout(() => {
          this.eraseEffect(title, index - 1)
        }, this.erasingSpeed)
      } else {
        this.currentTitleIndex = (this.currentTitleIndex + 1) % this.titles.length
        this.typeTitle()
      }
    }
  },
  computed: {
    currentTitleClass () {
      return this.isTyping ? 'typing' : 'erasing'
    }
  }
}
</script>

<style scoped>
.hero-image-container {
  position: relative;
  border-radius: 20px;
}

.hero-image {
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%);
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%);
}

.skills-section, .projects-section, .contacts-section {
  background-color: #111111;
}

.text-md-left {
  text-align: left;
}

.greeting {
  color: #A7121D;
}

.introduction, .skill-description, .section-description, .project-description {
  color: #d3d3d3;
}

.section-title, .skill-title, .project-title {
  color: white;
}

.skill-card, .project-card, .contact-card {
  border-radius: 8px;
}

.project-image {
  border-radius: 8px 8px 0 0;
    /* mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.17) 0%, rgba(0, 0, 0, 0.049) 100%);
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%); */
}

.v-btn {
  margin-top: 16px;
}

/* Typewriter animation */
@keyframes type {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink {
  50% { border-color: transparent; }
}

.typewriter {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid #A7121D; /* Cursor color */
  animation: type 9s steps(30, end), blink 0.75s step-end infinite;
}

.hidden {
  display: none;
}

</style>
