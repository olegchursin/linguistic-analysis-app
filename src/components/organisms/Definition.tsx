interface IDefinition {
  readonly definition: any;
}

const Definition: React.FC<IDefinition> = ({ definition }) => {
  let component;
  if (!definition) {
    component = <div>Define a term</div>;
  } else {
    component = (
      <div>
        {definition.map((def, index) => {
          return (
            <div key={index}>
              <h3>{def.text}</h3>
              <p>
                {def.pos} &#9642; / {def.ts} /
              </p>
              <div>
                {def.tr.map((tr, index) => {
                  return (
                    <div key={index}>
                      <div>
                        <h5>{tr.text}</h5>
                        {tr.syn ? (
                          <div>
                            Synonyms:
                            {tr.syn.map((synonym, index) => {
                              return <span key={index}> {synonym.text}, </span>;
                            })}
                          </div>
                        ) : (
                          <span></span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="tag-powered-by">
          <p>
            Powered by:{' '}
            <a href="http://api.yandex.com/dictionary">Yandex.Dictionary</a>
          </p>
        </div>
      </div>
    );
  }

  return <>{component}</>;
};

export default Definition;
