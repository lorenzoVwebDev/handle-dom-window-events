import { useState } from 'react';

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
    event.preventDefault()
    setBadCharacterAlert(false);
    setAlert(false)
  }

  return (
    <div className="file-namer-wrapper">
      <div className="preview">
        <h2>Preview:</h2>
      </div>
      <form>
        <label>
          <p>Name: </p>
          <input autoComplete="off" type="text" name="name" onChange={(event) => {
            setName(event.target.value);
          }}
          onFocus={()=> {
            setAlert(true);
          }}  
          onBlur={(event)=> {   
            setTimeout(() => {setAlert(false)}, 200)
          }}
          />
          <div>
            <button 
              onClick={(event) => {validate(name, event)
                console.log('hello')}
              }
              onBlur={()=> {setBadCharacterAlert(false)}}  
            >Save</button>
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
        </label>
      </form>
    </div>
  )
}

export default FileNamer;