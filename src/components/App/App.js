import { GitRepositoryHeader } from '../common';
import FileNamer from '../FileNamer/FileNamer';

function App() {
  return (
    <>
      <GitRepositoryHeader/>
      <div className="file-namer-container">
        <FileNamer/>
      </div>
    </>
  );
}

export default App;
