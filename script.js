//----------------------1ERE SECTION---------------------------------//

//Animation de rotation photo

function rotateImg(){
  photo1.style.transform = "rotate3d(1, 1, 1, 360deg)";
  photo2.style.transform = "rotate3d(1, 1, 1, 360deg)";
  photo3.style.transform = "rotate3d(1, 1, 1, 360deg)";
  photo4.style.transform = "rotate3d(1, 1, 1, 360deg)";
  photo5.style.transform = "rotate3d(1, 1, 1, 360deg)";
  photo6.style.transform = "rotate3d(1, 1, 1, 360deg)";
  photo7.style.transform = "rotate3d(1, 1, 1, 360deg)";
  photo8.style.transform = "rotate3d(1, 1, 1, 360deg)";
  photo9.style.transform = "rotate3d(1, 1, 1, 360deg)";

  console.log("test");
}


// Animation de chemin avec un danseur

gsap.to(".dancer", {
  duration: 10,
  motionPath: {
    path: "#motionPath path",
    align: "#motionPath path",
    autoRotate: true,
    alignOrigin: [0.5, 0.5]
  },
  ease: "none"
})

// Enchainement d'animation pour la grille
const portraitsTimeline = gsap.timeline({
    scrollTrigger:{
      trigger:".grid",
      markers: false,
      start:"top 10%",
      end: "bottom 70%",
      scrub: 1

    }
})

// Animation et mouvement vers le bas de la 1ere colonne d'images

portraitsTimeline.to(".column-1",{
    duration: 7,
    y: 100,
    
    onStart: rotateImg()
})

// Animation et mouvement vers le bas de la 2eme colonne d'images

portraitsTimeline.to(".column-2",{
    duration: 7,
    y: 100,
      onStart: rotateImg()

})

// Animation et mouvement vers le bas de la 3eme colonne d'images

portraitsTimeline.to(".column-3",{
    duration: 7,
    y: 100,
    onStart: rotateImg()

})

//----------------------2EME SECTION---------------------------------//

// Effet de zoom de texte au scroll

const timeline = gsap.timeline({
  // la partie ScrollTrigger avec l'ancrage
  scrollTrigger: {
    trigger: ".container-mobile",  
    start: "top top",
    // on peut ici régler le 3000 suivant ce qu'on souhaite
    end: "+=3000 bottom",
    scrub: 1,
    markers: false,
    pin: true,
  }
})

// d'abord, on fait un zoom sur le titre
timeline.to(".zoom h2", {
  scale: 2
})

// puis, on fait un fondu
timeline.to(".zoom", {
  opacity: 0
})

// Animation de la tablette en 2 etapes
const tabletTimeline = gsap.timeline({
  scrollTrigger:{
      trigger:"#mobile-1",
      markers: false,
      start:"top 60%",
      end: "bottom 20%",
      scrub: 1

    }})
// 1ere etape = Mouvement du haut vers le bas
    tabletTimeline.fromTo("#mobile-1",{
      y:-300,
    },
    {
      y: 0
    }
    )

// 2eme etape = Mouvement de gauche à droite

    tabletTimeline.fromTo("#mobile-1",{
      x:-150,
    },
    {
      x: 0
    }
    )

// Animation de l'iphone en 2 etapes

    const iphoneTimeline = gsap.timeline({
  scrollTrigger:{
      trigger:"#mobile-2",
      markers: false,
      start:"top 60%",
      end: "bottom 20%",
      scrub: 1

    }})

    
    // 1ere etape = Mouvement du haut vers le bas
    iphoneTimeline.fromTo("#mobile-2",{
      y:-300,
    },
    {
      y: 0
    }
    )

    // 2eme etape = Mouvement de droite à gauche
    iphoneTimeline.fromTo("#mobile-2",{
      x:150,
    },
    {
      x: 0
    }
    )

// Animation de changement de couleur d'arrière plan avec le scroll
const timeline2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".container-mobile",
    start: "center 70%",
    end: "center 60%",
    scrub: true,
    // markers: true
  }
});

timeline2.to("#tabletIphone", {  backgroundColor: "#FFFFFF",color:"#000000", scrub: 1,ease: "power1.inOut"})


//Mouvement de gauche à droite du 1er icone bleu
gsap.fromTo
(".blue-icon-first",
{
  duration: 8,
  x:-150,
},
{
    x:800,
  scrollTrigger: {
    trigger: ".blue-icon-first",
    // afficher les marqueurs de ScrollTrigger
    // utile pour débugger
    markers: false,
    // position des marqueurs
    start:"top 10%",
    end: "bottom 90%",
    scrub: 1
  },

}
);

//Mouvement de droite à gauche du 2eme icone bleu

gsap.fromTo
(".blue-icon-second",
{
  duration: 8,
  x:800,
},
{
    x:-200,
  scrollTrigger: {
    trigger: ".blue-icon-second",
    // afficher les marqueurs de ScrollTrigger
    // utile pour débugger
    markers: false,
    // position des marqueurs
    start:"top 10%",
    end: "bottom 80%",
    scrub: 1
  },

}
);

// Mouuvement vers le haut pour le texte sous le titre

gsap.to(".text", {
  duration: 6,
    y: 30,
  
  // Ce qui change par rapport à avant
  scrollTrigger: {
    // l'élément déclencheur
    // en général le même qui est animé à la 1ère ligne
    trigger: ".text",
    // reste du code scroll trigger
    // ..
    start:"top 60%",
    end: "bottom 30%",
    scrub: 1
  }
})

// Mouvement de gauche à droite du boutton Apple Store
gsap.fromTo ("#icon1",{
 
  
  x:-600
},
{
    x:0,
  scrollTrigger: {
    trigger: "#mobile",
    // afficher les marqueurs de ScrollTrigger
    // utile pour débugger
    markers: false,
    // position des marqueurs
    start:"top 10%",
    end: "bottom 90%",
    scrub: 1
  },

}
);

// Mouvement de gauche à droite du boutton Google Play
gsap.fromTo ("#icon2",{
 
  x: 600

},

{
    x:0,
  scrollTrigger: {
    trigger: "#mobile",
    // afficher les marqueurs de ScrollTrigger
    // utile pour débugger
    markers: false,
    // position des marqueurs
    start:"top 10%",
    end: "bottom 90%",
    scrub: 1
  },

}
);

