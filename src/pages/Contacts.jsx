
const  Contacts = () => {
  const handleClick = () => console.log('hello');
  return (
    <div className="contacts">
      <p>Contacts</p>
      <button onClick={handleClick}>push me</button>
    </div>
  )
}

export default Contacts;