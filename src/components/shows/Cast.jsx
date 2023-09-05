const Cast = ({ cast }) => {
  return (
    <div>
      {cast.map((item) => {
        return (
          <div key={item.person.id}>
            <div>
              <img
                src={
                  item.person.image
                    ? item.person.image.medium
                    : "/image-not-found.png"
                }
                alt={item.person.name}
              />
            </div>

            <div>
              {item.person.name} | {item.character.name}{" "}
              {item.voice && "(Voiceover)"}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cast;
