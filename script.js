

// ===== Mobile Menu Toggle =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        const isOpen = hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isOpen.toString());
    });

    // Close menu when nav link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
}

// ===== Technical Project Datasheets Database =====
const projectDatasheets = [
    {
        title: "Optimized 4-bit Arithmetic Logic Unit",
        type: "CMOS Microchip Design",
        specs: [
            { label: "Technology Node", val: "SkyWater 130nm / GPDK 90nm" },
            { label: "Logic Families", val: "CMOS, PTL (Pass Transistor), TGL (Transmission Gate)" },
            { label: "Operating Voltage", val: "1.2V Core Supply" },
            { label: "Static Power", val: "4.82 nW" },
            { label: "Dynamic Power", val: "142.6 μW @ 850 MHz" },
            { label: "Propagation Delay", val: "1.84 ns (Critical Path)" },
            { label: "Layout Cell Area", val: "1,420 μm²" }
        ],
        summary: "This research project presents an optimized 4-bit ALU targeting high-speed, energy-constrained microchips. By implementing critical carry-generation paths using Transmission Gate Logic (TGL), the propagation delay was reduced by 23% compared to standard CMOS configurations. Schematic design and pre-layout simulations were completed using Cadence Virtuoso, and physical implementation was verified with the SkyWater 130nm open-source PDK."
    },
    {
        title: "Plasmonic Ring Counter for Glucose Monitoring",
        type: "Non-Invasive Diagnostic Photonics",
        specs: [
            { label: "Wavelength Spectrum", val: "632.8 nm - 650 nm (He-Ne / Diode)" },
            { label: "waveguide Type", val: "Metal-Insulator-Metal (MIM) Slot" },
            { label: "Detection Sensitivity", val: "1.42 RIU / mmol/L" },
            { label: "Measurement Range", val: "40 to 400 mg/dL" },
            { label: "Signal Processing", val: "MATLAB ANN (Artificial Neural Network)" },
            { label: "Optical Source Power", val: "1.5 mW Input" }
        ],
        summary: "A novel optoelectronic bio-sensor that utilizes Surface Plasmon Resonance (SPR) inside nano-ring counter waveguides. Shifts in the resonant wavelength are mapped to blood glucose indices. An integrated artificial neural network (ANN) algorithm processes the optical intensity signatures to produce noise-resilient diagnostics, achieving a 0.1 mg/dL detection threshold without physical blood extraction."
    },
    {
        title: "ECG Rural Healthcare Monitoring System",
        type: "IoT Bio-Telemetric System",
        specs: [
            { label: "Core Controller", val: "Atmega328P (8-bit RISC)" },
            { label: "Analog Front-End", val: "AD8232 Single-Lead Heart Rate Monitor" },
            { label: "Wireless Protocol", val: "GSM/GPRS SIM900A Class 10" },
            { label: "Communication Link", val: "MQTT / HTTP API Callbacks" },
            { label: "Signal SNR", val: "34 dB (Active Bandpass Filter)" },
            { label: "Power Autonomy", val: "72 Hours (3.7V 2200mAh Lithium Cell)" }
        ],
        summary: "Designed to address cardiac health disparities in isolated rural areas. The system registers clinical-grade ECG signals, performs bandpass and notch filtering to eliminate 50Hz grid noise, and packages heart metrics. If abnormalities (e.g. tachycardia, arrhythmia) are detected, cellular alert threads are immediately dispatched to remote cardiac hospitals via MQTT channels."
    },
    {
        title: "Smart Autonomous Driverless Vehicle",
        type: "Embedded RTOS Navigation System",
        specs: [
            { label: "Processor Core", val: "STM32F407VET6 ARM Cortex-M4 (168MHz)" },
            { label: "Operating System", val: "FreeRTOS (Preemptive Scheduling)" },
            { label: "Obstacle Sensors", val: "Ultrasonic Array + IR Proximity" },
            { label: "Telemetry Protocol", val: "RF 433 MHz / Bluetooth SPP Link" },
            { label: "Reaction Latency", val: "12 ms (Sensor ISR to Motor Duty)" },
            { label: "Safety Checks", val: "Tyre Pressure, Temp, Battery Protection" }
        ],
        summary: "A cyber-physical vehicle system designed to test autonomous safety layers. Utilizing FreeRTOS, tasks are prioritized to ensure collision avoidance runs as a critical, high-priority thread. Features continuous CAN/USART telemetry to report environmental factors, battery thermal metrics, and wheel load balances to a centralized dashboard."
    },
    {
        title: "Heart Rate & SpO₂ Monitoring System",
        type: "Wearable PPG Diagnostics",
        specs: [
            { label: "Processor Block", val: "ATmega328 Core Interface" },
            { label: "PPG Sensor Model", val: "MAX30102 High-Sensitivity Pulse Oximetry" },
            { label: "Interface Standard", val: "I2C Fast-Mode (400 kbps)" },
            { label: "LED Source", val: "Red (660nm) & Infrared (880nm)" },
            { label: "Display Driver", val: "SSD1306 OLED via I2C" },
            { label: "System Variance", val: "±2% Variance vs Clinical Devices" }
        ],
        summary: "A wearable device combining reflection photoplethysmography (PPG) with fast micro-controller mathematics. By reading raw red and infrared light absorption profiles, heart rate and blood oxygen saturation (SpO₂) are extracted. Features local warning thresholds and real-time wave drawing on the integrated OLED panel."
    },
    {
        title: "Satellite Communication Link Simulator",
        type: "RF Communication Link Modeler",
        specs: [
            { label: "Software Engine", val: "MATLAB R2024a Compiler" },
            { label: "Frequency Band", val: "Ku-Band (12.5 GHz Downlink)" },
            { label: "Orbit Configuration", val: "Geostationary (GEO) Orbit" },
            { label: "Modulation Format", val: "QPSK (Quadrature Phase Shift Keying)" },
            { label: "Attenuation Factors", val: "Rain Fade (ITU-R), Gas Absorption, Path Loss" },
            { label: "Target BER", val: "10⁻⁶ Threshold with Viterbi Rate 1/2 FEC" }
        ],
        summary: "A mathematical link budget model designed to calculate transmission losses and receiver gains for satellite networks. Incorporates dynamic weather fade models to estimate communications link downtime. Simulates coding gain vs carrier-to-noise ratios, providing an end-to-end performance graph of digital modulations in orbital communication lines."
    },
    {
        title: "Helical Antenna Design",
        type: "RF Antenna Simulation — MATLAB",
        specs: [
            { label: "Antenna Type", val: "Axial-Mode Helical (Endfire)" },
            { label: "Simulation Tool", val: "MATLAB Antenna Toolbox" },
            { label: "Operating Frequency", val: "1.6 GHz – 2.4 GHz Band" },
            { label: "Turns (N)", val: "10 Turns, 0.25λ Pitch" },
            { label: "Gain", val: "~14.5 dBi Directional" },
            { label: "HPBW", val: "34° Half-Power Beamwidth" }
        ],
        summary: "A full MATLAB antenna toolbox simulation of a helical antenna optimized for satellite frequency bands. The study compares gain, radiation resistance, and polarization ellipticity across pitch angles. Impedance matching networks are modeled for VSWR < 2 across the designed passband."
    },
    {
        title: "Chaff Dispersion Simulation",
        type: "Defense Electronics — ECM Research at DRDL",
        specs: [
            { label: "Organization", val: "Defence Research & Development Laboratory (DRDL/DRDO)" },
            { label: "Simulation Tool", val: "MATLAB Computational Model" },
            { label: "Domain", val: "Naval Electronic Counter-Measures (ECM)" },
            { label: "Model Type", val: "Dynamic Particle Dispersion + RCS Analysis" },
            { label: "Validation", val: "MATLAB Verification against DRDL reference data" },
            { label: "Duration", val: "Oct 2024 – Mar 2025" }
        ],
        summary: "Developed during the DRDL Research Internship, this project implements MATLAB computational models simulating chaff cloud dispersion behavior and its effectiveness in radar cross-section reduction for naval ECM applications. Dynamic dispersion trajectories and temporal RCS attenuation profiles were validated against laboratory reference data."
    }
];

// ===== Modal Logic =====
const projectModal = document.getElementById('projectModal');
const closeProjectModal = document.getElementById('closeProjectModal');
const modalProjectTitle = document.getElementById('modalProjectTitle');
const modalProjectBody = document.getElementById('modalProjectBody');

// Open project datasheet modal
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const id = card.getAttribute('data-project');
        if (id !== null && projectDatasheets[id]) {
            const data = projectDatasheets[id];
            
            // Build the specification table
            let specsHtml = '';
            data.specs.forEach(spec => {
                specsHtml += `
                    <tr class="spec-row">
                        <td class="spec-td-label">${spec.label}</td>
                        <td class="spec-td-val">${spec.val}</td>
                    </tr>
                `;
            });
            
            modalProjectTitle.textContent = data.title;
            modalProjectBody.innerHTML = `
                <div class="spec-tech-block">
                    <div class="spec-info-card">
                        <div class="spec-info-title">System Type</div>
                        <div class="spec-info-val">${data.type}</div>
                    </div>
                    <div class="spec-info-card">
                        <div class="spec-info-title">Layout ID</div>
                        <div class="spec-info-val">PVSDD-SPEC-0${parseInt(id)+1}</div>
                    </div>
                </div>
                
                <h4 class="spec-table-title">Performance Spec sheet</h4>
                <table class="spec-table">
                    <tbody>
                        ${specsHtml}
                    </tbody>
                </table>
                
                <h4 class="spec-table-title">Engineering Summary</h4>
                <p class="spec-summary">${data.summary}</p>
            `;
            
            if (projectModal) {
                projectModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Lock background scroll
            }
        }
    });
});

if (closeProjectModal && projectModal) {
    closeProjectModal.addEventListener('click', () => {
        projectModal.classList.remove('active');
        document.body.style.overflow = '';
    });
}

// Lightbox Modal Logic
const lightboxModal = document.getElementById('lightboxModal');
const closeLightboxModal = document.getElementById('closeLightboxModal');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');

document.querySelectorAll('.certificate-card').forEach(card => {
    card.addEventListener('click', (e) => {
        const certPath = card.getAttribute('data-cert');
        const caption = card.getAttribute('data-caption');
        
        if (certPath && lightboxModal && lightboxImg && lightboxCaption) {
            lightboxImg.src = certPath;
            lightboxCaption.textContent = caption;
            lightboxModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

if (closeLightboxModal && lightboxModal) {
    closeLightboxModal.addEventListener('click', () => {
        lightboxModal.classList.remove('active');
        document.body.style.overflow = '';
    });
}

// Close modals when clicking outside container
window.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        projectModal.classList.remove('active');
        document.body.style.overflow = '';
    }
    if (e.target === lightboxModal) {
        lightboxModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ===== Technical Terminal Typing Animation =====
const typingText = document.querySelector('.typing-text');
if (typingText) {
    const commands = [
        'PrimeMOS Research & Solutions > Innovating Silicon Architectures.',
        'Transforming Digital Visions into Silicon Reality.',
        'Strategic Consultation: Custom ASIC / FPGA flow integration... [OK]',
        'Semiconductor R&D: SkyWater 130nm CMOS IP block verification...',
        'Defense R&D Collaboration: MATLAB modeling & simulation systems...',
        'Democratizing VLSI design workflows and chip ecosystem mentorship.'
    ];
    
    let commandIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    
    function runTerminalType() {
        const text = commands[commandIdx];
        
        if (!isDeleting) {
            typingText.textContent = text.substring(0, charIdx + 1);
            charIdx++;
            
            if (charIdx === text.length) {
                isDeleting = true;
                setTimeout(runTerminalType, 3500); // Wait before backspacing
                return;
            }
        } else {
            typingText.textContent = text.substring(0, charIdx - 1);
            charIdx--;
            
            if (charIdx === 0) {
                isDeleting = false;
                commandIdx = (commandIdx + 1) % commands.length;
            }
        }
        
        const speed = isDeleting ? 15 : 35;
        setTimeout(runTerminalType, speed);
    }
    
    runTerminalType();
}

// ===== Timeline Tab Switching =====
const timelineTabs = document.querySelectorAll('.timeline-tab');
const timelineContents = document.querySelectorAll('.timeline-content');

timelineTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        timelineTabs.forEach(t => t.classList.remove('active'));
        timelineContents.forEach(content => content.classList.remove('active'));
        
        tab.classList.add('active');
        const tabName = tab.getAttribute('data-tab');
        const targetTimeline = document.getElementById(`${tabName}-timeline`);
        if (targetTimeline) {
            targetTimeline.classList.add('active');
        }
    });
});

// ===== Research Publications Filtration =====
const pubFilterBtns = document.querySelectorAll('.pub-filter-btn');
const pubCards = document.querySelectorAll('.publication-card');

pubFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        pubFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filterVal = btn.getAttribute('data-filter');
        
        pubCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filterVal === 'all' || category === filterVal) {
                card.style.display = 'flex';
                // Trigger quick fade-in
                card.style.opacity = '0';
                card.style.transform = 'translateY(10px)';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ===== Scroll Animations =====
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const pageObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            if (entry.target.id === 'skills') {
                pageObserver.unobserve(entry.target);
            }
        }
    });
}, observerOptions);

// ===== Dynamic Silicon Wafer Glow Interaction =====
const waferGlow = document.getElementById('waferGlow');
if (waferGlow) {
    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        // Update the radial gradient pivot to follow the mouse dynamically
        waferGlow.style.background = `
            radial-gradient(circle at ${x}% ${y}%, rgba(0, 242, 254, 0.08) 0%, transparent 45%),
            radial-gradient(circle at 80% 40%, rgba(16, 185, 129, 0.04) 0%, transparent 40%),
            radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.04) 0%, transparent 40%)
        `;
    });
}

// Observe project cards, certificate cards, publication cards, skill section, and testimonials
document.querySelectorAll('.project-card, .certificate-card, .publication-card, .die-block, .testimonial-card, #skills').forEach(el => {
    if (el.id !== 'skills') {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    }
    pageObserver.observe(el);
});

// ===== Stats Counter Animation =====
const statNumbers = document.querySelectorAll('.stat-number');
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            let current = 0;
            const increment = target / 40;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    entry.target.textContent = target + '+';
                    clearInterval(timer);
                } else {
                    entry.target.textContent = Math.floor(current);
                }
            }, 40);
            statObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(el => statObserver.observe(el));



// ===== Contact Form — Formspree Integration =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.textContent;
        
        btn.textContent = 'Transmitting...';
        btn.disabled = true;
        
        const formData = new FormData(contactForm);
        
        try {
            const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });
            
            if (response.ok) {
                btn.textContent = '✓ Message Received!';
                btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                contactForm.reset();
            } else {
                btn.textContent = '✗ Error — Try Email Directly';
                btn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
            }
        } catch (err) {
            btn.textContent = '✗ Network Error';
            btn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
        }
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            btn.disabled = false;
        }, 4000);
    });
}

// ===== Smooth Scroll for Local Anchors =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#home') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===== Active Nav Link Scroll Sync =====
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            currentSectionId = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === currentSectionId) {
            link.classList.add('active');
        }
    });
    
    // Display scroll-to-top button
    if (scrollPos > 400) {
        scrollTopBtn.style.display = 'flex';
        setTimeout(() => { scrollTopBtn.style.opacity = '1'; }, 10);
    } else {
        scrollTopBtn.style.opacity = '0';
        setTimeout(() => { if (scrollTopBtn.style.opacity === '0') scrollTopBtn.style.display = 'none'; }, 300);
    }
});

// ===== Floating Scroll to Top button setup =====
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<span class="material-symbols-outlined">arrow_upward</span>';
scrollTopBtn.className = 'scroll-top';
scrollTopBtn.style.opacity = '0';
scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

console.log('Semiconductor Portfolio Systems Active.');
