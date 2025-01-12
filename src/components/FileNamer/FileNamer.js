import { useState } from 'react';

function FileNamer() {
  const [name, setName] = useState('');
  const [alert, setAlert] = useState(false);

  const validate = (name, event) => {
    if (/\*/.test(name)) {
      event.preventDefault();
      setAlert(true)
      return
    }
      setAlert(false);
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
          }}/>
          <div>
            <button onClick={(event) => validate(name, event)}>Save</button>
            {alert && <div> Forbidden Character:*</div>}
          </div>
        </label>
      </form>
    </div>
  )
}

export default FileNamer;