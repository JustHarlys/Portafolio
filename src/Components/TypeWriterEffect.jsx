import { useEffect, useState } from "react"


function TypeWriterEffect({text, speed, deleteSpeed, loop}) {

  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (isDeleting) {
        setDisplayedText(displayedText.slice(0, -1));
        setIndex(index - 1);
      } else {
        if (index < text.length) {
          setDisplayedText(displayedText + text[index]);
          setIndex(index + 1);
        }
      }

      if (index === text.length) {
        setIsDeleting(true);
      }

      if (index === 0 && isDeleting) {
        setIsDeleting(false);
        if (loop) {
          setIndex(0);
          setDisplayedText('');
        }
      }
    }, isDeleting ? deleteSpeed : speed);


    return () => clearInterval(interval);
  }, [index, text, speed, deleteSpeed, isDeleting, loop, displayedText]);

  return <span className="typewriter-text">{displayedText}</span>;
}

export default TypeWriterEffect