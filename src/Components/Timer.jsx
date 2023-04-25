import { useState, useEffect } from "react";
import moment from "moment";

const Timer = () => {
  const [date, setDate] = useState();
  const formattedDate = moment(date).format('YYYY.MM.DD hh:mm:ss');

  useEffect(() => {
    const id = setInterval(() => {
      setDate(new Date());
    }, 1000);

    console.log('did mount');

    return () => {
      console.log('will unmount')
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    console.log('did update');
  })

  console.log('render');

  return (
    <div className="timer">
      <fieldset>
        <legend>Timer</legend>
        <p>current date and time: {formattedDate}</p>
        {/* <p>current date: {date.toDateString()}</p> */}
      </fieldset>
    </div>
  )
}
export default Timer;