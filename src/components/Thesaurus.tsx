interface IThesaurus {
  readonly definition: any;
}

const Thesaurus: React.FC<IThesaurus> = ({ definition }) => {
  let thesaurus;
  if (!definition) {
    thesaurus = <div>Define a term</div>;
  } else {
    const synonymsArr = [];
    if (!!definition.length) {
      const tr = definition[0] && definition[0].tr;
      const synObjArr = tr.map(el => {
        if (el.syn) {
          return el.syn.map(syn => syn);
        } else {
          return '';
        }
      });

      synObjArr.forEach(obj => {
        if (obj) {
          obj.forEach(el => synonymsArr.push(el));
        }
      });
    }

    thesaurus = (
      <div>
        {synonymsArr.map(syn => {
          return (
            <div className="keyword-result" key={syn.text}>
              {syn.text}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div>
      <h3>Thesaurus</h3>
      <p>
        Words that can be interchanged for the original word in the same
        context.
      </p>
      {thesaurus}
    </div>
  );
};

export default Thesaurus;
