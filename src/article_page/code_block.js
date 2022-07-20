import React, { useState } from "react";
import Lang from "./content"
import "./code_block.css"
import { CopyBlock, dracula } from "react-code-blocks";
const App = () => {
  return (
    <div className="codeblock">
        <CopyBlock
          language='objectivec'
          text={Lang.objectivec}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
    </div>
  );
};
export default App;
