import { useState, useEffect } from "react";
import { Playfair_Display } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import Fireworks from "@fireworks-js/react";
import Image from "next/image";

const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});

// 36 images
const images = [
  "/game-photos/1.avif",
  "/game-photos/2.avif",
  "/game-photos/3.avif",
  "/game-photos/4.avif",
  "/game-photos/5.avif",
  "/game-photos/6.avif",
  "/game-photos/7.avif",
  "/game-photos/8.avif",
  "/game-photos/9.avif",
  "/game-photos/10.avif",
  "/game-photos/11.avif",
  "/game-photos/12.avif",
  "/game-photos/13.avif",
  "/game-photos/14.avif",
  "/game-photos/15.avif",
  "/game-photos/16.avif",
  "/game-photos/17.avif",
  "/game-photos/18.avif",
  "/game-photos/19.avif",
  "/game-photos/20.avif",
  "/game-photos/21.avif",
  "/game-photos/22.avif",
  "/game-photos/23.avif",
  "/game-photos/24.avif",
  "/game-photos/25.avif",
  "/game-photos/26.avif",
  "/game-photos/27.avif",
  "/game-photos/28.avif",
  "/game-photos/29.avif",
  "/game-photos/30.avif",
  "/game-photos/31.avif",
  "/game-photos/32.avif",
  "/game-photos/33.avif",
  "/game-photos/34.avif",
  "/game-photos/35.avif",
  "/game-photos/36.avif",
];

export default function ValentinesProposal() {
  const [step, setStep] = useState(0);
  const [position, setPosition] = useState<{
    top: string;
    left: string;
  } | null>(null);
  const [showFireworks, setShowFireworks] = useState(false);
  const [ifatarAccepted, setIfatarAccepted] = useState(false);

  const getRandomPosition = () => {
    const randomTop = Math.random() * 80;
    const randomLeft = Math.random() * 80;
    return { top: `${randomTop}%`, left: `${randomLeft}%` };
  };

  useEffect(() => {
    if (step < 2) {
      // Change step after 5 seconds
      const timer = setTimeout(() => {
        setStep((prevStep) => prevStep + 1);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleYesClick = () => {
    setShowFireworks(true);
    setStep(3);
  };

  const handleIfatarYes = () => {
    setIfatarAccepted(true);
    setShowFireworks(true);
  };

  const handleIfatarNo = () => {
    setPosition(getRandomPosition());
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.h2
            key="step-0"
            className={`text-4xl font-semibold mb-4 ${playfairDisplay.className}`}
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Congratulations! You have completed the game.
          </motion.h2>
        )}
        {step === 1 && (
          <motion.h2
            key="step-1"
            className={`text-4xl font-semibold mb-4 ${playfairDisplay.className}`}
            transition={{ duration: 3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            I have a surprise for you!
          </motion.h2>
        )}
        {step === 2 && !ifatarAccepted &&(
          <motion.div
            key="step-2"
            transition={{ duration: 3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center"
          >
            {/* Image Grid Background */
              
            }
            <div className="absolute inset-0 grid grid-cols-6 opacity-10">
              {images.slice(0, 36).map((src, index) => (
                <div key={index} className="relative h-full">
                  
                </div>
              ))}
            </div>

            <h2
              className={`text-5xl font-semibold mb-8 ${playfairDisplay.className}`}
            >
              Will you come to Iftar ?
            </h2>
            <Image
              src="/sad_hamster.png"
              alt="Sad Hamster"
              width={200}
              height={200}
            />
            <div className="flex space-x-4 mt-10">
              <button
                className="px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl hover:from-pink-600 hover:to-rose-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={handleIfatarYes}
              >
                Yes, I will! 🥰
              </button>
              <button
                className="px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl hover:from-gray-600 hover:to-gray-700 transform hover:scale-95 transition-all duration-300 shadow-lg"
                style={
                  position
                    ? {
                        position: "absolute",
                        top: position.top,
                        left: position.left,
                      }
                    : {}
                }
                onMouseEnter={() => setPosition(getRandomPosition())}
                onClick={() => setPosition(getRandomPosition())}
              >
                No, I won&apos;t 😢
              </button>
            </div>
          </motion.div>
        )}
        {step === 3 && !ifatarAccepted && (
          <motion.div
            key="step-3-iftar"
            className={`text-4xl font-semibold mb-4 flex flex-col justify-center items-center ${playfairDisplay.className}`}
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-20 -left-20 text-6xl"
              >
                ✨
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-20 -right-20 text-6xl"
              >
                🌹
              </motion.div>
            </div>

            <p className="text-3xl mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-red-400 to-amber-400">
              Will you come to Iftar?
            </p>

            <div className="flex space-x-4 mt-10 relative z-10">
              <button
                className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl hover:from-amber-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={handleIfatarYes}
              >
                Yes, I will! ✨
              </button>
              <button
                className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl hover:from-gray-600 hover:to-gray-700 transform hover:scale-95 transition-all duration-300 shadow-lg"
                style={
                  position
                    ? {
                        position: "absolute",
                        top: position.top,
                        left: position.left,
                      }
                    : {}
                }
                onMouseEnter={() => setPosition(getRandomPosition())}
                onClick={handleIfatarNo}
              >
                No, I won&apos;t 😢
              </button>
            </div>
          </motion.div>
        )}
        {ifatarAccepted && (
          <motion.div
            key="step-4-envelope"
            className="flex flex-col items-center justify-center"
            transition={{ duration: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
          

            {/* Envelope */}
            <motion.div
              className="relative bg-gradient-to-b from-amber-50 to-yellow-50 rounded-lg shadow-2xl overflow-hidden border-2 border-amber-200"
              style={{ width: "500px", maxWidth: "90vw" }}
              animate={{ rotateY: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              {/* Envelope flap */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-amber-200 to-yellow-100 border-b-2 border-amber-300 flex items-center justify-center"
                initial={{ rotateX: 0 }}
                animate={{ rotateX: 20 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="text-4xl"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  💌
                </motion.div>
              </motion.div>

              {/* Main content */}
              <div className="pt-24 pb-8 px-8 text-center relative z-10">
                <motion.h2
                  className={`text-3xl font-bold mb-6 text-amber-900 ${playfairDisplay.className}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  You&apos;re Invited!
                </motion.h2>

                <motion.div
                  className="mb-6 p-4 bg-gradient-to-r from-amber-100 to-orange-50 rounded-lg border border-amber-300"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  <p className="text-lg text-amber-900 font-semibold mb-4">
                    Come with a smile! We will be waiting on
                  </p>
                  <p className="text-2xl font-bold text-amber-800 mb-2">
                    15.03.2026
                  </p>
                  <p className="text-lg text-amber-900">
                    at Iftar time
                  </p>
                </motion.div>

                <motion.div
                  className="mb-8 p-4 bg-gradient-to-r from-orange-100 to-amber-50 rounded-lg border-2 border-orange-300"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1, duration: 0.8 }}
                >
                  <p className="text-2xl font-bold text-orange-800 mb-3">
                    Restaurant MIZAM
                  </p>
                  <motion.a
                    href="https://go.2gis.com/OAxw4"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl"
                  >
                    📍 View Location
                  </motion.a>
                </motion.div>

                <motion.p
                  className="text-amber-800 text-sm italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.8 }}
                >
                  With warmest wishes and looking forward to your presence ❤️
                </motion.p>
              </div>

              {/* Decorative elements inside envelope */}
              <div className="absolute bottom-2 left-4 text-2xl opacity-30">✨</div>
              <div className="absolute bottom-4 right-6 text-3xl opacity-20">🌹</div>
            </motion.div>

            {/* Thank you message */}
            <motion.p
              className={`text-2xl mt-12 text-amber-200 ${playfairDisplay.className}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 1 }}
            >
              Thank you for accepting! ✨
            </motion.p>
          </motion.div>
        )}
        {step === 3 && ifatarAccepted && (
          <motion.div
            key="step-3-original"
            className={`text-4xl font-semibold mb-4 flex flex-col justify-center items-center ${playfairDisplay.className}`}
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Thank you for accepting, I love you! 💕
            <p className="text-sm mt-4">For more information, write me!!! 💌</p>
            <Image
              src="/hamster_jumping.gif"
              alt="Hamster Feliz"
              width={200}
              height={200}
              unoptimized
            />
          </motion.div>
        )}
      </AnimatePresence>

      {showFireworks && (
        <div className="absolute w-full h-full">
          <Fireworks
            options={{
              autoresize: true,
            }}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>
      )}
    </div>
  );
}
