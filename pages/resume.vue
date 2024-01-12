<script setup>
useHead({
  title: 'Resume',
})
</script>

<template>
<article class="resume active" data-page="resume">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.resume') }}
      </h2>
    </header>

<section class="timeline">
  <h2 class="timeline-text">Professional Experience</h2>
  <ol class="timeline-list">
    <li class="timeline-item">
      <h4 class="h4 timeline-item-title">
        SCHNEIDER ELECTRIC
      </h4>
      <span>April 2023 - August 2023</span>
      <p class="timeline-item-desc">
        Lattes / Montpellier, France
      </p>
      <p class="timeline-text">
        Intern | Customer Project & Services
      </p>
      <p class="timeline-text">
        - Developed a C# WPF application for a Test Assistant, allowing the creation and validation of general test scenarios, with the possibility of adding custom automations based on customer needs.
      </p>
      <p class="timeline-text">
        - Skills: C#, WPF, Windows Forms, Azure DevOps, Git
      </p>
    </li>

    <li class="timeline-item">
      <h4 class="h4 timeline-item-title">
        VIZZIA (FRENCH STARTUP FIGHTING WASTE WITH AI)
      </h4>
      <span>June 2021 - September 2021</span>
      <p class="timeline-item-desc">
        Paris, France
      </p>
      <p class="timeline-text">
        R&D Engineering Intern
      </p>
      <p class="timeline-text">
        - Developed Vizzia’s first versions of AI-based "waste fighting surveillance cameras" (a currently marketed product) by writing parts of the ESP32 firmware, improving integration with AWS, and prototyping mechanical and electrical assemblies.
      </p>
      <p class="timeline-text">
        - Skills: Ubuntu, GitHub, AWS, Python, C++, Solidworks CAD, 3D Printing FDM, PCB Design, Soldering.
      </p>
    </li>

    <!-- Add more professional experiences here -->

  </ol>

  <h2 class="timeline-text">Projects</h2>
  <ol class="timeline-list">
    <li class="timeline-item">
      <h4 class="h4 timeline-item-title">
        ANNUAL PROJECTS: DRONELAB / NATURAL LANGUAGE PROCESSING
      </h4>
      <span>September 2022 - June 2024</span>
      <p class="timeline-item-desc">
        Paris, France
      </p>
      <p class="timeline-text">
        Software Developer
      </p>
      <p class="timeline-text">
        - Building a drone platform and hardware abstraction layer for quadcopters swarm control using Crazyswarm and ROS for an API to a Unity simulation.
      </p>
      <p class="timeline-text">
        - Built an LSTM, fine-tuned a transformer (MPNet), and created an API to access NLP models hosted on a WLAN for a Unity game.
      </p>
      <p class="timeline-text">
        - Skills: C#, Python, ROS, Neural networks, LSTM, autoencoder, transformers, Ubuntu, GitHub, Python, Unity, game server networks.
      </p>
    </li>

    <li class="timeline-item">
      <h4 class="h4 timeline-item-title">
        PERSONAL DATABASE PROJECTS
      </h4>
      <span>July 2022 - June 2023</span>
      <p class="timeline-item-desc">
        Paris, France
      </p>
      <p class="timeline-text">
        Software Developer
      </p>
      <p class="timeline-text">
        - Developed and created an SQL database accessible in C#. Built and developed a MongoDB server and a Flutter application to access my 100GB database on a separate server.
      </p>
      <p class="timeline-text">
        - Skills: Ubuntu, GitHub, C#, C++, SQL, Python, Docker, Flutter, MongoDB
      </p>
    </li>

    <!-- Add more projects here -->

  </ol>
</section>


<section class="timeline">
  <!-- Your timeline entries here -->
</section>

<section class="skill">
  <ul class="skills-list content-card">
    <li class="skills-item">
      <div class="title-wrapper">
        <h5 class="h5 timeline-text">PROGRAMMING</h5>
      </div>
      <div class="skill-progress-bg">
        <div class="skill-progress-fill" style="width: 90%;"></div>
      </div>
      <p class="timeline-text">C#</p>
      <div class="skill-progress-bg">
        <div class="skill-progress-fill" style="width: 80%;"></div>
      </div>
      <p class="timeline-text">Python</p>
      <div class="skill-progress-bg">
        <div class="skill-progress-fill" style="width: 80%;"></div>
      </div>
      <p class="timeline-text">C++</p>
      <div class="skill-progress-bg">
        <div class="skill-progress-fill" style="width: 70%;"></div>
      </div>
      <p class="timeline-text">SQL</p>
      <div class="skill-progress-bg">
        <div class="skill-progress-fill" style="width: 60%;"></div>
      </div>
      <p class="timeline-text">Java</p>
      <div class="skill-progress-bg">
        <div class="skill-progress-fill" style="width: 40%;"></div>
      </div>
      <p class="timeline-text">Assembly</p>
    </li>

    <li class="skills-item">
      <div class="title-wrapper">
        <h5 class="h5 timeline-text">LANGUAGES</h5>
      </div>
      <div class="skill-progress-bg">
        <div class="skill-progress-fill" style="width: 100%;"></div>
      </div>
      <p class="timeline-text">English</p>
      <div class="skill-progress-bg">
        <div class="skill-progress-fill" style="width: 100%;"></div>
      </div>
      <p class="timeline-text">French</p>
      <div class="skill-progress-bg">
        <div class="skill-progress-fill" style="width: 80%;"></div>
      </div>
      <p class="timeline-text">Croatian</p>
      <div class="skill-progress-bg">
        <div class="skill-progress-fill" style="width: 30%;"></div>
      </div>
      <p class="timeline-text">Spanish</p>
    </li>

    <li class="skills-item">
      <div class="title-wrapper">
        <h5 class="h5 timeline-text">TOOLS/PLATFORMS</h5>
      </div>
      <div class="skill-progress-bg">
        <div class="skill-progress-fill" style="width: 90%;"></div>
      </div>
      <p class="timeline-text">Git</p>
      <div class="skill-progress-bg">
        <div class="skill-progress-fill" style="width: 80%;"></div>
      </div>
      <p class="timeline-text">Docker</p>
      <div class="skill-progress-bg">
        <div class="skill-progress-fill" style="width: 70%;"></div>
      </div>
      <p class="timeline-text">Kubernetes</p>
      <div class="skill-progress-bg">
        <div class="skill-progress-fill" style="width: 60%;"></div>
      </div>
      <p class="timeline-text">Pytorch</p>
      <div class="skill-progress-bg">
        <div class="skill-progress-fill" style="width: 50%;"></div>
      </div>
      <p class="timeline-text">MongoDB</p>
      <div class="skill-progress-bg">
        <div class="skill-progress-fill" style="width: 40%;"></div>
      </div>
      <p class="timeline-text">LATEX</p>
      <div class="skill-progress-bg">
        <div class="skill-progress-fill" style="width: 40%;"></div>
      </div>
      <p class="timeline-text">AWS</p>
    </li>

  </ul>
</section>



  </article>
</template>
