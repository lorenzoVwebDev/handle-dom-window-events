import { useState, useEffect } from 'react';

function FileNamer() {
  const [name, setName] = useState('');
  const [alert, setAlert] = useState(false);
  const [badCharacterAlert, setBadCharacterAlert] = useState(false);

  const validate = (name, event) => {
    if (/\*/.test(name)) {
      event.preventDefault();
      setBadCharacterAlert(true)
      setAlert(true)
      return
    }
    setBadCharacterAlert(false);
    setAlert(false)
  }

  useEffect(() => {
    const handleWindowClick = () => setAlert(false)
    if (alert) {
      window.addEventListener('click', () => {
        handleWindowClick()
      })
    } else {
      window.removeEventListener('click', handleWindowClick());
    }
  }, [alert, setAlert])

  return (
    <div className="file-namer-wrapper">
      <div className="preview">
        <h2>Insert Your File's Name Here</h2>
      </div>
      <form method="post" onSubmit={(event) => {
        event.preventDefault()
        window.alert(`Thank You for requesting that file "${event.target[0].value}"`)
      }}>
        <label>
          <p>Name: </p>
          <input autoComplete="off" type="text" name="name" onChange={(event) => {
            setName(event.target.value);
          }}
/*           onFocus={()=> {
            setAlert(true);
          }}  
          onBlur={(event)=> {   
            setTimeout(() => {setAlert(false)}, 200)
          }} */
          />
        </label>
          <div className="information-wrapper">
            <button 
              className="information"
              onClick={(event)=> {
                event.stopPropagation();
                setAlert(true);
              }}
              type="button"
            >
              more information
            </button>
            {alert && <div>
                <span role='img' aria-label='allowed'>✅</span>
                Alphanumeric Characters
                <br />
                <span role="img" aria-label="not-allowed">⛔️</span>*
              </div>}
            {badCharacterAlert && <div>
                <span>You inserted a bad character ⚠️</span>
              </div>}
          </div>
        <button 
            onClick={(event) => {validate(name, event)}}
            onBlur={()=> {setBadCharacterAlert(false)}}  
        >Save</button>
      </form>
    </div>
  )
}

export default FileNamer;