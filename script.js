/**
 * DORAEMON-THEMED BIRTHDAY SURPRISE FOR HARSHITHA
 * Pure Vanilla JavaScript (No Build Step)
 */

// ==========================================================================
// USER CONFIGURATION: Easily edit recipient name, messages, and music volume
// ==========================================================================
const CONFIG = {
  recipientName: "Harshitha",
  welcomeText: "Hey Harshitha, a surprise is waiting for you!",
  birthdayHeading: "Happy Birthday Harshitha! 🎉",
  personalMessage: `Hoiiiii vaashik bestie 🤝,\n\n Many More  Return of The Dayyyyy🎂🍰🍫🍬🍭🍼🥳,  
Note: Eee oka msg loneee , sai bday reply and Neku  maaaaa andari wishes cheptunam 😁.
 Ipati varakuu makuu nuv ichinantha priority and attention ipati varaki evaru ivaleduu 🥺 .  And nuv Antav gaa maku long messages pedite nachadu anni but  mak alla m kadu , nuv ukee ukke alla pratidaniki intha intha pedha msglu peditenee alla anam anthee 🙂. Mak ipatiki ardham avani muchata enti anteee asalu nduku mem ante anthaaa ekuva nekuu like maaloo nachinaa vishayam entiii ani ? 🤔 . And nuv 3rd person vi m kaduu u always 1 of us ☺️. Mem kuda eee time ki Hyd lo unteee pakka nii dagarikee vachevallamuuu and nii thone time spend chesevallamuu ☹️ but aa chance led gaa ipudu , future lo ite pakka chestamm. Eee Vashik bestie maa tho epatiki undali annii manaspoorthy gaaaaa koorukutu 😌.  Once again Happy Happy Birthdayyyy 🕺🕺🥳🎉 To youuuuu uu uu uu uu uu uu  Harshithaaaaaaaaa aaa aa aa aa aa 😯😯😯😯😯 🫶 ❤️. 

Note from Kar man : Tondagara oka lover ni set cheskooo street kukalani 🐕 kothadaniki panikiostadu🤣🤣🤣

From Soii 😎 :  Happy Birthday Thivari Naga Shiva Harshithaawwwwwwwwwwwwwww 🍭🍫🎂🍰Nuv pratidaniki Sorry luu chepuduu appudu 🙏 , enni sorry luu chepinavoo list undi ani Chepina gaa , epudu ana HYD vachinapudu avvi anni bayatiki tisteee , nuv malla edustavv 😒 anduke mundee cheptuna Beeee care fulllll 😤🫵chuskoww malla asalkee bakkaaa piece vi 😅😅 .  Nuv mak entha connect iyenavoo moonnaaa meeting lo ardham iyendi nakuu , nen just nidagariki vaste ella unatav ani adigina anthee , nii eyes lo direct water a vachinay 🥹 adi okati challuu mem nek entha important anni .  

From Akhil :  Many More Happy returns of the Harshithaaa..🍭🍫🎂 At 1st nuvvu text chesinappudu Edo random ga chesav anukunna but after few days friends avvadam koncham variety ga undhi but feeling good 😊 But intha close aytham ani expect cheyaledu . Whatever it may stay happy Happy Birthday 🎂.

From vamshi : Happy Birthday 🎂 to My Co Director, co worker, manam chala njoy chesam vallatho polchukunte manam movies chudadam meeting lo works complete cheyadam.Ni valla na introvert nature improve ayinndi .But Harshitha Many more happy returns of the day 🎂🎂
Nindu nurellu Sallaga bathuku .. From  Vashik Technologies..♥️🫶 (Company name lo oka part la untavu,ala ne life long kuda untav mathone no worries ♥️🫶)..`,
  musicVolume: 0.4,
  audioPath: "assets/doraemon-telugu.mp3",
  doorPassword: "har she tha 04.11.2005",
  typingSpeedMs: 36,
  // Replace these with your own photos (any filenames inside /images)
  memoryPhotos: [
    {
      src: "images/memory-1.png",
      alt: "Memory 1",
      comment: "Ee photo lo navvu chala bagundi! Super smile! 😄"
    },
    {
      src: "images/memory-2.png",
      alt: "Memory 2",
      comment: "Ee photo lo vibe chala energetic ga undi! Keep it up! 😆"
    },
    {
      src: "images/memory-3.png",
      alt: "Memory 3",
      comment: "Doremon a ravala enti? Ee photo lo nuvve superstar! 🌟"
    },
    {
      src: "images/memory-4.png",
      alt: "Memory 4",
      comment: "Ee memory ki naa taraphu nunchi 100 marks! Buri buri! 📸"
    },
    {
      src: "images/memory-5.png",
      alt: "Memory 5",
      comment: "Action Kamen kuda ee smile mundu fail ayipoyadu! 😎"
    },
    {
      src: "images/memory-6.png",
      alt: "Memory 6",
      comment: "Ee photo lo expression chala natural ga undi! Nice one! 😄"
    },
    {
      src: "images/memory-7.png",
      alt: "Memory 7",
      comment: "Ee photo lo energy chala bavundi! Full josh! ⚡"
    },
    {
      src: "images/memory-8.png",
      alt: "Memory 8",
      comment: "Smile tho ne e roju ni start chey! Chala bagundi! 😊"
    },
    {
      src: "images/memory-9.png",
      alt: "Memory 9",
      comment: "Ee moment chala special ga undi! Superb! 🌟"
    },
    {
      src: "images/memory-10.png",
      alt: "Memory 10",
      comment: "Photo album ki inko manchi memory add ayindi! Cheers! 🎉"
    }
  ],
  memorySeconds: 5
};

// ==========================================================================
// STATE MANAGEMENT & DOM REFERENCES
// ==========================================================================
const state = {
  currentScreenIndex: 0,
  screens: ["screen-welcome", "screen-cake", "screen-cut", "screen-shinchan", "screen-memories", "screen-wish"],
  audioPlaying: false,
  audioContext: null,
  candlesLeft: 5,
  isCakeCut: false,
  audioInitialized: false
};

// DOM References
const bgMusic = document.getElementById("bgMusic");
const wrongPasswordSound = document.getElementById("wrongPasswordSound");
const muteBtn = document.getElementById("muteBtn");
const audioControls = document.getElementById("audioControls");
const soundWave = document.getElementById("soundWave");
const muteLabel = document.getElementById("muteLabel");
const openDoorBtn = document.getElementById("openDoorBtn");
const doorLeaf = document.getElementById("doorLeaf");
const blowBtn = document.getElementById("blowBtn");
const candles = document.querySelectorAll(".candle");
const wishBanner = document.getElementById("wishBanner");
const goToCutBtn = document.getElementById("goToCutBtn");
const cuttingStage = document.getElementById("cuttingStage");
const cakeKnife = document.getElementById("cakeKnife");
const cakeSlicePiece = document.getElementById("cakeSlicePiece");
const cutLine = document.getElementById("cutLine");
const celebrationHeadline = document.getElementById("celebrationHeadline");
const goToShinchanBtn = document.getElementById("goToShinchanBtn");
const startMemoriesBtn = document.getElementById("startMemoriesBtn");
const memoryPhoto = document.getElementById("memoryPhoto");
const memoryPhotoFrame = document.getElementById("memoryPhotoFrame");
const memoryComment = document.getElementById("memoryComment");
const memoryCount = document.getElementById("memoryCount");
const memorySpeech = document.getElementById("memorySpeech");
const memoryDots = document.getElementById("memoryDots");
const memoryPrevBtn = document.getElementById("memoryPrevBtn");
const memoryNextBtn = document.getElementById("memoryNextBtn");
const memoryReveal = document.getElementById("memoryReveal");
const revealCardBtn = document.getElementById("revealCardBtn");
const typedMessageEl = document.getElementById("typedMessage");
const cursorCaret = document.getElementById("cursorCaret");
const replayBtn = document.getElementById("replayBtn");
const namePlaceholder = document.getElementById("namePlaceholder");
const bdayHeadingText = document.getElementById("bdayHeadingText");
const cardNameTarget = document.querySelector(".card-name-target");
const portalWarpOverlay = document.getElementById("portalWarpOverlay");
const welcomeCard = document.querySelector(".welcome-card");
const doorContainer = document.getElementById("doorContainer");
const doorLock = document.getElementById("doorLock");
const doorPassword = document.getElementById("doorPassword");
const unlockDoorBtn = document.getElementById("unlockDoorBtn");
const lockError = document.getElementById("lockError");

// Apply CONFIG text dynamically
if (namePlaceholder) namePlaceholder.textContent = CONFIG.recipientName;
if (bdayHeadingText) bdayHeadingText.textContent = CONFIG.birthdayHeading;
if (cardNameTarget) cardNameTarget.textContent = CONFIG.recipientName;

// ==========================================================================
// WEBAUDIO SOUND FX SYNTHESIZER
// High-quality synthesized chimes, blow gusts, knife slice & bells so it
// works smoothly even if external audio files are missing!
// ==========================================================================
function getAudioContext() {
  if (!state.audioContext) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) {
      state.audioContext = new AudioCtx();
    }
  }
  if (state.audioContext && state.audioContext.state === "suspended") {
    state.audioContext.resume();
  }
  return state.audioContext;
}

function playSynthesizedSound(type) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    if (type === "door") {
      // Gentle chime chord
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);
        gain.gain.setValueAtTime(0.001, ctx.currentTime + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + idx * 0.08 + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.08 + 0.6);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.08);
        osc.stop(ctx.currentTime + idx * 0.08 + 0.65);
      });
    } else if (type === "blow") {
      // Soft air gust
      const bufferSize = ctx.sampleRate * 0.3;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.08));
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(400, ctx.currentTime);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.3);
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start();
    } else if (type === "slice") {
      // Swish slice effect
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.25);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.26);
    } else if (type === "pop") {
      // Soft page-flip blip for the photo album
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(620, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(980, ctx.currentTime + 0.09);
      gain.gain.setValueAtTime(0.07, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.18);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.2);
    } else if (type === "clink") {
      // Soft plate clink as the slice settles
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(2400, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1150, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.2);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.22);
    } else if (type === "bell") {
      // Doraemon brass bell chime
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(1318.51, ctx.currentTime); // E6
      gain.gain.setValueAtTime(0.18, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 1.25);
    }
  } catch (err) {
    // Fail silently without breaking page logic
  }
}

// ==========================================================================
// BACKGROUND MUSIC CONTROLLER
// ==========================================================================
function initMusic() {
  state.audioInitialized = true;
  bgMusic.volume = CONFIG.musicVolume;

  if (!bgMusic.paused) return;
  const playPromise = bgMusic.play();
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        state.audioPlaying = true;
        soundWave.classList.add("playing");
        if (muteLabel) muteLabel.textContent = "Mute";
      })
      .catch(() => {
        state.audioPlaying = false;
        soundWave.classList.remove("playing");
        if (muteLabel) muteLabel.textContent = "Play";
      });
  }
}

function toggleMute() {
  if (!state.audioInitialized) {
    initMusic();
    return;
  }
  if (bgMusic.paused) {
    bgMusic.play().then(() => {
      state.audioPlaying = true;
      soundWave.classList.add("playing");
      if (muteLabel) muteLabel.textContent = "Mute";
    }).catch(() => { });
  } else {
    bgMusic.pause();
    state.audioPlaying = false;
    soundWave.classList.remove("playing");
    if (muteLabel) muteLabel.textContent = "Play";
  }
}

muteBtn.addEventListener("click", toggleMute);

// ==========================================================================
// SCREEN NAVIGATION
// ==========================================================================
function switchScreen(targetIndex) {
  state.screens.forEach((id, idx) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (idx === targetIndex) {
      el.style.display = "block";
      setTimeout(() => {
        el.classList.add("active");
      }, 20);
    } else {
      el.classList.remove("active");
      setTimeout(() => {
        el.style.display = "none";
      }, 400);
    }
  });
  state.currentScreenIndex = targetIndex;
  window.scrollTo(0, 0);
}

// ==========================================================================
// SCREEN 1: PASSWORD LOCK & ANYWHERE DOOR CAMERA FLY-THROUGH INTERACTION
// ==========================================================================
const normalizePassword = (value) => value.toLowerCase().replace(/\s+/g, "");

function unlockDoor() {
  const entered = doorPassword ? doorPassword.value : "";
  if (!entered.trim()) {
    lockError.textContent = "Please enter the secret key 💙";
    doorPassword.focus();
    return;
  }

  if (normalizePassword(entered) !== normalizePassword(CONFIG.doorPassword)) {
    lockError.textContent = "Oops! That's not the secret key. Try again, friend! 💙";
    if (wrongPasswordSound) {
      wrongPasswordSound.currentTime = 0;
      wrongPasswordSound.play().catch(() => { });
    }
    doorPassword.classList.add("shake");
    setTimeout(() => doorPassword.classList.remove("shake"), 450);
    doorPassword.select();
    return;
  }

  lockError.textContent = "";
  doorLock.style.display = "none";
  if (doorContainer) doorContainer.style.display = "";

  openDoorBtn.style.display = "inline-flex";
  openDoorBtn.classList.add("unlock-pop");

  if (audioControls) audioControls.style.display = "block";

  // Start the Doraemon Telugu theme on the unlock user gesture
  initMusic();
  getAudioContext();
  playSynthesizedSound("bell");
  triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 20);

  setTimeout(() => openDoorBtn.classList.remove("unlock-pop"), 600);
}

if (unlockDoorBtn) unlockDoorBtn.addEventListener("click", unlockDoor);
if (doorPassword) {
  doorPassword.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      unlockDoor();
    }
  });
}

openDoorBtn.addEventListener("click", () => {
  if (state.doorOpening) return;
  state.doorOpening = true;
  openDoorBtn.disabled = true;
  openDoorBtn.style.pointerEvents = "none";

  // Ensure background music starts/resumes here too. On replay the password
  // step is skipped, so this is the user gesture that (re)starts the music.
  initMusic();
  getAudioContext();
  playSynthesizedSound("door");

  // Step 1: Smoothly fade out header and buttons, spot-lighting the Anywhere Door
  if (welcomeCard) {
    welcomeCard.classList.add("cinematic-mode");
  }

  // Step 2: Turn knob & swing door open in crisp 3D
  doorLeaf.classList.add("knob-turn");
  setTimeout(() => {
    doorLeaf.classList.add("opened");
    triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.45, 25);
  }, 180);

  // Step 3: Glide camera straight into the open door frame
  setTimeout(() => {
    if (doorContainer) {
      doorContainer.classList.add("door-camera-glide");
    }

    // Portal light seamlessly envelopes viewport as the frame reaches screen edges
    setTimeout(() => {
      if (portalWarpOverlay) {
        portalWarpOverlay.classList.add("active");
      }
    }, 680);

    // Step 4: Arrive seamlessly in Screen 2 (Cake Screen)
    setTimeout(() => {
      switchScreen(1);

      // Softly dissolve the warp overlay to reveal the birthday cake
      setTimeout(() => {
        if (portalWarpOverlay) {
          portalWarpOverlay.classList.remove("active");
        }
        state.doorOpening = false;
      }, 300);
    }, 1150);
  }, 500);
});

// ==========================================================================
// SCREEN 2: 5 CANDLES TAP & BUTTON BLOW
// ==========================================================================
function extinguishCandle(candleEl) {
  if (!candleEl || candleEl.classList.contains("extinguished")) return;
  candleEl.classList.add("extinguished");
  playSynthesizedSound("blow");
  state.candlesLeft = Math.max(0, state.candlesLeft - 1);

  if (state.candlesLeft === 0) {
    onAllCandlesBlown();
  }
}

function onAllCandlesBlown() {
  playSynthesizedSound("bell");
  triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 75);

  setTimeout(() => {
    wishBanner.style.display = "block";
  }, 600);
}

// Tap individual candle to blow out
candles.forEach((candle) => {
  candle.addEventListener("click", () => extinguishCandle(candle));
  candle.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      extinguishCandle(candle);
    }
  });
});

// Blow all candles button
blowBtn.addEventListener("click", () => {
  let delay = 0;
  candles.forEach((c) => {
    if (!c.classList.contains("extinguished")) {
      setTimeout(() => extinguishCandle(c), delay);
      delay += 140;
    }
  });
});

goToCutBtn.addEventListener("click", () => {
  switchScreen(2);
});

// ==========================================================================
// SCREEN 3: CAKE CUTTING INTERACTION
// ==========================================================================
function performCakeCut() {
  if (state.isCakeCut) return;
  state.isCakeCut = true;

  // Knife saws down, cake shudders and the cut crease draws open
  playSynthesizedSound("slice");
  if (cuttingStage) cuttingStage.classList.add("is-cutting");
  cakeKnife.classList.add("slicing");
  cutLine.classList.add("active");

  // Once the blade clears the cake, the slice separates and slides onto the plate
  setTimeout(() => {
    if (cuttingStage) cuttingStage.classList.add("is-sliced");
    cakeSlicePiece.classList.add("sliced");
  }, 850);

  // Gentle clink as the slice touches the plate
  setTimeout(() => playSynthesizedSound("clink"), 1150);

  // Celebration after the slice has settled
  setTimeout(() => {
    playSynthesizedSound("bell");
    triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.5, 90);
    celebrationHeadline.style.display = "block";
  }, 1600);
}

cakeKnife.addEventListener("click", performCakeCut);
const cutCakeBodyEl = document.getElementById("cutCakeBody");
cutCakeBodyEl.addEventListener("click", performCakeCut);
cutCakeBodyEl.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    performCakeCut();
  }
});

// ==========================================================================
// SCREEN 4: SHINCHAN INTRO
// ==========================================================================
goToShinchanBtn.addEventListener("click", () => {
  switchScreen(3);
  playSynthesizedSound("bell");
  triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 40);
});

// ==========================================================================
// SCREEN 5: SHINCHAN'S MEMORY LANE
// ==========================================================================
let memoryIndex = 0;
let memoryAutoTimer = null;

function buildMemoryDots() {
  if (!memoryDots || memoryDots.childElementCount > 0) return;
  CONFIG.memoryPhotos.forEach(() => {
    const dot = document.createElement("span");
    dot.className = "memory-dot";
    memoryDots.appendChild(dot);
  });
}

function scheduleMemoryAuto() {
  clearTimeout(memoryAutoTimer);
  if (memoryIndex >= CONFIG.memoryPhotos.length - 1) return;
  memoryAutoTimer = setTimeout(() => {
    updateMemory(memoryIndex + 1);
  }, CONFIG.memorySeconds * 1000);
}

function restartMemoryAnimation() {
  if (memoryPhotoFrame) {
    memoryPhotoFrame.classList.remove("is-swapping");
    void memoryPhotoFrame.offsetWidth;
    memoryPhotoFrame.classList.add("is-swapping");
  }
  if (memorySpeech) {
    memorySpeech.classList.remove("is-talking");
    void memorySpeech.offsetWidth;
    memorySpeech.classList.add("is-talking");
  }
}

function updateMemory(index) {
  const photos = CONFIG.memoryPhotos;
  const total = photos.length;
  if (!photos.length) return;

  memoryIndex = Math.max(0, Math.min(index, total - 1));
  const item = photos[memoryIndex];
  const isLast = memoryIndex === total - 1;

  memoryPhoto.src = item.src;
  memoryPhoto.alt = item.alt || `Memory ${memoryIndex + 1}`;
  memoryComment.textContent = item.comment;
  memoryCount.textContent = `${memoryIndex + 1} / ${total}`;
  memoryPrevBtn.disabled = memoryIndex === 0;
  memoryNextBtn.disabled = isLast;
  memoryNextBtn.textContent = isLast ? "All memories 💛" : "Next memory ➜";

  memoryDots.querySelectorAll(".memory-dot").forEach((dot, i) => {
    dot.classList.toggle("is-active", i === memoryIndex);
  });

  if (isLast) {
    clearTimeout(memoryAutoTimer);
    memoryAutoTimer = null;
    memoryReveal.classList.add("is-visible");
    revealCardBtn.disabled = false;
  } else {
    memoryReveal.classList.remove("is-visible");
    revealCardBtn.disabled = true;
    scheduleMemoryAuto();
  }

  restartMemoryAnimation();
  playSynthesizedSound("pop");
}

function startMemories() {
  buildMemoryDots();
  switchScreen(4);
  updateMemory(0);
}

startMemoriesBtn.addEventListener("click", startMemories);

memoryPrevBtn.addEventListener("click", () => {
  updateMemory(memoryIndex - 1);
});

memoryNextBtn.addEventListener("click", () => {
  if (memoryIndex < CONFIG.memoryPhotos.length - 1) {
    updateMemory(memoryIndex + 1);
  }
});

revealCardBtn.addEventListener("click", () => {
  clearTimeout(memoryAutoTimer);
  memoryAutoTimer = null;
  switchScreen(5);
  startTypewriterWish();
});

// ==========================================================================
// SCREEN 6: PERSONAL WISH & TYPEWRITER EFFECT
// ==========================================================================
let typewriterRunning = false;

function startTypewriterWish() {
  if (typewriterRunning) return;
  typewriterRunning = true;
  typedMessageEl.textContent = "";
  cursorCaret.style.display = "inline-block";

  const text = CONFIG.personalMessage;
  let index = 0;

  function typeNextChar() {
    if (index < text.length) {
      typedMessageEl.textContent += text.charAt(index);
      index++;
      setTimeout(typeNextChar, CONFIG.typingSpeedMs);
    } else {
      cursorCaret.style.display = "none";
      typewriterRunning = false;
      playSynthesizedSound("bell");
      triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.6, 50);
    }
  }

  typeNextChar();
}

// Replay Button
replayBtn.addEventListener("click", () => {
  // Reset all state
  state.candlesLeft = 5;
  state.isCakeCut = false;
  state.doorOpening = false;
  typewriterRunning = false;

  if (welcomeCard) {
    welcomeCard.classList.remove("cinematic-mode");
  }
  if (doorContainer) {
    doorContainer.classList.remove("door-camera-glide");
  }
  doorLeaf.classList.remove("knob-turn", "opened");
  openDoorBtn.disabled = false;
  openDoorBtn.style.pointerEvents = "auto";
  openDoorBtn.style.opacity = "1";

  if (portalWarpOverlay) {
    portalWarpOverlay.classList.remove("active");
  }

  candles.forEach(c => c.classList.remove("extinguished"));
  wishBanner.style.display = "none";
  if (cuttingStage) cuttingStage.classList.remove("is-cutting", "is-sliced");
  cakeKnife.classList.remove("slicing");
  cutLine.classList.remove("active");
  cakeSlicePiece.classList.remove("sliced");
  celebrationHeadline.style.display = "none";
  typedMessageEl.textContent = "";

  clearTimeout(memoryAutoTimer);
  memoryAutoTimer = null;
  memoryIndex = 0;
  if (memoryDots) memoryDots.innerHTML = "";
  if (memoryPhotoFrame) memoryPhotoFrame.classList.remove("is-swapping");
  if (memorySpeech) memorySpeech.classList.remove("is-talking");
  if (memoryReveal) memoryReveal.classList.remove("is-visible");
  if (memoryNextBtn) {
    memoryNextBtn.disabled = false;
    memoryNextBtn.textContent = "Next memory ➜";
  }
  if (memoryPrevBtn) memoryPrevBtn.disabled = true;
  if (revealCardBtn) revealCardBtn.disabled = true;

  switchScreen(0);
});

// ==========================================================================
// ZERO-DEPENDENCY HTML5 CANVAS CONFETTI ENGINE (60 FPS)
// ==========================================================================
const confettiCanvas = document.getElementById("confettiCanvas");
const ctx = confettiCanvas.getContext("2d");
let confettiParticles = [];
let confettiAnimationId = null;

function resizeCanvas() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

const CONFETTI_COLORS = [
  "#0096E0", // Doraemon Blue
  "#E70012", // Doraemon Red
  "#FFD800", // Bell Yellow
  "#FFFFFF", // Pocket White
  "#FF6B8B", // Soft Rose
  "#4ADE80"  // Mint
];

class ConfettiParticle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 8 + 6;
    this.color = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
    this.speedX = (Math.random() - 0.5) * 12;
    this.speedY = Math.random() * -10 - 4;
    this.gravity = 0.28;
    this.rotation = Math.random() * 360;
    this.rotSpeed = (Math.random() - 0.5) * 8;
    this.opacity = 1;
    this.shape = Math.random() > 0.4 ? "rect" : "circle";
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.speedY += this.gravity;
    this.speedX *= 0.98;
    this.rotation += this.rotSpeed;
    if (this.speedY > 2) {
      this.opacity -= 0.012;
    }
  }

  draw(context) {
    context.save();
    context.globalAlpha = Math.max(0, this.opacity);
    context.fillStyle = this.color;
    context.translate(this.x, this.y);
    context.rotate((this.rotation * Math.PI) / 180);

    if (this.shape === "rect") {
      context.fillRect(-this.size / 2, -this.size / 2, this.size, this.size * 0.7);
    } else {
      context.beginPath();
      context.arc(0, 0, this.size / 2, 0, Math.PI * 2);
      context.fill();
    }
    context.restore();
  }
}

function triggerConfetti(originX, originY, count = 50) {
  for (let i = 0; i < count; i++) {
    confettiParticles.push(new ConfettiParticle(originX, originY));
  }
  if (!confettiAnimationId) {
    renderConfetti();
  }
}

function renderConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettiParticles.forEach((p, idx) => {
    p.update();
    p.draw(ctx);
    if (p.opacity <= 0 || p.y > confettiCanvas.height + 20) {
      confettiParticles.splice(idx, 1);
    }
  });

  if (confettiParticles.length > 0) {
    confettiAnimationId = requestAnimationFrame(renderConfetti);
  } else {
    confettiAnimationId = null;
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  }
}

