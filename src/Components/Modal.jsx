import { useEffect } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  backDrop: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  modal: {
    width: 400,
    backgroundColor: 'white',
  }
});

const Modal = ({ onClose }) => {
  const classes = useStyles();

  const handleKeyDown = (event) => {
    event.preventDefault();
    if (event.key === 'Escape') {
      onClose();
    }
  };
  
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className={classes.backDrop} tabIndex={-1}>
      <div className={classes.modal}>
        <h3>My awesome modal window</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa rerum quis cum excepturi sequi nihil praesentium, facilis, ducimus, nesciunt natus possimus corrupti exercitationem? Natus cum neque quis ipsa repudiandae assumenda quisquam quod corporis impedit veritatis? Cumque assumenda reiciendis vel nam, omnis minima, eveniet voluptas inventore dolores at repellendus veniam quas?</p>
        <button onClick={onClose}>X</button>
      </div>
    </div>
  )
}

export default Modal;