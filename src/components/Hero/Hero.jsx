import { motion } from 'framer-motion'
import '../Hero/hero.scss'

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChild: 0.1,
        },
    },
    scrollButton : {
        opacity: 0,
        y: 10,
        transition: {
            duration:2,
            repeat: Infinity,
        },
    },
};

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat:Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};


function Hero() {
  return (
    <div className='hero'>
        <div className='wrapper'>
            <motion.div className='textContainer' variants = { textVariants } initial = "initial" animate = "animate">
                <motion.h1 variants = { textVariants } >ARUN SURESH</motion.h1>
                <motion.h2 variants = { textVariants } >FRONT-END DEVELOPER</motion.h2>
                <motion.p variants = { textVariants } > Hi, I'm <span className="highlight">Arun Suresh</span>, a passionate
                Front-End Developer with a love for crafting beautiful and
                responsive web applications. I specialize in
                <span className="highlight"> HTML, CSS, JavaScript, React</span>,
                and modern front-end frameworks.</motion.p>
                <motion.div className='buttons' variants = { textVariants } >
                    <motion.button type='button' variants = { textVariants } >Learn More...</motion.button>
                    <motion.button type='button' variants = { textVariants } >Contact Me</motion.button>
                </motion.div>
                <motion.img   variants = { textVariants } animate = "scrollButton" src='/scroll.png' alt='scroll-down' />
            </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants = {sliderVariants} initial = "initial" animate = "animate">
            Front-end Developer Graphics Designer
        </motion.div>
        <div className='imageContainer'>
            <img src="/Hero.png"/>
        </div>
    </div>
    
  )
}

export default Hero